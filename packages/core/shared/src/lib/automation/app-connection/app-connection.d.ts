import { BaseModel, Metadata } from '@activepieces/core-utils';
import { z } from 'zod';
import { UserWithMetaInformation } from '../../core/user';
import { OAuth2GrantType } from './dto/upsert-app-connection-request';
import { OAuth2AuthorizationMethod } from './oauth2-authorization-method';
export type AppConnectionId = string;
export declare enum AppConnectionStatus {
    ACTIVE = "ACTIVE",
    MISSING = "MISSING",
    ERROR = "ERROR"
}
export declare enum AppConnectionScope {
    PROJECT = "PROJECT",
    PLATFORM = "PLATFORM"
}
export declare enum AppConnectionType {
    OAUTH2 = "OAUTH2",
    PLATFORM_OAUTH2 = "PLATFORM_OAUTH2",
    CLOUD_OAUTH2 = "CLOUD_OAUTH2",
    SECRET_TEXT = "SECRET_TEXT",
    BASIC_AUTH = "BASIC_AUTH",
    CUSTOM_AUTH = "CUSTOM_AUTH",
    OIDC = "OIDC",
    NO_AUTH = "NO_AUTH"
}
export type SecretTextConnectionValue = {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
};
export type BasicAuthConnectionValue = {
    username: string;
    password: string;
    type: AppConnectionType.BASIC_AUTH;
};
export type BaseOAuth2ConnectionValue = {
    expires_in?: number;
    client_id: string;
    token_type: string;
    access_token: string;
    claimed_at: number;
    refresh_token: string;
    scope: string;
    token_url: string;
    authorization_method?: OAuth2AuthorizationMethod;
    data: Record<string, any>;
    props?: Record<string, unknown>;
    grant_type?: OAuth2GrantType;
};
export type CustomAuthConnectionValue<T extends Record<string, unknown> = Record<string, unknown>> = {
    type: AppConnectionType.CUSTOM_AUTH;
    props: T;
    access_token?: string;
    token_refresh_at?: number;
};
export type OIDCConnectionValue<T extends Record<string, unknown> = Record<string, unknown>> = {
    type: AppConnectionType.OIDC;
    props: T;
};
export type CloudOAuth2ConnectionValue = {
    type: AppConnectionType.CLOUD_OAUTH2;
} & BaseOAuth2ConnectionValue;
export type PlatformOAuth2ConnectionValue = {
    type: AppConnectionType.PLATFORM_OAUTH2;
    redirect_url: string;
} & BaseOAuth2ConnectionValue;
export type OAuth2ConnectionValueWithApp = {
    type: AppConnectionType.OAUTH2;
    client_secret: string;
    redirect_url: string;
} & BaseOAuth2ConnectionValue;
export type NoAuthConnectionValue = {
    type: AppConnectionType.NO_AUTH;
};
export type AppConnectionValue<T extends AppConnectionType = AppConnectionType, PropsType extends Record<string, unknown> = Record<string, unknown>> = T extends AppConnectionType.SECRET_TEXT ? SecretTextConnectionValue : T extends AppConnectionType.BASIC_AUTH ? BasicAuthConnectionValue : T extends AppConnectionType.CLOUD_OAUTH2 ? CloudOAuth2ConnectionValue : T extends AppConnectionType.PLATFORM_OAUTH2 ? PlatformOAuth2ConnectionValue : T extends AppConnectionType.OAUTH2 ? OAuth2ConnectionValueWithApp : T extends AppConnectionType.CUSTOM_AUTH ? CustomAuthConnectionValue<PropsType> : T extends AppConnectionType.OIDC ? OIDCConnectionValue<PropsType> : T extends AppConnectionType.NO_AUTH ? NoAuthConnectionValue : never;
export type AppConnection<Type extends AppConnectionType = AppConnectionType> = BaseModel<AppConnectionId> & {
    externalId: string;
    type: Type;
    scope: AppConnectionScope;
    pieceName: string;
    displayName: string;
    projectIds: string[];
    platformId: string;
    status: AppConnectionStatus;
    ownerId: string;
    owner: UserWithMetaInformation | null;
    value: AppConnectionValue<Type>;
    metadata: Metadata | null;
    pieceVersion: string;
    preSelectForNewProjects: boolean;
};
export declare const AppConnectionWithoutSensitiveData: z.ZodObject<{
    externalId: z.ZodString;
    displayName: z.ZodString;
    type: z.ZodEnum<typeof AppConnectionType>;
    pieceName: z.ZodString;
    projectIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    scope: z.ZodEnum<typeof AppConnectionScope>;
    status: z.ZodEnum<typeof AppConnectionStatus>;
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
    flowIds: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodArray<import("zod/mini").ZodMiniString<string>>>>;
    pieceVersion: z.ZodString;
    preSelectForNewProjects: z.ZodBoolean;
    usingSecretManager: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type AppConnectionWithoutSensitiveData = z.infer<typeof AppConnectionWithoutSensitiveData>;
export declare const AppConnectionOwners: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type AppConnectionOwners = z.infer<typeof AppConnectionOwners>;
export declare const resolveValueFromProps: (props: Record<string, unknown> | undefined, value: string) => string;
