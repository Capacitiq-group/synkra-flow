"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseFriendlyPieceError = exports.formatPieceError = void 0;
const try_catch_1 = require("./try-catch");
const utils_1 = require("./utils");
const FRIENDLY_PIECE_ERROR_VERSION = 1;
const STACK_LINE_REGEX = /\n\s*at\s+.+$/gm;
const HTTP_ERROR_MESSAGE_MAX_LENGTH = 2000;
const RAW_ERROR_MAX_LENGTH = 16000;
const HTTP_STATUS_MIN = 100;
const HTTP_STATUS_MAX = 599;
const MAX_MESSAGE_DEPTH = 12;
const MAX_SERIALIZED_DEPTH = 64;
const CIRCULAR_PLACEHOLDER = '[Circular]';
const TOO_DEEP_PLACEHOLDER = '[Too deep]';
const UNSERIALIZABLE_PLACEHOLDER = '[Unserializable]';
const isObjectRecord = (value) => {
    return !(0, utils_1.isNil)(value) && typeof value === 'object' && !Array.isArray(value);
};
const safeJsonParse = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
};
const stripStack = (value) => {
    return value.replace(STACK_LINE_REGEX, '').trim();
};
const truncate = (value) => {
    if (value.length <= HTTP_ERROR_MESSAGE_MAX_LENGTH) {
        return value;
    }
    return `${value.slice(0, HTTP_ERROR_MESSAGE_MAX_LENGTH)}…`;
};
const truncateRaw = (value) => {
    if (value.length <= RAW_ERROR_MAX_LENGTH) {
        return value;
    }
    return `${value.slice(0, RAW_ERROR_MAX_LENGTH)}\n…[truncated]`;
};
const HTML_DOC_REGEX = /^\s*(<!doctype\s+html|<html\b|<\?xml)/i;
const HTML_TAG_LIKE_REGEX = /<\s*(html|body|head|title|meta|p|div|span|h[1-6]|table|script|style)\b/i;
const isLikelyMarkupBody = (value) => {
    if (HTML_DOC_REGEX.test(value)) {
        return true;
    }
    if (!value.includes('<') || !value.includes('>')) {
        return false;
    }
    return HTML_TAG_LIKE_REGEX.test(value);
};
const decodeHtmlEntities = (value) => {
    return value
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, '\'')
        .replace(/&apos;/g, '\'');
};
const stripMarkup = (value) => {
    const titleMatch = value.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? decodeHtmlEntities(titleMatch[1]).replace(/\s+/g, ' ').trim() : '';
    const withoutNoise = value
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<head[\s\S]*?<\/head>/gi, ' ');
    const textOnly = decodeHtmlEntities(withoutNoise.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    if (textOnly.length > 0 && title.length > 0 && !textOnly.startsWith(title)) {
        return `${title} — ${textOnly}`;
    }
    return textOnly.length > 0 ? textOnly : title;
};
const readString = (record, key) => {
    const value = record[key];
    return (0, utils_1.isString)(value) ? value : undefined;
};
const collectMessageFrom = ({ value, depth, seen }) => {
    var _a, _b, _c, _d;
    if ((0, utils_1.isNil)(value) || depth > MAX_MESSAGE_DEPTH) {
        return undefined;
    }
    if ((0, utils_1.isString)(value)) {
        const trimmed = value.trim();
        if (trimmed.length === 0) {
            return undefined;
        }
        if (isLikelyMarkupBody(trimmed)) {
            const stripped = stripMarkup(trimmed);
            return stripped.length > 0 ? stripped : undefined;
        }
        return trimmed;
    }
    if (Array.isArray(value)) {
        if (seen.has(value)) {
            return undefined;
        }
        seen.add(value);
        const parts = value
            .map((entry) => collectMessageFrom({ value: entry, depth: depth + 1, seen }))
            .filter((entry) => (0, utils_1.isString)(entry) && entry.length > 0);
        return parts.length > 0 ? parts.join('; ') : undefined;
    }
    if (isObjectRecord(value)) {
        if (seen.has(value)) {
            return undefined;
        }
        seen.add(value);
        const nested = (_d = (_c = (_b = (_a = value['message']) !== null && _a !== void 0 ? _a : value['detail']) !== null && _b !== void 0 ? _b : value['description']) !== null && _c !== void 0 ? _c : value['reason']) !== null && _d !== void 0 ? _d : value['error'];
        return collectMessageFrom({ value: nested, depth: depth + 1, seen });
    }
    return undefined;
};
const collectMessage = (value) => {
    return collectMessageFrom({ value, depth: 0, seen: new WeakSet() });
};
const extractApiMessage = (responseBody) => {
    if ((0, utils_1.isNil)(responseBody)) {
        return undefined;
    }
    if ((0, utils_1.isString)(responseBody) || Array.isArray(responseBody)) {
        const collected = collectMessage(responseBody);
        return collected ? truncate(collected) : undefined;
    }
    if (!isObjectRecord(responseBody)) {
        return truncate(String(responseBody));
    }
    const candidates = [
        responseBody['message'],
        responseBody['error_description'],
        responseBody['errorDescription'],
        responseBody['detail'],
        responseBody['title'],
        responseBody['error_message'],
        responseBody['errorMessage'],
        responseBody['errorMessages'],
        responseBody['errors'],
        responseBody['error'],
        responseBody['faultstring'],
        responseBody['fault'],
        responseBody['reason'],
        responseBody['description'],
    ];
    for (const candidate of candidates) {
        const collected = collectMessage(candidate);
        if (collected) {
            return truncate(collected);
        }
    }
    return undefined;
};
const toHttpStatus = (value) => {
    return typeof value === 'number' && value >= HTTP_STATUS_MIN && value <= HTTP_STATUS_MAX ? value : undefined;
};
const extractResponseHttpDetails = (error) => {
    const response = error['response'];
    if (!isObjectRecord(response)) {
        return null;
    }
    const statusValue = response['status'];
    const status = typeof statusValue === 'number' ? statusValue : undefined;
    const responseBody = response['body'];
    const headersValue = response['headers'];
    const headers = isObjectRecord(headersValue) ? headersValue : undefined;
    const requestRaw = error['request'];
    const request = isObjectRecord(requestRaw) ? requestRaw : undefined;
    const requestBody = request === null || request === void 0 ? void 0 : request['body'];
    const requestUrl = request === undefined ? undefined : readString(request, 'url');
    const requestMethod = request === undefined ? undefined : readString(request, 'method');
    if ((0, utils_1.isNil)(status) && (0, utils_1.isNil)(responseBody) && (0, utils_1.isNil)(requestBody)) {
        return null;
    }
    return {
        status,
        responseBody,
        responseHeaders: headers,
        requestBody,
        requestUrl,
        requestMethod,
        apiMessage: extractApiMessage(responseBody),
    };
};
const extractClientHttpDetails = (error) => {
    var _a;
    const status = toHttpStatus(error['status']);
    if ((0, utils_1.isNil)(status)) {
        return null;
    }
    const responseBody = (_a = error['error']) !== null && _a !== void 0 ? _a : error['body'];
    const headersValue = error['headers'];
    const headers = isObjectRecord(headersValue) ? headersValue : undefined;
    return {
        status,
        responseBody,
        responseHeaders: headers,
        apiMessage: extractApiMessage(responseBody),
    };
};
const extractHttpDetails = (error) => {
    var _a;
    return (_a = extractResponseHttpDetails(error)) !== null && _a !== void 0 ? _a : extractClientHttpDetails(error);
};
const rebuildSerializable = ({ value, depth, seen }) => {
    if ((0, utils_1.isNil)(value) || (0, utils_1.isString)(value) || typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }
    if (Array.isArray(value) || isObjectRecord(value)) {
        if (seen.has(value)) {
            return CIRCULAR_PLACEHOLDER;
        }
        if (depth >= MAX_SERIALIZED_DEPTH) {
            return TOO_DEEP_PLACEHOLDER;
        }
        seen.add(value);
        if (Array.isArray(value)) {
            return value.map((entry) => rebuildSerializable({ value: entry, depth: depth + 1, seen }));
        }
        return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, rebuildSerializable({ value: entry, depth: depth + 1, seen })]));
    }
    return String(value);
};
const toSerializable = (value) => {
    if ((0, utils_1.isNil)(value)) {
        return value;
    }
    const { error } = (0, try_catch_1.tryCatchSync)(() => JSON.stringify(value));
    if ((0, utils_1.isNil)(error)) {
        return value;
    }
    const rebuilt = (0, try_catch_1.tryCatchSync)(() => rebuildSerializable({ value, depth: 0, seen: new WeakSet() }));
    return (0, utils_1.isNil)(rebuilt.error) ? rebuilt.data : UNSERIALIZABLE_PLACEHOLDER;
};
const toSerializableHttpDetails = (httpDetails) => {
    if ((0, utils_1.isNil)(httpDetails)) {
        return null;
    }
    const { responseBody, requestBody, responseHeaders } = httpDetails;
    return Object.assign(Object.assign({}, httpDetails), { responseBody: toSerializable(responseBody), requestBody: toSerializable(requestBody), responseHeaders: (0, utils_1.isNil)(responseHeaders) ? undefined : Object.fromEntries(Object.entries(responseHeaders).map(([key, value]) => [key, toSerializable(value)])) });
};
const readErrorName = (error) => {
    const name = readString(error, 'name');
    if (!(0, utils_1.isNil)(name) && name.length > 0 && name !== 'Error') {
        return name;
    }
    const ctor = error['constructor'];
    if (typeof ctor === 'function' && (0, utils_1.isString)(ctor.name) && ctor.name.length > 0 && ctor.name !== 'Object' && ctor.name !== 'Error') {
        return ctor.name;
    }
    return undefined;
};
const readErrorMessage = (error) => {
    const messageString = readString(error, 'message');
    if (!(0, utils_1.isNil)(messageString)) {
        return messageString;
    }
    const stringified = String(error);
    if (stringified.length > 0 && stringified !== '[object Object]') {
        return stringified;
    }
    return 'Unknown error';
};
const pickPlainMessage = ({ httpDetails, rawMessage }) => {
    if (httpDetails === null || httpDetails === void 0 ? void 0 : httpDetails.apiMessage) {
        return httpDetails.apiMessage;
    }
    const cleaned = stripStack(rawMessage);
    if (cleaned.length > 0) {
        return truncate(cleaned);
    }
    return 'Unknown error';
};
const isFriendlyPieceError = (value) => {
    if (!isObjectRecord(value)) {
        return false;
    }
    return value['__apErrorVersion'] === FRIENDLY_PIECE_ERROR_VERSION && typeof value['message'] === 'string';
};
const formatPieceError = (error, options) => {
    var _a;
    const raw = options === null || options === void 0 ? void 0 : options.raw;
    const withRaw = (base) => {
        if ((0, utils_1.isNil)(raw) || raw.length === 0 || !(0, utils_1.isNil)(base.raw)) {
            return base;
        }
        return Object.assign(Object.assign({}, base), { raw: truncateRaw(raw) });
    };
    if ((0, utils_1.isNil)(error)) {
        return withRaw({
            __apErrorVersion: FRIENDLY_PIECE_ERROR_VERSION,
            message: 'Unknown error',
        });
    }
    if ((0, utils_1.isString)(error)) {
        const cleaned = stripStack(error);
        return withRaw({
            __apErrorVersion: FRIENDLY_PIECE_ERROR_VERSION,
            message: cleaned.length > 0 ? cleaned : 'Unknown error',
        });
    }
    if (!isObjectRecord(error)) {
        return withRaw({
            __apErrorVersion: FRIENDLY_PIECE_ERROR_VERSION,
            message: truncate(String(error)),
        });
    }
    if (isFriendlyPieceError(error)) {
        return withRaw(error);
    }
    const httpDetails = extractHttpDetails(error);
    const errorName = readErrorName(error);
    const rawMessage = readErrorMessage(error);
    const message = pickPlainMessage({ httpDetails, rawMessage });
    return withRaw(Object.assign({ __apErrorVersion: FRIENDLY_PIECE_ERROR_VERSION, message,
        errorName }, ((_a = toSerializableHttpDetails(httpDetails)) !== null && _a !== void 0 ? _a : {})));
};
exports.formatPieceError = formatPieceError;
const tryParseFriendlyPieceError = (value) => {
    if ((0, utils_1.isNil)(value)) {
        return null;
    }
    const candidate = (0, utils_1.isString)(value) ? safeJsonParse(value) : value;
    return isFriendlyPieceError(candidate) ? candidate : null;
};
exports.tryParseFriendlyPieceError = tryParseFriendlyPieceError;
//# sourceMappingURL=friendly-piece-error.js.map