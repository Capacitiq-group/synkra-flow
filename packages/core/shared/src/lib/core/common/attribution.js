"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpMethod = exports.ATTRIBUTION_STORAGE_TTL_MS = exports.ATTRIBUTION_STORAGE_KEY = exports.AttributionParams = exports.ATTRIBUTION_PARAM_KEYS = exports.ATTRIBUTION_VALUE_MAX_LENGTH = exports.attributionUtils = void 0;
const zod_1 = require("zod");
const user_identity_1 = require("../authentication/user-identity");
function readAttributionFromSearch({ search }) {
    const params = new URLSearchParams(search);
    return exports.ATTRIBUTION_PARAM_KEYS.reduce((acc, key) => {
        const value = params.get(key);
        if (value !== null && value.trim().length > 0) {
            acc[key] = value.trim().slice(0, exports.ATTRIBUTION_VALUE_MAX_LENGTH);
        }
        return acc;
    }, {});
}
function isEmptyAttribution({ attribution }) {
    if (attribution === undefined || attribution === null) {
        return true;
    }
    return exports.ATTRIBUTION_PARAM_KEYS.every((key) => attribution[key] === undefined);
}
exports.attributionUtils = {
    readAttributionFromSearch,
    isEmptyAttribution,
    signUpMethodFromProvider,
};
exports.ATTRIBUTION_VALUE_MAX_LENGTH = 300;
exports.ATTRIBUTION_PARAM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'ref',
    'ap_cta',
    'ap_landing',
    'ap_referrer',
    'ap_sid',
];
const attributionValue = zod_1.z.string().trim().min(1).max(exports.ATTRIBUTION_VALUE_MAX_LENGTH).optional();
exports.AttributionParams = zod_1.z.object({
    utm_source: attributionValue,
    utm_medium: attributionValue,
    utm_campaign: attributionValue,
    utm_term: attributionValue,
    utm_content: attributionValue,
    gclid: attributionValue,
    fbclid: attributionValue,
    ref: attributionValue,
    ap_cta: attributionValue,
    ap_landing: attributionValue,
    ap_referrer: attributionValue,
    ap_sid: attributionValue,
});
exports.ATTRIBUTION_STORAGE_KEY = 'ap_acquisition_params';
exports.ATTRIBUTION_STORAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
var SignUpMethod;
(function (SignUpMethod) {
    SignUpMethod["PASSWORD"] = "password";
    SignUpMethod["EMAIL_CODE"] = "email_code";
    SignUpMethod["GOOGLE"] = "google";
    SignUpMethod["SAML"] = "saml";
    SignUpMethod["JWT"] = "jwt";
})(SignUpMethod || (exports.SignUpMethod = SignUpMethod = {}));
// Any provider whose identity lands in onboarding finishes at /complete-sign-up,
// so the method there has to come from the identity, not from the route.
// EMAIL identities that reach onboarding came through the code flow; a password
// sign-up is provisioned at /sign-in instead and is stamped there.
function signUpMethodFromProvider({ provider }) {
    switch (provider) {
        case user_identity_1.UserIdentityProvider.EMAIL:
            return SignUpMethod.EMAIL_CODE;
        case user_identity_1.UserIdentityProvider.GOOGLE:
            return SignUpMethod.GOOGLE;
        case user_identity_1.UserIdentityProvider.SAML:
            return SignUpMethod.SAML;
        case user_identity_1.UserIdentityProvider.JWT:
            return SignUpMethod.JWT;
    }
}
//# sourceMappingURL=attribution.js.map