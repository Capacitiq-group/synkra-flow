"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateRangeUtils = exports.DateRangeProperty = exports.DateRangeValue = exports.DateRangePreset = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const common_1 = require("./common");
const property_type_1 = require("./property-type");
exports.DateRangePreset = z.enum([
    'any_time',
    'last_24_hours',
    'last_7_days',
    'last_30_days',
    'last_90_days',
    'this_month',
    'custom',
]);
exports.DateRangeValue = z.object({
    preset: z.optional(exports.DateRangePreset),
    after: z.optional(z.string()),
    before: z.optional(z.string()),
});
exports.DateRangeProperty = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePropertySchema.shape), { display: z.optional(z.enum(['dropdown'])) }), (0, common_1.TPropertyValue)(exports.DateRangeValue, property_type_1.PropertyType.DATE_RANGE).shape));
function isoDaysAgo(days) {
    return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}
function startOfThisMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
}
// Relative presets are resolved against "now" so recurring flows roll forward.
function resolve(value) {
    if (!value || !value.preset || value.preset === 'any_time') {
        return {};
    }
    switch (value.preset) {
        case 'last_24_hours':
            return { after: isoDaysAgo(1) };
        case 'last_7_days':
            return { after: isoDaysAgo(7) };
        case 'last_30_days':
            return { after: isoDaysAgo(30) };
        case 'last_90_days':
            return { after: isoDaysAgo(90) };
        case 'this_month':
            return { after: startOfThisMonth() };
        case 'custom':
            return {
                after: value.after && value.after.length > 0 ? value.after : undefined,
                before: value.before && value.before.length > 0 ? value.before : undefined,
            };
        default:
            return {};
    }
}
exports.dateRangeUtils = { resolve };
//# sourceMappingURL=date-range-property.js.map