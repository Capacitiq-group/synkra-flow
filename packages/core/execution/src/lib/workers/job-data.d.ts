import { z } from 'zod';
import { AIProviderName, AiStepAction } from '@activepieces/core-utils';
import { ResumeReason, StreamStepProgress, TriggerHookType } from '../engine';
import { ExecutionType } from '../flow-run/execution/execution-output';
import { RunEnvironment } from '../flow-run/flow-run';
import { AiRouterMatchMode } from '../flows/actions/action';
import { FlowTriggerType } from '../flows/triggers/trigger';
import { AppConnectionType, AppConnectionValue } from '@activepieces/core-piece-types';
export declare const LATEST_JOB_DATA_SCHEMA_VERSION = 10;
export declare const InlineJobPayload: z.ZodObject<{
    type: z.ZodLiteral<"inline">;
    value: z.ZodAny;
}, z.core.$strip>;
export declare const RefJobPayload: z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    fileId: z.ZodString;
}, z.core.$strip>;
export declare const JobPayload: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"inline">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    fileId: z.ZodString;
}, z.core.$strip>], "type">;
export declare const JOB_PRIORITY: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    veryLow: number;
    lowest: number;
};
export declare const RATE_LIMIT_PRIORITY: keyof typeof JOB_PRIORITY;
export declare function getDefaultJobPriority(job: JobData): keyof typeof JOB_PRIORITY;
export declare enum WorkerJobType {
    RENEW_WEBHOOK = "RENEW_WEBHOOK",
    EXECUTE_POLLING = "EXECUTE_POLLING",
    EXECUTE_WEBHOOK = "EXECUTE_WEBHOOK",
    EXECUTE_FLOW = "EXECUTE_FLOW",
    EXECUTE_VALIDATION = "EXECUTE_VALIDATION",
    EXECUTE_RESOLVE_CONNECTION_IDENTIFIER = "EXECUTE_RESOLVE_CONNECTION_IDENTIFIER",
    EXECUTE_TRIGGER_HOOK = "EXECUTE_TRIGGER_HOOK",
    EXECUTE_PROPERTY = "EXECUTE_PROPERTY",
    EXECUTE_EXTRACT_PIECE_INFORMATION = "EXECUTE_EXTRACT_PIECE_INFORMATION",
    EVENT_DESTINATION = "EVENT_DESTINATION",
    EXECUTE_AGENT_RUN = "EXECUTE_AGENT_RUN",
    EXECUTE_AI = "EXECUTE_AI",
    EXECUTE_TOKEN_REFRESH = "EXECUTE_TOKEN_REFRESH",
    EXECUTE_ACTION = "EXECUTE_ACTION",
    EXECUTE_PERSONALIZATION_RESEARCH = "EXECUTE_PERSONALIZATION_RESEARCH"
}
export declare const RenewWebhookJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowVersionId: z.ZodString;
    flowId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.RENEW_WEBHOOK>;
}, z.core.$strip>;
export type RenewWebhookJobData = z.infer<typeof RenewWebhookJobData>;
export declare const PollingJobData: z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowVersionId: z.ZodString;
    flowId: z.ZodString;
    triggerType: z.ZodEnum<typeof FlowTriggerType>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_POLLING>;
}, z.core.$strip>;
export type PollingJobData = z.infer<typeof PollingJobData>;
export declare const BeginExecuteFlowJobData: z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.BEGIN>;
    executeTrigger: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type BeginExecuteFlowJobData = z.infer<typeof BeginExecuteFlowJobData>;
export declare const ResumeExecuteFlowJobData: z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.RESUME>;
    resumeReason: z.ZodEnum<typeof ResumeReason>;
}, z.core.$strip>;
export type ResumeExecuteFlowJobData = z.infer<typeof ResumeExecuteFlowJobData>;
export declare const ExecuteFlowJobData: z.ZodDiscriminatedUnion<[z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.BEGIN>;
    executeTrigger: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.RESUME>;
    resumeReason: z.ZodEnum<typeof ResumeReason>;
}, z.core.$strip>], "executionType">;
export type ExecuteFlowJobData = z.infer<typeof ExecuteFlowJobData>;
export declare const WebhookJobData: z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    requestId: z.ZodString;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    runEnvironment: z.ZodEnum<typeof RunEnvironment>;
    flowId: z.ZodString;
    saveSampleData: z.ZodBoolean;
    flowVersionIdToRun: z.ZodString;
    execute: z.ZodBoolean;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_WEBHOOK>;
    parentRunId: z.ZodOptional<z.ZodString>;
    failParentOnFailure: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type WebhookJobData = z.infer<typeof WebhookJobData>;
