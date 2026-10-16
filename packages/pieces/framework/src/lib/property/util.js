"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.piecePropertiesUtils = void 0;
const tslib_1 = require("tslib");
const property_type_1 = require("./input/property-type");
const z = tslib_1.__importStar(require("zod/mini"));
const core_utils_1 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
function buildSchema(props, auth, requireAuth = true) {
    const entries = Object.entries(props);
    const propsSchema = {};
    for (const [name, property] of entries) {
        switch (property.type) {
            case property_type_1.PropertyType.MARKDOWN:
                propsSchema[name] = z.optional(z.union([z.null(), z.undefined(), z.never(), z.unknown()]));
                break;
            case property_type_1.PropertyType.DATE_TIME:
            case property_type_1.PropertyType.SHORT_TEXT:
            case property_type_1.PropertyType.LONG_TEXT:
            case property_type_1.PropertyType.RICH_TEXT:
            case property_type_1.PropertyType.COLOR:
            case property_type_1.PropertyType.FILE:
                propsSchema[name] = property.required
                    ? z.string().check(z.minLength(1))
                    : z.string();
                break;
            case property_type_1.PropertyType.CHECKBOX:
                propsSchema[name] = z.union([
                    z.boolean(),
                    z.string(),
                ]);
                break;
            case property_type_1.PropertyType.NUMBER:
                propsSchema[name] = z.union([
                    property.required ? z.string().check(z.minLength(1)) : z.string(),
                    z.number(),
                ]);
                break;
            case property_type_1.PropertyType.STATIC_DROPDOWN:
            case property_type_1.PropertyType.DROPDOWN:
                propsSchema[name] = z.unknown().check(z.refine((val) => val !== null && val !== undefined, { error: 'Value must not be null or undefined' }));
                break;
            case property_type_1.PropertyType.SECRET_TEXT:
                propsSchema[name] = property.required
                    ? z.string().check(z.minLength(1))
                    : z.string();
                break;
            case property_type_1.PropertyType.BASIC_AUTH:
            case property_type_1.PropertyType.CUSTOM_AUTH:
            case property_type_1.PropertyType.OAUTH2:
                break;
            case property_type_1.PropertyType.ARRAY: {
                const arrayItemSchema = (0, core_utils_1.isNil)(property.properties)
                    ? (property.required ? z.string().check(z.minLength(1)) : z.string())
                    : buildSchema(property.properties, undefined);
                propsSchema[name] = z.union([
                    property.required
                        ? z.array(arrayItemSchema).check(z.minLength(1))
                        : z.array(arrayItemSchema),
                    //for inline items mode
                    z.record(z.string(), z.unknown()),
                    //for normal dynamic input mode
                    property.required ? z.string().check(z.minLength(1)) : z.string(),
                ]);
                break;
            }
            case property_type_1.PropertyType.OBJECT:
                propsSchema[name] = z.union([
                    z.record(z.string(), z.any()),
                    property.required ? z.string().check(z.minLength(1)) : z.string(),
                ]);
                break;
            case property_type_1.PropertyType.DATE_RANGE:
                propsSchema[name] = z.union([
                    z.record(z.string(), z.any()),
                    z.string(),
                ]);
                break;
            case property_type_1.PropertyType.JSON:
                propsSchema[name] = z.union([
                    z.record(z.string(), z.any()),
                    z.array(z.any()),
                    property.required ? z.string().check(z.minLength(1)) : z.string(),
                ]);
                break;
            case property_type_1.PropertyType.MULTI_SELECT_DROPDOWN:
            case property_type_1.PropertyType.STATIC_MULTI_SELECT_DROPDOWN:
                propsSchema[name] = z.union([
                    property.required
                        ? z.array(z.any()).check(z.minLength(1))
                        : z.array(z.any()),
                    property.required ? z.string().check(z.minLength(1)) : z.string(),
                ]);
                break;
            case property_type_1.PropertyType.DYNAMIC:
                propsSchema[name] = z.record(z.string(), z.any());
                break;
            case property_type_1.PropertyType.CUSTOM:
                propsSchema[name] = z.unknown();
                break;
        }
        //optional array is checked against its children
        if (!property.required && property.type !== property_type_1.PropertyType.ARRAY) {
            propsSchema[name] = z.optional(z.union((0, core_utils_1.isEmpty)(propsSchema[name])
                ? [z.any(), z.null(), z.undefined()]
                : [propsSchema[name], z.null(), z.undefined()]));
        }
    }
    if (auth && requireAuth) {
        propsSchema[core_piece_types_1.AUTHENTICATION_PROPERTY_NAME] = z.string().check(z.minLength(1));
    }
    return z.object(propsSchema);
}
exports.piecePropertiesUtils = {
    buildSchema
};
//# sourceMappingURL=util.js.map