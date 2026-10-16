import { z } from 'zod';
import { AiCreditsAutoTopUpState, ConsumableFeatureId, PlatformPlanWithOnlyLimits, UnconsumableFeatureId } from '../../management/platform';
export declare const AdjustUnconsumableFeatureQuantityParams: z.ZodObject<{
    featureId: z.ZodEnum<typeof UnconsumableFeatureId>;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export type AdjustUnconsumableFeatureQuantityParams = z.infer<typeof AdjustUnconsumableFeatureQuantityParams>;
export declare const CheckoutPlanParamsSchema: z.ZodObject<{
    planId: z.ZodString;
    successUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CheckoutPlanParams = z.infer<typeof CheckoutPlanParamsSchema>;
export declare const CheckoutSessionResponse: z.ZodObject<{
    checkoutUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type CheckoutSessionResponse = z.infer<typeof CheckoutSessionResponse>;
export declare const PurchasablePlan: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    price: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    priceDisplay: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    baseVariantId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    includedSeats: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    includedCredits: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    creditsResetInterval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type PurchasablePlan = z.infer<typeof PurchasablePlan>;
export declare const ConsumableProductAutoTopupParams: z.ZodDiscriminatedUnion<[z.ZodObject<{
    state: z.ZodLiteral<AiCreditsAutoTopUpState.ENABLED>;
    minThreshold: z.ZodNumber;
    creditsToAdd: z.ZodNumber;
    maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    featureId: z.ZodEnum<typeof ConsumableFeatureId>;
}, z.core.$strip>, z.ZodObject<{
    state: z.ZodLiteral<AiCreditsAutoTopUpState.DISABLED>;
    featureId: z.ZodEnum<typeof ConsumableFeatureId>;
}, z.core.$strip>], "state">;
export type ConsumableProductAutoTopupParams = z.infer<typeof ConsumableProductAutoTopupParams>;
export declare const SetupPaymentParams: z.ZodObject<{
    redirectUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SetupPaymentParams = z.infer<typeof SetupPaymentParams>;
export declare enum CancellationReason {
    SWITCHING_TO_ANOTHER_TOOL = "switching_to_another_tool",
    MISSING_INTEGRATIONS = "missing_integrations",
    NO_NEED_RIGHT_NOW = "no_need_right_now",
    FREE_PLAN_IS_ENOUGH = "free_plan_is_enough",
    BUGS_OR_TECHNICAL_ISSUES = "bugs_or_technical_issues",
    TOO_EXPENSIVE = "too_expensive"
}
export declare const CANCELLATION_COMMENT_MAX_LENGTH = 2000;
export declare const CancelSubscriptionRequest: z.ZodObject<{
    reasons: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof CancellationReason>>>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CancelSubscriptionRequest = z.infer<typeof CancelSubscriptionRequest>;
export declare const AUTUMN_FREE_PLAN: PlatformPlanWithOnlyLimits;
export declare const OPEN_SOURCE_PLAN: PlatformPlanWithOnlyLimits;
export declare const isCloudPlanButNotEnterprise: (plan?: string | null) => boolean;
export declare const PLATFORM_PURGE_DELAY_DAYS = 7;
export declare const hasActiveSubscription: (plan?: string | null) => boolean;
export declare const isAppSumoCreditedPlan: (plan?: string | null) => boolean;
export declare const LEGACY_STANDARD_PLAN = "standard";
export declare const LEGACY_FREE_PLANS: readonly string[];
export declare const FREE_LEGACY_CUTOFF_ISO = "2026-07-30T00:00:00.000Z";
export declare const isFreeLegacyEligible: ({ plan, created }: {
    plan?: string | null;
    created?: string | null;
}) => boolean;
