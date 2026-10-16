import { z } from 'zod';
import { ApplicationEventName } from '../audit-events';
export declare enum EventDestinationScope {
    PLATFORM = "PLATFORM",
    PROJECT = "PROJECT"
}
export declare enum EventDestinationFormat {
    RAW = "RAW",
    OTLP_JSON = "OTLP_JSON",
    OTLP_PROTOBUF = "OTLP_PROTOBUF"
}
export declare enum EventDestinationTestError {
    BLOCKED = "BLOCKED",
    TIMEOUT = "TIMEOUT",
    TLS = "TLS",
    CONNECTION_FAILED = "CONNECTION_FAILED",
    HANDLER_FLOW_FAILED = "HANDLER_FLOW_FAILED"
}
export declare const EventDestinationHeaders: z.ZodRecord<z.ZodString, z.ZodString>;
export type EventDestinationHeaders = z.infer<typeof EventDestinationHeaders>;
export declare const EventDestinationHeadersRequest: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>;
export type EventDestinationHeadersRequest = z.infer<typeof EventDestinationHeadersRequest>;
export declare const ListPlatformEventDestinationsRequestBody: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListPlatformEventDestinationsRequestBody = z.infer<typeof ListPlatformEventDestinationsRequestBody>;
export declare const CreatePlatformEventDestinationRequestBody: z.ZodObject<{
    events: z.ZodArray<z.ZodEnum<typeof ApplicationEventName>>;
    url: z.ZodURL;
    enabled: z.ZodOptional<z.ZodBoolean>;
    headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>>;
    format: z.ZodOptional<z.ZodEnum<typeof EventDestinationFormat>>;
}, z.core.$strip>;
export type CreatePlatformEventDestinationRequestBody = z.infer<typeof CreatePlatformEventDestinationRequestBody>;
export declare const UpdatePlatformEventDestinationRequestBody: z.ZodObject<{
    events: z.ZodOptional<z.ZodArray<z.ZodEnum<typeof ApplicationEventName>>>;
    url: z.ZodOptional<z.ZodURL>;
    enabled: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    headers: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>>>;
    format: z.ZodOptional<z.ZodOptional<z.ZodEnum<typeof EventDestinationFormat>>>;
}, z.core.$strip>;
export type UpdatePlatformEventDestinationRequestBody = z.infer<typeof UpdatePlatformEventDestinationRequestBody>;
export declare const TestPlatformEventDestinationRequestBody: z.ZodObject<{
    url: z.ZodURL;
    event: z.ZodOptional<z.ZodEnum<typeof ApplicationEventName>>;
    headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
    format: z.ZodOptional<z.ZodEnum<typeof EventDestinationFormat>>;
}, z.core.$strip>;
export type TestPlatformEventDestinationRequestBody = z.infer<typeof TestPlatformEventDestinationRequestBody>;
export declare const TestPlatformEventDestinationResponse: z.ZodObject<{
    renderedBody: z.ZodUnknown;
    status: z.ZodOptional<z.ZodNumber>;
    durationMs: z.ZodNumber;
    errorCode: z.ZodOptional<z.ZodEnum<typeof EventDestinationTestError>>;
}, z.core.$strip>;
export type TestPlatformEventDestinationResponse = z.infer<typeof TestPlatformEventDestinationResponse>;
