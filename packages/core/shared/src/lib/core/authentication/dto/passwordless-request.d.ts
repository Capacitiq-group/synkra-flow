import { z } from 'zod';
export declare const MAX_FULL_NAME_LENGTH = 100;
export declare const MAX_CAPTCHA_TOKEN_LENGTH = 2048;
export declare const RequestEmailCodeRequest: z.ZodObject<{
    email: z.ZodString;
    captchaToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RequestEmailCodeRequest = z.infer<typeof RequestEmailCodeRequest>;
export declare const VerifyEmailCodeRequest: z.ZodObject<{
    email: z.ZodString;
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
export type VerifyEmailCodeRequest = z.infer<typeof VerifyEmailCodeRequest>;
export declare const CompleteSignUpRequest: z.ZodObject<{
    fullName: z.ZodString;
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
export type CompleteSignUpRequest = z.infer<typeof CompleteSignUpRequest>;
