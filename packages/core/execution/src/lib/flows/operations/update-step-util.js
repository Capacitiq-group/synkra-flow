"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStepUtil = void 0;
const core_utils_1 = require("@activepieces/core-utils");
function contentOf(step) {
    var _a;
    const settings = Object.assign({}, ((_a = step.settings) !== null && _a !== void 0 ? _a : {}));
    const input = settings['input'];
    delete settings['input'];
    delete settings['sampleData'];
    delete settings['customLogoUrl'];
    return {
        type: step.type,
        input: input !== null && input !== void 0 ? input : {},
        optionSettings: (0, core_utils_1.prune)(settings),
    };
}
function preserveLastUpdatedDate({ existingStep, updatedStep }) {
    const contentChanged = !(0, core_utils_1.deepEquals)({ a: contentOf(existingStep), b: contentOf(updatedStep) });
    if (contentChanged) {
        return updatedStep;
    }
    return Object.assign(Object.assign({}, updatedStep), { lastUpdatedDate: existingStep.lastUpdatedDate });
}
exports.updateStepUtil = {
    preserveLastUpdatedDate,
};
//# sourceMappingURL=update-step-util.js.map