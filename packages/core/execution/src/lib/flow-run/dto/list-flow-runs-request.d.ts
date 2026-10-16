import { z } from 'zod';
import { FlowRunStatus } from '../execution/flow-execution';
export declare const ListFlowRunsRequestQuery: z.ZodObject<{
    flowId: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>>>;
    tags: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    status: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof FlowRunStatus>>>>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    projectId: import("zod/mini").ZodMiniString<string>;
    failedStepName: z.ZodOptional<z.ZodString>;
    failedStepMessage: z.ZodOptional<z.ZodString>;
    flowRunIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>>>;
    includeArchived: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
}, z.core.$strip>;
export type ListFlowRunsRequestQuery = z.infer<typeof ListFlowRunsRequestQuery>;
export declare const CountFlowRunsByStatusRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    createdAfter: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const FlowRunCountByStatus: z.ZodObject<{
    status: z.ZodEnum<typeof FlowRunStatus>;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const CountFlowRunsByStatusResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        status: z.ZodEnum<typeof FlowRunStatus>;
        count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CountFlowRunsByStatusRequest = z.infer<typeof CountFlowRunsByStatusRequest>;
export type FlowRunCountByStatus = z.infer<typeof FlowRunCountByStatus>;
export type CountFlowRunsByStatusResponse = z.infer<typeof CountFlowRunsByStatusResponse>;
