"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiProviderKeyStatus = void 0;
exports.toProviderOutcomeSignal = toProviderOutcomeSignal;
exports.observedProviderFetch = observedProviderFetch;
exports.isProviderCreditError = isProviderCreditError;
exports.isTransientProviderError = isTransientProviderError;
exports.isProviderBillingError = isProviderBillingError;
exports.isProviderRateLimitError = isProviderRateLimitError;
exports.classifyProviderOutcome = classifyProviderOutcome;
exports.isFallbackWorthy = isFallbackWorthy;
const tslib_1 = require("tslib");
const zod_1 = require("zod");
const friendly_piece_error_1 = require("./friendly-piece-error");
function toProviderOutcomeSignal(error) {
    var _a;
    const formatted = (0, friendly_piece_error_1.formatPieceError)(error);
    return Object.assign(Object.assign(Object.assign({}, (formatted.status === undefined ? {} : { statusCode: formatted.status })), (formatted.responseBody === undefined ? {} : { body: stringifyBody(formatted.responseBody) })), { message: (_a = formatted.apiMessage) !== null && _a !== void 0 ? _a : formatted.message });
}
function stringifyBody(body) {
    return typeof body === 'string' ? body : JSON.stringify(body);
}
function observedProviderFetch(onOutcome) {
    if (isNil(onOutcome)) {
        return undefined;
    }
    return (input, init) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield fetch(input, init);
        }
        catch (error) {
            report({ observed: Promise.resolve(toProviderOutcomeSignal(error)), onOutcome });
            throw error;
        }
        report({ observed: observeResponse(response), onOutcome });
        return response;
    });
}
function report({ observed, onOutcome }) {
    void observed.then(onOutcome).catch(() => undefined);
}
function observeResponse(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (response.ok) {
            return { statusCode: response.status };
        }
        const body = yield readEnoughToClassify(response);
        return Object.assign({ statusCode: response.status }, (isNil(body) ? {} : { body }));
    });
}
function readEnoughToClassify(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const stream = response.clone().body;
            if (isNil(stream)) {
                return undefined;
            }
            const reader = stream.getReader();
            const decoder = new TextDecoder();
            let text = '';
            try {
                while (text.length < MAX_OBSERVED_BODY_LENGTH) {
                    const { done, value } = yield reader.read();
                    if (done) {
                        break;
                    }
                    text += decoder.decode(value, { stream: true });
                }
            }
            finally {
                void reader.cancel().catch(() => undefined);
            }
            return text.slice(0, MAX_OBSERVED_BODY_LENGTH);
        }
        catch (_a) {
            return undefined;
        }
    });
}
function isProviderCreditError(text) {
    return CREDIT_ERROR_PATTERNS.some((pattern) => pattern.test(text));
}
function isTransientProviderError(text) {
    return TRANSIENT_ERROR_PATTERN.test(text);
}
function isProviderBillingError(text) {
    return BILLING_BODY_PATTERN.test(text);
}
function isProviderRateLimitError(text) {
    return RATE_LIMIT_BODY_PATTERN.test(text);
}
function classifyProviderOutcome({ statusCode, body, message }) {
    if (!isNil(statusCode)) {
        return classifyByStatus({ statusCode, haystack: `${body !== null && body !== void 0 ? body : ''} ${message !== null && message !== void 0 ? message : ''}` });
    }
    const text = message !== null && message !== void 0 ? message : '';
    if (isProviderCreditError(text)) {
        return 'out_of_credits';
    }
    if (isTransientProviderError(text)) {
        return 'no_change';
    }
    return text.length === 0 ? 'no_change' : 'unreachable';
}
function isFallbackWorthy({ statusCode, body, message, retryable }) {
    const haystack = `${body !== null && body !== void 0 ? body : ''} ${message !== null && message !== void 0 ? message : ''}`;
    if (isProviderBillingError(haystack)) {
        return true;
    }
    if (!isNil(statusCode)) {
        return FALLBACK_STATUS_CODES.has(statusCode) || statusCode >= 500;
    }
    const text = message !== null && message !== void 0 ? message : '';
    return retryable === true || isProviderCreditError(text) || isTransientProviderError(text);
}
function classifyByStatus({ statusCode, haystack }) {
    if (statusCode >= 200 && statusCode < 300) {
        return 'active';
    }
    if (statusCode === 401 || statusCode === 403) {
        return 'rejected';
    }
    if (statusCode === 402) {
        return 'out_of_credits';
    }
    if (statusCode === 429 && isProviderRateLimitError(haystack)) {
        return 'no_change';
    }
    if (isProviderBillingError(haystack)) {
        return 'out_of_credits';
    }
    if (statusCode === 429) {
        return 'no_change';
    }
    if (statusCode === 404) {
        return MODEL_NOT_FOUND_PATTERN.test(haystack) ? 'no_change' : 'unreachable';
    }
    if (statusCode === 408 || statusCode >= 500) {
        return 'unreachable';
    }
    return 'no_change';
}
function isNil(value) {
    return value === null || value === undefined;
}
const MAX_OBSERVED_BODY_LENGTH = 2000;
const CREDIT_ERROR_PATTERNS = [/credits/i, /\b402\b/, /payment.required/i];
const TRANSIENT_ERROR_PATTERN = /\b(429|5\d\d)\b|rate.?limit|timeout|timed out|temporarily|econnreset|etimedout|socket hang up|service unavailable|aborted/i;
const BILLING_BODY_PATTERN = /insufficient_quota|credit[_ ]balance|billing_hard_limit_reached|billing|\bcredits?\b|out of funds|payment required/i;
const RATE_LIMIT_BODY_PATTERN = /per minute|per day|per_minute|per_day|requests? per|tokens? per|rate.?limit|resource_exhausted|\brpm\b|\btpm\b/i;
const MODEL_NOT_FOUND_PATTERN = /model|deployment|engine/i;
const FALLBACK_STATUS_CODES = new Set([401, 402, 403, 404, 408, 429]);
exports.AiProviderKeyStatus = zod_1.z.enum(['active', 'out_of_credits', 'rejected', 'unreachable']);
//# sourceMappingURL=ai-provider-health.js.map