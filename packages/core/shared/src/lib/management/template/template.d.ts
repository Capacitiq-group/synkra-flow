import { z } from 'zod';
export declare const TemplateTag: z.ZodObject<{
    title: z.ZodString;
    color: import("zod/mini").ZodMiniString<string>;
    icon: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TemplateTag = z.infer<typeof TemplateTag>;
export declare enum TemplateType {
    OFFICIAL = "OFFICIAL",
    SHARED = "SHARED",
    CUSTOM = "CUSTOM"
}
export declare const FlowVersionTemplate: z.ZodObject<{
    displayName: z.ZodString;
    trigger: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
        settings: z.ZodObject<{
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                schema: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
            pieceName: z.ZodString;
            pieceVersion: import("zod/mini").ZodMiniString<string>;
            triggerName: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodAny>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        nextAction: z.ZodOptional<z.ZodAny>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
        settings: z.ZodAny;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        nextAction: z.ZodOptional<z.ZodAny>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>]>;
    valid: z.ZodBoolean;
    schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        content: z.ZodString;
        ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>;
        size: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strip>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type FlowVersionTemplate = z.infer<typeof FlowVersionTemplate>;
export declare enum TemplateStatus {
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}
export declare enum TableImportDataType {
    CSV = "CSV"
}
export declare const TableDataState: z.ZodObject<{
    type: z.ZodEnum<typeof TableImportDataType>;
    rows: z.ZodArray<z.ZodArray<z.ZodObject<{
        fieldId: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type TableDataState = z.infer<typeof TableDataState>;
export declare const TableTemplate: z.ZodObject<{
    name: z.ZodString;
    externalId: z.ZodString;
    fields: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        externalId: z.ZodString;
    }, z.core.$strip>>;
    status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    data: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        type: z.ZodEnum<typeof TableImportDataType>;
        rows: z.ZodArray<z.ZodArray<z.ZodObject<{
            fieldId: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type TableTemplate = z.infer<typeof TableTemplate>;
export declare const Template: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<typeof TemplateType>;
    summary: z.ZodString;
    description: z.ZodString;
    tags: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        color: import("zod/mini").ZodMiniString<string>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    blogUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    author: z.ZodString;
    categories: z.ZodArray<z.ZodString>;
    pieces: z.ZodArray<z.ZodString>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    flows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    tables: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        externalId: z.ZodString;
        fields: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            externalId: z.ZodString;
        }, z.core.$strip>>;
        status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        data: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            type: z.ZodEnum<typeof TableImportDataType>;
            rows: z.ZodArray<z.ZodArray<z.ZodObject<{
                fieldId: z.ZodString;
                value: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    status: z.ZodEnum<typeof TemplateStatus>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Template = z.infer<typeof Template>;
export declare const SharedTemplate: z.ZodObject<{
    status: z.ZodEnum<typeof TemplateStatus>;
    type: z.ZodEnum<typeof TemplateType>;
    description: z.ZodString;
    name: z.ZodString;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    flows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    summary: z.ZodString;
    categories: z.ZodArray<z.ZodString>;
    pieces: z.ZodArray<z.ZodString>;
    tags: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        color: import("zod/mini").ZodMiniString<string>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    blogUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    author: z.ZodString;
    tables: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        externalId: z.ZodString;
        fields: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            externalId: z.ZodString;
        }, z.core.$strip>>;
        status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        data: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            type: z.ZodEnum<typeof TableImportDataType>;
            rows: z.ZodArray<z.ZodArray<z.ZodObject<{
                fieldId: z.ZodString;
                value: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SharedTemplate = z.infer<typeof SharedTemplate>;
