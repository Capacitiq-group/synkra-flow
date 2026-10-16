"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableWithoutSensitiveData = exports.VARIABLE_NAME_REGEX = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user");
exports.VARIABLE_NAME_REGEX = /^[a-zA-Z0-9_]+$/;
exports.VariableWithoutSensitiveData = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: zod_1.z.string(), projectId: zod_1.z.string(), platformId: zod_1.z.string(), ownerId: (0, core_utils_1.Nullable)(zod_1.z.string()), owner: (0, core_utils_1.Nullable)(user_1.UserWithMetaInformation), metadata: (0, core_utils_1.Nullable)(core_utils_1.Metadata) })).describe('A project-scoped encrypted variable that flows can reference via {{variables[\'NAME\']}}.');
//# sourceMappingURL=variable.js.map