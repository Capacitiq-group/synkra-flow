import { z } from 'zod';
export declare const Cell: z.ZodObject<{
    recordId: z.ZodString;
    fieldId: z.ZodString;
    projectId: z.ZodString;
    value: z.ZodUnknown;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Cell = z.infer<typeof Cell>;
