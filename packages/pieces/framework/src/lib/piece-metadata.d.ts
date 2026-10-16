import { PiecePropertyMap } from "./property";
import { WebhookRenewConfiguration } from "./trigger/trigger";
import { ErrorHandlingOptionsParam } from "./action/action";
import { PieceAuthProperty } from "./property/authentication";
import * as z from "zod/mini";
import { LocalesEnum } from "@activepieces/core-utils";
import { PackageType, PieceCategory, PieceType, TriggerStrategy, TriggerTestStrategy, WebhookHandshakeConfiguration } from "@activepieces/core-piece-types";
import { ContextVersion } from "./context/versioning";
import type { OutputSchema } from "./output-schema";
export type I18nForPiece = Partial<Record<LocalesEnum, Record<string, string>>> | undefined;
export declare const PieceBase: z.ZodMiniObject<{
    id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    logoUrl: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    authors: z.ZodMiniArray<z.ZodMiniString<string>>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    directoryPath: z.ZodMiniOptional<z.ZodMiniString<string>>;
    auth: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>, z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>>]>>;
    version: z.ZodMiniString<string>;
    categories: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    maximumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    deprecated: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    i18n: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type PieceBase = {
    id?: string;
    name: string;
    displayName: string;
    logoUrl: string;
    description: string;
    platformId?: string;
    authors: string[];
    directoryPath?: string;
    auth?: PieceAuthProperty | PieceAuthProperty[];
    version: string;
    categories?: PieceCategory[];
    minimumSupportedRelease?: string;
    maximumSupportedRelease?: string;
    deprecated?: boolean;
    i18n?: Partial<Record<LocalesEnum, Record<string, string>>>;
    getContextInfo: (() => {
        version: ContextVersion;
    }) | undefined;
};
export declare const Audience: z.ZodMiniEnum<{
    human: "human";
    ai: "ai";
    both: "both";
}>;
export type Audience = z.infer<typeof Audience>;
export declare const AiMetadata: z.ZodMiniObject<{
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type AiMetadata = z.infer<typeof AiMetadata>;
export declare const ActionClassification: z.ZodMiniEnum<{
    READ: "READ";
    SEARCH: "SEARCH";
    WRITE: "WRITE";
    DESTRUCTIVE: "DESTRUCTIVE";
}>;
export type ActionClassification = z.infer<typeof ActionClassification>;
export declare const READ_ONLY_CLASSIFICATIONS: readonly ActionClassification[];
export declare const isReadOnlyClassification: (classification: ActionClassification | undefined) => boolean;
export declare const PropertyGroupDisplay: z.ZodMiniEnum<{
    tabs: "tabs";
    section: "section";
    summary: "summary";
    builder: "builder";
    footer: "footer";
}>;
export type PropertyGroupDisplay = z.infer<typeof PropertyGroupDisplay>;
export declare const PropertyGroup: z.ZodMiniObject<{
    key: z.ZodMiniString<string>;
    display: z.ZodMiniEnum<{
        tabs: "tabs";
        section: "section";
        summary: "summary";
        builder: "builder";
        footer: "footer";
    }>;
    label: z.ZodMiniOptional<z.ZodMiniString<string>>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    props: z.ZodMiniArray<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type PropertyGroup = z.infer<typeof PropertyGroup>;
export declare const ActionBase: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            dropdown: "dropdown";
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
    }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>]>>;
    propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        key: z.ZodMiniString<string>;
        display: z.ZodMiniEnum<{
            tabs: "tabs";
            section: "section";
            summary: "summary";
            builder: "builder";
            footer: "footer";
        }>;
        label: z.ZodMiniOptional<z.ZodMiniString<string>>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        props: z.ZodMiniArray<z.ZodMiniString<string>>;
    }, z.z.core.$strip>>>;
    requireAuth: z.ZodMiniBoolean<boolean>;
    errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
        retryOnFailure: z.ZodMiniObject<{
            defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>;
        continueOnFailure: z.ZodMiniObject<{
            defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>>;
    outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
    audience: z.ZodMiniOptional<z.ZodMiniEnum<{
        human: "human";
        ai: "ai";
        both: "both";
    }>>;
    aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>>;
    classification: z.ZodMiniOptional<z.ZodMiniEnum<{
        READ: "READ";
        SEARCH: "SEARCH";
        WRITE: "WRITE";
        DESTRUCTIVE: "DESTRUCTIVE";
    }>>;
}, z.z.core.$strip>;
export type ActionBase = {
    name: string;
    displayName: string;
    description: string;
    props: PiecePropertyMap;
    propertyGroups?: PropertyGroup[];
    requireAuth: boolean;
    errorHandlingOptions?: ErrorHandlingOptionsParam;
    outputSchema?: OutputSchema;
    audience?: Audience;
    aiMetadata?: AiMetadata;
    classification?: ActionClassification;
};
export declare const TriggerBase: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
        advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        width: z.ZodMiniOptional<z.ZodMiniEnum<{
            half: "half";
            full: "full";
        }>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        display: z.ZodMiniOptional<z.ZodMiniEnum<{
            dropdown: "dropdown";
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
    }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>]>>;
    propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        key: z.ZodMiniString<string>;
        display: z.ZodMiniEnum<{
            tabs: "tabs";
            section: "section";
            summary: "summary";
            builder: "builder";
            footer: "footer";
        }>;
        label: z.ZodMiniOptional<z.ZodMiniString<string>>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        props: z.ZodMiniArray<z.ZodMiniString<string>>;
    }, z.z.core.$strip>>>;
    errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
        retryOnFailure: z.ZodMiniObject<{
            defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>;
        continueOnFailure: z.ZodMiniObject<{
            defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>>;
    type: z.ZodMiniEnum<typeof TriggerStrategy>;
    sampleData: z.ZodMiniUnknown;
    handshakeConfiguration: z.ZodMiniOptional<z.ZodMiniCustom<{
        strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
        paramName?: string | undefined;
    }, {
        strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
        paramName?: string | undefined;
    }>>;
    renewConfiguration: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
        cronExpression: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
    }, z.z.core.$strip>]>>;
    testStrategy: z.ZodMiniEnum<typeof TriggerTestStrategy>;
    outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
    aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>>;
    classification: z.ZodMiniOptional<z.ZodMiniEnum<{
        READ: "READ";
        SEARCH: "SEARCH";
        WRITE: "WRITE";
        DESTRUCTIVE: "DESTRUCTIVE";
    }>>;
}, z.z.core.$strip>;
export type TriggerBase = Omit<ActionBase, 'audience'> & {
    type: TriggerStrategy;
    sampleData: unknown;
    handshakeConfiguration?: WebhookHandshakeConfiguration;
    renewConfiguration?: WebhookRenewConfiguration;
    testStrategy: TriggerTestStrategy;
};
export declare const PieceMetadata: z.ZodMiniObject<{
    actions: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        requireAuth: z.ZodMiniBoolean<boolean>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        audience: z.ZodMiniOptional<z.ZodMiniEnum<{
            human: "human";
            ai: "ai";
            both: "both";
        }>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>;
    triggers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        type: z.ZodMiniEnum<typeof TriggerStrategy>;
        sampleData: z.ZodMiniUnknown;
        handshakeConfiguration: z.ZodMiniOptional<z.ZodMiniCustom<{
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }, {
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }>>;
        renewConfiguration: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: z.ZodMiniString<string>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }, z.z.core.$strip>]>>;
        testStrategy: z.ZodMiniEnum<typeof TriggerTestStrategy>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>;
    id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    logoUrl: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    authors: z.ZodMiniArray<z.ZodMiniString<string>>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    directoryPath: z.ZodMiniOptional<z.ZodMiniString<string>>;
    auth: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>, z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>>]>>;
    version: z.ZodMiniString<string>;
    categories: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    maximumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    deprecated: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    i18n: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type PieceMetadata = Omit<PieceBase, 'getContextInfo'> & {
    actions: Record<string, ActionBase>;
    triggers: Record<string, TriggerBase>;
    contextInfo: {
        version: ContextVersion;
    } | undefined;
};
export declare const PieceMetadataSummary: z.ZodMiniObject<{
    actions: z.ZodMiniNumber<number>;
    triggers: z.ZodMiniNumber<number>;
    suggestedActions: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        requireAuth: z.ZodMiniBoolean<boolean>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        audience: z.ZodMiniOptional<z.ZodMiniEnum<{
            human: "human";
            ai: "ai";
            both: "both";
        }>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>>;
    suggestedTriggers: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        type: z.ZodMiniEnum<typeof TriggerStrategy>;
        sampleData: z.ZodMiniUnknown;
        handshakeConfiguration: z.ZodMiniOptional<z.ZodMiniCustom<{
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }, {
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }>>;
        renewConfiguration: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: z.ZodMiniString<string>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }, z.z.core.$strip>]>>;
        testStrategy: z.ZodMiniEnum<typeof TriggerTestStrategy>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>>;
    id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    logoUrl: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    authors: z.ZodMiniArray<z.ZodMiniString<string>>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    directoryPath: z.ZodMiniOptional<z.ZodMiniString<string>>;
    auth: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>, z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>>]>>;
    version: z.ZodMiniString<string>;
    categories: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    maximumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    deprecated: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    i18n: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type PieceMetadataSummary = Omit<PieceMetadata, "actions" | "triggers"> & {
    actions: number;
    triggers: number;
    suggestedActions?: ActionBase[];
    suggestedTriggers?: TriggerBase[];
};
declare const PiecePackageMetadata: z.ZodMiniObject<{
    projectUsage: z.ZodMiniNumber<number>;
    pieceType: z.ZodMiniEnum<typeof PieceType>;
    packageType: z.ZodMiniEnum<typeof PackageType>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    archiveId: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
type PiecePackageMetadata = z.infer<typeof PiecePackageMetadata>;
export declare const PieceMetadataModel: z.ZodMiniObject<{
    projectUsage: z.ZodMiniNumber<number>;
    pieceType: z.ZodMiniEnum<typeof PieceType>;
    packageType: z.ZodMiniEnum<typeof PackageType>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    archiveId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    actions: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        requireAuth: z.ZodMiniBoolean<boolean>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        audience: z.ZodMiniOptional<z.ZodMiniEnum<{
            human: "human";
            ai: "ai";
            both: "both";
        }>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>;
    triggers: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        type: z.ZodMiniEnum<typeof TriggerStrategy>;
        sampleData: z.ZodMiniUnknown;
        handshakeConfiguration: z.ZodMiniOptional<z.ZodMiniCustom<{
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }, {
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }>>;
        renewConfiguration: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: z.ZodMiniString<string>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }, z.z.core.$strip>]>>;
        testStrategy: z.ZodMiniEnum<typeof TriggerTestStrategy>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>;
    id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    logoUrl: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    authors: z.ZodMiniArray<z.ZodMiniString<string>>;
    directoryPath: z.ZodMiniOptional<z.ZodMiniString<string>>;
    auth: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>, z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>>]>>;
    version: z.ZodMiniString<string>;
    categories: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    maximumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    deprecated: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    i18n: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type PieceMetadataModel = PieceMetadata & PiecePackageMetadata;
