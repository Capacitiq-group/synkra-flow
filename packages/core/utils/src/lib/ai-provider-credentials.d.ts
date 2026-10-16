import { z } from 'zod';
import { AIProviderName } from './permission';
export declare enum AIProviderModelType {
    IMAGE = "image",
    TEXT = "text"
}
export declare const BaseAIProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type BaseAIProviderAuthConfig = z.infer<typeof BaseAIProviderAuthConfig>;
export declare const VertexProviderAuthConfig: z.ZodObject<{
    serviceAccountJson: z.ZodString;
}, z.core.$strip>;
export type VertexProviderAuthConfig = z.infer<typeof VertexProviderAuthConfig>;
export declare const AnthropicProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type AnthropicProviderAuthConfig = z.infer<typeof AnthropicProviderAuthConfig>;
export declare const ActivePiecesProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
    apiKeyHash: z.ZodString;
}, z.core.$strip>;
export type ActivePiecesProviderAuthConfig = z.infer<typeof ActivePiecesProviderAuthConfig>;
export declare const OpenAICompatibleProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type OpenAICompatibleProviderAuthConfig = z.infer<typeof OpenAICompatibleProviderAuthConfig>;
export declare const CloudflareGatewayProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type CloudflareGatewayProviderAuthConfig = z.infer<typeof CloudflareGatewayProviderAuthConfig>;
export declare const AzureProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type AzureProviderAuthConfig = z.infer<typeof AzureProviderAuthConfig>;
export declare const GoogleProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type GoogleProviderAuthConfig = z.infer<typeof GoogleProviderAuthConfig>;
export declare const OpenAIProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type OpenAIProviderAuthConfig = z.infer<typeof OpenAIProviderAuthConfig>;
export declare const OpenRouterProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type OpenRouterProviderAuthConfig = z.infer<typeof OpenRouterProviderAuthConfig>;
export declare const BedrockProviderAuthConfig: z.ZodObject<{
    accessKeyId: z.ZodString;
    secretAccessKey: z.ZodString;
    sessionToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BedrockProviderAuthConfig = z.infer<typeof BedrockProviderAuthConfig>;
export declare const MistralProviderAuthConfig: z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>;
export type MistralProviderAuthConfig = z.infer<typeof MistralProviderAuthConfig>;
export declare const AnthropicProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type AnthropicProviderConfig = z.infer<typeof AnthropicProviderConfig>;
export declare const ActivePiecesProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type ActivePiecesProviderConfig = z.infer<typeof ActivePiecesProviderConfig>;
export declare const ProviderModelConfig: z.ZodObject<{
    modelId: z.ZodString;
    modelName: z.ZodString;
    modelType: z.ZodEnum<typeof AIProviderModelType>;
}, z.core.$strip>;
export type ProviderModelConfig = z.infer<typeof ProviderModelConfig>;
export declare const OpenAICompatibleProviderConfig: z.ZodObject<{
    apiKeyHeader: z.ZodString;
    baseUrl: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
    defaultHeaders: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    apiStyle: z.ZodOptional<z.ZodEnum<{
        chat: "chat";
        responses: "responses";
    }>>;
}, z.core.$strip>;
export type OpenAICompatibleProviderConfig = z.infer<typeof OpenAICompatibleProviderConfig>;
export declare const CloudflareGatewayProviderConfig: z.ZodObject<{
    accountId: z.ZodString;
    gatewayId: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
    vertexProject: z.ZodOptional<z.ZodString>;
    vertexRegion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CloudflareGatewayProviderConfig = z.infer<typeof CloudflareGatewayProviderConfig>;
export declare const AzureProviderConfig: z.ZodObject<{
    resourceName: z.ZodString;
    apiVersion: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type AzureProviderConfig = z.infer<typeof AzureProviderConfig>;
export declare const GoogleProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type GoogleProviderConfig = z.infer<typeof GoogleProviderConfig>;
export declare const OpenAIProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type OpenAIProviderConfig = z.infer<typeof OpenAIProviderConfig>;
export declare const OpenRouterProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type OpenRouterProviderConfig = z.infer<typeof OpenRouterProviderConfig>;
export declare const BedrockProviderConfig: z.ZodObject<{
    region: z.ZodString;
}, z.core.$strip>;
export type BedrockProviderConfig = z.infer<typeof BedrockProviderConfig>;
export declare const VertexProviderConfig: z.ZodObject<{
    project: z.ZodString;
    region: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type VertexProviderConfig = z.infer<typeof VertexProviderConfig>;
export declare const MistralProviderConfig: z.ZodObject<{}, z.core.$strip>;
export type MistralProviderConfig = z.infer<typeof MistralProviderConfig>;
export declare const OpenAiCompatibleVendorConfig: z.ZodObject<{}, z.core.$strip>;
export type OpenAiCompatibleVendorConfig = z.infer<typeof OpenAiCompatibleVendorConfig>;
export declare const AIProviderAuthConfig: z.ZodUnion<readonly [z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
    apiKeyHash: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    accessKeyId: z.ZodString;
    secretAccessKey: z.ZodString;
    sessionToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    serviceAccountJson: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    apiKey: z.ZodString;
}, z.core.$strip>]>;
export type AIProviderAuthConfig = z.infer<typeof AIProviderAuthConfig>;
export declare const AIProviderConfig: z.ZodUnion<readonly [z.ZodObject<{
    apiKeyHeader: z.ZodString;
    baseUrl: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
    defaultHeaders: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    apiStyle: z.ZodOptional<z.ZodEnum<{
        chat: "chat";
        responses: "responses";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    accountId: z.ZodString;
    gatewayId: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
    vertexProject: z.ZodOptional<z.ZodString>;
    vertexRegion: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    resourceName: z.ZodString;
    apiVersion: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    project: z.ZodString;
    region: z.ZodString;
    models: z.ZodArray<z.ZodObject<{
        modelId: z.ZodString;
        modelName: z.ZodString;
        modelType: z.ZodEnum<typeof AIProviderModelType>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    region: z.ZodString;
}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>]>;
export type AIProviderConfig = z.infer<typeof AIProviderConfig>;
export declare const AiProviderCredentials: z.ZodDiscriminatedUnion<[z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.OPENAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.OPENROUTER>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.ANTHROPIC>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.AZURE>;
    config: z.ZodObject<{
        resourceName: z.ZodOptional<z.ZodString>;
        apiVersion: z.ZodOptional<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.GOOGLE>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.CLOUDFLARE_GATEWAY>;
    config: z.ZodObject<{
        accountId: z.ZodOptional<z.ZodString>;
        gatewayId: z.ZodOptional<z.ZodString>;
        models: z.ZodOptional<z.ZodArray<z.ZodObject<{
            modelId: z.ZodString;
            modelName: z.ZodString;
            modelType: z.ZodEnum<typeof AIProviderModelType>;
        }, z.core.$strip>>>;
        vertexProject: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        vertexRegion: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.CUSTOM>;
    config: z.ZodObject<{
        apiKeyHeader: z.ZodOptional<z.ZodString>;
        baseUrl: z.ZodOptional<z.ZodString>;
        models: z.ZodOptional<z.ZodArray<z.ZodObject<{
            modelId: z.ZodString;
            modelName: z.ZodString;
            modelType: z.ZodEnum<typeof AIProviderModelType>;
        }, z.core.$strip>>>;
        defaultHeaders: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        apiStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            chat: "chat";
            responses: "responses";
        }>>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.ACTIVEPIECES>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
        apiKeyHash: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.BEDROCK>;
    config: z.ZodObject<{
        region: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        accessKeyId: z.ZodOptional<z.ZodString>;
        secretAccessKey: z.ZodOptional<z.ZodString>;
        sessionToken: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.VERTEX>;
    config: z.ZodObject<{
        project: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodString>;
        models: z.ZodOptional<z.ZodArray<z.ZodObject<{
            modelId: z.ZodString;
            modelName: z.ZodString;
            modelType: z.ZodEnum<typeof AIProviderModelType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        serviceAccountJson: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.MISTRAL>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.XAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.DEEPSEEK>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.ZAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.QWEN>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.MINIMAX>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<AIProviderName.MOONSHOT>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>], "provider">;
export type AiProviderCredentials = z.infer<typeof AiProviderCredentials>;
export declare function aiProviderCredentials({ provider, auth, config }: {
    provider: AIProviderName;
    auth: unknown;
    config: unknown;
}): AiProviderCredentials;
