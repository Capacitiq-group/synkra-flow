import { HttpMethod, httpClient } from '@activepieces/pieces-common';

/**
 * BulkSMS JSON REST API client.
 * Base URL: https://api.bulksms.com/v1
 * Auth: HTTP Basic with token_id as username, token_secret as password.
 * Docs: https://www.bulksms.com/developer/json/v1/
 */
export async function bulksmsRequest<T>(params: {
  tokenId: string;
  tokenSecret: string;
  method: HttpMethod;
  path: string;
  body?: unknown;
  query?: Record<string, string>;
}): Promise<T> {
  const basic = Buffer.from(
    `${params.tokenId}:${params.tokenSecret}`,
  ).toString('base64');

  const url = new URL(`https://api.bulksms.com/v1${params.path}`);
  if (params.query) {
    for (const [k, v] of Object.entries(params.query)) {
      url.searchParams.append(k, v);
    }
  }

  const response = await httpClient.sendRequest<T>({
    method: params.method,
    url: url.toString(),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${basic}`,
    },
    body: params.body,
  });
  return response.body;
}
