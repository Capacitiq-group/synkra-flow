"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiProviderUtils = exports.OPENAI_COMPATIBLE_VENDOR_BASE_URLS = exports.AI_PROVIDER_CAPABILITIES = exports.DEFAULT_CHAT_TIER_ID = exports.ACTIVEPIECES_IMAGE_TIERS = exports.ACTIVEPIECES_CHAT_TIERS = exports.ALLOWED_CHAT_MODELS_BY_PROVIDER = exports.AI_PROVIDER_ENTITY_TYPES = exports.AIErrorResponse = exports.GetProviderConfigResponse = exports.UpdateAIProviderRequest = exports.CreateAIProviderRequest = exports.AIProviderModel = exports.AIProviderModelMetadata = exports.ProjectAIProvider = exports.ProjectAIProviderKey = exports.AIProviderWithoutSensitiveData = exports.AiProviderProjectScope = exports.AiProviderModelScope = exports.AIProvider = exports.VertexProviderConfig = exports.VertexProviderAuthConfig = exports.ProviderModelConfig = exports.OpenRouterProviderConfig = exports.OpenRouterProviderAuthConfig = exports.OpenAIProviderConfig = exports.OpenAIProviderAuthConfig = exports.OpenAiCompatibleVendorConfig = exports.OpenAICompatibleProviderConfig = exports.OpenAICompatibleProviderAuthConfig = exports.MistralProviderConfig = exports.MistralProviderAuthConfig = exports.GoogleProviderConfig = exports.GoogleProviderAuthConfig = exports.CloudflareGatewayProviderConfig = exports.CloudflareGatewayProviderAuthConfig = exports.BedrockProviderConfig = exports.BedrockProviderAuthConfig = exports.BaseAIProviderAuthConfig = exports.AzureProviderConfig = exports.AzureProviderAuthConfig = exports.AnthropicProviderConfig = exports.AnthropicProviderAuthConfig = exports.AIProviderModelType = exports.aiProviderCredentials = exports.AiProviderCredentials = exports.AIProviderConfig = exports.AIProviderAuthConfig = exports.ActivePiecesProviderConfig = exports.ActivePiecesProviderAuthConfig = void 0;
exports.AI_PIECE_COST_BILLING_VERSION = void 0;
exports.getEffectiveProviderAndModel = getEffectiveProviderAndModel;
exports.splitCloudflareGatewayModelId = splitCloudflareGatewayModelId;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var core_utils_2 = require("@activepieces/core-utils");
Object.defineProperty(exports, "ActivePiecesProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.ActivePiecesProviderAuthConfig; } });
Object.defineProperty(exports, "ActivePiecesProviderConfig", { enumerable: true, get: function () { return core_utils_2.ActivePiecesProviderConfig; } });
Object.defineProperty(exports, "AIProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.AIProviderAuthConfig; } });
Object.defineProperty(exports, "AIProviderConfig", { enumerable: true, get: function () { return core_utils_2.AIProviderConfig; } });
Object.defineProperty(exports, "AiProviderCredentials", { enumerable: true, get: function () { return core_utils_2.AiProviderCredentials; } });
Object.defineProperty(exports, "aiProviderCredentials", { enumerable: true, get: function () { return core_utils_2.aiProviderCredentials; } });
Object.defineProperty(exports, "AIProviderModelType", { enumerable: true, get: function () { return core_utils_2.AIProviderModelType; } });
Object.defineProperty(exports, "AnthropicProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.AnthropicProviderAuthConfig; } });
Object.defineProperty(exports, "AnthropicProviderConfig", { enumerable: true, get: function () { return core_utils_2.AnthropicProviderConfig; } });
Object.defineProperty(exports, "AzureProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.AzureProviderAuthConfig; } });
Object.defineProperty(exports, "AzureProviderConfig", { enumerable: true, get: function () { return core_utils_2.AzureProviderConfig; } });
Object.defineProperty(exports, "BaseAIProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.BaseAIProviderAuthConfig; } });
Object.defineProperty(exports, "BedrockProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.BedrockProviderAuthConfig; } });
Object.defineProperty(exports, "BedrockProviderConfig", { enumerable: true, get: function () { return core_utils_2.BedrockProviderConfig; } });
Object.defineProperty(exports, "CloudflareGatewayProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.CloudflareGatewayProviderAuthConfig; } });
Object.defineProperty(exports, "CloudflareGatewayProviderConfig", { enumerable: true, get: function () { return core_utils_2.CloudflareGatewayProviderConfig; } });
Object.defineProperty(exports, "GoogleProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.GoogleProviderAuthConfig; } });
Object.defineProperty(exports, "GoogleProviderConfig", { enumerable: true, get: function () { return core_utils_2.GoogleProviderConfig; } });
Object.defineProperty(exports, "MistralProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.MistralProviderAuthConfig; } });
Object.defineProperty(exports, "MistralProviderConfig", { enumerable: true, get: function () { return core_utils_2.MistralProviderConfig; } });
Object.defineProperty(exports, "OpenAICompatibleProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.OpenAICompatibleProviderAuthConfig; } });
Object.defineProperty(exports, "OpenAICompatibleProviderConfig", { enumerable: true, get: function () { return core_utils_2.OpenAICompatibleProviderConfig; } });
Object.defineProperty(exports, "OpenAiCompatibleVendorConfig", { enumerable: true, get: function () { return core_utils_2.OpenAiCompatibleVendorConfig; } });
Object.defineProperty(exports, "OpenAIProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.OpenAIProviderAuthConfig; } });
Object.defineProperty(exports, "OpenAIProviderConfig", { enumerable: true, get: function () { return core_utils_2.OpenAIProviderConfig; } });
Object.defineProperty(exports, "OpenRouterProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.OpenRouterProviderAuthConfig; } });
Object.defineProperty(exports, "OpenRouterProviderConfig", { enumerable: true, get: function () { return core_utils_2.OpenRouterProviderConfig; } });
Object.defineProperty(exports, "ProviderModelConfig", { enumerable: true, get: function () { return core_utils_2.ProviderModelConfig; } });
Object.defineProperty(exports, "VertexProviderAuthConfig", { enumerable: true, get: function () { return core_utils_2.VertexProviderAuthConfig; } });
Object.defineProperty(exports, "VertexProviderConfig", { enumerable: true, get: function () { return core_utils_2.VertexProviderConfig; } });
const ProviderConfigUnion = zod_1.z.discriminatedUnion('provider', [
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.OPENAI),
        config: core_utils_1.OpenAIProviderConfig,
        auth: strictAuth(core_utils_1.OpenAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.OPENROUTER),
        config: core_utils_1.OpenRouterProviderConfig,
        auth: strictAuth(core_utils_1.OpenRouterProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.ANTHROPIC),
        config: core_utils_1.AnthropicProviderConfig,
        auth: strictAuth(core_utils_1.AnthropicProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.AZURE),
        config: core_utils_1.AzureProviderConfig,
        auth: strictAuth(core_utils_1.AzureProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.GOOGLE),
        config: core_utils_1.GoogleProviderConfig,
        auth: strictAuth(core_utils_1.GoogleProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY),
        config: core_utils_1.CloudflareGatewayProviderConfig,
        auth: strictAuth(core_utils_1.CloudflareGatewayProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.CUSTOM),
        config: core_utils_1.OpenAICompatibleProviderConfig,
        auth: strictAuth(core_utils_1.OpenAICompatibleProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.ACTIVEPIECES),
        config: core_utils_1.ActivePiecesProviderConfig,
        auth: strictAuth(core_utils_1.ActivePiecesProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.BEDROCK),
        config: core_utils_1.BedrockProviderConfig,
        auth: strictAuth(core_utils_1.BedrockProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.VERTEX),
        config: core_utils_1.VertexProviderConfig,
        auth: strictAuth(core_utils_1.VertexProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.MISTRAL),
        config: core_utils_1.MistralProviderConfig,
        auth: strictAuth(core_utils_1.MistralProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.XAI),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.DEEPSEEK),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.ZAI),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.QWEN),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.MINIMAX),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
    zod_1.z.object({
        displayName: zod_1.z.string().min(1),
        provider: zod_1.z.literal(core_utils_1.AIProviderName.MOONSHOT),
        config: core_utils_1.OpenAiCompatibleVendorConfig,
        auth: strictAuth(core_utils_1.BaseAIProviderAuthConfig),
    }),
]);
const StrictAIProviderAuthConfig = zod_1.z.union([
    strictAuth(core_utils_1.AnthropicProviderAuthConfig),
    strictAuth(core_utils_1.AzureProviderAuthConfig),
    strictAuth(core_utils_1.GoogleProviderAuthConfig),
    strictAuth(core_utils_1.OpenAIProviderAuthConfig),
    strictAuth(core_utils_1.OpenRouterProviderAuthConfig),
    strictAuth(core_utils_1.CloudflareGatewayProviderAuthConfig),
    strictAuth(core_utils_1.OpenAICompatibleProviderAuthConfig),
    strictAuth(core_utils_1.ActivePiecesProviderAuthConfig),
    strictAuth(core_utils_1.BedrockProviderAuthConfig),
    strictAuth(core_utils_1.VertexProviderAuthConfig),
    strictAuth(core_utils_1.MistralProviderAuthConfig),
]);
exports.AIProvider = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { displayName: zod_1.z.string().min(1), platformId: zod_1.z.string() })).and(ProviderConfigUnion);
exports.AiProviderModelScope = zod_1.z.enum(['all', 'selected']);
exports.AiProviderProjectScope = zod_1.z.enum(['all', 'selected', 'except']);
exports.AIProviderWithoutSensitiveData = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    provider: zod_1.z.nativeEnum(core_utils_1.AIProviderName),
    config: core_utils_1.AIProviderConfig,
    enabledForChat: zod_1.z.boolean(),
    modelScope: exports.AiProviderModelScope,
    modelIds: zod_1.z.array(zod_1.z.string()),
    projectScope: exports.AiProviderProjectScope,
    projectIds: zod_1.z.array(zod_1.z.string()),
    status: core_utils_1.AiProviderKeyStatus,
    statusReason: zod_1.z.string().nullable(),
    statusUpdated: zod_1.z.string().nullable(),
});
exports.ProjectAIProviderKey = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
});
exports.ProjectAIProvider = zod_1.z.object({
    provider: zod_1.z.enum(core_utils_1.AIProviderName),
    name: zod_1.z.string(),
    enabledForChat: zod_1.z.boolean(),
    keys: zod_1.z.array(exports.ProjectAIProviderKey),
});
exports.AIProviderModelMetadata = zod_1.z.object({
    contextTokens: zod_1.z.number().optional(),
    maxOutputTokens: zod_1.z.number().optional(),
    releaseDate: zod_1.z.string().optional(),
    inputCostPerMillionTokens: zod_1.z.number().optional(),
    outputCostPerMillionTokens: zod_1.z.number().optional(),
    supportsToolCalling: zod_1.z.boolean().optional(),
    supportsReasoning: zod_1.z.boolean().optional(),
    supportsVision: zod_1.z.boolean().optional(),
});
exports.AIProviderModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    type: zod_1.z.nativeEnum(core_utils_1.AIProviderModelType),
    metadata: exports.AIProviderModelMetadata.optional(),
});
exports.CreateAIProviderRequest = ProviderConfigUnion;
exports.UpdateAIProviderRequest = zod_1.z.object({
    displayName: zod_1.z.string().min(1),
    config: core_utils_1.AIProviderConfig.optional(),
    auth: StrictAIProviderAuthConfig.optional(),
    enabledForChat: zod_1.z.boolean().optional(),
    modelScope: exports.AiProviderModelScope.optional(),
    modelIds: zod_1.z.array(zod_1.z.string()).optional(),
    projectScope: exports.AiProviderProjectScope.optional(),
    projectIds: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.GetProviderConfigResponse = zod_1.z.object({
    configId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    modelScope: exports.AiProviderModelScope,
    modelIds: zod_1.z.array(zod_1.z.string()),
}).and(core_utils_1.AiProviderCredentials);
exports.AIErrorResponse = zod_1.z.object({
    error: zod_1.z.object({
        message: zod_1.z.string(),
        type: zod_1.z.string(),
        code: zod_1.z.string(),
    }),
});
/**
 * Resolves the effective provider and model for capability decisions. For direct providers
 * this is the same pair that came in. For Cloudflare Gateway (which tunnels to a submodel
 * like "openai/gpt-4"), it returns the underlying provider inferred from the prefix and the
 * submodel portion of the id.
 *
 * Callers can use this to decide which provider-specific capabilities apply (e.g. which
 * web-search tool builder to use, which advancedOptions schema to render). Unrecognized
 * prefixes or missing input fall back to the raw inputs so callers never end up with a
 * wrong-but-confident answer.
 */
function getEffectiveProviderAndModel({ provider, model, }) {
    var _a;
    if (provider !== core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY || !model) {
        return { provider, model };
    }
    const split = splitCloudflareGatewayModelId(model);
    // Prefix must match map keys (lowercase); some gateways/UI send "OpenAI/...".
    const gatewaySubmodelPrefix = ((_a = split.provider) !== null && _a !== void 0 ? _a : '').trim().toLowerCase();
    const mapped = CF_GATEWAY_SUBMODEL_TO_PROVIDER[gatewaySubmodelPrefix];
    if (!mapped) {
        return { provider, model };
    }
    return { provider: mapped, model: split.model };
}
function strictAuth(schema) {
    return zod_1.z.strictObject(schema.shape);
}
const CF_GATEWAY_SUBMODEL_TO_PROVIDER = {
    openai: core_utils_1.AIProviderName.OPENAI,
    anthropic: core_utils_1.AIProviderName.ANTHROPIC,
    'google-ai-studio': core_utils_1.AIProviderName.GOOGLE,
    'google-vertex-ai': core_utils_1.AIProviderName.GOOGLE,
};
/**
 * Splits a Cloudflare Gateway model ID into provider and model, i.e. "google-vertex-ai/google/gemini-2.5-pro" -> { provider: "google-vertex-ai", model: "google/gemini-2.5-pro" }.
 * @param modelId - The model ID to split.
 * @returns An object containing the provider and model.
 */
function splitCloudflareGatewayModelId(modelId) {
    const slashIndex = modelId.indexOf('/');
    if (slashIndex === -1) {
        //console.error(`Invalid model ID "${modelId}": expected format "provider/model"`)
        return {
            provider: undefined,
            model: modelId,
            publisher: undefined,
        };
    }
    // Normalize first path segment: AI Gateway and docs use lowercase (e.g. "openai/gpt-4o").
    const provider = modelId.substring(0, slashIndex).trim().toLowerCase();
    const rest = modelId.substring(slashIndex + 1);
    if (provider === 'google-vertex-ai') {
        const secondSlashIndex = rest.indexOf('/');
        if (secondSlashIndex === -1) {
            //console.error(`Invalid Google Vertex AI model ID "${modelId}": expected format "google-vertex-ai/publisher/model"`)
            return {
                provider: undefined,
                model: modelId,
                publisher: undefined,
            };
        }
        return {
            provider: 'google-vertex-ai',
            publisher: rest.substring(0, secondSlashIndex),
            model: rest.substring(secondSlashIndex + 1),
        };
    }
    return {
        provider,
        model: rest,
        publisher: undefined,
    };
}
var core_piece_types_1 = require("@activepieces/core-piece-types");
Object.defineProperty(exports, "AI_PROVIDER_ENTITY_TYPES", { enumerable: true, get: function () { return core_piece_types_1.AI_PROVIDER_ENTITY_TYPES; } });
Object.defineProperty(exports, "ALLOWED_CHAT_MODELS_BY_PROVIDER", { enumerable: true, get: function () { return core_piece_types_1.ALLOWED_CHAT_MODELS_BY_PROVIDER; } });
Object.defineProperty(exports, "ACTIVEPIECES_CHAT_TIERS", { enumerable: true, get: function () { return core_piece_types_1.ACTIVEPIECES_CHAT_TIERS; } });
Object.defineProperty(exports, "ACTIVEPIECES_IMAGE_TIERS", { enumerable: true, get: function () { return core_piece_types_1.ACTIVEPIECES_IMAGE_TIERS; } });
Object.defineProperty(exports, "DEFAULT_CHAT_TIER_ID", { enumerable: true, get: function () { return core_piece_types_1.DEFAULT_CHAT_TIER_ID; } });
Object.defineProperty(exports, "AI_PROVIDER_CAPABILITIES", { enumerable: true, get: function () { return core_piece_types_1.AI_PROVIDER_CAPABILITIES; } });
Object.defineProperty(exports, "OPENAI_COMPATIBLE_VENDOR_BASE_URLS", { enumerable: true, get: function () { return core_piece_types_1.OPENAI_COMPATIBLE_VENDOR_BASE_URLS; } });
Object.defineProperty(exports, "aiProviderUtils", { enumerable: true, get: function () { return core_piece_types_1.aiProviderUtils; } });
exports.AI_PIECE_COST_BILLING_VERSION = '0.11.0';
tslib_1.__exportStar(require("./platform-model-tier"), exports);
//# sourceMappingURL=index.js.map