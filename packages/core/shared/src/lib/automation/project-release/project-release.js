"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelease = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user");
const project_release_request_1 = require("./project-release.request");
exports.ProjectRelease = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), name: zod_1.z.string(), description: (0, core_utils_1.Nullable)(zod_1.z.string()), importedBy: (0, core_utils_1.Nullable)(zod_1.z.string()), fileId: zod_1.z.string(), type: zod_1.z.nativeEnum(project_release_request_1.ProjectReleaseType), importedByUser: user_1.UserWithMetaInformation.optional() }));
//# sourceMappingURL=project-release.js.map