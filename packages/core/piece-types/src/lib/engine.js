"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerPayload = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.TriggerPayload = z.object({
    body: z.unknown(),
    rawBody: z.optional(z.unknown()),
    headers: z.record(z.string(), z.string()),
    queryParams: z.record(z.string(), z.string()),
});
//# sourceMappingURL=engine.js.map