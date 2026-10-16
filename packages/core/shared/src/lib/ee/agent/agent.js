"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgentRequest = exports.MAX_AGENT_TOOLS = exports.MAX_AGENT_TEXT_LENGTH = exports.MAX_AGENT_STEP_BUDGET = exports.MAX_AGENT_SHARED_MEMBERS = exports.MAX_AGENT_PAGE_SIZE = exports.MAX_AGENT_NAME_LENGTH = exports.MAX_AGENT_DESCRIPTION_LENGTH = exports.MAX_AGENT_CONFIG_BYTES = exports.MAX_AGENT_OUTPUT_FIELDS = exports.ListAgentsRequest = exports.ListAgentRunsRequest = exports.MAX_AGENT_TURN_WALL_CLOCK_MS = exports.DEFAULT_AGENT_MAX_STEPS = exports.CreateAgentRequest = exports.AgentVisibility = exports.AgentIcon = exports.AgentConfig = exports.agentUtils = exports.AgentSummary = exports.GetAgentRequest = exports.AgentWithUsage = exports.AgentUsage = exports.Agent = exports.MAX_AGENT_SEARCH_LENGTH = exports.MoveAgentRequest = exports.AgentMovePreview = exports.AgentMoveLossKind = exports.AgentMoveLoss = exports.AgentListSort = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
const project_1 = require("../../management/project/project");
const MAX_AGENT_TEXT_LENGTH = 51200;
exports.MAX_AGENT_TEXT_LENGTH = MAX_AGENT_TEXT_LENGTH;
const MAX_AGENT_TOOLS = 100;
exports.MAX_AGENT_TOOLS = MAX_AGENT_TOOLS;
const MAX_AGENT_OUTPUT_FIELDS = 50;
exports.MAX_AGENT_OUTPUT_FIELDS = MAX_AGENT_OUTPUT_FIELDS;
const MAX_AGENT_STEP_BUDGET = 1000;
exports.MAX_AGENT_STEP_BUDGET = MAX_AGENT_STEP_BUDGET;
const MAX_AGENT_SHARED_MEMBERS = 200;
exports.MAX_AGENT_SHARED_MEMBERS = MAX_AGENT_SHARED_MEMBERS;
const MAX_AGENT_PAGE_SIZE = 100;
exports.MAX_AGENT_PAGE_SIZE = MAX_AGENT_PAGE_SIZE;
const MAX_AGENT_SEARCH_LENGTH = 200;
exports.MAX_AGENT_SEARCH_LENGTH = MAX_AGENT_SEARCH_LENGTH;
const MAX_AGENT_NAME_LENGTH = 200;
exports.MAX_AGENT_NAME_LENGTH = MAX_AGENT_NAME_LENGTH;
const MAX_AGENT_DESCRIPTION_LENGTH = 2000;
exports.MAX_AGENT_DESCRIPTION_LENGTH = MAX_AGENT_DESCRIPTION_LENGTH;
const MAX_AGENT_CONFIG_BYTES = 128000;
exports.MAX_AGENT_CONFIG_BYTES = MAX_AGENT_CONFIG_BYTES;
const DEFAULT_AGENT_MAX_STEPS = 20;
exports.DEFAULT_AGENT_MAX_STEPS = DEFAULT_AGENT_MAX_STEPS;
const MAX_AGENT_TURN_WALL_CLOCK_MS = 2 * 60 * 60 * 1000;
exports.MAX_AGENT_TURN_WALL_CLOCK_MS = MAX_AGENT_TURN_WALL_CLOCK_MS;
var AgentVisibility;
(function (AgentVisibility) {
    AgentVisibility["PROJECT"] = "PROJECT";
    AgentVisibility["RESTRICTED"] = "RESTRICTED";
})(AgentVisibility || (exports.AgentVisibility = AgentVisibility = {}));
var AgentIcon;
(function (AgentIcon) {
    AgentIcon["BOT"] = "bot";
    AgentIcon["SPARKLES"] = "sparkles";
    AgentIcon["MESSAGE"] = "message-square";
    AgentIcon["USERS"] = "users";
    AgentIcon["BOOK"] = "book-open";
    AgentIcon["CHART"] = "chart-line";
    AgentIcon["CALENDAR"] = "calendar";
    AgentIcon["MAIL"] = "mail";
    AgentIcon["GLOBE"] = "globe";
    AgentIcon["FILE"] = "file-text";
    AgentIcon["SEARCH"] = "search";
    AgentIcon["ZAP"] = "zap";
})(AgentIcon || (exports.AgentIcon = AgentIcon = {}));
const AgentConfig = zod_1.z.object({
    instructions: zod_1.z.string().max(MAX_AGENT_TEXT_LENGTH),
    provider: (0, core_utils_1.Nullable)(zod_1.z.enum(core_utils_1.AIProviderName)),
    providerConfigId: (0, core_utils_1.Nullable)(core_utils_1.ApId),
    modelName: (0, core_utils_1.Nullable)(zod_1.z.string().max(MAX_AGENT_NAME_LENGTH)),
    modelTierId: (0, core_utils_1.Nullable)(core_utils_1.ApId),
    maxSteps: zod_1.z.number().int().positive().max(MAX_AGENT_STEP_BUDGET).default(DEFAULT_AGENT_MAX_STEPS),
    tools: zod_1.z.array(core_execution_1.AgentTool).max(MAX_AGENT_TOOLS).default([]),
    structuredOutput: zod_1.z.array(core_execution_1.AgentOutputField).max(MAX_AGENT_OUTPUT_FIELDS).default([]),
}).superRefine((config, ctx) => {
    if (JSON.stringify(config).length > MAX_AGENT_CONFIG_BYTES) {
        ctx.addIssue({ code: 'custom', message: form_errors_1.formErrors.agentConfigTooLarge });
    }
});
exports.AgentConfig = AgentConfig;
const Agent = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: core_utils_1.ApId, ownerId: core_utils_1.ApId, externalId: zod_1.z.string(), folderId: (0, core_utils_1.Nullable)(core_utils_1.ApId), displayName: zod_1.z.string(), description: (0, core_utils_1.Nullable)(zod_1.z.string()), icon: zod_1.z.enum(AgentIcon), color: zod_1.z.enum(project_1.ColorName), visibility: zod_1.z.enum(AgentVisibility), sharedWithUserIds: zod_1.z.array(core_utils_1.ApId), draft: AgentConfig, published: (0, core_utils_1.Nullable)(AgentConfig) }));
exports.Agent = Agent;
const AgentUsage = zod_1.z.object({
    total: zod_1.z.number().int().nonnegative(),
    names: zod_1.z.array(zod_1.z.string()),
    flows: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string(), displayName: zod_1.z.string() })),
});
exports.AgentUsage = AgentUsage;
const AgentWithUsage = Agent.extend({
    publishedFlowsUsingAgent: AgentUsage.optional(),
});
exports.AgentWithUsage = AgentWithUsage;
const AgentSummary = Agent.omit({ draft: true, published: true }).extend({
    isPublished: zod_1.z.boolean(),
    toolCount: zod_1.z.number(),
    toolPieceNames: zod_1.z.array(zod_1.z.string()),
    toolTypes: zod_1.z.array(zod_1.z.enum(core_piece_types_1.AgentToolType)),
    projectDisplayName: zod_1.z.string(),
    projectIsPrivate: zod_1.z.boolean(),
});
exports.AgentSummary = AgentSummary;
const CreateAgentRequest = zod_1.z.object({
    projectId: core_utils_1.ApId,
    displayName: zod_1.z.string().min(1, form_errors_1.formErrors.required),
    description: (0, core_utils_1.Nullable)(zod_1.z.string()),
    icon: zod_1.z.enum(AgentIcon),
    color: zod_1.z.enum(project_1.ColorName),
    visibility: zod_1.z.enum(AgentVisibility).optional(),
    sharedWithUserIds: zod_1.z.array(core_utils_1.ApId).max(MAX_AGENT_SHARED_MEMBERS).optional(),
    folderId: (0, core_utils_1.Nullable)(core_utils_1.ApId),
    draft: AgentConfig,
});
exports.CreateAgentRequest = CreateAgentRequest;
const UpdateAgentRequest = CreateAgentRequest.omit({ projectId: true }).partial().extend({
    goLive: zod_1.z.boolean().optional(),
});
exports.UpdateAgentRequest = UpdateAgentRequest;
const GetAgentRequest = zod_1.z.object({
    includeUsage: zod_1.z.coerce.boolean().optional(),
});
exports.GetAgentRequest = GetAgentRequest;
var AgentListSort;
(function (AgentListSort) {
    AgentListSort["UPDATED"] = "updated";
    AgentListSort["CREATED"] = "created";
    AgentListSort["NAME"] = "name";
})(AgentListSort || (exports.AgentListSort = AgentListSort = {}));
const MoveAgentRequest = zod_1.z.object({
    projectId: core_utils_1.ApId,
});
exports.MoveAgentRequest = MoveAgentRequest;
var AgentMoveLossKind;
(function (AgentMoveLossKind) {
    AgentMoveLossKind["CONNECTION"] = "connection";
    AgentMoveLossKind["FLOW"] = "flow";
    AgentMoveLossKind["KNOWLEDGE"] = "knowledge";
})(AgentMoveLossKind || (exports.AgentMoveLossKind = AgentMoveLossKind = {}));
const AgentMoveLoss = zod_1.z.object({
    kind: zod_1.z.enum(AgentMoveLossKind),
    label: zod_1.z.string(),
});
exports.AgentMoveLoss = AgentMoveLoss;
const AgentMovePreview = zod_1.z.object({
    blockedByPublishedFlows: AgentUsage,
    mayCreateAgentsThere: zod_1.z.boolean(),
    toolsThatStopWorking: zod_1.z.array(AgentMoveLoss),
    membersLosingAccess: zod_1.z.number().int().nonnegative(),
});
exports.AgentMovePreview = AgentMovePreview;
const ListAgentsRequest = zod_1.z.object({
    projectId: zod_1.z.optional(core_utils_1.ApId),
    search: zod_1.z.optional(zod_1.z.string().max(MAX_AGENT_SEARCH_LENGTH)),
    sort: zod_1.z.optional(zod_1.z.enum(AgentListSort)),
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().int().min(1).max(MAX_AGENT_PAGE_SIZE).optional(),
});
exports.ListAgentsRequest = ListAgentsRequest;
const ListAgentRunsRequest = zod_1.z.object({
    projectId: core_utils_1.ApId,
    agentId: core_utils_1.ApId,
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().int().min(1).max(MAX_AGENT_PAGE_SIZE).optional(),
});
exports.ListAgentRunsRequest = ListAgentRunsRequest;
const agentUtils = {
    isPublishable: (config) => { var _a; return ((_a = config.instructions) !== null && _a !== void 0 ? _a : '').trim().length > 0; },
};
exports.agentUtils = agentUtils;
//# sourceMappingURL=agent.js.map