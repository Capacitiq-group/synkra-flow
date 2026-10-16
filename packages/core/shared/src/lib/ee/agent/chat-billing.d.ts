declare function isPaidTool(toolName: string): boolean;
declare function isFlatBilledToolCall({ toolName, output }: ChatToolCall): boolean;
declare function creditsForTurn({ provider, toolCalls }: {
    provider: string | null;
    toolCalls: ChatToolCall[];
}): TurnCredits;
export declare const CHAT_CREDITS_PER_TOOL_CALL = 1;
export declare const chatBilling: {
    isPaidTool: typeof isPaidTool;
    isFlatBilledToolCall: typeof isFlatBilledToolCall;
    creditsForTurn: typeof creditsForTurn;
};
export type ChatToolCall = {
    toolName: string;
    output: unknown;
};
export type TurnCredits = {
    messageCredits: number;
    billedToolCalls: number;
    total: number;
};
export {};
