import * as z from "zod/mini";
export declare enum FlowStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare enum FlowTriggerType {
    EMPTY = "EMPTY",
    PIECE = "PIECE_TRIGGER"
}
export declare const StopResponse: z.ZodMiniObject<{
    status: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    body: z.ZodMiniOptional<z.ZodMiniUnknown>;
    headers: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type StopResponse = z.infer<typeof StopResponse>;
export declare const Project: z.ZodMiniObject<{
    deleted: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>>>;
    ownerId: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
    externalId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type Project = z.infer<typeof Project>;
export declare const USE_DRAFT_QUERY_PARAM_NAME = "useDraft";
export declare const PARENT_RUN_ID_HEADER = "ap-parent-run-id";
export declare const FAIL_PARENT_ON_FAILURE_HEADER = "ap-fail-parent-on-failure";
export declare const RAW_PAYLOAD_HEADER = "ap-raw-payload";
export type PopulatedFlow = {
    id: string;
    externalId?: string;
    status: FlowStatus;
    version: {
        displayName: string;
        trigger: {
            type: FlowTriggerType;
            settings: {
                pieceName?: string;
                input: {
                    exampleData?: unknown;
                } & Record<string, unknown>;
            } & Record<string, unknown>;
        };
    };
};
