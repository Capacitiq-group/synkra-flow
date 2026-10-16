/**
 * Two-phase tool visibility: in DISCOVERY the agent sees only read/understand
 * tools; the flow-construction/editing/publishing/table-write tools stay hidden
 * until it starts building. Denylist (not allowlist) on purpose — an unclassified
 * new tool degrades to "noisier discovery", never to "a needed tool vanished".
 */
declare function taintsTurn(toolName: string): boolean;
declare function activeToolsForPhase({ phase, allToolNames }: {
    phase: AgentPhase;
    allToolNames: string[];
}): string[];
declare function isBuildOnlyTool(toolName: string): boolean;
declare function isAgentHiddenTool(toolName: string): boolean;
export declare const AGENT_SELF_EDIT_TOOLS: readonly string[];
export declare const AGENT_SURFACE_TOOLS: readonly string[];
export type AgentPhase = 'discovery' | 'build';
export declare const agentToolPhases: {
    activeToolsForPhase: typeof activeToolsForPhase;
    isBuildOnlyTool: typeof isBuildOnlyTool;
    isAgentHiddenTool: typeof isAgentHiddenTool;
    taintsTurn: typeof taintsTurn;
};
export {};
