import { z } from 'zod';
export declare const PlatformUsage: z.ZodObject<{
    creditsUsed: z.ZodNumber;
    creditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    creditsNextResetAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    appSumoAiCreditsUsed: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    appSumoAiCreditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    activeFlows: z.ZodNumber;
    teamProjects: z.ZodNumber;
    users: z.ZodNumber;
    activeUsers: z.ZodNumber;
    invitedSeats: z.ZodNumber;
}, z.core.$strip>;
export type PlatformUsage = z.infer<typeof PlatformUsage>;
export declare enum PlanName {
    FREE = "free",
    PLUS = "plus",
    PLUS_ANNUAL = "plus_annual",
    PLUS_CHAT = "plus_chat",
    TEAM = "team",
    TEAM_ANNUAL = "team_annual",
    ENTERPRISE = "enterprise",
    APPSUMO = "appsumo",
    FREE_LEGACY = "free_legacy"
}
export declare enum AiCreditsAutoTopUpState {
    ENABLED = "enabled",
    DISABLED = "disabled"
}
export declare enum ConsumableFeatureId {
    AP_CREDITS = "apCredits",
    APP_SUMO_AI_CREDITS = "appSumoAiCredits"
}
export declare enum UnconsumableFeatureId {
    TEAM_PROJECTS_LIMIT = "teamProjectsLimit",
    USERS_LIMIT = "usersLimit",
    ACTIVE_FLOWS_LIMIT = "activeFlowsLimit"
}
export declare enum FeatureFlagId {
    BILLING_ENFORCED = "billingEnforced",
    TABLES_ENABLED = "tablesEnabled",
    EVENT_STREAMING_ENABLED = "eventStreamingEnabled",
    ENVIRONMENTS_ENABLED = "environmentsEnabled",
    ANALYTICS_ENABLED = "analyticsEnabled",
    SHOW_POWERED_BY = "showPoweredBy",
    AUDIT_LOG_ENABLED = "auditLogEnabled",
    EMBEDDING_ENABLED = "embeddingEnabled",
    AI_PROVIDERS_ENABLED = "aiProvidersEnabled",
    CHAT_ENABLED = "chatEnabled",
    AGENTS_ENABLED = "agentsEnabled",
    WORKER_GROUPS_ENABLED = "workerGroupsEnabled",
    MANAGE_PIECES_ENABLED = "managePiecesEnabled",
    MANAGE_TEMPLATES_ENABLED = "manageTemplatesEnabled",
    CUSTOM_APPEARANCE_ENABLED = "customAppearanceEnabled",
    PROJECT_ROLES_ENABLED = "projectRolesEnabled",
    GLOBAL_CONNECTIONS_ENABLED = "globalConnectionsEnabled",
    CUSTOM_ROLES_ENABLED = "customRolesEnabled",
    API_KEYS_ENABLED = "apiKeysEnabled",
    SSO_ENABLED = "ssoEnabled",
    SECRET_MANAGERS_ENABLED = "secretManagersEnabled",
    SCIM_ENABLED = "scimEnabled"
}
export type FeatureId = ConsumableFeatureId | UnconsumableFeatureId | FeatureFlagId;
export declare function isConsumableFeatureId(value: string): value is ConsumableFeatureId;
export declare const PlatformPlan: z.ZodObject<{
    plan: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformId: z.ZodString;
    includedCredits: z.ZodNumber;
    tablesEnabled: z.ZodBoolean;
    eventStreamingEnabled: z.ZodBoolean;
    environmentsEnabled: z.ZodBoolean;
    analyticsEnabled: z.ZodBoolean;
    showPoweredBy: z.ZodBoolean;
    auditLogEnabled: z.ZodBoolean;
    embeddingEnabled: z.ZodBoolean;
    aiProvidersEnabled: z.ZodBoolean;
    chatEnabled: z.ZodBoolean;
    agentsEnabled: z.ZodBoolean;
    workerGroupsEnabled: z.ZodBoolean;
    managePiecesEnabled: z.ZodBoolean;
    manageTemplatesEnabled: z.ZodBoolean;
    customAppearanceEnabled: z.ZodBoolean;
    billedTeamProjectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    usersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    scheduledUsersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    projectRolesEnabled: z.ZodBoolean;
    globalConnectionsEnabled: z.ZodBoolean;
    customRolesEnabled: z.ZodBoolean;
    apiKeysEnabled: z.ZodBoolean;
    ssoEnabled: z.ZodBoolean;
    secretManagersEnabled: z.ZodBoolean;
    scimEnabled: z.ZodBoolean;
    licenseKey: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    licenseExpiresAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    projectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    dedicatedWorkers: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        trustedEnvironment: z.ZodBoolean;
    }, z.core.$strip>>>;
    canary: z.ZodBoolean;
    customDomainsEnabled: z.ZodBoolean;
    workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type PlatformPlan = z.infer<typeof PlatformPlan>;