export declare const ExecuteValidateAuthJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_VALIDATION>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodUnknown;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteValidateAuthJobData = z.infer<typeof ExecuteValidateAuthJobData>;
export declare const ExecuteResolveConnectionIdentifierJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    connectionType: z.ZodEnum<typeof AppConnectionType>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteResolveConnectionIdentifierJobData = z.infer<typeof ExecuteResolveConnectionIdentifierJobData>;
export declare const ExecuteTokenRefreshJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TOKEN_REFRESH>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteTokenRefreshJobData = z.infer<typeof ExecuteTokenRefreshJobData>;
export declare const ExecuteTriggerHookJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TRIGGER_HOOK>;
    platformId: z.ZodString;
    projectId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    test: z.ZodBoolean;
    hookType: z.ZodEnum<typeof TriggerHookType>;
    triggerPayload: z.ZodOptional<z.ZodObject<{
        body: z.ZodUnknown;
        rawBody: z.ZodOptional<z.ZodUnknown>;
        method: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        queryParams: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    isRepublish: z.ZodOptional<z.ZodBoolean>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteTriggerHookJobData = z.infer<typeof ExecuteTriggerHookJobData>;
export declare const ExecutePropertyJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PROPERTY>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowVersion: z.ZodOptional<z.ZodObject<{
        flowId: z.ZodString;
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        updatedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        agentIds: z.ZodArray<z.ZodString>;
        state: z.ZodEnum<typeof import("../flows/flow-version").FlowVersionState>;
        connectionIds: z.ZodArray<z.ZodString>;
        backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
        notes: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/shared").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    propertyName: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    actionOrTriggerName: z.ZodString;
    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    sampleData: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    searchValue: z.ZodOptional<z.ZodString>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecutePropertyJobData = z.infer<typeof ExecutePropertyJobData>;
export declare const ExecuteExtractPieceMetadataJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION>;
    projectId: z.ZodUndefined;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteExtractPieceMetadataJobData = z.infer<typeof ExecuteExtractPieceMetadataJobData>;
export declare const ActionRunStep: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.PIECE>;
    settings: z.ZodObject<{
        propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
            schema: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        pieceName: z.ZodString;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        actionName: z.ZodOptional<z.ZodString>;
        input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
            continueOnFailure: z.ZodOptional<z.ZodObject<{
                value: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            retryOnFailure: z.ZodOptional<z.ZodObject<{
                value: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        sampleData: z.ZodOptional<z.ZodObject<{
            sampleDataFileId: z.ZodOptional<z.ZodString>;
            sampleDataInputFileId: z.ZodOptional<z.ZodString>;
            lastTestDate: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        customLogoUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    name: z.ZodString;
    valid: z.ZodBoolean;
    displayName: z.ZodString;
    skip: z.ZodOptional<z.ZodBoolean>;
    lastUpdatedDate: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.CODE>;
    settings: z.ZodObject<{
        sourceCode: z.ZodObject<{
            packageJson: z.ZodString;
            code: z.ZodString;
        }, z.core.$strip>;
        input: z.ZodRecord<z.ZodString, z.ZodAny>;
        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
            continueOnFailure: z.ZodOptional<z.ZodObject<{
                value: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            retryOnFailure: z.ZodOptional<z.ZodObject<{
                value: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        useDeno: z.ZodOptional<z.ZodBoolean>;
        sampleData: z.ZodOptional<z.ZodObject<{
            sampleDataFileId: z.ZodOptional<z.ZodString>;
            sampleDataInputFileId: z.ZodOptional<z.ZodString>;
            lastTestDate: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        customLogoUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    name: z.ZodString;
    valid: z.ZodBoolean;
    displayName: z.ZodString;
    skip: z.ZodOptional<z.ZodBoolean>;
    lastUpdatedDate: z.ZodString;
}, z.core.$strip>], "type">;
export type ActionRunStep = z.infer<typeof ActionRunStep>;
export declare const ExecuteActionJobData: z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_ACTION>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    step: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.PIECE>;
        settings: z.ZodObject<{
            propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                schema: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            pieceName: z.ZodString;
            pieceVersion: import("zod/mini").ZodMiniString<string>;
            actionName: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.CODE>;
        settings: z.ZodObject<{
            sourceCode: z.ZodObject<{
                packageJson: z.ZodString;
                code: z.ZodString;
            }, z.core.$strip>;
            input: z.ZodRecord<z.ZodString, z.ZodAny>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            useDeno: z.ZodOptional<z.ZodBoolean>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>], "type">;
    piece: z.ZodOptional<import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>>;
    expiresAt: z.ZodNumber;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>;
export type ExecuteActionJobData = z.infer<typeof ExecuteActionJobData>;
export declare const UserInteractionJobData: z.ZodUnion<readonly [z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_VALIDATION>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodUnknown;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    connectionType: z.ZodEnum<typeof AppConnectionType>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TOKEN_REFRESH>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TRIGGER_HOOK>;
    platformId: z.ZodString;
    projectId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    test: z.ZodBoolean;
    hookType: z.ZodEnum<typeof TriggerHookType>;
    triggerPayload: z.ZodOptional<z.ZodObject<{
        body: z.ZodUnknown;
        rawBody: z.ZodOptional<z.ZodUnknown>;
        method: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        queryParams: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    isRepublish: z.ZodOptional<z.ZodBoolean>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PROPERTY>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowVersion: z.ZodOptional<z.ZodObject<{
        flowId: z.ZodString;
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        updatedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        agentIds: z.ZodArray<z.ZodString>;
        state: z.ZodEnum<typeof import("../flows/flow-version").FlowVersionState>;
        connectionIds: z.ZodArray<z.ZodString>;
        backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
        notes: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/shared").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    propertyName: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    actionOrTriggerName: z.ZodString;
    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    sampleData: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    searchValue: z.ZodOptional<z.ZodString>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION>;
    projectId: z.ZodUndefined;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_ACTION>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    step: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.PIECE>;
        settings: z.ZodObject<{
            propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                schema: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            pieceName: z.ZodString;
            pieceVersion: import("zod/mini").ZodMiniString<string>;
            actionName: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.CODE>;
        settings: z.ZodObject<{
            sourceCode: z.ZodObject<{
                packageJson: z.ZodString;
                code: z.ZodString;
            }, z.core.$strip>;
            input: z.ZodRecord<z.ZodString, z.ZodAny>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            useDeno: z.ZodOptional<z.ZodBoolean>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>], "type">;
    piece: z.ZodOptional<import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>>;
    expiresAt: z.ZodNumber;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>]>;
export type UserInteractionJobData = z.infer<typeof UserInteractionJobData>;
export declare const UserInteractionJobDataWithoutWatchingInformation: z.ZodUnion<readonly [z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_VALIDATION>;
    connectionValue: z.ZodUnknown;
}, z.core.$strip>, z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER>;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    connectionType: z.ZodEnum<typeof AppConnectionType>;
}, z.core.$strip>, z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TOKEN_REFRESH>;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
}, z.core.$strip>, z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodString;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TRIGGER_HOOK>;
    test: z.ZodBoolean;
    hookType: z.ZodEnum<typeof TriggerHookType>;
    triggerPayload: z.ZodOptional<z.ZodObject<{
        body: z.ZodUnknown;
        rawBody: z.ZodOptional<z.ZodUnknown>;
        method: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        queryParams: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    isRepublish: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    platformId: z.ZodString;
    projectId: z.ZodString;
    sampleData: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    flowVersion: z.ZodOptional<z.ZodObject<{
        flowId: z.ZodString;
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        updatedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        agentIds: z.ZodArray<z.ZodString>;
        state: z.ZodEnum<typeof import("../flows/flow-version").FlowVersionState>;
        connectionIds: z.ZodArray<z.ZodString>;
        backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
        notes: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/shared").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PROPERTY>;
    propertyName: z.ZodString;
    actionOrTriggerName: z.ZodString;
    searchValue: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodUndefined;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION>;
}, z.core.$strip>, z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodString;
    step: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.PIECE>;
        settings: z.ZodObject<{
            propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                schema: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            pieceName: z.ZodString;
            pieceVersion: import("zod/mini").ZodMiniString<string>;
            actionName: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.CODE>;
        settings: z.ZodObject<{
            sourceCode: z.ZodObject<{
                packageJson: z.ZodString;
                code: z.ZodString;
            }, z.core.$strip>;
            input: z.ZodRecord<z.ZodString, z.ZodAny>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            useDeno: z.ZodOptional<z.ZodBoolean>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>], "type">;
    piece: z.ZodOptional<import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_ACTION>;
    expiresAt: z.ZodNumber;
}, z.core.$strip>]>;
export type UserInteractionJobDataWithoutWatchingInformation = z.infer<typeof UserInteractionJobDataWithoutWatchingInformation>;
export declare enum AgentRunSource {
    CHAT = "CHAT",
    FLOW_STEP = "FLOW_STEP",
    AGENT = "AGENT",
    AGENT_BUILDER = "AGENT_BUILDER"
}
export declare const AgentPromptOverride: z.ZodObject<{
    system: z.ZodOptional<z.ZodString>;
    projectSelected: z.ZodOptional<z.ZodString>;
    noProject: z.ZodOptional<z.ZodString>;
    guides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type AgentPromptOverride = z.infer<typeof AgentPromptOverride>;
export declare const ResolvedAgentFlowTool: z.ZodObject<{
    toolName: z.ZodString;
    flowId: z.ZodString;
    flowVersionId: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    returnsResponse: z.ZodBoolean;
}, z.core.$strip>;
export type ResolvedAgentFlowTool = z.infer<typeof ResolvedAgentFlowTool>;
export declare const ExecuteAgentRunJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AGENT_RUN>;
    conversationId: z.ZodString;
    runId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodNullable<z.ZodString>;
    platformId: z.ZodString;
    userId: z.ZodString;
    userMessage: z.ZodString;
    source: z.ZodOptional<z.ZodEnum<typeof AgentRunSource>>;
    messageSource: z.ZodOptional<z.ZodEnum<{
        onboarding: "onboarding";
    }>>;
    agentId: z.ZodOptional<z.ZodString>;
    flowRunId: z.ZodOptional<z.ZodString>;
    waitpointId: z.ZodOptional<z.ZodString>;
    tools: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        pieceMetadata: z.ZodObject<{
            pieceName: z.ZodString;
            pieceVersion: z.ZodString;
            actionName: z.ZodString;
            predefinedInput: z.ZodOptional<z.ZodObject<{
                auth: z.ZodOptional<z.ZodString>;
                fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                    mode: z.ZodEnum<typeof import("@activepieces/core-piece-types").FieldControlMode>;
                    value: z.ZodUnknown;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.PIECE>;
    }, z.core.$strip>, z.ZodObject<{
        externalFlowId: z.ZodString;
        flowDisplayName: z.ZodOptional<z.ZodString>;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.FLOW>;
    }, z.core.$strip>, z.ZodObject<{
        serverUrl: z.ZodString;
        protocol: z.ZodEnum<typeof import("@activepieces/core-piece-types").McpProtocol>;
        auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.NONE>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.ACCESS_TOKEN>;
            accessToken: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.API_KEY>;
            apiKey: z.ZodString;
            apiKeyHeader: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.HEADERS>;
            headers: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>], "type">;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.MCP>;
    }, z.core.$strip>, z.ZodObject<{
        sourceType: z.ZodEnum<typeof import("@activepieces/core-piece-types").KnowledgeBaseSourceType>;
        sourceId: z.ZodString;
        sourceName: z.ZodString;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.KNOWLEDGE_BASE>;
    }, z.core.$strip>], "type">>>;
    flowTools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        toolName: z.ZodString;
        flowId: z.ZodString;
        flowVersionId: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        returnsResponse: z.ZodBoolean;
    }, z.core.$strip>>>;
    structuredOutput: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<typeof import("@activepieces/core-piece-types").AgentOutputFieldType>;
    }, z.core.$strip>>>;
    maxSteps: z.ZodOptional<z.ZodNumber>;
    provider: z.ZodOptional<z.ZodEnum<typeof AIProviderName>>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelName: z.ZodNullable<z.ZodString>;
    modelTierId: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        mimeType: z.ZodString;
        data: z.ZodString;
    }, z.core.$strip>>>;
    promptOverride: z.ZodOptional<z.ZodObject<{
        system: z.ZodOptional<z.ZodString>;
        projectSelected: z.ZodOptional<z.ZodString>;
        noProject: z.ZodOptional<z.ZodString>;
        guides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    dryRun: z.ZodOptional<z.ZodBoolean>;
    discoveryOnly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ExecuteAgentRunJobData = z.infer<typeof ExecuteAgentRunJobData>;
export declare const ExecutePersonalizationResearchJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PERSONALIZATION_RESEARCH>;
    platformId: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    scope: z.ZodEnum<{
        company: "company";
        user: "user";
    }>;
    website: z.ZodNullable<z.ZodString>;
    companyText: z.ZodNullable<z.ZodString>;
    role: z.ZodNullable<z.ZodString>;
    prefillOnly: z.ZodBoolean;
    researchToken: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ExecutePersonalizationResearchJobData = z.infer<typeof ExecutePersonalizationResearchJobData>;
export type PersonalizationScope = ExecutePersonalizationResearchJobData['scope'];
export declare const EventDestinationJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    webhookId: z.ZodString;
    webhookUrl: z.ZodString;
    payload: z.ZodUnknown;
    contentType: z.ZodOptional<z.ZodEnum<{
        "application/json": "application/json";
        "application/x-protobuf": "application/x-protobuf";
    }>>;
    hasHeaders: z.ZodOptional<z.ZodBoolean>;
    jobType: z.ZodLiteral<WorkerJobType.EVENT_DESTINATION>;
}, z.core.$strip>;
export type EventDestinationJobData = z.infer<typeof EventDestinationJobData>;
export declare const AiStepWebSearchOptions: z.ZodObject<{
    maxUses: z.ZodOptional<z.ZodNumber>;
    includeSources: z.ZodOptional<z.ZodBoolean>;
    userLocationCity: z.ZodOptional<z.ZodString>;
    userLocationRegion: z.ZodOptional<z.ZodString>;
    userLocationCountry: z.ZodOptional<z.ZodString>;
    userLocationTimezone: z.ZodOptional<z.ZodString>;
    allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
        domain: z.ZodString;
    }, z.core.$strip>>>;
    blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
        domain: z.ZodString;
    }, z.core.$strip>>>;
    searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
        high: "high";
        medium: "medium";
        low: "low";
    }>>>;
}, z.core.$strip>;
export type AiStepWebSearchOptions = z.infer<typeof AiStepWebSearchOptions>;
export declare const AiStepWebSearch: z.ZodObject<{
    enabled: z.ZodBoolean;
    options: z.ZodOptional<z.ZodObject<{
        maxUses: z.ZodOptional<z.ZodNumber>;
        includeSources: z.ZodOptional<z.ZodBoolean>;
        userLocationCity: z.ZodOptional<z.ZodString>;
        userLocationRegion: z.ZodOptional<z.ZodString>;
        userLocationCountry: z.ZodOptional<z.ZodString>;
        userLocationTimezone: z.ZodOptional<z.ZodString>;
        allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            domain: z.ZodString;
        }, z.core.$strip>>>;
        blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            domain: z.ZodString;
        }, z.core.$strip>>>;
        searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AiStepWebSearch = z.infer<typeof AiStepWebSearch>;
export declare const AiStepFile: z.ZodObject<{
    fileId: z.ZodString;
    mimeType: z.ZodOptional<z.ZodString>;
    filename: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AiStepFile = z.infer<typeof AiStepFile>;
export declare const AiStepSchema: z.ZodObject<{
    mode: z.ZodEnum<{
        advanced: "advanced";
        simple: "simple";
    }>;
    fields: z.ZodUnknown;
}, z.core.$strip>;
export type AiStepSchema = z.infer<typeof AiStepSchema>;
export declare const AskAiJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ASK_AI>;
    conversation: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>;
export type AskAiJobData = z.infer<typeof AskAiJobData>;
export declare const SummarizeTextJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.SUMMARIZE_TEXT>;
    text: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SummarizeTextJobData = z.infer<typeof SummarizeTextJobData>;
export declare const ClassifyTextJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.CLASSIFY_TEXT>;
    text: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ClassifyTextJobData = z.infer<typeof ClassifyTextJobData>;
export declare const ExtractStructuredDataJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.EXTRACT_STRUCTURED_DATA>;
    text: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    schema: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            advanced: "advanced";
            simple: "simple";
        }>;
        fields: z.ZodUnknown;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ExtractStructuredDataJobData = z.infer<typeof ExtractStructuredDataJobData>;
export declare const GenerateImageJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.GENERATE_IMAGE>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    advancedOptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type GenerateImageJobData = z.infer<typeof GenerateImageJobData>;
export declare const RouteJobData: z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ROUTE>;
    state: z.ZodString;
    question: z.ZodString;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    matchMode: z.ZodEnum<typeof AiRouterMatchMode>;
}, z.core.$strip>;
export type RouteJobData = z.infer<typeof RouteJobData>;
export declare const ExecuteAiJobData: z.ZodDiscriminatedUnion<[z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ASK_AI>;
    conversation: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.SUMMARIZE_TEXT>;
    text: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.CLASSIFY_TEXT>;
    text: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.EXTRACT_STRUCTURED_DATA>;
    text: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    schema: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            advanced: "advanced";
            simple: "simple";
        }>;
        fields: z.ZodUnknown;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.GENERATE_IMAGE>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    advancedOptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ROUTE>;
    state: z.ZodString;
    question: z.ZodString;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    matchMode: z.ZodEnum<typeof AiRouterMatchMode>;
}, z.core.$strip>], "action">;
export type ExecuteAiJobData = z.infer<typeof ExecuteAiJobData>;
export declare const JobData: z.ZodUnion<readonly [z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowVersionId: z.ZodString;
    flowId: z.ZodString;
    triggerType: z.ZodEnum<typeof FlowTriggerType>;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_POLLING>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowVersionId: z.ZodString;
    flowId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.RENEW_WEBHOOK>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.BEGIN>;
    executeTrigger: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_FLOW>;
    environment: z.ZodEnum<typeof RunEnvironment>;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    runId: z.ZodString;
    workerHandlerId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    streamStepProgress: z.ZodEnum<typeof StreamStepProgress>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    logsFileId: z.ZodString;
    executionType: z.ZodLiteral<ExecutionType.RESUME>;
    resumeReason: z.ZodEnum<typeof ResumeReason>;
}, z.core.$strip>], "executionType">, z.ZodObject<{
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    requestId: z.ZodString;
    payload: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"inline">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        fileId: z.ZodString;
    }, z.core.$strip>], "type">;
    runEnvironment: z.ZodEnum<typeof RunEnvironment>;
    flowId: z.ZodString;
    saveSampleData: z.ZodBoolean;
    flowVersionIdToRun: z.ZodString;
    execute: z.ZodBoolean;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_WEBHOOK>;
    parentRunId: z.ZodOptional<z.ZodString>;
    failParentOnFailure: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_VALIDATION>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodUnknown;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    connectionType: z.ZodEnum<typeof AppConnectionType>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TOKEN_REFRESH>;
    projectId: z.ZodOptional<z.ZodString>;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    schemaVersion: z.ZodNumber;
    connectionValue: z.ZodCustom<AppConnectionValue, AppConnectionValue>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_TRIGGER_HOOK>;
    platformId: z.ZodString;
    projectId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    test: z.ZodBoolean;
    hookType: z.ZodEnum<typeof TriggerHookType>;
    triggerPayload: z.ZodOptional<z.ZodObject<{
        body: z.ZodUnknown;
        rawBody: z.ZodOptional<z.ZodUnknown>;
        method: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        queryParams: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    isRepublish: z.ZodOptional<z.ZodBoolean>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PROPERTY>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    flowVersion: z.ZodOptional<z.ZodObject<{
        flowId: z.ZodString;
        displayName: z.ZodString;
        trigger: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.PIECE>;
            settings: z.ZodObject<{
                sampleData: z.ZodOptional<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                    lastTestDate: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                    schema: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                customLogoUrl: z.ZodOptional<z.ZodString>;
                pieceName: z.ZodString;
                pieceVersion: import("zod/mini").ZodMiniString<string>;
                triggerName: z.ZodOptional<z.ZodString>;
                input: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, z.core.$strip>;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        updatedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        valid: z.ZodBoolean;
        schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        agentIds: z.ZodArray<z.ZodString>;
        state: z.ZodEnum<typeof import("../flows/flow-version").FlowVersionState>;
        connectionIds: z.ZodArray<z.ZodString>;
        backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
        notes: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            color: z.ZodEnum<typeof import("@activepieces/shared").NoteColorVariant>;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strip>;
            size: z.ZodObject<{
                width: z.ZodNumber;
                height: z.ZodNumber;
            }, z.core.$strip>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, z.core.$strip>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    propertyName: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    actionOrTriggerName: z.ZodString;
    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    sampleData: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    searchValue: z.ZodOptional<z.ZodString>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION>;
    projectId: z.ZodUndefined;
    platformId: z.ZodString;
    piece: import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_ACTION>;
    projectId: z.ZodString;
    platformId: z.ZodString;
    schemaVersion: z.ZodNumber;
    step: z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.PIECE>;
        settings: z.ZodObject<{
            propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<typeof import("@activepieces/shared").PropertyExecutionType>;
                schema: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            pieceName: z.ZodString;
            pieceVersion: import("zod/mini").ZodMiniString<string>;
            actionName: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<import("../flows/actions/action").FlowActionType.CODE>;
        settings: z.ZodObject<{
            sourceCode: z.ZodObject<{
                packageJson: z.ZodString;
                code: z.ZodString;
            }, z.core.$strip>;
            input: z.ZodRecord<z.ZodString, z.ZodAny>;
            errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                continueOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                retryOnFailure: z.ZodOptional<z.ZodObject<{
                    value: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            useDeno: z.ZodOptional<z.ZodBoolean>;
            sampleData: z.ZodOptional<z.ZodObject<{
                sampleDataFileId: z.ZodOptional<z.ZodString>;
                sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                lastTestDate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            customLogoUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        name: z.ZodString;
        valid: z.ZodBoolean;
        displayName: z.ZodString;
        skip: z.ZodOptional<z.ZodBoolean>;
        lastUpdatedDate: z.ZodString;
    }, z.core.$strip>], "type">;
    piece: z.ZodOptional<import("zod/mini").ZodMiniUnion<readonly [import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.ARCHIVE>;
        pieceType: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PieceType>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        archiveId: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.OFFICIAL>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
        packageType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PackageType.REGISTRY>;
        pieceType: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").PieceType.CUSTOM>;
        pieceName: import("zod/mini").ZodMiniString<string>;
        pieceVersion: import("zod/mini").ZodMiniString<string>;
        platformId: import("zod/mini").ZodMiniString<string>;
    }, z.core.$strip>]>>;
    expiresAt: z.ZodNumber;
    requestId: z.ZodString;
    webserverId: z.ZodString;
}, z.core.$strip>]>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    webhookId: z.ZodString;
    webhookUrl: z.ZodString;
    payload: z.ZodUnknown;
    contentType: z.ZodOptional<z.ZodEnum<{
        "application/json": "application/json";
        "application/x-protobuf": "application/x-protobuf";
    }>>;
    hasHeaders: z.ZodOptional<z.ZodBoolean>;
    jobType: z.ZodLiteral<WorkerJobType.EVENT_DESTINATION>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AGENT_RUN>;
    conversationId: z.ZodString;
    runId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodNullable<z.ZodString>;
    platformId: z.ZodString;
    userId: z.ZodString;
    userMessage: z.ZodString;
    source: z.ZodOptional<z.ZodEnum<typeof AgentRunSource>>;
    messageSource: z.ZodOptional<z.ZodEnum<{
        onboarding: "onboarding";
    }>>;
    agentId: z.ZodOptional<z.ZodString>;
    flowRunId: z.ZodOptional<z.ZodString>;
    waitpointId: z.ZodOptional<z.ZodString>;
    tools: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        pieceMetadata: z.ZodObject<{
            pieceName: z.ZodString;
            pieceVersion: z.ZodString;
            actionName: z.ZodString;
            predefinedInput: z.ZodOptional<z.ZodObject<{
                auth: z.ZodOptional<z.ZodString>;
                fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                    mode: z.ZodEnum<typeof import("@activepieces/core-piece-types").FieldControlMode>;
                    value: z.ZodUnknown;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.PIECE>;
    }, z.core.$strip>, z.ZodObject<{
        externalFlowId: z.ZodString;
        flowDisplayName: z.ZodOptional<z.ZodString>;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.FLOW>;
    }, z.core.$strip>, z.ZodObject<{
        serverUrl: z.ZodString;
        protocol: z.ZodEnum<typeof import("@activepieces/core-piece-types").McpProtocol>;
        auth: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.NONE>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.ACCESS_TOKEN>;
            accessToken: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.API_KEY>;
            apiKey: z.ZodString;
            apiKeyHeader: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/core-piece-types").McpAuthType.HEADERS>;
            headers: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>], "type">;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.MCP>;
    }, z.core.$strip>, z.ZodObject<{
        sourceType: z.ZodEnum<typeof import("@activepieces/core-piece-types").KnowledgeBaseSourceType>;
        sourceId: z.ZodString;
        sourceName: z.ZodString;
        toolName: z.ZodString;
        type: z.ZodLiteral<import("@activepieces/core-piece-types").AgentToolType.KNOWLEDGE_BASE>;
    }, z.core.$strip>], "type">>>;
    flowTools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        toolName: z.ZodString;
        flowId: z.ZodString;
        flowVersionId: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        inputSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        returnsResponse: z.ZodBoolean;
    }, z.core.$strip>>>;
    structuredOutput: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<typeof import("@activepieces/core-piece-types").AgentOutputFieldType>;
    }, z.core.$strip>>>;
    maxSteps: z.ZodOptional<z.ZodNumber>;
    provider: z.ZodOptional<z.ZodEnum<typeof AIProviderName>>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelName: z.ZodNullable<z.ZodString>;
    modelTierId: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        mimeType: z.ZodString;
        data: z.ZodString;
    }, z.core.$strip>>>;
    promptOverride: z.ZodOptional<z.ZodObject<{
        system: z.ZodOptional<z.ZodString>;
        projectSelected: z.ZodOptional<z.ZodString>;
        noProject: z.ZodOptional<z.ZodString>;
        guides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    dryRun: z.ZodOptional<z.ZodBoolean>;
    discoveryOnly: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ASK_AI>;
    conversation: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.SUMMARIZE_TEXT>;
    text: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.CLASSIFY_TEXT>;
    text: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.EXTRACT_STRUCTURED_DATA>;
    text: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    schema: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            advanced: "advanced";
            simple: "simple";
        }>;
        fields: z.ZodUnknown;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.GENERATE_IMAGE>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        mimeType: z.ZodOptional<z.ZodString>;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    advancedOptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_AI>;
    requestId: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
    webserverId: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof AIProviderName>;
    providerConfigId: z.ZodOptional<z.ZodString>;
    modelId: z.ZodString;
    modelTierId: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    temperature: z.ZodOptional<z.ZodNumber>;
    webSearch: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        options: z.ZodOptional<z.ZodObject<{
            maxUses: z.ZodOptional<z.ZodNumber>;
            includeSources: z.ZodOptional<z.ZodBoolean>;
            userLocationCity: z.ZodOptional<z.ZodString>;
            userLocationRegion: z.ZodOptional<z.ZodString>;
            userLocationCountry: z.ZodOptional<z.ZodString>;
            userLocationTimezone: z.ZodOptional<z.ZodString>;
            allowedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            blockedDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domain: z.ZodString;
            }, z.core.$strip>>>;
            searchContextSize: z.ZodCatch<z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    action: z.ZodLiteral<AiStepAction.ROUTE>;
    state: z.ZodString;
    question: z.ZodString;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    matchMode: z.ZodEnum<typeof AiRouterMatchMode>;
}, z.core.$strip>], "action">, z.ZodObject<{
    schemaVersion: z.ZodNumber;
    jobType: z.ZodLiteral<WorkerJobType.EXECUTE_PERSONALIZATION_RESEARCH>;
    platformId: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    scope: z.ZodEnum<{
        company: "company";
        user: "user";
    }>;
    website: z.ZodNullable<z.ZodString>;
    companyText: z.ZodNullable<z.ZodString>;
    role: z.ZodNullable<z.ZodString>;
    prefillOnly: z.ZodBoolean;
    researchToken: z.ZodNullable<z.ZodString>;
}, z.core.$strip>]>;
export type JobData = z.infer<typeof JobData>;
export type JobPayload = z.infer<typeof JobPayload>;
