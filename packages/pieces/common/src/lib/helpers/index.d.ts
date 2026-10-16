import { ActionClassification, OAuth2PropertyValue, PieceAuthProperty, Property, StaticDropdownProperty, StaticPropsValue, InputPropertyMap, AppConnectionValueForAuthProperty, ExtractPieceAuthPropertyTypeForMethods } from '@activepieces/pieces-framework';
import { HttpHeaders, HttpMethod, QueryParams } from '../http';
export declare const getAccessTokenOrThrow: (auth: OAuth2PropertyValue | undefined) => string;
type BaseUrlGetter<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined> = (auth?: AppConnectionValueForAuthProperty<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>>) => string;
export declare function createCustomApiCallAction<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined>({ auth, baseUrl, authMapping, description, displayName, name, props, extraProps, authLocation, classification, }: {
    auth?: PieceAuth;
    baseUrl: BaseUrlGetter<PieceAuth>;
    authMapping?: (auth: AppConnectionValueForAuthProperty<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>>, propsValue: StaticPropsValue<any>) => Promise<HttpHeaders | QueryParams>;
    description?: string | null;
    displayName?: string | null;
    name?: string | null;
    props?: {
        url?: Partial<ReturnType<typeof Property.ShortText>>;
        method?: Partial<StaticDropdownProperty<HttpMethod, boolean>>;
        headers?: Partial<ReturnType<typeof Property.Object>>;
        queryParams?: Partial<ReturnType<typeof Property.Object>>;
        body?: Partial<ReturnType<typeof Property.Json>>;
        response_is_binary?: Partial<ReturnType<typeof Property.Checkbox>>;
        failsafe?: Partial<ReturnType<typeof Property.Checkbox>>;
        timeout?: Partial<ReturnType<typeof Property.Number>>;
        followRedirects?: Partial<ReturnType<typeof Property.Checkbox>>;
    };
    extraProps?: InputPropertyMap;
    authLocation?: 'headers' | 'queryParams';
    classification?: ActionClassification;
}): import("@activepieces/pieces-framework").IAction<PieceAuth, {
    url: import("@activepieces/pieces-framework").DynamicProperties<true, PieceAuth | undefined>;
    method: StaticDropdownProperty<HttpMethod, false> | StaticDropdownProperty<HttpMethod, true>;
    headers: import("@activepieces/pieces-framework").ObjectProperty<true> | import("@activepieces/pieces-framework").ObjectProperty<false>;
    queryParams: import("@activepieces/pieces-framework").ObjectProperty<true> | import("@activepieces/pieces-framework").ObjectProperty<false>;
    body_type: import("@activepieces/pieces-framework").DropdownProperty<string, false, PieceAuth | undefined>;
    body: import("@activepieces/pieces-framework").DynamicProperties<false, PieceAuth | undefined>;
    response_is_binary: import("@activepieces/pieces-framework").CheckboxProperty<true> | import("@activepieces/pieces-framework").CheckboxProperty<false>;
    failsafe: import("@activepieces/pieces-framework").CheckboxProperty<true> | import("@activepieces/pieces-framework").CheckboxProperty<false>;
    timeout: import("@activepieces/pieces-framework").NumberProperty<true> | import("@activepieces/pieces-framework").NumberProperty<false>;
    followRedirects: import("@activepieces/pieces-framework").CheckboxProperty<true> | import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
export declare function is_chromium_installed(): boolean;
export {};
