import { z } from 'zod';
import { TableAutomationStatus, TableAutomationTrigger } from '../table';
import { TableWebhookEventType } from '../table-webhook';
export declare const CreateTableRequest: z.ZodObject<{
    projectId: z.ZodString;
    name: z.ZodString;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        data: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        externalId: z.ZodString;
    }, z.core.$strip>>>;
    externalId: z.ZodOptional<z.ZodString>;
    folderId: z.ZodOptional<z.ZodString>;
    folderName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTableRequest = z.infer<typeof CreateTableRequest>;
export declare const ExportTableResponse: z.ZodObject<{
    fields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    rows: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>>;
    name: z.ZodString;
}, z.core.$strip>;
export type ExportTableResponse = z.infer<typeof ExportTableResponse>;
export declare const CreateTableWebhookRequest: z.ZodObject<{
    events: z.ZodArray<z.ZodEnum<typeof TableWebhookEventType>>;
    webhookUrl: z.ZodString;
    flowId: z.ZodString;
}, z.core.$strip>;
export type CreateTableWebhookRequest = z.infer<typeof CreateTableWebhookRequest>;
export declare const UpdateTableRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    trigger: z.ZodOptional<z.ZodEnum<typeof TableAutomationTrigger>>;
    status: z.ZodOptional<z.ZodEnum<typeof TableAutomationStatus>>;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type UpdateTableRequest = z.infer<typeof UpdateTableRequest>;
export declare const ListTablesRequest: z.ZodObject<{
    projectId: z.ZodString;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    externalIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    folderId: z.ZodOptional<z.ZodString>;
    folderIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    sortBy: z.ZodOptional<z.ZodEnum<{
        NAME: "NAME";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        ASC: "ASC";
        DESC: "DESC";
    }>>;
}, z.core.$strip>;
export type ListTablesRequest = z.infer<typeof ListTablesRequest>;
export declare const CountTablesRequest: z.ZodObject<{
    projectId: z.ZodString;
    folderId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CountTablesRequest = z.infer<typeof CountTablesRequest>;
