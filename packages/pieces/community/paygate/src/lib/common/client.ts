import { createHash } from 'node:crypto';
import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type PaygateAuth = {
  payweb_id: string;
  encryption_key: string;
  sandbox?: boolean;
};

function baseUrl(sandbox: boolean): string {
  return sandbox
    ? 'https://staging.paygate.co.za'
    : 'https://secure.paygate.co.za';
}

/**
 * PayGate payment hash.
 *
 * Concatenate the field values in this exact order, append the encryption
 * key, MD5 the whole string. Each line is terminated by a newline.
 *
 *   PAYGATE_ID
 *   REFERENCE
 *   AMOUNT (in cents)
 *   CURRENCY
 *   RETURN_URL
 *   TRANSACTION_DATE
 *   LOCALE
 *   COUNTRY
 *   EMAIL
 *   encryption_key
 */
export function paygateHash(
  fields: Record<string, string | number>,
  encryptionKey: string,
): string {
  const order = [
    'PAYGATE_ID',
    'REFERENCE',
    'AMOUNT',
    'CURRENCY',
    'RETURN_URL',
    'TRANSACTION_DATE',
    'LOCALE',
    'COUNTRY',
    'EMAIL',
  ];
  let concat = '';
  for (const key of order) {
    const value = fields[key];
    concat += (value === undefined || value === null ? '' : String(value)) + '\n';
  }
  concat += encryptionKey;
  return createHash('md5').update(concat).digest('hex');
}

export async function paygateRequest<T>(params: {
  auth: PaygateAuth;
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
