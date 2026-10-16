"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._addBranch = _addBranch;
const core_utils_1 = require("@activepieces/core-utils");
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("../util/flow-structure-util");
function _addBranch(flowVersion, request) {
    return flow_structure_util_1.flowStructureUtil.transferFlow(flowVersion, (parentStep) => {
        var _a;
        if (parentStep.name !== request.stepName || !flow_structure_util_1.flowStructureUtil.isBranchedAction(parentStep)) {
            return parentStep;
        }
        const children = (0, core_utils_1.insertAt)(parentStep.children, request.branchIndex, null);
        if (parentStep.type === action_1.FlowActionType.AI_ROUTER) {
            return Object.assign(Object.assign({}, parentStep), { settings: Object.assign(Object.assign({}, parentStep.settings), { branches: (0, core_utils_1.insertAt)(parentStep.settings.branches, request.branchIndex, {
                        branchType: action_1.BranchExecutionType.CONDITION,
                        branchName: request.branchName,
                        description: (_a = request.description) !== null && _a !== void 0 ? _a : '',
                    }) }), children });
        }
        return Object.assign(Object.assign({}, parentStep), { settings: Object.assign(Object.assign({}, parentStep.settings), { branches: (0, core_utils_1.insertAt)(parentStep.settings.branches, request.branchIndex, flow_structure_util_1.flowStructureUtil.createBranch(request.branchName, request.conditions)) }), children });
    });
}
//# sourceMappingURL=add-branch.js.map