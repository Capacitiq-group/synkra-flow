"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFlowApprovalRequestsQuery = exports.RejectFlowApprovalRequestBody = exports.PopulatedFlowApprovalRequest = exports.FlowApprovalRequest = exports.FlowApprovalRequestState = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var FlowApprovalRequestState;
(function (FlowApprovalRequestState) {
    FlowApprovalRequestState["PENDING"] = "PENDING";
    FlowApprovalRequestState["APPROVED"] = "APPROVED";
    FlowApprovalRequestState["REJECTED"] = "REJECTED";
})(FlowApprovalRequestState || (exports.FlowApprovalRequestState = FlowApprovalRequestState = {}));
exports.FlowApprovalRequest = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { flowId: core_utils_1.ApId, flowVersionId: core_utils_1.ApId, projectId: core_utils_1.ApId, platformId: core_utils_1.ApId, submitterId: (0, core_utils_1.Nullable)(core_utils_1.ApId), submittedAt: zod_1.z.string(), approverId: (0, core_utils_1.Nullable)(core_utils_1.ApId), decidedAt: (0, core_utils_1.Nullable)(zod_1.z.string()), state: zod_1.z.enum(FlowApprovalRequestState), requestedStatus: zod_1.z.enum(core_execution_1.FlowStatus), rejectionReason: (0, core_utils_1.Nullable)(zod_1.z.string()) }));
exports.PopulatedFlowApprovalRequest = exports.FlowApprovalRequest.extend({
    flow: core_execution_1.Flow.optional(),
    flowVersion: core_execution_1.FlowVersion.pick({ id: true, displayName: true, flowId: true, state: true, created: true, updated: true }).optional(),
});
exports.RejectFlowApprovalRequestBody = zod_1.z.object({
    reason: zod_1.z.string().max(1000).optional(),
});
exports.ListFlowApprovalRequestsQuery = zod_1.z.object({
    state: zod_1.z.enum(FlowApprovalRequestState).optional(),
    projectId: zod_1.z.optional(core_utils_1.ApId),
    flowVersionId: zod_1.z.optional(core_utils_1.ApId),
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().min(1).max(100).optional(),
});
//# sourceMappingURL=index.js.map