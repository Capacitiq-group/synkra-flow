import { z } from 'zod';
export declare enum AiToolCapability {
    WEB_SEARCH = "WEB_SEARCH",
    WEB_SCRAPING = "WEB_SCRAPING",
    IMAGE_GENERATION = "IMAGE_GENERATION"
}
export declare enum AiToolProvider {
    TAVILY = "tavily",
    FIRECRAWL = "firecrawl",
    APIFY = "apify",
    FAL = "fal",
    AI_PROVIDER = "ai_provider"
}
export declare const AiToolAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type AiToolAuthConfig = z.infer<typeof AiToolAuthConfig>;
export declare const AiToolProviderConfig: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type AiToolProviderConfig = z.infer<typeof AiToolProviderConfig>;
export declare const AiProviderToolConfig: z.ZodObject<{
    aiProviderId: z.ZodString;
    modelId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AiProviderToolConfig = z.infer<typeof AiProviderToolConfig>;
export declare const AiToolConfig: z.ZodObject<{
    platformId: z.ZodString;
    capability: z.ZodEnum<typeof AiToolCapability>;
    provider: z.ZodEnum<typeof AiToolProvider>;
    config: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type AiToolConfig = z.infer<typeof AiToolConfig>;
export declare const AiToolConfigWithoutSensitiveData: z.ZodObject<{
    id: z.ZodString;
    capability: z.ZodEnum<typeof AiToolCapability>;
    provider: z.ZodEnum<typeof AiToolProvider>;
    config: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodBoolean;
    hasApiKey: z.ZodBoolean;
}, z.core.$strip>;
export type AiToolConfigWithoutSensitiveData = z.infer<typeof AiToolConfigWithoutSensitiveData>;
export declare const CreateAiToolConfigRequest: z.ZodObject<{
    capability: z.ZodEnum<typeof AiToolCapability>;
    provider: z.ZodEnum<typeof AiToolProvider>;
    auth: z.ZodOptional<z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strip>>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateAiToolConfigRequest = z.infer<typeof CreateAiToolConfigRequest>;
export declare const UpdateAiToolConfigRequest: z.ZodObject<{
    provider: z.ZodOptional<z.ZodEnum<typeof AiToolProvider>>;
    auth: z.ZodOptional<z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strip>>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateAiToolConfigRequest = z.infer<typeof UpdateAiToolConfigRequest>;
export declare const ResolvedAiTool: z.ZodObject<{
    provider: z.ZodEnum<typeof AiToolProvider>;
    apiKey: z.ZodString;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type ResolvedAiTool = z.infer<typeof ResolvedAiTool>;
export declare const GetEnabledAiToolsResponse: z.ZodObject<{
    webSearch: z.ZodOptional<z.ZodObject<{
        provider: z.ZodEnum<typeof AiToolProvider>;
        apiKey: z.ZodString;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>;
    webScraping: z.ZodOptional<z.ZodObject<{
        provider: z.ZodEnum<typeof AiToolProvider>;
        apiKey: z.ZodString;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>;
    imageGeneration: z.ZodOptional<z.ZodObject<{
        provider: z.ZodEnum<typeof AiToolProvider>;
        apiKey: z.ZodString;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetEnabledAiToolsResponse = z.infer<typeof GetEnabledAiToolsResponse>;
export type AiProviderToolChoices = {
    webSearch?: AiProviderToolConfig;
    imageGeneration?: AiProviderToolConfig;
};
