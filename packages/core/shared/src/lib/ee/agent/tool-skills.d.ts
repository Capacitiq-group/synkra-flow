import { AgentRunSource } from '@activepieces/core-execution';
declare function surfaceFor({ source }: {
    source: AgentRunSource;
}): SkillSurface | null;
declare function coreToolNames({ surface }: {
    surface: SkillSurface;
}): readonly string[];
declare function findSkill({ name }: {
    name: string;
}): AgentSkill | undefined;
declare function isMetaTool(toolName: string): boolean;
declare function effectiveToolCall({ toolName, input }: {
    toolName: string;
    input: unknown;
}): EffectiveToolCall;
declare function uncataloguedToolNames({ surface, allToolNames }: {
    surface: SkillSurface;
    allToolNames: string[];
}): string[];
declare function renderToolCatalog({ tools }: {
    tools: {
        name: string;
        description?: string;
    }[];
}): string;
declare function renderSkillsNote({ surface }: {
    surface: SkillSurface;
}): string;
declare const SKILLS_NOTE_HEADING = "## Skills and tools";
declare const LAZY_TOOL_NAME = "ap_lazy_tool";
declare const LOAD_SKILL_NAME = "ap_load_skill";
declare const GET_TOOL_SCHEMA_NAME = "ap_get_tool_schema";
declare const MAX_CORE_TOOLS = 16;
declare const CORE_TOOL_NAMES: Record<SkillSurface, readonly string[]>;
declare const AGENT_SKILLS: readonly AgentSkill[];
export declare const agentToolSkills: {
    surfaceFor: typeof surfaceFor;
    coreToolNames: typeof coreToolNames;
    findSkill: typeof findSkill;
    isMetaTool: typeof isMetaTool;
    effectiveToolCall: typeof effectiveToolCall;
    uncataloguedToolNames: typeof uncataloguedToolNames;
    renderToolCatalog: typeof renderToolCatalog;
    renderSkillsNote: typeof renderSkillsNote;
};
export { AGENT_SKILLS, CORE_TOOL_NAMES, LAZY_TOOL_NAME, GET_TOOL_SCHEMA_NAME, LOAD_SKILL_NAME, MAX_CORE_TOOLS, SKILLS_NOTE_HEADING };
export type SkillSurface = 'CHAT' | 'AGENT';
export type AgentSkill = {
    name: string;
    loadWhen: string;
    guideTopic?: string;
    entersBuildPhase: boolean;
    toolNames: string[];
};
type EffectiveToolCall = {
    toolName: string;
    input: unknown;
};
