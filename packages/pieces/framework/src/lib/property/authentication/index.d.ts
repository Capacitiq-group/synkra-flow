import * as z from "zod/mini";
import { BasicAuthProperty } from "./basic-auth-prop";
import { CustomAuthProperty, CustomAuthProps } from "./custom-auth-prop";
import { OIDCProperty, OIDCAuthProps } from "./oidc-prop";
import { SecretTextProperty } from "./secret-text-property";
import { PropertyType } from "../input/property-type";
import { OAuth2Property, OAuth2Props } from "./oauth2-prop";
import { AppConnectionType } from "@activepieces/core-piece-types";
export declare const PieceAuthProperty: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.BASIC_AUTH>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    username: z.ZodMiniObject<{
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>;
    password: z.ZodMiniObject<{
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.CUSTOM_AUTH>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
        type: z.ZodMiniLiteral<PropertyType.LONG_TEXT>;
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
        type: z.ZodMiniLiteral<PropertyType.NUMBER>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            stepper: "stepper";
        }>>;
        min: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        max: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        step: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
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
        type: z.ZodMiniLiteral<PropertyType.CHECKBOX>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        reveals: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
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
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.OIDC>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
        type: z.ZodMiniLiteral<PropertyType.LONG_TEXT>;
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
        type: z.ZodMiniLiteral<PropertyType.NUMBER>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            stepper: "stepper";
        }>>;
        min: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        max: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        step: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
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
        type: z.ZodMiniLiteral<PropertyType.CHECKBOX>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        reveals: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
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
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
        type: z.ZodMiniLiteral<PropertyType.MARKDOWN>;
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
    }, z.z.core.$strip>]>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
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
    authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./oauth2-prop").OAuth2AuthorizationMethod>>;
    grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
    extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>]>;
export type PieceAuthProperty = BasicAuthProperty | CustomAuthProperty<any> | OIDCProperty<any> | OAuth2Property<any> | SecretTextProperty<boolean>;
type AuthProperties<T> = Omit<Properties<T>, 'displayName'> & {
    displayName?: string;
};
type Properties<T> = Omit<T, 'valueSchema' | 'type' | 'defaultValidators' | 'defaultProcessors'>;
export declare const DEFAULT_CONNECTION_DISPLAY_NAME = "Connection";
export declare const PieceAuth: {
    SecretText<R extends boolean>(request: Properties<SecretTextProperty<R>>): R extends true ? SecretTextProperty<true> : SecretTextProperty<false>;
    OAuth2<T extends OAuth2Props>(request: AuthProperties<OAuth2Property<T>>): OAuth2Property<T>;
    BasicAuth(request: AuthProperties<BasicAuthProperty>): BasicAuthProperty;
    CustomAuth<T extends CustomAuthProps>(request: AuthProperties<CustomAuthProperty<T>>): CustomAuthProperty<T>;
    OIDC<T extends OIDCAuthProps>(request: AuthProperties<OIDCProperty<T>>): OIDCProperty<T>;
    None(): undefined;
};
export type ExtractPieceAuthPropertyTypeForMethods<T extends PieceAuthProperty | PieceAuthProperty[] | undefined> = T extends PieceAuthProperty[] ? T[number] : T extends undefined ? undefined : T;
export declare function getAuthPropertyForValue({ authValueType, pieceAuth }: GetAuthPropertyForValue): PieceAuthProperty | undefined;
type GetAuthPropertyForValue = {
    authValueType: AppConnectionType;
    pieceAuth: PieceAuthProperty | PieceAuthProperty[] | undefined;
};
export {};
