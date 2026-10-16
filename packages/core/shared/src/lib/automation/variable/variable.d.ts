import { BaseModel, Metadata } from '@activepieces/core-utils';
import { z } from 'zod';
import { UserWithMetaInformation } from '../../core/user';
export declare const VARIABLE_NAME_REGEX: RegExp;
export type VariableId = string;
export type VariableValue = {
    secret_text: string;
};
export type Variable = BaseModel<VariableId> & {
    name: string;
    projectId: string;
    platformId: string;
    ownerId: string | null;
    owner: UserWithMetaInformation | null;
    metadata: Metadata | null;
    value: VariableValue;
};
export declare const VariableWithoutSensitiveData: z.ZodObject<{
    name: z.ZodString;
    projectId: z.ZodString;
    platformId: z.ZodString;
    ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    owner: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        firstName: z.ZodString;
        status: z.ZodEnum<typeof import("../../core/user").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformRole: z.ZodEnum<typeof import("../../core/user").PlatformRole>;
        lastName: z.ZodString;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type VariableWithoutSensitiveData = z.infer<typeof VariableWithoutSensitiveData>;
