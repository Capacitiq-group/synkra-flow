"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookUrlParams = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.WebhookUrlParams = zod_1.z.object({
    flowId: core_utils_1.ApId,
});
//# sourceMappingURL=dto.js.map