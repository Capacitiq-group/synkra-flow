"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secureApId = exports.apId = exports.ApId = void 0;
const tslib_1 = require("tslib");
const nanoid_1 = require("nanoid");
const z = tslib_1.__importStar(require("zod/mini"));
const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const ID_LENGTH = 21;
exports.ApId = z.string().check(z.regex(new RegExp(`^[0-9a-zA-Z]{${ID_LENGTH}}$`)));
exports.apId = (0, nanoid_1.customAlphabet)(ALPHABET, ID_LENGTH);
const secureApId = (length) => (0, nanoid_1.customAlphabet)(ALPHABET, length)();
exports.secureApId = secureApId;
//# sourceMappingURL=id-generator.js.map