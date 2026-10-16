"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowStructureUtil = exports.AI_PIECE_NAME = void 0;
const core_piece_types_1 = require("@activepieces/core-piece-types");
const core_utils_1 = require("@activepieces/core-utils");
const core_utils_2 = require("@activepieces/core-utils");
const action_1 = require("../actions/action");
const trigger_1 = require("../triggers/trigger");
exports.AI_PIECE_NAME = '@activepieces/piece-ai';
function isAction(type) {
    return Object.entries(action_1.FlowActionType).some(([, value]) => value === type);
}
function isStepAction(step) {
    return step.type === action_1.FlowActionType.CODE
        || step.type === action_1.FlowActionType.PIECE
        || step.type === action_1.FlowActionType.LOOP_ON_ITEMS
        || step.type === action_1.FlowActionType.ROUTER
        || step.type === action_1.FlowActionType.AI_ROUTER;
}
function isBranchedAction(step) {
    return step.type === action_1.FlowActionType.ROUTER
        || step.type === action_1.FlowActionType.AI_ROUTER;
}
function isTrigger(type) {
    return Object.entries(trigger_1.FlowTriggerType).some(([, value]) => value === type);
}
function getActionOrThrow(name, flowRoot) {
    const step = getStepOrThrow(name, flowRoot);
    if (!isAction(step.type)) {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.ENTITY_NOT_FOUND,
            params: {
                entityType: 'step',
                entityId: name,
                message: 'Step is not an action',
            },
        });
    }
    return step;
}
function getTriggerOrThrow(name, flowRoot) {
    const step = getStepOrThrow(name, flowRoot);
    if (!isTrigger(step.type)) {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.ENTITY_NOT_FOUND,
            params: {
                entityType: 'step',
                entityId: name,
                message: 'Step is not a trigger',
            },
        });
    }
    return step;
}
function getStep(name, flowRoot) {
    return getAllSteps(flowRoot).find((step) => step.name === name);
}
function getStepOrThrow(name, flowRoot) {
    const step = getStep(name, flowRoot);
    if ((0, core_utils_1.isNil)(step)) {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.ENTITY_NOT_FOUND,
            params: {
                entityType: 'step',
                entityId: name,
                message: 'Step not found',
            },
        });
    }
    return step;
}
function transferStep(step, transferFunction) {
    const updatedStep = transferFunction(step);
    switch (updatedStep.type) {
        case action_1.FlowActionType.LOOP_ON_ITEMS: {
            const { firstLoopAction } = updatedStep;
            if (firstLoopAction) {
                updatedStep.firstLoopAction = transferStep(firstLoopAction, transferFunction);
            }
            break;
        }
        case action_1.FlowActionType.ROUTER:
        case action_1.FlowActionType.AI_ROUTER: {
            const { children } = updatedStep;
            if (children) {
                updatedStep.children = children.map((child) => child ? transferStep(child, transferFunction) : null);
            }
            break;
        }
        default:
            break;
    }
    if (updatedStep.type === action_1.FlowActionType.CODE || updatedStep.type === action_1.FlowActionType.PIECE) {
        const branches = updatedStep.continueOnFailureBranches;
        if (branches === null || branches === void 0 ? void 0 : branches.onSuccess) {
            const transferred = transferStep(branches.onSuccess, transferFunction);
            if (isStepAction(transferred)) {
                branches.onSuccess = transferred;
            }
        }
        if (branches === null || branches === void 0 ? void 0 : branches.onFailure) {
            const transferred = transferStep(branches.onFailure, transferFunction);
            if (isStepAction(transferred)) {
                branches.onFailure = transferred;
            }
        }
    }
    if (updatedStep.nextAction) {
        updatedStep.nextAction = transferStep(updatedStep.nextAction, transferFunction);
    }
    return updatedStep;
}
function transferFlow(flowVersion, transferFunction) {
    const clonedFlow = JSON.parse(JSON.stringify(flowVersion));
    clonedFlow.trigger = transferStep(clonedFlow.trigger, transferFunction);
    return clonedFlow;
}
function getAllSteps(step) {
    const steps = [];
    transferStep(step, (currentStep) => {
        steps.push(currentStep);
        return currentStep;
    });
    return steps;
}
function getStepNumber(trigger, stepName) {
    return getAllSteps(trigger).findIndex((s) => s.name === stepName) + 1;
}
const createBranch = (branchName, conditions) => {
    return {
        conditions: conditions !== null && conditions !== void 0 ? conditions : [[action_1.emptyCondition]],
        branchType: action_1.BranchExecutionType.CONDITION,
        branchName,
    };
};
function findPathToStep(trigger, targetStepName) {
    const steps = exports.flowStructureUtil.getAllSteps(trigger).map((step, dfsIndex) => (Object.assign(Object.assign({}, step), { dfsIndex })));
    return steps
        .filter((step) => {
        const steps = exports.flowStructureUtil.getAllSteps(step);
        return steps.some((s) => s.name === targetStepName);
    })
        .filter((step) => step.name !== targetStepName);
}
function getAllChildSteps(action) {
    return getAllSteps(Object.assign(Object.assign({}, action), { nextAction: undefined }));
}
function hasContinueOnFailureBranches(step) {
    var _a, _b, _c;
    if (step.type !== action_1.FlowActionType.CODE && step.type !== action_1.FlowActionType.PIECE) {
        return false;
    }
    return (_c = (_b = (_a = step.settings.errorHandlingOptions) === null || _a === void 0 ? void 0 : _a.continueOnFailure) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : false;
}
function getSkippedStepNames({ trigger }) {
    const skippedSteps = getAllSteps(trigger).filter((step) => isAction(step.type) && 'skip' in step && step.skip === true);
    return new Set(skippedSteps.flatMap((step) => getAllChildSteps(step).map((child) => child.name)));
}
function isSkipped({ stepName, trigger }) {
    return getSkippedStepNames({ trigger }).has(stepName);
}
function isChildOf(parent, childStepName) {
    return getAllChildSteps(parent).some((c) => c.name === childStepName && c.name !== parent.name);
}
const findUnusedNames = (source, count = 1) => {
    const names = Array.isArray(source) ? source : exports.flowStructureUtil.getAllSteps(source).map((f) => f.name);
    const unusedNames = [];
    for (let i = 1; i <= count; i++) {
        const name = findUnusedName(names);
        unusedNames.push(name);
        names.push(name);
    }
    return unusedNames;
};
const findUnusedName = (source) => {
    const names = Array.isArray(source) ? source : exports.flowStructureUtil.getAllSteps(source).map((f) => f.name);
    let index = 1;
    let name = 'step_1';
    while (names.includes(name)) {
        index++;
        name = 'step_' + index;
    }
    return name;
};
function getAllNextActionsWithoutChildren(start) {
    const actions = [];
    let currentAction = start.nextAction;
    while (!(0, core_utils_1.isNil)(currentAction)) {
        actions.push(currentAction);
        currentAction = currentAction.nextAction;
    }
    return actions;
}
function extractConnectionIdsFromAuth(auth) {
    const match = auth.match(/{{connections\['([^']*(?:'\s*,\s*'[^']*)*)'\]}}/);
    if (!match || !match[1]) {
        return [];
    }
    return match[1].split(/'\s*,\s*'/).map(id => id.trim());
}
function extractAgentIds(flowVersion) {
    const getExternalAgentId = (action) => {
        if (isAgentPiece(action) && core_piece_types_1.AgentPieceProps.AGENT_ID in action.settings.input) {
            return action.settings.input[core_piece_types_1.AgentPieceProps.AGENT_ID];
        }
        return null;
    };
    const agentIds = exports.flowStructureUtil.getAllSteps(flowVersion.trigger)
        .map(step => getExternalAgentId(step))
        .filter((agentId) => !(0, core_utils_1.isNil)(agentId) && agentId !== '');
    return (0, core_utils_1.unique)(agentIds);
}
function isAgentPiece(action) {
    return (action.type === action_1.FlowActionType.PIECE && action.settings.pieceName === exports.AI_PIECE_NAME);
}
function extractConnectionIds(flowVersion) {
    var _a, _b;
    const triggerAuthIds = ((_b = (_a = flowVersion.trigger.settings) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.auth)
        ? extractConnectionIdsFromAuth(flowVersion.trigger.settings.input.auth)
        : [];
    const stepAuthIds = exports.flowStructureUtil
        .getAllSteps(flowVersion.trigger)
        .flatMap(step => {
        var _a, _b;
        return ((_b = (_a = step.settings) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.auth)
            ? extractConnectionIdsFromAuth(step.settings.input.auth)
            : [];
    });
    return Array.from(new Set([...triggerAuthIds, ...stepAuthIds]));
}
exports.flowStructureUtil = {
    isTrigger,
    isAction,
    getAllSteps,
    getStepNumber,
    transferStep,
    transferFlow,
    getStepOrThrow,
    getActionOrThrow,
    getTriggerOrThrow,
    getStep,
    createBranch,
    findPathToStep,
    isChildOf,
    findUnusedName,
    findUnusedNames,
    getAllNextActionsWithoutChildren,
    getAllChildSteps,
    hasContinueOnFailureBranches,
    getSkippedStepNames,
    isSkipped,
    extractConnectionIds,
    isAgentPiece,
    isBranchedAction,
    extractAgentIds,
};
//# sourceMappingURL=flow-structure-util.js.map