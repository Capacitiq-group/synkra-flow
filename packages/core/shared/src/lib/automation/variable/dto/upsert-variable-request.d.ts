import { z } from 'zod';
export declare const UpsertVariableRequestBody: z.ZodObject<{
    projectId: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
    metadata: z.ZodOptional<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>;
}, z.core.$strip>;
export type UpsertVariableRequestBody = z.infer<typeof UpsertVariableRequestBody>;
export declare const UpdateVariableRequestBody: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>;
}, z.core.$strip>;
export type UpdateVariableRequestBody = z.infer<typeof UpdateVariableRequestBody>;
