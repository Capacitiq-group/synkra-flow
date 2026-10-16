import { AgentRunSource } from '@activepieces/core-execution';
import { z } from 'zod';
declare const CHAT_ALLOWED_MIME_TYPES: readonly ["image/png", "image/jpeg", "image/gif", "image/webp", "text/plain", "text/csv", "text/markdown", "application/json", "application/pdf"];
export declare enum PersistedAgentPartType {
    TEXT = "text",
    REASONING = "reasoning",
    TOOL_CALL = "tool-call",
    THINKING_STATUS = "thinking-status",
    BATCH_PROGRESS = "batch-progress",
    ACTION_RECEIPT = "action-receipt",
    SOURCE_URL = "source-url",
    SOURCE_DOCUMENT = "source-document",
    IMAGE = "image",
    FILE = "file",
    BUILD_PLAN = "build-plan"
}
export declare enum PersistedToolCallStatus {
    COMPLETED = "completed",
    ERROR = "error"
}
export declare enum PersistedAgentRole {
    USER = "user",
    ASSISTANT = "assistant"
}
declare const PersistedAgentPartSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.TEXT>;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.REASONING>;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.TOOL_CALL>;
    toolCallId: z.ZodString;
    toolName: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    output: z.ZodOptional<z.ZodUnknown>;
    status: z.ZodEnum<{
        completed: PersistedToolCallStatus.COMPLETED;
        error: PersistedToolCallStatus.ERROR;
    }>;
    errorText: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.THINKING_STATUS>;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.BATCH_PROGRESS>;
    data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.ACTION_RECEIPT>;
    toolCallId: z.ZodString;
    actionDisplayName: z.ZodString;
    pieceName: z.ZodString;
    connectionLabel: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        success: "success";
        failed: "failed";
    }>;
    output: z.ZodOptional<z.ZodUnknown>;
    errorMessage: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.BUILD_PLAN>;
    buildId: z.ZodString;
    data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.SOURCE_URL>;
    sourceId: z.ZodString;
    url: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.SOURCE_DOCUMENT>;
    sourceId: z.ZodString;
    mediaType: z.ZodString;
    title: z.ZodString;
    filename: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.IMAGE>;
    toolCallId: z.ZodString;
    fileId: z.ZodString;
    url: z.ZodString;
    mediaType: z.ZodString;
    prompt: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<PersistedAgentPartType.FILE>;
    toolCallId: z.ZodString;
    fileId: z.ZodString;
    url: z.ZodString;
    mediaType: z.ZodString;
    fileName: z.ZodString;
    byteSize: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodString;
}, z.core.$strip>], "type">;
export declare const AgentFeedbackReason: z.ZodEnum<{
    incorrect_or_incomplete: "incorrect_or_incomplete";
    not_what_i_asked_for: "not_what_i_asked_for";
    slow_or_buggy: "slow_or_buggy";
    style_or_tone: "style_or_tone";
    safety_or_security: "safety_or_security";
    other: "other";
}>;
export type AgentFeedbackReason = z.infer<typeof AgentFeedbackReason>;
export declare const AgentMessageFeedbackSchema: z.ZodObject<{
    rating: z.ZodEnum<{
        up: "up";
        down: "down";
    }>;
    reasons: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        incorrect_or_incomplete: "incorrect_or_incomplete";
        not_what_i_asked_for: "not_what_i_asked_for";
        slow_or_buggy: "slow_or_buggy";
        style_or_tone: "style_or_tone";
        safety_or_security: "safety_or_security";
        other: "other";
    }>>>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PersistedAgentMessageSchema: z.ZodObject<{
    role: z.ZodEnum<{
        user: PersistedAgentRole.USER;
        assistant: PersistedAgentRole.ASSISTANT;
    }>;
    parts: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.TEXT>;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.REASONING>;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.TOOL_CALL>;
        toolCallId: z.ZodString;
        toolName: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        output: z.ZodOptional<z.ZodUnknown>;
        status: z.ZodEnum<{
            completed: PersistedToolCallStatus.COMPLETED;
            error: PersistedToolCallStatus.ERROR;
        }>;
        errorText: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.THINKING_STATUS>;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.BATCH_PROGRESS>;
        data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.ACTION_RECEIPT>;
        toolCallId: z.ZodString;
        actionDisplayName: z.ZodString;
        pieceName: z.ZodString;
        connectionLabel: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
            success: "success";
            failed: "failed";
        }>;
        output: z.ZodOptional<z.ZodUnknown>;
        errorMessage: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.BUILD_PLAN>;
        buildId: z.ZodString;
        data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.SOURCE_URL>;
        sourceId: z.ZodString;
        url: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.SOURCE_DOCUMENT>;
        sourceId: z.ZodString;
        mediaType: z.ZodString;
        title: z.ZodString;
        filename: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.IMAGE>;
        toolCallId: z.ZodString;
        fileId: z.ZodString;
        url: z.ZodString;
        mediaType: z.ZodString;
        prompt: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<PersistedAgentPartType.FILE>;
        toolCallId: z.ZodString;
        fileId: z.ZodString;
        url: z.ZodString;
        mediaType: z.ZodString;
        fileName: z.ZodString;
        byteSize: z.ZodNumber;
        title: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodString;
    }, z.core.$strip>], "type">>;
    thinkingDurationMs: z.ZodOptional<z.ZodNumber>;
    feedback: z.ZodOptional<z.ZodObject<{
        rating: z.ZodEnum<{
            up: "up";
            down: "down";
        }>;
        reasons: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            incorrect_or_incomplete: "incorrect_or_incomplete";
            not_what_i_asked_for: "not_what_i_asked_for";
            slow_or_buggy: "slow_or_buggy";
            style_or_tone: "style_or_tone";
            safety_or_security: "safety_or_security";
            other: "other";
        }>>>;
        comment: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    tainted: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PersistedAgentPart = z.infer<typeof PersistedAgentPartSchema>;
