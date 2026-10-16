"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicProperties = exports.DynamicPropsValue = exports.DynamicProp = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const static_dropdown_1 = require("./dropdown/static-dropdown");
const text_property_1 = require("./text-property");
const common_1 = require("./common");
const property_type_1 = require("./property-type");
const json_property_1 = require("./json-property");
const array_property_1 = require("./array-property");
exports.DynamicProp = z.union([
    text_property_1.ShortTextProperty,
    static_dropdown_1.StaticDropdownProperty,
    json_property_1.JsonProperty,
    array_property_1.ArrayProperty,
    static_dropdown_1.StaticMultiSelectDropdownProperty,
]);
exports.DynamicPropsValue = z.record(z.string(), exports.DynamicProp);
exports.DynamicProperties = z.object(Object.assign(Object.assign({ refreshers: z.array(z.string()) }, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.DYNAMIC).shape));
//# sourceMappingURL=dynamic-prop.js.map