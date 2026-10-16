import { z } from 'zod';
export declare const WebhookUrlParams: z.ZodObject<{
    flowId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
export type WebhookUrlParams = z.infer<typeof WebhookUrlParams>;
