import { AgentToolType, FieldControlMode, KnowledgeBaseSourceType, McpAuthType, McpProtocol } from '@activepieces/core-piece-types';
import { z } from 'zod';
export { AgentToolType, FieldControlMode, KnowledgeBaseSourceType, McpAuthType, McpProtocol, TASK_COMPLETION_TOOL_NAME } from '@activepieces/core-piece-types';
export declare const PredefinedInputField: z.ZodObject<{
    mode: z.ZodEnum<typeof FieldControlMode>;
    value: z.ZodUnknown;
}, z.core.$strip>;
export type PredefinedInputField = z.infer<typeof PredefinedInputField>;
export declare const PredefinedInputsStructure: z.ZodObject<{
    auth: z.ZodOptional<z.ZodString>;
    fields: z.ZodRecord<z.ZodString, z.ZodObject<{
        mode: z.ZodEnum<typeof FieldControlMode>;
        value: z.ZodUnknown;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PredefinedInputsStructure = z.infer<typeof PredefinedInputsStructure>;
export declare const McpAuthNone: z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.NONE>;
}, z.core.$strip>;
export declare const McpAuthAccessToken: z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.ACCESS_TOKEN>;
    accessToken: z.ZodString;
}, z.core.$strip>;
export declare const McpAuthApiKey: z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.API_KEY>;
    apiKey: z.ZodString;
    apiKeyHeader: z.ZodString;
}, z.core.$strip>;
export declare const McpAuthHeaders: z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.HEADERS>;
    headers: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export declare const McpAuthConfig: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.NONE>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.ACCESS_TOKEN>;
    accessToken: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.API_KEY>;
    apiKey: z.ZodString;
    apiKeyHeader: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<McpAuthType.HEADERS>;
    headers: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>], "type">;
export type McpAuthConfig = z.infer<typeof McpAuthConfig>;
export declare const AgentPieceToolMetadata: z.ZodObject<{
    pieceName: z.ZodString;
    pieceVersion: z.ZodString;
    actionName: z.ZodString;
    predefinedInput: z.ZodOptional<z.ZodObject<{
        auth: z.ZodOptional<z.ZodString>;
        fields: z.ZodRecord<z.ZodString, z.ZodObject<{
            mode: z.ZodEnum<typeof FieldControlMode>;
            value: z.ZodUnknown;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AgentPieceToolMetadata = z.infer<typeof AgentPieceToolMetadata>;
export declare const AgentPieceTool: z.ZodObject<{
    pieceMetadata: z.ZodObject<{
        pieceName: z.ZodString;
        pieceVersion: z.ZodString;
        actionName: z.ZodString;
        predefinedInput: z.ZodOptional<z.ZodObject<{
            auth: z.ZodOptional<z.ZodString>;
            fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                mode: z.ZodEnum<typeof FieldControlMode>;
                value: z.ZodUnknown;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.PIECE>;
}, z.core.$strip>;
export type AgentPieceTool = z.infer<typeof AgentPieceTool>;
export declare const AgentFlowTool: z.ZodObject<{
    externalFlowId: z.ZodString;
    flowDisplayName: z.ZodOptional<z.ZodString>;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.FLOW>;
}, z.core.$strip>;
export type AgentFlowTool = z.infer<typeof AgentFlowTool>;
export declare const AgentMcpTool: z.ZodObject<{
    serverUrl: z.ZodString;
    protocol: z.ZodEnum<typeof McpProtocol>;
    auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.NONE>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.ACCESS_TOKEN>;
        accessToken: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.API_KEY>;
        apiKey: z.ZodString;
        apiKeyHeader: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.HEADERS>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>], "type">;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.MCP>;
}, z.core.$strip>;
export type AgentMcpTool = z.infer<typeof AgentMcpTool>;
export declare const AgentKnowledgeBaseTool: z.ZodObject<{
    sourceType: z.ZodEnum<typeof KnowledgeBaseSourceType>;
    sourceId: z.ZodString;
    sourceName: z.ZodString;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
}, z.core.$strip>;
export type AgentKnowledgeBaseTool = z.infer<typeof AgentKnowledgeBaseTool>;
export declare const AgentTool: z.ZodDiscriminatedUnion<[z.ZodObject<{
    pieceMetadata: z.ZodObject<{
        pieceName: z.ZodString;
        pieceVersion: z.ZodString;
        actionName: z.ZodString;
        predefinedInput: z.ZodOptional<z.ZodObject<{
            auth: z.ZodOptional<z.ZodString>;
            fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                mode: z.ZodEnum<typeof FieldControlMode>;
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
    protocol: z.ZodEnum<typeof McpProtocol>;
    auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.NONE>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.ACCESS_TOKEN>;
        accessToken: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.API_KEY>;
        apiKey: z.ZodString;
        apiKeyHeader: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<McpAuthType.HEADERS>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>], "type">;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.MCP>;
}, z.core.$strip>, z.ZodObject<{
    sourceType: z.ZodEnum<typeof KnowledgeBaseSourceType>;
    sourceId: z.ZodString;
    sourceName: z.ZodString;
    toolName: z.ZodString;
    type: z.ZodLiteral<AgentToolType.KNOWLEDGE_BASE>;
}, z.core.$strip>], "type">;
export type AgentTool = z.infer<typeof AgentTool>;
