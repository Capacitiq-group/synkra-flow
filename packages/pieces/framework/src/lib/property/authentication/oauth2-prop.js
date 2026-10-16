"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Property = exports.OAuth2PropertyValue = exports.OAuth2Props = exports.OAuth2AuthorizationMethod = void 0;
const tslib_1 = require("tslib");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const z = tslib_1.__importStar(require("zod/mini"));
const text_property_1 = require("../input/text-property");
const secret_text_property_1 = require("./secret-text-property");
const common_1 = require("./common");
const common_2 = require("../input/common");
const property_type_1 = require("../input/property-type");
const static_dropdown_1 = require("../input/dropdown/static-dropdown");
var OAuth2AuthorizationMethod;
(function (OAuth2AuthorizationMethod) {
    OAuth2AuthorizationMethod["HEADER"] = "HEADER";
    OAuth2AuthorizationMethod["BODY"] = "BODY";
})(OAuth2AuthorizationMethod || (exports.OAuth2AuthorizationMethod = OAuth2AuthorizationMethod = {}));
const OAuthProp = z.union([
    text_property_1.ShortTextProperty,
    secret_text_property_1.SecretTextProperty,
    static_dropdown_1.StaticDropdownProperty,
]);
exports.OAuth2Props = z.record(z.string(), OAuthProp);
const OAuth2ExtraProps = z.object({
    props: z.optional(z.record(z.string(), OAuthProp)),
    authUrl: z.string(),
    tokenUrl: z.string(),
    scope: z.array(z.string()),
    prompt: z.optional(z.union([z.literal('none'), z.literal('consent'), z.literal('login'), z.literal('omit')])),
    pkce: z.optional(z.boolean()),
    pkceMethod: z.optional(z.union([z.literal('plain'), z.literal('S256')])),
    authorizationMethod: z.optional(z.enum(OAuth2AuthorizationMethod)),
    grantType: z.optional(z.union([z.enum(core_piece_types_1.OAuth2GrantType), z.literal(core_piece_types_1.BOTH_CLIENT_CREDENTIALS_AND_AUTHORIZATION_CODE)])),
    extra: z.optional(z.record(z.string(), z.string())),
});
exports.OAuth2PropertyValue = z.object({
    access_token: z.string(),
    props: z.optional(exports.OAuth2Props),
    data: z.record(z.string(), z.any())
});
exports.OAuth2Property = z.object(Object.assign(Object.assign(Object.assign({}, common_1.BasePieceAuthSchema.shape), OAuth2ExtraProps.shape), (0, common_2.TPropertyValue)(exports.OAuth2PropertyValue, property_type_1.PropertyType.OAUTH2).shape));
//# sourceMappingURL=oauth2-prop.js.map