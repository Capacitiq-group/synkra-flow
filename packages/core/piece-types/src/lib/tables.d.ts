import { Cursor } from "@activepieces/core-utils";
import * as z from "zod/mini";
export declare enum FieldType {
    TEXT = "TEXT",
    NUMBER = "NUMBER",
    DATE = "DATE",
    DATETIME = "DATETIME",
    STATIC_DROPDOWN = "STATIC_DROPDOWN"
}
export declare enum TableAutomationTrigger {
    ON_NEW_RECORD = "ON_NEW_RECORD",
    ON_UPDATE_RECORD = "ON_UPDATE_RECORD"
}
export declare enum TableAutomationStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare enum TableWebhookEventType {
    RECORD_CREATED = "RECORD_CREATED",
    RECORD_UPDATED = "RECORD_UPDATED",
    RECORD_DELETED = "RECORD_DELETED"
}
export declare enum FilterOperator {
    EQ = "eq",
    NEQ = "neq",
    GT = "gt",
    GTE = "gte",
    LT = "lt",
    LTE = "lte",
    CO = "co",
    EXISTS = "exists",
    NOT_EXISTS = "not_exists"
}
export declare const Field: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    externalId: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<FieldType.STATIC_DROPDOWN>;
    tableId: z.ZodMiniString<string>;
    projectId: z.ZodMiniString<string>;
    data: z.ZodMiniObject<{
        options: z.ZodMiniArray<z.ZodMiniObject<{
            value: z.ZodMiniString<string>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    externalId: z.ZodMiniString<string>;
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<FieldType.TEXT>, z.ZodMiniLiteral<FieldType.NUMBER>, z.ZodMiniLiteral<FieldType.DATE>, z.ZodMiniLiteral<FieldType.DATETIME>]>;
    tableId: z.ZodMiniString<string>;
    projectId: z.ZodMiniString<string>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>]>;
export type Field = z.infer<typeof Field>;
export declare const Table: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    folderId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    projectId: z.ZodMiniString<string>;
    externalId: z.ZodMiniString<string>;
    status: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<typeof TableAutomationStatus>>>;
    trigger: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<typeof TableAutomationTrigger>>>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type Table = z.infer<typeof Table>;
export declare const PopulatedRecord: z.ZodMiniObject<{
    tableId: z.ZodMiniString<string>;
    projectId: z.ZodMiniString<string>;
    cells: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        updated: z.ZodMiniString<string>;
        created: z.ZodMiniString<string>;
        value: z.ZodMiniUnknown;
        fieldName: z.ZodMiniString<string>;
    }, z.z.core.$strip>>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type PopulatedRecord = z.infer<typeof PopulatedRecord>;
export declare const CreateTableWebhookRequest: z.ZodMiniObject<{
    events: z.ZodMiniArray<z.ZodMiniEnum<typeof TableWebhookEventType>>;
    webhookUrl: z.ZodMiniString<string>;
    flowId: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type CreateTableWebhookRequest = z.infer<typeof CreateTableWebhookRequest>;
export declare const ExportTableResponse: z.ZodMiniObject<{
    fields: z.ZodMiniArray<z.ZodMiniObject<{
        id: z.ZodMiniString<string>;
        name: z.ZodMiniString<string>;
    }, z.z.core.$strip>>;
    rows: z.ZodMiniArray<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    name: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type ExportTableResponse = z.infer<typeof ExportTableResponse>;
export declare const ListTablesRequest: z.ZodMiniObject<{
    projectId: z.ZodMiniString<string>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<unknown>>;
    cursor: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniOptional<z.ZodMiniString<string>>;
    externalIds: z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>>;
    folderId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    folderIds: z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type ListTablesRequest = z.infer<typeof ListTablesRequest>;
export declare const CreateRecordsRequest: z.ZodMiniObject<{
    records: z.ZodMiniArray<z.ZodMiniArray<z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        value: z.ZodMiniPipe<z.ZodMiniTransform<string | null | undefined, unknown>, z.ZodMiniNullable<z.ZodMiniString<string>>>;
    }, z.z.core.$strip>>>;
    tableId: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type CreateRecordsRequest = z.infer<typeof CreateRecordsRequest>;
export declare const UpdateRecordRequest: z.ZodMiniObject<{
    cells: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        value: z.ZodMiniPipe<z.ZodMiniTransform<string | null | undefined, unknown>, z.ZodMiniNullable<z.ZodMiniString<string>>>;
    }, z.z.core.$strip>>>;
    tableId: z.ZodMiniString<string>;
    agentUpdate: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type UpdateRecordRequest = z.infer<typeof UpdateRecordRequest>;
export declare const Filter: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.EQ>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.NEQ>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.GT>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.GTE>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.LT>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.LTE>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.CO>;
    value: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.EXISTS>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    fieldId: z.ZodMiniString<string>;
    operator: z.ZodMiniLiteral<FilterOperator.NOT_EXISTS>;
}, z.z.core.$strip>], "operator">;
export type Filter = z.infer<typeof Filter>;
export declare const ListRecordsRequest: z.ZodMiniObject<{
    tableId: z.ZodMiniString<string>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<unknown>>;
    cursor: z.ZodMiniOptional<z.ZodMiniString<string>>;
    filters: z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.EQ>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.NEQ>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.GT>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.GTE>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.LT>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.LTE>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.CO>;
        value: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.EXISTS>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        fieldId: z.ZodMiniString<string>;
        operator: z.ZodMiniLiteral<FilterOperator.NOT_EXISTS>;
    }, z.z.core.$strip>], "operator">>>>;
}, z.z.core.$strip>;
export declare const StaticDropdownEmptyOption: {
    label: string;
    value: string;
};
export type ListRecordsRequest = Omit<z.infer<typeof ListRecordsRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
