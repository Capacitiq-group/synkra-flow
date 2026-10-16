"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MCP_ACTIVITY_PAYLOAD_MAX_BYTES = exports.McpActivityPayload = exports.ListMcpActivityRequestQuery = exports.PopulatedMcpActivity = exports.McpActivity = exports.McpActivityStatus = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user/user");
const mcp_oauth_1 = require("./mcp-oauth");
exports.McpActivityStatus = zod_1.z.enum(['SUCCEEDED', 'FAILED']);
exports.McpActivity = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), projectId: zod_1.z.string().nullable(), userId: zod_1.z.string(), clientKey: mcp_oauth_1.McpOAuthClientKey.nullable(), toolName: zod_1.z.string(), status: exports.McpActivityStatus, pieceName: zod_1.z.string().nullable(), actionName: zod_1.z.string().nullable(), connectionExternalId: zod_1.z.string().nullable(), errorMessage: zod_1.z.string().nullable(), durationMs: zod_1.z.number(), payloadFileId: zod_1.z.string().nullable(), payloadTruncated: zod_1.z.boolean() }));
exports.PopulatedMcpActivity = zod_1.z.object({
    id: zod_1.z.string(),
    created: zod_1.z.string(),
    status: exports.McpActivityStatus,
    toolName: zod_1.z.string(),
    clientKey: mcp_oauth_1.McpOAuthClientKey.nullable(),
    member: user_1.UserWithMetaInformation.nullable(),
    projectId: zod_1.z.string().nullable(),
    projectName: zod_1.z.string().nullable(),
    pieceName: zod_1.z.string().nullable(),
    actionName: zod_1.z.string().nullable(),
    connectionExternalId: zod_1.z.string().nullable(),
    connectionDisplayName: zod_1.z.string().nullable(),
    errorMessage: zod_1.z.string().nullable(),
    durationMs: zod_1.z.number(),
    hasPayload: zod_1.z.boolean(),
});
exports.ListMcpActivityRequestQuery = zod_1.z.object({
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().int().min(1).max(100).optional(),
    projectIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.union([core_utils_1.ApId, zod_1.z.literal(mcp_oauth_1.PLATFORM_WIDE_PROJECT_FILTER_VALUE)])),
    memberIds: (0, core_utils_1.OptionalArrayFromQuery)(core_utils_1.ApId),
    clientKeys: (0, core_utils_1.OptionalArrayFromQuery)(mcp_oauth_1.McpOAuthClientKey),
    statuses: (0, core_utils_1.OptionalArrayFromQuery)(exports.McpActivityStatus),
    createdAfter: core_utils_1.OptionalIsoDateTimeQuery,
    createdBefore: core_utils_1.OptionalIsoDateTimeQuery,
});
exports.McpActivityPayload = zod_1.z.object({
    input: zod_1.z.unknown(),
    output: zod_1.z.unknown(),
    truncated: zod_1.z.boolean(),
});
exports.MCP_ACTIVITY_PAYLOAD_MAX_BYTES = 128 * 1024;
//# sourceMappingURL=mcp-activity.js.map