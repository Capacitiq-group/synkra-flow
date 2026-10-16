"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.Cell = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { recordId: zod_1.z.string(), fieldId: zod_1.z.string(), projectId: zod_1.z.string(), value: zod_1.z.unknown() }));
//# sourceMappingURL=cell.js.map