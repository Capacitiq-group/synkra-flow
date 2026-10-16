"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreScope = exports.PieceServerContextError = void 0;
exports.isPieceServerContextError = isPieceServerContextError;
class PieceServerContextError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PieceServerContextError';
    }
}
exports.PieceServerContextError = PieceServerContextError;
function isPieceServerContextError(error) {
    return error instanceof Error && error.name === 'PieceServerContextError';
}
var StoreScope;
(function (StoreScope) {
    // Collection were deprecated in favor of project
    StoreScope["PROJECT"] = "COLLECTION";
    StoreScope["FLOW"] = "FLOW";
})(StoreScope || (exports.StoreScope = StoreScope = {}));
//# sourceMappingURL=index.js.map