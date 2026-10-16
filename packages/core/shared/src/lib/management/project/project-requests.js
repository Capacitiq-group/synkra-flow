"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectRequestForPlatformQueryParams = exports.CreatePlatformProjectRequest = exports.UpdateProjectPlatformRequest = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const project_1 = require("./project");
exports.UpdateProjectPlatformRequest = zod_1.z.object({
    releasesEnabled: zod_1.z.boolean().optional(),
    notifyFlowOwnerOnFailure: zod_1.z.boolean().optional(),
    displayName: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)).optional(),
    externalId: zod_1.z.string().optional(),
    metadata: zod_1.z.optional(core_utils_1.Metadata),
    icon: project_1.ProjectIcon.optional(),
    plan: zod_1.z.object({
        pieces: zod_1.z.array(zod_1.z.string()).optional(),
        piecesFilterType: zod_1.z.nativeEnum(project_1.PiecesFilterType).optional(),
        activeFlowsLimit: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.number().int().positive())),
    }).optional(),
    globalConnectionExternalIds: zod_1.z.array(zod_1.z.string()).optional(),
    maxConcurrentJobs: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.number().int().positive())),
    workerGroupId: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.string())),
    executionDataRetentionDays: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.number().int().positive())),
    sensitive: zod_1.z.boolean().optional(),
});
exports.CreatePlatformProjectRequest = zod_1.z.object({
    displayName: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)),
    externalId: (0, core_utils_1.Nullable)(zod_1.z.string()),
    metadata: (0, core_utils_1.Nullable)(core_utils_1.Metadata),
    maxConcurrentJobs: (0, core_utils_1.Nullable)(zod_1.z.number()),
    globalConnectionExternalIds: zod_1.z.array(zod_1.z.string()).optional(),
    alertReceiverEmail: zod_1.z.email().nullable().optional(),
    sensitive: zod_1.z.boolean().optional(),
});
exports.ListProjectRequestForPlatformQueryParams = zod_1.z.object({
    externalId: zod_1.z.string().optional(),
    externalUserId: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().optional(),
    cursor: zod_1.z.string().optional(),
    displayName: zod_1.z.string().optional(),
    types: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.nativeEnum(project_1.ProjectType)),
});
//# sourceMappingURL=project-requests.js.map