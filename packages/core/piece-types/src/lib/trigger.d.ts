import * as z from "zod/mini";
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
export declare const WebhookHandshakeConfiguration: z.ZodMiniObject<{
    strategy: z.ZodMiniEnum<typeof WebhookHandshakeStrategy>;
    paramName: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type WebhookHandshakeConfiguration = z.infer<typeof WebhookHandshakeConfiguration>;
export declare enum TriggerTestStrategy {
    SIMULATION = "SIMULATION",
    TEST_FUNCTION = "TEST_FUNCTION"
}
export declare const AUTHENTICATION_PROPERTY_NAME = "auth";
