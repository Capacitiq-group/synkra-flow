"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredActionsUtil = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const index_1 = require("./index");
function dropUnavailableActionsInLatestPieceVersion({ actions, actionExists }) {
    return filterActionsPerPiece({ actions, keep: ({ pieceName, actionName }) => { var _a; return ((_a = actionExists[pieceName]) === null || _a === void 0 ? void 0 : _a[actionName]) === true; } });
}
function removeExcludedRequiredActions({ config, requiredActions }) {
    return filterActionsPerPiece({ actions: requiredActions, keep: ({ pieceName, actionName }) => isActionIncluded({ config, pieceName, actionName }) });
}
function findExcludedRequiredActions({ config, requiredActions }) {
    return filterActionsPerPiece({ actions: requiredActions, keep: ({ pieceName, actionName }) => !isActionIncluded({ config, pieceName, actionName }) });
}
function checkRequiredActionsExistInFlowVersion({ requiredActions, flowVersion, actionExists }) {
    const availableRequiredActionsInLatestPieceVersion = dropUnavailableActionsInLatestPieceVersion({ actions: requiredActions.actions, actionExists });
    const required = ungroupActionsByPiece(availableRequiredActionsInLatestPieceVersion);
    if (required.length === 0) {
        return { passed: true, mode: requiredActions.mode, requiredActions: availableRequiredActionsInLatestPieceVersion, missingActions: {}, skippedActions: {} };
    }
    const steps = core_execution_1.flowStructureUtil.getAllSteps(flowVersion.trigger);
    const skippedStepNames = core_execution_1.flowStructureUtil.getSkippedStepNames({ trigger: flowVersion.trigger });
    const pieceActionSteps = getPieceActionsInFlowVersion({ steps }).map((step) => (Object.assign(Object.assign({}, step), { skipped: skippedStepNames.has(step.stepName) })));
    const nonSkippedActionsInFlowVersion = new Set(pieceActionSteps.filter((step) => !step.skipped).map(concatPieceNameAndActionName));
    const skippedActionsInFlowVersion = new Set(pieceActionSteps.filter((step) => step.skipped).map(concatPieceNameAndActionName));
    const requiredActionsNotInFlowVersion = required.filter((step) => !nonSkippedActionsInFlowVersion.has(concatPieceNameAndActionName(step)));
    const passed = requiredActions.mode === index_1.RequiredActionsMode.ALL ? requiredActionsNotInFlowVersion.length === 0 : requiredActionsNotInFlowVersion.length < required.length;
    return {
        passed,
        mode: requiredActions.mode,
        requiredActions: availableRequiredActionsInLatestPieceVersion,
        missingActions: passed ? {} : groupActionsByPiece(requiredActionsNotInFlowVersion.filter((ref) => !skippedActionsInFlowVersion.has(concatPieceNameAndActionName(ref)))),
        skippedActions: passed ? {} : groupActionsByPiece(requiredActionsNotInFlowVersion.filter((ref) => skippedActionsInFlowVersion.has(concatPieceNameAndActionName(ref)))),
    };
}
function buildRequiredActionsMissingErrorMessage(result) {
    const list = formatActionList([...ungroupActionsByPiece(result.missingActions), ...ungroupActionsByPiece(result.skippedActions)]);
    const lead = result.mode === index_1.RequiredActionsMode.ALL
        ? 'This flow needs these actions to publish'
        : 'This flow needs one of these actions to publish';
    return `${lead}: ${list}`;
}
function buildExcludedRequiredActionsErrorMessage(excludedRequiredActions) {
    return `Required actions must be included in the piece set: ${formatActionList(ungroupActionsByPiece(excludedRequiredActions))}`;
}
function formatActionList(refs) {
    return refs
        .map((ref) => `${ref.pieceName} · ${ref.actionName}`)
        .join(', ');
}
function getPieceActionsInFlowVersion({ steps }) {
    return steps.flatMap((step) => {
        if (step.type !== core_execution_1.FlowActionType.PIECE || step.settings.actionName === undefined) {
            return [];
        }
        return [{ pieceName: step.settings.pieceName, actionName: step.settings.actionName, stepName: step.name }];
    });
}
function filterActionsPerPiece({ actions, keep }) {
    const keptActionsPerPiece = Object.entries(actions).map(([pieceName, actionNames]) => {
        const keptActionNames = (0, core_utils_1.unique)(actionNames).filter((actionName) => keep({ pieceName, actionName }));
        return [pieceName, keptActionNames];
    });
    const piecesWithKeptActions = keptActionsPerPiece.filter(([, actionNames]) => actionNames.length > 0);
    return Object.fromEntries(piecesWithKeptActions);
}
function isActionIncluded({ config, pieceName, actionName }) {
    return (0, index_1.isPieceVisible)({ pieces: config.pieces, name: pieceName })
        && (0, index_1.isComponentVisible)({ selected: config.selectedActions[pieceName], name: actionName });
}
function ungroupActionsByPiece(actions) {
    return Object.entries(actions).flatMap(([pieceName, names]) => names.map((actionName) => ({ pieceName, actionName })));
}
function groupActionsByPiece(refs) {
    return refs.reduce((acc, ref) => { var _a; return (Object.assign(Object.assign({}, acc), { [ref.pieceName]: [...((_a = acc[ref.pieceName]) !== null && _a !== void 0 ? _a : []), ref.actionName] })); }, {});
}
function concatPieceNameAndActionName(ref) {
    return JSON.stringify([ref.pieceName, ref.actionName]);
}
exports.requiredActionsUtil = {
    checkRequiredActionsExistInFlowVersion,
    buildRequiredActionsMissingErrorMessage,
    buildExcludedRequiredActionsErrorMessage,
    removeExcludedRequiredActions,
    findExcludedRequiredActions,
};
//# sourceMappingURL=required-actions-util.js.map