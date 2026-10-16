"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieceAuth = exports.DEFAULT_CONNECTION_DISPLAY_NAME = exports.PieceAuthProperty = void 0;
exports.getAuthPropertyForValue = getAuthPropertyForValue;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const basic_auth_prop_1 = require("./basic-auth-prop");
const custom_auth_prop_1 = require("./custom-auth-prop");
const oidc_prop_1 = require("./oidc-prop");
const secret_text_property_1 = require("./secret-text-property");
const property_type_1 = require("../input/property-type");
const oauth2_prop_1 = require("./oauth2-prop");
const core_utils_1 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
exports.PieceAuthProperty = z.union([
    basic_auth_prop_1.BasicAuthProperty,
    custom_auth_prop_1.CustomAuthProperty,
    oidc_prop_1.OIDCProperty,
    oauth2_prop_1.OAuth2Property,
    secret_text_property_1.SecretTextProperty,
]);
exports.DEFAULT_CONNECTION_DISPLAY_NAME = 'Connection';
exports.PieceAuth = {
    SecretText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.SECRET_TEXT });
    },
    OAuth2(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.OAUTH2, displayName: request.displayName || exports.DEFAULT_CONNECTION_DISPLAY_NAME });
    },
    BasicAuth(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.BASIC_AUTH, displayName: request.displayName || exports.DEFAULT_CONNECTION_DISPLAY_NAME, required: true });
    },
    CustomAuth(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.CUSTOM_AUTH, displayName: request.displayName || exports.DEFAULT_CONNECTION_DISPLAY_NAME });
    },
    OIDC(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.OIDC, displayName: request.displayName || exports.DEFAULT_CONNECTION_DISPLAY_NAME });
    },
    None() {
        return undefined;
    },
};
function getAuthPropertyForValue({ authValueType, pieceAuth }) {
    var _a;
    if (!Array.isArray(pieceAuth) || (0, core_utils_1.isNil)(pieceAuth)) {
        return pieceAuth;
    }
    return (_a = pieceAuth.find(auth => authConnectionTypeToPropertyType[authValueType] === auth.type)) !== null && _a !== void 0 ? _a : pieceAuth.at(0);
}
const authConnectionTypeToPropertyType = {
    [core_piece_types_1.AppConnectionType.OAUTH2]: property_type_1.PropertyType.OAUTH2,
    [core_piece_types_1.AppConnectionType.CLOUD_OAUTH2]: property_type_1.PropertyType.OAUTH2,
    [core_piece_types_1.AppConnectionType.PLATFORM_OAUTH2]: property_type_1.PropertyType.OAUTH2,
    [core_piece_types_1.AppConnectionType.BASIC_AUTH]: property_type_1.PropertyType.BASIC_AUTH,
    [core_piece_types_1.AppConnectionType.CUSTOM_AUTH]: property_type_1.PropertyType.CUSTOM_AUTH,
    [core_piece_types_1.AppConnectionType.OIDC]: property_type_1.PropertyType.OIDC,
    [core_piece_types_1.AppConnectionType.SECRET_TEXT]: property_type_1.PropertyType.SECRET_TEXT,
    [core_piece_types_1.AppConnectionType.NO_AUTH]: undefined,
};
//# sourceMappingURL=index.js.map