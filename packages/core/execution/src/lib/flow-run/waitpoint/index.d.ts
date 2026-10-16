import { z } from 'zod';
export declare function shouldReleaseBarrier({ policy, sealed, counts }: ShouldReleaseBarrierParams): boolean;
export declare function barrierReleasesOnLastPendingSignal({ policy, sealed }: BarrierReleaseShapeParams): boolean;
export declare const WaitpointVersion: z.ZodEnum<{
    V0: "V0";
    V1: "V1";
}>;
export type WaitpointVersion = z.infer<typeof WaitpointVersion>;
export declare enum BarrierSignalStatus {
    PENDING = "PENDING",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
    REJECTED = "REJECTED",
    CANCELED = "CANCELED",
    NOT_DISPATCHED = "NOT_DISPATCHED"
}
export declare const BarrierPolicy: z.ZodObject<{
    requiredSuccesses: z.ZodOptional<z.ZodNumber>;
    releaseOnFirstFailure: z.ZodOptional<z.ZodBoolean>;
    reasonRequiredOn: z.ZodOptional<z.ZodEnum<{
        none: "none";
        both: "both";
        reject: "reject";
    }>>;
}, z.core.$strip>;
export type BarrierPolicy = z.infer<typeof BarrierPolicy>;
export declare const CreateBarrierRequest: z.ZodObject<{
    policy: z.ZodOptional<z.ZodObject<{
        requiredSuccesses: z.ZodOptional<z.ZodNumber>;
        releaseOnFirstFailure: z.ZodOptional<z.ZodBoolean>;
        reasonRequiredOn: z.ZodOptional<z.ZodEnum<{
            none: "none";
            both: "both";
            reject: "reject";
        }>>;
    }, z.core.$strip>>;
    signals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type CreateBarrierRequest = z.infer<typeof CreateBarrierRequest>;
export declare const CreateWaitpointRequest: z.ZodObject<{
    flowRunId: z.ZodString;
    projectId: z.ZodString;
    stepName: z.ZodString;
    type: z.ZodEnum<{
        WEBHOOK: "WEBHOOK";
        DELAY: "DELAY";
        BARRIER: "BARRIER";
    }>;
    version: z.ZodEnum<{
        V0: "V0";
        V1: "V1";
    }>;
    resumeDateTime: z.ZodOptional<z.ZodString>;
    responseToSend: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodNumber>;
        body: z.ZodOptional<z.ZodUnknown>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    workerHandlerId: z.ZodOptional<z.ZodString>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    barrier: z.ZodOptional<z.ZodObject<{
        policy: z.ZodOptional<z.ZodObject<{
            requiredSuccesses: z.ZodOptional<z.ZodNumber>;
            releaseOnFirstFailure: z.ZodOptional<z.ZodBoolean>;
            reasonRequiredOn: z.ZodOptional<z.ZodEnum<{
                none: "none";
                both: "both";
                reject: "reject";
            }>>;
        }, z.core.$strip>>;
        signals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateWaitpointRequest = z.infer<typeof CreateWaitpointRequest>;
export declare const BarrierCreatedState: z.ZodObject<{
    signalCount: z.ZodNumber;
    signals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodNullable<z.ZodString>;
        confirmUrl: z.ZodString;
    }, z.core.$strip>>>;
    signalsTruncated: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type BarrierCreatedState = z.infer<typeof BarrierCreatedState>;
export declare const CreateWaitpointResponse: z.ZodObject<{
    id: z.ZodString;
    resumeUrl: z.ZodString;
    barrier: z.ZodOptional<z.ZodObject<{
        signalCount: z.ZodNumber;
        signals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodNullable<z.ZodString>;
            confirmUrl: z.ZodString;
        }, z.core.$strip>>>;
        signalsTruncated: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateWaitpointResponse = z.infer<typeof CreateWaitpointResponse>;
export declare const BarrierSignalSummary: z.ZodObject<{
    sequence: z.ZodNullable<z.ZodNumber>;
    label: z.ZodNullable<z.ZodString>;
    outcome: z.ZodEnum<typeof BarrierSignalStatus>;
    result: z.ZodNullable<z.ZodUnknown>;
    runId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type BarrierSignalSummary = z.infer<typeof BarrierSignalSummary>;
export declare const BarrierSummary: z.ZodObject<{
    total: z.ZodNumber;
    succeeded: z.ZodNumber;
    failed: z.ZodNumber;
    rejected: z.ZodNumber;
    canceled: z.ZodNumber;
    notDispatched: z.ZodNumber;
    stillRunning: z.ZodNumber;
    timedOut: z.ZodBoolean;
    signals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        sequence: z.ZodNullable<z.ZodNumber>;
        label: z.ZodNullable<z.ZodString>;
        outcome: z.ZodEnum<typeof BarrierSignalStatus>;
        result: z.ZodNullable<z.ZodUnknown>;
        runId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    signalsTruncated: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type BarrierSummary = z.infer<typeof BarrierSummary>;
export declare const MAX_INLINE_BARRIER_SIGNALS = 100;
export declare const MAX_SIGNAL_REASON_LENGTH = 2000;
export declare const UNFAVOURABLE_SIGNAL_STATUSES: BarrierSignalStatus[];
export type BarrierSignalCounts = Partial<Record<BarrierSignalStatus, number>>;
export type ShouldReleaseBarrierParams = {
    policy: BarrierPolicy | null | undefined;
    sealed: boolean;
    counts: BarrierSignalCounts;
};
export type BarrierReleaseShapeParams = Pick<ShouldReleaseBarrierParams, 'policy' | 'sealed'>;
