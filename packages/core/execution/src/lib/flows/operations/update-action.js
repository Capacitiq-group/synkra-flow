"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._updateAction = _updateAction;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const core_utils_1 = require("@activepieces/core-utils");
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("../util/flow-structure-util");
const update_step_util_1 = require("./update-step-util");
function _updateAction(flowVersion, request) {
    const next = flow_structure_util_1.flowStructureUtil.transferFlow(flowVersion, (stepToUpdate) => {
        if (stepToUpdate.name !== request.name) {
            return stepToUpdate;
        }
        const baseProps = {
            displayName: request.displayName,
            name: request.name,
            valid: false,
            skip: request.skip,
            lastUpdatedDate: (0, dayjs_1.default)().toISOString(),
            settings: Object.assign(Object.assign({}, stepToUpdate.settings), { customLogoUrl: request.settings.customLogoUrl }),
        };
        let updatedAction;
        switch (request.type) {
            case action_1.FlowActionType.CODE: {
                const existingContinueOnFailureBranches = stepToUpdate.type === action_1.FlowActionType.CODE || stepToUpdate.type === action_1.FlowActionType.PIECE ? stepToUpdate.continueOnFailureBranches : undefined;
                const existingSampleData = stepToUpdate.type === action_1.FlowActionType.CODE ? stepToUpdate.settings.sampleData : undefined;
                updatedAction = Object.assign(Object.assign({}, baseProps), { settings: Object.assign(Object.assign({}, request.settings), { sampleData: existingSampleData }), type: action_1.FlowActionType.CODE, nextAction: stepToUpdate.nextAction, continueOnFailureBranches: existingContinueOnFailureBranches });
                break;
            }
            case action_1.FlowActionType.PIECE: {
                const existingContinueOnFailureBranches = stepToUpdate.type === action_1.FlowActionType.CODE || stepToUpdate.type === action_1.FlowActionType.PIECE ? stepToUpdate.continueOnFailureBranches : undefined;
                const existingSampleData = stepToUpdate.type === action_1.FlowActionType.PIECE ? stepToUpdate.settings.sampleData : undefined;
                updatedAction = Object.assign(Object.assign({}, baseProps), { settings: Object.assign(Object.assign({}, request.settings), { sampleData: existingSampleData }), type: action_1.FlowActionType.PIECE, nextAction: stepToUpdate.nextAction, continueOnFailureBranches: existingContinueOnFailureBranches });
                break;
            }
            case action_1.FlowActionType.LOOP_ON_ITEMS: {
                const existingSampleData = stepToUpdate.type === action_1.FlowActionType.LOOP_ON_ITEMS ? stepToUpdate.settings.sampleData : undefined;
                const firstLoopAction = stepToUpdate.type === action_1.FlowActionType.LOOP_ON_ITEMS ? stepToUpdate.firstLoopAction : undefined;
                updatedAction = Object.assign(Object.assign({}, baseProps), { settings: Object.assign(Object.assign({}, request.settings), { sampleData: existingSampleData }), type: action_1.FlowActionType.LOOP_ON_ITEMS, firstLoopAction, nextAction: stepToUpdate.nextAction });
                break;
            }
            case action_1.FlowActionType.ROUTER: {
                const existingSampleData = stepToUpdate.type === action_1.FlowActionType.ROUTER ? stepToUpdate.settings.sampleData : undefined;
                const children = stepToUpdate.type === action_1.FlowActionType.ROUTER ? stepToUpdate.children : [null, null];
                updatedAction = Object.assign(Object.assign({}, baseProps), { settings: Object.assign(Object.assign({}, request.settings), { sampleData: existingSampleData }), type: action_1.FlowActionType.ROUTER, nextAction: stepToUpdate.nextAction, children });
                break;
            }
            case action_1.FlowActionType.AI_ROUTER: {
                const existingSampleData = stepToUpdate.type === action_1.FlowActionType.AI_ROUTER ? stepToUpdate.settings.sampleData : undefined;
                const children = stepToUpdate.type === action_1.FlowActionType.AI_ROUTER ? stepToUpdate.children : [null, null];
                updatedAction = Object.assign(Object.assign({}, baseProps), { settings: Object.assign(Object.assign({}, request.settings), { sampleData: existingSampleData }), type: action_1.FlowActionType.AI_ROUTER, nextAction: stepToUpdate.nextAction, children });
                break;
            }
        }
        const parseResult = action_1.SingleActionSchema.safeParse(updatedAction);
        const valid = ((0, core_utils_1.isNil)(request.valid) ? true : request.valid) && parseResult.success;
        return Object.assign(Object.assign({}, update_step_util_1.updateStepUtil.preserveLastUpdatedDate({ existingStep: stepToUpdate, updatedStep: updatedAction })), { valid });
    });
    return next;
}
//# sourceMappingURL=update-action.js.map