export type PersistedAgentMessage = z.infer<typeof PersistedAgentMessageSchema>;
export type AgentMessageFeedback = z.infer<typeof AgentMessageFeedbackSchema>;
export declare enum AgentConversationStatus {
    IDLE = "IDLE",
    STREAMING = "STREAMING",
    ERROR = "ERROR"
}
export { AgentRunSource };
export declare const AgentRunFlowReference: z.ZodObject<{
    flowRunId: z.ZodString;
    flowId: z.ZodString;
    displayName: z.ZodString;
}, z.core.$strip>;
export declare const AgentConversation: z.ZodObject<{
    platformId: z.ZodString;
    projectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    userId: z.ZodString;
    agentId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    flowRunId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    aiCredits: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    source: z.ZodEnum<typeof AgentRunSource>;
    title: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    status: z.ZodDefault<z.ZodEnum<typeof AgentConversationStatus>>;
    activeRunId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    messages: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    uiMessages: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<{
            user: PersistedAgentRole.USER;
            assistant: PersistedAgentRole.ASSISTANT;
        }>;
        parts: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.TEXT>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.REASONING>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.TOOL_CALL>;
            toolCallId: z.ZodString;
            toolName: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            output: z.ZodOptional<z.ZodUnknown>;
            status: z.ZodEnum<{
                completed: PersistedToolCallStatus.COMPLETED;
                error: PersistedToolCallStatus.ERROR;
            }>;
            errorText: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.THINKING_STATUS>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.BATCH_PROGRESS>;
            data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.ACTION_RECEIPT>;
            toolCallId: z.ZodString;
            actionDisplayName: z.ZodString;
            pieceName: z.ZodString;
            connectionLabel: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<{
                success: "success";
                failed: "failed";
            }>;
            output: z.ZodOptional<z.ZodUnknown>;
            errorMessage: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.BUILD_PLAN>;
            buildId: z.ZodString;
            data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.SOURCE_URL>;
            sourceId: z.ZodString;
            url: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.SOURCE_DOCUMENT>;
            sourceId: z.ZodString;
            mediaType: z.ZodString;
            title: z.ZodString;
            filename: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.IMAGE>;
            toolCallId: z.ZodString;
            fileId: z.ZodString;
            url: z.ZodString;
            mediaType: z.ZodString;
            prompt: z.ZodOptional<z.ZodString>;
            model: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.FILE>;
            toolCallId: z.ZodString;
            fileId: z.ZodString;
            url: z.ZodString;
            mediaType: z.ZodString;
            fileName: z.ZodString;
            byteSize: z.ZodNumber;
            title: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>], "type">>;
        thinkingDurationMs: z.ZodOptional<z.ZodNumber>;
        feedback: z.ZodOptional<z.ZodObject<{
            rating: z.ZodEnum<{
                up: "up";
                down: "down";
            }>;
            reasons: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                incorrect_or_incomplete: "incorrect_or_incomplete";
                not_what_i_asked_for: "not_what_i_asked_for";
                slow_or_buggy: "slow_or_buggy";
                style_or_tone: "style_or_tone";
                safety_or_security: "safety_or_security";
                other: "other";
            }>>>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        tainted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    summary: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    summarizedUpToIndex: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export declare const AgentRunListItem: z.ZodObject<{
    platformId: z.ZodString;
    projectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    userId: z.ZodString;
    agentId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    flowRunId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    aiCredits: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    source: z.ZodEnum<typeof AgentRunSource>;
    title: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    modelName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    modelTierId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    status: z.ZodDefault<z.ZodEnum<typeof AgentConversationStatus>>;
    activeRunId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    messages: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    uiMessages: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<{
            user: PersistedAgentRole.USER;
            assistant: PersistedAgentRole.ASSISTANT;
        }>;
        parts: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.TEXT>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.REASONING>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.TOOL_CALL>;
            toolCallId: z.ZodString;
            toolName: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            input: z.ZodRecord<z.ZodString, z.ZodUnknown>;
            output: z.ZodOptional<z.ZodUnknown>;
            status: z.ZodEnum<{
                completed: PersistedToolCallStatus.COMPLETED;
                error: PersistedToolCallStatus.ERROR;
            }>;
            errorText: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.THINKING_STATUS>;
            text: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.BATCH_PROGRESS>;
            data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.ACTION_RECEIPT>;
            toolCallId: z.ZodString;
            actionDisplayName: z.ZodString;
            pieceName: z.ZodString;
            connectionLabel: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<{
                success: "success";
                failed: "failed";
            }>;
            output: z.ZodOptional<z.ZodUnknown>;
            errorMessage: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.BUILD_PLAN>;
            buildId: z.ZodString;
            data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.SOURCE_URL>;
            sourceId: z.ZodString;
            url: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.SOURCE_DOCUMENT>;
            sourceId: z.ZodString;
            mediaType: z.ZodString;
            title: z.ZodString;
            filename: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.IMAGE>;
            toolCallId: z.ZodString;
            fileId: z.ZodString;
            url: z.ZodString;
            mediaType: z.ZodString;
            prompt: z.ZodOptional<z.ZodString>;
            model: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<PersistedAgentPartType.FILE>;
            toolCallId: z.ZodString;
            fileId: z.ZodString;
            url: z.ZodString;
            mediaType: z.ZodString;
            fileName: z.ZodString;
            byteSize: z.ZodNumber;
            title: z.ZodOptional<z.ZodString>;
            timestamp: z.ZodString;
        }, z.core.$strip>], "type">>;
        thinkingDurationMs: z.ZodOptional<z.ZodNumber>;
        feedback: z.ZodOptional<z.ZodObject<{
            rating: z.ZodEnum<{
                up: "up";
                down: "down";
            }>;
            reasons: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                incorrect_or_incomplete: "incorrect_or_incomplete";
                not_what_i_asked_for: "not_what_i_asked_for";
                slow_or_buggy: "slow_or_buggy";
                style_or_tone: "style_or_tone";
                safety_or_security: "safety_or_security";
                other: "other";
            }>>>;
            comment: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        tainted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>>;
    summary: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    summarizedUpToIndex: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    flow: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        flowRunId: z.ZodString;
        flowId: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type AgentConversation = z.infer<typeof AgentConversation>;
