"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatVisibility = exports.SKILLS_NOTE_HEADING = exports.MAX_CORE_TOOLS = exports.LOAD_SKILL_NAME = exports.GET_TOOL_SCHEMA_NAME = exports.LAZY_TOOL_NAME = exports.agentToolSkills = exports.AGENT_SKILLS = exports.agentToolPhases = exports.AGENT_SURFACE_TOOLS = exports.AGENT_SELF_EDIT_TOOLS = exports.chatBilling = exports.CHAT_CREDITS_PER_TOOL_CALL = exports.agentToolClassification = exports.CHAT_ALLOWED_MIME_TYPES = exports.agentPersistenceUtils = exports.SimulateAgentRequest = exports.SetAgentMessageFeedbackRequest = exports.SendAgentMessageRequest = exports.AgentMessageSource = exports.InstructAgentMemoryRequest = exports.ImportAgentMemoryRequest = exports.UpdateAgentMemoryRequest = exports.GetAgentMemoryResponse = exports.UserMemory = exports.UpdateAgentConversationRequest = exports.CreateAgentConversationRequest = exports.AgentRunListItem = exports.AgentConversation = exports.AgentRunFlowReference = exports.AgentRunSource = exports.AgentConversationStatus = exports.PersistedAgentMessageSchema = exports.AgentMessageFeedbackSchema = exports.AgentFeedbackReason = exports.PersistedAgentRole = exports.PersistedToolCallStatus = exports.PersistedAgentPartType = void 0;
const tslib_1 = require("tslib");
const core_execution_1 = require("@activepieces/core-execution");
Object.defineProperty(exports, "AgentRunSource", { enumerable: true, get: function () { return core_execution_1.AgentRunSource; } });
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
const agent_1 = require("./agent");
const MAX_FILE_BINARY_SIZE = 10 * 1024 * 1024;
const MAX_FILE_BASE64_CHARS = Math.ceil(MAX_FILE_BINARY_SIZE * 4 / 3);
const CHAT_ALLOWED_MIME_TYPES = [
    'image/png', 'image/jpeg', 'image/gif', 'image/webp',
    'text/plain', 'text/csv', 'text/markdown',
    'application/json',
    'application/pdf',
];
exports.CHAT_ALLOWED_MIME_TYPES = CHAT_ALLOWED_MIME_TYPES;
const SAFE_FILENAME = /^[^\x00-\x1f\r\n]*$/;
const AgentMessageFile = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255).refine((v) => SAFE_FILENAME.test(v), { message: form_errors_1.formErrors.invalidFileName }),
    mimeType: zod_1.z.enum(CHAT_ALLOWED_MIME_TYPES),
    data: zod_1.z.string().max(MAX_FILE_BASE64_CHARS),
});
var PersistedAgentPartType;
(function (PersistedAgentPartType) {
    PersistedAgentPartType["TEXT"] = "text";
    PersistedAgentPartType["REASONING"] = "reasoning";
    PersistedAgentPartType["TOOL_CALL"] = "tool-call";
    PersistedAgentPartType["THINKING_STATUS"] = "thinking-status";
    PersistedAgentPartType["BATCH_PROGRESS"] = "batch-progress";
    PersistedAgentPartType["ACTION_RECEIPT"] = "action-receipt";
    PersistedAgentPartType["SOURCE_URL"] = "source-url";
    PersistedAgentPartType["SOURCE_DOCUMENT"] = "source-document";
    PersistedAgentPartType["IMAGE"] = "image";
    PersistedAgentPartType["FILE"] = "file";
    PersistedAgentPartType["BUILD_PLAN"] = "build-plan";
})(PersistedAgentPartType || (exports.PersistedAgentPartType = PersistedAgentPartType = {}));
var PersistedToolCallStatus;
(function (PersistedToolCallStatus) {
    PersistedToolCallStatus["COMPLETED"] = "completed";
    PersistedToolCallStatus["ERROR"] = "error";
})(PersistedToolCallStatus || (exports.PersistedToolCallStatus = PersistedToolCallStatus = {}));
var PersistedAgentRole;
(function (PersistedAgentRole) {
    PersistedAgentRole["USER"] = "user";
    PersistedAgentRole["ASSISTANT"] = "assistant";
})(PersistedAgentRole || (exports.PersistedAgentRole = PersistedAgentRole = {}));
const PersistedTextPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.TEXT),
    text: zod_1.z.string(),
});
const PersistedReasoningPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.REASONING),
    text: zod_1.z.string(),
});
const PersistedToolCallPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.TOOL_CALL),
    toolCallId: zod_1.z.string(),
    toolName: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    input: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    output: zod_1.z.unknown().optional(),
    status: zod_1.z.enum([PersistedToolCallStatus.COMPLETED, PersistedToolCallStatus.ERROR]),
    errorText: zod_1.z.string().optional(),
});
const PersistedThinkingStatusPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.THINKING_STATUS),
    text: zod_1.z.string(),
});
const PersistedBatchProgressPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.BATCH_PROGRESS),
    data: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
});
const PersistedActionReceiptPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.ACTION_RECEIPT),
    toolCallId: zod_1.z.string(),
    actionDisplayName: zod_1.z.string(),
    pieceName: zod_1.z.string(),
    connectionLabel: zod_1.z.string().optional(),
    status: zod_1.z.enum(['success', 'failed']),
    output: zod_1.z.unknown().optional(),
    errorMessage: zod_1.z.string().optional(),
    timestamp: zod_1.z.string(),
});
const PersistedBuildPlanPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.BUILD_PLAN),
    buildId: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
});
const PersistedSourceUrlPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.SOURCE_URL),
    sourceId: zod_1.z.string(),
    url: zod_1.z.string(),
    title: zod_1.z.string().optional(),
});
const PersistedSourceDocumentPartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.SOURCE_DOCUMENT),
    sourceId: zod_1.z.string(),
    mediaType: zod_1.z.string(),
    title: zod_1.z.string(),
    filename: zod_1.z.string().optional(),
});
const PersistedImagePartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.IMAGE),
    toolCallId: zod_1.z.string(),
    fileId: zod_1.z.string(),
    url: zod_1.z.string(),
    mediaType: zod_1.z.string(),
    prompt: zod_1.z.string().optional(),
    model: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    timestamp: zod_1.z.string(),
});
const PersistedFilePartSchema = zod_1.z.object({
    type: zod_1.z.literal(PersistedAgentPartType.FILE),
    toolCallId: zod_1.z.string(),
    fileId: zod_1.z.string(),
    url: zod_1.z.string(),
    mediaType: zod_1.z.string(),
    fileName: zod_1.z.string(),
    byteSize: zod_1.z.number(),
    title: zod_1.z.string().optional(),
    timestamp: zod_1.z.string(),
});
const PersistedAgentPartSchema = zod_1.z.discriminatedUnion('type', [
    PersistedTextPartSchema,
    PersistedReasoningPartSchema,
    PersistedToolCallPartSchema,
    PersistedThinkingStatusPartSchema,
    PersistedBatchProgressPartSchema,
    PersistedActionReceiptPartSchema,
    PersistedBuildPlanPartSchema,
    PersistedSourceUrlPartSchema,
    PersistedSourceDocumentPartSchema,
    PersistedImagePartSchema,
    PersistedFilePartSchema,
]);
exports.AgentFeedbackReason = zod_1.z.enum([
    'incorrect_or_incomplete',
    'not_what_i_asked_for',
    'slow_or_buggy',
    'style_or_tone',
    'safety_or_security',
    'other',
]);
exports.AgentMessageFeedbackSchema = zod_1.z.object({
    rating: zod_1.z.enum(['up', 'down']),
    reasons: zod_1.z.array(exports.AgentFeedbackReason).optional(),
    comment: zod_1.z.string().max(2000).optional(),
});
exports.PersistedAgentMessageSchema = zod_1.z.object({
    role: zod_1.z.enum([PersistedAgentRole.USER, PersistedAgentRole.ASSISTANT]),
    parts: zod_1.z.array(PersistedAgentPartSchema),
    thinkingDurationMs: zod_1.z.number().optional(),
    feedback: exports.AgentMessageFeedbackSchema.optional(),
    tainted: zod_1.z.boolean().optional(),
});
var AgentConversationStatus;
(function (AgentConversationStatus) {
    AgentConversationStatus["IDLE"] = "IDLE";
    AgentConversationStatus["STREAMING"] = "STREAMING";
    AgentConversationStatus["ERROR"] = "ERROR";
})(AgentConversationStatus || (exports.AgentConversationStatus = AgentConversationStatus = {}));
exports.AgentRunFlowReference = zod_1.z.object({
    flowRunId: zod_1.z.string(),
    flowId: zod_1.z.string(),
    displayName: zod_1.z.string(),
});
exports.AgentConversation = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), projectId: (0, core_utils_1.Nullable)(zod_1.z.string()), userId: zod_1.z.string(), agentId: (0, core_utils_1.Nullable)(zod_1.z.string()), flowRunId: (0, core_utils_1.Nullable)(zod_1.z.string()), aiCredits: (0, core_utils_1.Nullable)(zod_1.z.number().int()), source: zod_1.z.enum(core_execution_1.AgentRunSource), title: (0, core_utils_1.Nullable)(zod_1.z.string()), modelName: (0, core_utils_1.Nullable)(zod_1.z.string()), modelTierId: (0, core_utils_1.Nullable)(core_utils_1.ApId), status: zod_1.z.nativeEnum(AgentConversationStatus).default(AgentConversationStatus.IDLE), activeRunId: (0, core_utils_1.Nullable)(zod_1.z.string()), messages: zod_1.z.array(zod_1.z.record(zod_1.z.string(), zod_1.z.unknown())).default([]), uiMessages: zod_1.z.array(exports.PersistedAgentMessageSchema).nullable().default(null), summary: (0, core_utils_1.Nullable)(zod_1.z.string()), summarizedUpToIndex: (0, core_utils_1.Nullable)(zod_1.z.number().int()) }));
exports.AgentRunListItem = exports.AgentConversation.extend({
    flow: (0, core_utils_1.Nullable)(exports.AgentRunFlowReference),
});
exports.CreateAgentConversationRequest = zod_1.z.object({
    title: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.string())),
    modelName: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.string())),
    modelTierId: zod_1.z.optional((0, core_utils_1.Nullable)(core_utils_1.ApId)),
    agentId: zod_1.z.optional(zod_1.z.string()),
    builder: zod_1.z.optional(zod_1.z.boolean()),
    projectId: zod_1.z.optional(zod_1.z.string()),
});
exports.UpdateAgentConversationRequest = zod_1.z.object({
    title: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.string())),
    modelName: zod_1.z.optional((0, core_utils_1.Nullable)(zod_1.z.string())),
    modelTierId: zod_1.z.optional((0, core_utils_1.Nullable)(core_utils_1.ApId)),
});
exports.UserMemory = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), userId: zod_1.z.string(), instructions: (0, core_utils_1.Nullable)(zod_1.z.string()), memories: zod_1.z.array(zod_1.z.string()).default([]) }));
exports.GetAgentMemoryResponse = zod_1.z.object({
    instructions: zod_1.z.string().nullable(),
    memories: zod_1.z.array(zod_1.z.string()),
});
exports.UpdateAgentMemoryRequest = zod_1.z.object({
    instructions: (0, core_utils_1.Nullable)(zod_1.z.string()),
    memories: zod_1.z.optional(zod_1.z.array(zod_1.z.string())),
});
exports.ImportAgentMemoryRequest = zod_1.z.object({
    text: zod_1.z.string(),
});
exports.InstructAgentMemoryRequest = zod_1.z.object({
    instruction: zod_1.z.string(),
});
exports.AgentMessageSource = zod_1.z.enum(['onboarding']);
exports.SendAgentMessageRequest = zod_1.z.object({
    content: zod_1.z.string().max(agent_1.MAX_AGENT_TEXT_LENGTH),
    runId: zod_1.z.string().optional(),
    files: zod_1.z.array(AgentMessageFile).max(10).optional(),
    messageSource: exports.AgentMessageSource.optional(),
}).refine((val) => val.content.length > 0 || (val.files && val.files.length > 0), { message: form_errors_1.formErrors.messageRequiresContentOrFiles });
exports.SetAgentMessageFeedbackRequest = zod_1.z.object({
    rating: zod_1.z.enum(['up', 'down']).nullable(),
    reasons: zod_1.z.array(exports.AgentFeedbackReason).max(exports.AgentFeedbackReason.options.length).optional(),
    comment: zod_1.z.string().max(2000).optional(),
});
exports.SimulateAgentRequest = zod_1.z.object({
    platformId: zod_1.z.string(),
    userMessage: zod_1.z.string().min(1).max(agent_1.MAX_AGENT_TEXT_LENGTH).optional(),
    userMessages: zod_1.z.array(zod_1.z.string().min(1).max(agent_1.MAX_AGENT_TEXT_LENGTH)).min(1).optional(),
    promptOverride: core_execution_1.AgentPromptOverride.optional(),
}).refine((val) => val.userMessage !== undefined || (val.userMessages !== undefined && val.userMessages.length > 0), { message: form_errors_1.formErrors.messageRequiresContentOrFiles });
function unwrapToolOutput(output) {
    if (typeof output !== 'object' || output === null)
        return output;
    if (!('type' in output) || !('value' in output))
        return output;
    const record = output;
    if (record['type'] === 'json') {
        return record['value'];
    }
    return output;
}
exports.agentPersistenceUtils = {
    unwrapToolOutput,
};
tslib_1.__exportStar(require("./agent"), exports);
var tool_classification_1 = require("./tool-classification");
Object.defineProperty(exports, "agentToolClassification", { enumerable: true, get: function () { return tool_classification_1.agentToolClassification; } });
var chat_billing_1 = require("./chat-billing");
Object.defineProperty(exports, "CHAT_CREDITS_PER_TOOL_CALL", { enumerable: true, get: function () { return chat_billing_1.CHAT_CREDITS_PER_TOOL_CALL; } });
Object.defineProperty(exports, "chatBilling", { enumerable: true, get: function () { return chat_billing_1.chatBilling; } });
var tool_phases_1 = require("./tool-phases");
Object.defineProperty(exports, "AGENT_SELF_EDIT_TOOLS", { enumerable: true, get: function () { return tool_phases_1.AGENT_SELF_EDIT_TOOLS; } });
Object.defineProperty(exports, "AGENT_SURFACE_TOOLS", { enumerable: true, get: function () { return tool_phases_1.AGENT_SURFACE_TOOLS; } });
Object.defineProperty(exports, "agentToolPhases", { enumerable: true, get: function () { return tool_phases_1.agentToolPhases; } });
var tool_skills_1 = require("./tool-skills");
Object.defineProperty(exports, "AGENT_SKILLS", { enumerable: true, get: function () { return tool_skills_1.AGENT_SKILLS; } });
Object.defineProperty(exports, "agentToolSkills", { enumerable: true, get: function () { return tool_skills_1.agentToolSkills; } });
Object.defineProperty(exports, "LAZY_TOOL_NAME", { enumerable: true, get: function () { return tool_skills_1.LAZY_TOOL_NAME; } });
Object.defineProperty(exports, "GET_TOOL_SCHEMA_NAME", { enumerable: true, get: function () { return tool_skills_1.GET_TOOL_SCHEMA_NAME; } });
Object.defineProperty(exports, "LOAD_SKILL_NAME", { enumerable: true, get: function () { return tool_skills_1.LOAD_SKILL_NAME; } });
Object.defineProperty(exports, "MAX_CORE_TOOLS", { enumerable: true, get: function () { return tool_skills_1.MAX_CORE_TOOLS; } });
Object.defineProperty(exports, "SKILLS_NOTE_HEADING", { enumerable: true, get: function () { return tool_skills_1.SKILLS_NOTE_HEADING; } });
var chat_visibility_1 = require("./chat-visibility");
Object.defineProperty(exports, "chatVisibility", { enumerable: true, get: function () { return chat_visibility_1.chatVisibility; } });
tslib_1.__exportStar(require("./chat-personalization"), exports);
//# sourceMappingURL=index.js.map