"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectDropdownProperty = exports.DropdownProperty = void 0;
const tslib_1 = require("tslib");
const common_1 = require("../common");
const z = tslib_1.__importStar(require("zod/mini"));
const property_type_1 = require("../property-type");
exports.DropdownProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.DROPDOWN).shape), { refreshers: z.array(z.string()) }));
exports.MultiSelectDropdownProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.array(z.unknown()), property_type_1.PropertyType.MULTI_SELECT_DROPDOWN).shape), { refreshers: z.array(z.string()) }));
//# sourceMappingURL=dropdown-prop.js.map