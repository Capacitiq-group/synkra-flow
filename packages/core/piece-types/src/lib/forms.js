"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFormResponse = exports.HumanInputFormResult = exports.HumanInputFormResultTypes = exports.FileResponseInterface = void 0;
exports.createKeyForFormInput = createKeyForFormInput;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const FileResponseInterfaceV1 = z.object({
    base64Url: z.string(),
    fileName: z.string(),
    extension: z.optional(z.string()),
});
const FileResponseInterfaceV2 = z.object({
    mimeType: z.string(),
    url: z.string(),
    fileName: z.optional(z.string()),
});
exports.FileResponseInterface = z.union([FileResponseInterfaceV1, FileResponseInterfaceV2]);
var HumanInputFormResultTypes;
(function (HumanInputFormResultTypes) {
    HumanInputFormResultTypes["FILE"] = "file";
    HumanInputFormResultTypes["MARKDOWN"] = "markdown";
})(HumanInputFormResultTypes || (exports.HumanInputFormResultTypes = HumanInputFormResultTypes = {}));
function createKeyForFormInput(displayName) {
    const inputKey = displayName
        .toLowerCase()
        .replace(/\s+(\w)/g, (_, letter) => letter.toUpperCase())
        .replace(/^(.)/, letter => letter.toLowerCase());
    /**We do this because react form inputs must not contain quotes */
    return inputKey.replaceAll(/[\\"''\n\r\t]/g, '');
}
exports.HumanInputFormResult = z.union([
    z.object({
        type: z.literal(HumanInputFormResultTypes.FILE),
        value: exports.FileResponseInterface,
    }),
    z.object({
        type: z.literal(HumanInputFormResultTypes.MARKDOWN),
        value: z.string(),
        files: z.optional(z.array(exports.FileResponseInterface)),
    }),
]);
exports.ChatFormResponse = z.object({
    sessionId: z.string(),
    message: z.string(),
    files: z.optional(z.array(z.string())),
});
//# sourceMappingURL=forms.js.map