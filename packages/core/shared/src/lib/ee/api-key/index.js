"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyRequest = exports.ApiKeyResponseWithoutValue = exports.ApiKeyResponseWithValue = exports.ApiKey = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.ApiKey = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, displayName: zod_1.z.string(), hashedValue: zod_1.z.string(), truncatedValue: zod_1.z.string(), lastUsedAt: (0, core_utils_1.Nullable)(zod_1.z.string()) }));
exports.ApiKeyResponseWithValue = exports.ApiKey.omit({ hashedValue: true }).extend({
    value: zod_1.z.string(),
});
exports.ApiKeyResponseWithoutValue = exports.ApiKey.omit({ hashedValue: true });
exports.CreateApiKeyRequest = zod_1.z.object({
    displayName: zod_1.z.string(),
});
//# sourceMappingURL=index.js.map