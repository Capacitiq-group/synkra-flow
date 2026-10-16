import { z } from 'zod';
import { FlowRunStatus } from './execution/flow-execution';
import { FlowRetryStrategy } from './flow-run';
export declare const TestFlowRunRequestBody: z.ZodObject<{
    flowVersionId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
export type TestFlowRunRequestBody = z.infer<typeof TestFlowRunRequestBody>;
export declare const RetryFlowRequestBody: z.ZodObject<{
    strategy: z.ZodEnum<typeof FlowRetryStrategy>;
    projectId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
export type RetryFlowRequestBody = z.infer<typeof RetryFlowRequestBody>;
export declare const BulkActionOnRunsRequestBody: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    excludeFlowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    strategy: z.ZodEnum<typeof FlowRetryStrategy>;
    status: z.ZodOptional<z.ZodArray<z.ZodEnum<typeof FlowRunStatus>>>;
    flowId: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    failedStepName: z.ZodOptional<z.ZodString>;
    failedStepMessage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BulkActionOnRunsRequestBody = z.infer<typeof BulkActionOnRunsRequestBody>;
export declare const BulkCancelFlowRequestBody: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    excludeFlowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    status: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodLiteral<FlowRunStatus.PAUSED>, z.ZodLiteral<FlowRunStatus.QUEUED>]>>>;
    flowId: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BulkCancelFlowRequestBody = z.infer<typeof BulkCancelFlowRequestBody>;
export declare const BulkArchiveActionOnRunsRequestBody: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    excludeFlowRunIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    status: z.ZodOptional<z.ZodArray<z.ZodEnum<typeof FlowRunStatus>>>;
    flowId: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    failedStepName: z.ZodOptional<z.ZodString>;
    failedStepMessage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BulkArchiveActionOnRunsRequestBody = z.infer<typeof BulkArchiveActionOnRunsRequestBody>;
