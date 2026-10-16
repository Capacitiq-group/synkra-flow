import { HttpMethod, httpClient } from '@activepieces/pieces-common';

export async function netcashRequest<T>(params: {
  apiKey: string;
  serviceKey: string;
  accountNumber: string;
  method: HttpMethod;
  path: string;
  body?: unknown;
}): Promise<T> {
  const response = await httpClient.sendRequest<T>({
    method: params.method,
    url: `https://api.netcash.co.za${params.path}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${params.apiKey}`,
      'X-Service-Key': params.serviceKey,
    },
    body: params.body,
  });
  return response.body;
}
