import { z } from 'zod';
export declare enum ChatPersonalizationStatus {
    UNSET = "UNSET",
    PENDING = "PENDING",
    RESEARCHING = "RESEARCHING",
    READY = "READY",
    FAILED = "FAILED",
    SKIPPED = "SKIPPED",
    DISMISSED_LEGACY = "DISMISSED_LEGACY"
}
export declare enum ChatPersonalizationScope {
    COMPANY = "company",
    USER = "user"
}
declare function shouldAskOnboarding({ status }: {
    status: ChatPersonalizationStatus;
}): boolean;
declare function hasAnsweredOnboarding({ status }: {
    status: ChatPersonalizationStatus;
}): boolean;
declare function isPersonalDefaultPlatformName(name: string): boolean;
declare function companyFromPlatformName(name: string | null | undefined): string | null;
export declare const CHAT_SUGGESTION_CARD_IMAGE_IDS: readonly ["answer-customers", "chase-late-payers", "chase-leads", "clone-me", "close-deals", "do-my-hiring", "do-research", "fill-pipeline", "get-invoices-paid", "grow-following", "make-slides", "onboard-signups", "plan-week", "prep-meetings", "run-my-day", "run-socials", "squash-bugs", "take-from-rivals", "tame-inbox", "win-back-customers", "write-emails", "write-posts", "write-reports"];
export declare const PersonalizationUseCase: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    prompt: z.ZodString;
    imageId: z.ZodEnum<{
        "answer-customers": "answer-customers";
        "chase-late-payers": "chase-late-payers";
        "chase-leads": "chase-leads";
        "clone-me": "clone-me";
        "close-deals": "close-deals";
        "do-my-hiring": "do-my-hiring";
        "do-research": "do-research";
        "fill-pipeline": "fill-pipeline";
        "get-invoices-paid": "get-invoices-paid";
        "grow-following": "grow-following";
        "make-slides": "make-slides";
        "onboard-signups": "onboard-signups";
        "plan-week": "plan-week";
        "prep-meetings": "prep-meetings";
        "run-my-day": "run-my-day";
        "run-socials": "run-socials";
        "squash-bugs": "squash-bugs";
        "take-from-rivals": "take-from-rivals";
        "tame-inbox": "tame-inbox";
        "win-back-customers": "win-back-customers";
        "write-emails": "write-emails";
        "write-posts": "write-posts";
        "write-reports": "write-reports";
    }>;
    app: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodEnum<{
        mission: "mission";
        routine: "routine";
    }>>;
}, z.core.$strip>;
export type PersonalizationUseCase = z.infer<typeof PersonalizationUseCase>;
export declare const PersonalizationProfile: z.ZodObject<{
    companyName: z.ZodString;
    displayName: z.ZodString;
    website: z.ZodString;
    description: z.ZodString;
    industry: z.ZodString;
    userRole: z.ZodOptional<z.ZodString>;
    roleConfidence: z.ZodOptional<z.ZodEnum<{
        high: "high";
        medium: "medium";
        low: "low";
    }>>;
}, z.core.$strip>;
export type PersonalizationProfile = z.infer<typeof PersonalizationProfile>;
export declare const PersonalizationPrefill: z.ZodObject<{
    role: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    confidence: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<{
        high: "high";
        medium: "medium";
        low: "low";
    }>>>;
}, z.core.$strip>;
export type PersonalizationPrefill = z.infer<typeof PersonalizationPrefill>;
export declare const ChatPersonalization: z.ZodObject<{
    platformId: z.ZodString;
    userId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    domain: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    companyText: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    role: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    status: z.ZodEnum<{
        UNSET: ChatPersonalizationStatus.UNSET;
        PENDING: ChatPersonalizationStatus.PENDING;
        RESEARCHING: ChatPersonalizationStatus.RESEARCHING;
        READY: ChatPersonalizationStatus.READY;
        FAILED: ChatPersonalizationStatus.FAILED;
        SKIPPED: ChatPersonalizationStatus.SKIPPED;
        DISMISSED_LEGACY: ChatPersonalizationStatus.DISMISSED_LEGACY;
    }>;
    researchToken: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    profile: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        companyName: z.ZodString;
        displayName: z.ZodString;
        website: z.ZodString;
        description: z.ZodString;
        industry: z.ZodString;
        userRole: z.ZodOptional<z.ZodString>;
        roleConfidence: z.ZodOptional<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>;
    }, z.core.$strip>>>;
    useCases: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        prompt: z.ZodString;
        imageId: z.ZodEnum<{
            "answer-customers": "answer-customers";
            "chase-late-payers": "chase-late-payers";
            "chase-leads": "chase-leads";
            "clone-me": "clone-me";
            "close-deals": "close-deals";
            "do-my-hiring": "do-my-hiring";
            "do-research": "do-research";
            "fill-pipeline": "fill-pipeline";
            "get-invoices-paid": "get-invoices-paid";
            "grow-following": "grow-following";
            "make-slides": "make-slides";
            "onboard-signups": "onboard-signups";
            "plan-week": "plan-week";
            "prep-meetings": "prep-meetings";
            "run-my-day": "run-my-day";
            "run-socials": "run-socials";
            "squash-bugs": "squash-bugs";
            "take-from-rivals": "take-from-rivals";
            "tame-inbox": "tame-inbox";
            "win-back-customers": "win-back-customers";
            "write-emails": "write-emails";
            "write-posts": "write-posts";
            "write-reports": "write-reports";
        }>;
        app: z.ZodOptional<z.ZodString>;
        kind: z.ZodOptional<z.ZodEnum<{
            mission: "mission";
            routine: "routine";
        }>>;
    }, z.core.$strip>>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type ChatPersonalization = z.infer<typeof ChatPersonalization>;
