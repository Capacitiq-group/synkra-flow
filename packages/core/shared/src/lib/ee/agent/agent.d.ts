import { AgentToolType } from '@activepieces/core-piece-types';
import { AIProviderName } from '@activepieces/core-utils';
import { z } from 'zod';
import { ColorName } from '../../management/project/project';
declare const MAX_AGENT_TEXT_LENGTH = 51200;
declare const MAX_AGENT_TOOLS = 100;
declare const MAX_AGENT_OUTPUT_FIELDS = 50;
declare const MAX_AGENT_STEP_BUDGET = 1000;
declare const MAX_AGENT_SHARED_MEMBERS = 200;
declare const MAX_AGENT_PAGE_SIZE = 100;
declare const MAX_AGENT_SEARCH_LENGTH = 200;
declare const MAX_AGENT_NAME_LENGTH = 200;
declare const MAX_AGENT_DESCRIPTION_LENGTH = 2000;
declare const MAX_AGENT_CONFIG_BYTES = 128000;
declare const DEFAULT_AGENT_MAX_STEPS = 20;
declare const MAX_AGENT_TURN_WALL_CLOCK_MS: number;
declare enum AgentVisibility {
    PROJECT = "PROJECT",
    RESTRICTED = "RESTRICTED"
}
declare enum AgentIcon {
    BOT = "bot",
    SPARKLES = "sparkles",
    MESSAGE = "message-square",
    USERS = "users",
    BOOK = "book-open",
    CHART = "chart-line",
    CALENDAR = "calendar",
    MAIL = "mail",
    GLOBE = "globe",
    FILE = "file-text",
    SEARCH = "search",
    ZAP = "zap"
}
declare const AgentConfig: z.ZodObject<{
    instructions: z.ZodString;
    provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
    providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    maxSteps: z.ZodDefault<z.ZodNumber>;
    tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        pieceMetadata: z.ZodObject<{
            pieceName: z.ZodString;
            pieceVersion: z.ZodString;
            actionName: z.ZodString;
            predefinedInput: z.ZodOptional<z.ZodObject<{
                auth: z.ZodOptional<z.ZodString>;
                fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                    mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                    value: z.ZodUnknown;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        toolName: z.ZodString;
        type: z.ZodLiteral<AgentToolType.PIECE>;
    }, z.core.$strip>, z.ZodObject<{
        externalFlowId: z.ZodString;
        flowDisplayName: z.ZodOptional<z.ZodString>;
        toolName: z.ZodString;
        type: z.ZodLiteral<AgentToolType.FLOW>;
    }, z.core.$strip>, z.ZodObject<{
        serverUrl: z.ZodString;
        protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
        auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
            accessToken: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
            apiKey: z.ZodString;
            apiKeyHeader: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
            headers: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>], "type">;
        toolName: z.ZodString;
        type: z.ZodLiteral<AgentToolType.MCP>;
    }, z.core.$strip>, z.ZodObject<{
        sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
        sourceId: z.ZodString;
        sourceName: z.ZodString;
        toolName: z.ZodString;
        type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
    }, z.core.$strip>], "type">>>;
    structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const Agent: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    ownerId: import("zod/mini").ZodMiniString<string>;
    externalId: z.ZodString;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    displayName: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    icon: z.ZodEnum<typeof AgentIcon>;
    color: z.ZodEnum<typeof ColorName>;
    visibility: z.ZodEnum<typeof AgentVisibility>;
    sharedWithUserIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
    draft: z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    published: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
