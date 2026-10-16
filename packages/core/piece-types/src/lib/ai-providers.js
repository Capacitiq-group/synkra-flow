"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI_PROVIDER_ENTITY_TYPES = exports.aiProviderUtils = exports.AI_PROVIDER_CAPABILITIES = exports.ACTIVEPIECES_IMAGE_TIERS = exports.DEFAULT_CHAT_TIER_ID = exports.ACTIVEPIECES_CHAT_TIERS = exports.OPENAI_COMPATIBLE_VENDOR_BASE_URLS = exports.ALLOWED_CHAT_MODELS_BY_PROVIDER = exports.GetProviderConfigResponse = exports.ProjectAIProvider = exports.AIProviderWithoutSensitiveData = exports.AIProviderModel = exports.AIProviderConfig = exports.AIProviderAuthConfig = exports.OpenAiCompatibleVendorConfig = exports.VertexProviderConfig = exports.BedrockProviderConfig = exports.AzureProviderConfig = exports.CloudflareGatewayProviderConfig = exports.OpenAICompatibleProviderConfig = exports.ProviderModelConfig = exports.BedrockProviderAuthConfig = exports.VertexProviderAuthConfig = exports.BaseAIProviderAuthConfig = exports.AIProviderModelType = void 0;
exports.splitCloudflareGatewayModelId = splitCloudflareGatewayModelId;
exports.getEffectiveProviderAndModel = getEffectiveProviderAndModel;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
var AIProviderModelType;
(function (AIProviderModelType) {
    AIProviderModelType["IMAGE"] = "image";
    AIProviderModelType["TEXT"] = "text";
})(AIProviderModelType || (exports.AIProviderModelType = AIProviderModelType = {}));
exports.BaseAIProviderAuthConfig = z.object({
    apiKey: z.string(),
});
const AnthropicProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const ActivePiecesProviderAuthConfig = z.object({
    apiKey: z.string(),
    apiKeyHash: z.string(),
});
const OpenAICompatibleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const CloudflareGatewayProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const AzureProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const GoogleProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const OpenAIProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const OpenRouterProviderAuthConfig = exports.BaseAIProviderAuthConfig;
const MistralProviderAuthConfig = exports.BaseAIProviderAuthConfig;
exports.VertexProviderAuthConfig = z.object({
    serviceAccountJson: z.string().check(z.minLength(1)),
});
exports.BedrockProviderAuthConfig = z.object({
    accessKeyId: z.string().check(z.minLength(1)),
    secretAccessKey: z.string().check(z.minLength(1)),
    sessionToken: z.optional(z.string()),
});
const AnthropicProviderConfig = z.object({});
const ActivePiecesProviderConfig = z.object({});
const GoogleProviderConfig = z.object({});
const OpenAIProviderConfig = z.object({});
const OpenRouterProviderConfig = z.object({});
const MistralProviderConfig = z.object({});
exports.ProviderModelConfig = z.object({
    modelId: z.string(),
    modelName: z.string(),
    modelType: z.enum(AIProviderModelType),
});
exports.OpenAICompatibleProviderConfig = z.object({
    apiKeyHeader: z.string(),
    baseUrl: z.string(),
    models: z.array(exports.ProviderModelConfig),
    defaultHeaders: z.optional(z.record(z.string(), z.string())),
    apiStyle: z.optional(z.enum(['chat', 'responses'])),
});
exports.CloudflareGatewayProviderConfig = z.object({
    accountId: z.string(),
    gatewayId: z.string(),
    models: z.array(exports.ProviderModelConfig),
    vertexProject: z.optional(z.string()),
    vertexRegion: z.optional(z.string()),
});
exports.AzureProviderConfig = z.object({
    resourceName: z.string(),
    apiVersion: z.pipe(z.transform((v) => (typeof v === 'string' && v.trim().length === 0 ? undefined : v)), z.optional(z.string())),
});
exports.BedrockProviderConfig = z.object({
    region: z.string().check(z.minLength(1)),
});
exports.VertexProviderConfig = z.object({
    project: z.string().check(z.regex(/^[a-z0-9][a-z0-9-]{0,62}$/)),
    region: z.string().check(z.regex(/^[a-z0-9][a-z0-9-]{0,62}$/)),
    models: z.array(exports.ProviderModelConfig),
});
exports.OpenAiCompatibleVendorConfig = z.object({});
exports.AIProviderAuthConfig = z.union([
    AnthropicProviderAuthConfig,
    AzureProviderAuthConfig,
    GoogleProviderAuthConfig,
    OpenAIProviderAuthConfig,
    OpenRouterProviderAuthConfig,
    CloudflareGatewayProviderAuthConfig,
    OpenAICompatibleProviderAuthConfig,
    ActivePiecesProviderAuthConfig,
    exports.BedrockProviderAuthConfig,
    exports.VertexProviderAuthConfig,
    MistralProviderAuthConfig,
]);
// Order matters, put schemas with required fields first, empty ones last. This is to avoid empty objects matching any object.
exports.AIProviderConfig = z.union([
    exports.OpenAICompatibleProviderConfig,
    exports.CloudflareGatewayProviderConfig,
    exports.AzureProviderConfig,
    exports.VertexProviderConfig,
    exports.BedrockProviderConfig,
    AnthropicProviderConfig,
    GoogleProviderConfig,
    OpenAIProviderConfig,
    OpenRouterProviderConfig,
    ActivePiecesProviderConfig,
    MistralProviderConfig,
    exports.OpenAiCompatibleVendorConfig,
]);
exports.AIProviderModel = z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(AIProviderModelType),
});
exports.AIProviderWithoutSensitiveData = z.object({
    id: z.string(),
    name: z.string(),
    provider: z.enum(core_utils_1.AIProviderName),
    config: exports.AIProviderConfig,
    enabledForChat: z.boolean(),
});
exports.ProjectAIProvider = z.object({
    provider: z.enum(core_utils_1.AIProviderName),
    name: z.string(),
    enabledForChat: z.boolean(),
    keys: z.array(z.object({
        id: z.string(),
        name: z.string(),
    })),
});
exports.GetProviderConfigResponse = z.object({
    provider: z.enum(core_utils_1.AIProviderName),
    configId: z.string(),
    config: exports.AIProviderConfig,
    auth: exports.AIProviderAuthConfig,
    platformId: z.string(),
});
function splitCloudflareGatewayModelId(modelId) {
    const slashIndex = modelId.indexOf('/');
    if (slashIndex === -1) {
        return {
            provider: undefined,
            model: modelId,
            publisher: undefined,
        };
    }
    const provider = modelId.substring(0, slashIndex).trim().toLowerCase();
    const rest = modelId.substring(slashIndex + 1);
    if (provider === 'google-vertex-ai') {
        const secondSlashIndex = rest.indexOf('/');
        if (secondSlashIndex === -1) {
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
function getEffectiveProviderAndModel({ provider, model, }) {
    var _a;
    if (provider !== core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY || !model) {
        return { provider, model };
    }
    const split = splitCloudflareGatewayModelId(model);
    const gatewaySubmodelPrefix = ((_a = split.provider) !== null && _a !== void 0 ? _a : '').trim().toLowerCase();
    const mapped = CF_GATEWAY_SUBMODEL_TO_PROVIDER[gatewaySubmodelPrefix];
    if (!mapped) {
        return { provider, model };
    }
    return { provider: mapped, model: split.model };
}
const CF_GATEWAY_SUBMODEL_TO_PROVIDER = {
    openai: core_utils_1.AIProviderName.OPENAI,
    anthropic: core_utils_1.AIProviderName.ANTHROPIC,
    'google-ai-studio': core_utils_1.AIProviderName.GOOGLE,
    'google-vertex-ai': core_utils_1.AIProviderName.GOOGLE,
};
const OPENAI_CHAT_MODELS = ['gpt-5.5', 'gpt-5.4-mini', 'gpt-5.4-nano', 'gpt-4.1', 'gpt-4.1-mini'];
const ANTHROPIC_CHAT_MODELS = ['claude-sonnet-4-6', 'claude-opus-4-7', 'claude-haiku-4-5'];
const ANTHROPIC_OPENROUTER_CHAT_MODELS = ['claude-sonnet-4.6', 'claude-opus-4.7', 'claude-opus-4.8', 'claude-haiku-4.5'];
const GOOGLE_CHAT_MODELS = ['gemini-3.7-flash', 'gemini-3.1-pro-preview', 'gemini-3-flash-preview'];
const DEPRECATED_GOOGLE_CHAT_MODELS = ['gemini-2.5-pro', 'gemini-2.5-flash'];
const X_AI_OPENROUTER_CHAT_MODELS = ['grok-4.20'];
const DEPRECATED_CHAT_MODELS_BY_PROVIDER = {
    [core_utils_1.AIProviderName.GOOGLE]: DEPRECATED_GOOGLE_CHAT_MODELS,
    [core_utils_1.AIProviderName.VERTEX]: DEPRECATED_GOOGLE_CHAT_MODELS,
};
const REASONING_OPTIONAL_CHAT_MODELS = ANTHROPIC_OPENROUTER_CHAT_MODELS.map((model) => `${core_utils_1.AIProviderName.ANTHROPIC}/${model}`);
exports.ALLOWED_CHAT_MODELS_BY_PROVIDER = {
    [core_utils_1.AIProviderName.OPENAI]: OPENAI_CHAT_MODELS,
    [core_utils_1.AIProviderName.ANTHROPIC]: ANTHROPIC_CHAT_MODELS,
    [core_utils_1.AIProviderName.GOOGLE]: GOOGLE_CHAT_MODELS,
    [core_utils_1.AIProviderName.VERTEX]: GOOGLE_CHAT_MODELS,
    [core_utils_1.AIProviderName.ACTIVEPIECES]: [
        ...ANTHROPIC_OPENROUTER_CHAT_MODELS.map((m) => `${core_utils_1.AIProviderName.ANTHROPIC}/${m}`),
        ...OPENAI_CHAT_MODELS.map((m) => `${core_utils_1.AIProviderName.OPENAI}/${m}`),
        ...[...GOOGLE_CHAT_MODELS, ...DEPRECATED_GOOGLE_CHAT_MODELS].map((m) => `${core_utils_1.AIProviderName.GOOGLE}/${m}`),
        ...X_AI_OPENROUTER_CHAT_MODELS.map((m) => `x-ai/${m}`),
    ],
};
const CHAT_MODEL_LABELS = {
    'gpt-5.5': 'GPT-5.5',
    'gpt-5.4-mini': 'GPT-5.4 mini',
    'gpt-5.4-nano': 'GPT-5.4 nano',
    'gpt-4.1': 'GPT-4.1',
    'gpt-4.1-mini': 'GPT-4.1 mini',
    'claude-sonnet-4-6': 'Claude Sonnet 4.6',
    'claude-opus-4-7': 'Claude Opus 4.7',
    'claude-haiku-4-5': 'Claude Haiku 4.5',
    'gemini-2.5-pro': 'Gemini 2.5 Pro',
    'gemini-2.5-flash': 'Gemini 2.5 Flash',
    'gemini-3.7-flash': 'Gemini 3.7 Flash',
    'gemini-3.1-pro-preview': 'Gemini 3.1 Pro Preview',
    'gemini-3-flash-preview': 'Gemini 3 Flash Preview',
};
function getCuratedChatModels({ provider }) {
    const curatedIds = provider === core_utils_1.AIProviderName.ACTIVEPIECES ? undefined : exports.ALLOWED_CHAT_MODELS_BY_PROVIDER[provider];
    if ((0, core_utils_1.isNil)(curatedIds) || curatedIds.length === 0) {
        return undefined;
    }
    return curatedIds.map((id) => { var _a; return ({ id, label: (_a = CHAT_MODEL_LABELS[id]) !== null && _a !== void 0 ? _a : id }); });
}
function runnableChatModelIds({ provider }) {
    var _a, _b;
    const offered = ((_a = getCuratedChatModels({ provider })) !== null && _a !== void 0 ? _a : []).map((model) => model.id);
    return (0, core_utils_1.unique)([...offered, ...((_b = DEPRECATED_CHAT_MODELS_BY_PROVIDER[provider]) !== null && _b !== void 0 ? _b : [])]);
}
function canDisableReasoning({ modelId }) {
    return REASONING_OPTIONAL_CHAT_MODELS.includes(modelId);
}
function managedChatModelIds() {
    var _a;
    return (0, core_utils_1.unique)([
        ...(_a = exports.ALLOWED_CHAT_MODELS_BY_PROVIDER[core_utils_1.AIProviderName.ACTIVEPIECES]) !== null && _a !== void 0 ? _a : [],
        ...exports.ACTIVEPIECES_CHAT_TIERS.map((tier) => tier.modelId),
    ]);
}
function isManagedChatModelId({ modelId }) {
    return managedChatModelIds().includes(modelId);
}
function curatedChatModelIds() {
    return (0, core_utils_1.unique)([
        ...exports.ACTIVEPIECES_CHAT_TIERS.flatMap((tier) => [tier.id, tier.modelId]),
        ...Object.values(exports.ALLOWED_CHAT_MODELS_BY_PROVIDER).flatMap((curatedIds) => curatedIds !== null && curatedIds !== void 0 ? curatedIds : []),
        ...Object.values(DEPRECATED_CHAT_MODELS_BY_PROVIDER).flatMap((deprecatedIds) => deprecatedIds !== null && deprecatedIds !== void 0 ? deprecatedIds : []),
    ]);
}
function isCuratedChatModelId({ modelId }) {
    return curatedChatModelIds().includes(modelId);
}
function isChatModelId({ modelId }) {
    const baseModelId = fineTuneBaseModelId({ modelId: modelId.trim().toLowerCase() });
    if (NON_CHAT_MODEL_IDS.includes(baseModelId)) {
        return false;
    }
    if (NON_CHAT_MODEL_ID_PREFIXES.some((prefix) => baseModelId.startsWith(prefix))) {
        return false;
    }
    if (NON_CHAT_MODEL_ID_FRAGMENTS.some((fragment) => baseModelId.includes(fragment))) {
        return false;
    }
    const idTokens = baseModelId.split(MODEL_ID_TOKEN_SEPARATOR);
    return !NON_CHAT_MODEL_ID_TOKENS.some((token) => idTokens.includes(token));
}
function fineTuneBaseModelId({ modelId }) {
    var _a;
    if (modelId.startsWith(FINE_TUNE_PREFIX)) {
        return (_a = modelId.split(FINE_TUNE_SEGMENT_SEPARATOR)[1]) !== null && _a !== void 0 ? _a : modelId;
    }
    const azureFineTuneStart = modelId.indexOf(AZURE_FINE_TUNE_INFIX);
    return azureFineTuneStart > 0 ? modelId.slice(0, azureFineTuneStart) : modelId;
}
const FINE_TUNE_PREFIX = 'ft:';
const FINE_TUNE_SEGMENT_SEPARATOR = ':';
const AZURE_FINE_TUNE_INFIX = '.ft-';
const NON_CHAT_MODEL_IDS = ['babbage-002', 'davinci-002', 'sora'];
const NON_CHAT_MODEL_ID_PREFIXES = [
    'text-embedding-',
    'text-moderation-',
    'omni-moderation-',
    'tts-',
    'whisper-',
    'dall-e-',
    'sora-',
    'computer-use-',
    'codex-',
    'gpt-image-',
    'chatgpt-image-',
];
const NON_CHAT_MODEL_ID_FRAGMENTS = [
    'realtime',
    'audio',
    'transcribe',
    'whisper',
    'embed',
    'rerank',
    'moderation',
    'speech',
    'voice',
];
const NON_CHAT_MODEL_ID_TOKENS = ['tts', 'asr'];
const MODEL_ID_TOKEN_SEPARATOR = /[-_.:/]/;
const DEFAULT_MAX_CONTEXT_TOKENS = 128000;
const PROVIDER_MAX_CONTEXT_TOKENS = {
    [core_utils_1.AIProviderName.OPENAI]: 128000,
    [core_utils_1.AIProviderName.ANTHROPIC]: 200000,
    [core_utils_1.AIProviderName.GOOGLE]: 1048576,
    [core_utils_1.AIProviderName.BEDROCK]: 200000,
    [core_utils_1.AIProviderName.VERTEX]: 1048576,
    [core_utils_1.AIProviderName.AZURE]: 128000,
    [core_utils_1.AIProviderName.OPENROUTER]: 128000,
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 200000,
    [core_utils_1.AIProviderName.MISTRAL]: 128000,
};
function getMaxContextTokens({ provider }) {
    var _a;
    if (!provider)
        return DEFAULT_MAX_CONTEXT_TOKENS;
    return (_a = PROVIDER_MAX_CONTEXT_TOKENS[provider]) !== null && _a !== void 0 ? _a : DEFAULT_MAX_CONTEXT_TOKENS;
}
const DEFAULT_EMBEDDING_MODELS = {
    [core_utils_1.AIProviderName.OPENAI]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.GOOGLE]: 'text-embedding-004',
    [core_utils_1.AIProviderName.AZURE]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 'text-embedding-3-small',
    [core_utils_1.AIProviderName.OPENROUTER]: 'openai/text-embedding-3-small',
};
const WEB_SEARCH_MODE_BY_PROVIDER = {
    [core_utils_1.AIProviderName.ANTHROPIC]: 'native',
    [core_utils_1.AIProviderName.GOOGLE]: 'native',
    [core_utils_1.AIProviderName.OPENROUTER]: 'plugin',
    [core_utils_1.AIProviderName.ACTIVEPIECES]: 'plugin',
};
const NO_IMAGE_GENERATION_PROVIDERS = new Set([
    core_utils_1.AIProviderName.ANTHROPIC,
    core_utils_1.AIProviderName.MISTRAL,
    core_utils_1.AIProviderName.XAI,
    core_utils_1.AIProviderName.DEEPSEEK,
    core_utils_1.AIProviderName.ZAI,
    core_utils_1.AIProviderName.QWEN,
    core_utils_1.AIProviderName.MINIMAX,
    core_utils_1.AIProviderName.MOONSHOT,
]);
exports.OPENAI_COMPATIBLE_VENDOR_BASE_URLS = {
    [core_utils_1.AIProviderName.XAI]: 'https://api.x.ai/v1',
    [core_utils_1.AIProviderName.DEEPSEEK]: 'https://api.deepseek.com/v1',
    [core_utils_1.AIProviderName.ZAI]: 'https://api.z.ai/api/paas/v4',
    [core_utils_1.AIProviderName.QWEN]: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    [core_utils_1.AIProviderName.MINIMAX]: 'https://api.minimax.io/v1',
    [core_utils_1.AIProviderName.MOONSHOT]: 'https://api.moonshot.ai/v1',
};
function buildProviderCapabilities(provider) {
    return {
        chatModels: exports.ALLOWED_CHAT_MODELS_BY_PROVIDER[provider],
        maxContextTokens: getMaxContextTokens({ provider }),
        defaultEmbeddingModel: DEFAULT_EMBEDDING_MODELS[provider],
        supportsEmbedding: DEFAULT_EMBEDDING_MODELS[provider] !== undefined,
        supportsImageGeneration: !NO_IMAGE_GENERATION_PROVIDERS.has(provider),
        defaultImageModel: DEFAULT_IMAGE_MODELS[provider],
        webSearch: WEB_SEARCH_MODE_BY_PROVIDER[provider],
    };
}
exports.ACTIVEPIECES_CHAT_TIERS = [
    { id: 'fast', label: 'Fast', modelId: 'anthropic/claude-haiku-4.5', nativeModelId: 'claude-haiku-4-5', thinkingBudget: 5000 },
    { id: 'smart', label: 'Expert', modelId: 'anthropic/claude-sonnet-4.6', nativeModelId: 'claude-sonnet-4-6', thinkingBudget: 10000 },
    { id: 'premium', label: 'Heavy', modelId: 'anthropic/claude-opus-4.8', nativeModelId: 'claude-opus-4-7', thinkingBudget: 20000 },
];
exports.DEFAULT_CHAT_TIER_ID = 'smart';
exports.ACTIVEPIECES_IMAGE_TIERS = [
    { id: 'fast', label: 'Fast', modelId: 'google/gemini-3.1-flash-lite-image' },
    { id: 'smart', label: 'Expert', modelId: 'google/gemini-3.1-flash-image' },
    { id: 'premium', label: 'Heavy', modelId: 'google/gemini-3-pro-image' },
];
const DEFAULT_IMAGE_MODELS = {
    [core_utils_1.AIProviderName.ACTIVEPIECES]: exports.ACTIVEPIECES_IMAGE_TIERS[0].modelId,
    [core_utils_1.AIProviderName.OPENROUTER]: 'google/gemini-3.1-flash-lite-image',
    [core_utils_1.AIProviderName.OPENAI]: 'gpt-image-1.5',
    [core_utils_1.AIProviderName.GOOGLE]: 'gemini-3.1-flash-image',
};
exports.AI_PROVIDER_CAPABILITIES = {
    [core_utils_1.AIProviderName.OPENAI]: buildProviderCapabilities(core_utils_1.AIProviderName.OPENAI),
    [core_utils_1.AIProviderName.ANTHROPIC]: buildProviderCapabilities(core_utils_1.AIProviderName.ANTHROPIC),
    [core_utils_1.AIProviderName.OPENROUTER]: buildProviderCapabilities(core_utils_1.AIProviderName.OPENROUTER),
    [core_utils_1.AIProviderName.AZURE]: buildProviderCapabilities(core_utils_1.AIProviderName.AZURE),
    [core_utils_1.AIProviderName.GOOGLE]: buildProviderCapabilities(core_utils_1.AIProviderName.GOOGLE),
    [core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY]: buildProviderCapabilities(core_utils_1.AIProviderName.CLOUDFLARE_GATEWAY),
    [core_utils_1.AIProviderName.CUSTOM]: buildProviderCapabilities(core_utils_1.AIProviderName.CUSTOM),
    [core_utils_1.AIProviderName.BEDROCK]: buildProviderCapabilities(core_utils_1.AIProviderName.BEDROCK),
    [core_utils_1.AIProviderName.VERTEX]: buildProviderCapabilities(core_utils_1.AIProviderName.VERTEX),
    [core_utils_1.AIProviderName.MISTRAL]: buildProviderCapabilities(core_utils_1.AIProviderName.MISTRAL),
    [core_utils_1.AIProviderName.ACTIVEPIECES]: buildProviderCapabilities(core_utils_1.AIProviderName.ACTIVEPIECES),
    [core_utils_1.AIProviderName.XAI]: buildProviderCapabilities(core_utils_1.AIProviderName.XAI),
    [core_utils_1.AIProviderName.DEEPSEEK]: buildProviderCapabilities(core_utils_1.AIProviderName.DEEPSEEK),
    [core_utils_1.AIProviderName.ZAI]: buildProviderCapabilities(core_utils_1.AIProviderName.ZAI),
    [core_utils_1.AIProviderName.QWEN]: buildProviderCapabilities(core_utils_1.AIProviderName.QWEN),
    [core_utils_1.AIProviderName.MINIMAX]: buildProviderCapabilities(core_utils_1.AIProviderName.MINIMAX),
    [core_utils_1.AIProviderName.MOONSHOT]: buildProviderCapabilities(core_utils_1.AIProviderName.MOONSHOT),
};
exports.aiProviderUtils = {
    getMaxContextTokens,
    getCuratedChatModels,
    runnableChatModelIds,
    isCuratedChatModelId,
    managedChatModelIds,
    isManagedChatModelId,
    canDisableReasoning,
    isChatModelId,
};
exports.AI_PROVIDER_ENTITY_TYPES = {
    provider: 'AIProvider',
    chatProvider: 'ChatAiProvider',
};
//# sourceMappingURL=ai-providers.js.map