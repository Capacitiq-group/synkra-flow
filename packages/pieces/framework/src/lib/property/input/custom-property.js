"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomProperty = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
// Code should be a valid javascript function that takes a single argument which is an object
/*
(ctx: {containerId:string, value: unknown, onChange: (value: unknown) => void, isEmbeded: boolean, projectId:string}) => void
*/
exports.CustomProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), (0, common_1.TPropertyValue)(z.unknown(), property_type_1.PropertyType.CUSTOM).shape), { code: z.string() }));
//# sourceMappingURL=custom-property.js.map