"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsValidation = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.propsValidation = {
    validateZod(props, schema) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const schemaObj = z.object(Object.entries(schema).reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [key]: value })), {}));
            const result = yield z.safeParseAsync(schemaObj, props);
            if (!result.success) {
                const errors = result.error.issues.reduce((acc, issue) => (Object.assign(Object.assign({}, acc), { [issue.path.join('.')]: issue.message })), {});
                throw new Error(JSON.stringify({ errors }, null, 2));
            }
        });
    }
};
//# sourceMappingURL=index.js.map