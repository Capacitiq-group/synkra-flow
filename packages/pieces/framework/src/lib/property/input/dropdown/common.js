"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownState = exports.DropdownOption = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.DropdownOption = z.object({
    label: z.string(),
    value: z.unknown(),
    description: z.optional(z.string()),
    icon: z.optional(z.string()),
});
exports.DropdownState = z.object({
    disabled: z.optional(z.boolean()),
    placeholder: z.optional(z.string()),
    options: z.array(exports.DropdownOption)
});
//# sourceMappingURL=common.js.map