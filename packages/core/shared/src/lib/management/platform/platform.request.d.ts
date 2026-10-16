import { z } from 'zod';
export declare const MAX_EMBED_ORIGIN_LENGTH = 300;
export declare const allowedEmbedOriginSchema: z.ZodString;
export declare const Base64EncodedFile: z.ZodObject<{
    base64: z.ZodString;
    mimetype: z.ZodString;
}, z.core.$strip>;
export type Base64EncodedFile = z.infer<typeof Base64EncodedFile>;
export declare const CreatePlatformRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type CreatePlatformRequest = z.infer<typeof CreatePlatformRequest>;
export declare const UpdatePlatformRequestBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    primaryColor: z.ZodOptional<z.ZodString>;
    themeColors: z.ZodPipe<z.ZodTransform<unknown, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
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
    }, z.core.$strip>>>>;
    logoIcon: z.ZodOptional<import("zod/mini").ZodMiniObject<{
        filename: import("zod/mini").ZodMiniString<string>;
        data: import("zod/mini").ZodMiniUnknown;
        type: import("zod/mini").ZodMiniLiteral<"file">;
        mimetype: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    fullLogo: z.ZodOptional<import("zod/mini").ZodMiniObject<{
        filename: import("zod/mini").ZodMiniString<string>;
        data: import("zod/mini").ZodMiniUnknown;
        type: import("zod/mini").ZodMiniLiteral<"file">;
        mimetype: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    favIcon: z.ZodOptional<import("zod/mini").ZodMiniObject<{
        filename: import("zod/mini").ZodMiniString<string>;
        data: import("zod/mini").ZodMiniUnknown;
        type: import("zod/mini").ZodMiniLiteral<"file">;
        mimetype: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>;
    federatedAuthProviders: z.ZodOptional<z.ZodObject<{
        saml: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
            idpMetadata: z.ZodString;
            idpCertificate: z.ZodString;
            attributeMapping: z.ZodOptional<z.ZodObject<{
                email: z.ZodString;
                firstName: z.ZodString;
                lastName: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    cloudAuthEnabled: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    googleAuthEnabled: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    emailAuthEnabled: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    autoCreatePersonalProjects: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    allowedAuthDomains: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    enforceAllowedAuthDomains: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    pinnedPieces: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    pieceSelectorConfig: z.ZodOptional<z.ZodPipe<z.ZodTransform<unknown, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
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
    }, z.core.$strip>>>>>;
    allowedEmbedOrigins: z.ZodOptional<z.ZodArray<z.ZodString>>;
    auditLogRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type UpdatePlatformRequestBody = z.infer<typeof UpdatePlatformRequestBody>;
export declare const AdminRetryRunsRequestBody: z.ZodObject<{
    runIds: z.ZodOptional<z.ZodArray<import("zod/mini").ZodMiniString<string>>>;
    createdAfter: z.ZodString;
    createdBefore: z.ZodString;
}, z.core.$strip>;
export type AdminRetryRunsRequestBody = z.infer<typeof AdminRetryRunsRequestBody>;
export declare const ApplyLicenseKeyByEmailRequestBody: z.ZodObject<{
    email: z.ZodString;
    licenseKey: z.ZodString;
}, z.core.$strip>;
export type ApplyLicenseKeyByEmailRequestBody = z.infer<typeof ApplyLicenseKeyByEmailRequestBody>;
export declare const IncreaseAICreditsForPlatformRequestBody: z.ZodObject<{
    platformId: z.ZodString;
    amountInUsd: z.ZodNumber;
}, z.core.$strip>;
export type IncreaseAICreditsForPlatformRequestBody = z.infer<typeof IncreaseAICreditsForPlatformRequestBody>;
export declare const AddAllowedEmbedOriginsRequestBody: z.ZodObject<{
    allowedEmbedOrigins: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AddAllowedEmbedOriginsRequestBody = z.infer<typeof AddAllowedEmbedOriginsRequestBody>;
export declare const AddAllowedEmbedOriginsResponse: z.ZodObject<{
    allowedEmbedOrigins: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AddAllowedEmbedOriginsResponse = z.infer<typeof AddAllowedEmbedOriginsResponse>;
