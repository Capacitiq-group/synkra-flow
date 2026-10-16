import { BOTH_CLIENT_CREDENTIALS_AND_AUTHORIZATION_CODE, OAuth2GrantType } from '@activepieces/core-piece-types';
import * as z from "zod/mini";
import { ShortTextProperty } from '../input/text-property';
import { SecretTextProperty } from './secret-text-property';
import { BasePieceAuthSchema } from './common';
import { TPropertyValue } from '../input/common';
import { PropertyType } from '../input/property-type';
import { StaticDropdownProperty } from '../input/dropdown/static-dropdown';
import { StaticPropsValue } from '..';
export declare enum OAuth2AuthorizationMethod {
    HEADER = "HEADER",
    BODY = "BODY"
}
declare const OAuthProp: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SHORT_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    options: z.ZodMiniObject<{
        disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        options: z.ZodMiniArray<z.ZodMiniObject<{
            label: z.ZodMiniString<string>;
            value: z.ZodMiniUnknown;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
    display: z.ZodMiniOptional<z.ZodMiniEnum<{
        cards: "cards";
    }>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>]>;
type OAuthProp = ShortTextProperty<boolean> | SecretTextProperty<boolean> | StaticDropdownProperty<any, boolean>;
export declare const OAuth2Props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SHORT_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    options: z.ZodMiniObject<{
        disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        options: z.ZodMiniArray<z.ZodMiniObject<{
            label: z.ZodMiniString<string>;
            value: z.ZodMiniUnknown;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
    display: z.ZodMiniOptional<z.ZodMiniEnum<{
        cards: "cards";
    }>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>]>>;
export type OAuth2Props = {
    [key: string]: OAuthProp;
};
type OAuthPropsValue<T extends OAuth2Props> = StaticPropsValue<T>;
declare const OAuth2ExtraProps: z.ZodMiniObject<{
    props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SHORT_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        options: z.ZodMiniObject<{
            disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
            options: z.ZodMiniArray<z.ZodMiniObject<{
                label: z.ZodMiniString<string>;
                value: z.ZodMiniUnknown;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            cards: "cards";
        }>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>]>>>;
    authUrl: z.ZodMiniString<string>;
    tokenUrl: z.ZodMiniString<string>;
    scope: z.ZodMiniArray<z.ZodMiniString<string>>;
    prompt: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"none">, z.ZodMiniLiteral<"consent">, z.ZodMiniLiteral<"login">, z.ZodMiniLiteral<"omit">]>>;
    pkce: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    pkceMethod: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"plain">, z.ZodMiniLiteral<"S256">]>>;
    authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof OAuth2AuthorizationMethod>>;
    grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
    extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
type OAuth2ExtraProps = {
    props?: OAuth2Props;
    authUrl: string;
    tokenUrl: string;
    scope: string[];
    prompt?: 'none' | 'consent' | 'login' | 'omit';
    pkce?: boolean;
    pkceMethod?: 'plain' | 'S256';
    authorizationMethod?: OAuth2AuthorizationMethod;
    grantType?: OAuth2GrantType | typeof BOTH_CLIENT_CREDENTIALS_AND_AUTHORIZATION_CODE;
    extra?: Record<string, string>;
};
export declare const OAuth2PropertyValue: z.ZodMiniObject<{
    access_token: z.ZodMiniString<string>;
    props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SHORT_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        options: z.ZodMiniObject<{
            disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
            options: z.ZodMiniArray<z.ZodMiniObject<{
                label: z.ZodMiniString<string>;
                value: z.ZodMiniUnknown;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            cards: "cards";
        }>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>]>>>;
    data: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniAny>;
}, z.z.core.$strip>;
export type OAuth2PropertyValue<T extends OAuth2Props = any> = {
    access_token: string;
    props?: OAuthPropsValue<T>;
    data: Record<string, any>;
};
export declare const OAuth2Property: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.OAUTH2>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SHORT_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        options: z.ZodMiniObject<{
            disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
            options: z.ZodMiniArray<z.ZodMiniObject<{
                label: z.ZodMiniString<string>;
                value: z.ZodMiniUnknown;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            }, z.z.core.$strip>>;
        }, z.z.core.$strip>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            cards: "cards";
        }>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>]>>>;
    authUrl: z.ZodMiniString<string>;
    tokenUrl: z.ZodMiniString<string>;
    scope: z.ZodMiniArray<z.ZodMiniString<string>>;
    prompt: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"none">, z.ZodMiniLiteral<"consent">, z.ZodMiniLiteral<"login">, z.ZodMiniLiteral<"omit">]>>;
    pkce: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    pkceMethod: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"plain">, z.ZodMiniLiteral<"S256">]>>;
    authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof OAuth2AuthorizationMethod>>;
    grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
    extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type OAuth2Property<T extends OAuth2Props> = BasePieceAuthSchema<OAuth2PropertyValue<T>> & OAuth2ExtraProps & TPropertyValue<OAuth2PropertyValue<T>, PropertyType.OAUTH2, true>;
export {};
