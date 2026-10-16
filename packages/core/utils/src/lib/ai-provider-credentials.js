"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiProviderCredentials = exports.AIProviderConfig = exports.AIProviderAuthConfig = exports.OpenAiCompatibleVendorConfig = exports.MistralProviderConfig = exports.VertexProviderConfig = exports.BedrockProviderConfig = exports.OpenRouterProviderConfig = exports.OpenAIProviderConfig = exports.GoogleProviderConfig = exports.AzureProviderConfig = exports.CloudflareGatewayProviderConfig = exports.OpenAICompatibleProviderConfig = exports.ProviderModelConfig = exports.ActivePiecesProviderConfig = exports.AnthropicProviderConfig = exports.MistralProviderAuthConfig = exports.BedrockProviderAuthConfig = exports.OpenRouterProviderAuthConfig = exports.OpenAIProviderAuthConfig = exports.GoogleProviderAuthConfig = exports.AzureProviderAuthConfig = exports.CloudflareGatewayProviderAuthConfig = exports.OpenAICompatibleProviderAuthConfig = exports.ActivePiecesProviderAuthConfig = exports.AnthropicProviderAuthConfig = exports.VertexProviderAuthConfig = exports.BaseAIProviderAuthConfig = exports.AIProviderModelType = void 0;
exports.aiProviderCredentials = aiProviderCredentials;
const zod_1 = require("zod");
const form_errors_1 = require("./form-errors");
const permission_1 = require("./permission");
var AIProviderModelType;
(function (AIProviderModelType) {
    AIProviderModelType["IMAGE"] = "image";
    AIProviderModelType["TEXT"] = "text";
})(AIProviderModelType || (exports.AIProviderModelType = AIProviderModelType = {}));
exports.BaseAIProviderAuthConfig = zod_1.z.object({
    apiKey: zod_1.z.string(),
});
exports.VertexProviderAuthConfig = zod_1.z.object({
    serviceAccountJson: zod_1.z.string().min(1),
});
exports.AnthropicProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.ActivePiecesProviderAuthConfig = exports.BaseAIProviderAuthConfig.extend({
    apiKeyHash: zod_1.z.string(),
});
exports.OpenAICompatibleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.CloudflareGatewayProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.AzureProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.GoogleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.OpenAIProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.OpenRouterProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.BedrockProviderAuthConfig = zod_1.z.object({
    accessKeyId: zod_1.z.string().min(1),
    secretAccessKey: zod_1.z.string().min(1),
    sessionToken: zod_1.z.string().optional(),
});
exports.MistralProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.AnthropicProviderConfig = zod_1.z.object({});
exports.ActivePiecesProviderConfig = zod_1.z.object({});
exports.ProviderModelConfig = zod_1.z.object({
    modelId: zod_1.z.string(),
    modelName: zod_1.z.string(),
    modelType: zod_1.z.enum(AIProviderModelType),
});
exports.OpenAICompatibleProviderConfig = zod_1.z.object({
    apiKeyHeader: zod_1.z.string(),
    baseUrl: zod_1.z.string(),
    models: zod_1.z.array(exports.ProviderModelConfig),
    defaultHeaders: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
    apiStyle: zod_1.z.enum(['chat', 'responses']).optional(),
});
exports.CloudflareGatewayProviderConfig = zod_1.z.object({
    accountId: zod_1.z.string(),
    gatewayId: zod_1.z.string(),
    models: zod_1.z.array(exports.ProviderModelConfig),
    vertexProject: zod_1.z.string().optional(),
    vertexRegion: zod_1.z.string().optional(),
});
exports.AzureProviderConfig = zod_1.z.object({
    resourceName: zod_1.z.string(),
    apiVersion: zod_1.z.preprocess((v) => (typeof v === 'string' && v.trim().length === 0 ? undefined : v), zod_1.z.string().optional()),
});
exports.GoogleProviderConfig = zod_1.z.object({});
exports.OpenAIProviderConfig = zod_1.z.object({});
exports.OpenRouterProviderConfig = zod_1.z.object({});
exports.BedrockProviderConfig = zod_1.z.object({
    region: zod_1.z.string().min(1),
});
exports.VertexProviderConfig = zod_1.z.object({
    project: zod_1.z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/, form_errors_1.formErrors.invalidGcpResourceId),
    region: zod_1.z.string().regex(/^[a-z0-9][a-z0-9-]{0,62}$/, form_errors_1.formErrors.invalidGcpResourceId),
    models: zod_1.z.array(exports.ProviderModelConfig),
});
exports.MistralProviderConfig = zod_1.z.object({});
exports.OpenAiCompatibleVendorConfig = zod_1.z.object({});
exports.AIProviderAuthConfig = zod_1.z.union([
    exports.AnthropicProviderAuthConfig,
    exports.AzureProviderAuthConfig,
    exports.GoogleProviderAuthConfig,
    exports.OpenAIProviderAuthConfig,
    exports.OpenRouterProviderAuthConfig,
    exports.CloudflareGatewayProviderAuthConfig,
    exports.OpenAICompatibleProviderAuthConfig,
    exports.ActivePiecesProviderAuthConfig,
    exports.BedrockProviderAuthConfig,
    exports.VertexProviderAuthConfig,
    exports.MistralProviderAuthConfig,
]);
// Order matters, put schemas with required fields first, empty ones last. This is to avoid empty objects matching any object.
exports.AIProviderConfig = zod_1.z.union([
    exports.OpenAICompatibleProviderConfig,
    exports.CloudflareGatewayProviderConfig,
    exports.AzureProviderConfig,
    exports.VertexProviderConfig,
    exports.BedrockProviderConfig,
    exports.AnthropicProviderConfig,
    exports.GoogleProviderConfig,
    exports.OpenAIProviderConfig,
    exports.OpenRouterProviderConfig,
    exports.ActivePiecesProviderConfig,
    exports.MistralProviderConfig,
    exports.OpenAiCompatibleVendorConfig,
]);
exports.AiProviderCredentials = zod_1.z.discriminatedUnion('provider', [
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.OPENAI), config: exports.OpenAIProviderConfig.partial(), auth: exports.OpenAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.OPENROUTER), config: exports.OpenRouterProviderConfig.partial(), auth: exports.OpenRouterProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.ANTHROPIC), config: exports.AnthropicProviderConfig.partial(), auth: exports.AnthropicProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.AZURE), config: exports.AzureProviderConfig.partial(), auth: exports.AzureProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.GOOGLE), config: exports.GoogleProviderConfig.partial(), auth: exports.GoogleProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.CLOUDFLARE_GATEWAY), config: exports.CloudflareGatewayProviderConfig.partial(), auth: exports.CloudflareGatewayProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.CUSTOM), config: exports.OpenAICompatibleProviderConfig.partial(), auth: exports.OpenAICompatibleProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.ACTIVEPIECES), config: exports.ActivePiecesProviderConfig.partial(), auth: exports.ActivePiecesProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.BEDROCK), config: exports.BedrockProviderConfig.partial(), auth: exports.BedrockProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.VERTEX), config: exports.VertexProviderConfig.partial(), auth: exports.VertexProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.MISTRAL), config: exports.MistralProviderConfig.partial(), auth: exports.MistralProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.XAI), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.DEEPSEEK), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.ZAI), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.QWEN), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.MINIMAX), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
    zod_1.z.object({ provider: zod_1.z.literal(permission_1.AIProviderName.MOONSHOT), config: exports.OpenAiCompatibleVendorConfig.partial(), auth: exports.BaseAIProviderAuthConfig.partial() }),
]);
function aiProviderCredentials({ provider, auth, config }) {
    const parsed = exports.AiProviderCredentials.safeParse({ provider, auth, config });
    if (parsed.success) {
        return parsed.data;
    }
    const authOnly = exports.AiProviderCredentials.safeParse({ provider, auth, config: {} });
    if (authOnly.success) {
        return authOnly.data;
    }
    return exports.AiProviderCredentials.parse({ provider, auth: {}, config: {} });
}
//# sourceMappingURL=ai-provider-credentials.js.map