export type AgentRunFlowReference = z.infer<typeof AgentRunFlowReference>;
export type AgentRunListItem = z.infer<typeof AgentRunListItem>;
export declare const CreateAgentConversationRequest: z.ZodObject<{
    title: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    modelName: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    modelTierId: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>>;
    agentId: z.ZodOptional<z.ZodString>;
    builder: z.ZodOptional<z.ZodBoolean>;
    projectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAgentConversationRequest = z.infer<typeof CreateAgentConversationRequest>;
export declare const UpdateAgentConversationRequest: z.ZodObject<{
    title: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    modelName: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    modelTierId: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>>;
}, z.core.$strip>;
export type UpdateAgentConversationRequest = z.infer<typeof UpdateAgentConversationRequest>;
export declare const UserMemory: z.ZodObject<{
    platformId: z.ZodString;
    userId: z.ZodString;
    instructions: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    memories: z.ZodDefault<z.ZodArray<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type UserMemory = z.infer<typeof UserMemory>;
export declare const GetAgentMemoryResponse: z.ZodObject<{
    instructions: z.ZodNullable<z.ZodString>;
    memories: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetAgentMemoryResponse = z.infer<typeof GetAgentMemoryResponse>;
export declare const UpdateAgentMemoryRequest: z.ZodObject<{
    instructions: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    memories: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type UpdateAgentMemoryRequest = z.infer<typeof UpdateAgentMemoryRequest>;
export declare const ImportAgentMemoryRequest: z.ZodObject<{
    text: z.ZodString;
}, z.core.$strip>;
export type ImportAgentMemoryRequest = z.infer<typeof ImportAgentMemoryRequest>;
export declare const InstructAgentMemoryRequest: z.ZodObject<{
    instruction: z.ZodString;
}, z.core.$strip>;
export type InstructAgentMemoryRequest = z.infer<typeof InstructAgentMemoryRequest>;
export declare const AgentMessageSource: z.ZodEnum<{
    onboarding: "onboarding";
}>;
export type AgentMessageSource = z.infer<typeof AgentMessageSource>;
export declare const SendAgentMessageRequest: z.ZodObject<{
    content: z.ZodString;
    runId: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        mimeType: z.ZodEnum<{
            "application/json": "application/json";
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
            "image/gif": "image/gif";
            "image/webp": "image/webp";
            "text/plain": "text/plain";
            "text/csv": "text/csv";
            "text/markdown": "text/markdown";
            "application/pdf": "application/pdf";
        }>;
        data: z.ZodString;
    }, z.core.$strip>>>;
    messageSource: z.ZodOptional<z.ZodEnum<{
        onboarding: "onboarding";
    }>>;
}, z.core.$strip>;
export type SendAgentMessageRequest = z.infer<typeof SendAgentMessageRequest>;
export declare const SetAgentMessageFeedbackRequest: z.ZodObject<{
    rating: z.ZodNullable<z.ZodEnum<{
        up: "up";
        down: "down";
    }>>;
    reasons: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        incorrect_or_incomplete: "incorrect_or_incomplete";
        not_what_i_asked_for: "not_what_i_asked_for";
        slow_or_buggy: "slow_or_buggy";
        style_or_tone: "style_or_tone";
        safety_or_security: "safety_or_security";
        other: "other";
    }>>>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SetAgentMessageFeedbackRequest = z.infer<typeof SetAgentMessageFeedbackRequest>;
export declare const SimulateAgentRequest: z.ZodObject<{
    platformId: z.ZodString;
    userMessage: z.ZodOptional<z.ZodString>;
    userMessages: z.ZodOptional<z.ZodArray<z.ZodString>>;
    promptOverride: z.ZodOptional<z.ZodObject<{
        system: z.ZodOptional<z.ZodString>;
        projectSelected: z.ZodOptional<z.ZodString>;
        noProject: z.ZodOptional<z.ZodString>;
        guides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SimulateAgentRequest = z.infer<typeof SimulateAgentRequest>;
export type AgentHistoryToolCall = {
    toolCallId: string;
    title: string;
    status: string;
    input?: Record<string, unknown>;
    output?: string;
};
export type AgentHistoryMessage = {
    role: 'user' | 'assistant';
    content: string;
    toolCalls?: AgentHistoryToolCall[];
    thoughts?: string;
};
export type AgentToolOutputs = {
    ap_set_session_title: {
        success: boolean;
    };
    ap_select_project: {
        success: boolean;
        message?: string;
        error?: string;
    };
    ap_list_across_projects: {
        content: {
            type: string;
            text: string;
        }[];
    };
    ap_execute_action: {
        noAuthRequired: true;
        piece: string;
    } | {
        needsConnection: true;
        piece: string;
        displayName: string;
    } | {
        pickConnection: true;
        piece: string;
        displayName: string;
        connections: ConnectionOption[];
    } | {
        success: boolean;
        error?: string;
        output?: unknown;
    };
    ap_show_connection_required: {
        displayed: boolean;
    };
    ap_show_connection_picker: {
        displayed: boolean;
    };
    ap_show_project_picker: {
        displayed: boolean;
    };
    ap_show_questions: {
        displayed: boolean;
    };
    ap_show_quick_replies: {
        displayed: boolean;
    };
    ap_show_showcase: {
        displayed: boolean;
    };
    ap_update_thinking_status: {
        success: boolean;
    };
};
export type ConnectionOption = {
    label: string;
    project: string;
    externalId: string;
    projectId: string;
    status: string;
};
export type AgentToolName = keyof AgentToolOutputs;
declare function unwrapToolOutput(output: unknown): unknown;
export declare const agentPersistenceUtils: {
    unwrapToolOutput: typeof unwrapToolOutput;
};
export type BatchItemResult = {
    index: number;
    success: boolean;
    output?: unknown;
    error?: string;
};
export type BatchProgressData = {
    label: string;
    total: number;
    completed: number;
    succeeded: number;
    failed: number;
    done: boolean;
    results: BatchItemResult[];
};
export type AgentAllowedMimeType = typeof CHAT_ALLOWED_MIME_TYPES[number];
export { CHAT_ALLOWED_MIME_TYPES };
export * from './agent';
export { agentToolClassification } from './tool-classification';
export { CHAT_CREDITS_PER_TOOL_CALL, chatBilling, type ChatToolCall, type TurnCredits } from './chat-billing';
export { AGENT_SELF_EDIT_TOOLS, AGENT_SURFACE_TOOLS, agentToolPhases, type AgentPhase } from './tool-phases';
export { AGENT_SKILLS, agentToolSkills, LAZY_TOOL_NAME, GET_TOOL_SCHEMA_NAME, LOAD_SKILL_NAME, MAX_CORE_TOOLS, SKILLS_NOTE_HEADING, type AgentSkill, type SkillSurface } from './tool-skills';
export { chatVisibility, type ResolveChatEnabledParams } from './chat-visibility';
export * from './chat-personalization';
