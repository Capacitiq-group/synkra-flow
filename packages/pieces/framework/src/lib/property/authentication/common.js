"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePieceAuthSchema = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.BasePieceAuthSchema = z.object({
    displayName: z.string(),
    description: z.optional(z.string()),
    hasConnectionIdentifier: z.optional(z.boolean()),
});
//# sourceMappingURL=common.js.map