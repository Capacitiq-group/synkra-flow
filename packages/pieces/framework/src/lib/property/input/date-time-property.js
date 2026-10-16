"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.DateTimeProperty = z.object(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.string(), property_type_1.PropertyType.DATE_TIME).shape));
//# sourceMappingURL=date-time-property.js.map