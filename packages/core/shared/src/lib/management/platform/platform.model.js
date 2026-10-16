"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformBillingInformation = exports.ProjectCreditUsage = exports.SeatsBillableFeature = exports.AppSumoCreditsBillableFeature = exports.CreditsBillableFeature = exports.AutoTopUpConfig = exports.PlatformWithoutSensitiveData = exports.Platform = exports.PieceSelectorConfig = exports.PieceSelectorTabConfig = exports.PieceSelectorTabSection = exports.PIECE_SELECTOR_BUILTIN_TABS = exports.PlatformThemeColors = exports.ThemeHexColor = exports.HEX_COLOR_PATTERN = exports.PlatformPlanLimits = exports.PlatformPlan = exports.FeatureFlagId = exports.UnconsumableFeatureId = exports.ConsumableFeatureId = exports.AiCreditsAutoTopUpState = exports.PlanName = exports.PlatformUsage = void 0;
exports.isConsumableFeatureId = isConsumableFeatureId;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const federated_authn_1 = require("../../core/federated-authn");
const sso_domain_verification_1 = require("./sso-domain-verification");
exports.PlatformUsage = zod_1.z.object({
    creditsUsed: zod_1.z.number(),
    creditsRemaining: (0, core_utils_1.Nullable)(zod_1.z.number()),
    creditsNextResetAt: (0, core_utils_1.Nullable)(zod_1.z.string()),
    appSumoAiCreditsUsed: (0, core_utils_1.Nullable)(zod_1.z.number()),
    appSumoAiCreditsRemaining: (0, core_utils_1.Nullable)(zod_1.z.number()),
    activeFlows: zod_1.z.number(),
    teamProjects: zod_1.z.number(),
    users: zod_1.z.number(),
    activeUsers: zod_1.z.number(),
    invitedSeats: zod_1.z.number(),
});
var PlanName;
(function (PlanName) {
    PlanName["FREE"] = "free";
    PlanName["PLUS"] = "plus";
    PlanName["PLUS_ANNUAL"] = "plus_annual";
    PlanName["PLUS_CHAT"] = "plus_chat";
    PlanName["TEAM"] = "team";
    PlanName["TEAM_ANNUAL"] = "team_annual";
    PlanName["ENTERPRISE"] = "enterprise";
    PlanName["APPSUMO"] = "appsumo";
    PlanName["FREE_LEGACY"] = "free_legacy";
})(PlanName || (exports.PlanName = PlanName = {}));
var AiCreditsAutoTopUpState;
(function (AiCreditsAutoTopUpState) {
    AiCreditsAutoTopUpState["ENABLED"] = "enabled";
    AiCreditsAutoTopUpState["DISABLED"] = "disabled";
})(AiCreditsAutoTopUpState || (exports.AiCreditsAutoTopUpState = AiCreditsAutoTopUpState = {}));
var ConsumableFeatureId;
(function (ConsumableFeatureId) {
    ConsumableFeatureId["AP_CREDITS"] = "apCredits";
    ConsumableFeatureId["APP_SUMO_AI_CREDITS"] = "appSumoAiCredits";
})(ConsumableFeatureId || (exports.ConsumableFeatureId = ConsumableFeatureId = {}));
var UnconsumableFeatureId;
(function (UnconsumableFeatureId) {
    UnconsumableFeatureId["TEAM_PROJECTS_LIMIT"] = "teamProjectsLimit";
    UnconsumableFeatureId["USERS_LIMIT"] = "usersLimit";
    UnconsumableFeatureId["ACTIVE_FLOWS_LIMIT"] = "activeFlowsLimit";
})(UnconsumableFeatureId || (exports.UnconsumableFeatureId = UnconsumableFeatureId = {}));
var FeatureFlagId;
(function (FeatureFlagId) {
    FeatureFlagId["BILLING_ENFORCED"] = "billingEnforced";
    FeatureFlagId["TABLES_ENABLED"] = "tablesEnabled";
    FeatureFlagId["EVENT_STREAMING_ENABLED"] = "eventStreamingEnabled";
    FeatureFlagId["ENVIRONMENTS_ENABLED"] = "environmentsEnabled";
    FeatureFlagId["ANALYTICS_ENABLED"] = "analyticsEnabled";
    FeatureFlagId["SHOW_POWERED_BY"] = "showPoweredBy";
    FeatureFlagId["AUDIT_LOG_ENABLED"] = "auditLogEnabled";
    FeatureFlagId["EMBEDDING_ENABLED"] = "embeddingEnabled";
    FeatureFlagId["AI_PROVIDERS_ENABLED"] = "aiProvidersEnabled";
    FeatureFlagId["CHAT_ENABLED"] = "chatEnabled";
    FeatureFlagId["AGENTS_ENABLED"] = "agentsEnabled";
    FeatureFlagId["WORKER_GROUPS_ENABLED"] = "workerGroupsEnabled";
    FeatureFlagId["MANAGE_PIECES_ENABLED"] = "managePiecesEnabled";
    FeatureFlagId["MANAGE_TEMPLATES_ENABLED"] = "manageTemplatesEnabled";
    FeatureFlagId["CUSTOM_APPEARANCE_ENABLED"] = "customAppearanceEnabled";
    FeatureFlagId["PROJECT_ROLES_ENABLED"] = "projectRolesEnabled";
    FeatureFlagId["GLOBAL_CONNECTIONS_ENABLED"] = "globalConnectionsEnabled";
    FeatureFlagId["CUSTOM_ROLES_ENABLED"] = "customRolesEnabled";
    FeatureFlagId["API_KEYS_ENABLED"] = "apiKeysEnabled";
    FeatureFlagId["SSO_ENABLED"] = "ssoEnabled";
    FeatureFlagId["SECRET_MANAGERS_ENABLED"] = "secretManagersEnabled";
    FeatureFlagId["SCIM_ENABLED"] = "scimEnabled";
})(FeatureFlagId || (exports.FeatureFlagId = FeatureFlagId = {}));
function isConsumableFeatureId(value) {
    return Object.values(ConsumableFeatureId).includes(value);
}
exports.PlatformPlan = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { plan: (0, core_utils_1.Nullable)(zod_1.z.string()), platformId: zod_1.z.string(), includedCredits: zod_1.z.number(), tablesEnabled: zod_1.z.boolean(), eventStreamingEnabled: zod_1.z.boolean(), environmentsEnabled: zod_1.z.boolean(), analyticsEnabled: zod_1.z.boolean(), showPoweredBy: zod_1.z.boolean(), auditLogEnabled: zod_1.z.boolean(), embeddingEnabled: zod_1.z.boolean(), aiProvidersEnabled: zod_1.z.boolean(), chatEnabled: zod_1.z.boolean(), agentsEnabled: zod_1.z.boolean(), workerGroupsEnabled: zod_1.z.boolean(), managePiecesEnabled: zod_1.z.boolean(), manageTemplatesEnabled: zod_1.z.boolean(), customAppearanceEnabled: zod_1.z.boolean(), billedTeamProjectsLimit: (0, core_utils_1.Nullable)(zod_1.z.number()), usersLimit: (0, core_utils_1.Nullable)(zod_1.z.number()), scheduledUsersLimit: (0, core_utils_1.Nullable)(zod_1.z.number()), projectRolesEnabled: zod_1.z.boolean(), globalConnectionsEnabled: zod_1.z.boolean(), customRolesEnabled: zod_1.z.boolean(), apiKeysEnabled: zod_1.z.boolean(), ssoEnabled: zod_1.z.boolean(), secretManagersEnabled: zod_1.z.boolean(), scimEnabled: zod_1.z.boolean(), licenseKey: (0, core_utils_1.Nullable)(zod_1.z.string()), licenseExpiresAt: (0, core_utils_1.Nullable)(core_utils_1.DateOrString), projectsLimit: (0, core_utils_1.Nullable)(zod_1.z.number()), activeFlowsLimit: (0, core_utils_1.Nullable)(zod_1.z.number()), 
    /** @deprecated use workerGroupId instead — will be removed in 0.83.0 */
    dedicatedWorkers: (0, core_utils_1.Nullable)(zod_1.z.object({
        trustedEnvironment: zod_1.z.boolean(),
    })), 
    /** @deprecated use workerGroupId instead — will be removed in 0.83.0 */
    canary: zod_1.z.boolean(), 
    /** @deprecated custom domains have been removed; column kept for backwards compatibility with existing DBs */
    customDomainsEnabled: zod_1.z.boolean(), workerGroupId: (0, core_utils_1.Nullable)(zod_1.z.string()) }));
