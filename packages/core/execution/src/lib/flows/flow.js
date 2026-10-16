"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulatedTriggerSource = exports.PopulatedFlow = exports.Flow = exports.flowExecutionStateKey = exports.FlowCreator = exports.FlowCreatorType = exports.FlowOperationStatus = exports.FlowStatus = void 0;
const tslib_1 = require("tslib");
const zod_1 = require("zod");
const zMini = tslib_1.__importStar(require("zod/mini"));
const core_utils_1 = require("@activepieces/core-utils");
const core_utils_2 = require("@activepieces/core-utils");
const core_utils_3 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const flow_version_1 = require("./flow-version");
var FlowStatus;
(function (FlowStatus) {
    FlowStatus["ENABLED"] = "ENABLED";
    FlowStatus["DISABLED"] = "DISABLED";
})(FlowStatus || (exports.FlowStatus = FlowStatus = {}));
var FlowOperationStatus;
(function (FlowOperationStatus) {
    FlowOperationStatus["NONE"] = "NONE";
    FlowOperationStatus["DELETING"] = "DELETING";
    /** @deprecated No longer set — status changes are now synchronous via distributed lock */
    FlowOperationStatus["ENABLING"] = "ENABLING";
    /** @deprecated No longer set — status changes are now synchronous via distributed lock */
    FlowOperationStatus["DISABLING"] = "DISABLING";
})(FlowOperationStatus || (exports.FlowOperationStatus = FlowOperationStatus = {}));
exports.FlowCreatorType = {
    MCP: 'MCP',
    AGENT: 'AGENT',
};
exports.FlowCreator = zod_1.z.discriminatedUnion('type', [
    zod_1.z.object({ type: zod_1.z.literal(exports.FlowCreatorType.MCP), id: core_utils_2.ApId }),
    zod_1.z.object({ type: zod_1.z.literal(exports.FlowCreatorType.AGENT), id: core_utils_2.ApId }),
]);
const flowExecutionStateKey = (flowId) => `flow-execution-state:${flowId}`;
exports.flowExecutionStateKey = flowExecutionStateKey;
exports.Flow = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), externalId: zod_1.z.string(), ownerId: (0, core_utils_1.Nullable)(zod_1.z.string()), folderId: (0, core_utils_1.Nullable)(zod_1.z.string()), status: zod_1.z.nativeEnum(FlowStatus), publishedVersionId: (0, core_utils_1.Nullable)(zod_1.z.string()), metadata: (0, core_utils_1.Nullable)(core_utils_3.Metadata), 
    /** @deprecated Only DELETING is actively used — ENABLING/DISABLING are no longer set */
    operationStatus: zod_1.z.nativeEnum(FlowOperationStatus), timeSavedPerRun: (0, core_utils_1.Nullable)(zod_1.z.number()), templateId: (0, core_utils_1.Nullable)(zod_1.z.string()), createdBy: (0, core_utils_1.Nullable)(exports.FlowCreator) }));
exports.PopulatedFlow = exports.Flow.extend({
    version: flow_version_1.FlowVersion,
    triggerSource: zMini.optional(zMini.pick(core_piece_types_1.TriggerSource, { schedule: true })),
});
exports.PopulatedTriggerSource = zMini.extend(core_piece_types_1.TriggerSource, {
    flow: exports.Flow,
});
//# sourceMappingURL=flow.js.map