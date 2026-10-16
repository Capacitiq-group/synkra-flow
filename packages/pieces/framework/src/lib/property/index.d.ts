import { InputProperty } from './input';
import { PieceAuthProperty } from './authentication';
import * as z from "zod/mini";
import { PropertyType } from './input/property-type';
import { DropdownState } from './input/dropdown/common';
export { ApFile } from './input/file-property';
export type { ApStreamingFile } from './input/file-property';
export { DropdownProperty, MultiSelectDropdownProperty } from './input/dropdown/dropdown-prop';
export { DynamicProperties, DynamicProp } from './input/dynamic-prop';
export { PropertyType } from './input/property-type';
export { Property } from './input';
export { PieceAuth, getAuthPropertyForValue } from './authentication';
export type { ExtractPieceAuthPropertyTypeForMethods } from './authentication';
export { DynamicPropsValue } from './input/dynamic-prop';
export { DropdownOption, DropdownState } from './input/dropdown/common';
export { OAuth2PropertyValue } from './authentication/oauth2-prop';
export { PieceAuthProperty, DEFAULT_CONNECTION_DISPLAY_NAME } from './authentication';
export { ShortTextProperty } from './input/text-property';
export { RichTextProperty } from './input/rich-text-property';
export { ArrayProperty, ArraySubProps } from './input/array-property';
export { BasePropertySchema } from './input/common';
export { CheckboxProperty } from './input/checkbox-property';
export { DateTimeProperty } from './input/date-time-property';
export { DateRangeProperty, DateRangeValue, DateRangePreset, dateRangeUtils } from './input/date-range-property';
export { LongTextProperty } from './input/text-property';
export { NumberProperty } from './input/number-property';
export { ObjectProperty } from './input/object-property';
export { OAuth2Props } from './authentication/oauth2-prop';
export { OAuth2AuthorizationMethod } from './authentication/oauth2-prop';
export { BasicAuthPropertyValue } from './authentication/basic-auth-prop';
export { StaticMultiSelectDropdownProperty } from './input/dropdown/static-dropdown';
export { StaticDropdownProperty } from './input/dropdown/static-dropdown';
export * from './authentication/custom-auth-prop';
export * from './authentication/oidc-prop';
export { OAuth2Property } from './authentication/oauth2-prop';
export { FileProperty } from './input/file-property';
export { BasicAuthProperty } from './authentication/basic-auth-prop';
export { SecretTextProperty } from './authentication/secret-text-property';
export { CustomAuthProperty } from './authentication/custom-auth-prop';
export { JsonProperty } from './input/json-property';
export declare const PieceProperty: z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    type: z.ZodMiniLiteral<PropertyType.RICH_TEXT>;
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
    refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    type: z.ZodMiniLiteral<PropertyType.DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
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
    type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DYNAMIC>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.ARRAY>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
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
        type: z.ZodMiniLiteral<PropertyType.FILE>;
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
        type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.OBJECT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.JSON>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_RANGE>;
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
    type: z.ZodMiniLiteral<PropertyType.FILE>;
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
    type: z.ZodMiniLiteral<PropertyType.COLOR>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./authentication/oauth2-prop").OAuth2AuthorizationMethod>>;
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
}, z.z.core.$strip>]>]>;
export type PieceProperty = InputProperty | PieceAuthProperty;
export { CustomProperty } from './input/custom-property';
export type { CustomPropertyCodeFunctionParams } from './input/custom-property';
export declare const PiecePropertyMap: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    type: z.ZodMiniLiteral<PropertyType.RICH_TEXT>;
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
    refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    type: z.ZodMiniLiteral<PropertyType.DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
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
    type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DYNAMIC>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.ARRAY>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
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
        type: z.ZodMiniLiteral<PropertyType.FILE>;
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
        type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.OBJECT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.JSON>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_RANGE>;
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
    type: z.ZodMiniLiteral<PropertyType.FILE>;
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
    type: z.ZodMiniLiteral<PropertyType.COLOR>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    authorizationMethod: z.ZodMiniOptional<z.ZodMiniEnum<typeof import("./authentication/oauth2-prop").OAuth2AuthorizationMethod>>;
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
}, z.z.core.$strip>]>]>>;
export interface PiecePropertyMap {
    [name: string]: PieceProperty;
}
export type { InputProperty } from './input';
export declare const InputPropertyMap: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
    type: z.ZodMiniLiteral<PropertyType.RICH_TEXT>;
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
    refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    type: z.ZodMiniLiteral<PropertyType.DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
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
    type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DYNAMIC>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.ARRAY>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    properties: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
        refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
        type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
        displayName: z.ZodMiniString<string>;
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
        type: z.ZodMiniLiteral<PropertyType.FILE>;
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
        type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
        required: z.ZodMiniBoolean<boolean>;
        defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
    type: z.ZodMiniLiteral<PropertyType.OBJECT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.JSON>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_TIME>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_RANGE>;
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
    type: z.ZodMiniLiteral<PropertyType.FILE>;
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
    type: z.ZodMiniLiteral<PropertyType.COLOR>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
export interface InputPropertyMap {
    [name: string]: InputProperty;
}
export { piecePropertiesUtils } from './util';
export type PiecePropValueSchema<T extends PieceProperty> = T extends undefined ? undefined : T extends {
    required: true;
} ? T['valueSchema'] : T['valueSchema'] | undefined;
export type StaticPropsValue<T extends PiecePropertyMap> = {
    [P in keyof T]: PiecePropValueSchema<T[P]>;
};
export type ExecutePropsResult<T extends PropertyType.DROPDOWN | PropertyType.MULTI_SELECT_DROPDOWN | PropertyType.DYNAMIC> = {
    type: T;
    options: T extends PropertyType.DROPDOWN ? DropdownState<unknown> : T extends PropertyType.MULTI_SELECT_DROPDOWN ? DropdownState<unknown> : InputPropertyMap;
};
