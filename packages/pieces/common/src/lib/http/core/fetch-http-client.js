"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpClient = exports.FetchHttpClient = void 0;
exports.acceptsRequestBody = acceptsRequestBody;
const tslib_1 = require("tslib");
const node_stream_1 = require("node:stream");
const core_utils_1 = require("@activepieces/core-utils");
const base_http_client_1 = require("./base-http-client");
const delegating_authentication_converter_1 = require("./delegating-authentication-converter");
const http_error_1 = require("./http-error");
const http_method_1 = require("./http-method");
// Native-fetch implementation of HttpClient. SSRF egress is enforced by the engine's
// in-process dns.lookup / Socket.connect guards (see ssrf-guard.ts) when
// AP_NETWORK_MODE=STRICT, which cover fetch via net.connect — so there is no egress
// proxy wiring here. A caller may still pass options.dispatcher for a user-configured
// per-request proxy (the HTTP piece's "Use Proxy" feature).
class FetchHttpClient extends base_http_client_1.BaseHttpClient {
    constructor(baseUrl = '', authenticationConverter = new delegating_authentication_converter_1.DelegatingAuthenticationConverter()) {
        super(baseUrl, authenticationConverter);
    }
    sendRequest(request, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
            const { urlWithoutQueryParams, queryParams: urlQueryParams } = this.getUrl(request);
            const headers = this.getHeaders(request);
            const queryParams = (_a = request.queryParams) !== null && _a !== void 0 ? _a : {};
            for (const [key, value] of Object.entries(queryParams)) {
                urlQueryParams.append(key, value);
            }
            const queryString = urlQueryParams.toString();
            const finalUrl = queryString ? `${urlWithoutQueryParams}?${queryString}` : urlWithoutQueryParams;
            const responseType = (_b = request.responseType) !== null && _b !== void 0 ? _b : 'json';
            const followRedirects = (_c = request.followRedirects) !== null && _c !== void 0 ? _c : true;
            const retries = (_d = request.retries) !== null && _d !== void 0 ? _d : 0;
            const { body, extraHeaders, isStream } = acceptsRequestBody(request.method)
                ? serializeBody(request.body, headers)
                : { body: undefined, extraHeaders: {}, isStream: false };
            const finalHeaders = normalizeHeaders(Object.assign(Object.assign({}, headers), extraHeaders));
            const response = yield sendWithRetries(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const controller = new AbortController();
                const timeoutId = request.timeout && request.timeout > 0
                    ? setTimeout(() => controller.abort(), request.timeout)
                    : undefined;
                try {
                    const init = {
                        method: request.method.toString(),
                        headers: finalHeaders,
                        body,
                        redirect: followRedirects ? 'follow' : 'manual',
                        signal: controller.signal,
                    };
                    if (isStream) {
                        init.duplex = 'half';
                    }
                    // A caller-supplied undici Dispatcher (e.g. a ProxyAgent) for per-request proxying.
                    if ((options === null || options === void 0 ? void 0 : options.dispatcher) !== undefined) {
                        init.dispatcher = options.dispatcher;
                    }
                    return yield fetch(finalUrl, init);
                }
                finally {
                    if (timeoutId !== undefined) {
                        clearTimeout(timeoutId);
                    }
                }
            }), isStream ? 0 : retries);
            const successCeiling = followRedirects ? 300 : 400;
            if (response.status < 200 || response.status >= successCeiling) {
                // A stream response can't carry an error message usefully; read the error body as text.
                const errorBody = yield parseResponseBody(response, responseType === 'stream' ? 'text' : responseType);
                const httpError = new http_error_1.HttpError(request.body, { status: response.status, responseBody: errorBody });
                console.error('[HttpClient#(sanitized error message)] Request failed:', httpError);
                throw httpError;
            }
            const responseBody = yield parseResponseBody(response, responseType);
            return {
                status: response.status,
                headers: toHttpHeaders(response.headers),
                body: responseBody,
            };
        });
    }
}
exports.FetchHttpClient = FetchHttpClient;
exports.AxiosHttpClient = FetchHttpClient;
function acceptsRequestBody(method) {
    return method !== http_method_1.HttpMethod.GET && method !== http_method_1.HttpMethod.HEAD;
}
function serializeBody(body, headers) {
    var _a, _b;
    if (isNil(body)) {
        return { body: undefined, extraHeaders: {}, isStream: false };
    }
    if (isNodeFormData(body)) {
        // A buffered multipart body lets undici send Content-Length; a streamed one is sent
        // chunked without a length, which strict multipart parsers reject with a 500. Streaming
        // with an explicit content-length header is not an option: undici stalls or throws
        // RequestContentLengthMismatchError on stream bodies that carry one.
        const buffered = bufferFormDataIfSafe(body);
        if (buffered !== null) {
            return { body: buffered, extraHeaders: body.getHeaders(), isStream: false };
        }
        const stream = new node_stream_1.PassThrough();
        body.on('error', (error) => stream.destroy(error));
        body.pipe(stream);
        return { body: stream, extraHeaders: body.getHeaders(), isStream: true };
    }
    if (body instanceof node_stream_1.Readable) {
        return { body: body, extraHeaders: {}, isStream: true };
    }
    // Already a wire-ready body — pass through untouched.
    if (typeof body === 'string' ||
        Buffer.isBuffer(body) ||
        body instanceof URLSearchParams ||
        body instanceof ArrayBuffer ||
        (typeof FormData !== 'undefined' && body instanceof FormData) ||
        (typeof Blob !== 'undefined' && body instanceof Blob)) {
        return { body: body, extraHeaders: {}, isStream: false };
    }
    const contentType = (_b = (_a = headers['Content-Type']) !== null && _a !== void 0 ? _a : headers['content-type']) !== null && _b !== void 0 ? _b : '';
    if (contentType.includes('application/x-www-form-urlencoded')) {
        return { body: new URLSearchParams(body).toString(), extraHeaders: {}, isStream: false };
    }
    return { body: JSON.stringify(body), extraHeaders: {}, isStream: false };
}
function parseResponseBody(response, responseType) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        switch (responseType) {
            case 'arraybuffer':
                return Buffer.from(yield response.arrayBuffer());
            case 'stream':
                // @ts-expect-error -- undici streams a Node web ReadableStream body; the DOM fetch types omit the fromWeb overload
                return isNil(response.body) ? node_stream_1.Readable.from([]) : node_stream_1.Readable.fromWeb(response.body);
            case 'blob':
                return yield response.blob();
            case 'text':
                return yield response.text();
            case 'json':
            default: {
                const text = yield response.text();
                if (text.length === 0) {
                    return undefined;
                }
                try {
                    return JSON.parse(text);
                }
                catch (_a) {
                    return text;
                }
            }
        }
    });
}
function sendWithRetries(fn, retries) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let lastError;
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const response = yield fn();
                if (response.status >= 500 && attempt < retries) {
                    yield backoff(attempt);
                    continue;
                }
                return response;
            }
            catch (error) {
                lastError = error;
                if (attempt < retries) {
                    yield backoff(attempt);
                    continue;
                }
                throw error;
            }
        }
        throw lastError;
    });
}
function backoff(attempt) {
    const delayMs = Math.min(1000 * Math.pow(2, attempt), 30000);
    return new Promise((resolve) => setTimeout(resolve, delayMs));
}
function normalizeHeaders(headers) {
    const entriesByLowerCaseKey = new Map();
    for (const [key, value] of Object.entries(headers)) {
        if (value === undefined) {
            continue;
        }
        entriesByLowerCaseKey.set(key.toLowerCase(), [key, Array.isArray(value) ? value.join(', ') : value]);
    }
    return Object.fromEntries(entriesByLowerCaseKey.values());
}
function toHttpHeaders(headers) {
    const result = {};
    headers.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}
function bufferFormDataIfSafe(body) {
    if (!body.hasKnownLength() || body.getLengthSync() > MAX_BUFFERED_FORM_DATA_BYTES) {
        return null;
    }
    // getBuffer throws on stream parts appended with an explicit knownLength; fall back to streaming.
    const { data } = (0, core_utils_1.tryCatchSync)(() => body.getBuffer());
    return data;
}
function isNodeFormData(body) {
    return (typeof body === 'object' &&
        body !== null &&
        typeof body.getHeaders === 'function' &&
        typeof body.pipe === 'function' &&
        typeof body.on === 'function');
}
function isNil(value) {
    return value === null || value === undefined;
}
const MAX_BUFFERED_FORM_DATA_BYTES = 100 * 1024 * 1024;
//# sourceMappingURL=fetch-http-client.js.map