"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TPropertyValue = exports.BasePropertySchema = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.BasePropertySchema = z.object({
    displayName: z.string(),
    description: z.optional(z.string()),
    advanced: z.optional(z.boolean()),
    width: z.optional(z.enum(['half', 'full'])),
    icon: z.optional(z.string()),
    placeholder: z.optional(z.string()),
});
const TPropertyValue = (_T, propertyType) => z.object({
    type: z.literal(propertyType),
    required: z.boolean(),
    defaultValue: z.optional(z.any()),
});
exports.TPropertyValue = TPropertyValue;
//# sourceMappingURL=common.js.map