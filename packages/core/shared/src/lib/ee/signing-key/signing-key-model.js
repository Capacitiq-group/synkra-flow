"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigningKey = exports.KeyAlgorithm = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var KeyAlgorithm;
(function (KeyAlgorithm) {
    KeyAlgorithm["RSA"] = "RSA";
})(KeyAlgorithm || (exports.KeyAlgorithm = KeyAlgorithm = {}));
exports.SigningKey = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, publicKey: zod_1.z.string(), displayName: zod_1.z.string(), 
    /* algorithm used to generate this key pair */
    algorithm: zod_1.z.nativeEnum(KeyAlgorithm) }));
//# sourceMappingURL=signing-key-model.js.map