export declare const PlatformPlanLimits: z.ZodObject<{
    workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    usersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    tablesEnabled: z.ZodBoolean;
    eventStreamingEnabled: z.ZodBoolean;
    environmentsEnabled: z.ZodBoolean;
    analyticsEnabled: z.ZodBoolean;
    showPoweredBy: z.ZodBoolean;
    auditLogEnabled: z.ZodBoolean;
    embeddingEnabled: z.ZodBoolean;
    aiProvidersEnabled: z.ZodBoolean;
    chatEnabled: z.ZodBoolean;
    agentsEnabled: z.ZodBoolean;
    workerGroupsEnabled: z.ZodBoolean;
    managePiecesEnabled: z.ZodBoolean;
    manageTemplatesEnabled: z.ZodBoolean;
    customAppearanceEnabled: z.ZodBoolean;
    projectRolesEnabled: z.ZodBoolean;
    globalConnectionsEnabled: z.ZodBoolean;
    customRolesEnabled: z.ZodBoolean;
    apiKeysEnabled: z.ZodBoolean;
    ssoEnabled: z.ZodBoolean;
    secretManagersEnabled: z.ZodBoolean;
    scimEnabled: z.ZodBoolean;
    plan: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    includedCredits: z.ZodNumber;
    billedTeamProjectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    scheduledUsersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    licenseKey: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    licenseExpiresAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    projectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    dedicatedWorkers: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        trustedEnvironment: z.ZodBoolean;
    }, z.core.$strip>>>;
    canary: z.ZodBoolean;
    customDomainsEnabled: z.ZodBoolean;
}, z.core.$strip>;
export type PlatformPlanLimits = z.infer<typeof PlatformPlanLimits>;
export type PlatformPlanWithOnlyLimits = PlatformPlanLimits;
export declare const HEX_COLOR_PATTERN: RegExp;
export declare const ThemeHexColor: z.ZodString;
export declare const PlatformThemeColors: z.ZodObject<{
    avatar: z.ZodOptional<z.ZodString>;
    'blue-link': z.ZodOptional<z.ZodString>;
    danger: z.ZodOptional<z.ZodString>;
    selection: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodObject<{
        dark: z.ZodOptional<z.ZodString>;
        light: z.ZodOptional<z.ZodString>;
        medium: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    warn: z.ZodOptional<z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        light: z.ZodOptional<z.ZodString>;
        dark: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    success: z.ZodOptional<z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        light: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    status: z.ZodOptional<z.ZodObject<{
        danger: z.ZodOptional<z.ZodString>;
        warning: z.ZodOptional<z.ZodString>;
        success: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PlatformThemeColors = z.infer<typeof PlatformThemeColors>;
export declare const PIECE_SELECTOR_BUILTIN_TABS: readonly ["EXPLORE", "APPS", "UTILITY", "AI_AND_AGENTS", "APPROVALS"];
export declare const PieceSelectorTabSection: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    pieceNames: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PieceSelectorTabSection = z.infer<typeof PieceSelectorTabSection>;
export declare const PieceSelectorTabConfig: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodEnum<{
        CUSTOM: "CUSTOM";
        BUILTIN: "BUILTIN";
    }>;
    builtinTab: z.ZodOptional<z.ZodEnum<{
        EXPLORE: "EXPLORE";
        APPS: "APPS";
        UTILITY: "UTILITY";
        AI_AND_AGENTS: "AI_AND_AGENTS";
        APPROVALS: "APPROVALS";
    }>>;
    title: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    hidden: z.ZodBoolean;
    pieceNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        pieceNames: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type PieceSelectorTabConfig = z.infer<typeof PieceSelectorTabConfig>;
export declare const PieceSelectorConfig: z.ZodObject<{
    tabs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            CUSTOM: "CUSTOM";
            BUILTIN: "BUILTIN";
        }>;
        builtinTab: z.ZodOptional<z.ZodEnum<{
            EXPLORE: "EXPLORE";
            APPS: "APPS";
            UTILITY: "UTILITY";
            AI_AND_AGENTS: "AI_AND_AGENTS";
            APPROVALS: "APPROVALS";
        }>>;
        title: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        hidden: z.ZodBoolean;
        pieceNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            pieceNames: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PieceSelectorConfig = z.infer<typeof PieceSelectorConfig>;
export declare const Platform: z.ZodObject<{
    ownerId: import("zod/mini").ZodMiniString<string>;
    name: z.ZodString;
    primaryColor: z.ZodString;
    themeColors: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        avatar: z.ZodOptional<z.ZodString>;
        'blue-link': z.ZodOptional<z.ZodString>;
        danger: z.ZodOptional<z.ZodString>;
        selection: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodObject<{
            dark: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
            medium: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        warn: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
            dark: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        success: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        status: z.ZodOptional<z.ZodObject<{
            danger: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    logoIconUrl: z.ZodString;
    fullLogoUrl: z.ZodString;
    favIconUrl: z.ZodString;
    cloudAuthEnabled: z.ZodBoolean;
    googleAuthEnabled: z.ZodBoolean;
    enforceAllowedAuthDomains: z.ZodBoolean;
    allowedAuthDomains: z.ZodArray<z.ZodString>;
    allowedEmbedOrigins: z.ZodArray<z.ZodString>;
    ssoDomain: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    ssoDomainVerification: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        status: z.ZodEnum<{
            PENDING_VERIFICATION: import("./sso-domain-verification").SsoDomainVerificationStatus.PENDING_VERIFICATION;
            VERIFIED: import("./sso-domain-verification").SsoDomainVerificationStatus.VERIFIED;
        }>;
        record: z.ZodObject<{
            type: z.ZodEnum<{
                TXT: import("./sso-domain-verification").SsoDomainVerificationRecordType;
            }>;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>>>;
    federatedAuthProviders: z.ZodObject<{
        saml: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            idpMetadata: z.ZodString;
            idpCertificate: z.ZodString;
            attributeMapping: z.ZodOptional<z.ZodObject<{
                email: z.ZodString;
                firstName: z.ZodString;
                lastName: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    emailAuthEnabled: z.ZodBoolean;
    autoCreatePersonalProjects: z.ZodBoolean;
    pinnedPieces: z.ZodArray<z.ZodString>;
    pieceSelectorConfig: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        tabs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodEnum<{
                CUSTOM: "CUSTOM";
                BUILTIN: "BUILTIN";
            }>;
            builtinTab: z.ZodOptional<z.ZodEnum<{
                EXPLORE: "EXPLORE";
                APPS: "APPS";
                UTILITY: "UTILITY";
                AI_AND_AGENTS: "AI_AND_AGENTS";
                APPROVALS: "APPROVALS";
            }>>;
            title: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            hidden: z.ZodBoolean;
            pieceNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                pieceNames: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    auditLogRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Platform = z.infer<typeof Platform>;
export type PlatformWithoutFederatedAuth = Omit<Platform, 'federatedAuthProviders'>;
export declare const PlatformWithoutSensitiveData: z.ZodObject<{
    federatedAuthProviders: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        saml: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{}, z.core.$strip>>>;
    }, z.core.$strip>>>;
    plan: z.ZodObject<{
        workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        usersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        tablesEnabled: z.ZodBoolean;
        eventStreamingEnabled: z.ZodBoolean;
        environmentsEnabled: z.ZodBoolean;
        analyticsEnabled: z.ZodBoolean;
        showPoweredBy: z.ZodBoolean;
        auditLogEnabled: z.ZodBoolean;
        embeddingEnabled: z.ZodBoolean;
        aiProvidersEnabled: z.ZodBoolean;
        chatEnabled: z.ZodBoolean;
        agentsEnabled: z.ZodBoolean;
        workerGroupsEnabled: z.ZodBoolean;
        managePiecesEnabled: z.ZodBoolean;
        manageTemplatesEnabled: z.ZodBoolean;
        customAppearanceEnabled: z.ZodBoolean;
        projectRolesEnabled: z.ZodBoolean;
        globalConnectionsEnabled: z.ZodBoolean;
        customRolesEnabled: z.ZodBoolean;
        apiKeysEnabled: z.ZodBoolean;
        ssoEnabled: z.ZodBoolean;
        secretManagersEnabled: z.ZodBoolean;
        scimEnabled: z.ZodBoolean;
        plan: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        includedCredits: z.ZodNumber;
        billedTeamProjectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        scheduledUsersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        licenseKey: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        licenseExpiresAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        projectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        dedicatedWorkers: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            trustedEnvironment: z.ZodBoolean;
        }, z.core.$strip>>>;
        canary: z.ZodBoolean;
        customDomainsEnabled: z.ZodBoolean;
    }, z.core.$strip>;
    usage: z.ZodOptional<z.ZodObject<{
        creditsUsed: z.ZodNumber;
        creditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        creditsNextResetAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        appSumoAiCreditsUsed: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        appSumoAiCreditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        activeFlows: z.ZodNumber;
        teamProjects: z.ZodNumber;
        users: z.ZodNumber;
        activeUsers: z.ZodNumber;
        invitedSeats: z.ZodNumber;
    }, z.core.$strip>>;
    billingEnforced: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    ownerId: import("zod/mini").ZodMiniString<string>;
    name: z.ZodString;
    primaryColor: z.ZodString;
    themeColors: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        avatar: z.ZodOptional<z.ZodString>;
        'blue-link': z.ZodOptional<z.ZodString>;
        danger: z.ZodOptional<z.ZodString>;
        selection: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodObject<{
            dark: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
            medium: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        warn: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
            dark: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        success: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            light: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        status: z.ZodOptional<z.ZodObject<{
            danger: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    logoIconUrl: z.ZodString;
    fullLogoUrl: z.ZodString;
    favIconUrl: z.ZodString;
    cloudAuthEnabled: z.ZodBoolean;
    googleAuthEnabled: z.ZodBoolean;
    enforceAllowedAuthDomains: z.ZodBoolean;
    allowedAuthDomains: z.ZodArray<z.ZodString>;
    allowedEmbedOrigins: z.ZodArray<z.ZodString>;
    ssoDomain: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    ssoDomainVerification: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        status: z.ZodEnum<{
            PENDING_VERIFICATION: import("./sso-domain-verification").SsoDomainVerificationStatus.PENDING_VERIFICATION;
            VERIFIED: import("./sso-domain-verification").SsoDomainVerificationStatus.VERIFIED;
        }>;
        record: z.ZodObject<{
            type: z.ZodEnum<{
                TXT: import("./sso-domain-verification").SsoDomainVerificationRecordType;
            }>;
            name: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>;
        createdAt: z.ZodString;
    }, z.core.$strip>>>;
    emailAuthEnabled: z.ZodBoolean;
    autoCreatePersonalProjects: z.ZodBoolean;
    pinnedPieces: z.ZodArray<z.ZodString>;
    pieceSelectorConfig: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        tabs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodEnum<{
                CUSTOM: "CUSTOM";
                BUILTIN: "BUILTIN";
            }>;
            builtinTab: z.ZodOptional<z.ZodEnum<{
                EXPLORE: "EXPLORE";
                APPS: "APPS";
                UTILITY: "UTILITY";
                AI_AND_AGENTS: "AI_AND_AGENTS";
                APPROVALS: "APPROVALS";
            }>>;
            title: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            hidden: z.ZodBoolean;
            pieceNames: z.ZodOptional<z.ZodArray<z.ZodString>>;
            sections: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                pieceNames: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    auditLogRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type PlatformWithoutSensitiveData = z.infer<typeof PlatformWithoutSensitiveData>;
export declare const AutoTopUpConfig: z.ZodObject<{
    featureId: z.ZodEnum<typeof ConsumableFeatureId>;
    enabled: z.ZodBoolean;
    threshold: z.ZodNumber;
    quantity: z.ZodNumber;
    maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type AutoTopUpConfig = z.infer<typeof AutoTopUpConfig>;
export declare const CreditsBillableFeature: z.ZodObject<{
    autoTopUp: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        featureId: z.ZodEnum<typeof ConsumableFeatureId>;
        enabled: z.ZodBoolean;
        threshold: z.ZodNumber;
        quantity: z.ZodNumber;
        maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    pricePerUnit: z.ZodNumber;
    billingUnits: z.ZodNumber;
    interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    featureId: z.ZodLiteral<ConsumableFeatureId.AP_CREDITS>;
}, z.core.$strip>;
export type CreditsBillableFeature = z.infer<typeof CreditsBillableFeature>;
export declare const AppSumoCreditsBillableFeature: z.ZodObject<{
    autoTopUp: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        featureId: z.ZodEnum<typeof ConsumableFeatureId>;
        enabled: z.ZodBoolean;
        threshold: z.ZodNumber;
        quantity: z.ZodNumber;
        maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    pricePerUnit: z.ZodNumber;
    billingUnits: z.ZodNumber;
    interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    featureId: z.ZodLiteral<ConsumableFeatureId.APP_SUMO_AI_CREDITS>;
}, z.core.$strip>;
export type AppSumoCreditsBillableFeature = z.infer<typeof AppSumoCreditsBillableFeature>;
export declare const SeatsBillableFeature: z.ZodObject<{
    pricePerUnit: z.ZodNumber;
    billingUnits: z.ZodNumber;
    interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    featureId: z.ZodLiteral<UnconsumableFeatureId.USERS_LIMIT>;
}, z.core.$strip>;
export type SeatsBillableFeature = z.infer<typeof SeatsBillableFeature>;
export type ConsumableBillableFeature = CreditsBillableFeature | AppSumoCreditsBillableFeature;
export declare const ProjectCreditUsage: z.ZodObject<{
    projectId: z.ZodString;
    projectName: z.ZodString;
    creditsUsed: z.ZodNumber;
    aiCreditsUsed: z.ZodNumber;
}, z.core.$strip>;
export type ProjectCreditUsage = z.infer<typeof ProjectCreditUsage>;
export declare const PlatformBillingInformation: z.ZodObject<{
    plan: z.ZodObject<{
        plan: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: z.ZodString;
        includedCredits: z.ZodNumber;
        tablesEnabled: z.ZodBoolean;
        eventStreamingEnabled: z.ZodBoolean;
        environmentsEnabled: z.ZodBoolean;
        analyticsEnabled: z.ZodBoolean;
        showPoweredBy: z.ZodBoolean;
        auditLogEnabled: z.ZodBoolean;
        embeddingEnabled: z.ZodBoolean;
        aiProvidersEnabled: z.ZodBoolean;
        chatEnabled: z.ZodBoolean;
        agentsEnabled: z.ZodBoolean;
        workerGroupsEnabled: z.ZodBoolean;
        managePiecesEnabled: z.ZodBoolean;
        manageTemplatesEnabled: z.ZodBoolean;
        customAppearanceEnabled: z.ZodBoolean;
        billedTeamProjectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        usersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        scheduledUsersLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        projectRolesEnabled: z.ZodBoolean;
        globalConnectionsEnabled: z.ZodBoolean;
        customRolesEnabled: z.ZodBoolean;
        apiKeysEnabled: z.ZodBoolean;
        ssoEnabled: z.ZodBoolean;
        secretManagersEnabled: z.ZodBoolean;
        scimEnabled: z.ZodBoolean;
        licenseKey: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        licenseExpiresAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        projectsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        dedicatedWorkers: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            trustedEnvironment: z.ZodBoolean;
        }, z.core.$strip>>>;
        canary: z.ZodBoolean;
        customDomainsEnabled: z.ZodBoolean;
        workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>;
    usage: z.ZodObject<{
        creditsUsed: z.ZodNumber;
        creditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        creditsNextResetAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        appSumoAiCreditsUsed: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        appSumoAiCreditsRemaining: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        activeFlows: z.ZodNumber;
        teamProjects: z.ZodNumber;
        users: z.ZodNumber;
        activeUsers: z.ZodNumber;
        invitedSeats: z.ZodNumber;
    }, z.core.$strip>;
    creditsResetInterval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    planInterval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    autumnPlanName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    scheduledPlanName: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    nextBillingDate: z.ZodString;
    nextBillingAmount: z.ZodNumber;
    cancelAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    trialEndsAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    creditsFeature: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        autoTopUp: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            featureId: z.ZodEnum<typeof ConsumableFeatureId>;
            enabled: z.ZodBoolean;
            threshold: z.ZodNumber;
            quantity: z.ZodNumber;
            maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        pricePerUnit: z.ZodNumber;
        billingUnits: z.ZodNumber;
        interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        featureId: z.ZodLiteral<ConsumableFeatureId.AP_CREDITS>;
    }, z.core.$strip>>>;
    appSumoCreditsFeature: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        autoTopUp: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            featureId: z.ZodEnum<typeof ConsumableFeatureId>;
            enabled: z.ZodBoolean;
            threshold: z.ZodNumber;
            quantity: z.ZodNumber;
            maxMonthlyTopUps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        pricePerUnit: z.ZodNumber;
        billingUnits: z.ZodNumber;
        interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        featureId: z.ZodLiteral<ConsumableFeatureId.APP_SUMO_AI_CREDITS>;
    }, z.core.$strip>>>;
    seatsFeature: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        pricePerUnit: z.ZodNumber;
        billingUnits: z.ZodNumber;
        interval: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        featureId: z.ZodLiteral<UnconsumableFeatureId.USERS_LIMIT>;
    }, z.core.$strip>>>;
    billingPortalAvailable: z.ZodBoolean;
    billingEnforced: z.ZodBoolean;
    billingUnavailable: z.ZodBoolean;
    includedSeats: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    additionalSeats: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type PlatformBillingInformation = z.infer<typeof PlatformBillingInformation>;
