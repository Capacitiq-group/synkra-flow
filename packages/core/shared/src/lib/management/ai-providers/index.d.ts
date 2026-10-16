import { AIProviderModelType, AIProviderName } from '@activepieces/core-utils';
import { z } from 'zod';
export { ActivePiecesProviderAuthConfig, ActivePiecesProviderConfig, AIProviderAuthConfig, AIProviderConfig, AiProviderCredentials, aiProviderCredentials, AIProviderModelType, AnthropicProviderAuthConfig, AnthropicProviderConfig, AzureProviderAuthConfig, AzureProviderConfig, BaseAIProviderAuthConfig, BedrockProviderAuthConfig, BedrockProviderConfig, CloudflareGatewayProviderAuthConfig, CloudflareGatewayProviderConfig, GoogleProviderAuthConfig, GoogleProviderConfig, MistralProviderAuthConfig, MistralProviderConfig, OpenAICompatibleProviderAuthConfig, OpenAICompatibleProviderConfig, OpenAiCompatibleVendorConfig, OpenAIProviderAuthConfig, OpenAIProviderConfig, OpenRouterProviderAuthConfig, OpenRouterProviderConfig, ProviderModelConfig, VertexProviderAuthConfig, VertexProviderConfig } from '@activepieces/core-utils';
export declare const AIProvider: z.ZodIntersection<z.ZodObject<{
    displayName: z.ZodString;
    platformId: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.OPENAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.OPENROUTER>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ANTHROPIC>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.AZURE>;
    config: z.ZodObject<{
        resourceName: z.ZodString;
        apiVersion: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.GOOGLE>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.CLOUDFLARE_GATEWAY>;
    config: z.ZodObject<{
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
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.CUSTOM>;
    config: z.ZodObject<{
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
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ACTIVEPIECES>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
        apiKeyHash: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.BEDROCK>;
    config: z.ZodObject<{
        region: z.ZodString;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.VERTEX>;
    config: z.ZodObject<{
        project: z.ZodString;
        region: z.ZodString;
        models: z.ZodArray<z.ZodObject<{
            modelId: z.ZodString;
            modelName: z.ZodString;
            modelType: z.ZodEnum<typeof AIProviderModelType>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        serviceAccountJson: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MISTRAL>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.XAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.DEEPSEEK>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ZAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.QWEN>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MINIMAX>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MOONSHOT>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>], "provider">>;
export type AIProvider = z.infer<typeof AIProvider>;
export declare const AiProviderModelScope: z.ZodEnum<{
    all: "all";
    selected: "selected";
}>;
export type AiProviderModelScope = z.infer<typeof AiProviderModelScope>;
export declare const AiProviderProjectScope: z.ZodEnum<{
    all: "all";
    selected: "selected";
    except: "except";
}>;
export type AiProviderProjectScope = z.infer<typeof AiProviderProjectScope>;
export declare const AIProviderWithoutSensitiveData: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    provider: z.ZodEnum<typeof AIProviderName>;
    config: z.ZodUnion<readonly [z.ZodObject<{
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
    enabledForChat: z.ZodBoolean;
    modelScope: z.ZodEnum<{
        all: "all";
        selected: "selected";
    }>;
    modelIds: z.ZodArray<z.ZodString>;
    projectScope: z.ZodEnum<{
        all: "all";
        selected: "selected";
        except: "except";
    }>;
    projectIds: z.ZodArray<z.ZodString>;
    status: z.ZodEnum<{
        active: "active";
        out_of_credits: "out_of_credits";
        rejected: "rejected";
        unreachable: "unreachable";
    }>;
    statusReason: z.ZodNullable<z.ZodString>;
    statusUpdated: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AIProviderWithoutSensitiveData = z.infer<typeof AIProviderWithoutSensitiveData>;
export declare const ProjectAIProviderKey: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type ProjectAIProviderKey = z.infer<typeof ProjectAIProviderKey>;
export declare const ProjectAIProvider: z.ZodObject<{
    provider: z.ZodEnum<typeof AIProviderName>;
    name: z.ZodString;
    enabledForChat: z.ZodBoolean;
    keys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProjectAIProvider = z.infer<typeof ProjectAIProvider>;
export declare const AIProviderModelMetadata: z.ZodObject<{
    contextTokens: z.ZodOptional<z.ZodNumber>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    releaseDate: z.ZodOptional<z.ZodString>;
    inputCostPerMillionTokens: z.ZodOptional<z.ZodNumber>;
    outputCostPerMillionTokens: z.ZodOptional<z.ZodNumber>;
    supportsToolCalling: z.ZodOptional<z.ZodBoolean>;
    supportsReasoning: z.ZodOptional<z.ZodBoolean>;
    supportsVision: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AIProviderModelMetadata = z.infer<typeof AIProviderModelMetadata>;
export declare const AIProviderModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    type: z.ZodEnum<typeof AIProviderModelType>;
    metadata: z.ZodOptional<z.ZodObject<{
        contextTokens: z.ZodOptional<z.ZodNumber>;
        maxOutputTokens: z.ZodOptional<z.ZodNumber>;
        releaseDate: z.ZodOptional<z.ZodString>;
        inputCostPerMillionTokens: z.ZodOptional<z.ZodNumber>;
        outputCostPerMillionTokens: z.ZodOptional<z.ZodNumber>;
        supportsToolCalling: z.ZodOptional<z.ZodBoolean>;
        supportsReasoning: z.ZodOptional<z.ZodBoolean>;
        supportsVision: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AIProviderModel = z.infer<typeof AIProviderModel>;
export declare const CreateAIProviderRequest: z.ZodDiscriminatedUnion<[z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.OPENAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.OPENROUTER>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ANTHROPIC>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.AZURE>;
    config: z.ZodObject<{
        resourceName: z.ZodString;
        apiVersion: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.GOOGLE>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.CLOUDFLARE_GATEWAY>;
    config: z.ZodObject<{
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
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.CUSTOM>;
    config: z.ZodObject<{
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
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ACTIVEPIECES>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
        apiKeyHash: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.BEDROCK>;
    config: z.ZodObject<{
        region: z.ZodString;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.VERTEX>;
    config: z.ZodObject<{
        project: z.ZodString;
        region: z.ZodString;
        models: z.ZodArray<z.ZodObject<{
            modelId: z.ZodString;
            modelName: z.ZodString;
            modelType: z.ZodEnum<typeof AIProviderModelType>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        serviceAccountJson: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MISTRAL>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.XAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.DEEPSEEK>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.ZAI>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.QWEN>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MINIMAX>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>, z.ZodObject<{
    displayName: z.ZodString;
    provider: z.ZodLiteral<AIProviderName.MOONSHOT>;
    config: z.ZodObject<{}, z.core.$strip>;
    auth: z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>], "provider">;
export type CreateAIProviderRequest = z.infer<typeof CreateAIProviderRequest>;
export declare const UpdateAIProviderRequest: z.ZodObject<{
    displayName: z.ZodString;
    config: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
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
    }, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>]>>;
    auth: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
        apiKeyHash: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
        sessionToken: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        serviceAccountJson: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        apiKey: z.ZodString;
    }, z.core.$strict>]>>;
    enabledForChat: z.ZodOptional<z.ZodBoolean>;
    modelScope: z.ZodOptional<z.ZodEnum<{
        all: "all";
        selected: "selected";
    }>>;
    modelIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    projectScope: z.ZodOptional<z.ZodEnum<{
        all: "all";
        selected: "selected";
        except: "except";
    }>>;
    projectIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type UpdateAIProviderRequest = z.infer<typeof UpdateAIProviderRequest>;
export declare const GetProviderConfigResponse: z.ZodIntersection<z.ZodObject<{
    configId: z.ZodString;
    platformId: z.ZodString;
    modelScope: z.ZodEnum<{
        all: "all";
        selected: "selected";
    }>;
    modelIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "provider">>;
export type GetProviderConfigResponse = z.infer<typeof GetProviderConfigResponse>;
export declare const AIErrorResponse: z.ZodObject<{
    error: z.ZodObject<{
        message: z.ZodString;
        type: z.ZodString;
        code: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AIErrorResponse = z.infer<typeof AIErrorResponse>;
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
export declare function getEffectiveProviderAndModel({ provider, model, }: {
    provider: string | undefined;
    model: string | undefined;
}): {
    provider: string | undefined;
    model: string | undefined;
};
/**
 * Splits a Cloudflare Gateway model ID into provider and model, i.e. "google-vertex-ai/google/gemini-2.5-pro" -> { provider: "google-vertex-ai", model: "google/gemini-2.5-pro" }.
 * @param modelId - The model ID to split.
 * @returns An object containing the provider and model.
 */
export declare function splitCloudflareGatewayModelId(modelId: string): {
    provider: 'google-vertex-ai';
    publisher: string;
    model: string;
} | {
    provider: string;
    model: string;
    publisher: undefined;
} | {
    provider: undefined;
    model: string;
    publisher: undefined;
};
export { AI_PROVIDER_ENTITY_TYPES, ALLOWED_CHAT_MODELS_BY_PROVIDER, ACTIVEPIECES_CHAT_TIERS, ACTIVEPIECES_IMAGE_TIERS, DEFAULT_CHAT_TIER_ID, AI_PROVIDER_CAPABILITIES, OPENAI_COMPATIBLE_VENDOR_BASE_URLS, aiProviderUtils, } from '@activepieces/core-piece-types';
export type { ActivepiecesChatTier, ActivepiecesImageTier, AIProviderCapabilities, AIWebSearchMode, OpenAiCompatibleVendor } from '@activepieces/core-piece-types';
export declare const AI_PIECE_COST_BILLING_VERSION = "0.11.0";
export * from './platform-model-tier';
