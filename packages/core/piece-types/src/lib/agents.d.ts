import { AIProviderName } from "@activepieces/core-utils";
import * as z from "zod/mini";
export declare const TASK_COMPLETION_TOOL_NAME = "updateTaskStatus";
export declare enum AgentToolType {
    PIECE = "PIECE",
    FLOW = "FLOW",
    MCP = "MCP",
    KNOWLEDGE_BASE = "KNOWLEDGE_BASE"
}
export declare enum FieldControlMode {
    AGENT_DECIDE = "agent-decide",
    CHOOSE_YOURSELF = "choose-yourself",
    LEAVE_EMPTY = "leave-empty"
}
export declare enum KnowledgeBaseSourceType {
    FILE = "FILE",
    TABLE = "TABLE"
}
export declare enum McpProtocol {
    SSE = "sse",
    STREAMABLE_HTTP = "streamable-http",
    SIMPLE_HTTP = "http"
}
export declare enum McpAuthType {
    NONE = "none",
    ACCESS_TOKEN = "access_token",
    API_KEY = "api_key",
    HEADERS = "headers"
}
export declare enum AgentOutputFieldType {
    TEXT = "text",
    NUMBER = "number",
    BOOLEAN = "boolean"
}
export declare enum AgentTaskStatus {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS"
}
export declare enum ContentBlockType {
    MARKDOWN = "MARKDOWN",
    TOOL_CALL = "TOOL_CALL"
}
export declare enum ToolCallStatus {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed"
}
export declare enum ExecutionToolStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}
export declare enum ToolCallType {
    PIECE = "PIECE",
    FLOW = "FLOW",
    MCP = "MCP",
    KNOWLEDGE_BASE = "KNOWLEDGE_BASE",
    UNKNOWN = "UNKNOWN"
}
export declare enum AgentPieceProps {
    AGENT_ID = "agentId",
    AGENT_TOOLS = "agentTools",
    STRUCTURED_OUTPUT = "structuredOutput",
    PROMPT = "prompt",
    MAX_STEPS = "maxSteps",
    AI_PROVIDER_MODEL = "aiProviderModel",
    WEB_SEARCH = "webSearch",
    WEB_SEARCH_OPTIONS = "webSearchOptions"
}
export declare const PredefinedInputField: z.ZodMiniObject<{
    mode: z.ZodMiniEnum<typeof FieldControlMode>;
    value: z.ZodMiniUnknown;
}, z.z.core.$strip>;
export type PredefinedInputField = z.infer<typeof PredefinedInputField>;
export declare const PredefinedInputsStructure: z.ZodMiniObject<{
    auth: z.ZodMiniOptional<z.ZodMiniString<string>>;
    fields: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        mode: z.ZodMiniEnum<typeof FieldControlMode>;
        value: z.ZodMiniUnknown;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type PredefinedInputsStructure = z.infer<typeof PredefinedInputsStructure>;
export declare const AgentPieceToolMetadata: z.ZodMiniObject<{
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    actionName: z.ZodMiniString<string>;
    predefinedInput: z.ZodMiniOptional<z.ZodMiniObject<{
        auth: z.ZodMiniOptional<z.ZodMiniString<string>>;
        fields: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
            mode: z.ZodMiniEnum<typeof FieldControlMode>;
            value: z.ZodMiniUnknown;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type AgentPieceToolMetadata = z.infer<typeof AgentPieceToolMetadata>;
export declare const AgentPieceTool: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.PIECE>;
    toolName: z.ZodMiniString<string>;
    pieceMetadata: z.ZodMiniObject<{
        pieceName: z.ZodMiniString<string>;
        pieceVersion: z.ZodMiniString<string>;
        actionName: z.ZodMiniString<string>;
        predefinedInput: z.ZodMiniOptional<z.ZodMiniObject<{
            auth: z.ZodMiniOptional<z.ZodMiniString<string>>;
            fields: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
                mode: z.ZodMiniEnum<typeof FieldControlMode>;
                value: z.ZodMiniUnknown;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type AgentPieceTool = z.infer<typeof AgentPieceTool>;
export declare const McpAuthNone: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.NONE>;
}, z.z.core.$strip>;
export declare const McpAuthAccessToken: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.ACCESS_TOKEN>;
    accessToken: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const McpAuthApiKey: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.API_KEY>;
    apiKey: z.ZodMiniString<string>;
    apiKeyHeader: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const McpAuthHeaders: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.HEADERS>;
    headers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const McpAuthConfig: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.NONE>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.ACCESS_TOKEN>;
    accessToken: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.API_KEY>;
    apiKey: z.ZodMiniString<string>;
    apiKeyHeader: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<McpAuthType.HEADERS>;
    headers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
}, z.z.core.$strip>], "type">;
export type McpAuthConfig = z.infer<typeof McpAuthConfig>;
export declare const AgentFlowTool: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.FLOW>;
    toolName: z.ZodMiniString<string>;
    externalFlowId: z.ZodMiniString<string>;
    flowDisplayName: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type AgentFlowTool = z.infer<typeof AgentFlowTool>;
export declare const AgentMcpTool: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.MCP>;
    toolName: z.ZodMiniString<string>;
    serverUrl: z.ZodMiniURL;
    protocol: z.ZodMiniEnum<typeof McpProtocol>;
    auth: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.NONE>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.ACCESS_TOKEN>;
        accessToken: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.API_KEY>;
        apiKey: z.ZodMiniString<string>;
        apiKeyHeader: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.HEADERS>;
        headers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
    }, z.z.core.$strip>], "type">;
}, z.z.core.$strip>;
export type AgentMcpTool = z.infer<typeof AgentMcpTool>;
export declare const AgentKnowledgeBaseTool: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.KNOWLEDGE_BASE>;
    toolName: z.ZodMiniString<string>;
    sourceType: z.ZodMiniEnum<typeof KnowledgeBaseSourceType>;
    sourceId: z.ZodMiniString<string>;
    sourceName: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type AgentKnowledgeBaseTool = z.infer<typeof AgentKnowledgeBaseTool>;
