"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPlatformEventDestinationResponse = exports.TestPlatformEventDestinationRequestBody = exports.UpdatePlatformEventDestinationRequestBody = exports.CreatePlatformEventDestinationRequestBody = exports.ListPlatformEventDestinationsRequestBody = exports.EventDestinationHeadersRequest = exports.EventDestinationHeaders = exports.EventDestinationTestError = exports.EventDestinationFormat = exports.EventDestinationScope = void 0;
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
const audit_events_1 = require("../audit-events");
const HEADER_NAME_PATTERN = /^[A-Za-z0-9!#$%&'*+\-.^_`|~]+$/;
const HEADER_VALUE_PATTERN = /^[\t\x20-\x7e\x80-\xff]*$/;
const DELIVERY_OWNED_HEADER_NAMES = new Set([
    'content-type',
    'content-length',
    'content-encoding',
    'transfer-encoding',
    'host',
    'connection',
]);
const HeaderName = zod_1.z.string()
    .regex(HEADER_NAME_PATTERN, form_errors_1.formErrors.invalidHeaderName)
    .refine((name) => !DELIVERY_OWNED_HEADER_NAMES.has(name.toLowerCase()), form_errors_1.formErrors.reservedHeaderName);
const HeaderValue = zod_1.z.string().regex(HEADER_VALUE_PATTERN, form_errors_1.formErrors.invalidHeaderValue);
const hasUniqueHeaderNames = (headers) => {
    const names = Object.keys(headers).map((name) => name.toLowerCase());
    return new Set(names).size === names.length;
};
var EventDestinationScope;
(function (EventDestinationScope) {
    EventDestinationScope["PLATFORM"] = "PLATFORM";
    EventDestinationScope["PROJECT"] = "PROJECT";
})(EventDestinationScope || (exports.EventDestinationScope = EventDestinationScope = {}));
var EventDestinationFormat;
(function (EventDestinationFormat) {
    EventDestinationFormat["RAW"] = "RAW";
    EventDestinationFormat["OTLP_JSON"] = "OTLP_JSON";
    EventDestinationFormat["OTLP_PROTOBUF"] = "OTLP_PROTOBUF";
})(EventDestinationFormat || (exports.EventDestinationFormat = EventDestinationFormat = {}));
var EventDestinationTestError;
(function (EventDestinationTestError) {
    EventDestinationTestError["BLOCKED"] = "BLOCKED";
    EventDestinationTestError["TIMEOUT"] = "TIMEOUT";
    EventDestinationTestError["TLS"] = "TLS";
    EventDestinationTestError["CONNECTION_FAILED"] = "CONNECTION_FAILED";
    EventDestinationTestError["HANDLER_FLOW_FAILED"] = "HANDLER_FLOW_FAILED";
})(EventDestinationTestError || (exports.EventDestinationTestError = EventDestinationTestError = {}));
exports.EventDestinationHeaders = zod_1.z.record(HeaderName, HeaderValue)
    .refine(hasUniqueHeaderNames, form_errors_1.formErrors.duplicateHeaderName);
exports.EventDestinationHeadersRequest = zod_1.z.record(HeaderName, HeaderValue.nullable())
    .refine(hasUniqueHeaderNames, form_errors_1.formErrors.duplicateHeaderName);
exports.ListPlatformEventDestinationsRequestBody = zod_1.z.object({
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().optional(),
});
exports.CreatePlatformEventDestinationRequestBody = zod_1.z.object({
    events: zod_1.z.array(zod_1.z.enum(audit_events_1.ApplicationEventName)),
    url: zod_1.z.url(),
    enabled: zod_1.z.boolean().optional(),
    headers: exports.EventDestinationHeadersRequest.nullish(),
    format: zod_1.z.enum(EventDestinationFormat).optional(),
});
exports.UpdatePlatformEventDestinationRequestBody = exports.CreatePlatformEventDestinationRequestBody.partial();
exports.TestPlatformEventDestinationRequestBody = zod_1.z.object({
    url: zod_1.z.url(),
    event: zod_1.z.enum(audit_events_1.ApplicationEventName).optional(),
    headers: exports.EventDestinationHeaders.nullish(),
    format: zod_1.z.enum(EventDestinationFormat).optional(),
});
exports.TestPlatformEventDestinationResponse = zod_1.z.object({
    renderedBody: zod_1.z.unknown(),
    status: zod_1.z.number().optional(),
    durationMs: zod_1.z.number(),
    errorCode: zod_1.z.enum(EventDestinationTestError).optional(),
});
//# sourceMappingURL=dto.js.map