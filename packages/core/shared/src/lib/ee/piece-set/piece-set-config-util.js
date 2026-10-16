"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pieceSetConfigUtil = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const required_actions_util_1 = require("./required-actions-util");
const index_1 = require("./index");
function buildDefaultSet(platformId) {
    return {
        id: (0, core_utils_1.apId)(),
        platformId,
        name: 'Default',
        key: 'default',
        isDefault: true,
        generatedForProjectId: null,
        config: emptyConfig(),
    };
}
function emptyConfig() {
    return {
        pieces: { mode: index_1.PieceSelectionMode.INCLUDE_ALL, exceptions: [] },
        selectedActions: {},
        selectedTriggers: {},
        requiredActions: { mode: index_1.RequiredActionsMode.ANY, actions: {} },
    };
}
function applyUpdate({ current, request }) {
    var _a;
    const configWithUpdatedVisibility = Object.assign(Object.assign({}, current), { pieces: (_a = request.pieces) !== null && _a !== void 0 ? _a : current.pieces, selectedActions: applyComponentSelections({ current: current.selectedActions, selections: request.actions }), selectedTriggers: applyComponentSelections({ current: current.selectedTriggers, selections: request.triggers }) });
    return Object.assign(Object.assign({}, configWithUpdatedVisibility), { requiredActions: applyRequiredActionsUpdate({ config: configWithUpdatedVisibility, request: request.requiredActions }) });
}
function applyComponentSelections({ current, selections }) {
    if ((0, core_utils_1.isNil)(selections)) {
        return current;
    }
    return Object.entries(selections).reduce((acc, [piece, selection]) => {
        if (selection.mode === 'all') {
            return Object.fromEntries(Object.entries(acc).filter(([key]) => key !== piece));
        }
        return Object.assign(Object.assign({}, acc), { [piece]: (0, core_utils_1.unique)(selection.selected) });
    }, current);
}
function applyRequiredActionsUpdate({ config, request }) {
    var _a;
    const current = config.requiredActions;
    return {
        mode: (_a = request === null || request === void 0 ? void 0 : request.mode) !== null && _a !== void 0 ? _a : current.mode,
        actions: required_actions_util_1.requiredActionsUtil.removeExcludedRequiredActions({
            config,
            requiredActions: Object.assign(Object.assign({}, current.actions), request === null || request === void 0 ? void 0 : request.actions),
        }),
    };
}
exports.pieceSetConfigUtil = {
    buildDefaultSet,
    emptyConfig,
    applyUpdate,
};
//# sourceMappingURL=piece-set-config-util.js.map