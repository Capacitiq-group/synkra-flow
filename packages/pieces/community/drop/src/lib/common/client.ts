import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type DropAuth = {
  api_key: string;
  environment?: string;
};

function baseUrl(env: string): string {
  return env === 'sandbox'
    ? 'https://sandbox-api.drop.co.za/v1'
    : 'https://api.drop.co.za/v1';
}

export async function dropRequest<T>(params: {
  auth: DropAuth;
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number>;
}): Promise<T> {
  const request: HttpRequest = {
    method: params.method,
    url: `${baseUrl(params.auth.environment ?? 'live')}${params.path}`,
    headers: {
      Authorization: `Bearer ${params.auth.api_key}`,
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
