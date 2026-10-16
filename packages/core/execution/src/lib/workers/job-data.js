"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobData = exports.ExecuteAiJobData = exports.RouteJobData = exports.GenerateImageJobData = exports.ExtractStructuredDataJobData = exports.ClassifyTextJobData = exports.SummarizeTextJobData = exports.AskAiJobData = exports.AiStepSchema = exports.AiStepFile = exports.AiStepWebSearch = exports.AiStepWebSearchOptions = exports.EventDestinationJobData = exports.ExecutePersonalizationResearchJobData = exports.ExecuteAgentRunJobData = exports.ResolvedAgentFlowTool = exports.AgentPromptOverride = exports.AgentRunSource = exports.UserInteractionJobDataWithoutWatchingInformation = exports.UserInteractionJobData = exports.ExecuteActionJobData = exports.ActionRunStep = exports.ExecuteExtractPieceMetadataJobData = exports.ExecutePropertyJobData = exports.ExecuteTriggerHookJobData = exports.ExecuteTokenRefreshJobData = exports.ExecuteResolveConnectionIdentifierJobData = exports.ExecuteValidateAuthJobData = exports.WebhookJobData = exports.ExecuteFlowJobData = exports.ResumeExecuteFlowJobData = exports.BeginExecuteFlowJobData = exports.PollingJobData = exports.RenewWebhookJobData = exports.WorkerJobType = exports.RATE_LIMIT_PRIORITY = exports.JOB_PRIORITY = exports.JobPayload = exports.RefJobPayload = exports.InlineJobPayload = exports.LATEST_JOB_DATA_SCHEMA_VERSION = void 0;
exports.getDefaultJobPriority = getDefaultJobPriority;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const engine_1 = require("../engine");
const execution_output_1 = require("../flow-run/execution/execution-output");
const flow_run_1 = require("../flow-run/flow-run");
const action_1 = require("../flows/actions/action");
const flow_version_1 = require("../flows/flow-version");
const trigger_1 = require("../flows/triggers/trigger");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const tools_1 = require("../agents/tools");
const agents_1 = require("../agents");
exports.LATEST_JOB_DATA_SCHEMA_VERSION = 10;
exports.InlineJobPayload = zod_1.z.object({
    type: zod_1.z.literal('inline'),
    value: zod_1.z.any(),
});
exports.RefJobPayload = zod_1.z.object({
    type: zod_1.z.literal('ref'),
    fileId: zod_1.z.string(),
});
exports.JobPayload = zod_1.z.discriminatedUnion('type', [exports.InlineJobPayload, exports.RefJobPayload]);
exports.JOB_PRIORITY = {
    critical: 1,
    high: 2,
    medium: 3,
    low: 4,
    veryLow: 5,
    lowest: 6,
};
const TESTING_EXECUTE_FLOW_PRIORITY = 'high';
const ASYNC_EXECUTE_FLOW_PRIORITY = 'medium';
const SYNC_EXECUTE_FLOW_PRIORITY = 'high';
exports.RATE_LIMIT_PRIORITY = 'lowest';
function getExecuteFlowPriority(environment, workerHandlerId) {
    switch (environment) {
        case flow_run_1.RunEnvironment.TESTING:
            return TESTING_EXECUTE_FLOW_PRIORITY;
        case flow_run_1.RunEnvironment.PRODUCTION:
            return (0, core_utils_1.isNil)(workerHandlerId) ? ASYNC_EXECUTE_FLOW_PRIORITY : SYNC_EXECUTE_FLOW_PRIORITY;
    }
}
function getDefaultJobPriority(job) {
    switch (job.jobType) {
        case WorkerJobType.EXECUTE_POLLING:
        case WorkerJobType.RENEW_WEBHOOK:
            return 'veryLow';
        case WorkerJobType.EXECUTE_WEBHOOK:
        case WorkerJobType.EVENT_DESTINATION:
        case WorkerJobType.EXECUTE_PERSONALIZATION_RESEARCH:
            return 'medium';
        case WorkerJobType.EXECUTE_FLOW:
            return getExecuteFlowPriority(job.environment, job.workerHandlerId);
        case WorkerJobType.EXECUTE_PROPERTY:
        case WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION:
        case WorkerJobType.EXECUTE_VALIDATION:
        case WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER:
        case WorkerJobType.EXECUTE_TRIGGER_HOOK:
        case WorkerJobType.EXECUTE_TOKEN_REFRESH:
            return 'critical';
        case WorkerJobType.EXECUTE_AGENT_RUN:
        case WorkerJobType.EXECUTE_AI:
        case WorkerJobType.EXECUTE_ACTION:
            return 'high';
    }
}
var WorkerJobType;
(function (WorkerJobType) {
    WorkerJobType["RENEW_WEBHOOK"] = "RENEW_WEBHOOK";
    WorkerJobType["EXECUTE_POLLING"] = "EXECUTE_POLLING";
    WorkerJobType["EXECUTE_WEBHOOK"] = "EXECUTE_WEBHOOK";
    WorkerJobType["EXECUTE_FLOW"] = "EXECUTE_FLOW";
    WorkerJobType["EXECUTE_VALIDATION"] = "EXECUTE_VALIDATION";
    WorkerJobType["EXECUTE_RESOLVE_CONNECTION_IDENTIFIER"] = "EXECUTE_RESOLVE_CONNECTION_IDENTIFIER";
    WorkerJobType["EXECUTE_TRIGGER_HOOK"] = "EXECUTE_TRIGGER_HOOK";
    WorkerJobType["EXECUTE_PROPERTY"] = "EXECUTE_PROPERTY";
    WorkerJobType["EXECUTE_EXTRACT_PIECE_INFORMATION"] = "EXECUTE_EXTRACT_PIECE_INFORMATION";
    WorkerJobType["EVENT_DESTINATION"] = "EVENT_DESTINATION";
    WorkerJobType["EXECUTE_AGENT_RUN"] = "EXECUTE_AGENT_RUN";
    WorkerJobType["EXECUTE_AI"] = "EXECUTE_AI";
    WorkerJobType["EXECUTE_TOKEN_REFRESH"] = "EXECUTE_TOKEN_REFRESH";
    WorkerJobType["EXECUTE_ACTION"] = "EXECUTE_ACTION";
    WorkerJobType["EXECUTE_PERSONALIZATION_RESEARCH"] = "EXECUTE_PERSONALIZATION_RESEARCH";
})(WorkerJobType || (exports.WorkerJobType = WorkerJobType = {}));
exports.RenewWebhookJobData = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    flowVersionId: zod_1.z.string(),
    flowId: zod_1.z.string(),
    jobType: zod_1.z.literal(WorkerJobType.RENEW_WEBHOOK),
});
// Never change without increasing LATEST_JOB_DATA_SCHEMA_VERSION, and adding a migration
exports.PollingJobData = zod_1.z.object({
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    schemaVersion: zod_1.z.number(),
    flowVersionId: zod_1.z.string(),
    flowId: zod_1.z.string(),
    triggerType: zod_1.z.nativeEnum(trigger_1.FlowTriggerType),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_POLLING),
});
const ExecuteFlowJobDataCommon = zod_1.z.object({
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_FLOW),
    environment: zod_1.z.nativeEnum(flow_run_1.RunEnvironment),
    schemaVersion: zod_1.z.number(),
    flowId: zod_1.z.string(),
    flowVersionId: zod_1.z.string(),
    runId: zod_1.z.string(),
    workerHandlerId: zod_1.z.union([zod_1.z.string(), zod_1.z.null()]).optional(),
    httpRequestId: zod_1.z.string().optional(),
    payload: exports.JobPayload,
    streamStepProgress: zod_1.z.nativeEnum(engine_1.StreamStepProgress),
    stepNameToTest: zod_1.z.string().optional(),
    sampleData: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    logsFileId: zod_1.z.string(),
});
exports.BeginExecuteFlowJobData = ExecuteFlowJobDataCommon.extend({
    executionType: zod_1.z.literal(execution_output_1.ExecutionType.BEGIN),
    executeTrigger: zod_1.z.boolean().optional(),
});
exports.ResumeExecuteFlowJobData = ExecuteFlowJobDataCommon.extend({
    executionType: zod_1.z.literal(execution_output_1.ExecutionType.RESUME),
    resumeReason: zod_1.z.nativeEnum(engine_1.ResumeReason),
});
exports.ExecuteFlowJobData = zod_1.z.discriminatedUnion('executionType', [exports.BeginExecuteFlowJobData, exports.ResumeExecuteFlowJobData]);
exports.WebhookJobData = zod_1.z.object({
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    schemaVersion: zod_1.z.number(),
    requestId: zod_1.z.string(),
    payload: exports.JobPayload,
    runEnvironment: zod_1.z.nativeEnum(flow_run_1.RunEnvironment),
    flowId: zod_1.z.string(),
    saveSampleData: zod_1.z.boolean(),
    flowVersionIdToRun: zod_1.z.string(),
    execute: zod_1.z.boolean(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_WEBHOOK),
    parentRunId: zod_1.z.string().optional(),
    failParentOnFailure: zod_1.z.boolean().optional(),
});
exports.ExecuteValidateAuthJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_VALIDATION),
    projectId: zod_1.z.string().optional(),
    platformId: zod_1.z.string(),
    piece: core_piece_types_1.PiecePackage,
    schemaVersion: zod_1.z.number(),
    connectionValue: zod_1.z.unknown(),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ExecuteResolveConnectionIdentifierJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_RESOLVE_CONNECTION_IDENTIFIER),
    projectId: zod_1.z.string().optional(),
    platformId: zod_1.z.string(),
    piece: core_piece_types_1.PiecePackage,
    schemaVersion: zod_1.z.number(),
    connectionValue: zod_1.z.custom(),
    connectionType: zod_1.z.enum(core_piece_types_1.AppConnectionType),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ExecuteTokenRefreshJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_TOKEN_REFRESH),
    projectId: zod_1.z.string().optional(),
    platformId: zod_1.z.string(),
    piece: core_piece_types_1.PiecePackage,
    schemaVersion: zod_1.z.number(),
    connectionValue: zod_1.z.custom(),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ExecuteTriggerHookJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_TRIGGER_HOOK),
    platformId: zod_1.z.string(),
    projectId: zod_1.z.string(),
    schemaVersion: zod_1.z.number(),
    flowId: zod_1.z.string(),
    flowVersionId: zod_1.z.string(),
    test: zod_1.z.boolean(),
    hookType: zod_1.z.nativeEnum(engine_1.TriggerHookType),
    triggerPayload: engine_1.TriggerPayload.optional(),
    isRepublish: zod_1.z.boolean().optional(),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ExecutePropertyJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_PROPERTY),
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    schemaVersion: zod_1.z.number(),
    flowVersion: flow_version_1.FlowVersion.optional(),
    propertyName: zod_1.z.string(),
    piece: core_piece_types_1.PiecePackage,
    actionOrTriggerName: zod_1.z.string(),
    input: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    sampleData: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    searchValue: zod_1.z.string().optional(),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ExecuteExtractPieceMetadataJobData = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_EXTRACT_PIECE_INFORMATION),
    projectId: zod_1.z.undefined(),
    platformId: zod_1.z.string(),
    piece: core_piece_types_1.PiecePackage,
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.ActionRunStep = zod_1.z.discriminatedUnion('type', [action_1.PieceActionSchema, action_1.CodeActionSchema]);
exports.ExecuteActionJobData = zod_1.z.object({
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_ACTION),
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    schemaVersion: zod_1.z.number(),
    step: exports.ActionRunStep,
    piece: zod_1.z.optional(core_piece_types_1.PiecePackage),
    expiresAt: zod_1.z.number(),
    requestId: zod_1.z.string(),
    webserverId: zod_1.z.string(),
});
exports.UserInteractionJobData = zod_1.z.union([
    exports.ExecuteValidateAuthJobData,
    exports.ExecuteResolveConnectionIdentifierJobData,
    exports.ExecuteTokenRefreshJobData,
    exports.ExecuteTriggerHookJobData,
    exports.ExecutePropertyJobData,
    exports.ExecuteExtractPieceMetadataJobData,
    exports.ExecuteActionJobData,
]);
exports.UserInteractionJobDataWithoutWatchingInformation = zod_1.z.union([
    exports.ExecuteValidateAuthJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecuteResolveConnectionIdentifierJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecuteTokenRefreshJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecuteTriggerHookJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecutePropertyJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecuteExtractPieceMetadataJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
    exports.ExecuteActionJobData.omit({ schemaVersion: true, requestId: true, webserverId: true }),
]);
var AgentRunSource;
(function (AgentRunSource) {
    AgentRunSource["CHAT"] = "CHAT";
    AgentRunSource["FLOW_STEP"] = "FLOW_STEP";
    AgentRunSource["AGENT"] = "AGENT";
    AgentRunSource["AGENT_BUILDER"] = "AGENT_BUILDER";
})(AgentRunSource || (exports.AgentRunSource = AgentRunSource = {}));
exports.AgentPromptOverride = zod_1.z.object({
    system: zod_1.z.string().optional(),
    projectSelected: zod_1.z.string().optional(),
    noProject: zod_1.z.string().optional(),
    guides: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
exports.ResolvedAgentFlowTool = zod_1.z.object({
    toolName: zod_1.z.string(),
    flowId: zod_1.z.string(),
    flowVersionId: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    inputSchema: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    returnsResponse: zod_1.z.boolean(),
});
exports.ExecuteAgentRunJobData = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_AGENT_RUN),
    conversationId: zod_1.z.string(),
    runId: zod_1.z.string().optional(),
    projectId: zod_1.z.string().nullable(),
    platformId: zod_1.z.string(),
    userId: zod_1.z.string(),
    userMessage: zod_1.z.string(),
    source: zod_1.z.enum(AgentRunSource).optional(),
    messageSource: zod_1.z.enum(['onboarding']).optional(),
    agentId: zod_1.z.string().optional(),
    flowRunId: zod_1.z.string().optional(),
    waitpointId: zod_1.z.string().optional(),
    tools: zod_1.z.array(tools_1.AgentTool).optional(),
    flowTools: zod_1.z.array(exports.ResolvedAgentFlowTool).optional(),
    structuredOutput: zod_1.z.array(agents_1.AgentOutputField).optional(),
    maxSteps: zod_1.z.number().int().positive().optional(),
    provider: zod_1.z.enum(core_utils_1.AIProviderName).optional(),
    providerConfigId: zod_1.z.string().optional(),
    modelName: zod_1.z.string().nullable(),
    modelTierId: zod_1.z.string().optional(),
    files: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        mimeType: zod_1.z.string(),
        data: zod_1.z.string(),
    })).optional(),
    promptOverride: exports.AgentPromptOverride.optional(),
    dryRun: zod_1.z.boolean().optional(),
    // Measurement mode: run real discovery (research/get-props/resolve/reads) but neutralize
    // ap_execute_action and auto-resolve approval gates, so the eval harness can measure how the
    // agent navigates to a runnable call with zero side effects and no approval stalls.
    discoveryOnly: zod_1.z.boolean().optional(),
});
exports.ExecutePersonalizationResearchJobData = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_PERSONALIZATION_RESEARCH),
    platformId: zod_1.z.string(),
    projectId: zod_1.z.string().nullable(),
    userId: zod_1.z.string(),
    scope: zod_1.z.enum(['company', 'user']),
    website: zod_1.z.string().nullable(),
    companyText: zod_1.z.string().nullable(),
    role: zod_1.z.string().nullable(),
    prefillOnly: zod_1.z.boolean(),
    researchToken: zod_1.z.string().nullable(),
});
exports.EventDestinationJobData = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    platformId: zod_1.z.string(),
    projectId: zod_1.z.string().optional(),
    webhookId: zod_1.z.string(),
    webhookUrl: zod_1.z.string(),
    payload: zod_1.z.unknown(), // EE audit-event schema stays in @activepieces/shared; engine does not need it
    contentType: zod_1.z.enum(['application/json', 'application/x-protobuf']).optional(),
    hasHeaders: zod_1.z.boolean().optional(),
    jobType: zod_1.z.literal(WorkerJobType.EVENT_DESTINATION),
});
exports.AiStepWebSearchOptions = zod_1.z.object({
    maxUses: zod_1.z.number().optional(),
    includeSources: zod_1.z.boolean().optional(),
    userLocationCity: zod_1.z.string().optional(),
    userLocationRegion: zod_1.z.string().optional(),
    userLocationCountry: zod_1.z.string().optional(),
    userLocationTimezone: zod_1.z.string().optional(),
    allowedDomains: zod_1.z.array(zod_1.z.object({ domain: zod_1.z.string() })).optional(),
    blockedDomains: zod_1.z.array(zod_1.z.object({ domain: zod_1.z.string() })).optional(),
    searchContextSize: zod_1.z.enum(['low', 'medium', 'high']).optional().catch(undefined),
});
exports.AiStepWebSearch = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    options: exports.AiStepWebSearchOptions.optional(),
});
exports.AiStepFile = zod_1.z.object({
    fileId: zod_1.z.string(),
    mimeType: zod_1.z.string().optional(),
    filename: zod_1.z.string().optional(),
});
exports.AiStepSchema = zod_1.z.object({
    mode: zod_1.z.enum(['simple', 'advanced']),
    fields: zod_1.z.unknown(),
});
const AiStepJobBase = zod_1.z.object({
    schemaVersion: zod_1.z.number(),
    jobType: zod_1.z.literal(WorkerJobType.EXECUTE_AI),
    requestId: zod_1.z.string(),
    projectId: zod_1.z.string(),
    platformId: zod_1.z.string(),
    flowId: zod_1.z.string(),
    flowRunId: zod_1.z.string(),
    waitpointId: zod_1.z.string().optional(),
    webserverId: zod_1.z.string().optional(),
    provider: zod_1.z.enum(core_utils_1.AIProviderName),
    providerConfigId: zod_1.z.string().optional(),
    modelId: zod_1.z.string(),
    modelTierId: zod_1.z.string().optional(),
    prompt: zod_1.z.string().optional(),
    maxOutputTokens: zod_1.z.number().optional(),
    temperature: zod_1.z.number().optional(),
    webSearch: exports.AiStepWebSearch.optional(),
});
exports.AskAiJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.ASK_AI),
    conversation: zod_1.z.array(zod_1.z.record(zod_1.z.string(), zod_1.z.unknown())).optional(),
});
exports.SummarizeTextJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.SUMMARIZE_TEXT),
    text: zod_1.z.string().optional(),
});
exports.ClassifyTextJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.CLASSIFY_TEXT),
    text: zod_1.z.string().optional(),
    categories: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.ExtractStructuredDataJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.EXTRACT_STRUCTURED_DATA),
    text: zod_1.z.string().optional(),
    files: zod_1.z.array(exports.AiStepFile).optional(),
    schema: exports.AiStepSchema.optional(),
});
exports.GenerateImageJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.GENERATE_IMAGE),
    files: zod_1.z.array(exports.AiStepFile).optional(),
    advancedOptions: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
});
exports.RouteJobData = AiStepJobBase.extend({
    action: zod_1.z.literal(core_utils_1.AiStepAction.ROUTE),
    state: zod_1.z.string(),
    question: zod_1.z.string(),
    options: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
    matchMode: zod_1.z.enum(action_1.AiRouterMatchMode),
});
exports.ExecuteAiJobData = zod_1.z.discriminatedUnion('action', [
    exports.AskAiJobData,
    exports.SummarizeTextJobData,
    exports.ClassifyTextJobData,
    exports.ExtractStructuredDataJobData,
    exports.GenerateImageJobData,
    exports.RouteJobData,
]);
exports.JobData = zod_1.z.union([
    exports.PollingJobData,
    exports.RenewWebhookJobData,
    exports.ExecuteFlowJobData,
    exports.WebhookJobData,
    exports.UserInteractionJobData,
    exports.EventDestinationJobData,
    exports.ExecuteAgentRunJobData,
    exports.ExecuteAiJobData,
    exports.ExecutePersonalizationResearchJobData,
]);
//# sourceMappingURL=job-data.js.map