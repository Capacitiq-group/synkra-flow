"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OIDCProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("../input/common");
const property_type_1 = require("../input/property-type");
const text_property_1 = require("../input/text-property");
const number_property_1 = require("../input/number-property");
const checkbox_property_1 = require("../input/checkbox-property");
const static_dropdown_1 = require("../input/dropdown/static-dropdown");
const secret_text_property_1 = require("./secret-text-property");
const common_2 = require("./common");
const markdown_property_1 = require("../input/markdown-property");
const OIDCAuthProps = z.record(z.string(), z.union([
    text_property_1.ShortTextProperty,
    text_property_1.LongTextProperty,
    secret_text_property_1.SecretTextProperty,
    number_property_1.NumberProperty,
    checkbox_property_1.CheckboxProperty,
    static_dropdown_1.StaticDropdownProperty,
    static_dropdown_1.StaticMultiSelectDropdownProperty,
    markdown_property_1.MarkDownProperty,
]));
exports.OIDCProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_2.BasePieceAuthSchema.shape), { props: OIDCAuthProps }), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.OIDC).shape));
//# sourceMappingURL=oidc-prop.js.map