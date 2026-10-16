import { z } from 'zod';
export declare enum AlertChannel {
    EMAIL = "EMAIL"
}
export declare const Alert: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    channel: z.ZodEnum<typeof AlertChannel>;
    receiver: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Alert = z.infer<typeof Alert>;
