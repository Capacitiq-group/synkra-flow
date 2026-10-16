import { z } from 'zod';
import { ThirdPartyAuthnProviderEnum } from './authn-provider-name';
export * from './authn-provider-name';
export declare const federatedAuthnLoginResponse: z.ZodObject<{
    loginUrl: z.ZodString;
}, z.core.$strip>;
export type FederatedAuthnLoginResponse = z.infer<typeof federatedAuthnLoginResponse>;
export declare const ClaimTokenRequest: z.ZodObject<{
    providerName: z.ZodEnum<typeof ThirdPartyAuthnProviderEnum>;
    code: z.ZodString;
    attribution: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClaimTokenRequest = z.infer<typeof ClaimTokenRequest>;
export declare const SAMLAttributeMapping: z.ZodObject<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strip>;
export type SAMLAttributeMapping = z.infer<typeof SAMLAttributeMapping>;
export declare const SAMLAuthnProviderConfig: z.ZodObject<{
    idpMetadata: z.ZodString;
    idpCertificate: z.ZodString;
    attributeMapping: z.ZodOptional<z.ZodObject<{
        email: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SAMLAuthnProviderConfig = z.infer<typeof SAMLAuthnProviderConfig>;
export declare const FederatedAuthnProviderConfig: z.ZodObject<{
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
export type FederatedAuthnProviderConfig = z.infer<typeof FederatedAuthnProviderConfig>;
export declare const FederatedAuthnProviderConfigWithoutSensitiveData: z.ZodObject<{
    saml: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{}, z.core.$strip>>>;
}, z.core.$strip>;
export type FederatedAuthnProviderConfigWithoutSensitiveData = z.infer<typeof FederatedAuthnProviderConfigWithoutSensitiveData>;
