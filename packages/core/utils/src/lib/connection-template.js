"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionTemplate = void 0;
const CONNECTION_TEMPLATE = /^\{\{connections\['([^']+)'\]\}\}$/;
function unwrapExternalId(auth) {
    var _a, _b;
    if (typeof auth !== 'string' || auth.length === 0) {
        return null;
    }
    return (_b = (_a = auth.match(CONNECTION_TEMPLATE)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : auth;
}
exports.connectionTemplate = { unwrapExternalId };
//# sourceMappingURL=connection-template.js.map