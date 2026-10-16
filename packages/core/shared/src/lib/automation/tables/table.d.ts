import { z } from 'zod';
export declare enum TableAutomationTrigger {
    ON_NEW_RECORD = "ON_NEW_RECORD",
    ON_UPDATE_RECORD = "ON_UPDATE_RECORD"
}
export declare enum TableAutomationStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare const Table: z.ZodObject<{
    name: z.ZodString;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectId: z.ZodString;
    externalId: z.ZodString;
    status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof TableAutomationStatus>>>;
    trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof TableAutomationTrigger>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Table = z.infer<typeof Table>;
export declare const PopulatedTable: z.ZodObject<{
    name: z.ZodString;
    folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectId: z.ZodString;
    externalId: z.ZodString;
    status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof TableAutomationStatus>>>;
    trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof TableAutomationTrigger>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    fields: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        externalId: z.ZodString;
        type: z.ZodLiteral<import("./field").FieldType.STATIC_DROPDOWN>;
        tableId: z.ZodString;
        projectId: z.ZodString;
        position: z.ZodNumber;
        data: z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>, z.ZodObject<{
        name: z.ZodString;
        externalId: z.ZodString;
        type: z.ZodUnion<readonly [z.ZodLiteral<import("./field").FieldType.TEXT>, z.ZodLiteral<import("./field").FieldType.NUMBER>, z.ZodLiteral<import("./field").FieldType.DATE>, z.ZodLiteral<import("./field").FieldType.DATETIME>]>;
        tableId: z.ZodString;
        projectId: z.ZodString;
        position: z.ZodNumber;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type PopulatedTable = z.infer<typeof PopulatedTable>;
