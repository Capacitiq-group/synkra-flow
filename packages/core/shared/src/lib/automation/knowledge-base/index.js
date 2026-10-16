"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const KnowledgeBaseFile = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), fileId: zod_1.z.string(), displayName: zod_1.z.string() }));
//# sourceMappingURL=index.js.map