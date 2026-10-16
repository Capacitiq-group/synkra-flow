import { CodeAction, FlowAction, PieceAction } from '../actions/action';
import { FlowTrigger } from '../triggers/trigger';
export declare const FLOW_CANVAS_STEP_HEIGHT = 60;
export declare const FLOW_CANVAS_STEP_WIDTH = 232;
export declare const FLOW_CANVAS_VSPACE = 60;
export declare const FLOW_CANVAS_ARC = 15;
export declare const FLOW_CANVAS_LOOP_VOFFSET: number;
export declare const FLOW_CANVAS_ROUTER_VOFFSET: number;
export declare const FLOW_CANVAS_HSPACE = 80;
type Step = FlowAction | FlowTrigger;
declare function computeRouterChildOffsets(boundingBoxes: ReadonlyArray<{
    width: number;
    left: number;
    right: number;
}>, branchGap?: number): number[];
declare function getContinueOnFailureBranchPair(step: CodeAction | PieceAction): (FlowAction | undefined)[];
declare function getStepBranchRelativeTo(ancestor: Step | FlowAction, targetStepName: string): 'on-success' | 'on-failure' | null;
export declare const flowCanvasUtils: {
    /**
     * Compute canvas (x, y) positions for every step in a flow.
     * Positions match the frontend canvas layout algorithm.
     */
    computeStepPositions(trigger: FlowTrigger): Map<string, {
        x: number;
        y: number;
    }>;
    getContinueOnFailureBranchPair: typeof getContinueOnFailureBranchPair;
    getStepBranchRelativeTo: typeof getStepBranchRelativeTo;
    computeRouterChildOffsets: typeof computeRouterChildOffsets;
};
export {};
