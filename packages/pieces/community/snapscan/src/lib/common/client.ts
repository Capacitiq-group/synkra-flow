import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type SnapScanAuth = {
  merchant_id: string;
  api_key: string;
};

const BASE = 'https://pos.snapscan.io/merchant/api/v1';

export async function snapscanRequest<T>(params: {
  auth: SnapScanAuth;
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number>;
}): Promise<T> {
  const credentials = Buffer.from(
    `${params.auth.merchant_id}:${params.auth.api_key}`,
  ).toString('base64');

  const request: HttpRequest = {
    method: params.method,
    url: `${BASE}${params.path}`,
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
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
