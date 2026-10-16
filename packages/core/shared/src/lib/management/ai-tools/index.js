"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEnabledAiToolsResponse = exports.ResolvedAiTool = exports.UpdateAiToolConfigRequest = exports.CreateAiToolConfigRequest = exports.AiToolConfigWithoutSensitiveData = exports.AiToolConfig = exports.AiProviderToolConfig = exports.AiToolProviderConfig = exports.AiToolAuthConfig = exports.AiToolProvider = exports.AiToolCapability = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
var AiToolCapability;
(function (AiToolCapability) {
    AiToolCapability["WEB_SEARCH"] = "WEB_SEARCH";
    AiToolCapability["WEB_SCRAPING"] = "WEB_SCRAPING";
    AiToolCapability["IMAGE_GENERATION"] = "IMAGE_GENERATION";
})(AiToolCapability || (exports.AiToolCapability = AiToolCapability = {}));
var AiToolProvider;
(function (AiToolProvider) {
    AiToolProvider["TAVILY"] = "tavily";
    AiToolProvider["FIRECRAWL"] = "firecrawl";
    AiToolProvider["APIFY"] = "apify";
    AiToolProvider["FAL"] = "fal";
    AiToolProvider["AI_PROVIDER"] = "ai_provider";
})(AiToolProvider || (exports.AiToolProvider = AiToolProvider = {}));
exports.AiToolAuthConfig = zod_1.z.object({
    apiKey: zod_1.z.string().min(1, form_errors_1.formErrors.required),
});
exports.AiToolProviderConfig = zod_1.z.record(zod_1.z.string(), zod_1.z.unknown());
exports.AiProviderToolConfig = zod_1.z.object({
    aiProviderId: zod_1.z.string().min(1, form_errors_1.formErrors.required),
    modelId: zod_1.z.string().min(1, form_errors_1.formErrors.required).optional(),
});
exports.AiToolConfig = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), capability: zod_1.z.enum(AiToolCapability), provider: zod_1.z.enum(AiToolProvider), config: exports.AiToolProviderConfig.nullable(), enabled: zod_1.z.boolean() }));
exports.AiToolConfigWithoutSensitiveData = zod_1.z.object({
    id: zod_1.z.string(),
    capability: zod_1.z.enum(AiToolCapability),
    provider: zod_1.z.enum(AiToolProvider),
    config: exports.AiToolProviderConfig.nullable(),
    enabled: zod_1.z.boolean(),
    hasApiKey: zod_1.z.boolean(),
});
exports.CreateAiToolConfigRequest = zod_1.z.object({
    capability: zod_1.z.enum(AiToolCapability),
    provider: zod_1.z.enum(AiToolProvider),
    auth: exports.AiToolAuthConfig.optional(),
    config: exports.AiToolProviderConfig.optional(),
    enabled: zod_1.z.boolean().optional(),
});
exports.UpdateAiToolConfigRequest = zod_1.z.object({
    provider: zod_1.z.enum(AiToolProvider).optional(),
    auth: exports.AiToolAuthConfig.optional(),
    config: exports.AiToolProviderConfig.optional(),
    enabled: zod_1.z.boolean().optional(),
});
exports.ResolvedAiTool = zod_1.z.object({
    provider: zod_1.z.enum(AiToolProvider),
    apiKey: zod_1.z.string(),
    config: exports.AiToolProviderConfig.optional(),
});
exports.GetEnabledAiToolsResponse = zod_1.z.object({
    webSearch: exports.ResolvedAiTool.optional(),
    webScraping: exports.ResolvedAiTool.optional(),
    imageGeneration: exports.ResolvedAiTool.optional(),
});
//# sourceMappingURL=index.js.map