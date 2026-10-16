"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessTokenOrThrow = void 0;
exports.createCustomApiCallAction = createCustomApiCallAction;
exports.is_chromium_installed = is_chromium_installed;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const http_1 = require("../http");
const core_utils_1 = require("@activepieces/core-utils");
const fs_1 = tslib_1.__importDefault(require("fs"));
// Self-contained content-type → file-extension lookup, replacing the heavy
// `mime-types`/`mime-db` dependency (~134 KB inlined into every piece bundle).
// Covers the common types returned for binary HTTP responses; unknown → ''.
const CONTENT_TYPE_EXTENSIONS = {
    'application/json': 'json',
    'application/pdf': 'pdf',
    'application/xml': 'xml',
    'text/xml': 'xml',
    'application/zip': 'zip',
    'application/gzip': 'gz',
    'application/x-tar': 'tar',
    'application/octet-stream': 'bin',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/vnd.ms-powerpoint': 'ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
    'application/rtf': 'rtf',
    'application/javascript': 'js',
    'application/x-www-form-urlencoded': 'bin',
    'text/plain': 'txt',
    'text/html': 'html',
    'text/css': 'css',
    'text/csv': 'csv',
    'text/calendar': 'ics',
    'text/markdown': 'md',
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
    'image/bmp': 'bmp',
    'image/tiff': 'tiff',
    'image/x-icon': 'ico',
    'image/vnd.microsoft.icon': 'ico',
    'image/heic': 'heic',
    'audio/mpeg': 'mp3',
    'audio/mp4': 'm4a',
    'audio/wav': 'wav',
    'audio/x-wav': 'wav',
    'audio/ogg': 'ogg',
    'audio/webm': 'weba',
    'video/mp4': 'mp4',
    'video/mpeg': 'mpeg',
    'video/webm': 'webm',
    'video/quicktime': 'mov',
    'video/x-msvideo': 'avi',
    'font/woff': 'woff',
    'font/woff2': 'woff2',
    'font/ttf': 'ttf',
    'font/otf': 'otf',
};
function contentTypeToExtension(contentType) {
    var _a;
    const type = contentType.split(';')[0].trim().toLowerCase();
    return (_a = CONTENT_TYPE_EXTENSIONS[type]) !== null && _a !== void 0 ? _a : '';
}
const getAccessTokenOrThrow = (auth) => {
    const accessToken = auth === null || auth === void 0 ? void 0 : auth.access_token;
    if (accessToken === undefined) {
        throw new Error('Invalid bearer token');
    }
    return accessToken;
};
exports.getAccessTokenOrThrow = getAccessTokenOrThrow;
const joinBaseUrlWithRelativePath = ({ baseUrl, relativePath, }) => {
    const baseUrlWithSlash = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const relativePathWithoutSlash = relativePath.startsWith('/')
        ? relativePath.slice(1)
        : relativePath;
    return `${baseUrlWithSlash}${relativePathWithoutSlash}`;
};
const getBaseUrlForDescription = (baseUrl, auth) => {
    const exampleBaseUrl = `https://api.example.com`;
    try {
        const baseUrlValue = auth ? baseUrl(auth) : undefined;
        const baseUrlValueWithoutTrailingSlash = (baseUrlValue === null || baseUrlValue === void 0 ? void 0 : baseUrlValue.endsWith('/'))
            ? baseUrlValue.slice(0, -1)
            : baseUrlValue;
        return baseUrlValueWithoutTrailingSlash !== null && baseUrlValueWithoutTrailingSlash !== void 0 ? baseUrlValueWithoutTrailingSlash : exampleBaseUrl;
    }
    catch (error) {
        //If baseUrl fails we stil want to return a valid baseUrl for description
        {
            return exampleBaseUrl;
        }
    }
};
function createCustomApiCallAction({ auth, baseUrl, authMapping, description, displayName, name, props, extraProps, authLocation = 'headers', classification = 'WRITE', }) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (0, pieces_framework_1.createAction)({
        audience: 'human',
        name: name ? name : 'custom_api_call',
        classification,
        displayName: displayName ? displayName : 'Custom API Call',
        description: description
            ? description
            : 'Make a custom API call to a specific endpoint',
        auth,
        requireAuth: auth ? true : false,
        props: Object.assign({ url: pieces_framework_1.Property.DynamicProperties({
                auth,
                displayName: '',
                required: true,
                refreshers: [],
                props: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ auth }) {
                    var _b;
                    return {
                        url: pieces_framework_1.Property.ShortText(Object.assign({ displayName: 'URL', description: `Full URL, or a path relative to ${getBaseUrlForDescription(baseUrl, auth)}`, required: true, placeholder: '/resource', defaultValue: auth ? baseUrl(auth) : '' }, ((_b = props === null || props === void 0 ? void 0 : props.url) !== null && _b !== void 0 ? _b : {}))),
                    };
                }),
            }), method: pieces_framework_1.Property.StaticDropdown(Object.assign({ displayName: 'Method', required: true, defaultValue: http_1.HttpMethod.GET, options: {
                    options: Object.values(http_1.HttpMethod).map((v) => {
                        return {
                            label: v,
                            value: v,
                        };
                    }),
                } }, ((_a = props === null || props === void 0 ? void 0 : props.method) !== null && _a !== void 0 ? _a : {}))), headers: pieces_framework_1.Property.Object(Object.assign({ displayName: 'Headers', description: 'Authorization headers are injected automatically from your connection.', required: false }, ((_b = props === null || props === void 0 ? void 0 : props.headers) !== null && _b !== void 0 ? _b : {}))), queryParams: pieces_framework_1.Property.Object(Object.assign({ displayName: 'Query Parameters', description: 'Appended to the URL as ?key=value.', required: false }, ((_c = props === null || props === void 0 ? void 0 : props.queryParams) !== null && _c !== void 0 ? _c : {}))), body_type: pieces_framework_1.Property.Dropdown({
                auth,
                displayName: 'Body Type',
                required: false,
                defaultValue: 'none',
                refreshers: ['method'],
                options: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ method }) {
                    if (!(0, http_1.acceptsRequestBody)(method)) {
                        return {
                            disabled: true,
                            placeholder: 'Not available for GET or HEAD requests',
                            options: [],
                        };
                    }
                    return {
                        disabled: false,
                        options: [
                            { label: 'None', value: 'none' },
                            { label: 'JSON', value: 'json' },
                            { label: 'Form Data', value: 'form_data' },
                            { label: 'Raw', value: 'raw' },
                        ],
                    };
                }),
            }), body: pieces_framework_1.Property.DynamicProperties({
                auth,
                displayName: 'Body',
                refreshers: ['body_type', 'method'],
                required: false,
                props: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ body_type, method }) {
                    var _b;
                    if (!body_type || !(0, http_1.acceptsRequestBody)(method))
                        return {};
                    const bodyTypeInput = body_type;
                    const fields = {};
                    switch (bodyTypeInput) {
                        case 'none':
                            break;
                        case 'json':
                            fields['data'] = pieces_framework_1.Property.Json(Object.assign({ displayName: 'JSON Body', required: true }, ((_b = props === null || props === void 0 ? void 0 : props.body) !== null && _b !== void 0 ? _b : {})));
                            break;
                        case 'raw':
                            fields['data'] = pieces_framework_1.Property.LongText({
                                displayName: 'Raw Body',
                                required: true,
                            });
                            break;
                        case 'form_data':
                            fields['data'] = pieces_framework_1.Property.Array({
                                displayName: 'Form Data',
                                required: true,
                                properties: {
                                    fieldName: pieces_framework_1.Property.ShortText({
                                        displayName: 'Field Name',
                                        required: true,
                                    }),
                                    fieldType: pieces_framework_1.Property.StaticDropdown({
                                        displayName: 'Field Type',
                                        required: true,
                                        options: {
                                            disabled: false,
                                            options: [
                                                { label: 'Text', value: 'text' },
                                                { label: 'File', value: 'file' },
                                            ],
                                        },
                                    }),
                                    textFieldValue: pieces_framework_1.Property.LongText({
                                        displayName: 'Text Field Value',
                                        required: false,
                                    }),
                                    fileFieldValue: pieces_framework_1.Property.File({
                                        displayName: 'File Field Value',
                                        required: false,
                                    }),
                                },
                            });
                            break;
                    }
                    return fields;
                }),
            }), response_is_binary: pieces_framework_1.Property.Checkbox(Object.assign({ displayName: 'Response is Binary', description: 'Enable for files like PDFs, images, etc.', required: false, defaultValue: false, advanced: true }, ((_d = props === null || props === void 0 ? void 0 : props.response_is_binary) !== null && _d !== void 0 ? _d : {}))), failsafe: pieces_framework_1.Property.Checkbox(Object.assign({ displayName: 'Return Error as Output', description: 'On a failed request, output the error instead of failing the step.', required: false, advanced: true }, ((_e = props === null || props === void 0 ? void 0 : props.failsafe) !== null && _e !== void 0 ? _e : {}))), timeout: pieces_framework_1.Property.Number(Object.assign({ displayName: 'Timeout', description: 'Seconds to wait for a response. Empty: up to the flow limit (10 min).', required: false, advanced: true }, ((_f = props === null || props === void 0 ? void 0 : props.timeout) !== null && _f !== void 0 ? _f : {}))), followRedirects: pieces_framework_1.Property.Checkbox(Object.assign({ displayName: 'Follow redirects', description: 'Follow 3xx redirects instead of returning them as the response.', required: false, defaultValue: false, advanced: true }, ((_g = props === null || props === void 0 ? void 0 : props.followRedirects) !== null && _g !== void 0 ? _g : {}))) }, extraProps),
        run: (context) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { method, url, headers, queryParams, body, body_type, failsafe, timeout, response_is_binary, followRedirects, } = context.propsValue;
            (0, core_utils_1.assertNotNullOrUndefined)(method, 'Method');
            (0, core_utils_1.assertNotNullOrUndefined)(url, 'URL');
            const authValue = !(0, core_utils_1.isNil)(authMapping)
                ? yield authMapping(context.auth, context.propsValue)
                : {};
            const urlValue = url['url'];
            const fullUrl = urlValue.startsWith('http://') || urlValue.startsWith('https://')
                ? urlValue
                : joinBaseUrlWithRelativePath({
                    baseUrl: baseUrl(context.auth),
                    relativePath: urlValue,
                });
            const request = {
                method,
                url: fullUrl,
                headers: Object.assign(Object.assign({}, (headers !== null && headers !== void 0 ? headers : {})), (authLocation === 'headers' || !(0, core_utils_1.isNil)(authLocation)
                    ? authValue
                    : {})),
                queryParams: Object.assign(Object.assign({}, (authLocation === 'queryParams' ? authValue : {})), ((_a = queryParams) !== null && _a !== void 0 ? _a : {})),
                timeout: timeout ? timeout * 1000 : 0,
                followRedirects,
            };
            // Set response type to arraybuffer if binary response is expected
            if (response_is_binary) {
                request.responseType = 'arraybuffer';
            }
            if (body) {
                if (body_type && body_type !== 'none') {
                    const bodyInput = body['data'];
                    if (body_type === 'form_data') {
                        const formBodyInput = bodyInput;
                        const { default: FormData } = yield Promise.resolve().then(() => tslib_1.__importStar(require('form-data')));
                        const formData = new FormData();
                        for (const { fieldName, fieldType, textFieldValue, fileFieldValue, } of formBodyInput) {
                            if (fieldType === 'text' && !(0, core_utils_1.isEmpty)(textFieldValue)) {
                                formData.append(fieldName, textFieldValue);
                            }
                            else if (fieldType === 'file' && !(0, core_utils_1.isEmpty)(fileFieldValue)) {
                                formData.append(fieldName, fileFieldValue.data, {
                                    filename: fileFieldValue === null || fileFieldValue === void 0 ? void 0 : fileFieldValue.filename,
                                });
                            }
                        }
                        request.body = formData;
                        request.headers = Object.assign(Object.assign({}, request.headers), formData.getHeaders());
                    }
                    else {
                        request.body = bodyInput;
                    }
                }
                else if (!body_type) {
                    request.body = body;
                }
            }
            try {
                const response = yield http_1.httpClient.sendRequest(request);
                return yield handleBinaryResponse(context.files, response.body, response.status, response.headers, response_is_binary);
            }
            catch (error) {
                if (failsafe) {
                    return (0, http_1.toFailsafeOutput)({ error, requestBody: request.body });
                }
                throw error;
            }
        }),
    });
}
function is_chromium_installed() {
    const chromiumPath = '/usr/bin/chromium';
    return fs_1.default.existsSync(chromiumPath);
}
const handleBinaryResponse = (files, bodyContent, status, headers, isBinary) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let body;
    if (isBinary && isBinaryBody(bodyContent)) {
        const contentTypeValue = Array.isArray(headers === null || headers === void 0 ? void 0 : headers['content-type'])
            ? headers['content-type'][0]
            : headers === null || headers === void 0 ? void 0 : headers['content-type'];
        const fileExtension = contentTypeToExtension(contentTypeValue !== null && contentTypeValue !== void 0 ? contentTypeValue : '') || 'txt';
        let bufferData;
        if (bodyContent instanceof ArrayBuffer) {
            bufferData = Buffer.from(new Uint8Array(bodyContent));
        }
        else if (Buffer.isBuffer(bodyContent)) {
            bufferData = bodyContent;
        }
        else {
            bufferData = Buffer.from(bodyContent);
        }
        body = yield files.write({
            fileName: `output.${fileExtension}`,
            data: bufferData,
        });
    }
    else {
        body = bodyContent;
    }
    return { status, headers, body };
});
const isBinaryBody = (body) => {
    return body instanceof ArrayBuffer || Buffer.isBuffer(body);
};
//# sourceMappingURL=index.js.map