import { BaseHttpClient } from './base-http-client';
import { DelegatingAuthenticationConverter } from './delegating-authentication-converter';
import { HttpMessageBody } from './http-message-body';
import { HttpMethod } from './http-method';
import { HttpRequest } from './http-request';
import { HttpRequestBody } from './http-request-body';
import { HttpResponse } from './http-response';
export declare class FetchHttpClient extends BaseHttpClient {
    constructor(baseUrl?: string, authenticationConverter?: DelegatingAuthenticationConverter);
    sendRequest<ResponseBody extends HttpMessageBody = any>(request: HttpRequest<HttpRequestBody>, options?: SendRequestOptions): Promise<HttpResponse<ResponseBody>>;
}
export declare function acceptsRequestBody(method: HttpMethod): boolean;
export type SendRequestOptions = {
    dispatcher?: unknown;
};
export { FetchHttpClient as AxiosHttpClient };
