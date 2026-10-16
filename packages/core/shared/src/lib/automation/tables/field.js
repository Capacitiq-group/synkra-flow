"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticDropdownEmptyOption = exports.Field = exports.FieldType = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "TEXT";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["DATE"] = "DATE";
    FieldType["DATETIME"] = "DATETIME";
    FieldType["STATIC_DROPDOWN"] = "STATIC_DROPDOWN";
})(FieldType || (exports.FieldType = FieldType = {}));
exports.Field = zod_1.z.union([zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: zod_1.z.string(), externalId: zod_1.z.string(), type: zod_1.z.literal(FieldType.STATIC_DROPDOWN), tableId: zod_1.z.string(), projectId: zod_1.z.string(), position: zod_1.z.number(), data: zod_1.z.object({
            options: zod_1.z.array(zod_1.z.object({
                value: zod_1.z.string(),
            })),
        }) })), zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: zod_1.z.string(), externalId: zod_1.z.string(), type: zod_1.z.union([zod_1.z.literal(FieldType.TEXT), zod_1.z.literal(FieldType.NUMBER), zod_1.z.literal(FieldType.DATE), zod_1.z.literal(FieldType.DATETIME)]), tableId: zod_1.z.string(), projectId: zod_1.z.string(), position: zod_1.z.number() }))]);
exports.StaticDropdownEmptyOption = {
    label: '',
    value: '',
};
//# sourceMappingURL=field.js.map