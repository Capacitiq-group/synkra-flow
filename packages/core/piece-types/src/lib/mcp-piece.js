"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McpTrigger = exports.McpProperty = exports.McpPropertyType = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
var McpPropertyType;
(function (McpPropertyType) {
    McpPropertyType["TEXT"] = "Text";
    McpPropertyType["BOOLEAN"] = "Boolean";
    McpPropertyType["DATE"] = "Date";
    McpPropertyType["NUMBER"] = "Number";
    McpPropertyType["ARRAY"] = "Array";
    McpPropertyType["OBJECT"] = "Object";
})(McpPropertyType || (exports.McpPropertyType = McpPropertyType = {}));
exports.McpProperty = z.object({
    name: z.string(),
    description: z.optional(z.string()),
    type: z.string(),
    required: z.boolean(),
});
exports.McpTrigger = z.object({
    pieceName: z.string(),
    triggerName: z.string(),
    input: z.object({
        toolName: z.string(),
        toolDescription: z.string(),
        inputSchema: z.array(exports.McpProperty),
        returnsResponse: z.boolean(),
    }),
});
//# sourceMappingURL=mcp-piece.js.map