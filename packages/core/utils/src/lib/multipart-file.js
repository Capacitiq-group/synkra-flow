"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultipartFile = exports.ApMultipartFile = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.ApMultipartFile = z.object({
    filename: z.string(),
    data: z.unknown(),
    type: z.literal('file'),
    mimetype: z.optional(z.string()),
});
const isMultipartFile = (value) => {
    return typeof value === 'object' && value !== null && 'type' in value && value.type === 'file' && 'filename' in value && 'data' in value && value.data instanceof Buffer;
};
exports.isMultipartFile = isMultipartFile;
//# sourceMappingURL=multipart-file.js.map