export declare const UpsertChatPersonalizationRequest: z.ZodObject<{
    website: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    personalize: z.ZodBoolean;
}, z.core.$strip>;
export type UpsertChatPersonalizationRequest = z.infer<typeof UpsertChatPersonalizationRequest>;
export declare const ChatPersonalizationView: z.ZodObject<{
    status: z.ZodEnum<{
        UNSET: ChatPersonalizationStatus.UNSET;
        PENDING: ChatPersonalizationStatus.PENDING;
        RESEARCHING: ChatPersonalizationStatus.RESEARCHING;
        READY: ChatPersonalizationStatus.READY;
        FAILED: ChatPersonalizationStatus.FAILED;
        SKIPPED: ChatPersonalizationStatus.SKIPPED;
        DISMISSED_LEGACY: ChatPersonalizationStatus.DISMISSED_LEGACY;
    }>;
    personalStatus: z.ZodEnum<{
        UNSET: ChatPersonalizationStatus.UNSET;
        PENDING: ChatPersonalizationStatus.PENDING;
        RESEARCHING: ChatPersonalizationStatus.RESEARCHING;
        READY: ChatPersonalizationStatus.READY;
        FAILED: ChatPersonalizationStatus.FAILED;
        SKIPPED: ChatPersonalizationStatus.SKIPPED;
        DISMISSED_LEGACY: ChatPersonalizationStatus.DISMISSED_LEGACY;
    }>;
    scope: z.ZodEnum<{
        company: ChatPersonalizationScope.COMPANY;
        user: ChatPersonalizationScope.USER;
    }>;
    useCases: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        prompt: z.ZodString;
        imageId: z.ZodEnum<{
            "answer-customers": "answer-customers";
            "chase-late-payers": "chase-late-payers";
            "chase-leads": "chase-leads";
            "clone-me": "clone-me";
            "close-deals": "close-deals";
            "do-my-hiring": "do-my-hiring";
            "do-research": "do-research";
            "fill-pipeline": "fill-pipeline";
            "get-invoices-paid": "get-invoices-paid";
            "grow-following": "grow-following";
            "make-slides": "make-slides";
            "onboard-signups": "onboard-signups";
            "plan-week": "plan-week";
            "prep-meetings": "prep-meetings";
            "run-my-day": "run-my-day";
            "run-socials": "run-socials";
            "squash-bugs": "squash-bugs";
            "take-from-rivals": "take-from-rivals";
            "tame-inbox": "tame-inbox";
            "win-back-customers": "win-back-customers";
            "write-emails": "write-emails";
            "write-posts": "write-posts";
            "write-reports": "write-reports";
        }>;
        app: z.ZodOptional<z.ZodString>;
        kind: z.ZodOptional<z.ZodEnum<{
            mission: "mission";
            routine: "routine";
        }>>;
    }, z.core.$strip>>;
    profile: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        companyName: z.ZodString;
        displayName: z.ZodString;
        website: z.ZodString;
        description: z.ZodString;
        industry: z.ZodString;
        userRole: z.ZodOptional<z.ZodString>;
        roleConfidence: z.ZodOptional<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>;
    }, z.core.$strip>>>;
    companyInput: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    roleInput: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    prefill: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        role: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        confidence: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ChatPersonalizationView = z.infer<typeof ChatPersonalizationView>;
