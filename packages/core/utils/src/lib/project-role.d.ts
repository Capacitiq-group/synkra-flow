import * as z from 'zod/mini';
export declare const ProjectRole: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    permissions: z.ZodMiniArray<z.ZodMiniString<string>>;
    platformId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    type: z.ZodMiniString<string>;
    userCount: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type ProjectRole = z.infer<typeof ProjectRole>;
