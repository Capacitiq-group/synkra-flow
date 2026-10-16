"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthProperty = exports.BasicAuthPropertyValue = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("../input/common");
const property_type_1 = require("../input/property-type");
const common_2 = require("./common");
exports.BasicAuthPropertyValue = z.object({
    username: z.string(),
    password: z.string(),
});
exports.BasicAuthProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_2.BasePieceAuthSchema.shape), { username: z.object({
        displayName: z.string(),
        description: z.optional(z.string())
    }), password: z.object({
        displayName: z.string(),
        description: z.optional(z.string())
    }) }), (0, common_1.TPropertyValue)(exports.BasicAuthPropertyValue, property_type_1.PropertyType.BASIC_AUTH).shape));
//# sourceMappingURL=basic-auth-prop.js.map