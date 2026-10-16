import { z } from 'zod';
export declare enum TriggerStrategy {
    POLLING = "POLLING",
    WEBHOOK = "WEBHOOK",
    APP_WEBHOOK = "APP_WEBHOOK",
    MANUAL = "MANUAL"
}
export declare enum WebhookHandshakeStrategy {
    NONE = "NONE",
    HEADER_PRESENT = "HEADER_PRESENT",
    QUERY_PRESENT = "QUERY_PRESENT",
    BODY_PARAM_PRESENT = "BODY_PARAM_PRESENT",
    HEAD_REQUEST = "HEAD_REQUEST"
}
export declare enum TriggerSourceScheduleType {
    CRON_EXPRESSION = "CRON_EXPRESSION",
    INTERVAL = "INTERVAL"
}
export declare const WebhookHandshakeConfiguration: z.ZodObject<{
    strategy: z.ZodEnum<typeof WebhookHandshakeStrategy>;
    paramName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WebhookHandshakeConfiguration = z.infer<typeof WebhookHandshakeConfiguration>;
export declare const ScheduleOptions: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<TriggerSourceScheduleType.CRON_EXPRESSION>;
    cronExpression: z.ZodString;
    timezone: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<TriggerSourceScheduleType.INTERVAL>;
    intervalMs: z.ZodInt;
}, z.core.$strip>], "type">;
export type ScheduleOptions = z.infer<typeof ScheduleOptions>;
export declare const TriggerSource: z.ZodObject<{
    type: z.ZodEnum<typeof TriggerStrategy>;
    projectId: z.ZodString;
    flowId: z.ZodString;
    triggerName: z.ZodString;
    schedule: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<TriggerSourceScheduleType.CRON_EXPRESSION>;
        cronExpression: z.ZodString;
        timezone: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<TriggerSourceScheduleType.INTERVAL>;
        intervalMs: z.ZodInt;
    }, z.core.$strip>], "type">>>;
    flowVersionId: z.ZodString;
    pieceName: z.ZodString;
    pieceVersion: z.ZodString;
    deleted: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    simulate: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type TriggerSource = z.infer<typeof TriggerSource>;
