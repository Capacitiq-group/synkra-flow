import { ApId, Permission } from '@activepieces/core-utils';
import { z } from 'zod';
export type McpId = ApId;
export declare const MCP_TRIGGER_PIECE_NAME = "@activepieces/piece-mcp";
export declare enum McpServerType {
    PLATFORM = "PLATFORM",
    PROJECT = "PROJECT"
}
export declare const McpServer: z.ZodObject<{
    platformId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    projectId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    type: z.ZodEnum<{
        PLATFORM: McpServerType.PLATFORM;
        PROJECT: McpServerType.PROJECT;
    }>;
    token: import("zod/mini").ZodMiniString<string>;
    disabledTools: z.ZodNullable<z.ZodArray<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export declare const PopulatedMcpServer: z.ZodObject<{
    platformId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    projectId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    type: z.ZodEnum<{
        PLATFORM: McpServerType.PLATFORM;
        PROJECT: McpServerType.PROJECT;
    }>;
    token: import("zod/mini").ZodMiniString<string>;
    disabledTools: z.ZodNullable<z.ZodArray<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
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
}, z.core.$strip>;
export type PopulatedMcpServer = z.infer<typeof PopulatedMcpServer>;
export declare const ProjectMcpServerResponse: z.ZodObject<{
    platformId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    projectId: z.ZodNullable<import("zod/mini").ZodMiniString<string>>;
    type: z.ZodEnum<{
        PLATFORM: McpServerType.PLATFORM;
        PROJECT: McpServerType.PROJECT;
    }>;
    token: import("zod/mini").ZodMiniString<string>;
    disabledTools: z.ZodNullable<z.ZodArray<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
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
    platformDisabledTools: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ProjectMcpServerResponse = z.infer<typeof ProjectMcpServerResponse>;
export declare const McpReachResponse: z.ZodObject<{
    projectIds: z.ZodNullable<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
}, z.core.$strip>;
export type McpReachResponse = z.infer<typeof McpReachResponse>;
export type McpServer = z.infer<typeof McpServer>;
export type ProjectScopedMcpServer = McpServer & {
    projectId: string;
};
export type McpToolContext = {
    mcp: ProjectScopedMcpServer;
    userId?: string;
};
export declare const UpdateMcpServerRequest: z.ZodObject<{
    disabledTools: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type UpdateMcpServerRequest = z.infer<typeof UpdateMcpServerRequest>;
/** Tool definition for MCP: inputSchema is a raw Zod shape (same as MCP expects). */
export type McpToolDefinition = {
    title: string;
    description: string;
    inputSchema: Record<string, z.ZodTypeAny>;
    annotations?: {
        readOnlyHint?: boolean;
        destructiveHint?: boolean;
        idempotentHint?: boolean;
        openWorldHint?: boolean;
    };
    permission?: Permission;
    execute: (args: Record<string, unknown>) => Promise<McpToolResult>;
};
export type McpToolResult = {
    content: Array<{
        type: 'text';
        text: string;
    }>;
    structuredContent?: Record<string, unknown>;
    isError?: boolean;
};
