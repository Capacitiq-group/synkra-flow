"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatBilling = exports.CHAT_CREDITS_PER_TOOL_CALL = void 0;
const core_utils_1 = require("@activepieces/core-utils");
function isPaidTool(toolName) {
    return toolName.startsWith('mcp__') || FLAT_BILLED_TOOL_NAMES.has(toolName);
}
function isFlatBilledToolCall({ toolName, output }) {
    const paidAtCost = TOOLS_THAT_BILL_AT_COST.has(toolName) && (0, core_utils_1.isObject)(output) && output['billedAtCost'] === true;
    return isPaidTool(toolName) && !paidAtCost;
}
function creditsForTurn({ provider, toolCalls }) {
    const messageCredits = provider === core_utils_1.AIProviderName.ACTIVEPIECES ? 0 : CHAT_CREDITS_PER_OWN_KEY_TURN;
    const billedToolCalls = toolCalls.filter(isFlatBilledToolCall).length;
    return { messageCredits, billedToolCalls, total: messageCredits + billedToolCalls * exports.CHAT_CREDITS_PER_TOOL_CALL };
}
const FLAT_BILLED_TOOL_NAMES = new Set([
    'ap_web_search',
    'ap_scrape_url',
    'ap_generate_image',
    'ap_execute_action',
    'ap_explore_data',
    'ap_run_code',
]);
const TOOLS_THAT_BILL_AT_COST = new Set(['ap_web_search', 'ap_generate_image']);
const CHAT_CREDITS_PER_OWN_KEY_TURN = 1;
exports.CHAT_CREDITS_PER_TOOL_CALL = 1;
exports.chatBilling = {
    isPaidTool,
    isFlatBilledToolCall,
    creditsForTurn,
};
//# sourceMappingURL=chat-billing.js.map