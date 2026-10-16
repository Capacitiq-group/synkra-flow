import { z } from 'zod';
export declare enum FieldType {
    TEXT = "TEXT",
    NUMBER = "NUMBER",
    DATE = "DATE",
    DATETIME = "DATETIME",
    STATIC_DROPDOWN = "STATIC_DROPDOWN"
}
export declare const Field: z.ZodUnion<readonly [z.ZodObject<{
    name: z.ZodString;
    externalId: z.ZodString;
    type: z.ZodLiteral<FieldType.STATIC_DROPDOWN>;
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
    type: z.ZodUnion<readonly [z.ZodLiteral<FieldType.TEXT>, z.ZodLiteral<FieldType.NUMBER>, z.ZodLiteral<FieldType.DATE>, z.ZodLiteral<FieldType.DATETIME>]>;
    tableId: z.ZodString;
    projectId: z.ZodString;
    position: z.ZodNumber;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>]>;
export type Field = z.infer<typeof Field>;
export declare const StaticDropdownEmptyOption: {
    label: string;
    value: string;
};
