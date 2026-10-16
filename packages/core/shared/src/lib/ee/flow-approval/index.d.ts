import { FlowStatus } from '@activepieces/core-execution';
import { z } from 'zod';
export declare enum FlowApprovalRequestState {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
export declare const FlowApprovalRequest: z.ZodObject<{
    flowId: import("zod/mini").ZodMiniString<string>;
    flowVersionId: import("zod/mini").ZodMiniString<string>;
    projectId: import("zod/mini").ZodMiniString<string>;
    platformId: import("zod/mini").ZodMiniString<string>;
    submitterId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    submittedAt: z.ZodString;
    approverId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    decidedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    state: z.ZodEnum<typeof FlowApprovalRequestState>;
    requestedStatus: z.ZodEnum<typeof FlowStatus>;
    rejectionReason: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowApprovalRequest = z.infer<typeof FlowApprovalRequest>;
export declare const PopulatedFlowApprovalRequest: z.ZodObject<{
    flowId: import("zod/mini").ZodMiniString<string>;
    flowVersionId: import("zod/mini").ZodMiniString<string>;
    projectId: import("zod/mini").ZodMiniString<string>;
    platformId: import("zod/mini").ZodMiniString<string>;
    submitterId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    submittedAt: z.ZodString;
    approverId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    decidedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    state: z.ZodEnum<typeof FlowApprovalRequestState>;
    requestedStatus: z.ZodEnum<typeof FlowStatus>;
    rejectionReason: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    flow: z.ZodOptional<z.ZodObject<{
        projectId: z.ZodString;
        externalId: z.ZodString;
        ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        status: z.ZodEnum<typeof FlowStatus>;
        publishedVersionId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
        operationStatus: z.ZodEnum<typeof import("@activepieces/core-execution").FlowOperationStatus>;
        timeSavedPerRun: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        templateId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        createdBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"MCP">;
            id: import("zod/mini").ZodMiniString<string>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"AGENT">;
            id: import("zod/mini").ZodMiniString<string>;
        }, z.core.$strip>], "type">>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    flowVersion: z.ZodOptional<z.ZodObject<{
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        displayName: z.ZodString;
        flowId: z.ZodString;
        state: z.ZodEnum<typeof import("@activepieces/core-execution").FlowVersionState>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PopulatedFlowApprovalRequest = z.infer<typeof PopulatedFlowApprovalRequest>;
export declare const RejectFlowApprovalRequestBody: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RejectFlowApprovalRequestBody = z.infer<typeof RejectFlowApprovalRequestBody>;
export declare const ListFlowApprovalRequestsQuery: z.ZodObject<{
    state: z.ZodOptional<z.ZodEnum<typeof FlowApprovalRequestState>>;
    projectId: z.ZodOptional<import("zod/mini").ZodMiniString<string>>;
    flowVersionId: z.ZodOptional<import("zod/mini").ZodMiniString<string>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListFlowApprovalRequestsQuery = z.infer<typeof ListFlowApprovalRequestsQuery>;
