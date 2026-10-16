"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiChargeBasis = exports.ActivepiecesAiConsumerSource = void 0;
exports.aiChargeFor = aiChargeFor;
const permission_1 = require("./permission");
const utils_1 = require("./utils");
function aiChargeFor({ credentials, turnAlreadyCharged = false }) {
    if (credentials.provider !== permission_1.AIProviderName.ACTIVEPIECES) {
        return turnAlreadyCharged ? undefined : { basis: AiChargeBasis.FIXED_CREDITS };
    }
    const { apiKey } = credentials.auth;
    return { basis: AiChargeBasis.PROVIDER_REPORTED_COST, managedApiKey: (0, utils_1.isNil)(apiKey) || apiKey.length === 0 ? undefined : apiKey };
}
var ActivepiecesAiConsumerSource;
(function (ActivepiecesAiConsumerSource) {
    ActivepiecesAiConsumerSource["AI_STEP_IN_FLOW"] = "ai-step-in-flow";
    ActivepiecesAiConsumerSource["CHAT"] = "chat";
})(ActivepiecesAiConsumerSource || (exports.ActivepiecesAiConsumerSource = ActivepiecesAiConsumerSource = {}));
var AiChargeBasis;
(function (AiChargeBasis) {
    AiChargeBasis["PROVIDER_REPORTED_COST"] = "provider-reported-cost";
    AiChargeBasis["FIXED_CREDITS"] = "fixed-credits";
})(AiChargeBasis || (exports.AiChargeBasis = AiChargeBasis = {}));
//# sourceMappingURL=activepieces-ai-billing.js.map