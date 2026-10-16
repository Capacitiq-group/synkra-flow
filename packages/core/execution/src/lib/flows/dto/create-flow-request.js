"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFlowRequest = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
exports.CreateFlowRequest = zod_1.z.object({
    displayName: zod_1.z.string(),
    /**If folderId is provided, folderName is ignored */
    folderId: zod_1.z.string().optional(),
    folderName: zod_1.z.string().optional(),
    projectId: zod_1.z.string(),
    templateId: zod_1.z.string().optional(),
    metadata: zod_1.z.optional(core_utils_1.Metadata),
    externalId: zod_1.z.string().regex(core_utils_1.SAFE_EXTERNAL_ID_PATTERN, core_utils_1.formErrors.invalidExternalId).optional(),
});
//# sourceMappingURL=create-flow-request.js.map