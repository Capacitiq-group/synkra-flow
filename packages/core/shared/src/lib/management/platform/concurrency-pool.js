"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrencyPool = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.ConcurrencyPool = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, key: zod_1.z.string(), maxConcurrentJobs: zod_1.z.number().int().positive() }));
//# sourceMappingURL=concurrency-pool.js.map