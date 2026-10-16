import { z } from 'zod';
export declare const McpActivityStatus: z.ZodEnum<{
    FAILED: "FAILED";
    SUCCEEDED: "SUCCEEDED";
}>;
export type McpActivityStatus = z.infer<typeof McpActivityStatus>;
export declare const McpActivity: z.ZodObject<{
    platformId: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
    userId: z.ZodString;
    clientKey: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        cursor: "cursor";
        claude: "claude";
        "claude-code": "claude-code";
        chatgpt: "chatgpt";
        vscode: "vscode";
        codex: "codex";
        "gemini-cli": "gemini-cli";
        opencode: "opencode";
        windsurf: "windsurf";
    }>>;
    toolName: z.ZodString;
    status: z.ZodEnum<{
        FAILED: "FAILED";
        SUCCEEDED: "SUCCEEDED";
    }>;
    pieceName: z.ZodNullable<z.ZodString>;
    actionName: z.ZodNullable<z.ZodString>;
    connectionExternalId: z.ZodNullable<z.ZodString>;
    errorMessage: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNumber;
    payloadFileId: z.ZodNullable<z.ZodString>;
    payloadTruncated: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type McpActivity = z.infer<typeof McpActivity>;
export declare const PopulatedMcpActivity: z.ZodObject<{
    id: z.ZodString;
    created: z.ZodString;
    status: z.ZodEnum<{
        FAILED: "FAILED";
        SUCCEEDED: "SUCCEEDED";
    }>;
    toolName: z.ZodString;
    clientKey: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        cursor: "cursor";
        claude: "claude";
        "claude-code": "claude-code";
        chatgpt: "chatgpt";
        vscode: "vscode";
        codex: "codex";
        "gemini-cli": "gemini-cli";
        opencode: "opencode";
        windsurf: "windsurf";
    }>>;
    member: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        firstName: z.ZodString;
        status: z.ZodEnum<typeof import("../../core/user/user").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformRole: z.ZodEnum<typeof import("../../core/user/user").PlatformRole>;
        lastName: z.ZodString;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>>;
    projectId: z.ZodNullable<z.ZodString>;
    projectName: z.ZodNullable<z.ZodString>;
    pieceName: z.ZodNullable<z.ZodString>;
    actionName: z.ZodNullable<z.ZodString>;
    connectionExternalId: z.ZodNullable<z.ZodString>;
    connectionDisplayName: z.ZodNullable<z.ZodString>;
    errorMessage: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNumber;
    hasPayload: z.ZodBoolean;
}, z.core.$strip>;
export type PopulatedMcpActivity = z.infer<typeof PopulatedMcpActivity>;
export declare const ListMcpActivityRequestQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    projectIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodUnion<readonly [import("zod/mini").ZodMiniString<string>, z.ZodLiteral<"platform-wide">]>>>>;
    memberIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>>>;
    clientKeys: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<{
        unknown: "unknown";
        cursor: "cursor";
        claude: "claude";
        "claude-code": "claude-code";
        chatgpt: "chatgpt";
        vscode: "vscode";
        codex: "codex";
        "gemini-cli": "gemini-cli";
        opencode: "opencode";
        windsurf: "windsurf";
    }>>>>;
    statuses: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<{
        FAILED: "FAILED";
        SUCCEEDED: "SUCCEEDED";
    }>>>>;
    createdAfter: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniISODateTime>;
    createdBefore: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniISODateTime>;
}, z.core.$strip>;
export type ListMcpActivityRequestQuery = z.infer<typeof ListMcpActivityRequestQuery>;
export declare const McpActivityPayload: z.ZodObject<{
    input: z.ZodUnknown;
    output: z.ZodUnknown;
    truncated: z.ZodBoolean;
}, z.core.$strip>;
export type McpActivityPayload = z.infer<typeof McpActivityPayload>;
export declare const MCP_ACTIVITY_PAYLOAD_MAX_BYTES: number;
