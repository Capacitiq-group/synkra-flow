"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.NumberProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { display: z.optional(z.enum(['stepper'])), min: z.optional(z.number()), max: z.optional(z.number()), step: z.optional(z.number()) }), (0, common_1.TPropertyValue)(z.number(), property_type_1.PropertyType.NUMBER).shape));
//# sourceMappingURL=number-property.js.map