export declare const PieceMetadataModelSummary: z.ZodMiniObject<{
    projectUsage: z.ZodMiniNumber<number>;
    pieceType: z.ZodMiniEnum<typeof PieceType>;
    packageType: z.ZodMiniEnum<typeof PackageType>;
    platformId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    archiveId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    actions: z.ZodMiniNumber<number>;
    triggers: z.ZodMiniNumber<number>;
    suggestedActions: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        requireAuth: z.ZodMiniBoolean<boolean>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        audience: z.ZodMiniOptional<z.ZodMiniEnum<{
            human: "human";
            ai: "ai";
            both: "both";
        }>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>>;
    suggestedTriggers: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniString<string>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.RICH_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.DROPDOWN>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
            type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DYNAMIC>;
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
            refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.ARRAY>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
                type: z.ZodMiniLiteral<import("./property").PropertyType.MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            width: z.ZodMiniOptional<z.ZodMiniEnum<{
                half: "half";
                full: "full";
            }>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.OBJECT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.JSON>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_TIME>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.DATE_RANGE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            display: z.ZodMiniOptional<z.ZodMiniEnum<{
                dropdown: "dropdown";
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.FILE>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.COLOR>;
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
        }, z.z.core.$strip>]>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
                type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
                required: z.ZodMiniBoolean<boolean>;
                defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
                displayName: z.ZodMiniString<string>;
                description: z.ZodMiniOptional<z.ZodMiniString<string>>;
                hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>, z.ZodMiniObject<{
                type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
            extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>]>]>>;
        propertyGroups: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            key: z.ZodMiniString<string>;
            display: z.ZodMiniEnum<{
                tabs: "tabs";
                section: "section";
                summary: "summary";
                builder: "builder";
                footer: "footer";
            }>;
            label: z.ZodMiniOptional<z.ZodMiniString<string>>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
            props: z.ZodMiniArray<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>>;
        errorHandlingOptions: z.ZodMiniOptional<z.ZodMiniObject<{
            retryOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
            continueOnFailure: z.ZodMiniObject<{
                defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
                hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
            }, z.z.core.$strip>;
        }, z.z.core.$strip>>;
        type: z.ZodMiniEnum<typeof TriggerStrategy>;
        sampleData: z.ZodMiniUnknown;
        handshakeConfiguration: z.ZodMiniOptional<z.ZodMiniCustom<{
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }, {
            strategy: import("@activepieces/core-piece-types").WebhookHandshakeStrategy;
            paramName?: string | undefined;
        }>>;
        renewConfiguration: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: z.ZodMiniString<string>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            strategy: z.ZodMiniLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }, z.z.core.$strip>]>>;
        testStrategy: z.ZodMiniEnum<typeof TriggerTestStrategy>;
        outputSchema: z.ZodMiniOptional<z.ZodMiniCustom<OutputSchema, OutputSchema>>;
        aiMetadata: z.ZodMiniOptional<z.ZodMiniObject<{
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            idempotent: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>>;
        classification: z.ZodMiniOptional<z.ZodMiniEnum<{
            READ: "READ";
            SEARCH: "SEARCH";
            WRITE: "WRITE";
            DESTRUCTIVE: "DESTRUCTIVE";
        }>>;
    }, z.z.core.$strip>>>;
    id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name: z.ZodMiniString<string>;
    displayName: z.ZodMiniString<string>;
    logoUrl: z.ZodMiniString<string>;
    description: z.ZodMiniString<string>;
    authors: z.ZodMiniArray<z.ZodMiniString<string>>;
    directoryPath: z.ZodMiniOptional<z.ZodMiniString<string>>;
    auth: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>, z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.BASIC_AUTH>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.CUSTOM_AUTH>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OIDC>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.LONG_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.NUMBER>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.CHECKBOX>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.MARKDOWN>;
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
        type: z.ZodMiniLiteral<import("./property").PropertyType.OAUTH2>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        props: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.SHORT_TEXT>;
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
            type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
            required: z.ZodMiniBoolean<boolean>;
            defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
            displayName: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        }, z.z.core.$strip>, z.ZodMiniObject<{
            type: z.ZodMiniLiteral<import("./property").PropertyType.STATIC_DROPDOWN>;
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
        authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniEnum<typeof import("@activepieces/core-piece-types").OAuth2GrantType>, z.ZodMiniLiteral<"both_client_credentials_and_authorization_code">]>>;
        extra: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<import("./property").PropertyType.SECRET_TEXT>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>]>>]>>;
    version: z.ZodMiniString<string>;
    categories: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    maximumSupportedRelease: z.ZodMiniOptional<z.ZodMiniString<string>>;
    deprecated: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    i18n: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
}, z.z.core.$strip>;
export type PieceMetadataModelSummary = PieceMetadataSummary & PiecePackageMetadata;
export declare const PiecePackageInformation: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    version: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type PiecePackageInformation = z.infer<typeof PiecePackageInformation>;
export {};
