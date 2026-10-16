"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.RichTextProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { formatProperty: z.optional(z.string()) }), (0, common_1.TPropertyValue)(z.string(), property_type_1.PropertyType.RICH_TEXT).shape));
//# sourceMappingURL=rich-text-property.js.map