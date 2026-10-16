"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAW_PAYLOAD_HEADER = exports.FAIL_PARENT_ON_FAILURE_HEADER = exports.PARENT_RUN_ID_HEADER = exports.USE_DRAFT_QUERY_PARAM_NAME = exports.Project = exports.StopResponse = exports.FlowTriggerType = exports.FlowStatus = void 0;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
var FlowStatus;
(function (FlowStatus) {
    FlowStatus["ENABLED"] = "ENABLED";
    FlowStatus["DISABLED"] = "DISABLED";
})(FlowStatus || (exports.FlowStatus = FlowStatus = {}));
var FlowTriggerType;
(function (FlowTriggerType) {
    FlowTriggerType["EMPTY"] = "EMPTY";
    FlowTriggerType["PIECE"] = "PIECE_TRIGGER";
})(FlowTriggerType || (exports.FlowTriggerType = FlowTriggerType = {}));
exports.StopResponse = z.object({
    status: z.optional(z.number()),
    body: z.optional(z.unknown()),
    headers: z.optional(z.record(z.string(), z.string())),
});
exports.Project = z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { deleted: (0, core_utils_1.Nullable)(core_utils_1.DateOrString), ownerId: z.string(), displayName: z.string(), platformId: z.string(), externalId: (0, core_utils_1.Nullable)(z.string()) }));
exports.USE_DRAFT_QUERY_PARAM_NAME = 'useDraft';
exports.PARENT_RUN_ID_HEADER = 'ap-parent-run-id';
exports.FAIL_PARENT_ON_FAILURE_HEADER = 'ap-fail-parent-on-failure';
exports.RAW_PAYLOAD_HEADER = 'ap-raw-payload';
//# sourceMappingURL=flow-contracts.js.map