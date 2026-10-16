import { z } from 'zod';
import { TemplateStatus, TemplateType } from './template';
export declare const CreateTemplateRequestBody: z.ZodObject<{
    name: z.ZodString;
    summary: z.ZodString;
    description: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        color: import("zod/mini").ZodMiniString<string>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    blogUrl: z.ZodOptional<z.ZodString>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    author: z.ZodString;
    categories: z.ZodArray<z.ZodString>;
    type: z.ZodEnum<typeof TemplateType>;
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
}, z.core.$strip>;
export type CreateTemplateRequestBody = z.infer<typeof CreateTemplateRequestBody>;
export declare const UpdateFlowTemplateRequestBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        color: import("zod/mini").ZodMiniString<string>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    blogUrl: z.ZodOptional<z.ZodString>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    status: z.ZodOptional<z.ZodEnum<typeof TemplateStatus>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
}, z.core.$strip>;
export type UpdateFlowTemplateRequestBody = z.infer<typeof UpdateFlowTemplateRequestBody>;
export declare const UpdateTemplateRequestBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        color: import("zod/mini").ZodMiniString<string>;
        icon: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    blogUrl: z.ZodOptional<z.ZodString>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    status: z.ZodOptional<z.ZodEnum<typeof TemplateStatus>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
}, z.core.$strip>;
export type UpdateTemplateRequestBody = z.infer<typeof UpdateTemplateRequestBody>;
export declare const ListFlowTemplatesRequestQuery: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof TemplateType>>;
    pieces: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    tags: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    search: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListFlowTemplatesRequestQuery = z.infer<typeof ListFlowTemplatesRequestQuery>;
export declare const ListTemplatesRequestQuery: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<typeof TemplateType>>;
    pieces: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    tags: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    search: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTemplatesRequestQuery = z.infer<typeof ListTemplatesRequestQuery>;
