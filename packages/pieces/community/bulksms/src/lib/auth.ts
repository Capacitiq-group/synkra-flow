import { HttpMethod, httpClient } from '@activepieces/pieces-common';

export async function bulksmsRequest<T>(params: {
  username: string;
  password: string;
  method: HttpMethod;
  path: string;
  body?: unknown;
}): Promise<T> {
  const auth = Buffer.from(`${params.username}:${params.password}`).toString('base64');
  const response = await httpClient.sendRequest<T>({
    method: params.method,
    url: `https://bulksms.2way.co.za/eapi/submission${params.path}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${auth}`,
    },
    body: params.body,
  });
  return response.body;
}
