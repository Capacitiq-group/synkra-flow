import { z } from 'zod';
export declare const Record: z.ZodObject<{
    tableId: z.ZodString;
    projectId: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Record = z.infer<typeof Record>;
export declare const PopulatedRecord: z.ZodObject<{
    tableId: z.ZodString;
    projectId: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    cells: z.ZodRecord<z.ZodString, z.ZodObject<{
        value: z.ZodUnknown;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        fieldName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PopulatedRecord = z.infer<typeof PopulatedRecord>;
