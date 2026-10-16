"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addActionUtils = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const core_utils_1 = require("@activepieces/core-utils");
const flow_structure_util_1 = require("../util/flow-structure-util");
function mapToNewNames(flowVersion, clonedActions) {
    const existingNames = flow_structure_util_1.flowStructureUtil.getAllSteps(flowVersion.trigger)
        .map(step => step.name);
    const oldStepNames = clonedActions.flatMap(clonedAction => flow_structure_util_1.flowStructureUtil.getAllSteps(clonedAction).map(step => step.name));
    return oldStepNames.reduce((nameMap, oldName) => {
        const newName = flow_structure_util_1.flowStructureUtil.findUnusedName(existingNames);
        existingNames.push(newName);
        return Object.assign(Object.assign({}, nameMap), { [oldName]: newName });
    }, {});
}
function remapStepReferences({ text, oldNameToNewName }) {
    // TODO: replace this naive /{{(.*?)}}/g tokenizer with `extractMustacheTokens`
    // from @activepieces/core-utils. The lazy regex stops at the first `}}`, so a token
    // whose content contains `}}` (e.g. a string literal) is truncated and the
    // trailing step name is not renamed on duplicate/paste. Swap deferred — needs
    // duplicate/paste re-testing in the builder before landing.
    return text.replace(/{{(.*?)}}/g, (_token, expression) => `{{${expression.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (identifier) => { var _a; return (_a = oldNameToNewName[identifier]) !== null && _a !== void 0 ? _a : identifier; })}}}`);
}
function clone(step, oldNameToNewName) {
    step.displayName = `${step.displayName} Copy`;
    step.name = oldNameToNewName[step.name];
    if (step.settings.sampleData) {
        step.settings = Object.assign(Object.assign({}, step.settings), { sampleData: {} });
    }
    const sourceCode = 'sourceCode' in step.settings ? step.settings.sourceCode : undefined;
    step.settings = (0, core_utils_1.applyFunctionToValuesSync)(step.settings, (value) => remapStepReferences({ text: value, oldNameToNewName }));
    if (!(0, core_utils_1.isNil)(sourceCode) && 'sourceCode' in step.settings) {
        step.settings.sourceCode = sourceCode;
    }
    step.lastUpdatedDate = (0, dayjs_1.default)().toISOString();
    return step;
}
exports.addActionUtils = {
    mapToNewNames,
    clone,
};
//# sourceMappingURL=add-action-util.js.map