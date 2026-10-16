"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayProperty = exports.ArraySubProps = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
const text_property_1 = require("./text-property");
const static_dropdown_1 = require("./dropdown/static-dropdown");
const dropdown_prop_1 = require("./dropdown/dropdown-prop");
const checkbox_property_1 = require("./checkbox-property");
const number_property_1 = require("./number-property");
const file_property_1 = require("./file-property");
const date_time_property_1 = require("./date-time-property");
exports.ArraySubProps = z.record(z.string(), z.union([
    text_property_1.ShortTextProperty,
    text_property_1.LongTextProperty,
    static_dropdown_1.StaticDropdownProperty,
    dropdown_prop_1.MultiSelectDropdownProperty,
    static_dropdown_1.StaticMultiSelectDropdownProperty,
    checkbox_property_1.CheckboxProperty,
    number_property_1.NumberProperty,
    file_property_1.FileProperty,
    date_time_property_1.DateTimeProperty,
]));
exports.ArrayProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { properties: exports.ArraySubProps }), (0, common_1.TPropertyValue)(z.array(z.unknown()), property_type_1.PropertyType.ARRAY).shape));
//# sourceMappingURL=array-property.js.map