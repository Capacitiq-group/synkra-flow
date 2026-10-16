"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVariableRequestBody = exports.UpsertVariableRequestBody = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const variable_1 = require("../variable");
exports.UpsertVariableRequestBody = zod_1.z.object({
    projectId: zod_1.z.string(),
    name: zod_1.z.string().min(1, 'formErrors.required').regex(variable_1.VARIABLE_NAME_REGEX, 'invalidVariableName'),
    value: zod_1.z.string().min(1, 'formErrors.required'),
    metadata: zod_1.z.optional(core_utils_1.Metadata),
});
exports.UpdateVariableRequestBody = zod_1.z.object({
    value: zod_1.z.string().min(1, 'formErrors.required').optional(),
    metadata: zod_1.z.optional(core_utils_1.Metadata),
});
//# sourceMappingURL=upsert-variable-request.js.map