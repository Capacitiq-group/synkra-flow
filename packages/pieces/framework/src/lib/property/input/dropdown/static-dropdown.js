"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticMultiSelectDropdownProperty = exports.StaticDropdownProperty = exports.StaticDropdownDisplay = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("../common");
const common_2 = require("./common");
const property_type_1 = require("../property-type");
exports.StaticDropdownDisplay = z.enum(['cards']);
exports.StaticDropdownProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { options: common_2.DropdownState, display: z.optional(exports.StaticDropdownDisplay) }), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.STATIC_DROPDOWN).shape));
exports.StaticMultiSelectDropdownProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { options: common_2.DropdownState }), (0, common_1.TPropertyValue)(z.array(z.unknown()), property_type_1.PropertyType.STATIC_MULTI_SELECT_DROPDOWN).shape));
//# sourceMappingURL=static-dropdown.js.map