import * as z from "zod/mini";
export declare enum ExecutionType {
    BEGIN = "BEGIN",
    RESUME = "RESUME"
}
export declare enum PauseType {
    DELAY = "DELAY",
    WEBHOOK = "WEBHOOK"
}
export declare enum StreamStepProgress {
    WEBSOCKET = "WEBSOCKET",
    NONE = "NONE"
}
export declare const RespondResponse: z.ZodMiniObject<{
    status: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    body: z.ZodMiniOptional<z.ZodMiniUnknown>;
    headers: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type RespondResponse = z.infer<typeof RespondResponse>;
export declare const DelayPauseMetadata: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PauseType.DELAY>;
    resumeDateTime: z.ZodMiniString<string>;
    requestIdToReply: z.ZodMiniOptional<z.ZodMiniString<string>>;
    handlerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    streamStepProgress: z.ZodMiniOptional<z.ZodMiniEnum<typeof StreamStepProgress>>;
}, z.z.core.$strip>;
export type DelayPauseMetadata = z.infer<typeof DelayPauseMetadata>;
export declare const WebhookPauseMetadata: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PauseType.WEBHOOK>;
    requestId: z.ZodMiniString<string>;
    requestIdToReply: z.ZodMiniOptional<z.ZodMiniString<string>>;
    response: z.ZodMiniObject<{
        status: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        body: z.ZodMiniOptional<z.ZodMiniUnknown>;
        headers: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    }, z.z.core.$strip>;
    handlerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    streamStepProgress: z.ZodMiniOptional<z.ZodMiniEnum<typeof StreamStepProgress>>;
}, z.z.core.$strip>;
export type WebhookPauseMetadata = z.infer<typeof WebhookPauseMetadata>;
export declare const PauseMetadata: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PauseType.DELAY>;
    resumeDateTime: z.ZodMiniString<string>;
    requestIdToReply: z.ZodMiniOptional<z.ZodMiniString<string>>;
    handlerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    streamStepProgress: z.ZodMiniOptional<z.ZodMiniEnum<typeof StreamStepProgress>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PauseType.WEBHOOK>;
    requestId: z.ZodMiniString<string>;
    requestIdToReply: z.ZodMiniOptional<z.ZodMiniString<string>>;
    response: z.ZodMiniObject<{
        status: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        body: z.ZodMiniOptional<z.ZodMiniUnknown>;
        headers: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    }, z.z.core.$strip>;
    handlerId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    streamStepProgress: z.ZodMiniOptional<z.ZodMiniEnum<typeof StreamStepProgress>>;
}, z.z.core.$strip>]>;
export type PauseMetadata = z.infer<typeof PauseMetadata>;
