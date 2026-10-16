"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFlowVersionRequest = exports.GetFlowQueryParamsRequest = exports.ListFlowsRequest = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const flow_1 = require("../flow");
const flow_version_1 = require("../flow-version");
exports.ListFlowsRequest = zod_1.z.object({
    folderId: zod_1.z.string().optional(),
    folderIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    limit: zod_1.z.coerce.number().optional(),
    cursor: zod_1.z.string().optional(),
    status: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.nativeEnum(flow_1.FlowStatus)),
    projectId: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    agentExternalIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    versionState: zod_1.z.nativeEnum(flow_version_1.FlowVersionState).optional(),
    connectionExternalIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    externalIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    sortBy: zod_1.z.enum(['NAME']).optional(),
    order: zod_1.z.enum(['ASC', 'DESC']).optional(),
});
exports.GetFlowQueryParamsRequest = zod_1.z.object({
    versionId: zod_1.z.string().optional(),
});
exports.ListFlowVersionRequest = zod_1.z.object({
    limit: zod_1.z.coerce.number().optional(),
    cursor: zod_1.z.string().optional(),
});
//# sourceMappingURL=list-flows-request.js.map