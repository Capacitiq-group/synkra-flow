import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type TakealotAuth = {
  api_key: string;
  seller_id: string;
};

const BASE = 'https://seller-api.takealot.com/v1';

export async function takealotRequest<T>(params: {
  auth: TakealotAuth;
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number>;
}): Promise<T> {
  const request: HttpRequest = {
    method: params.method,
    url: `${BASE}${params.path}`,
    headers: {
      Authorization: `Key ${params.auth.api_key}`,
      'X-Seller-Id': params.auth.seller_id,
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
