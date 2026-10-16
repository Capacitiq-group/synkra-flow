"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAuthProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("../input/common");
const property_type_1 = require("../input/property-type");
const text_property_1 = require("../input/text-property");
const number_property_1 = require("../input/number-property");
const checkbox_property_1 = require("../input/checkbox-property");
const static_dropdown_1 = require("../input/dropdown/static-dropdown");
const common_2 = require("./common");
const CustomAuthProps = z.record(z.string(), z.union([
    text_property_1.ShortTextProperty,
    text_property_1.LongTextProperty,
    number_property_1.NumberProperty,
    checkbox_property_1.CheckboxProperty,
    static_dropdown_1.StaticDropdownProperty,
]));
exports.CustomAuthProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_2.BasePieceAuthSchema.shape), { props: CustomAuthProps }), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.CUSTOM_AUTH).shape));
//# sourceMappingURL=custom-auth-prop.js.map