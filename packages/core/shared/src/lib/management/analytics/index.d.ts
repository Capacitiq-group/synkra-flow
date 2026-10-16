import { FlowStatus } from '@activepieces/core-execution';
import { z } from 'zod';
export declare enum AnalyticsTimePeriod {
    LAST_WEEK = "last-week",
    LAST_MONTH = "last-month",
    LAST_THREE_MONTHS = "last-three-months",
    LAST_SIX_MONTHS = "last-six-months",
    LAST_YEAR = "last-year"
}
export declare const AnalyticsRunsUsageItem: z.ZodObject<{
    day: z.ZodString;
    flowId: z.ZodString;
    runs: z.ZodNumber;
}, z.core.$strip>;
export type AnalyticsRunsUsageItem = z.infer<typeof AnalyticsRunsUsageItem>;
export declare const AnalyticsRunsUsage: z.ZodArray<z.ZodObject<{
    day: z.ZodString;
    flowId: z.ZodString;
    runs: z.ZodNumber;
}, z.core.$strip>>;
export type AnalyticsRunsUsage = z.infer<typeof AnalyticsRunsUsage>;
export declare const AnalyticsFlowReportItem: z.ZodObject<{
    flowId: z.ZodString;
    flowName: z.ZodString;
    projectId: z.ZodString;
    projectName: z.ZodString;
    status: z.ZodEnum<typeof FlowStatus>;
    timeSavedPerRun: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type AnalyticsFlowReportItem = z.infer<typeof AnalyticsFlowReportItem>;
export declare const AnalyticsFlowReport: z.ZodArray<z.ZodObject<{
    flowId: z.ZodString;
    flowName: z.ZodString;
    projectId: z.ZodString;
    projectName: z.ZodString;
    status: z.ZodEnum<typeof FlowStatus>;
    timeSavedPerRun: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>>;
export type AnalyticsFlowReport = z.infer<typeof AnalyticsFlowReport>;
export declare const PlatformAnalyticsReport: z.ZodObject<{
    cachedAt: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    runs: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        flowId: z.ZodString;
        runs: z.ZodNumber;
    }, z.core.$strip>>;
    outdated: z.ZodBoolean;
    flows: z.ZodArray<z.ZodObject<{
        flowId: z.ZodString;
        flowName: z.ZodString;
        projectId: z.ZodString;
        projectName: z.ZodString;
        status: z.ZodEnum<typeof FlowStatus>;
        timeSavedPerRun: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>>;
    platformId: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        firstName: z.ZodString;
        status: z.ZodEnum<typeof import("../../core/user").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformRole: z.ZodEnum<typeof import("../../core/user").PlatformRole>;
        lastName: z.ZodString;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type PlatformAnalyticsReport = z.infer<typeof PlatformAnalyticsReport>;
export declare const AnalyticsReportRequest: z.ZodObject<{
    timePeriod: z.ZodOptional<z.ZodEnum<typeof AnalyticsTimePeriod>>;
}, z.core.$strip>;
export type AnalyticsReportRequest = z.infer<typeof AnalyticsReportRequest>;
