import { FlowRunStatus } from '@activepieces/core-execution';
import { z } from 'zod';
export declare const PlatformMetricsReportRequest: z.ZodObject<{
    createdAfter: z.ZodString;
    createdBefore: z.ZodString;
}, z.core.$strip>;
export declare const PlatformMetricsSummary: z.ZodObject<{
    completed: z.ZodNumber;
    successRate: z.ZodNumber;
    previousCompleted: z.ZodNumber;
    previousSuccessRate: z.ZodNumber;
}, z.core.$strip>;
export declare const PlatformMetricsStatusPoint: z.ZodObject<{
    day: z.ZodString;
    status: z.ZodEnum<typeof FlowRunStatus>;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const InternalErrorImpactItem: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    projectName: z.ZodString;
    flowId: import("zod/mini").ZodMiniString<string>;
    flowName: z.ZodString;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const PlatformMetricsReport: z.ZodObject<{
    summary: z.ZodObject<{
        completed: z.ZodNumber;
        successRate: z.ZodNumber;
        previousCompleted: z.ZodNumber;
        previousSuccessRate: z.ZodNumber;
    }, z.core.$strip>;
    statusTimeseries: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        status: z.ZodEnum<typeof FlowRunStatus>;
        count: z.ZodNumber;
    }, z.core.$strip>>;
    internalErrors: z.ZodArray<z.ZodObject<{
        projectId: import("zod/mini").ZodMiniString<string>;
        projectName: z.ZodString;
        flowId: import("zod/mini").ZodMiniString<string>;
        flowName: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>;
    nextRefreshAt: z.ZodString;
}, z.core.$strip>;
export declare const StuckJob: z.ZodObject<{
    flowRunId: import("zod/mini").ZodMiniString<string>;
    flowId: import("zod/mini").ZodMiniString<string>;
    flowName: z.ZodString;
    projectId: import("zod/mini").ZodMiniString<string>;
    projectName: z.ZodString;
    status: z.ZodEnum<typeof FlowRunStatus>;
}, z.core.$strip>;
export declare const PlatformMetricsLive: z.ZodObject<{
    running: z.ZodNumber;
    queued: z.ZodNumber;
    stuckJobs: z.ZodArray<z.ZodObject<{
        flowRunId: import("zod/mini").ZodMiniString<string>;
        flowId: import("zod/mini").ZodMiniString<string>;
        flowName: z.ZodString;
        projectId: import("zod/mini").ZodMiniString<string>;
        projectName: z.ZodString;
        status: z.ZodEnum<typeof FlowRunStatus>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const PlatformMetricsHealthDay: z.ZodObject<{
    day: z.ZodString;
    internalErrors: z.ZodNumber;
    affectedFlows: z.ZodNumber;
    stuckJobs: z.ZodNumber;
}, z.core.$strip>;
export declare const PlatformMetricsHealthHistory: z.ZodObject<{
    days: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        internalErrors: z.ZodNumber;
        affectedFlows: z.ZodNumber;
        stuckJobs: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PlatformMetricsReportRequest = z.infer<typeof PlatformMetricsReportRequest>;
export type PlatformMetricsSummary = z.infer<typeof PlatformMetricsSummary>;
export type PlatformMetricsStatusPoint = z.infer<typeof PlatformMetricsStatusPoint>;
export type InternalErrorImpactItem = z.infer<typeof InternalErrorImpactItem>;
export type PlatformMetricsReport = z.infer<typeof PlatformMetricsReport>;
export type StuckJob = z.infer<typeof StuckJob>;
export type PlatformMetricsLive = z.infer<typeof PlatformMetricsLive>;
export type PlatformMetricsHealthDay = z.infer<typeof PlatformMetricsHealthDay>;
export type PlatformMetricsHealthHistory = z.infer<typeof PlatformMetricsHealthHistory>;
