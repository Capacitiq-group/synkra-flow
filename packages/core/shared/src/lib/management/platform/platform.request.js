"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAllowedEmbedOriginsResponse = exports.AddAllowedEmbedOriginsRequestBody = exports.IncreaseAICreditsForPlatformRequestBody = exports.ApplyLicenseKeyByEmailRequestBody = exports.AdminRetryRunsRequestBody = exports.UpdatePlatformRequestBody = exports.CreatePlatformRequest = exports.Base64EncodedFile = exports.allowedEmbedOriginSchema = exports.MAX_EMBED_ORIGIN_LENGTH = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const federated_authn_1 = require("../../core/federated-authn");
const platform_model_1 = require("./platform.model");
exports.MAX_EMBED_ORIGIN_LENGTH = 300;
const ALLOWED_EMBED_ORIGIN_PROTOCOLS = new Set(['http:', 'https:']);
const WILDCARD_EMBED_ORIGIN_PATTERN = /^https?:\/\/\*\.[^*\s/?#]+$/;
exports.allowedEmbedOriginSchema = zod_1.z.string()
    .max(exports.MAX_EMBED_ORIGIN_LENGTH, 'invalidEmbedOrigin')
    .refine((value) => {
    const isWildcard = WILDCARD_EMBED_ORIGIN_PATTERN.test(value);
    const probe = isWildcard ? value.replace('://*.', '://wildcard.') : value;
    try {
        const url = new URL(probe);
        return ALLOWED_EMBED_ORIGIN_PROTOCOLS.has(url.protocol) && url.origin === probe;
    }
    catch (_a) {
        return false;
    }
}, 'invalidEmbedOrigin');
exports.Base64EncodedFile = zod_1.z.object({
    base64: zod_1.z.string(),
    mimetype: zod_1.z.string(),
});
exports.CreatePlatformRequest = zod_1.z.object({
    name: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)).min(1).max(100),
});
// The branding form submits as multipart (logo uploads), where every field arrives as a string
const jsonFromMultipart = (value) => {
    if (typeof value !== 'string') {
        return value;
    }
    const { data, error } = (0, core_utils_1.tryCatchSync)(() => JSON.parse(value));
    return error ? value : data;
};
const NullableThemeColorsFromMultipart = zod_1.z.preprocess(jsonFromMultipart, (0, core_utils_1.Nullable)(platform_model_1.PlatformThemeColors));
const NullablePieceSelectorConfigFromMultipart = zod_1.z.preprocess(jsonFromMultipart, (0, core_utils_1.Nullable)(platform_model_1.PieceSelectorConfig));
exports.UpdatePlatformRequestBody = zod_1.z.object({
    name: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)).optional(),
    primaryColor: zod_1.z.string().optional(),
    themeColors: NullableThemeColorsFromMultipart,
    logoIcon: zod_1.z.optional(core_utils_1.ApMultipartFile),
    fullLogo: zod_1.z.optional(core_utils_1.ApMultipartFile),
    favIcon: zod_1.z.optional(core_utils_1.ApMultipartFile),
    federatedAuthProviders: federated_authn_1.FederatedAuthnProviderConfig.optional(),
    cloudAuthEnabled: core_utils_1.OptionalBooleanFromQuery,
    googleAuthEnabled: core_utils_1.OptionalBooleanFromQuery,
    emailAuthEnabled: core_utils_1.OptionalBooleanFromQuery,
    autoCreatePersonalProjects: core_utils_1.OptionalBooleanFromQuery,
    allowedAuthDomains: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    enforceAllowedAuthDomains: core_utils_1.OptionalBooleanFromQuery,
    pinnedPieces: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    pieceSelectorConfig: NullablePieceSelectorConfigFromMultipart.optional(),
    allowedEmbedOrigins: zod_1.z.array(exports.allowedEmbedOriginSchema)
        .optional(),
    auditLogRetentionDays: (0, core_utils_1.Nullable)(zod_1.z.number().int().positive()),
});
exports.AdminRetryRunsRequestBody = zod_1.z.object({
    runIds: zod_1.z.array(core_utils_1.ApId).optional(),
    createdAfter: zod_1.z.string(),
    createdBefore: zod_1.z.string(),
});
exports.ApplyLicenseKeyByEmailRequestBody = zod_1.z.object({
    email: zod_1.z.string(),
    licenseKey: zod_1.z.string(),
});
exports.IncreaseAICreditsForPlatformRequestBody = zod_1.z.object({
    platformId: zod_1.z.string(),
    amountInUsd: zod_1.z.number(),
});
exports.AddAllowedEmbedOriginsRequestBody = zod_1.z.object({
    allowedEmbedOrigins: zod_1.z.array(exports.allowedEmbedOriginSchema)
        .min(1, 'invalidEmbedOrigin'),
});
exports.AddAllowedEmbedOriginsResponse = zod_1.z.object({
    allowedEmbedOrigins: zod_1.z.array(zod_1.z.string()),
});
//# sourceMappingURL=platform.request.js.map