"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveValueFromProps = exports.AppConnectionOwners = exports.AppConnectionWithoutSensitiveData = exports.AppConnectionType = exports.AppConnectionScope = exports.AppConnectionStatus = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user");
var AppConnectionStatus;
(function (AppConnectionStatus) {
    AppConnectionStatus["ACTIVE"] = "ACTIVE";
    AppConnectionStatus["MISSING"] = "MISSING";
    AppConnectionStatus["ERROR"] = "ERROR";
})(AppConnectionStatus || (exports.AppConnectionStatus = AppConnectionStatus = {}));
var AppConnectionScope;
(function (AppConnectionScope) {
    AppConnectionScope["PROJECT"] = "PROJECT";
    AppConnectionScope["PLATFORM"] = "PLATFORM";
})(AppConnectionScope || (exports.AppConnectionScope = AppConnectionScope = {}));
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
exports.AppConnectionWithoutSensitiveData = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { externalId: zod_1.z.string(), displayName: zod_1.z.string(), type: zod_1.z.nativeEnum(AppConnectionType), pieceName: zod_1.z.string(), projectIds: zod_1.z.array(core_utils_1.ApId), platformId: (0, core_utils_1.Nullable)(zod_1.z.string()), scope: zod_1.z.nativeEnum(AppConnectionScope), status: zod_1.z.nativeEnum(AppConnectionStatus), ownerId: (0, core_utils_1.Nullable)(zod_1.z.string()), owner: (0, core_utils_1.Nullable)(user_1.UserWithMetaInformation), metadata: (0, core_utils_1.Nullable)(core_utils_1.Metadata), flowIds: (0, core_utils_1.Nullable)(zod_1.z.array(core_utils_1.ApId)), pieceVersion: zod_1.z.string(), preSelectForNewProjects: zod_1.z.boolean(), usingSecretManager: zod_1.z.boolean() })).describe('App connection is a connection to an external app.');
exports.AppConnectionOwners = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
});
const resolveValueFromProps = (props, value) => {
    let resolvedScope = value;
    if (!props) {
        return resolvedScope;
    }
    Object.entries(props).forEach(([key, value]) => {
        resolvedScope = resolvedScope.replaceAll(`{${key}}`, () => String(value));
    });
    return resolvedScope;
};
exports.resolveValueFromProps = resolveValueFromProps;
//# sourceMappingURL=app-connection.js.map