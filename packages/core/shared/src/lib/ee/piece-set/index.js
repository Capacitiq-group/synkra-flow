"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPieceSetsRequestQuery = exports.AssignProjectsRequestBody = exports.DuplicatePieceSetRequestBody = exports.UpdatePieceSetRequestBody = exports.CreatePieceSetRequestBody = exports.ComponentSelection = exports.PieceSet = exports.PieceSetConfig = exports.RequiredActions = exports.RequiredActionsMode = exports.PieceSelection = exports.PieceSelectionMode = void 0;
exports.isPieceVisible = isPieceVisible;
exports.isComponentVisible = isComponentVisible;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
function isPieceVisible({ pieces, name }) {
    const listed = pieces.exceptions.includes(name);
    return pieces.mode === PieceSelectionMode.INCLUDE_ALL ? !listed : listed;
}
function isComponentVisible({ selected, name }) {
    if ((0, core_utils_1.isNil)(selected)) {
        return true;
    }
    return selected.includes(name);
}
var PieceSelectionMode;
(function (PieceSelectionMode) {
    PieceSelectionMode["INCLUDE_ALL"] = "include_all";
    PieceSelectionMode["EXCLUDE_ALL"] = "exclude_all";
})(PieceSelectionMode || (exports.PieceSelectionMode = PieceSelectionMode = {}));
exports.PieceSelection = zod_1.z.object({
    mode: zod_1.z.enum([PieceSelectionMode.INCLUDE_ALL, PieceSelectionMode.EXCLUDE_ALL]).default(PieceSelectionMode.INCLUDE_ALL),
    exceptions: zod_1.z.array(zod_1.z.string()).default([]),
});
var RequiredActionsMode;
(function (RequiredActionsMode) {
    RequiredActionsMode["ANY"] = "any";
    RequiredActionsMode["ALL"] = "all";
})(RequiredActionsMode || (exports.RequiredActionsMode = RequiredActionsMode = {}));
exports.RequiredActions = zod_1.z.object({
    mode: zod_1.z.enum(RequiredActionsMode).default(RequiredActionsMode.ANY),
    actions: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).default({}),
});
exports.PieceSetConfig = zod_1.z.object({
    pieces: exports.PieceSelection.default({ mode: PieceSelectionMode.INCLUDE_ALL, exceptions: [] }),
    selectedActions: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).default({}),
    selectedTriggers: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).default({}),
    requiredActions: exports.RequiredActions.default({ mode: RequiredActionsMode.ANY, actions: {} }),
});
exports.PieceSet = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, name: zod_1.z.string(), key: (0, core_utils_1.Nullable)(zod_1.z.string()), isDefault: zod_1.z.boolean(), generatedForProjectId: (0, core_utils_1.Nullable)(core_utils_1.ApId), config: exports.PieceSetConfig }));
exports.ComponentSelection = zod_1.z.discriminatedUnion('mode', [
    zod_1.z.object({ mode: zod_1.z.literal('all') }),
    zod_1.z.object({ mode: zod_1.z.literal('selected'), selected: zod_1.z.array(zod_1.z.string()) }),
]);
exports.CreatePieceSetRequestBody = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: form_errors_1.formErrors.required }),
    key: zod_1.z.string().optional(),
});
exports.UpdatePieceSetRequestBody = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: form_errors_1.formErrors.required }).optional(),
    key: zod_1.z.string().optional(),
    pieces: exports.PieceSelection.optional(),
    actions: zod_1.z.record(zod_1.z.string(), exports.ComponentSelection).optional(),
    triggers: zod_1.z.record(zod_1.z.string(), exports.ComponentSelection).optional(),
    requiredActions: zod_1.z.object({
        mode: zod_1.z.enum(RequiredActionsMode).optional(),
        actions: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    }).optional(),
});
exports.DuplicatePieceSetRequestBody = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: form_errors_1.formErrors.required }),
});
exports.AssignProjectsRequestBody = zod_1.z.object({
    projectIds: zod_1.z.array(core_utils_1.ApId).min(1, { message: form_errors_1.formErrors.required }),
});
exports.ListPieceSetsRequestQuery = zod_1.z.object({
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.number().int().min(1).max(100).optional().default(10),
});
//# sourceMappingURL=index.js.map