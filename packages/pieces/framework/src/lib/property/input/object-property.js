"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.ObjectProperty = z.object(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.record(z.string(), z.unknown()), property_type_1.PropertyType.OBJECT).shape));
//# sourceMappingURL=object-property.js.map