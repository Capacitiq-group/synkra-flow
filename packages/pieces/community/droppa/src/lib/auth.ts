import { HttpMethod, httpClient } from '@activepieces/pieces-common';

/**
 * Droppa API client.
 * Base URL: https://www.droppergroup.co.za/droppa/services/v1
 * Auth: Authorization: Bearer API_KEY:SERVICE_ID
 * Docs provided by Droppa (developer access via merchant account).
 */
const DROPPA_BASE = 'https://www.droppergroup.co.za/droppa/services/v1';

export async function droppaRequest<T>(params: {
  apiKey: string;
  serviceId: string;
  method: HttpMethod;
  path: string;
  body?: unknown;
}): Promise<T> {
  const response = await httpClient.sendRequest<T>({
    method: params.method,
    url: `${DROPPA_BASE}${params.path}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${params.apiKey}:${params.serviceId}`,
    },
    body: params.body,
  });
  return response.body;
}
