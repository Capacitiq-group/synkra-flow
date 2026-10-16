"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileProperty = exports.ApFile = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
class ApFile {
    constructor(filename, data, extension) {
        this.filename = filename;
        this.data = data;
        this.extension = extension;
    }
    get base64() {
        return this.data.toString('base64');
    }
}
exports.ApFile = ApFile;
exports.FileProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { streaming: z.optional(z.boolean()) }), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.FILE).shape));
//# sourceMappingURL=file-property.js.map