import { AgentRunSource, FlowOperationType } from '@activepieces/core-execution';
import { z } from 'zod';
import * as zMini from 'zod/mini';
export declare const ListAuditEventsRequest: z.ZodObject<{
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    action: zMini.ZodMiniPipe<zMini.ZodMiniTransform<any[] | undefined, unknown>, zMini.ZodMiniOptional<zMini.ZodMiniArray<z.ZodString>>>;
    projectId: zMini.ZodMiniPipe<zMini.ZodMiniTransform<any[] | undefined, unknown>, zMini.ZodMiniOptional<zMini.ZodMiniArray<z.ZodString>>>;
    userId: z.ZodOptional<z.ZodString>;
    createdBefore: z.ZodOptional<z.ZodString>;
    createdAfter: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodEnum<{
        ASC: "ASC";
        DESC: "DESC";
    }>>;
}, z.core.$strip>;
export type ListAuditEventsRequest = z.infer<typeof ListAuditEventsRequest>;
export declare enum ApplicationEventName {
    FLOW_CREATED = "flow.created",
    FLOW_DELETED = "flow.deleted",
    FLOW_UPDATED = "flow.updated",
    FLOW_PIECES_UPGRADED = "flow.pieces.upgraded",
    FLOW_PIECES_REVERTED = "flow.pieces.reverted",
    FLOW_PUBLISHED = "flow.published",
    FLOW_ACTIVATED = "flow.activated",
    FLOW_DEACTIVATED = "flow.deactivated",
    FLOW_RUN_RESUMED = "flow.run.resumed",
    FLOW_RUN_STARTED = "flow.run.started",
    FLOW_RUN_FINISHED = "flow.run.finished",
    FLOW_RUN_RETRIED = "flow.run.retried",
    FOLDER_CREATED = "folder.created",
    FOLDER_UPDATED = "folder.updated",
    FOLDER_DELETED = "folder.deleted",
    CONNECTION_UPSERTED = "connection.upserted",
    CONNECTION_DELETED = "connection.deleted",
    AGENT_CREATED = "agent.created",
    AGENT_UPDATED = "agent.updated",
    AGENT_DELETED = "agent.deleted",
    AGENT_PUBLISHED = "agent.published",
    AGENT_UNPUBLISHED = "agent.unpublished",
    AGENT_ACTION_EXECUTED = "agent.action.executed",
    VARIABLE_UPSERTED = "variable.upserted",
    VARIABLE_DELETED = "variable.deleted",
    VARIABLE_VALUE_REVEALED = "variable.value.revealed",
    USER_SIGNED_UP = "user.signed.up",
    USER_SIGNED_IN = "user.signed.in",
    USER_PASSWORD_RESET = "user.password.reset",
    USER_EMAIL_VERIFIED = "user.email.verified",
    SIGNING_KEY_CREATED = "signing.key.created",
    AUDIT_LOG_RETENTION_UPDATED = "audit.log.retention.updated",
    PROJECT_ROLE_CREATED = "project.role.created",
    PROJECT_ROLE_DELETED = "project.role.deleted",
    PROJECT_ROLE_UPDATED = "project.role.updated",
    PROJECT_RELEASE_CREATED = "project.release.created",
    PROJECT_REPLACED = "project.replaced",
    FLOW_APPROVAL_REQUESTED = "flow.approval.requested",
    FLOW_APPROVAL_GRANTED = "flow.approval.granted",
    FLOW_APPROVAL_REJECTED = "flow.approval.rejected",
    FLOW_APPROVAL_WITHDRAWN = "flow.approval.withdrawn"
}
export declare const ConnectionEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.CONNECTION_DELETED>, z.ZodLiteral<ApplicationEventName.CONNECTION_UPSERTED>]>;
    data: z.ZodObject<{
        connection: z.ZodObject<{
            displayName: z.ZodString;
            externalId: z.ZodString;
            pieceName: z.ZodString;
            status: z.ZodString;
            type: z.ZodString;
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ConnectionEvent = z.infer<typeof ConnectionEvent>;
export declare const ConnectionUpsertedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.CONNECTION_UPSERTED>;
    data: z.ZodObject<{
        connection: z.ZodObject<{
            displayName: z.ZodString;
            externalId: z.ZodString;
            pieceName: z.ZodString;
            status: z.ZodString;
            type: z.ZodString;
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ConnectionUpsertedEvent = z.infer<typeof ConnectionUpsertedEvent>;
export declare const ConnectionDeletedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.CONNECTION_DELETED>;
    data: z.ZodObject<{
        connection: z.ZodObject<{
            displayName: z.ZodString;
            externalId: z.ZodString;
            pieceName: z.ZodString;
            status: z.ZodString;
            type: z.ZodString;
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ConnectionDeletedEvent = z.infer<typeof ConnectionDeletedEvent>;
export declare enum AgentActionKind {
    PIECE = "PIECE",
    FLOW = "FLOW"
}
export declare enum AgentActionOutcome {
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED"
}
declare const AgentActionEventData: z.ZodObject<{
    source: z.ZodEnum<typeof AgentRunSource>;
    conversation: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        source: z.ZodEnum<typeof AgentRunSource>;
    }, z.core.$strip>>;
    agent: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    flow: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        runId: z.ZodString;
    }, z.core.$strip>>;
    action: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<AgentActionKind.PIECE>;
        pieceName: z.ZodString;
        pieceDisplayName: z.ZodString;
        actionName: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<AgentActionKind.FLOW>;
        flowId: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>], "kind">;
    outcome: z.ZodOptional<z.ZodEnum<typeof AgentActionOutcome>>;
    connection: z.ZodOptional<z.ZodObject<{
        externalId: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const AgentActionExecutedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.AGENT_ACTION_EXECUTED>;
    data: z.ZodObject<{
        source: z.ZodEnum<typeof AgentRunSource>;
        conversation: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            source: z.ZodEnum<typeof AgentRunSource>;
        }, z.core.$strip>>;
        agent: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        flow: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
        }, z.core.$strip>>;
        action: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<AgentActionKind.PIECE>;
            pieceName: z.ZodString;
            pieceDisplayName: z.ZodString;
            actionName: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<AgentActionKind.FLOW>;
            flowId: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>], "kind">;
        outcome: z.ZodOptional<z.ZodEnum<typeof AgentActionOutcome>>;
        connection: z.ZodOptional<z.ZodObject<{
            externalId: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type AgentActionExecutedEvent = z.infer<typeof AgentActionExecutedEvent>;
export declare const AgentAuditEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.AGENT_CREATED>, z.ZodLiteral<ApplicationEventName.AGENT_UPDATED>, z.ZodLiteral<ApplicationEventName.AGENT_DELETED>, z.ZodLiteral<ApplicationEventName.AGENT_PUBLISHED>, z.ZodLiteral<ApplicationEventName.AGENT_UNPUBLISHED>]>;
    data: z.ZodObject<{
        agent: z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodString;
            publishedDigest: z.ZodOptional<z.ZodString>;
            publishedToolNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type AgentAuditEvent = z.infer<typeof AgentAuditEvent>;
export declare const VariableEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.VARIABLE_UPSERTED>, z.ZodLiteral<ApplicationEventName.VARIABLE_DELETED>, z.ZodLiteral<ApplicationEventName.VARIABLE_VALUE_REVEALED>]>;
    data: z.ZodObject<{
        variable: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type VariableEvent = z.infer<typeof VariableEvent>;
export declare const VariableUpsertedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.VARIABLE_UPSERTED>;
    data: z.ZodObject<{
        variable: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type VariableUpsertedEvent = z.infer<typeof VariableUpsertedEvent>;
export declare const VariableDeletedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.VARIABLE_DELETED>;
    data: z.ZodObject<{
        variable: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type VariableDeletedEvent = z.infer<typeof VariableDeletedEvent>;
export declare const VariableValueRevealedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.VARIABLE_VALUE_REVEALED>;
    data: z.ZodObject<{
        variable: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type VariableValueRevealedEvent = z.infer<typeof VariableValueRevealedEvent>;
export declare const FolderEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FOLDER_UPDATED>, z.ZodLiteral<ApplicationEventName.FOLDER_CREATED>, z.ZodLiteral<ApplicationEventName.FOLDER_DELETED>]>;
    data: z.ZodObject<{
        folder: z.ZodObject<{
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FolderEvent = z.infer<typeof FolderEvent>;
export declare const FolderCreatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FOLDER_CREATED>;
    data: z.ZodObject<{
        folder: z.ZodObject<{
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FolderCreatedEvent = z.infer<typeof FolderCreatedEvent>;
export declare const FolderUpdatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FOLDER_UPDATED>;
    data: z.ZodObject<{
        folder: z.ZodObject<{
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FolderUpdatedEvent = z.infer<typeof FolderUpdatedEvent>;
export declare const FolderDeletedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FOLDER_DELETED>;
    data: z.ZodObject<{
        folder: z.ZodObject<{
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FolderDeletedEvent = z.infer<typeof FolderDeletedEvent>;
export declare const FlowRunEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FLOW_RUN_STARTED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_FINISHED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_RESUMED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_RETRIED>]>;
    data: z.ZodObject<{
        flowRun: z.ZodObject<{
            id: z.ZodString;
            startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            duration: z.ZodOptional<z.ZodNumber>;
            triggeredBy: z.ZodOptional<z.ZodString>;
            environment: z.ZodString;
            flowId: z.ZodString;
            flowVersionId: z.ZodString;
            stepNameToTest: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            status: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowRunEvent = z.infer<typeof FlowRunEvent>;
export declare const FlowRunStartedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_RUN_STARTED>;
    data: z.ZodObject<{
        flowRun: z.ZodObject<{
            id: z.ZodString;
            startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            duration: z.ZodOptional<z.ZodNumber>;
            triggeredBy: z.ZodOptional<z.ZodString>;
            environment: z.ZodString;
            flowId: z.ZodString;
            flowVersionId: z.ZodString;
            stepNameToTest: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            status: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowRunStartedEvent = z.infer<typeof FlowRunStartedEvent>;
export declare const FlowRunFinishedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_RUN_FINISHED>;
    data: z.ZodObject<{
        flowRun: z.ZodObject<{
            id: z.ZodString;
            startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            duration: z.ZodOptional<z.ZodNumber>;
            triggeredBy: z.ZodOptional<z.ZodString>;
            environment: z.ZodString;
            flowId: z.ZodString;
            flowVersionId: z.ZodString;
            stepNameToTest: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            status: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowRunFinishedEvent = z.infer<typeof FlowRunFinishedEvent>;
export declare const FlowRunRetriedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_RUN_RETRIED>;
    data: z.ZodObject<{
        flowRun: z.ZodObject<{
            id: z.ZodString;
            startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            duration: z.ZodOptional<z.ZodNumber>;
            triggeredBy: z.ZodOptional<z.ZodString>;
            environment: z.ZodString;
            flowId: z.ZodString;
            flowVersionId: z.ZodString;
            stepNameToTest: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            status: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowRunRetriedEvent = z.infer<typeof FlowRunRetriedEvent>;
export declare const FlowCreatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_CREATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowCreatedEvent = z.infer<typeof FlowCreatedEvent>;
export declare const FlowDeletedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_DELETED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowDeletedEvent = z.infer<typeof FlowDeletedEvent>;
export declare const FlowUpdatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_UPDATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        request: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.MOVE_ACTION>;
            request: z.ZodObject<{
                name: z.ZodString;
                newParentStep: z.ZodString;
                stepLocationRelativeToNewParent: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").StepLocationRelativeToParent>>;
                branchIndex: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_STATUS>;
            request: z.ZodObject<{
                status: z.ZodEnum<typeof import("@activepieces/core-execution").FlowStatus>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.LOCK_AND_PUBLISH>;
            request: z.ZodObject<{
                status: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").FlowStatus>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.USE_AS_DRAFT>;
            request: z.ZodObject<{
                versionId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.LOCK_FLOW>;
            request: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.IMPORT_FLOW>;
            request: z.ZodObject<{
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
                        pieceVersion: zMini.ZodMiniString<string>;
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
                schemaVersion: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                notes: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    content: z.ZodString;
                    ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
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
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_NAME>;
            request: z.ZodObject<{
                displayName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_ACTION>;
            request: z.ZodObject<{
                names: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_ACTION>;
            request: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.CODE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodAny>;
                    errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                        continueOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        retryOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    sourceCode: z.ZodObject<{
                        packageJson: z.ZodString;
                        code: z.ZodString;
                    }, z.core.$strip>;
                    useDeno: z.ZodOptional<z.ZodBoolean>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.LOOP_ON_ITEMS>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    items: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.PIECE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    pieceName: z.ZodString;
                    pieceVersion: zMini.ZodMiniString<string>;
                    actionName: z.ZodOptional<z.ZodString>;
                    errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                        continueOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        retryOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                        type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                        schema: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.ROUTER>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        conditions: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            caseSensitive: z.ZodOptional<z.ZodBoolean>;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                        }, z.core.$strip>]>>>;
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                        branchName: z.ZodString;
                    }, z.core.$strip>, z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                        branchName: z.ZodString;
                    }, z.core.$strip>]>>;
                    executionType: z.ZodEnum<typeof import("@activepieces/core-execution").RouterExecutionType>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.AI_ROUTER>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    text: z.ZodString;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                        branchName: z.ZodString;
                        description: z.ZodString | z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                        branchName: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>;
                    question: z.ZodString;
                    matchMode: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").AiRouterMatchMode>>;
                    minConfidence: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
            }, z.core.$strip>>]>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_ACTION>;
            request: z.ZodObject<{
                parentStep: z.ZodString;
                stepLocationRelativeToParent: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").StepLocationRelativeToParent>>;
                branchIndex: z.ZodOptional<z.ZodNumber>;
                action: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.CODE>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        input: z.ZodRecord<z.ZodString, z.ZodAny>;
                        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                            continueOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            retryOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        sourceCode: z.ZodObject<{
                            packageJson: z.ZodString;
                            code: z.ZodString;
                        }, z.core.$strip>;
                        useDeno: z.ZodOptional<z.ZodBoolean>;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.LOOP_ON_ITEMS>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        items: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.PIECE>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                        pieceName: z.ZodString;
                        pieceVersion: zMini.ZodMiniString<string>;
                        actionName: z.ZodOptional<z.ZodString>;
                        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                            continueOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            retryOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                            type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                            schema: z.ZodOptional<z.ZodAny>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.ROUTER>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            conditions: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                caseSensitive: z.ZodOptional<z.ZodBoolean>;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                            }, z.core.$strip>]>>>;
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                            branchName: z.ZodString;
                        }, z.core.$strip>, z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                            branchName: z.ZodString;
                        }, z.core.$strip>]>>;
                        executionType: z.ZodEnum<typeof import("@activepieces/core-execution").RouterExecutionType>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.AI_ROUTER>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        text: z.ZodString;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                            branchName: z.ZodString;
                            description: z.ZodString | z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>, z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                            branchName: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>]>>;
                        question: z.ZodString;
                        matchMode: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").AiRouterMatchMode>>;
                        minConfidence: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>;
                }, z.core.$strip>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_TRIGGER>;
            request: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
                name: z.ZodString;
                displayName: z.ZodString;
                settings: z.ZodAny;
                valid: z.ZodBoolean;
                nextAction: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                nextAction: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodAny>;
                    pieceName: z.ZodString;
                    triggerName: z.ZodOptional<z.ZodString>;
                    pieceVersion: zMini.ZodMiniString<string>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                        type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                        schema: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>>]>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_FOLDER>;
            request: z.ZodObject<{
                folderId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DUPLICATE_ACTION>;
            request: z.ZodObject<{
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
                conditions: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    caseSensitive: z.ZodOptional<z.ZodBoolean>;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                }, z.core.$strip>]>>>>;
                description: z.ZodOptional<z.ZodString>;
                branchName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DUPLICATE_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.SET_SKIP_ACTION>;
            request: z.ZodObject<{
                names: z.ZodArray<z.ZodString>;
                skip: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_METADATA>;
            request: z.ZodObject<{
                metadata: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniRecord<zMini.ZodMiniString<string>, zMini.ZodMiniUnknown>>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.MOVE_BRANCH>;
            request: z.ZodObject<{
                sourceBranchIndex: z.ZodNumber;
                targetBranchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.SAVE_SAMPLE_DATA>;
            request: z.ZodObject<{
                stepName: z.ZodString;
                payload: z.ZodUnknown;
                type: z.ZodEnum<typeof import("@activepieces/core-execution").SampleDataFileType>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_MINUTES_SAVED>;
            request: z.ZodObject<{
                timeSavedPerRun: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodNumber>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_OWNER>;
            request: z.ZodObject<{
                ownerId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
                ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                content: z.ZodString;
                size: z.ZodObject<{
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                }, z.core.$strip>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>;
                color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
                content: z.ZodString;
                size: z.ZodObject<{
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                }, z.core.$strip>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>;
                color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_SAMPLE_DATA_INFO>;
            request: z.ZodObject<{
                stepName: z.ZodString;
                sampleDataSettings: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
            }, z.core.$strip>;
        }, z.core.$strip>], "type">;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowUpdatedEvent = z.infer<typeof FlowUpdatedEvent>;
export declare const FlowPiecesUpgradedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PIECES_UPGRADED>;
    data: z.ZodObject<{
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        steps: z.ZodArray<z.ZodObject<{
            stepName: z.ZodString;
            actionOrTriggerName: z.ZodString;
            decision: z.ZodEnum<{
                UPGRADED: "UPGRADED";
                KEPT: "KEPT";
            }>;
            prevVersion: z.ZodString;
            newVersion: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowPiecesUpgradedEvent = z.infer<typeof FlowPiecesUpgradedEvent>;
export declare const FlowPiecesRevertedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PIECES_REVERTED>;
    data: z.ZodObject<{
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        steps: z.ZodArray<z.ZodObject<{
            stepName: z.ZodString;
            actionOrTriggerName: z.ZodString;
            prevVersion: z.ZodString;
            newVersion: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowPiecesRevertedEvent = z.infer<typeof FlowPiecesRevertedEvent>;
export declare const FlowPublishedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PUBLISHED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowPublishedEvent = z.infer<typeof FlowPublishedEvent>;
export declare const FlowActivatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_ACTIVATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowActivatedEvent = z.infer<typeof FlowActivatedEvent>;
export declare const FlowDeactivatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_DEACTIVATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowDeactivatedEvent = z.infer<typeof FlowDeactivatedEvent>;
export declare const AuthenticationEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.USER_SIGNED_IN>, z.ZodLiteral<ApplicationEventName.USER_PASSWORD_RESET>, z.ZodLiteral<ApplicationEventName.USER_EMAIL_VERIFIED>]>;
    data: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type AuthenticationEvent = z.infer<typeof AuthenticationEvent>;
export declare const UserSignedInEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.USER_SIGNED_IN>;
    data: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type UserSignedInEvent = z.infer<typeof UserSignedInEvent>;
export declare const UserPasswordResetEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.USER_PASSWORD_RESET>;
    data: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type UserPasswordResetEvent = z.infer<typeof UserPasswordResetEvent>;
export declare const UserEmailVerifiedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.USER_EMAIL_VERIFIED>;
    data: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type UserEmailVerifiedEvent = z.infer<typeof UserEmailVerifiedEvent>;
export declare const SignUpEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.USER_SIGNED_UP>;
    data: z.ZodObject<{
        source: z.ZodUnion<readonly [z.ZodLiteral<"credentials">, z.ZodLiteral<"sso">, z.ZodLiteral<"managed">]>;
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type SignUpEvent = z.infer<typeof SignUpEvent>;
export declare const SigningKeyEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.SIGNING_KEY_CREATED>]>;
    data: z.ZodObject<{
        signingKey: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type SigningKeyEvent = z.infer<typeof SigningKeyEvent>;
export declare const AuditLogRetentionUpdatedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.AUDIT_LOG_RETENTION_UPDATED>;
    data: z.ZodObject<{
        previousRetentionDays: z.ZodNullable<z.ZodNumber>;
        retentionDays: z.ZodNullable<z.ZodNumber>;
        instanceLimitDays: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type AuditLogRetentionUpdatedEvent = z.infer<typeof AuditLogRetentionUpdatedEvent>;
export declare const ProjectRoleEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_CREATED>, z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_UPDATED>, z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_DELETED>]>;
    data: z.ZodObject<{
        projectRole: zMini.ZodMiniObject<{
            name: zMini.ZodMiniString<string>;
            permissions: zMini.ZodMiniArray<zMini.ZodMiniString<string>>;
            platformId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniString<string>>>;
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ProjectRoleEvent = z.infer<typeof ProjectRoleEvent>;
export declare const ProjectReleaseEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.PROJECT_RELEASE_CREATED>;
    data: z.ZodObject<{
        release: z.ZodObject<{
            name: z.ZodString;
            description: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            type: z.ZodString;
            projectId: z.ZodString;
            importedByUser: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                email: z.ZodString;
                firstName: z.ZodString;
                status: z.ZodString;
                externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                platformId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                platformRole: z.ZodString;
                lastName: z.ZodString;
                created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
                updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
                lastActiveDate: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                imageUrl: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ProjectReleaseEvent = z.infer<typeof ProjectReleaseEvent>;
export declare const ProjectReplacedEvent: z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.PROJECT_REPLACED>;
    data: z.ZodObject<{
        sourceActivepiecesVersion: z.ZodString;
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
        failedCount: z.ZodNumber;
        outcome: z.ZodEnum<{
            SUCCESS: "SUCCESS";
            PARTIAL_FAILURE: "PARTIAL_FAILURE";
        }>;
        durationMs: z.ZodNumber;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type ProjectReplacedEvent = z.infer<typeof ProjectReplacedEvent>;
export declare const FlowApprovalEvent: z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_REQUESTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_GRANTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_REJECTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_WITHDRAWN>]>;
    data: z.ZodObject<{
        approvalRequestId: z.ZodString;
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        flowDisplayName: z.ZodOptional<z.ZodString>;
        rejectionReason: z.ZodOptional<zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowApprovalEvent = z.infer<typeof FlowApprovalEvent>;
export declare const ApplicationEvent: z.ZodUnion<readonly [z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.AGENT_CREATED>, z.ZodLiteral<ApplicationEventName.AGENT_UPDATED>, z.ZodLiteral<ApplicationEventName.AGENT_DELETED>, z.ZodLiteral<ApplicationEventName.AGENT_PUBLISHED>, z.ZodLiteral<ApplicationEventName.AGENT_UNPUBLISHED>]>;
    data: z.ZodObject<{
        agent: z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodString;
            publishedDigest: z.ZodOptional<z.ZodString>;
            publishedToolNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.AGENT_ACTION_EXECUTED>;
    data: z.ZodObject<{
        source: z.ZodEnum<typeof AgentRunSource>;
        conversation: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            source: z.ZodEnum<typeof AgentRunSource>;
        }, z.core.$strip>>;
        agent: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        flow: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
        }, z.core.$strip>>;
        action: z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<AgentActionKind.PIECE>;
            pieceName: z.ZodString;
            pieceDisplayName: z.ZodString;
            actionName: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<AgentActionKind.FLOW>;
            flowId: z.ZodString;
            displayName: z.ZodString;
        }, z.core.$strip>], "kind">;
        outcome: z.ZodOptional<z.ZodEnum<typeof AgentActionOutcome>>;
        connection: z.ZodOptional<z.ZodObject<{
            externalId: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.CONNECTION_DELETED>, z.ZodLiteral<ApplicationEventName.CONNECTION_UPSERTED>]>;
    data: z.ZodObject<{
        connection: z.ZodObject<{
            displayName: z.ZodString;
            externalId: z.ZodString;
            pieceName: z.ZodString;
            status: z.ZodString;
            type: z.ZodString;
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.VARIABLE_UPSERTED>, z.ZodLiteral<ApplicationEventName.VARIABLE_DELETED>, z.ZodLiteral<ApplicationEventName.VARIABLE_VALUE_REVEALED>]>;
    data: z.ZodObject<{
        variable: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_CREATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_DELETED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_UPDATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        request: z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.MOVE_ACTION>;
            request: z.ZodObject<{
                name: z.ZodString;
                newParentStep: z.ZodString;
                stepLocationRelativeToNewParent: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").StepLocationRelativeToParent>>;
                branchIndex: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_STATUS>;
            request: z.ZodObject<{
                status: z.ZodEnum<typeof import("@activepieces/core-execution").FlowStatus>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.LOCK_AND_PUBLISH>;
            request: z.ZodObject<{
                status: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").FlowStatus>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.USE_AS_DRAFT>;
            request: z.ZodObject<{
                versionId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.LOCK_FLOW>;
            request: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.IMPORT_FLOW>;
            request: z.ZodObject<{
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
                        pieceVersion: zMini.ZodMiniString<string>;
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
                schemaVersion: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                notes: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    content: z.ZodString;
                    ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
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
                }, z.core.$strip>>>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_NAME>;
            request: z.ZodObject<{
                displayName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_ACTION>;
            request: z.ZodObject<{
                names: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_ACTION>;
            request: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.CODE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodAny>;
                    errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                        continueOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        retryOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    sourceCode: z.ZodObject<{
                        packageJson: z.ZodString;
                        code: z.ZodString;
                    }, z.core.$strip>;
                    useDeno: z.ZodOptional<z.ZodBoolean>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.LOOP_ON_ITEMS>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    items: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.PIECE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                    pieceName: z.ZodString;
                    pieceVersion: zMini.ZodMiniString<string>;
                    actionName: z.ZodOptional<z.ZodString>;
                    errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                        continueOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        retryOnFailure: z.ZodOptional<z.ZodObject<{
                            value: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                        type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                        schema: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.ROUTER>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        conditions: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            caseSensitive: z.ZodOptional<z.ZodBoolean>;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            secondValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                        }, z.core.$strip>, z.ZodObject<{
                            firstValue: z.ZodString;
                            operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                        }, z.core.$strip>]>>>;
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                        branchName: z.ZodString;
                    }, z.core.$strip>, z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                        branchName: z.ZodString;
                    }, z.core.$strip>]>>;
                    executionType: z.ZodEnum<typeof import("@activepieces/core-execution").RouterExecutionType>;
                }, z.core.$strip>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.AI_ROUTER>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                skip: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    text: z.ZodString;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                        branchName: z.ZodString;
                        description: z.ZodString | z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>, z.ZodObject<{
                        branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                        branchName: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>]>>;
                    question: z.ZodString;
                    matchMode: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").AiRouterMatchMode>>;
                    minConfidence: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
            }, z.core.$strip>>]>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_ACTION>;
            request: z.ZodObject<{
                parentStep: z.ZodString;
                stepLocationRelativeToParent: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").StepLocationRelativeToParent>>;
                branchIndex: z.ZodOptional<z.ZodNumber>;
                action: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.CODE>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        input: z.ZodRecord<z.ZodString, z.ZodAny>;
                        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                            continueOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            retryOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        sourceCode: z.ZodObject<{
                            packageJson: z.ZodString;
                            code: z.ZodString;
                        }, z.core.$strip>;
                        useDeno: z.ZodOptional<z.ZodBoolean>;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.LOOP_ON_ITEMS>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        items: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.PIECE>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
                        pieceName: z.ZodString;
                        pieceVersion: zMini.ZodMiniString<string>;
                        actionName: z.ZodOptional<z.ZodString>;
                        errorHandlingOptions: z.ZodOptional<z.ZodObject<{
                            continueOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            retryOnFailure: z.ZodOptional<z.ZodObject<{
                                value: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                            type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                            schema: z.ZodOptional<z.ZodAny>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.ROUTER>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            conditions: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                caseSensitive: z.ZodOptional<z.ZodBoolean>;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                secondValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                            }, z.core.$strip>, z.ZodObject<{
                                firstValue: z.ZodString;
                                operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                            }, z.core.$strip>]>>>;
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                            branchName: z.ZodString;
                        }, z.core.$strip>, z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                            branchName: z.ZodString;
                        }, z.core.$strip>]>>;
                        executionType: z.ZodEnum<typeof import("@activepieces/core-execution").RouterExecutionType>;
                    }, z.core.$strip>;
                }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
                    type: z.ZodLiteral<import("@activepieces/core-execution").FlowActionType.AI_ROUTER>;
                    name: z.ZodString;
                    displayName: z.ZodString;
                    valid: z.ZodBoolean;
                    skip: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>, z.ZodObject<{
                    settings: z.ZodObject<{
                        text: z.ZodString;
                        customLogoUrl: z.ZodOptional<z.ZodString>;
                        branches: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.CONDITION>;
                            branchName: z.ZodString;
                            description: z.ZodString | z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>, z.ZodObject<{
                            branchType: z.ZodLiteral<import("@activepieces/core-execution").BranchExecutionType.FALLBACK>;
                            branchName: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>]>>;
                        question: z.ZodString;
                        matchMode: z.ZodOptional<z.ZodEnum<typeof import("@activepieces/core-execution").AiRouterMatchMode>>;
                        minConfidence: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>;
                }, z.core.$strip>>]>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_TRIGGER>;
            request: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.EMPTY>;
                name: z.ZodString;
                displayName: z.ZodString;
                settings: z.ZodAny;
                valid: z.ZodBoolean;
                nextAction: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>, z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<import("@activepieces/core-execution").FlowTriggerType.PIECE>;
                name: z.ZodString;
                displayName: z.ZodString;
                valid: z.ZodBoolean;
                nextAction: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>, z.ZodObject<{
                settings: z.ZodObject<{
                    input: z.ZodRecord<z.ZodString, z.ZodAny>;
                    pieceName: z.ZodString;
                    triggerName: z.ZodOptional<z.ZodString>;
                    pieceVersion: zMini.ZodMiniString<string>;
                    customLogoUrl: z.ZodOptional<z.ZodString>;
                    propertySettings: z.ZodRecord<z.ZodString, z.ZodObject<{
                        type: z.ZodEnum<typeof import("@activepieces/core-execution").PropertyExecutionType>;
                        schema: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>>]>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.CHANGE_FOLDER>;
            request: z.ZodObject<{
                folderId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DUPLICATE_ACTION>;
            request: z.ZodObject<{
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
                conditions: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    caseSensitive: z.ZodOptional<z.ZodBoolean>;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_CONTAIN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_EXACTLY_MATCHES>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_STARTS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_START_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_ENDS_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.TEXT_DOES_NOT_END_WITH>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_CONTAINS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_DOES_NOT_CONTAIN>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_GREATER_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_LESS_THAN>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    secondValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_BEFORE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_EQUAL>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DATE_IS_AFTER>]>>;
                }, z.core.$strip>, z.ZodObject<{
                    firstValue: z.ZodString;
                    operator: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.EXISTS>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.DOES_NOT_EXIST>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_TRUE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.BOOLEAN_IS_FALSE>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_EMPTY>, z.ZodLiteral<import("@activepieces/core-execution").BranchOperator.LIST_IS_NOT_EMPTY>]>>;
                }, z.core.$strip>]>>>>;
                description: z.ZodOptional<z.ZodString>;
                branchName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DUPLICATE_BRANCH>;
            request: z.ZodObject<{
                branchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.SET_SKIP_ACTION>;
            request: z.ZodObject<{
                names: z.ZodArray<z.ZodString>;
                skip: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_METADATA>;
            request: z.ZodObject<{
                metadata: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniRecord<zMini.ZodMiniString<string>, zMini.ZodMiniUnknown>>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.MOVE_BRANCH>;
            request: z.ZodObject<{
                sourceBranchIndex: z.ZodNumber;
                targetBranchIndex: z.ZodNumber;
                stepName: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.SAVE_SAMPLE_DATA>;
            request: z.ZodObject<{
                stepName: z.ZodString;
                payload: z.ZodUnknown;
                type: z.ZodEnum<typeof import("@activepieces/core-execution").SampleDataFileType>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_MINUTES_SAVED>;
            request: z.ZodObject<{
                timeSavedPerRun: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodNumber>>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_OWNER>;
            request: z.ZodObject<{
                ownerId: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
                ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                content: z.ZodString;
                size: z.ZodObject<{
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                }, z.core.$strip>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>;
                color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.DELETE_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.ADD_NOTE>;
            request: z.ZodObject<{
                id: z.ZodString;
                content: z.ZodString;
                size: z.ZodObject<{
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                }, z.core.$strip>;
                position: z.ZodObject<{
                    x: z.ZodNumber;
                    y: z.ZodNumber;
                }, z.core.$strip>;
                color: z.ZodEnum<typeof import("@activepieces/core-execution").NoteColorVariant>;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<FlowOperationType.UPDATE_SAMPLE_DATA_INFO>;
            request: z.ZodObject<{
                stepName: z.ZodString;
                sampleDataSettings: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodObject<{
                    sampleDataFileId: z.ZodOptional<z.ZodString>;
                    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
            }, z.core.$strip>;
        }, z.core.$strip>], "type">;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PIECES_UPGRADED>;
    data: z.ZodObject<{
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        steps: z.ZodArray<z.ZodObject<{
            stepName: z.ZodString;
            actionOrTriggerName: z.ZodString;
            decision: z.ZodEnum<{
                UPGRADED: "UPGRADED";
                KEPT: "KEPT";
            }>;
            prevVersion: z.ZodString;
            newVersion: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PIECES_REVERTED>;
    data: z.ZodObject<{
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        steps: z.ZodArray<z.ZodObject<{
            stepName: z.ZodString;
            actionOrTriggerName: z.ZodString;
            prevVersion: z.ZodString;
            newVersion: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_PUBLISHED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_ACTIVATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.FLOW_DEACTIVATED>;
    data: z.ZodObject<{
        flow: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            externalId: z.ZodString;
        }, z.core.$strip>;
        flowVersion: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
            flowId: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
            externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FLOW_RUN_STARTED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_FINISHED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_RESUMED>, z.ZodLiteral<ApplicationEventName.FLOW_RUN_RETRIED>]>;
    data: z.ZodObject<{
        flowRun: z.ZodObject<{
            id: z.ZodString;
            startTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            finishTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            duration: z.ZodOptional<z.ZodNumber>;
            triggeredBy: z.ZodOptional<z.ZodString>;
            environment: z.ZodString;
            flowId: z.ZodString;
            flowVersionId: z.ZodString;
            stepNameToTest: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            flowDisplayName: z.ZodOptional<z.ZodString>;
            status: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.USER_SIGNED_IN>, z.ZodLiteral<ApplicationEventName.USER_PASSWORD_RESET>, z.ZodLiteral<ApplicationEventName.USER_EMAIL_VERIFIED>]>;
    data: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FOLDER_UPDATED>, z.ZodLiteral<ApplicationEventName.FOLDER_CREATED>, z.ZodLiteral<ApplicationEventName.FOLDER_DELETED>]>;
    data: z.ZodObject<{
        folder: z.ZodObject<{
            id: z.ZodString;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
        project: z.ZodOptional<z.ZodObject<{
            displayName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.USER_SIGNED_UP>;
    data: z.ZodObject<{
        source: z.ZodUnion<readonly [z.ZodLiteral<"credentials">, z.ZodLiteral<"sso">, z.ZodLiteral<"managed">]>;
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.SIGNING_KEY_CREATED>]>;
    data: z.ZodObject<{
        signingKey: z.ZodObject<{
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            displayName: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.AUDIT_LOG_RETENTION_UPDATED>;
    data: z.ZodObject<{
        previousRetentionDays: z.ZodNullable<z.ZodNumber>;
        retentionDays: z.ZodNullable<z.ZodNumber>;
        instanceLimitDays: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_CREATED>, z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_UPDATED>, z.ZodLiteral<ApplicationEventName.PROJECT_ROLE_DELETED>]>;
    data: z.ZodObject<{
        projectRole: zMini.ZodMiniObject<{
            name: zMini.ZodMiniString<string>;
            permissions: zMini.ZodMiniArray<zMini.ZodMiniString<string>>;
            platformId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniString<string>>>;
            id: zMini.ZodMiniString<string>;
            created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
            updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.PROJECT_RELEASE_CREATED>;
    data: z.ZodObject<{
        release: z.ZodObject<{
            name: z.ZodString;
            description: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            type: z.ZodString;
            projectId: z.ZodString;
            importedByUser: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                email: z.ZodString;
                firstName: z.ZodString;
                status: z.ZodString;
                externalId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                platformId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                platformRole: z.ZodString;
                lastName: z.ZodString;
                created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
                updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
                lastActiveDate: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
                imageUrl: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<ApplicationEventName.PROJECT_REPLACED>;
    data: z.ZodObject<{
        sourceActivepiecesVersion: z.ZodString;
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
        failedCount: z.ZodNumber;
        outcome: z.ZodEnum<{
            SUCCESS: "SUCCESS";
            PARTIAL_FAILURE: "PARTIAL_FAILURE";
        }>;
        durationMs: z.ZodNumber;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>, z.ZodObject<{
    action: z.ZodUnion<readonly [z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_REQUESTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_GRANTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_REJECTED>, z.ZodLiteral<ApplicationEventName.FLOW_APPROVAL_WITHDRAWN>]>;
    data: z.ZodObject<{
        approvalRequestId: z.ZodString;
        flowId: z.ZodString;
        flowVersionId: z.ZodString;
        flowDisplayName: z.ZodOptional<z.ZodString>;
        rejectionReason: z.ZodOptional<zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>>;
    }, z.core.$strip>;
    platformId: z.ZodString;
    projectId: z.ZodOptional<z.ZodString>;
    projectDisplayName: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>]>;
export type ApplicationEvent = z.infer<typeof ApplicationEvent>;
export declare function summarizeApplicationEvent(event: ApplicationEvent): string;
export declare const AUDIT_LOG_RETENTION_MIN_DAYS = 30;
export declare const AUDIT_LOG_RETENTION_MAX_DAYS = 3650;
export declare const AUDIT_LOG_RETENTION_BACKLOG_GRACE_DAYS = 2;
export type AgentActionRef = z.infer<typeof AgentActionEventData>['action'];
export * from './mock-event-builder';
