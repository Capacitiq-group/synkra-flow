"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalArrayFromQuery = exports.OptionalIsoDateTimeQuery = exports.OptionalBooleanFromQuery = exports.Nullable = exports.BaseModelSchema = exports.DateOrString = void 0;
exports.NullableEnum = NullableEnum;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.DateOrString = z.pipe(z.transform((val) => (val instanceof Date ? val.toISOString() : val)), z.string());
exports.BaseModelSchema = {
    id: z.string(),
    created: exports.DateOrString,
    updated: exports.DateOrString,
};
// Used to generate valid nullable in OpenAPI Schema
const Nullable = (schema) => z.optional(z.nullable(schema));
exports.Nullable = Nullable;
function NullableEnum(enumObj) {
    return z.optional(z.nullable(z.enum(enumObj)));
}
exports.OptionalBooleanFromQuery = z.pipe(z.transform((val) => val === 'true' || val === true ? true : val === 'false' || val === false ? false : undefined), z.optional(z.boolean()));
exports.OptionalIsoDateTimeQuery = z.optional(z.iso.datetime({ offset: true }).check(z.refine((val) => val.slice(0, 4) !== '0000')));
const OptionalArrayFromQuery = (schema) => z.pipe(z.transform((val) => (Array.isArray(val) ? val : val !== undefined ? [val] : undefined)), z.optional(z.array(schema)));
exports.OptionalArrayFromQuery = OptionalArrayFromQuery;
//# sourceMappingURL=base-model.js.map