"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMcpServerRequest = exports.McpReachResponse = exports.ProjectMcpServerResponse = exports.PopulatedMcpServer = exports.McpServer = exports.McpServerType = exports.MCP_TRIGGER_PIECE_NAME = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.MCP_TRIGGER_PIECE_NAME = '@activepieces/piece-mcp';
var McpServerType;
(function (McpServerType) {
    McpServerType["PLATFORM"] = "PLATFORM";
    McpServerType["PROJECT"] = "PROJECT";
})(McpServerType || (exports.McpServerType = McpServerType = {}));
exports.McpServer = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.nullable(core_utils_1.ApId), projectId: zod_1.z.nullable(core_utils_1.ApId), type: zod_1.z.enum([McpServerType.PLATFORM, McpServerType.PROJECT]), token: core_utils_1.ApId, disabledTools: zod_1.z.array(zod_1.z.string()).nullable() }));
exports.PopulatedMcpServer = exports.McpServer.extend({
    flows: zod_1.z.array(core_execution_1.PopulatedFlow),
});
exports.ProjectMcpServerResponse = exports.PopulatedMcpServer.extend({
    platformDisabledTools: zod_1.z.array(zod_1.z.string()),
});
exports.McpReachResponse = zod_1.z.object({
    projectIds: zod_1.z.array(core_utils_1.ApId).nullable(),
});
exports.UpdateMcpServerRequest = zod_1.z.object({
    disabledTools: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=mcp.js.map