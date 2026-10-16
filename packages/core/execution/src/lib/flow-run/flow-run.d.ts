import { z } from 'zod';
import { ErrorCode } from '@activepieces/core-utils';
import { ExecutionState } from './execution/execution-output';
import { FlowRunStatus } from './execution/flow-execution';
export declare const FAILED_STEP_MESSAGE_MAX_LENGTH = 700;
export declare function truncateFailedStepMessage(failedStep: FailedStep | undefined): FailedStep | undefined;
export declare const PARENT_RUN_ID_HEADER = "ap-parent-run-id";
export declare const FAIL_PARENT_ON_FAILURE_HEADER = "ap-fail-parent-on-failure";
export declare const RAW_PAYLOAD_HEADER = "ap-raw-payload";
export declare enum RunEnvironment {
    PRODUCTION = "PRODUCTION",
    TESTING = "TESTING"
}
export declare enum FlowRetryStrategy {
    ON_LATEST_VERSION = "ON_LATEST_VERSION",
    FROM_FAILED_STEP = "FROM_FAILED_STEP"
}
export declare const FailedStep: z.ZodObject<{
    name: z.ZodString;
    displayName: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FailedStep = z.infer<typeof FailedStep>;
export declare const TimelinePhase: z.ZodObject<{
    name: z.ZodEnum<{
        RUN: "RUN";
        QUEUE: "QUEUE";
        PROVISION: "PROVISION";
        BOOT: "BOOT";
    }>;
    durationMs: z.ZodNumber;
}, z.core.$strip>;
export type TimelinePhase = z.infer<typeof TimelinePhase>;
export declare const RunTimeline: z.ZodObject<{
    legs: z.ZodArray<z.ZodArray<z.ZodObject<{
        name: z.ZodEnum<{
            RUN: "RUN";
            QUEUE: "QUEUE";
            PROVISION: "PROVISION";
            BOOT: "BOOT";
        }>;
        durationMs: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type RunTimeline = z.infer<typeof RunTimeline>;
export declare const FlowRun: z.ZodObject<{
    projectId: z.ZodString;
    flowId: z.ZodString;
    parentRunId: z.ZodOptional<z.ZodString>;
    failParentOnFailure: z.ZodBoolean;
    triggeredBy: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    flowVersionId: z.ZodString;
    flowVersion: z.ZodOptional<z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    logsFileId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    status: z.ZodEnum<typeof FlowRunStatus>;
    startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timeline: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        legs: z.ZodArray<z.ZodArray<z.ZodObject<{
            name: z.ZodEnum<{
                RUN: "RUN";
                QUEUE: "QUEUE";
                PROVISION: "PROVISION";
                BOOT: "BOOT";
            }>;
            durationMs: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    steps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    failedStep: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        displayName: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    archivedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    stepsCount: z.ZodOptional<z.ZodNumber>;
    internalError: z.ZodOptional<z.ZodObject<{
        source: z.ZodEnum<typeof import("./execution/execution-output").RunInternalErrorSource>;
        message: z.ZodString;
        code: z.ZodOptional<z.ZodString>;
        occurredAt: z.ZodString;
    }, z.core.$strip>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowRun = z.infer<typeof FlowRun> & ExecutionState;
export type FlowRunWithRetryError = FlowRun & {
    error?: {
        errorCode: ErrorCode;
        errorMessage: string;
    };
};
