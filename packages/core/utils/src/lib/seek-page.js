"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeekPage = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const base_model_1 = require("./base-model");
const SeekPage = (t) => z.object({
    data: z.array(t),
    next: (0, base_model_1.Nullable)(z.string()),
    previous: (0, base_model_1.Nullable)(z.string()),
});
exports.SeekPage = SeekPage;
//# sourceMappingURL=seek-page.js.map