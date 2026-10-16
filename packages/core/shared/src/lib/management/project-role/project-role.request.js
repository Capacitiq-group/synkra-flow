"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectMembersForProjectRoleRequestQuery = exports.UpdateProjectRoleRequestBody = exports.CreateProjectRoleRequestBody = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.CreateProjectRoleRequestBody = zod_1.z.object({
    name: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)),
    permissions: zod_1.z.array(zod_1.z.string()),
    type: zod_1.z.nativeEnum(core_utils_1.RoleType),
});
exports.UpdateProjectRoleRequestBody = zod_1.z.object({
    name: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)).optional(),
    permissions: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.ListProjectMembersForProjectRoleRequestQuery = zod_1.z.object({
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().optional(),
});
//# sourceMappingURL=project-role.request.js.map