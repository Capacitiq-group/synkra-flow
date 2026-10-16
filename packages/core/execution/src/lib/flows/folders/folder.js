"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UncategorizedFolderId = exports.Folder = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
exports.Folder = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { id: zod_1.z.string(), projectId: zod_1.z.string(), displayName: zod_1.z.string(), displayOrder: zod_1.z.number(), externalId: (0, core_utils_1.Nullable)(zod_1.z.string()) }));
exports.UncategorizedFolderId = 'NULL';
//# sourceMappingURL=folder.js.map