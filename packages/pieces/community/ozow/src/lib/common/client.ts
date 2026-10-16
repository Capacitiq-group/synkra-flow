import { createHash } from 'node:crypto';
import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type OzowAuth = {
  site_code: string;
  private_key: string;
  sandbox?: boolean;
};

function baseUrl(sandbox: boolean): string {
  return sandbox
    ? 'https://stagingapi.ozow.com'
    : 'https://api.ozow.com';
}

/**
 * Ozow hash algorithm.
 *
 * Concatenate the following values in this exact order, then append the
 * private key, then SHA512 the whole string. Lowercase, no separators:
 *
 *   SiteCode
 *   CountryCode
 *   CurrencyCode
 *   Amount (in cents, integer)
 *   TransactionReference
 *   BankReference
 *   Optional1
 *   Optional2
 *   Optional3
 *   Optional4
 *   Optional5
 *   Customer
 *   CancelUrl
 *   ErrorUrl
 *   SuccessUrl
 *   NotifyUrl
 *   IsTest
 *   PrivateKey
 */
export function ozowHash(
  fields: Record<string, string | number | boolean>,
  privateKey: string,
): string {
  const order = [
    'SiteCode',
    'CountryCode',
    'CurrencyCode',
    'Amount',
    'TransactionReference',
    'BankReference',
    'Optional1',
    'Optional2',
    'Optional3',
    'Optional4',
    'Optional5',
    'Customer',
    'CancelUrl',
    'ErrorUrl',
    'SuccessUrl',
    'NotifyUrl',
    'IsTest',
  ];
  let concat = '';
  for (const key of order) {
    const value = fields[key];
    concat += value === undefined || value === null ? '' : String(value);
  }
  concat += privateKey;
  return createHash('sha512').update(concat).digest('hex');
}

export async function ozowRequest<T>(params: {
  auth: OzowAuth;
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number>;
}): Promise<T> {
  const url = `${baseUrl(!!params.auth.sandbox)}${params.path}`;
  const request: HttpRequest = {
    method: params.method,
    url,
    headers: { 'Content-Type': 'application/json' },
    queryParams: params.query
      ? Object.fromEntries(
          Object.entries(params.query).map(([k, v]) => [k, String(v)]),
        )
      : undefined,
    body: params.body,
  };
  const res = await httpClient.sendRequest<T>(request);
  return res.body;
}
