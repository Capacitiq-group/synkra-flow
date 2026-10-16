"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFieldsRequestQuery = exports.ReorderFieldsRequest = exports.UpdateFieldRequest = exports.CreateFieldRequest = void 0;
const zod_1 = require("zod");
const field_1 = require("../field");
const StaticDropdownData = zod_1.z.object({
    options: zod_1.z.array(zod_1.z.object({
        value: zod_1.z.string(),
    })),
});
exports.CreateFieldRequest = zod_1.z.union([zod_1.z.object({
        name: zod_1.z.string(),
        type: zod_1.z.literal(field_1.FieldType.STATIC_DROPDOWN),
        tableId: zod_1.z.string(),
        data: StaticDropdownData,
        externalId: zod_1.z.string().optional(),
        position: zod_1.z.number().int().nonnegative().optional(),
    }), zod_1.z.object({
        name: zod_1.z.string(),
        type: zod_1.z.union([zod_1.z.literal(field_1.FieldType.TEXT), zod_1.z.literal(field_1.FieldType.NUMBER), zod_1.z.literal(field_1.FieldType.DATE), zod_1.z.literal(field_1.FieldType.DATETIME)]),
        tableId: zod_1.z.string(),
        externalId: zod_1.z.string().optional(),
        position: zod_1.z.number().int().nonnegative().optional(),
    })]);
exports.UpdateFieldRequest = zod_1.z.object({
    name: zod_1.z.string().optional(),
});
exports.ReorderFieldsRequest = zod_1.z.object({
    tableId: zod_1.z.string(),
    fieldIds: zod_1.z.array(zod_1.z.string()),
});
exports.ListFieldsRequestQuery = zod_1.z.object({
    tableId: zod_1.z.string(),
});
//# sourceMappingURL=fields.dto.js.map