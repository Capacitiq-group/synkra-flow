import { z } from 'zod';
import * as zMini from 'zod/mini';
import { ApId } from '@activepieces/core-utils';
import { WebhookHandshakeConfiguration } from '@activepieces/core-piece-types';
type FlowId = ApId;
export declare enum FlowStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare enum FlowOperationStatus {
    NONE = "NONE",
    DELETING = "DELETING",
    /** @deprecated No longer set — status changes are now synchronous via distributed lock */
    ENABLING = "ENABLING",
    /** @deprecated No longer set — status changes are now synchronous via distributed lock */
    DISABLING = "DISABLING"
}
export declare const FlowCreatorType: {
    readonly MCP: "MCP";
    readonly AGENT: "AGENT";
};
export type FlowCreatorType = typeof FlowCreatorType[keyof typeof FlowCreatorType];
export declare const FlowCreator: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"MCP">;
    id: zMini.ZodMiniString<string>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"AGENT">;
    id: zMini.ZodMiniString<string>;
}, z.core.$strip>], "type">;
export type FlowCreator = z.infer<typeof FlowCreator>;
export declare const flowExecutionStateKey: (flowId: FlowId) => string;
export type FlowExecutionState = {
    exists: false;
} | {
    exists: true;
    handshakeConfiguration: WebhookHandshakeConfiguration | undefined;
    flow: Flow;
    platformId: string;
};
export declare const Flow: z.ZodObject<{
    projectId: z.ZodString;
    externalId: z.ZodString;
    ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    folderId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    status: z.ZodEnum<typeof FlowStatus>;
    publishedVersionId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    metadata: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniRecord<zMini.ZodMiniString<string>, zMini.ZodMiniUnknown>>>;
    operationStatus: z.ZodEnum<typeof FlowOperationStatus>;
    timeSavedPerRun: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodNumber>>;
    templateId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    createdBy: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"MCP">;
        id: zMini.ZodMiniString<string>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"AGENT">;
        id: zMini.ZodMiniString<string>;
    }, z.core.$strip>], "type">>>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
}, z.core.$strip>;
export type Flow = z.infer<typeof Flow>;
export declare const PopulatedFlow: z.ZodObject<{
    projectId: z.ZodString;
    externalId: z.ZodString;
    ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    folderId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    status: z.ZodEnum<typeof FlowStatus>;
    publishedVersionId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    metadata: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniRecord<zMini.ZodMiniString<string>, zMini.ZodMiniUnknown>>>;
    operationStatus: z.ZodEnum<typeof FlowOperationStatus>;
    timeSavedPerRun: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodNumber>>;
    templateId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
    createdBy: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"MCP">;
        id: zMini.ZodMiniString<string>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"AGENT">;
        id: zMini.ZodMiniString<string>;
    }, z.core.$strip>], "type">>>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    version: z.ZodObject<{
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
            type: z.ZodLiteral<import("@activepieces/shared").FlowTriggerType.EMPTY>;
            settings: z.ZodAny;
            name: z.ZodString;
            valid: z.ZodBoolean;
            displayName: z.ZodString;
            nextAction: z.ZodOptional<z.ZodAny>;
            lastUpdatedDate: z.ZodString;
        }, z.core.$strip>]>;
        updatedBy: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        valid: z.ZodBoolean;
        schemaVersion: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        agentIds: z.ZodArray<z.ZodString>;
        state: z.ZodEnum<typeof import("./flow-version").FlowVersionState>;
        connectionIds: z.ZodArray<z.ZodString>;
        backupFiles: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
        notes: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            content: z.ZodString;
            ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
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
        id: zMini.ZodMiniString<string>;
        created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    }, z.core.$strip>;
    triggerSource: zMini.ZodMiniOptional<zMini.ZodMiniObject<{
        schedule: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniDiscriminatedUnion<[zMini.ZodMiniObject<{
            type: zMini.ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.CRON_EXPRESSION>;
            cronExpression: zMini.ZodMiniString<string>;
            timezone: zMini.ZodMiniString<string>;
        }, z.core.$strip>, zMini.ZodMiniObject<{
            type: zMini.ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.INTERVAL>;
            intervalMs: zMini.ZodMiniNumberFormat;
        }, z.core.$strip>], "type">>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PopulatedFlow = z.infer<typeof PopulatedFlow>;
export declare const PopulatedTriggerSource: zMini.ZodMiniObject<{
    type: zMini.ZodMiniEnum<typeof import("@activepieces/core-piece-types").TriggerStrategy>;
    projectId: zMini.ZodMiniString<string>;
    flowId: zMini.ZodMiniString<string>;
    triggerName: zMini.ZodMiniString<string>;
    schedule: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniDiscriminatedUnion<[zMini.ZodMiniObject<{
        type: zMini.ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.CRON_EXPRESSION>;
        cronExpression: zMini.ZodMiniString<string>;
        timezone: zMini.ZodMiniString<string>;
    }, z.core.$strip>, zMini.ZodMiniObject<{
        type: zMini.ZodMiniLiteral<import("@activepieces/core-piece-types").TriggerSourceScheduleType.INTERVAL>;
        intervalMs: zMini.ZodMiniNumberFormat;
    }, z.core.$strip>], "type">>>;
    flowVersionId: zMini.ZodMiniString<string>;
    pieceName: zMini.ZodMiniString<string>;
    pieceVersion: zMini.ZodMiniString<string>;
    deleted: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniString<string>>>;
    simulate: zMini.ZodMiniBoolean<boolean>;
    id: zMini.ZodMiniString<string>;
    created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    flow: z.ZodObject<{
        projectId: z.ZodString;
        externalId: z.ZodString;
        ownerId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        folderId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        status: z.ZodEnum<typeof FlowStatus>;
        publishedVersionId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        metadata: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniRecord<zMini.ZodMiniString<string>, zMini.ZodMiniUnknown>>>;
        operationStatus: z.ZodEnum<typeof FlowOperationStatus>;
        timeSavedPerRun: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodNumber>>;
        templateId: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodString>>;
        createdBy: zMini.ZodMiniOptional<zMini.ZodMiniNullable<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"MCP">;
            id: zMini.ZodMiniString<string>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"AGENT">;
            id: zMini.ZodMiniString<string>;
        }, z.core.$strip>], "type">>>;
        id: zMini.ZodMiniString<string>;
        created: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
        updated: zMini.ZodMiniPipe<zMini.ZodMiniTransform<unknown, unknown>, zMini.ZodMiniString<string>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PopulatedTriggerSource = z.infer<typeof PopulatedTriggerSource>;
export {};
