import { z } from 'zod';
export declare const ConcurrencyPool: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    key: z.ZodString;
    maxConcurrentJobs: z.ZodNumber;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type ConcurrencyPool = z.infer<typeof ConcurrencyPool>;