declare const AgentUsage: z.ZodObject<{
    total: z.ZodNumber;
    names: z.ZodArray<z.ZodString>;
    flows: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const AgentWithUsage: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    ownerId: import("zod/mini").ZodMiniString<string>;
    externalId: z.ZodString;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    displayName: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    icon: z.ZodEnum<typeof AgentIcon>;
    color: z.ZodEnum<typeof ColorName>;
    visibility: z.ZodEnum<typeof AgentVisibility>;
    sharedWithUserIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
    draft: z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    published: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    publishedFlowsUsingAgent: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        names: z.ZodArray<z.ZodString>;
        flows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const AgentSummary: z.ZodObject<{
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    displayName: z.ZodString;
    externalId: z.ZodString;
    projectId: import("zod/mini").ZodMiniString<string>;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    ownerId: import("zod/mini").ZodMiniString<string>;
    icon: z.ZodEnum<typeof AgentIcon>;
    color: z.ZodEnum<typeof ColorName>;
    visibility: z.ZodEnum<typeof AgentVisibility>;
    sharedWithUserIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
    isPublished: z.ZodBoolean;
    toolCount: z.ZodNumber;
    toolPieceNames: z.ZodArray<z.ZodString>;
    toolTypes: z.ZodArray<z.ZodEnum<typeof AgentToolType>>;
    projectDisplayName: z.ZodString;
    projectIsPrivate: z.ZodBoolean;
}, z.core.$strip>;
declare const CreateAgentRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    displayName: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    icon: z.ZodEnum<typeof AgentIcon>;
    color: z.ZodEnum<typeof ColorName>;
    visibility: z.ZodOptional<z.ZodEnum<typeof AgentVisibility>>;
    sharedWithUserIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    draft: z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const UpdateAgentRequest: z.ZodObject<{
    description: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    displayName: z.ZodOptional<z.ZodString>;
    folderId: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>>;
    icon: z.ZodOptional<z.ZodEnum<typeof AgentIcon>>;
    color: z.ZodOptional<z.ZodEnum<typeof ColorName>>;
    draft: z.ZodOptional<z.ZodObject<{
        instructions: z.ZodString;
        provider: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<typeof AIProviderName>>>;
        providerConfigId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        maxSteps: z.ZodDefault<z.ZodNumber>;
        tools: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            pieceMetadata: z.ZodObject<{
                pieceName: z.ZodString;
                pieceVersion: z.ZodString;
                actionName: z.ZodString;
                predefinedInput: z.ZodOptional<z.ZodObject<{
                    auth: z.ZodOptional<z.ZodString>;
                    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                        mode: z.ZodEnum<typeof import("@activepieces/core-execution").FieldControlMode>;
                        value: z.ZodUnknown;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.PIECE>;
        }, z.core.$strip>, z.ZodObject<{
            externalFlowId: z.ZodString;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.FLOW>;
        }, z.core.$strip>, z.ZodObject<{
            serverUrl: z.ZodString;
            protocol: z.ZodEnum<typeof import("@activepieces/core-execution").McpProtocol>;
            auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.NONE>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.ACCESS_TOKEN>;
                accessToken: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.API_KEY>;
                apiKey: z.ZodString;
                apiKeyHeader: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").McpAuthType.HEADERS>;
                headers: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>], "type">;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.MCP>;
        }, z.core.$strip>, z.ZodObject<{
            sourceType: z.ZodEnum<typeof import("@activepieces/core-execution").KnowledgeBaseSourceType>;
            sourceId: z.ZodString;
            sourceName: z.ZodString;
            toolName: z.ZodString;
            type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
        }, z.core.$strip>], "type">>>;
        structuredOutput: z.ZodDefault<z.ZodArray<z.ZodObject<{
            displayName: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<typeof import("@activepieces/core-execution").AgentOutputFieldType>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    visibility: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof AgentVisibility>>>;
    sharedWithUserIds: z.ZodOptional<z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>>;
    goLive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const GetAgentRequest: z.ZodObject<{
    includeUsage: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
declare enum AgentListSort {
    UPDATED = "updated",
    CREATED = "created",
    NAME = "name"
}
declare const MoveAgentRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
declare enum AgentMoveLossKind {
    CONNECTION = "connection",
    FLOW = "flow",
    KNOWLEDGE = "knowledge"
}
declare const AgentMoveLoss: z.ZodObject<{
    kind: z.ZodEnum<typeof AgentMoveLossKind>;
    label: z.ZodString;
}, z.core.$strip>;
declare const AgentMovePreview: z.ZodObject<{
    blockedByPublishedFlows: z.ZodObject<{
        total: z.ZodNumber;
        names: z.ZodArray<z.ZodString>;
        flows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    mayCreateAgentsThere: z.ZodBoolean;
    toolsThatStopWorking: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<typeof AgentMoveLossKind>;
        label: z.ZodString;
    }, z.core.$strip>>;
    membersLosingAccess: z.ZodNumber;
}, z.core.$strip>;
declare const ListAgentsRequest: z.ZodObject<{
    projectId: z.ZodOptional<import("zod/mini").ZodMiniString<string>>;
    search: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<typeof AgentListSort>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const ListAgentRunsRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    agentId: import("zod/mini").ZodMiniString<string>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const agentUtils: {
    isPublishable: (config: AgentConfig) => boolean;
};
export { AgentListSort, AgentMoveLoss, AgentMoveLossKind, AgentMovePreview, MoveAgentRequest, MAX_AGENT_SEARCH_LENGTH, Agent, AgentUsage, AgentWithUsage, GetAgentRequest, AgentSummary, agentUtils, AgentConfig, AgentIcon, AgentVisibility, CreateAgentRequest, DEFAULT_AGENT_MAX_STEPS, MAX_AGENT_TURN_WALL_CLOCK_MS, ListAgentRunsRequest, ListAgentsRequest, MAX_AGENT_OUTPUT_FIELDS, MAX_AGENT_CONFIG_BYTES, MAX_AGENT_DESCRIPTION_LENGTH, MAX_AGENT_NAME_LENGTH, MAX_AGENT_PAGE_SIZE, MAX_AGENT_SHARED_MEMBERS, MAX_AGENT_STEP_BUDGET, MAX_AGENT_TEXT_LENGTH, MAX_AGENT_TOOLS, UpdateAgentRequest, };
export type Agent = z.infer<typeof Agent>;
export type AgentSummary = z.infer<typeof AgentSummary>;
export type AgentUsage = z.infer<typeof AgentUsage>;
export type AgentWithUsage = z.infer<typeof AgentWithUsage>;
export type GetAgentRequest = z.infer<typeof GetAgentRequest>;
export type AgentConfig = z.infer<typeof AgentConfig>;
export type CreateAgentRequest = z.infer<typeof CreateAgentRequest>;
export type AgentMoveLoss = z.infer<typeof AgentMoveLoss>;
export type AgentMovePreview = z.infer<typeof AgentMovePreview>;
export type ListAgentRunsRequest = z.infer<typeof ListAgentRunsRequest>;
export type ListAgentsRequest = z.infer<typeof ListAgentsRequest>;
export type MoveAgentRequest = z.infer<typeof MoveAgentRequest>;
export type UpdateAgentRequest = z.infer<typeof UpdateAgentRequest>;
