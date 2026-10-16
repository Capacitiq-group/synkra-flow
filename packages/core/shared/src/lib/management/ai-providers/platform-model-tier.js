"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlatformModelTierRequest = exports.ReorderPlatformModelTiersRequest = exports.UpdatePlatformModelTierRequest = exports.CreatePlatformModelTierRequest = exports.PlatformModelTierSummary = exports.PlatformModelTier = exports.PlatformModelTierEntry = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const LIMITS = {
    maxEntries: 5,
    nameMaxLength: 40,
    descriptionMaxLength: 120,
    emojiMaxLength: 16,
    minThinkingBudget: 1024,
    maxThinkingBudget: 64000,
};
function isOffOrEnoughToThink(budget) {
    return budget === 0 || budget >= LIMITS.minThinkingBudget;
}
function hasNoDuplicateEntries(entries) {
    return new Set(entries.map((entry) => `${entry.configId}:${entry.modelId}`)).size === entries.length;
}
const TierName = zod_1.z.string().trim().min(1, core_utils_1.formErrors.required).max(LIMITS.nameMaxLength, core_utils_1.formErrors.tierNameTooLong);
const TierEmoji = zod_1.z.string().min(1, core_utils_1.formErrors.required).max(LIMITS.emojiMaxLength, core_utils_1.formErrors.invalidEmoji).regex(/^(\p{Extended_Pictographic}|\p{Regional_Indicator})/u, core_utils_1.formErrors.invalidEmoji);
const TierDescription = zod_1.z.string().trim().max(LIMITS.descriptionMaxLength, core_utils_1.formErrors.tierDescriptionTooLong);
const TierThinkingBudget = zod_1.z.number().int(core_utils_1.formErrors.wholeNumber).max(LIMITS.maxThinkingBudget, core_utils_1.formErrors.tierThinkingBudgetInvalid)
    .refine(isOffOrEnoughToThink, core_utils_1.formErrors.tierThinkingBudgetInvalid);
exports.PlatformModelTierEntry = zod_1.z.object({
    configId: core_utils_1.ApId,
    modelId: zod_1.z.string().min(1, core_utils_1.formErrors.required).max(256),
});
const TierEntries = zod_1.z.array(exports.PlatformModelTierEntry)
    .min(1, core_utils_1.formErrors.atLeastOne)
    .max(LIMITS.maxEntries, core_utils_1.formErrors.tierTooManyModels)
    .refine(hasNoDuplicateEntries, core_utils_1.formErrors.tierDuplicateModel);
exports.PlatformModelTier = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: core_utils_1.ApId, name: zod_1.z.string(), emoji: zod_1.z.string(), description: (0, core_utils_1.Nullable)(zod_1.z.string()), position: zod_1.z.number().int(), entries: zod_1.z.array(exports.PlatformModelTierEntry), isDefault: zod_1.z.boolean(), isFast: zod_1.z.boolean(), thinkingBudget: (0, core_utils_1.Nullable)(zod_1.z.number().int()), deleted: (0, core_utils_1.Nullable)(core_utils_1.DateOrString), replacedBy: (0, core_utils_1.Nullable)(core_utils_1.ApId) }));
exports.PlatformModelTierSummary = zod_1.z.object({
    id: core_utils_1.ApId,
    name: zod_1.z.string(),
    emoji: zod_1.z.string(),
    description: (0, core_utils_1.Nullable)(zod_1.z.string()),
    position: zod_1.z.number().int(),
    isDefault: zod_1.z.boolean(),
    isFast: zod_1.z.boolean(),
    mainModel: (0, core_utils_1.Nullable)(zod_1.z.object({
        provider: zod_1.z.enum(core_utils_1.AIProviderName),
        modelId: zod_1.z.string(),
    })),
    fallbackCount: zod_1.z.number().int(),
});
exports.CreatePlatformModelTierRequest = zod_1.z.object({
    name: TierName,
    emoji: TierEmoji,
    description: (0, core_utils_1.Nullable)(TierDescription),
    entries: TierEntries,
    thinkingBudget: (0, core_utils_1.Nullable)(TierThinkingBudget),
});
exports.UpdatePlatformModelTierRequest = zod_1.z.object({
    name: TierName.optional(),
    emoji: TierEmoji.optional(),
    description: (0, core_utils_1.Nullable)(TierDescription),
    entries: TierEntries.optional(),
    thinkingBudget: (0, core_utils_1.Nullable)(TierThinkingBudget),
    isDefault: zod_1.z.literal(true).optional(),
    isFast: zod_1.z.literal(true).optional(),
});
exports.ReorderPlatformModelTiersRequest = zod_1.z.object({
    tierIds: zod_1.z.array(core_utils_1.ApId).min(1, core_utils_1.formErrors.atLeastOne),
});
exports.DeletePlatformModelTierRequest = zod_1.z.object({
    replacedBy: zod_1.z.optional(core_utils_1.ApId),
});
//# sourceMappingURL=platform-model-tier.js.map