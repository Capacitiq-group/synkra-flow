"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectMemberWithUser = exports.ProjectMember = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user/user");
const project_1 = require("../../management/project/project");
exports.ProjectMember = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, userId: core_utils_1.ApId, projectId: zod_1.z.string(), projectRoleId: core_utils_1.ApId })).describe('Project member is which user is assigned to a project.');
exports.ProjectMemberWithUser = exports.ProjectMember.extend({
    user: user_1.UserWithMetaInformation,
    projectRole: core_utils_1.ProjectRole,
    project: project_1.ProjectMetaData,
});
//# sourceMappingURL=project-member.js.map