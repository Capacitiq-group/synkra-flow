import { z } from 'zod';
export declare const VerifyEmailRequestBody: z.ZodObject<{
    identityId: import("zod/mini").ZodMiniString<string>;
    otp: z.ZodString;
}, z.core.$strip>;
export type VerifyEmailRequestBody = z.infer<typeof VerifyEmailRequestBody>;
export declare const ResetPasswordRequestBody: z.ZodObject<{
    identityId: import("zod/mini").ZodMiniString<string>;
    otp: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export type ResetPasswordRequestBody = z.infer<typeof ResetPasswordRequestBody>;
export declare const SignUpAndAcceptRequestBody: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    password: z.ZodString;
    trackEvents: z.ZodBoolean;
    newsLetter: z.ZodBoolean;
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
    captchaToken: z.ZodOptional<z.ZodString>;
    invitationToken: z.ZodString;
}, z.core.$strip>;
export type SignUpAndAcceptRequestBody = z.infer<typeof SignUpAndAcceptRequestBody>;
