"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._addAction = _addAction;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const core_utils_1 = require("@activepieces/core-utils");
const core_utils_2 = require("@activepieces/core-utils");
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("../util/flow-structure-util");
const index_1 = require("./index");
function createAction(request, { nextAction, }) {
    const baseProperties = {
        displayName: request.displayName,
        name: request.name,
        valid: false,
        skip: request.skip,
        lastUpdatedDate: (0, dayjs_1.default)().toISOString(),
        settings: Object.assign(Object.assign({}, request.settings), { customLogoUrl: request.settings.customLogoUrl }),
        nextAction,
    };
    let action;
    switch (request.type) {
        case action_1.FlowActionType.ROUTER:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.FlowActionType.ROUTER, settings: request.settings, children: request.settings.branches.map(() => null) });
            break;
        case action_1.FlowActionType.AI_ROUTER:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.FlowActionType.AI_ROUTER, settings: request.settings, children: request.settings.branches.map(() => null) });
            break;
        case action_1.FlowActionType.LOOP_ON_ITEMS:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.FlowActionType.LOOP_ON_ITEMS, settings: request.settings });
            break;
        case action_1.FlowActionType.PIECE:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.FlowActionType.PIECE, settings: request.settings });
            break;
        case action_1.FlowActionType.CODE:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.FlowActionType.CODE, settings: request.settings });
            break;
    }
    const parseResult = action_1.SingleActionSchema.safeParse(action);
    const valid = ((0, core_utils_1.isNil)(request.valid) ? true : request.valid) && parseResult.success;
    return Object.assign(Object.assign({}, action), { valid });
}
function handleLoopOnItems(parentStep, request) {
    if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_LOOP) {
        parentStep.firstLoopAction = createAction(request.action, {
            nextAction: parentStep.firstLoopAction,
        });
    }
    else if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.AFTER) {
        parentStep.nextAction = createAction(request.action, {
            nextAction: parentStep.nextAction,
        });
    }
    else {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.FLOW_OPERATION_INVALID,
            params: {
                message: `Loop step parent ${request.stepLocationRelativeToParent} not found`,
            },
        });
    }
    return parentStep;
}
function handleRouter(parentStep, request) {
    var _a;
    if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_BRANCH && !(0, core_utils_1.isNil)(request.branchIndex)) {
        parentStep.children[request.branchIndex] = createAction(request.action, {
            nextAction: (_a = parentStep.children[request.branchIndex]) !== null && _a !== void 0 ? _a : undefined,
        });
    }
    else if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.AFTER) {
        parentStep.nextAction = createAction(request.action, {
            nextAction: parentStep.nextAction,
        });
    }
    else {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.FLOW_OPERATION_INVALID,
            params: {
                message: `Router step parent ${request.stepLocationRelativeToParent} not found`,
            },
        });
    }
    return parentStep;
}
function handleContinueOnFailureBranches(parentStep, request) {
    var _a;
    if (parentStep.type !== action_1.FlowActionType.CODE && parentStep.type !== action_1.FlowActionType.PIECE) {
        throw new core_utils_2.ActivepiecesError({
            code: core_utils_2.ErrorCode.FLOW_OPERATION_INVALID,
            params: {
                message: `Continue-on-failure branches are only available on Code and Piece actions, got ${parentStep.type}`,
            },
        });
    }
    const branches = (_a = parentStep.continueOnFailureBranches) !== null && _a !== void 0 ? _a : {};
    if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_ON_SUCCESS_BRANCH) {
        branches.onSuccess = createAction(request.action, {
            nextAction: branches.onSuccess,
        });
    }
    else if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_ON_FAILURE_BRANCH) {
        branches.onFailure = createAction(request.action, {
            nextAction: branches.onFailure,
        });
    }
    parentStep.continueOnFailureBranches = branches;
    return parentStep;
}
function _addAction(flowVersion, request) {
    return flow_structure_util_1.flowStructureUtil.transferFlow(flowVersion, (parentStep) => {
        if (parentStep.name !== request.parentStep) {
            return parentStep;
        }
        if (request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_ON_SUCCESS_BRANCH ||
            request.stepLocationRelativeToParent === index_1.StepLocationRelativeToParent.INSIDE_ON_FAILURE_BRANCH) {
            return handleContinueOnFailureBranches(parentStep, request);
        }
        switch (parentStep.type) {
            case action_1.FlowActionType.LOOP_ON_ITEMS:
                return handleLoopOnItems(parentStep, request);
            case action_1.FlowActionType.ROUTER:
            case action_1.FlowActionType.AI_ROUTER:
                return handleRouter(parentStep, request);
            default: {
                parentStep.nextAction = createAction(request.action, {
                    nextAction: parentStep.nextAction,
                });
                return parentStep;
            }
        }
    });
}
//# sourceMappingURL=add-action.js.map