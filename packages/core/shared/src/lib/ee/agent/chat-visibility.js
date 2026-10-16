"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatVisibility = void 0;
const flag_1 = require("../../core/flag/flag");
function resolveChatEnabled({ edition, isEmbedded, planChatEnabled }) {
    const chatUnavailable = isEmbedded || edition === flag_1.ApEdition.COMMUNITY;
    return !chatUnavailable && planChatEnabled;
}
exports.chatVisibility = {
    resolveChatEnabled,
};
//# sourceMappingURL=chat-visibility.js.map