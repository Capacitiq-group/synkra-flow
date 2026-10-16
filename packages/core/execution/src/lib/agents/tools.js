"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentTool = exports.AgentKnowledgeBaseTool = exports.AgentMcpTool = exports.AgentFlowTool = exports.AgentPieceTool = exports.AgentPieceToolMetadata = exports.McpAuthConfig = exports.McpAuthHeaders = exports.McpAuthApiKey = exports.McpAuthAccessToken = exports.McpAuthNone = exports.PredefinedInputsStructure = exports.PredefinedInputField = exports.TASK_COMPLETION_TOOL_NAME = exports.McpProtocol = exports.McpAuthType = exports.KnowledgeBaseSourceType = exports.FieldControlMode = exports.AgentToolType = void 0;
const core_piece_types_1 = require("@activepieces/core-piece-types");
const zod_1 = require("zod");
var core_piece_types_2 = require("@activepieces/core-piece-types");
Object.defineProperty(exports, "AgentToolType", { enumerable: true, get: function () { return core_piece_types_2.AgentToolType; } });
Object.defineProperty(exports, "FieldControlMode", { enumerable: true, get: function () { return core_piece_types_2.FieldControlMode; } });
Object.defineProperty(exports, "KnowledgeBaseSourceType", { enumerable: true, get: function () { return core_piece_types_2.KnowledgeBaseSourceType; } });
Object.defineProperty(exports, "McpAuthType", { enumerable: true, get: function () { return core_piece_types_2.McpAuthType; } });
Object.defineProperty(exports, "McpProtocol", { enumerable: true, get: function () { return core_piece_types_2.McpProtocol; } });
Object.defineProperty(exports, "TASK_COMPLETION_TOOL_NAME", { enumerable: true, get: function () { return core_piece_types_2.TASK_COMPLETION_TOOL_NAME; } });
exports.PredefinedInputField = zod_1.z.object({
    mode: zod_1.z.enum(core_piece_types_1.FieldControlMode),
    value: zod_1.z.unknown(),
});
exports.PredefinedInputsStructure = zod_1.z.object({
    auth: zod_1.z.string().optional(),
    fields: zod_1.z.record(zod_1.z.string(), exports.PredefinedInputField),
});
const AgentToolBase = {
    toolName: zod_1.z.string().min(1),
};
exports.McpAuthNone = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.McpAuthType.NONE),
});
exports.McpAuthAccessToken = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.McpAuthType.ACCESS_TOKEN),
    accessToken: zod_1.z.string(),
});
exports.McpAuthApiKey = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.McpAuthType.API_KEY),
    apiKey: zod_1.z.string(),
    apiKeyHeader: zod_1.z.string(),
});
exports.McpAuthHeaders = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.McpAuthType.HEADERS),
    headers: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
});
exports.McpAuthConfig = zod_1.z.discriminatedUnion('type', [
    exports.McpAuthNone,
    exports.McpAuthAccessToken,
    exports.McpAuthApiKey,
    exports.McpAuthHeaders,
]);
exports.AgentPieceToolMetadata = zod_1.z.object({
    pieceName: zod_1.z.string(),
    pieceVersion: zod_1.z.string(),
    actionName: zod_1.z.string(),
    predefinedInput: exports.PredefinedInputsStructure.optional(),
});
exports.AgentPieceTool = zod_1.z.object(Object.assign(Object.assign({ type: zod_1.z.literal(core_piece_types_1.AgentToolType.PIECE) }, AgentToolBase), { pieceMetadata: exports.AgentPieceToolMetadata }));
exports.AgentFlowTool = zod_1.z.object(Object.assign(Object.assign({ type: zod_1.z.literal(core_piece_types_1.AgentToolType.FLOW) }, AgentToolBase), { externalFlowId: zod_1.z.string(), flowDisplayName: zod_1.z.string().optional() }));
exports.AgentMcpTool = zod_1.z.object(Object.assign(Object.assign({ type: zod_1.z.literal(core_piece_types_1.AgentToolType.MCP) }, AgentToolBase), { serverUrl: zod_1.z.string().url(), protocol: zod_1.z.nativeEnum(core_piece_types_1.McpProtocol), auth: exports.McpAuthConfig }));
exports.AgentKnowledgeBaseTool = zod_1.z.object(Object.assign(Object.assign({ type: zod_1.z.literal(core_piece_types_1.AgentToolType.KNOWLEDGE_BASE) }, AgentToolBase), { sourceType: zod_1.z.nativeEnum(core_piece_types_1.KnowledgeBaseSourceType), sourceId: zod_1.z.string(), sourceName: zod_1.z.string() }));
exports.AgentTool = zod_1.z.discriminatedUnion('type', [
    exports.AgentPieceTool,
    exports.AgentFlowTool,
    exports.AgentMcpTool,
    exports.AgentKnowledgeBaseTool,
]);
//# sourceMappingURL=tools.js.map