import { z } from 'zod';
import { PieceType } from '../pieces/piece';
export declare const PROJECT_REPLACE_SCHEMA_VERSION = 1;
export declare const RequiredPiece: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodString;
    pieceType: z.ZodEnum<typeof PieceType>;
}, z.core.$strip>;
export type RequiredPiece = z.infer<typeof RequiredPiece>;
export declare const ProjectReplaceRequest: z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    sourceActivepiecesVersion: z.ZodString;
    flows: z.ZodArray<z.ZodObject<{
        projectId: z.ZodString;
        externalId: z.ZodString;
        ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        folderId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        status: z.ZodEnum<typeof import("@activepieces/core-execution").FlowStatus>;
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
        version: z.ZodObject<{
            flowId: z.ZodString;
            displayName: z.ZodString;
            trigger: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
                settings: z.ZodObject<{
                    sampleData: z.ZodOptional<z.ZodObject<{
                        sampleDataFileId: z.ZodOptional<z.ZodString>;
                        sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                        lastTestDate: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                        type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
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
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
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
            state: z.ZodEnum<typeof import("@activepieces/core-execution").FlowVersionState>;
            connectionIds: z.ZodArray<z.ZodString>;
            backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
            notes: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                content: z.ZodString;
                ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
                color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
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
        }, z.core.$strip>;
        triggerSource: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniObject<{
            schedule: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniDiscriminatedUnion<[import("zod/mini").ZodMiniObject<{
                type: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.CRON_EXPRESSION>;
                cronExpression: import("zod/mini").ZodMiniString<string>;
                timezone: import("zod/mini").ZodMiniString<string>;
            }, z.core.$strip>, import("zod/mini").ZodMiniObject<{
                type: import("zod/mini").ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.INTERVAL>;
                intervalMs: import("zod/mini").ZodMiniNumberFormat;
            }, z.core.$strip>], "type">>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    tables: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        externalId: z.ZodString;
        fields: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            data: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            externalId: z.ZodString;
        }, z.core.$strip>>;
        status: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof import("../tables").TableAutomationStatus>>>;
        trigger: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof import("../tables").TableAutomationTrigger>>>;
    }, z.core.$strip>>;
    folders: z.ZodArray<z.ZodObject<{
        externalId: z.ZodString;
        displayName: z.ZodString;
        displayOrder: z.ZodNumber;
    }, z.core.$strip>>;
    connections: z.ZodArray<z.ZodObject<{
        externalId: z.ZodString;
        pieceName: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    requiredPieces: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodString;
        pieceType: z.ZodEnum<typeof PieceType>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProjectReplaceRequest = z.infer<typeof ProjectReplaceRequest>;
export declare enum ProjectReplaceErrorKind {
    AP_VERSION_MISMATCH = "AP_VERSION_MISMATCH",
    PIECE_VERSION_MISMATCH = "PIECE_VERSION_MISMATCH",
    CONNECTION_PIECE_MISMATCH = "CONNECTION_PIECE_MISMATCH"
}
export declare const ProjectReplacePreflightError: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<ProjectReplaceErrorKind.AP_VERSION_MISMATCH>;
    sourceVersion: z.ZodString;
    destVersion: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<ProjectReplaceErrorKind.PIECE_VERSION_MISMATCH>;
    pieceName: z.ZodString;
    sourceVersion: z.ZodString;
    destVersion: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<ProjectReplaceErrorKind.CONNECTION_PIECE_MISMATCH>;
    externalId: z.ZodString;
    expectedPieceName: z.ZodString;
    foundPieceName: z.ZodString;
}, z.core.$strip>], "kind">;
export type ProjectReplacePreflightError = z.infer<typeof ProjectReplacePreflightError>;
export declare const PieceInstallFailure: z.ZodObject<{
    pieceName: z.ZodString;
    version: z.ZodString;
    pieceType: z.ZodEnum<typeof PieceType>;
    message: z.ZodString;
}, z.core.$strip>;
export type PieceInstallFailure = z.infer<typeof PieceInstallFailure>;
export declare const ProjectReplacePreflightFailure: z.ZodObject<{
    errors: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<ProjectReplaceErrorKind.AP_VERSION_MISMATCH>;
        sourceVersion: z.ZodString;
        destVersion: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<ProjectReplaceErrorKind.PIECE_VERSION_MISMATCH>;
        pieceName: z.ZodString;
        sourceVersion: z.ZodString;
        destVersion: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<ProjectReplaceErrorKind.CONNECTION_PIECE_MISMATCH>;
        externalId: z.ZodString;
        expectedPieceName: z.ZodString;
        foundPieceName: z.ZodString;
    }, z.core.$strip>], "kind">>;
}, z.core.$strip>;
export type ProjectReplacePreflightFailure = z.infer<typeof ProjectReplacePreflightFailure>;
export declare enum ProjectReplaceItemKind {
    FLOW = "flow",
    TABLE = "table",
    FOLDER = "folder",
    CONNECTION = "connection"
}
export declare enum ProjectReplaceItemOp {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export declare const ProjectReplaceItemFailure: z.ZodObject<{
    kind: z.ZodEnum<typeof ProjectReplaceItemKind>;
    externalId: z.ZodString;
    op: z.ZodEnum<typeof ProjectReplaceItemOp>;
    error: z.ZodString;
}, z.core.$strip>;
export type ProjectReplaceItemFailure = z.infer<typeof ProjectReplaceItemFailure>;
export declare const ProjectReplaceApplied: z.ZodObject<{
    flowsCreated: z.ZodNumber;
    flowsUpdated: z.ZodNumber;
    flowsDeleted: z.ZodNumber;
    flowsUnchanged: z.ZodNumber;
    tablesCreated: z.ZodNumber;
    tablesUpdated: z.ZodNumber;
    tablesDeleted: z.ZodNumber;
    tablesUnchanged: z.ZodNumber;
    foldersCreated: z.ZodNumber;
    foldersUpdated: z.ZodNumber;
    foldersDeleted: z.ZodNumber;
    foldersUnchanged: z.ZodNumber;
    connectionsCreated: z.ZodNumber;
    connectionsUpdated: z.ZodNumber;
    connectionsUnchanged: z.ZodNumber;
}, z.core.$strip>;
export type ProjectReplaceApplied = z.infer<typeof ProjectReplaceApplied>;
export declare const ConnectionAwaitingAuthorization: z.ZodObject<{
    externalId: z.ZodString;
    pieceName: z.ZodString;
    displayName: z.ZodString;
}, z.core.$strip>;
export type ConnectionAwaitingAuthorization = z.infer<typeof ConnectionAwaitingAuthorization>;
export declare const InstalledPiece: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodString;
    pieceType: z.ZodEnum<typeof PieceType>;
}, z.core.$strip>;
export type InstalledPiece = z.infer<typeof InstalledPiece>;
export declare const ProjectReplaceResponse: z.ZodObject<{
    applied: z.ZodObject<{
        flowsCreated: z.ZodNumber;
        flowsUpdated: z.ZodNumber;
        flowsDeleted: z.ZodNumber;
        flowsUnchanged: z.ZodNumber;
        tablesCreated: z.ZodNumber;
        tablesUpdated: z.ZodNumber;
        tablesDeleted: z.ZodNumber;
        tablesUnchanged: z.ZodNumber;
        foldersCreated: z.ZodNumber;
        foldersUpdated: z.ZodNumber;
        foldersDeleted: z.ZodNumber;
        foldersUnchanged: z.ZodNumber;
        connectionsCreated: z.ZodNumber;
        connectionsUpdated: z.ZodNumber;
        connectionsUnchanged: z.ZodNumber;
    }, z.core.$strip>;
    failed: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<typeof ProjectReplaceItemKind>;
        externalId: z.ZodString;
        op: z.ZodEnum<typeof ProjectReplaceItemOp>;
        error: z.ZodString;
    }, z.core.$strip>>;
    connectionsAwaitingAuthorization: z.ZodArray<z.ZodObject<{
        externalId: z.ZodString;
        pieceName: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>;
    piecesInstalled: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodString;
        pieceType: z.ZodEnum<typeof PieceType>;
    }, z.core.$strip>>;
    durationMs: z.ZodNumber;
}, z.core.$strip>;
export type ProjectReplaceResponse = z.infer<typeof ProjectReplaceResponse>;
