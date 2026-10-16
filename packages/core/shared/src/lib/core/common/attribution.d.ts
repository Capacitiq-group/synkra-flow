import { z } from 'zod';
import { UserIdentityProvider } from '../authentication/user-identity';
declare function readAttributionFromSearch({ search }: {
    search: string;
}): AttributionParams;
declare function isEmptyAttribution({ attribution }: {
    attribution: AttributionParams | undefined | null;
}): boolean;
export declare const attributionUtils: {
    readAttributionFromSearch: typeof readAttributionFromSearch;
    isEmptyAttribution: typeof isEmptyAttribution;
    signUpMethodFromProvider: typeof signUpMethodFromProvider;
};
export declare const ATTRIBUTION_VALUE_MAX_LENGTH = 300;
export declare const ATTRIBUTION_PARAM_KEYS: readonly ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "ref", "ap_cta", "ap_landing", "ap_referrer", "ap_sid"];
export type AttributionParamKey = (typeof ATTRIBUTION_PARAM_KEYS)[number];
export declare const AttributionParams: z.ZodObject<{
    utm_source: z.ZodOptional<z.ZodString>;
    utm_medium: z.ZodOptional<z.ZodString>;
    utm_campaign: z.ZodOptional<z.ZodString>;
    utm_term: z.ZodOptional<z.ZodString>;
    utm_content: z.ZodOptional<z.ZodString>;
    gclid: z.ZodOptional<z.ZodString>;
    fbclid: z.ZodOptional<z.ZodString>;
    ref: z.ZodOptional<z.ZodString>;
    ap_cta: z.ZodOptional<z.ZodString>;
    ap_landing: z.ZodOptional<z.ZodString>;
    ap_referrer: z.ZodOptional<z.ZodString>;
    ap_sid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AttributionParams = z.infer<typeof AttributionParams>;
export declare const ATTRIBUTION_STORAGE_KEY = "ap_acquisition_params";
export declare const ATTRIBUTION_STORAGE_TTL_MS: number;
export declare enum SignUpMethod {
    PASSWORD = "password",
    EMAIL_CODE = "email_code",
    GOOGLE = "google",
    SAML = "saml",
    JWT = "jwt"
}
declare function signUpMethodFromProvider({ provider }: {
    provider: UserIdentityProvider;
}): SignUpMethod;
export {};
