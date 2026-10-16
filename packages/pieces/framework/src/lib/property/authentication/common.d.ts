import * as z from "zod/mini";
import { AuthValidationServerContext, ServerContext } from '../../context';
export declare const BasePieceAuthSchema: z.ZodMiniObject<{
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type BasePieceAuthSchema<AuthValueSchema> = {
    displayName: string;
    description?: string;
    validate?: (params: {
        auth: AuthValueSchema;
        server: AuthValidationServerContext;
    }) => Promise<{
        valid: true;
    } | {
        valid: false;
        error: string;
    }>;
    getConnectionIdentifier?: (params: {
        auth: AuthValueSchema;
        server: Omit<ServerContext, 'token'>;
    }) => Promise<string | undefined>;
    hasConnectionIdentifier?: boolean;
};
