import { z } from 'zod';
export declare const LATEST_FLOW_SCHEMA_VERSION = "28";
export declare enum FlowVersionState {
    LOCKED = "LOCKED",
    DRAFT = "DRAFT"
}
export declare const FlowVersion: z.ZodObject<{
    flowId: z.ZodString;
    displayName: z.ZodString;
    trigger: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<import("./triggers/trigger").FlowTriggerType.PIECE>;
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
        type: z.ZodLiteral<import("./triggers/trigger").FlowTriggerType.EMPTY>;
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
    state: z.ZodEnum<typeof FlowVersionState>;
    connectionIds: z.ZodArray<z.ZodString>;
    backupFiles: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodRecord<z.ZodString, z.ZodString>>>;
    notes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        content: z.ZodString;
        ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        color: z.ZodEnum<typeof import("./note").NoteColorVariant>;
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
export type FlowVersion = z.infer<typeof FlowVersion>;
export declare const FlowVersionMetadata: z.ZodObject<{
    flowId: z.ZodString;
    displayName: z.ZodString;
    valid: z.ZodBoolean;
    state: z.ZodEnum<typeof FlowVersionState>;
    updatedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    schemaVersion: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    updatedByUser: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniObject<{
        id: import("zod/mini").ZodMiniString<string>;
        email: import("zod/mini").ZodMiniString<string>;
        firstName: import("zod/mini").ZodMiniString<string>;
        status: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        platformRole: import("zod/mini").ZodMiniEnum<typeof import("@activepieces/core-piece-types").PlatformRole>;
        lastName: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    }, z.core.$strip>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type FlowVersionMetadata = z.infer<typeof FlowVersionMetadata>;
