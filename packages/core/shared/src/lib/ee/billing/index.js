"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFreeLegacyEligible = exports.FREE_LEGACY_CUTOFF_ISO = exports.LEGACY_FREE_PLANS = exports.LEGACY_STANDARD_PLAN = exports.isAppSumoCreditedPlan = exports.hasActiveSubscription = exports.PLATFORM_PURGE_DELAY_DAYS = exports.isCloudPlanButNotEnterprise = exports.OPEN_SOURCE_PLAN = exports.AUTUMN_FREE_PLAN = exports.CancelSubscriptionRequest = exports.CANCELLATION_COMMENT_MAX_LENGTH = exports.CancellationReason = exports.SetupPaymentParams = exports.ConsumableProductAutoTopupParams = exports.PurchasablePlan = exports.CheckoutSessionResponse = exports.CheckoutPlanParamsSchema = exports.AdjustUnconsumableFeatureQuantityParams = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const platform_1 = require("../../management/platform");
exports.AdjustUnconsumableFeatureQuantityParams = zod_1.z.object({
    featureId: zod_1.z.enum(platform_1.UnconsumableFeatureId),
    quantity: zod_1.z.number().int().nonnegative(),
});
exports.CheckoutPlanParamsSchema = zod_1.z.object({
    planId: zod_1.z.string(),
    successUrl: zod_1.z.string().optional(),
});
exports.CheckoutSessionResponse = zod_1.z.object({
    checkoutUrl: (0, core_utils_1.Nullable)(zod_1.z.string()),
});
exports.PurchasablePlan = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    description: (0, core_utils_1.Nullable)(zod_1.z.string()),
    price: (0, core_utils_1.Nullable)(zod_1.z.number()),
    interval: (0, core_utils_1.Nullable)(zod_1.z.string()),
    priceDisplay: (0, core_utils_1.Nullable)(zod_1.z.string()),
    baseVariantId: (0, core_utils_1.Nullable)(zod_1.z.string()),
    includedSeats: (0, core_utils_1.Nullable)(zod_1.z.number()),
    includedCredits: (0, core_utils_1.Nullable)(zod_1.z.number()),
    creditsResetInterval: (0, core_utils_1.Nullable)(zod_1.z.string()),
});
exports.ConsumableProductAutoTopupParams = zod_1.z.discriminatedUnion('state', [
    zod_1.z.object({
        state: zod_1.z.literal(platform_1.AiCreditsAutoTopUpState.ENABLED),
        minThreshold: zod_1.z.number().int().nonnegative(),
        creditsToAdd: zod_1.z.number().int().positive(),
        maxMonthlyTopUps: (0, core_utils_1.Nullable)(zod_1.z.number().int().positive()),
        featureId: zod_1.z.enum(platform_1.ConsumableFeatureId),
    }),
    zod_1.z.object({
        state: zod_1.z.literal(platform_1.AiCreditsAutoTopUpState.DISABLED),
        featureId: zod_1.z.enum(platform_1.ConsumableFeatureId),
    }),
]);
exports.SetupPaymentParams = zod_1.z.object({
    redirectUrl: zod_1.z.string().optional(),
});
var CancellationReason;
(function (CancellationReason) {
    CancellationReason["SWITCHING_TO_ANOTHER_TOOL"] = "switching_to_another_tool";
    CancellationReason["MISSING_INTEGRATIONS"] = "missing_integrations";
    CancellationReason["NO_NEED_RIGHT_NOW"] = "no_need_right_now";
    CancellationReason["FREE_PLAN_IS_ENOUGH"] = "free_plan_is_enough";
    CancellationReason["BUGS_OR_TECHNICAL_ISSUES"] = "bugs_or_technical_issues";
    CancellationReason["TOO_EXPENSIVE"] = "too_expensive";
})(CancellationReason || (exports.CancellationReason = CancellationReason = {}));
exports.CANCELLATION_COMMENT_MAX_LENGTH = 2000;
exports.CancelSubscriptionRequest = zod_1.z.object({
    reasons: zod_1.z.array(zod_1.z.enum(CancellationReason)).default([]),
    comment: zod_1.z.string().max(exports.CANCELLATION_COMMENT_MAX_LENGTH).optional(),
});
exports.AUTUMN_FREE_PLAN = {
    plan: 'free',
    tablesEnabled: true,
    eventStreamingEnabled: true,
    includedCredits: 100,
    activeFlowsLimit: undefined,
    projectsLimit: undefined,
    embeddingEnabled: true,
    aiProvidersEnabled: true,
    chatEnabled: true,
    agentsEnabled: true,
    workerGroupsEnabled: true,
    globalConnectionsEnabled: true,
    customRolesEnabled: true,
    environmentsEnabled: true,
    analyticsEnabled: true,
    showPoweredBy: false,
    auditLogEnabled: true,
    managePiecesEnabled: true,
    manageTemplatesEnabled: true,
    customAppearanceEnabled: true,
    billedTeamProjectsLimit: 100,
    projectRolesEnabled: true,
    apiKeysEnabled: true,
    ssoEnabled: true,
    secretManagersEnabled: true,
    scimEnabled: true,
    dedicatedWorkers: null,
    canary: false,
    customDomainsEnabled: true,
};
exports.OPEN_SOURCE_PLAN = {
    tablesEnabled: true,
    embeddingEnabled: false,
    aiProvidersEnabled: true,
    chatEnabled: false,
    agentsEnabled: false,
    workerGroupsEnabled: false,
    globalConnectionsEnabled: false,
    customRolesEnabled: false,
    includedCredits: 0,
    environmentsEnabled: false,
    eventStreamingEnabled: false,
    analyticsEnabled: true,
    showPoweredBy: false,
    auditLogEnabled: false,
    managePiecesEnabled: true,
    manageTemplatesEnabled: true,
    customAppearanceEnabled: true,
    billedTeamProjectsLimit: 1,
    projectRolesEnabled: false,
    apiKeysEnabled: false,
    ssoEnabled: false,
    secretManagersEnabled: false,
    scimEnabled: false,
    dedicatedWorkers: null,
    canary: false,
    customDomainsEnabled: false,
};
const isCloudPlanButNotEnterprise = (plan) => {
    if ((0, core_utils_1.isNil)(plan)) {
        return false;
    }
    return plan === platform_1.PlanName.FREE || plan === platform_1.PlanName.APPSUMO || plan === platform_1.PlanName.FREE_LEGACY;
};
exports.isCloudPlanButNotEnterprise = isCloudPlanButNotEnterprise;
exports.PLATFORM_PURGE_DELAY_DAYS = 7;
const hasActiveSubscription = (plan) => {
    return !(0, core_utils_1.isNil)(plan) && !(0, exports.isCloudPlanButNotEnterprise)(plan);
};
exports.hasActiveSubscription = hasActiveSubscription;
const isAppSumoCreditedPlan = (plan) => {
    if ((0, core_utils_1.isNil)(plan)) {
        return false;
    }
    return plan.toLowerCase().includes(platform_1.PlanName.APPSUMO) || plan === platform_1.PlanName.FREE_LEGACY;
};
exports.isAppSumoCreditedPlan = isAppSumoCreditedPlan;
exports.LEGACY_STANDARD_PLAN = 'standard';
exports.LEGACY_FREE_PLANS = [platform_1.PlanName.FREE, exports.LEGACY_STANDARD_PLAN];
exports.FREE_LEGACY_CUTOFF_ISO = '2026-07-30T00:00:00.000Z';
const isFreeLegacyEligible = ({ plan, created }) => {
    if ((0, core_utils_1.isNil)(plan) || (0, core_utils_1.isNil)(created) || !exports.LEGACY_FREE_PLANS.includes(plan)) {
        return false;
    }
    const createdAt = Date.parse(created);
    return !Number.isNaN(createdAt) && createdAt < Date.parse(exports.FREE_LEGACY_CUTOFF_ISO);
};
exports.isFreeLegacyEligible = isFreeLegacyEligible;
//# sourceMappingURL=index.js.map