"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._deleteBranch = _deleteBranch;
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("../util/flow-structure-util");
function _deleteBranch(flowVersion, request) {
    return flow_structure_util_1.flowStructureUtil.transferFlow(flowVersion, (parentStep) => {
        if (parentStep.name !== request.stepName || !flow_structure_util_1.flowStructureUtil.isBranchedAction(parentStep)) {
            return parentStep;
        }
        const keep = (_, index) => index !== request.branchIndex;
        const children = parentStep.children.filter(keep);
        if (parentStep.type === action_1.FlowActionType.AI_ROUTER) {
            return Object.assign(Object.assign({}, parentStep), { settings: Object.assign(Object.assign({}, parentStep.settings), { branches: parentStep.settings.branches.filter(keep) }), children });
        }
        return Object.assign(Object.assign({}, parentStep), { settings: Object.assign(Object.assign({}, parentStep.settings), { branches: parentStep.settings.branches.filter(keep) }), children });
    });
}
//# sourceMappingURL=delete-branch.js.map