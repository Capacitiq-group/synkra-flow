"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOTH_CLIENT_CREDENTIALS_AND_AUTHORIZATION_CODE = exports.OAuth2GrantType = exports.AppConnectionType = void 0;
var AppConnectionType;
(function (AppConnectionType) {
    AppConnectionType["OAUTH2"] = "OAUTH2";
    AppConnectionType["PLATFORM_OAUTH2"] = "PLATFORM_OAUTH2";
    AppConnectionType["CLOUD_OAUTH2"] = "CLOUD_OAUTH2";
    AppConnectionType["SECRET_TEXT"] = "SECRET_TEXT";
    AppConnectionType["BASIC_AUTH"] = "BASIC_AUTH";
    AppConnectionType["CUSTOM_AUTH"] = "CUSTOM_AUTH";
    AppConnectionType["OIDC"] = "OIDC";
    AppConnectionType["NO_AUTH"] = "NO_AUTH";
})(AppConnectionType || (exports.AppConnectionType = AppConnectionType = {}));
var OAuth2GrantType;
(function (OAuth2GrantType) {
    OAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    OAuth2GrantType["CLIENT_CREDENTIALS"] = "client_credentials";
})(OAuth2GrantType || (exports.OAuth2GrantType = OAuth2GrantType = {}));
exports.BOTH_CLIENT_CREDENTIALS_AND_AUTHORIZATION_CODE = 'both_client_credentials_and_authorization_code';
//# sourceMappingURL=app-connection.js.map