export declare const AgentTool: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.PIECE>;
    toolName: z.ZodMiniString<string>;
    pieceMetadata: z.ZodMiniObject<{
        pieceName: z.ZodMiniString<string>;
        pieceVersion: z.ZodMiniString<string>;
        actionName: z.ZodMiniString<string>;
        predefinedInput: z.ZodMiniOptional<z.ZodMiniObject<{
            auth: z.ZodMiniOptional<z.ZodMiniString<string>>;
            fields: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
                mode: z.ZodMiniEnum<typeof FieldControlMode>;
                value: z.ZodMiniUnknown;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.FLOW>;
    toolName: z.ZodMiniString<string>;
    externalFlowId: z.ZodMiniString<string>;
    flowDisplayName: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.MCP>;
    toolName: z.ZodMiniString<string>;
    serverUrl: z.ZodMiniURL;
    protocol: z.ZodMiniEnum<typeof McpProtocol>;
    auth: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.NONE>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.ACCESS_TOKEN>;
        accessToken: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.API_KEY>;
        apiKey: z.ZodMiniString<string>;
        apiKeyHeader: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<McpAuthType.HEADERS>;
        headers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
    }, z.z.core.$strip>], "type">;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<AgentToolType.KNOWLEDGE_BASE>;
    toolName: z.ZodMiniString<string>;
    sourceType: z.ZodMiniEnum<typeof KnowledgeBaseSourceType>;
    sourceId: z.ZodMiniString<string>;
    sourceName: z.ZodMiniString<string>;
}, z.z.core.$strip>], "type">;
export type AgentTool = z.infer<typeof AgentTool>;
export declare const AgentOutputField: z.ZodMiniObject<{
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    type: z.ZodMiniEnum<typeof AgentOutputFieldType>;
}, z.z.core.$strip>;
export type AgentOutputField = z.infer<typeof AgentOutputField>;
export declare const MarkdownContentBlock: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<ContentBlockType.MARKDOWN>;
    markdown: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type MarkdownContentBlock = z.infer<typeof MarkdownContentBlock>;
declare const toolCallBaseSchema: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const ToolCallContentBlock: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.PIECE>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    actionName: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.FLOW>;
    displayName: z.ZodMiniString<string>;
    externalFlowId: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.MCP>;
    displayName: z.ZodMiniString<string>;
    serverUrl: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.KNOWLEDGE_BASE>;
    displayName: z.ZodMiniString<string>;
    sourceType: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.UNKNOWN>;
    displayName: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>], "toolCallType">;
export type ToolCallContentBlock = z.infer<typeof ToolCallContentBlock>;
export declare const AgentStepBlock: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<ContentBlockType.MARKDOWN>;
    markdown: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.PIECE>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    actionName: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.FLOW>;
    displayName: z.ZodMiniString<string>;
    externalFlowId: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.MCP>;
    displayName: z.ZodMiniString<string>;
    serverUrl: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.KNOWLEDGE_BASE>;
    displayName: z.ZodMiniString<string>;
    sourceType: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    toolCallType: z.ZodMiniLiteral<ToolCallType.UNKNOWN>;
    displayName: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<ContentBlockType.TOOL_CALL>;
    input: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>>;
    output: z.ZodMiniOptional<z.ZodMiniUnknown>;
    toolName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof ToolCallStatus>;
    toolCallId: z.ZodMiniString<string>;
    startTime: z.ZodMiniString<string>;
    endTime: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>], "toolCallType">]>;
export type AgentStepBlock = z.infer<typeof AgentStepBlock>;
export declare function buildAuthHeaders(authConfig: McpAuthConfig): Record<string, string>;
declare function createToolName(name: string): string;
declare function toValidToolName(name: string): string;
declare function suggestToolName(sourceName: string): string;
declare function isProviderSafeIdentifier(name: string): boolean;
declare function toProviderSafeIdentifier({ name, fallback }: {
    name: string;
    fallback: string;
}): string;
declare function createPieceToolName(pieceName: string, actionName: string): string;
export declare const mcpToolNameUtils: {
    createToolName: typeof createToolName;
    createPieceToolName: typeof createPieceToolName;
    toValidToolName: typeof toValidToolName;
    suggestToolName: typeof suggestToolName;
    isProviderSafeIdentifier: typeof isProviderSafeIdentifier;
    toProviderSafeIdentifier: typeof toProviderSafeIdentifier;
};
export type ToolCallBase = z.infer<typeof toolCallBaseSchema>;
export type AgentProviderModel = {
    provider: AIProviderName;
    model: string;
    configId?: string;
};
export type AgentResult = {
    prompt: string;
    steps: AgentStepBlock[];
    status: AgentTaskStatus;
    structuredOutput?: unknown;
    failure?: string;
};
export declare const AGENT_STEP_TIMEOUT_MS: number;
export declare const AGENT_STEP_TEST_TIMEOUT_MS: number;
export {};
