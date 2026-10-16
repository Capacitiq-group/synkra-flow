"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorHex = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.ColorHex = z.string().check(z.regex(/^#[0-9A-Fa-f]{6}$/));
//# sourceMappingURL=color.js.map