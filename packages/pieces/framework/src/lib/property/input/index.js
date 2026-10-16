"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.InputProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const array_property_1 = require("./array-property");
const checkbox_property_1 = require("./checkbox-property");
const date_time_property_1 = require("./date-time-property");
const date_range_property_1 = require("./date-range-property");
const dropdown_prop_1 = require("./dropdown/dropdown-prop");
const static_dropdown_1 = require("./dropdown/static-dropdown");
const dynamic_prop_1 = require("./dynamic-prop");
const file_property_1 = require("./file-property");
const json_property_1 = require("./json-property");
const markdown_property_1 = require("./markdown-property");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const number_property_1 = require("./number-property");
const object_property_1 = require("./object-property");
const property_type_1 = require("./property-type");
const text_property_1 = require("./text-property");
const rich_text_property_1 = require("./rich-text-property");
const color_property_1 = require("./color-property");
exports.InputProperty = z.union([
    text_property_1.ShortTextProperty,
    text_property_1.LongTextProperty,
    rich_text_property_1.RichTextProperty,
    markdown_property_1.MarkDownProperty,
    checkbox_property_1.CheckboxProperty,
    static_dropdown_1.StaticDropdownProperty,
    static_dropdown_1.StaticMultiSelectDropdownProperty,
    dropdown_prop_1.DropdownProperty,
    dropdown_prop_1.MultiSelectDropdownProperty,
    dynamic_prop_1.DynamicProperties,
    number_property_1.NumberProperty,
    array_property_1.ArrayProperty,
    object_property_1.ObjectProperty,
    json_property_1.JsonProperty,
    date_time_property_1.DateTimeProperty,
    date_range_property_1.DateRangeProperty,
    file_property_1.FileProperty,
    color_property_1.ColorProperty,
]);
exports.Property = {
    ShortText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.SHORT_TEXT });
    },
    Checkbox(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.CHECKBOX });
    },
    LongText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.LONG_TEXT });
    },
    RichText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.RICH_TEXT });
    },
    MarkDown(request) {
        var _a;
        return {
            displayName: 'Markdown',
            required: false,
            description: request.value,
            type: property_type_1.PropertyType.MARKDOWN,
            valueSchema: undefined,
            variant: (_a = request.variant) !== null && _a !== void 0 ? _a : core_piece_types_1.MarkdownVariant.INFO,
        };
    },
    Number(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.NUMBER });
    },
    Json(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.JSON });
    },
    Array(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.ARRAY });
    },
    Object(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.OBJECT });
    },
    Dropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DROPDOWN });
    },
    StaticDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.STATIC_DROPDOWN });
    },
    MultiSelectDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.MULTI_SELECT_DROPDOWN });
    },
    DynamicProperties(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DYNAMIC });
    },
    StaticMultiSelectDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.STATIC_MULTI_SELECT_DROPDOWN });
    },
    DateTime(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DATE_TIME });
    },
    DateRange(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DATE_RANGE });
    },
    File(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.FILE });
    },
    Custom(request) {
        const code = request.code.toString();
        return Object.assign(Object.assign({}, request), { code, valueSchema: undefined, type: property_type_1.PropertyType.CUSTOM });
    },
    Color(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.COLOR });
    },
};
//# sourceMappingURL=index.js.map