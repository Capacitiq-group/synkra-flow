import * as z from "zod/mini";
export declare const TriggerPayload: z.ZodMiniObject<{
    body: z.ZodMiniUnknown;
    rawBody: z.ZodMiniOptional<z.ZodMiniUnknown>;
    headers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
    queryParams: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type TriggerPayload<T = unknown> = {
    body: T;
    rawBody?: unknown;
    method?: string;
    headers: Record<string, string>;
    queryParams: Record<string, string>;
};
export type EventPayload<B = unknown> = {
    body: B;
    rawBody?: unknown;
    method: string;
    headers: Record<string, string>;
    queryParams: Record<string, string>;
};
export type ParseEventResponse = {
    event?: string;
    identifierValue?: string;
    reply?: {
        headers: Record<string, string>;
        body: unknown;
    };
};
export type ResumePayload = TriggerPayload;