exports.PlatformPlanLimits = exports.PlatformPlan.omit({ id: true, platformId: true, created: true, updated: true });
exports.HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
exports.ThemeHexColor = zod_1.z.string().regex(exports.HEX_COLOR_PATTERN, 'invalidHexColor');
exports.PlatformThemeColors = zod_1.z.object({
    avatar: exports.ThemeHexColor.optional(),
    'blue-link': exports.ThemeHexColor.optional(),
    danger: exports.ThemeHexColor.optional(),
    selection: exports.ThemeHexColor.optional(),
    primary: zod_1.z.object({
        dark: exports.ThemeHexColor.optional(),
        light: exports.ThemeHexColor.optional(),
        medium: exports.ThemeHexColor.optional(),
    }).optional(),
    warn: zod_1.z.object({
        default: exports.ThemeHexColor.optional(),
        light: exports.ThemeHexColor.optional(),
        dark: exports.ThemeHexColor.optional(),
    }).optional(),
    success: zod_1.z.object({
        default: exports.ThemeHexColor.optional(),
        light: exports.ThemeHexColor.optional(),
    }).optional(),
    status: zod_1.z.object({
        danger: exports.ThemeHexColor.optional(),
        warning: exports.ThemeHexColor.optional(),
        success: exports.ThemeHexColor.optional(),
    }).optional(),
});
exports.PIECE_SELECTOR_BUILTIN_TABS = ['EXPLORE', 'APPS', 'UTILITY', 'AI_AND_AGENTS', 'APPROVALS'];
exports.PieceSelectorTabSection = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string().min(1).max(40),
    pieceNames: zod_1.z.array(zod_1.z.string()),
});
exports.PieceSelectorTabConfig = zod_1.z.object({
    id: zod_1.z.string(),
    kind: zod_1.z.enum(['BUILTIN', 'CUSTOM']),
    builtinTab: zod_1.z.enum(exports.PIECE_SELECTOR_BUILTIN_TABS).optional(),
    title: zod_1.z.string().max(40).optional(),
    icon: zod_1.z.string().optional(),
    hidden: zod_1.z.boolean(),
    pieceNames: zod_1.z.array(zod_1.z.string()).optional(),
    sections: zod_1.z.array(exports.PieceSelectorTabSection).optional(),
}).refine((tab) => { var _a, _b; return tab.kind !== 'CUSTOM' || ((_b = (_a = tab.title) === null || _a === void 0 ? void 0 : _a.trim().length) !== null && _b !== void 0 ? _b : 0) > 0; }, { message: 'Custom tabs must have a name', path: ['title'] });
exports.PieceSelectorConfig = zod_1.z.object({
    tabs: zod_1.z.array(exports.PieceSelectorTabConfig),
});
exports.Platform = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { ownerId: core_utils_1.ApId, name: zod_1.z.string(), primaryColor: zod_1.z.string(), themeColors: (0, core_utils_1.Nullable)(exports.PlatformThemeColors), logoIconUrl: zod_1.z.string(), fullLogoUrl: zod_1.z.string(), favIconUrl: zod_1.z.string(), cloudAuthEnabled: zod_1.z.boolean(), googleAuthEnabled: zod_1.z.boolean(), enforceAllowedAuthDomains: zod_1.z.boolean(), allowedAuthDomains: zod_1.z.array(zod_1.z.string()), allowedEmbedOrigins: zod_1.z.array(zod_1.z.string()), ssoDomain: (0, core_utils_1.Nullable)(zod_1.z.string()), ssoDomainVerification: (0, core_utils_1.Nullable)(sso_domain_verification_1.SsoDomainVerification), federatedAuthProviders: federated_authn_1.FederatedAuthnProviderConfig, emailAuthEnabled: zod_1.z.boolean(), autoCreatePersonalProjects: zod_1.z.boolean(), pinnedPieces: zod_1.z.array(zod_1.z.string()), pieceSelectorConfig: (0, core_utils_1.Nullable)(exports.PieceSelectorConfig), auditLogRetentionDays: (0, core_utils_1.Nullable)(zod_1.z.number().int()) }));
exports.PlatformWithoutSensitiveData = zod_1.z.object({
    federatedAuthProviders: (0, core_utils_1.Nullable)(federated_authn_1.FederatedAuthnProviderConfigWithoutSensitiveData),
    plan: exports.PlatformPlanLimits,
    usage: exports.PlatformUsage.optional(),
    billingEnforced: zod_1.z.boolean().optional(),
    id: zod_1.z.string(),
    created: core_utils_1.DateOrString,
    updated: core_utils_1.DateOrString,
    ownerId: core_utils_1.ApId,
    name: zod_1.z.string(),
    primaryColor: zod_1.z.string(),
    themeColors: (0, core_utils_1.Nullable)(exports.PlatformThemeColors),
    logoIconUrl: zod_1.z.string(),
    fullLogoUrl: zod_1.z.string(),
    favIconUrl: zod_1.z.string(),
    cloudAuthEnabled: zod_1.z.boolean(),
    googleAuthEnabled: zod_1.z.boolean(),
    enforceAllowedAuthDomains: zod_1.z.boolean(),
    allowedAuthDomains: zod_1.z.array(zod_1.z.string()),
    allowedEmbedOrigins: zod_1.z.array(zod_1.z.string()),
    ssoDomain: (0, core_utils_1.Nullable)(zod_1.z.string()),
    ssoDomainVerification: (0, core_utils_1.Nullable)(sso_domain_verification_1.SsoDomainVerification),
    emailAuthEnabled: zod_1.z.boolean(),
    autoCreatePersonalProjects: zod_1.z.boolean(),
    pinnedPieces: zod_1.z.array(zod_1.z.string()),
    pieceSelectorConfig: (0, core_utils_1.Nullable)(exports.PieceSelectorConfig),
    auditLogRetentionDays: (0, core_utils_1.Nullable)(zod_1.z.number().int()),
});
exports.AutoTopUpConfig = zod_1.z.object({
    featureId: zod_1.z.enum(ConsumableFeatureId),
    enabled: zod_1.z.boolean(),
    threshold: zod_1.z.number(),
    quantity: zod_1.z.number(),
    maxMonthlyTopUps: (0, core_utils_1.Nullable)(zod_1.z.number()),
});
const BillableFeatureShape = {
    pricePerUnit: zod_1.z.number(),
    billingUnits: zod_1.z.number(),
    interval: (0, core_utils_1.Nullable)(zod_1.z.string()),
};
const ConsumableBillableFeatureShape = Object.assign(Object.assign({}, BillableFeatureShape), { autoTopUp: (0, core_utils_1.Nullable)(exports.AutoTopUpConfig) });
exports.CreditsBillableFeature = zod_1.z.object(Object.assign({ featureId: zod_1.z.literal(ConsumableFeatureId.AP_CREDITS) }, ConsumableBillableFeatureShape));
exports.AppSumoCreditsBillableFeature = zod_1.z.object(Object.assign({ featureId: zod_1.z.literal(ConsumableFeatureId.APP_SUMO_AI_CREDITS) }, ConsumableBillableFeatureShape));
exports.SeatsBillableFeature = zod_1.z.object(Object.assign({ featureId: zod_1.z.literal(UnconsumableFeatureId.USERS_LIMIT) }, BillableFeatureShape));
exports.ProjectCreditUsage = zod_1.z.object({
    projectId: zod_1.z.string(),
    projectName: zod_1.z.string(),
    creditsUsed: zod_1.z.number(),
    aiCreditsUsed: zod_1.z.number(),
});
exports.PlatformBillingInformation = zod_1.z.object({
    plan: exports.PlatformPlan,
    usage: exports.PlatformUsage,
    creditsResetInterval: (0, core_utils_1.Nullable)(zod_1.z.string()),
    planInterval: (0, core_utils_1.Nullable)(zod_1.z.string()),
    autumnPlanName: (0, core_utils_1.Nullable)(zod_1.z.string()),
    scheduledPlanName: (0, core_utils_1.Nullable)(zod_1.z.string()),
    nextBillingDate: zod_1.z.string(),
    nextBillingAmount: zod_1.z.number(),
    cancelAt: (0, core_utils_1.Nullable)(zod_1.z.string()),
    trialEndsAt: (0, core_utils_1.Nullable)(zod_1.z.string()),
    creditsFeature: (0, core_utils_1.Nullable)(exports.CreditsBillableFeature),
    appSumoCreditsFeature: (0, core_utils_1.Nullable)(exports.AppSumoCreditsBillableFeature),
    seatsFeature: (0, core_utils_1.Nullable)(exports.SeatsBillableFeature),
    billingPortalAvailable: zod_1.z.boolean(),
    billingEnforced: zod_1.z.boolean(),
    billingUnavailable: zod_1.z.boolean(),
    includedSeats: (0, core_utils_1.Nullable)(zod_1.z.number()),
    additionalSeats: (0, core_utils_1.Nullable)(zod_1.z.number()),
});
//# sourceMappingURL=platform.model.js.map