export declare const ChatPersonalizationProgressEvent: z.ZodObject<{
    platformId: z.ZodString;
    scope: z.ZodEnum<{
        company: ChatPersonalizationScope.COMPANY;
        user: ChatPersonalizationScope.USER;
    }>;
    phase: z.ZodString;
    message: z.ZodString;
    done: z.ZodBoolean;
    result: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<{
            UNSET: ChatPersonalizationStatus.UNSET;
            PENDING: ChatPersonalizationStatus.PENDING;
            RESEARCHING: ChatPersonalizationStatus.RESEARCHING;
            READY: ChatPersonalizationStatus.READY;
            FAILED: ChatPersonalizationStatus.FAILED;
            SKIPPED: ChatPersonalizationStatus.SKIPPED;
            DISMISSED_LEGACY: ChatPersonalizationStatus.DISMISSED_LEGACY;
        }>;
        personalStatus: z.ZodEnum<{
            UNSET: ChatPersonalizationStatus.UNSET;
            PENDING: ChatPersonalizationStatus.PENDING;
            RESEARCHING: ChatPersonalizationStatus.RESEARCHING;
            READY: ChatPersonalizationStatus.READY;
            FAILED: ChatPersonalizationStatus.FAILED;
            SKIPPED: ChatPersonalizationStatus.SKIPPED;
            DISMISSED_LEGACY: ChatPersonalizationStatus.DISMISSED_LEGACY;
        }>;
        scope: z.ZodEnum<{
            company: ChatPersonalizationScope.COMPANY;
            user: ChatPersonalizationScope.USER;
        }>;
        useCases: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            prompt: z.ZodString;
            imageId: z.ZodEnum<{
                "answer-customers": "answer-customers";
                "chase-late-payers": "chase-late-payers";
                "chase-leads": "chase-leads";
                "clone-me": "clone-me";
                "close-deals": "close-deals";
                "do-my-hiring": "do-my-hiring";
                "do-research": "do-research";
                "fill-pipeline": "fill-pipeline";
                "get-invoices-paid": "get-invoices-paid";
                "grow-following": "grow-following";
                "make-slides": "make-slides";
                "onboard-signups": "onboard-signups";
                "plan-week": "plan-week";
                "prep-meetings": "prep-meetings";
                "run-my-day": "run-my-day";
                "run-socials": "run-socials";
                "squash-bugs": "squash-bugs";
                "take-from-rivals": "take-from-rivals";
                "tame-inbox": "tame-inbox";
                "win-back-customers": "win-back-customers";
                "write-emails": "write-emails";
                "write-posts": "write-posts";
                "write-reports": "write-reports";
            }>;
            app: z.ZodOptional<z.ZodString>;
            kind: z.ZodOptional<z.ZodEnum<{
                mission: "mission";
                routine: "routine";
            }>>;
        }, z.core.$strip>>;
        profile: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            companyName: z.ZodString;
            displayName: z.ZodString;
            website: z.ZodString;
            description: z.ZodString;
            industry: z.ZodString;
            userRole: z.ZodOptional<z.ZodString>;
            roleConfidence: z.ZodOptional<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>;
        }, z.core.$strip>>>;
        companyInput: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        roleInput: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        prefill: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            role: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
            confidence: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    prefill: z.ZodOptional<z.ZodObject<{
        role: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        confidence: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChatPersonalizationProgressEvent = z.infer<typeof ChatPersonalizationProgressEvent>;
export declare const chatPersonalizationUtils: {
    shouldAskOnboarding: typeof shouldAskOnboarding;
    hasAnsweredOnboarding: typeof hasAnsweredOnboarding;
    isPersonalDefaultPlatformName: typeof isPersonalDefaultPlatformName;
    companyFromPlatformName: typeof companyFromPlatformName;
};
export {};
