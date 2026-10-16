"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowVersionMetadata = exports.FlowVersion = exports.FlowVersionState = exports.LATEST_FLOW_SCHEMA_VERSION = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const note_1 = require("./note");
const trigger_1 = require("./triggers/trigger");
exports.LATEST_FLOW_SCHEMA_VERSION = '28';
var FlowVersionState;
(function (FlowVersionState) {
    FlowVersionState["LOCKED"] = "LOCKED";
    FlowVersionState["DRAFT"] = "DRAFT";
})(FlowVersionState || (exports.FlowVersionState = FlowVersionState = {}));
exports.FlowVersion = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { flowId: zod_1.z.string(), displayName: zod_1.z.string(), trigger: trigger_1.FlowTrigger, updatedBy: (0, core_utils_1.Nullable)(zod_1.z.string()), valid: zod_1.z.boolean(), schemaVersion: (0, core_utils_1.Nullable)(zod_1.z.string()), agentIds: zod_1.z.array(zod_1.z.string()), state: zod_1.z.nativeEnum(FlowVersionState), connectionIds: zod_1.z.array(zod_1.z.string()), backupFiles: (0, core_utils_1.Nullable)(zod_1.z.record(zod_1.z.string(), zod_1.z.string())), notes: zod_1.z.array(note_1.Note) }));
exports.FlowVersionMetadata = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { flowId: zod_1.z.string(), displayName: zod_1.z.string(), valid: zod_1.z.boolean(), state: zod_1.z.nativeEnum(FlowVersionState), updatedBy: (0, core_utils_1.Nullable)(zod_1.z.string()), schemaVersion: (0, core_utils_1.Nullable)(zod_1.z.string()), updatedByUser: (0, core_utils_1.Nullable)(core_piece_types_1.UserWithMetaInformation) }));
//# sourceMappingURL=flow-version.js.map