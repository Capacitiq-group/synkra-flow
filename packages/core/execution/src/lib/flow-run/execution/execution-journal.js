"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionJournal = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const action_1 = require("../../flows/actions/action");
const step_output_1 = require("./step-output");
exports.executionJournal = {
    upsertStep({ stepName, stepOutput, path, steps, createLoopIterationIfNotExists }) {
        var _a, _b, _c, _d, _e, _f;
        if (path.length === 0) {
            return Object.assign({}, steps, { [stepName]: stepOutput });
        }
        const [[parentStepName, iteration], ...remainingPath] = path;
        const parentStep = (_a = steps[parentStepName]) !== null && _a !== void 0 ? _a : (createLoopIterationIfNotExists ? step_output_1.LoopStepOutput.init({ input: null }) : undefined);
        if ((0, core_utils_1.isNil)(parentStep)) {
            throw new Error(`Step ${parentStepName} not found in path ${path}`);
        }
        if (parentStep.type !== action_1.FlowActionType.LOOP_ON_ITEMS) {
            throw new Error(`Step ${parentStepName} is not a loop on items step in path ${path}`);
        }
        const iterations = [...(_c = (_b = parentStep.output) === null || _b === void 0 ? void 0 : _b.iterations) !== null && _c !== void 0 ? _c : []];
        const iterationOutput = iterations[iteration];
        if ((0, core_utils_1.isNil)(iterationOutput) && !createLoopIterationIfNotExists) {
            throw new Error(`Iteration ${iteration} not found in path ${path}`);
        }
        while (iterations.length <= iteration) {
            iterations.push({});
        }
        iterations[iteration] = this.upsertStep({
            stepName,
            stepOutput,
            path: remainingPath,
            steps: iterationOutput !== null && iterationOutput !== void 0 ? iterationOutput : {},
            createLoopIterationIfNotExists,
        });
        return Object.assign(Object.assign({}, steps), { [parentStepName]: new step_output_1.LoopStepOutput(Object.assign(Object.assign({}, parentStep), { output: {
                    item: (_d = parentStep.output) === null || _d === void 0 ? void 0 : _d.item,
                    index: (_f = (_e = parentStep.output) === null || _e === void 0 ? void 0 : _e.index) !== null && _f !== void 0 ? _f : 0,
                    iterations,
                } })) });
    },
    getStep({ stepName, path, steps }) {
        return this.getStateAtPath({ path, steps })[stepName];
    },
    getStateAtPath({ path, steps }) {
        var _a;
        let target = steps;
        for (const [parentStepName, iteration] of path) {
            const step = target[parentStepName];
            if (!step) {
                throw new Error(`Step ${parentStepName} not found in path ${path}`);
            }
            if (step.type !== action_1.FlowActionType.LOOP_ON_ITEMS) {
                throw new Error(`Step ${parentStepName} is not a loop on items step in path ${path}`);
            }
            const loopStepOutput = step;
            const iterationOutput = (_a = loopStepOutput.output) === null || _a === void 0 ? void 0 : _a.iterations[iteration];
            if (!iterationOutput) {
                throw new Error(`Iteration ${iteration} not found in path ${path}`);
            }
            target = iterationOutput;
        }
        return target;
    },
    findLastStepWithStatus(steps, status) {
        let lastStepWithStatus = null;
        Object.entries(steps).forEach(([stepName, step]) => {
            if (step.type === action_1.FlowActionType.LOOP_ON_ITEMS && step.output) {
                const iterations = step.output.iterations;
                iterations.forEach((iteration) => {
                    const lastOneInIteration = this.findLastStepWithStatus(iteration, status);
                    if (!(0, core_utils_1.isNil)(lastOneInIteration)) {
                        lastStepWithStatus = lastOneInIteration;
                    }
                });
            }
            if ((0, core_utils_1.isNil)(status)) {
                lastStepWithStatus = stepName;
                return;
            }
            if (step.status === status) {
                lastStepWithStatus = stepName;
                return;
            }
        });
        return lastStepWithStatus;
    },
    getLoopSteps(steps) {
        let result = {};
        Object.entries(steps).forEach(([stepName, step]) => {
            var _a;
            if (step.type === action_1.FlowActionType.LOOP_ON_ITEMS) {
                const iterationsResult = (_a = step.output) === null || _a === void 0 ? void 0 : _a.iterations.reduce((acc, iteration) => {
                    return Object.assign(Object.assign({}, acc), this.getLoopSteps(iteration));
                }, {});
                if ((0, core_utils_1.isNil)(iterationsResult)) {
                    result[stepName] = step;
                    return;
                }
                result = Object.assign(Object.assign(Object.assign({}, result), iterationsResult), { [stepName]: step });
            }
        });
        return result;
    },
    isChildOf(parent, child) {
        var _a;
        if (parent.type !== action_1.FlowActionType.LOOP_ON_ITEMS)
            return false;
        if (!((_a = parent.output) === null || _a === void 0 ? void 0 : _a.iterations))
            return false;
        for (const iteration of parent.output.iterations) {
            for (const [name, output] of Object.entries(iteration)) {
                if (name === child)
                    return true;
                if (this.isChildOf(output, child))
                    return true;
            }
        }
        return false;
    },
    getPathToStep(steps, stepName, loopsIndexes, currentPath = []) {
        var _a;
        for (const [currentStepName, step] of Object.entries(steps)) {
            if (currentStepName === stepName) {
                return currentPath;
            }
            if (step.type !== action_1.FlowActionType.LOOP_ON_ITEMS)
                continue;
            if (!((_a = step.output) === null || _a === void 0 ? void 0 : _a.iterations))
                continue;
            for (const iteration of step.output.iterations) {
                const nestedPath = this.getPathToStep(iteration, stepName, loopsIndexes, [...currentPath, [currentStepName, loopsIndexes[currentStepName]]]);
                if (nestedPath)
                    return nestedPath;
            }
        }
        return undefined;
    },
};
//# sourceMappingURL=execution-journal.js.map