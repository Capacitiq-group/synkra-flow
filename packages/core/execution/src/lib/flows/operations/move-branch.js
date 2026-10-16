"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._moveBranch = _moveBranch;
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("../util/flow-structure-util");
const isIndexWithinBounds = (index, arrayLength) => index >= 0 && index < arrayLength;
function _moveBranch(flowVersion, request) {
    return flow_structure_util_1.flowStructureUtil.transferFlow(flowVersion, (stepToUpdate) => {
        if (stepToUpdate.name !== request.stepName || !flow_structure_util_1.flowStructureUtil.isBranchedAction(stepToUpdate)) {
            return stepToUpdate;
        }
        const branches = stepToUpdate.settings.branches;
        if (!isIndexWithinBounds(request.sourceBranchIndex, branches.length) || !isIndexWithinBounds(request.targetBranchIndex, branches.length) || request.sourceBranchIndex === request.targetBranchIndex) {
            return stepToUpdate;
        }
        if (branches[request.sourceBranchIndex].branchType === action_1.BranchExecutionType.FALLBACK || branches[request.targetBranchIndex].branchType === action_1.BranchExecutionType.FALLBACK) {
            return stepToUpdate;
        }
        moveInPlace({ items: stepToUpdate.children, from: request.sourceBranchIndex, to: request.targetBranchIndex });
        moveInPlace({ items: stepToUpdate.settings.branches, from: request.sourceBranchIndex, to: request.targetBranchIndex });
        return stepToUpdate;
    });
}
function moveInPlace({ items, from, to }) {
    const [moved] = items.splice(from, 1);
    items.splice(to, 0, moved);
}
//# sourceMappingURL=move-branch.js.map