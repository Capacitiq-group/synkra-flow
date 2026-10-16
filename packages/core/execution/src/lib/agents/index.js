"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentStepBlock = exports.ToolCallContentBlock = exports.MarkdownContentBlock = exports.AgentOutputField = exports.ToolCallType = exports.ToolCallStatus = exports.ExecutionToolStatus = exports.ContentBlockType = exports.AgentTaskStatus = exports.AgentPieceProps = exports.AgentOutputFieldType = void 0;
const tslib_1 = require("tslib");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
tslib_1.__exportStar(require("./tools"), exports);
tslib_1.__exportStar(require("./mcp"), exports);
tslib_1.__exportStar(require("./mcp-tool-name-util"), exports);
var core_piece_types_2 = require("@activepieces/core-piece-types");
Object.defineProperty(exports, "AgentOutputFieldType", { enumerable: true, get: function () { return core_piece_types_2.AgentOutputFieldType; } });
Object.defineProperty(exports, "AgentPieceProps", { enumerable: true, get: function () { return core_piece_types_2.AgentPieceProps; } });
Object.defineProperty(exports, "AgentTaskStatus", { enumerable: true, get: function () { return core_piece_types_2.AgentTaskStatus; } });
Object.defineProperty(exports, "ContentBlockType", { enumerable: true, get: function () { return core_piece_types_2.ContentBlockType; } });
Object.defineProperty(exports, "ExecutionToolStatus", { enumerable: true, get: function () { return core_piece_types_2.ExecutionToolStatus; } });
Object.defineProperty(exports, "ToolCallStatus", { enumerable: true, get: function () { return core_piece_types_2.ToolCallStatus; } });
Object.defineProperty(exports, "ToolCallType", { enumerable: true, get: function () { return core_piece_types_2.ToolCallType; } });
exports.AgentOutputField = zod_1.z.object({
    displayName: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    type: zod_1.z.nativeEnum(core_piece_types_1.AgentOutputFieldType),
});
exports.MarkdownContentBlock = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.ContentBlockType.MARKDOWN),
    markdown: zod_1.z.string(),
});
const ToolCallBaseSchema = zod_1.z.object({
    type: zod_1.z.literal(core_piece_types_1.ContentBlockType.TOOL_CALL),
    input: (0, core_utils_1.Nullable)(zod_1.z.record(zod_1.z.string(), zod_1.z.unknown())),
    output: zod_1.z.unknown().optional(),
    toolName: zod_1.z.string(),
    status: zod_1.z.nativeEnum(core_piece_types_1.ToolCallStatus),
    toolCallId: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string().optional(),
});
exports.ToolCallContentBlock = zod_1.z.discriminatedUnion('toolCallType', [
    zod_1.z.object(Object.assign(Object.assign({}, ToolCallBaseSchema.shape), { toolCallType: zod_1.z.literal(core_piece_types_1.ToolCallType.PIECE), pieceName: zod_1.z.string(), pieceVersion: zod_1.z.string(), actionName: zod_1.z.string() })),
    zod_1.z.object(Object.assign(Object.assign({}, ToolCallBaseSchema.shape), { toolCallType: zod_1.z.literal(core_piece_types_1.ToolCallType.FLOW), displayName: zod_1.z.string(), externalFlowId: zod_1.z.string() })),
    zod_1.z.object(Object.assign(Object.assign({}, ToolCallBaseSchema.shape), { toolCallType: zod_1.z.literal(core_piece_types_1.ToolCallType.MCP), displayName: zod_1.z.string(), serverUrl: zod_1.z.string() })),
    zod_1.z.object(Object.assign(Object.assign({}, ToolCallBaseSchema.shape), { toolCallType: zod_1.z.literal(core_piece_types_1.ToolCallType.KNOWLEDGE_BASE), displayName: zod_1.z.string(), sourceType: zod_1.z.string() })),
    zod_1.z.object(Object.assign(Object.assign({}, ToolCallBaseSchema.shape), { toolCallType: zod_1.z.literal(core_piece_types_1.ToolCallType.UNKNOWN), displayName: zod_1.z.string() })),
]);
exports.AgentStepBlock = zod_1.z.union([exports.MarkdownContentBlock, exports.ToolCallContentBlock]);
//# sourceMappingURL=index.js.map