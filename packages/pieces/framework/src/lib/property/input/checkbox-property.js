"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.CheckboxProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { reveals: z.optional(z.array(z.string())) }), (0, common_1.TPropertyValue)(z.boolean(), property_type_1.PropertyType.CHECKBOX).shape));
//# sourceMappingURL=checkbox-property.js.map