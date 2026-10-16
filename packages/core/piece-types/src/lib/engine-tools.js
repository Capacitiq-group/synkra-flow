"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeToolOutputToExecuteResponse = normalizeToolOutputToExecuteResponse;
const agents_1 = require("./agents");
function normalizeToolOutputToExecuteResponse(raw) {
    var _a, _b, _c, _d, _e;
    if (raw === null || typeof raw !== 'object') {
        return {
            status: agents_1.ExecutionToolStatus.FAILED,
            output: raw,
            resolvedInput: {},
            errorMessage: 'Invalid tool output',
        };
    }
    const o = raw;
    if (o['status'] === agents_1.ExecutionToolStatus.SUCCESS ||
        o['status'] === agents_1.ExecutionToolStatus.FAILED) {
        return {
            status: o['status'],
            output: o['output'],
            resolvedInput: (_a = o['resolvedInput']) !== null && _a !== void 0 ? _a : {},
            errorMessage: o['errorMessage'],
        };
    }
    const isError = o['isError'] === true;
    let output = o['structuredContent'];
    if (output === undefined && Array.isArray(o['content'])) {
        const parts = o['content']
            .map((c) => c === null || c === void 0 ? void 0 : c.text)
            .filter(Boolean);
        output =
            parts.length === 1
                ? parts[0]
                : parts.length
                    ? { text: parts.join('') }
                    : o['content'];
    }
    if (output === undefined) {
        output = o;
    }
    return {
        status: isError ? agents_1.ExecutionToolStatus.FAILED : agents_1.ExecutionToolStatus.SUCCESS,
        output,
        resolvedInput: {},
        errorMessage: isError
            ? (_e = (_d = (_c = (_b = o['content']) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : o['message']) !== null && _e !== void 0 ? _e : 'Tool failed'
            : undefined,
    };
}
//# sourceMappingURL=engine-tools.js.map