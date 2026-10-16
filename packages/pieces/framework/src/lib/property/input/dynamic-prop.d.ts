import * as z from "zod/mini";
import { StaticDropdownProperty, StaticMultiSelectDropdownProperty } from "./dropdown/static-dropdown";
import { ShortTextProperty } from "./text-property";
import { BasePropertySchema, TPropertyValue } from "./common";
import { AppConnectionValueForAuthProperty, PropertyContext } from "../../context";
import { PropertyType } from "./property-type";
import { JsonProperty } from "./json-property";
import { ArrayProperty } from "./array-property";
import { ExtractPieceAuthPropertyTypeForMethods, InputPropertyMap, PieceAuthProperty } from "..";
export declare const DynamicProp: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
}, z.z.core.$strip>]>;
export type DynamicProp = ShortTextProperty<boolean> | StaticDropdownProperty<any, boolean> | JsonProperty<boolean> | ArrayProperty<boolean> | StaticMultiSelectDropdownProperty<any, boolean>;
export declare const DynamicPropsValue: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniObject<{
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
}, z.z.core.$strip>]>>;
export type DynamicPropsValue = Record<string, DynamicProp['valueSchema']>;
export declare const DynamicProperties: z.ZodMiniObject<{
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
}, z.z.core.$strip>;
export type DynamicProperties<R extends boolean, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = undefined> = BasePropertySchema & {
    auth: PieceAuth;
    props: DynamicPropertiesOptions<PieceAuth>;
    refreshers: string[];
} & TPropertyValue<DynamicPropsValue, PropertyType.DYNAMIC, R>;
type DynamicPropertiesOptions<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = undefined> = (propsValue: Record<string, unknown> & {
    auth?: AppConnectionValueForAuthProperty<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>>;
}, ctx: PropertyContext) => Promise<InputPropertyMap>;
export {};
