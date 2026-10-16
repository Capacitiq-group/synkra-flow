import { z } from 'zod';
import { EngineResponseStatus } from '../engine/engine-operation';
export declare enum WorkerMachineStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}
export declare enum WorkerMachineType {
    SHARED = "SHARED",
    DEDICATED = "DEDICATED"
}
export declare enum WorkerGroupScope {
    PLATFORM = "platform",
    PROJECT = "project"
}
export declare enum NetworkMode {
    UNRESTRICTED = "UNRESTRICTED",
    STRICT = "STRICT"
}
export declare const SandboxInformation: z.ZodObject<{
    sandboxId: z.ZodString;
    boxId: z.ZodNumber;
    busy: z.ZodBoolean;
    memoryUsageBytes: z.ZodNumber;
}, z.core.$strip>;
export type SandboxInformation = z.infer<typeof SandboxInformation>;
export declare const WorkerProps: z.ZodObject<{
    EXECUTION_MODE: z.ZodOptional<z.ZodString>;
    WORKER_CONCURRENCY: z.ZodOptional<z.ZodString>;
    SANDBOX_MEMORY_LIMIT: z.ZodOptional<z.ZodString>;
    REUSE_SANDBOX: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WorkerProps = z.infer<typeof WorkerProps>;
export declare const MachineInformation: z.ZodObject<{
    cpuUsagePercentage: z.ZodNumber;
    diskInfo: z.ZodObject<{
        total: z.ZodNumber;
        free: z.ZodNumber;
        used: z.ZodNumber;
        percentage: z.ZodNumber;
    }, z.core.$strip>;
    workerId: z.ZodString;
    workerProps: z.ZodObject<{
        EXECUTION_MODE: z.ZodOptional<z.ZodString>;
        WORKER_CONCURRENCY: z.ZodOptional<z.ZodString>;
        SANDBOX_MEMORY_LIMIT: z.ZodOptional<z.ZodString>;
        REUSE_SANDBOX: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    ramUsagePercentage: z.ZodNumber;
    totalAvailableRamInBytes: z.ZodNumber;
    totalCpuCores: z.ZodNumber;
    ip: z.ZodString;
    serverPingMs: z.ZodOptional<z.ZodNumber>;
    sandboxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        sandboxId: z.ZodString;
        boxId: z.ZodNumber;
        busy: z.ZodBoolean;
        memoryUsageBytes: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MachineInformation = z.infer<typeof MachineInformation>;
export declare const WorkerMachine: z.ZodObject<{
    information: z.ZodObject<{
        cpuUsagePercentage: z.ZodNumber;
        diskInfo: z.ZodObject<{
            total: z.ZodNumber;
            free: z.ZodNumber;
            used: z.ZodNumber;
            percentage: z.ZodNumber;
        }, z.core.$strip>;
        workerId: z.ZodString;
        workerProps: z.ZodObject<{
            EXECUTION_MODE: z.ZodOptional<z.ZodString>;
            WORKER_CONCURRENCY: z.ZodOptional<z.ZodString>;
            SANDBOX_MEMORY_LIMIT: z.ZodOptional<z.ZodString>;
            REUSE_SANDBOX: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        ramUsagePercentage: z.ZodNumber;
        totalAvailableRamInBytes: z.ZodNumber;
        totalCpuCores: z.ZodNumber;
        ip: z.ZodString;
        serverPingMs: z.ZodOptional<z.ZodNumber>;
        sandboxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
            sandboxId: z.ZodString;
            boxId: z.ZodNumber;
            busy: z.ZodBoolean;
            memoryUsageBytes: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type WorkerMachine = z.infer<typeof WorkerMachine>;
export declare const WorkerMachineWithStatus: z.ZodObject<{
    information: z.ZodObject<{
        cpuUsagePercentage: z.ZodNumber;
        diskInfo: z.ZodObject<{
            total: z.ZodNumber;
            free: z.ZodNumber;
            used: z.ZodNumber;
            percentage: z.ZodNumber;
        }, z.core.$strip>;
        workerId: z.ZodString;
        workerProps: z.ZodObject<{
            EXECUTION_MODE: z.ZodOptional<z.ZodString>;
            WORKER_CONCURRENCY: z.ZodOptional<z.ZodString>;
            SANDBOX_MEMORY_LIMIT: z.ZodOptional<z.ZodString>;
            REUSE_SANDBOX: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        ramUsagePercentage: z.ZodNumber;
        totalAvailableRamInBytes: z.ZodNumber;
        totalCpuCores: z.ZodNumber;
        ip: z.ZodString;
        serverPingMs: z.ZodOptional<z.ZodNumber>;
        sandboxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
            sandboxId: z.ZodString;
            boxId: z.ZodNumber;
            busy: z.ZodBoolean;
            memoryUsageBytes: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    status: z.ZodEnum<typeof WorkerMachineStatus>;
    type: z.ZodEnum<typeof WorkerMachineType>;
    workerGroupId: z.ZodOptional<z.ZodString>;
    workerGroupScope: z.ZodOptional<z.ZodEnum<typeof WorkerGroupScope>>;
}, z.core.$strip>;
export type WorkerMachineWithStatus = z.infer<typeof WorkerMachineWithStatus>;
export declare const ConsumeJobRequest: z.ZodObject<{
    jobId: z.ZodString;
    jobData: z.ZodUnion<readonly [z.ZodObject<{
        projectId: z.ZodString;
        platformId: z.ZodString;
        schemaVersion: z.ZodNumber;
        flowVersionId: z.ZodString;
        flowId: z.ZodString;
        triggerType: z.ZodEnum<typeof import("@activepieces/shared").FlowTriggerType>;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_POLLING>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowVersionId: z.ZodString;
        flowId: z.ZodString;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.RENEW_WEBHOOK>;
    }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        projectId: z.ZodString;
        platformId: z.ZodString;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_FLOW>;
        environment: z.ZodEnum<typeof import("@activepieces/shared").RunEnvironment>;
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
        streamStepProgress: z.ZodEnum<typeof import("../engine/engine-operation").StreamStepProgress>;
        stepNameToTest: z.ZodOptional<z.ZodString>;
        sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        logsFileId: z.ZodString;
        executionType: z.ZodLiteral<import("@activepieces/shared").ExecutionType.BEGIN>;
        executeTrigger: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        projectId: z.ZodString;
        platformId: z.ZodString;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_FLOW>;
        environment: z.ZodEnum<typeof import("@activepieces/shared").RunEnvironment>;
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
        streamStepProgress: z.ZodEnum<typeof import("../engine/engine-operation").StreamStepProgress>;
        stepNameToTest: z.ZodOptional<z.ZodString>;
        sampleData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        logsFileId: z.ZodString;
        executionType: z.ZodLiteral<import("@activepieces/shared").ExecutionType.RESUME>;
        resumeReason: z.ZodEnum<typeof import("../engine/engine-operation").ResumeReason>;
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
        runEnvironment: z.ZodEnum<typeof import("@activepieces/shared").RunEnvironment>;
        flowId: z.ZodString;
        saveSampleData: z.ZodBoolean;
        flowVersionIdToRun: z.ZodString;
        execute: z.ZodBoolean;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_WEBHOOK>;
        parentRunId: z.ZodOptional<z.ZodString>;
        failParentOnFailure: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_VALIDATION>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER>;
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
        connectionValue: z.ZodCustom<import("@activepieces/core-piece-types").AppConnectionValue, import("@activepieces/core-piece-types").AppConnectionValue>;
        connectionType: z.ZodEnum<typeof import("@activepieces/core-piece-types").AppConnectionType>;
        requestId: z.ZodString;
        webserverId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_TOKEN_REFRESH>;
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
        connectionValue: z.ZodCustom<import("@activepieces/core-piece-types").AppConnectionValue, import("@activepieces/core-piece-types").AppConnectionValue>;
        requestId: z.ZodString;
        webserverId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_TRIGGER_HOOK>;
        platformId: z.ZodString;
        projectId: z.ZodString;
        schemaVersion: z.ZodNumber;
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        test: z.ZodBoolean;
        hookType: z.ZodEnum<typeof import("../engine/engine-operation").TriggerHookType>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_PROPERTY>;
        projectId: z.ZodString;
        platformId: z.ZodString;
        schemaVersion: z.ZodNumber;
        flowVersion: z.ZodOptional<z.ZodObject<{
            flowId: z.ZodString;
            displayName: z.ZodString;
            trigger: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/shared").FlowTriggerType.PIECE>;
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
                type: z.ZodLiteral<import("@activepieces/shared").FlowTriggerType.EMPTY>;
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
            state: z.ZodEnum<typeof import("@activepieces/shared").FlowVersionState>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_ACTION>;
        projectId: z.ZodString;
        platformId: z.ZodString;
        schemaVersion: z.ZodNumber;
        step: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<import("@activepieces/shared").FlowActionType.PIECE>;
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
            type: z.ZodLiteral<import("@activepieces/shared").FlowActionType.CODE>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EVENT_DESTINATION>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AGENT_RUN>;
        conversationId: z.ZodString;
        runId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodNullable<z.ZodString>;
        platformId: z.ZodString;
        userId: z.ZodString;
        userMessage: z.ZodString;
        source: z.ZodOptional<z.ZodEnum<typeof import("./job-data").AgentRunSource>>;
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
        provider: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.ASK_AI>;
        conversation: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.SUMMARIZE_TEXT>;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.CLASSIFY_TEXT>;
        text: z.ZodOptional<z.ZodString>;
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.EXTRACT_STRUCTURED_DATA>;
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
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.GENERATE_IMAGE>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            fileId: z.ZodString;
            mimeType: z.ZodOptional<z.ZodString>;
            filename: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        advancedOptions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_AI>;
        requestId: z.ZodString;
        projectId: z.ZodString;
        platformId: z.ZodString;
        flowId: z.ZodString;
        flowRunId: z.ZodString;
        waitpointId: z.ZodOptional<z.ZodString>;
        webserverId: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<typeof import("@activepieces/core-utils").AIProviderName>;
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
        action: z.ZodLiteral<import("@activepieces/core-utils").AiStepAction.ROUTE>;
        state: z.ZodString;
        question: z.ZodString;
        options: z.ZodRecord<z.ZodString, z.ZodString>;
        matchMode: z.ZodEnum<typeof import("@activepieces/shared").AiRouterMatchMode>;
    }, z.core.$strip>], "action">, z.ZodObject<{
        schemaVersion: z.ZodNumber;
        jobType: z.ZodLiteral<import("./job-data").WorkerJobType.EXECUTE_PERSONALIZATION_RESEARCH>;
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
    attempsStarted: z.ZodNumber;
    lastAttempt: z.ZodOptional<z.ZodBoolean>;
    engineToken: z.ZodString;
    token: z.ZodString;
    queueName: z.ZodString;
}, z.core.$strip>;
export type ConsumeJobRequest = z.infer<typeof ConsumeJobRequest>;
export declare const ConsumeJobResponse: z.ZodObject<{
    status: z.ZodEnum<typeof EngineResponseStatus>;
    errorMessage: z.ZodOptional<z.ZodString>;
    logs: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodUnknown>;
}, z.core.$strip>;
export type ConsumeJobResponse = z.infer<typeof ConsumeJobResponse>;
export declare const WorkerMachineHealthcheckRequest: z.ZodObject<{
    cpuUsagePercentage: z.ZodNumber;
    diskInfo: z.ZodObject<{
        total: z.ZodNumber;
        free: z.ZodNumber;
        used: z.ZodNumber;
        percentage: z.ZodNumber;
    }, z.core.$strip>;
    workerId: z.ZodString;
    workerProps: z.ZodObject<{
        EXECUTION_MODE: z.ZodOptional<z.ZodString>;
        WORKER_CONCURRENCY: z.ZodOptional<z.ZodString>;
        SANDBOX_MEMORY_LIMIT: z.ZodOptional<z.ZodString>;
        REUSE_SANDBOX: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    ramUsagePercentage: z.ZodNumber;
    totalAvailableRamInBytes: z.ZodNumber;
    totalCpuCores: z.ZodNumber;
    ip: z.ZodString;
    serverPingMs: z.ZodOptional<z.ZodNumber>;
    sandboxes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        sandboxId: z.ZodString;
        boxId: z.ZodNumber;
        busy: z.ZodBoolean;
        memoryUsageBytes: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type WorkerMachineHealthcheckRequest = z.infer<typeof WorkerMachineHealthcheckRequest>;
export declare const WorkerSettingsResponse: z.ZodObject<{
    PUBLIC_URL: z.ZodString;
    TRIGGER_TIMEOUT_SECONDS: z.ZodNumber;
    TRIGGER_HOOKS_TIMEOUT_SECONDS: z.ZodNumber;
    PAUSED_FLOW_TIMEOUT_DAYS: z.ZodNumber;
    EXECUTION_MODE: z.ZodString;
    FLOW_TIMEOUT_SECONDS: z.ZodNumber;
    LOG_LEVEL: z.ZodString;
    LOG_PRETTY: z.ZodString;
    ENVIRONMENT: z.ZodString;
    APP_WEBHOOK_SECRETS: z.ZodString;
    MAX_FLOW_RUN_LOG_SIZE_MB: z.ZodNumber;
    FLOW_RUN_LOG_INPUT_TRUNCATE_THRESHOLD_KB: z.ZodOptional<z.ZodNumber>;
    FLOW_RUN_LOG_SLICE_THRESHOLD_KB: z.ZodOptional<z.ZodNumber>;
    MAX_FILE_SIZE_MB: z.ZodNumber;
    SANDBOX_MEMORY_LIMIT: z.ZodString;
    SANDBOX_PROPAGATED_ENV_VARS: z.ZodArray<z.ZodString>;
    DEV_PIECES: z.ZodArray<z.ZodString>;
    SENTRY_DSN: z.ZodOptional<z.ZodString>;
    LOKI_PASSWORD: z.ZodOptional<z.ZodString>;
    LOKI_URL: z.ZodOptional<z.ZodString>;
    LOKI_USERNAME: z.ZodOptional<z.ZodString>;
    BETTERSTACK_HOST: z.ZodOptional<z.ZodString>;
    BETTERSTACK_TOKEN: z.ZodOptional<z.ZodString>;
    HYPERDX_TOKEN: z.ZodOptional<z.ZodString>;
    FILE_STORAGE_LOCATION: z.ZodString;
    S3_USE_SIGNED_URLS: z.ZodString;
    EVENT_DESTINATION_TIMEOUT_SECONDS: z.ZodNumber;
    WORKER_GROUP_ID: z.ZodOptional<z.ZodString>;
    EDITION: z.ZodString;
    NETWORK_MODE: z.ZodEnum<typeof NetworkMode>;
    SSRF_ALLOW_LIST: z.ZodArray<z.ZodString>;
    ENFORCE_CONNECTION_PIECE_BINDING: z.ZodBoolean;
    PAGE_ONCALL_WEBHOOK: z.ZodOptional<z.ZodString>;
    APP_VERSION: z.ZodOptional<z.ZodString>;
    PROJECT_WORKER: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type WorkerSettingsResponse = z.infer<typeof WorkerSettingsResponse>;
