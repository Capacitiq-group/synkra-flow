"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowCanvasUtils = exports.FLOW_CANVAS_HSPACE = exports.FLOW_CANVAS_ROUTER_VOFFSET = exports.FLOW_CANVAS_LOOP_VOFFSET = exports.FLOW_CANVAS_ARC = exports.FLOW_CANVAS_VSPACE = exports.FLOW_CANVAS_STEP_WIDTH = exports.FLOW_CANVAS_STEP_HEIGHT = void 0;
const action_1 = require("../actions/action");
const flow_structure_util_1 = require("./flow-structure-util");
exports.FLOW_CANVAS_STEP_HEIGHT = 60;
exports.FLOW_CANVAS_STEP_WIDTH = 232;
exports.FLOW_CANVAS_VSPACE = 60;
exports.FLOW_CANVAS_ARC = 15;
exports.FLOW_CANVAS_LOOP_VOFFSET = exports.FLOW_CANVAS_VSPACE * 1.5 + 2 * exports.FLOW_CANVAS_ARC; // 120
exports.FLOW_CANVAS_ROUTER_VOFFSET = exports.FLOW_CANVAS_LOOP_VOFFSET + 30; // 150
exports.FLOW_CANVAS_HSPACE = 80;
function getFlowBoundingBox(step, forBranch = false) {
    if (!step) {
        return forBranch
            ? { minX: 0, maxX: exports.FLOW_CANVAS_STEP_WIDTH, height: exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_VSPACE }
            : { minX: 0, maxX: exports.FLOW_CANVAS_STEP_WIDTH, height: 0 };
    }
    let withChildMinX = 0;
    let withChildMaxX = exports.FLOW_CANVAS_STEP_WIDTH;
    let withChildHeight = exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_VSPACE;
    if (step.type === action_1.FlowActionType.LOOP_ON_ITEMS) {
        const childBoundingBox = getFlowBoundingBox(step.firstLoopAction, true);
        const childWidth = childBoundingBox.maxX - childBoundingBox.minX;
        const childLeft = -childBoundingBox.minX + exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const childRight = childBoundingBox.maxX - exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const deltaLeftX = -(childWidth + exports.FLOW_CANVAS_STEP_WIDTH + exports.FLOW_CANVAS_HSPACE - exports.FLOW_CANVAS_STEP_WIDTH / 2 - childRight) / 2 - exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const childOffsetX = deltaLeftX + exports.FLOW_CANVAS_STEP_WIDTH + exports.FLOW_CANVAS_HSPACE + childLeft;
        const subgraphEndY = exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_LOOP_VOFFSET + childBoundingBox.height + exports.FLOW_CANVAS_ARC + exports.FLOW_CANVAS_VSPACE;
        withChildMinX = Math.min(0, deltaLeftX, childOffsetX + childBoundingBox.minX);
        withChildMaxX = Math.max(exports.FLOW_CANVAS_STEP_WIDTH, deltaLeftX + exports.FLOW_CANVAS_STEP_WIDTH, childOffsetX + childBoundingBox.maxX);
        withChildHeight = Math.max(exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_VSPACE, subgraphEndY);
    }
    else if (flow_structure_util_1.flowStructureUtil.isBranchedAction(step)) {
        const children = step.children;
        if (children.length > 0) {
            const childBoundingBoxes = children.map(c => getFlowBoundingBox(c, true));
            const merged = mergeBranchedChildBoundingBoxes(childBoundingBoxes);
            withChildMinX = merged.minX;
            withChildMaxX = merged.maxX;
            withChildHeight = merged.height;
        }
    }
    else if (flow_structure_util_1.flowStructureUtil.hasContinueOnFailureBranches(step)) {
        const branches = getContinueOnFailureBranchPair(step);
        const childBoundingBoxes = branches.map(b => getFlowBoundingBox(b, true));
        const merged = mergeBranchedChildBoundingBoxes(childBoundingBoxes);
        withChildMinX = merged.minX;
        withChildMaxX = merged.maxX;
        withChildHeight = merged.height;
    }
    const nextBoundingBox = getFlowBoundingBox(step.nextAction, false);
    return {
        minX: Math.min(withChildMinX, nextBoundingBox.minX),
        maxX: Math.max(withChildMaxX, nextBoundingBox.maxX),
        height: withChildHeight + nextBoundingBox.height,
    };
}
function buildPositions({ step, offsetX, offsetY, positions }) {
    if (!step)
        return;
    positions.set(step.name, { x: offsetX + exports.FLOW_CANVAS_STEP_WIDTH / 2, y: offsetY });
    if (step.type === action_1.FlowActionType.LOOP_ON_ITEMS) {
        const childBoundingBox = getFlowBoundingBox(step.firstLoopAction, true);
        const childLeft = -childBoundingBox.minX + exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const childRight = childBoundingBox.maxX - exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const childWidth = childBoundingBox.maxX - childBoundingBox.minX;
        const deltaLeftX = -(childWidth + exports.FLOW_CANVAS_STEP_WIDTH + exports.FLOW_CANVAS_HSPACE - exports.FLOW_CANVAS_STEP_WIDTH / 2 - childRight) / 2 - exports.FLOW_CANVAS_STEP_WIDTH / 2;
        const childOffsetX = offsetX + deltaLeftX + exports.FLOW_CANVAS_STEP_WIDTH + exports.FLOW_CANVAS_HSPACE + childLeft;
        const childOffsetY = offsetY + exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_LOOP_VOFFSET;
        if (step.firstLoopAction) {
            buildPositions({ step: step.firstLoopAction, offsetX: childOffsetX, offsetY: childOffsetY, positions });
        }
        const subgraphEndY = exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_LOOP_VOFFSET + childBoundingBox.height + exports.FLOW_CANVAS_ARC + exports.FLOW_CANVAS_VSPACE;
        buildPositions({ step: step.nextAction, offsetX, offsetY: offsetY + subgraphEndY, positions });
    }
    else if (flow_structure_util_1.flowStructureUtil.isBranchedAction(step)) {
        const subgraphEndY = positionBranchedChildren({ children: step.children, offsetX, offsetY, positions });
        buildPositions({ step: step.nextAction, offsetX, offsetY: offsetY + subgraphEndY, positions });
    }
    else if (flow_structure_util_1.flowStructureUtil.hasContinueOnFailureBranches(step)) {
        const subgraphEndY = positionBranchedChildren({ children: getContinueOnFailureBranchPair(step), offsetX, offsetY, positions });
        buildPositions({ step: step.nextAction, offsetX, offsetY: offsetY + subgraphEndY, positions });
    }
    else {
        buildPositions({ step: step.nextAction, offsetX, offsetY: offsetY + exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_VSPACE, positions });
    }
}
function computeRouterChildOffsets(boundingBoxes, branchGap = exports.FLOW_CANVAS_HSPACE) {
    if (boundingBoxes.length === 0)
        return [];
    const totalWidth = boundingBoxes.reduce((sum, b) => sum + b.width, 0)
        + branchGap * (boundingBoxes.length - 1);
    let deltaLeftX = -(totalWidth - boundingBoxes[0].left - boundingBoxes[boundingBoxes.length - 1].right) / 2
        - boundingBoxes[0].left;
    return boundingBoxes.map(b => {
        const x = deltaLeftX + b.left;
        deltaLeftX += b.width + branchGap;
        return x;
    });
}
function mergeBranchedChildBoundingBoxes(childBoundingBoxes) {
    const offsets = computeRouterChildOffsets(childBoundingBoxes.map(boundingBoxToLayoutDimensions));
    let mergedMinX = 0;
    let mergedMaxX = exports.FLOW_CANVAS_STEP_WIDTH;
    let maxChildHeight = 0;
    for (let i = 0; i < childBoundingBoxes.length; i++) {
        const bbox = childBoundingBoxes[i];
        const x = offsets[i];
        mergedMinX = Math.min(mergedMinX, x + bbox.minX);
        mergedMaxX = Math.max(mergedMaxX, x + bbox.maxX);
        maxChildHeight = Math.max(maxChildHeight, bbox.height);
    }
    const subgraphEndY = exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_ROUTER_VOFFSET + maxChildHeight + exports.FLOW_CANVAS_ARC + exports.FLOW_CANVAS_VSPACE;
    return {
        minX: mergedMinX,
        maxX: mergedMaxX,
        height: Math.max(exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_VSPACE, subgraphEndY),
    };
}
function boundingBoxToLayoutDimensions(b) {
    return {
        width: b.maxX - b.minX,
        left: -b.minX + exports.FLOW_CANVAS_STEP_WIDTH / 2,
        right: b.maxX - exports.FLOW_CANVAS_STEP_WIDTH / 2,
    };
}
function positionBranchedChildren({ children, offsetX, offsetY, positions }) {
    let maxChildHeight = 0;
    if (children.length > 0) {
        const childBoundingBoxes = children.map(c => getFlowBoundingBox(c, true));
        const offsets = computeRouterChildOffsets(childBoundingBoxes.map(boundingBoxToLayoutDimensions));
        const childOffsetY = offsetY + exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_ROUTER_VOFFSET;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                buildPositions({ step: child, offsetX: offsetX + offsets[i], offsetY: childOffsetY, positions });
            }
            maxChildHeight = Math.max(maxChildHeight, childBoundingBoxes[i].height);
        }
    }
    return exports.FLOW_CANVAS_STEP_HEIGHT + exports.FLOW_CANVAS_ROUTER_VOFFSET + maxChildHeight + exports.FLOW_CANVAS_ARC + exports.FLOW_CANVAS_VSPACE;
}
function getContinueOnFailureBranchPair(step) {
    const branches = step.continueOnFailureBranches;
    return [branches === null || branches === void 0 ? void 0 : branches.onSuccess, branches === null || branches === void 0 ? void 0 : branches.onFailure];
}
function getStepBranchRelativeTo(ancestor, targetStepName) {
    if (!flow_structure_util_1.flowStructureUtil.hasContinueOnFailureBranches(ancestor)) {
        return null;
    }
    const [onSuccess, onFailure] = getContinueOnFailureBranchPair(ancestor);
    if (onSuccess && flow_structure_util_1.flowStructureUtil.getAllSteps(onSuccess).some((s) => s.name === targetStepName)) {
        return 'on-success';
    }
    if (onFailure && flow_structure_util_1.flowStructureUtil.getAllSteps(onFailure).some((s) => s.name === targetStepName)) {
        return 'on-failure';
    }
    return null;
}
exports.flowCanvasUtils = {
    /**
     * Compute canvas (x, y) positions for every step in a flow.
     * Positions match the frontend canvas layout algorithm.
     */
    computeStepPositions(trigger) {
        const positions = new Map();
        buildPositions({ step: trigger, offsetX: 0, offsetY: 0, positions });
        return positions;
    },
    getContinueOnFailureBranchPair,
    getStepBranchRelativeTo,
    computeRouterChildOffsets,
};
//# sourceMappingURL=flow-canvas-util.js.map