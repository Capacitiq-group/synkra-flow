"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AGENT_STEP_TEST_TIMEOUT_MS = exports.AGENT_STEP_TIMEOUT_MS = exports.mcpToolNameUtils = exports.AgentStepBlock = exports.ToolCallContentBlock = exports.MarkdownContentBlock = exports.AgentOutputField = exports.AgentTool = exports.AgentKnowledgeBaseTool = exports.AgentMcpTool = exports.AgentFlowTool = exports.McpAuthConfig = exports.McpAuthHeaders = exports.McpAuthApiKey = exports.McpAuthAccessToken = exports.McpAuthNone = exports.AgentPieceTool = exports.AgentPieceToolMetadata = exports.PredefinedInputsStructure = exports.PredefinedInputField = exports.AgentPieceProps = exports.ToolCallType = exports.ExecutionToolStatus = exports.ToolCallStatus = exports.ContentBlockType = exports.AgentTaskStatus = exports.AgentOutputFieldType = exports.McpAuthType = exports.McpProtocol = exports.KnowledgeBaseSourceType = exports.FieldControlMode = exports.AgentToolType = exports.TASK_COMPLETION_TOOL_NAME = void 0;
exports.buildAuthHeaders = buildAuthHeaders;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
exports.TASK_COMPLETION_TOOL_NAME = 'updateTaskStatus';
var AgentToolType;
(function (AgentToolType) {
    AgentToolType["PIECE"] = "PIECE";
    AgentToolType["FLOW"] = "FLOW";
    AgentToolType["MCP"] = "MCP";
    AgentToolType["KNOWLEDGE_BASE"] = "KNOWLEDGE_BASE";
})(AgentToolType || (exports.AgentToolType = AgentToolType = {}));
var FieldControlMode;
(function (FieldControlMode) {
    FieldControlMode["AGENT_DECIDE"] = "agent-decide";
    FieldControlMode["CHOOSE_YOURSELF"] = "choose-yourself";
    FieldControlMode["LEAVE_EMPTY"] = "leave-empty";
})(FieldControlMode || (exports.FieldControlMode = FieldControlMode = {}));
var KnowledgeBaseSourceType;
(function (KnowledgeBaseSourceType) {
    KnowledgeBaseSourceType["FILE"] = "FILE";
    KnowledgeBaseSourceType["TABLE"] = "TABLE";
})(KnowledgeBaseSourceType || (exports.KnowledgeBaseSourceType = KnowledgeBaseSourceType = {}));
var McpProtocol;
(function (McpProtocol) {
    McpProtocol["SSE"] = "sse";
    McpProtocol["STREAMABLE_HTTP"] = "streamable-http";
    McpProtocol["SIMPLE_HTTP"] = "http";
})(McpProtocol || (exports.McpProtocol = McpProtocol = {}));
var McpAuthType;
(function (McpAuthType) {
    McpAuthType["NONE"] = "none";
    McpAuthType["ACCESS_TOKEN"] = "access_token";
    McpAuthType["API_KEY"] = "api_key";
    McpAuthType["HEADERS"] = "headers";
})(McpAuthType || (exports.McpAuthType = McpAuthType = {}));
var AgentOutputFieldType;
(function (AgentOutputFieldType) {
    AgentOutputFieldType["TEXT"] = "text";
    AgentOutputFieldType["NUMBER"] = "number";
    AgentOutputFieldType["BOOLEAN"] = "boolean";
})(AgentOutputFieldType || (exports.AgentOutputFieldType = AgentOutputFieldType = {}));
var AgentTaskStatus;
(function (AgentTaskStatus) {
    AgentTaskStatus["COMPLETED"] = "COMPLETED";
    AgentTaskStatus["FAILED"] = "FAILED";
    AgentTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AgentTaskStatus || (exports.AgentTaskStatus = AgentTaskStatus = {}));
var ContentBlockType;
(function (ContentBlockType) {
    ContentBlockType["MARKDOWN"] = "MARKDOWN";
    ContentBlockType["TOOL_CALL"] = "TOOL_CALL";
})(ContentBlockType || (exports.ContentBlockType = ContentBlockType = {}));
var ToolCallStatus;
(function (ToolCallStatus) {
    ToolCallStatus["IN_PROGRESS"] = "in-progress";
    ToolCallStatus["COMPLETED"] = "completed";
})(ToolCallStatus || (exports.ToolCallStatus = ToolCallStatus = {}));
var ExecutionToolStatus;
(function (ExecutionToolStatus) {
    ExecutionToolStatus["SUCCESS"] = "SUCCESS";
    ExecutionToolStatus["FAILED"] = "FAILED";
})(ExecutionToolStatus || (exports.ExecutionToolStatus = ExecutionToolStatus = {}));
var ToolCallType;
(function (ToolCallType) {
    ToolCallType["PIECE"] = "PIECE";
    ToolCallType["FLOW"] = "FLOW";
    ToolCallType["MCP"] = "MCP";
    ToolCallType["KNOWLEDGE_BASE"] = "KNOWLEDGE_BASE";
    ToolCallType["UNKNOWN"] = "UNKNOWN";
})(ToolCallType || (exports.ToolCallType = ToolCallType = {}));
var AgentPieceProps;
(function (AgentPieceProps) {
    AgentPieceProps["AGENT_ID"] = "agentId";
    AgentPieceProps["AGENT_TOOLS"] = "agentTools";
    AgentPieceProps["STRUCTURED_OUTPUT"] = "structuredOutput";
    AgentPieceProps["PROMPT"] = "prompt";
    AgentPieceProps["MAX_STEPS"] = "maxSteps";
    AgentPieceProps["AI_PROVIDER_MODEL"] = "aiProviderModel";
    AgentPieceProps["WEB_SEARCH"] = "webSearch";
    AgentPieceProps["WEB_SEARCH_OPTIONS"] = "webSearchOptions";
})(AgentPieceProps || (exports.AgentPieceProps = AgentPieceProps = {}));
exports.PredefinedInputField = z.object({
    mode: z.enum(FieldControlMode),
    value: z.unknown(),
});
exports.PredefinedInputsStructure = z.object({
    auth: z.optional(z.string()),
    fields: z.record(z.string(), exports.PredefinedInputField),
});
exports.AgentPieceToolMetadata = z.object({
    pieceName: z.string(),
    pieceVersion: z.string(),
    actionName: z.string(),
    predefinedInput: z.optional(exports.PredefinedInputsStructure),
});
exports.AgentPieceTool = z.object({
    type: z.literal(AgentToolType.PIECE),
    toolName: z.string().check(z.minLength(1)),
    pieceMetadata: exports.AgentPieceToolMetadata,
});
exports.McpAuthNone = z.object({
    type: z.literal(McpAuthType.NONE),
});
exports.McpAuthAccessToken = z.object({
    type: z.literal(McpAuthType.ACCESS_TOKEN),
    accessToken: z.string(),
});
exports.McpAuthApiKey = z.object({
    type: z.literal(McpAuthType.API_KEY),
    apiKey: z.string(),
    apiKeyHeader: z.string(),
});
exports.McpAuthHeaders = z.object({
    type: z.literal(McpAuthType.HEADERS),
    headers: z.record(z.string(), z.string()),
});
exports.McpAuthConfig = z.discriminatedUnion('type', [
    exports.McpAuthNone,
    exports.McpAuthAccessToken,
    exports.McpAuthApiKey,
    exports.McpAuthHeaders,
]);
exports.AgentFlowTool = z.object({
    type: z.literal(AgentToolType.FLOW),
    toolName: z.string().check(z.minLength(1)),
    externalFlowId: z.string(),
    flowDisplayName: z.optional(z.string()),
});
exports.AgentMcpTool = z.object({
    type: z.literal(AgentToolType.MCP),
    toolName: z.string().check(z.minLength(1)),
    serverUrl: z.url(),
    protocol: z.enum(McpProtocol),
    auth: exports.McpAuthConfig,
});
exports.AgentKnowledgeBaseTool = z.object({
    type: z.literal(AgentToolType.KNOWLEDGE_BASE),
    toolName: z.string().check(z.minLength(1)),
    sourceType: z.enum(KnowledgeBaseSourceType),
    sourceId: z.string(),
    sourceName: z.string(),
});
exports.AgentTool = z.discriminatedUnion('type', [
    exports.AgentPieceTool,
    exports.AgentFlowTool,
    exports.AgentMcpTool,
    exports.AgentKnowledgeBaseTool,
]);
exports.AgentOutputField = z.object({
    displayName: z.string(),
    description: z.optional(z.string()),
    type: z.enum(AgentOutputFieldType),
});
exports.MarkdownContentBlock = z.object({
    type: z.literal(ContentBlockType.MARKDOWN),
    markdown: z.string(),
});
const toolCallBaseShape = {
    type: z.literal(ContentBlockType.TOOL_CALL),
    input: (0, core_utils_1.Nullable)(z.record(z.string(), z.unknown())),
    output: z.optional(z.unknown()),
    toolName: z.string(),
    status: z.enum(ToolCallStatus),
    toolCallId: z.string(),
    startTime: z.string(),
    endTime: z.optional(z.string()),
};
const toolCallBaseSchema = z.object(toolCallBaseShape);
exports.ToolCallContentBlock = z.discriminatedUnion('toolCallType', [
    z.object(Object.assign(Object.assign({}, toolCallBaseShape), { toolCallType: z.literal(ToolCallType.PIECE), pieceName: z.string(), pieceVersion: z.string(), actionName: z.string() })),
    z.object(Object.assign(Object.assign({}, toolCallBaseShape), { toolCallType: z.literal(ToolCallType.FLOW), displayName: z.string(), externalFlowId: z.string() })),
    z.object(Object.assign(Object.assign({}, toolCallBaseShape), { toolCallType: z.literal(ToolCallType.MCP), displayName: z.string(), serverUrl: z.string() })),
    z.object(Object.assign(Object.assign({}, toolCallBaseShape), { toolCallType: z.literal(ToolCallType.KNOWLEDGE_BASE), displayName: z.string(), sourceType: z.string() })),
    z.object(Object.assign(Object.assign({}, toolCallBaseShape), { toolCallType: z.literal(ToolCallType.UNKNOWN), displayName: z.string() })),
]);
exports.AgentStepBlock = z.union([exports.MarkdownContentBlock, exports.ToolCallContentBlock]);
function buildAuthHeaders(authConfig) {
    let headers = {};
    switch (authConfig.type) {
        case McpAuthType.NONE:
            break;
        case McpAuthType.HEADERS: {
            headers = authConfig.headers;
            break;
        }
        case McpAuthType.ACCESS_TOKEN: {
            headers['Authorization'] = `Bearer ${authConfig.accessToken}`;
            break;
        }
        case McpAuthType.API_KEY: {
            const headerName = authConfig.apiKeyHeader;
            headers[headerName] = authConfig.apiKey;
            break;
        }
    }
    return headers;
}
function shortHash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(h, 33) ^ str.charCodeAt(i)) >>> 0;
    }
    return h.toString(36).padStart(6, '0').slice(-6);
}
function sanitizeToolName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9_-]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
}
function createToolName(name) {
    const sanitized = sanitizeToolName(name);
    const prefix = sanitized.slice(0, MAX_PREFIX_LENGTH);
    const hash = shortHash(sanitized.length > 0 ? sanitized : name);
    return `${prefix}_${hash}_mcp`;
}
function toValidToolName(name) {
    if (PROVIDER_TOOL_NAME_PATTERN.test(name)) {
        return name;
    }
    const generated = createToolName(name);
    return PROVIDER_TOOL_NAME_PATTERN.test(generated) ? generated : createToolName(`tool_${name}`);
}
function suggestToolName(sourceName) {
    return toValidToolName(sanitizeToolName(sourceName));
}
function isProviderSafeIdentifier(name) {
    return PROVIDER_TOOL_NAME_PATTERN.test(name);
}
function toProviderSafeIdentifier({ name, fallback }) {
    if (isProviderSafeIdentifier(name)) {
        return name;
    }
    const sanitized = sanitizeToolName(name).slice(0, MAX_IDENTIFIER_LENGTH);
    if (sanitized.length === 0) {
        return fallback;
    }
    const seeded = /^[a-z_]/.test(sanitized) ? sanitized : `_${sanitized}`;
    return isProviderSafeIdentifier(seeded) ? seeded : fallback;
}
function createPieceToolName(pieceName, actionName) {
    const PIECE_NAME_PREFIX = 'piece-';
    const idx = pieceName.indexOf(PIECE_NAME_PREFIX);
    const shortPieceName = idx >= 0 ? pieceName.substring(idx + PIECE_NAME_PREFIX.length) : pieceName;
    return createToolName(`${shortPieceName}-${actionName}`);
}
const MAX_PREFIX_LENGTH = 53;
const MAX_IDENTIFIER_LENGTH = 64;
const PROVIDER_TOOL_NAME_PATTERN = /^[a-zA-Z_][a-zA-Z0-9_-]{0,63}$/;
exports.mcpToolNameUtils = { createToolName, createPieceToolName, toValidToolName, suggestToolName, isProviderSafeIdentifier, toProviderSafeIdentifier };
exports.AGENT_STEP_TIMEOUT_MS = 3 * 60 * 60 * 1000;
exports.AGENT_STEP_TEST_TIMEOUT_MS = 15 * 60 * 1000;
//# sourceMappingURL=agents.js.map