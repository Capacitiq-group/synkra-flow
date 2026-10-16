import { z } from 'zod';
export declare const SignUpRequest: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    trackEvents: z.ZodBoolean;
    newsLetter: z.ZodBoolean;
    captchaToken: z.ZodOptional<z.ZodString>;
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
export type SignUpRequest = z.infer<typeof SignUpRequest>;
export declare const SwitchPlatformRequest: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
export type SwitchPlatformRequest = z.infer<typeof SwitchPlatformRequest>;
