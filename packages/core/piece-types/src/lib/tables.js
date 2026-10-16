"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticDropdownEmptyOption = exports.ListRecordsRequest = exports.Filter = exports.UpdateRecordRequest = exports.CreateRecordsRequest = exports.ListTablesRequest = exports.ExportTableResponse = exports.CreateTableWebhookRequest = exports.PopulatedRecord = exports.Table = exports.Field = exports.FilterOperator = exports.TableWebhookEventType = exports.TableAutomationStatus = exports.TableAutomationTrigger = exports.FieldType = void 0;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "TEXT";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["DATE"] = "DATE";
    FieldType["DATETIME"] = "DATETIME";
    FieldType["STATIC_DROPDOWN"] = "STATIC_DROPDOWN";
})(FieldType || (exports.FieldType = FieldType = {}));
var TableAutomationTrigger;
(function (TableAutomationTrigger) {
    TableAutomationTrigger["ON_NEW_RECORD"] = "ON_NEW_RECORD";
    TableAutomationTrigger["ON_UPDATE_RECORD"] = "ON_UPDATE_RECORD";
})(TableAutomationTrigger || (exports.TableAutomationTrigger = TableAutomationTrigger = {}));
var TableAutomationStatus;
(function (TableAutomationStatus) {
    TableAutomationStatus["ENABLED"] = "ENABLED";
    TableAutomationStatus["DISABLED"] = "DISABLED";
})(TableAutomationStatus || (exports.TableAutomationStatus = TableAutomationStatus = {}));
var TableWebhookEventType;
(function (TableWebhookEventType) {
    TableWebhookEventType["RECORD_CREATED"] = "RECORD_CREATED";
    TableWebhookEventType["RECORD_UPDATED"] = "RECORD_UPDATED";
    TableWebhookEventType["RECORD_DELETED"] = "RECORD_DELETED";
})(TableWebhookEventType || (exports.TableWebhookEventType = TableWebhookEventType = {}));
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["EQ"] = "eq";
    FilterOperator["NEQ"] = "neq";
    FilterOperator["GT"] = "gt";
    FilterOperator["GTE"] = "gte";
    FilterOperator["LT"] = "lt";
    FilterOperator["LTE"] = "lte";
    FilterOperator["CO"] = "co";
    FilterOperator["EXISTS"] = "exists";
    FilterOperator["NOT_EXISTS"] = "not_exists";
})(FilterOperator || (exports.FilterOperator = FilterOperator = {}));
exports.Field = z.union([z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: z.string(), externalId: z.string(), type: z.literal(FieldType.STATIC_DROPDOWN), tableId: z.string(), projectId: z.string(), data: z.object({
            options: z.array(z.object({
                value: z.string(),
            })),
        }) })), z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: z.string(), externalId: z.string(), type: z.union([z.literal(FieldType.TEXT), z.literal(FieldType.NUMBER), z.literal(FieldType.DATE), z.literal(FieldType.DATETIME)]), tableId: z.string(), projectId: z.string() }))]);
exports.Table = z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: z.string(), folderId: (0, core_utils_1.Nullable)(z.string()), projectId: z.string(), externalId: z.string(), status: (0, core_utils_1.NullableEnum)(TableAutomationStatus), trigger: (0, core_utils_1.NullableEnum)(TableAutomationTrigger) }));
exports.PopulatedRecord = z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { tableId: z.string(), projectId: z.string(), cells: z.record(z.string(), z.object({
        updated: z.string(),
        created: z.string(),
        value: z.unknown(),
        fieldName: z.string(),
    })) }));
exports.CreateTableWebhookRequest = z.object({
    events: z.array(z.enum(TableWebhookEventType)),
    webhookUrl: z.string(),
    flowId: z.string(),
});
exports.ExportTableResponse = z.object({
    fields: z.array(z.object({ id: z.string(), name: z.string() })),
    rows: z.array(z.record(z.string(), z.string())),
    name: z.string(),
});
exports.ListTablesRequest = z.object({
    projectId: z.string(),
    limit: z.optional(z.coerce.number()),
    cursor: z.optional(z.string()),
    name: z.optional(z.string()),
    externalIds: (0, core_utils_1.OptionalArrayFromQuery)(z.string()),
    folderId: z.optional(z.string()),
    folderIds: (0, core_utils_1.OptionalArrayFromQuery)(z.string()),
});
exports.CreateRecordsRequest = z.object({
    records: z.array(z.array(z.object({
        fieldId: z.string(),
        value: coerceToString(),
    }))),
    tableId: z.string(),
});
exports.UpdateRecordRequest = z.object({
    cells: z.optional(z.array(z.object({
        fieldId: z.string(),
        value: coerceToString(),
    }))),
    tableId: z.string(),
    agentUpdate: z.optional(z.boolean()),
});
exports.Filter = z.discriminatedUnion('operator', [
    valueFilter(FilterOperator.EQ),
    valueFilter(FilterOperator.NEQ),
    valueFilter(FilterOperator.GT),
    valueFilter(FilterOperator.GTE),
    valueFilter(FilterOperator.LT),
    valueFilter(FilterOperator.LTE),
    valueFilter(FilterOperator.CO),
    existenceFilter(FilterOperator.EXISTS),
    existenceFilter(FilterOperator.NOT_EXISTS),
]);
exports.ListRecordsRequest = z.object({
    tableId: z.string(),
    limit: z.optional(z.coerce.number()),
    cursor: z.optional(z.string()),
    filters: (0, core_utils_1.OptionalArrayFromQuery)(exports.Filter),
});
exports.StaticDropdownEmptyOption = {
    label: '',
    value: '',
};
function coerceToString() {
    return z.pipe(z.transform((v) => (v === null || v === undefined ? v : String(v))), z.nullable(z.string()));
}
function valueFilter(op) {
    return z.object({
        fieldId: z.string(),
        operator: z.literal(op),
        value: z.string(),
    });
}
function existenceFilter(op) {
    return z.object({
        fieldId: z.string(),
        operator: z.literal(op),
    });
}
//# sourceMappingURL=tables.js.map