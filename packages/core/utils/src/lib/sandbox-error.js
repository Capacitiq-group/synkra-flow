"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sandboxError = void 0;
const utils_1 = require("./utils");
exports.sandboxError = {
    build({ error, stdout, stderr }) {
        var _a, _b;
        const payload = (0, utils_1.isString)(error) ? { message: error } : error;
        const builtError = new Error((_a = payload === null || payload === void 0 ? void 0 : payload.message) !== null && _a !== void 0 ? _a : 'Code execution failed');
        if (!(0, utils_1.isNil)(payload === null || payload === void 0 ? void 0 : payload.name)) {
            builtError.name = payload.name;
        }
        builtError.stack = `${(_b = payload === null || payload === void 0 ? void 0 : payload.stack) !== null && _b !== void 0 ? _b : builtError.stack}${formatCapturedOutput({ stdout, stderr })}`;
        return builtError;
    },
    payloadSource: `const toErrorPayload = (value) => {
    try {
        if (value instanceof Error) {
            return { message: value.message, name: value.name, stack: value.stack }
        }
        if (typeof value === 'string') {
            return { message: value }
        }
        return { message: JSON.stringify(value) ?? String(value) }
    }
    catch {
        return { message: 'Code execution failed' }
    }
}`,
};
function formatCapturedOutput({ stdout, stderr }) {
    const parts = [];
    if (stdout.trim()) {
        parts.push(`\n--- stdout ---\n${stdout.trim()}`);
    }
    if (stderr.trim()) {
        parts.push(`\n--- stderr ---\n${stderr.trim()}`);
    }
    return parts.join('');
}
//# sourceMappingURL=sandbox-error.js.map