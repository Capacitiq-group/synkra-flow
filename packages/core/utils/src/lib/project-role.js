"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRole = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const base_model_1 = require("./base-model");
exports.ProjectRole = z.object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { name: z.string(), permissions: z.array(z.string()), platformId: (0, base_model_1.Nullable)(z.string()), type: z.string(), userCount: z.optional(z.number()) }));
//# sourceMappingURL=project-role.js.map