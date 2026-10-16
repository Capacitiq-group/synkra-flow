import { z } from 'zod';
declare const KnowledgeBaseFile: z.ZodObject<{
    projectId: z.ZodString;
    fileId: z.ZodString;
    displayName: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type KnowledgeBaseFile = z.infer<typeof KnowledgeBaseFile>;
export {};
