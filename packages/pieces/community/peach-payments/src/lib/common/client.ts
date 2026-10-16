import { httpClient, HttpMethod, HttpRequest } from '@activepieces/pieces-common';

export type PeachAuth = {
  entity_id: string;
  access_token: string;
  sandbox?: boolean;
};

function baseUrl(sandbox: boolean): string {
  return sandbox
    ? 'https://testapi.peachpayments.com/v2'
    : 'https://api.peachpayments.com/v2';
}

export async function peachRequest<T>(params: {
  auth: PeachAuth;
  method: HttpMethod;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, string | number>;
}): Promise<T> {
  const request: HttpRequest = {
    method: params.method,
    url: `${baseUrl(!!params.auth.sandbox)}${params.path}`,
    headers: {
      Authorization: `Bearer ${params.auth.access_token}`,
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
