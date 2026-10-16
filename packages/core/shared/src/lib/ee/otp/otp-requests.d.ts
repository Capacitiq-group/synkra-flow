import { z } from 'zod';
import { OtpType } from './otp-type';
export declare const CreateOtpRequestBody: z.ZodObject<{
    email: z.ZodString;
    type: z.ZodEnum<{
        EMAIL_VERIFICATION: OtpType.EMAIL_VERIFICATION;
        PASSWORD_RESET: OtpType.PASSWORD_RESET;
    }>;
}, z.core.$strip>;
export type CreateOtpRequestBody = z.infer<typeof CreateOtpRequestBody>;
