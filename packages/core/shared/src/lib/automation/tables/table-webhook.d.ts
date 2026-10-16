import { z } from 'zod';
export declare enum TableWebhookEventType {
    RECORD_CREATED = "RECORD_CREATED",
    RECORD_UPDATED = "RECORD_UPDATED",
    RECORD_DELETED = "RECORD_DELETED"
}
export declare const TableWebhook: z.ZodObject<{
    projectId: z.ZodString;
    tableId: z.ZodString;
    events: z.ZodArray<z.ZodEnum<typeof TableWebhookEventType>>;
    flowId: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type TableWebhook = z.infer<typeof TableWebhook>;
