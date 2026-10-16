"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatPersonalizationUtils = exports.ChatPersonalizationProgressEvent = exports.ChatPersonalizationView = exports.UpsertChatPersonalizationRequest = exports.ChatPersonalization = exports.PersonalizationPrefill = exports.PersonalizationProfile = exports.PersonalizationUseCase = exports.CHAT_SUGGESTION_CARD_IMAGE_IDS = exports.ChatPersonalizationScope = exports.ChatPersonalizationStatus = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var ChatPersonalizationStatus;
(function (ChatPersonalizationStatus) {
    ChatPersonalizationStatus["UNSET"] = "UNSET";
    ChatPersonalizationStatus["PENDING"] = "PENDING";
    ChatPersonalizationStatus["RESEARCHING"] = "RESEARCHING";
    ChatPersonalizationStatus["READY"] = "READY";
    ChatPersonalizationStatus["FAILED"] = "FAILED";
    ChatPersonalizationStatus["SKIPPED"] = "SKIPPED";
    ChatPersonalizationStatus["DISMISSED_LEGACY"] = "DISMISSED_LEGACY";
})(ChatPersonalizationStatus || (exports.ChatPersonalizationStatus = ChatPersonalizationStatus = {}));
var ChatPersonalizationScope;
(function (ChatPersonalizationScope) {
    ChatPersonalizationScope["COMPANY"] = "company";
    ChatPersonalizationScope["USER"] = "user";
})(ChatPersonalizationScope || (exports.ChatPersonalizationScope = ChatPersonalizationScope = {}));
const CHAT_PERSONALIZATION_STATUSES = [
    ChatPersonalizationStatus.UNSET,
    ChatPersonalizationStatus.PENDING,
    ChatPersonalizationStatus.RESEARCHING,
    ChatPersonalizationStatus.READY,
    ChatPersonalizationStatus.FAILED,
    ChatPersonalizationStatus.SKIPPED,
    ChatPersonalizationStatus.DISMISSED_LEGACY,
];
const TERMINAL_UNASKED_STATUSES = new Set([
    ChatPersonalizationStatus.SKIPPED,
    ChatPersonalizationStatus.DISMISSED_LEGACY,
]);
const PERSONAL_PLATFORM_NAME_SUFFIX = /['’]s Platform$/;
const FALLBACK_PLATFORM_NAME = 'My Platform';
function shouldAskOnboarding({ status }) {
    return status === ChatPersonalizationStatus.UNSET;
}
function hasAnsweredOnboarding({ status }) {
    return !TERMINAL_UNASKED_STATUSES.has(status) && status !== ChatPersonalizationStatus.UNSET;
}
function isPersonalDefaultPlatformName(name) {
    const trimmed = name.trim();
    return trimmed === FALLBACK_PLATFORM_NAME || PERSONAL_PLATFORM_NAME_SUFFIX.test(trimmed);
}
function companyFromPlatformName(name) {
    if (name === null || name === undefined) {
        return null;
    }
    const trimmed = name.trim();
    if (trimmed.length === 0 || isPersonalDefaultPlatformName(trimmed)) {
        return null;
    }
    return trimmed;
}
exports.CHAT_SUGGESTION_CARD_IMAGE_IDS = [
    'answer-customers',
    'chase-late-payers',
    'chase-leads',
    'clone-me',
    'close-deals',
    'do-my-hiring',
    'do-research',
    'fill-pipeline',
    'get-invoices-paid',
    'grow-following',
    'make-slides',
    'onboard-signups',
    'plan-week',
    'prep-meetings',
    'run-my-day',
    'run-socials',
    'squash-bugs',
    'take-from-rivals',
    'tame-inbox',
    'win-back-customers',
    'write-emails',
    'write-posts',
    'write-reports',
];
exports.PersonalizationUseCase = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    prompt: zod_1.z.string(),
    imageId: zod_1.z.enum(exports.CHAT_SUGGESTION_CARD_IMAGE_IDS),
    app: zod_1.z.string().optional(),
    kind: zod_1.z.enum(['mission', 'routine']).optional(),
});
exports.PersonalizationProfile = zod_1.z.object({
    companyName: zod_1.z.string(),
    displayName: zod_1.z.string(),
    website: zod_1.z.string(),
    description: zod_1.z.string(),
    industry: zod_1.z.string(),
    userRole: zod_1.z.string().optional(),
    roleConfidence: zod_1.z.enum(['low', 'medium', 'high']).optional(),
});
exports.PersonalizationPrefill = zod_1.z.object({
    role: (0, core_utils_1.Nullable)(zod_1.z.string()),
    confidence: (0, core_utils_1.Nullable)(zod_1.z.enum(['low', 'medium', 'high'])),
});
exports.ChatPersonalization = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), userId: (0, core_utils_1.Nullable)(zod_1.z.string()), domain: (0, core_utils_1.Nullable)(zod_1.z.string()), companyText: (0, core_utils_1.Nullable)(zod_1.z.string()), role: (0, core_utils_1.Nullable)(zod_1.z.string()), status: zod_1.z.enum(CHAT_PERSONALIZATION_STATUSES), researchToken: (0, core_utils_1.Nullable)(zod_1.z.string()), profile: (0, core_utils_1.Nullable)(exports.PersonalizationProfile), useCases: (0, core_utils_1.Nullable)(zod_1.z.array(exports.PersonalizationUseCase)) }));
exports.UpsertChatPersonalizationRequest = zod_1.z.object({
    website: zod_1.z.string().trim().max(255).optional(),
    role: zod_1.z.string().trim().max(120).optional(),
    personalize: zod_1.z.boolean(),
});
exports.ChatPersonalizationView = zod_1.z.object({
    status: zod_1.z.enum(CHAT_PERSONALIZATION_STATUSES),
    personalStatus: zod_1.z.enum(CHAT_PERSONALIZATION_STATUSES),
    scope: zod_1.z.enum([ChatPersonalizationScope.COMPANY, ChatPersonalizationScope.USER]),
    useCases: zod_1.z.array(exports.PersonalizationUseCase),
    profile: (0, core_utils_1.Nullable)(exports.PersonalizationProfile),
    companyInput: (0, core_utils_1.Nullable)(zod_1.z.string()),
    roleInput: (0, core_utils_1.Nullable)(zod_1.z.string()),
    prefill: (0, core_utils_1.Nullable)(exports.PersonalizationPrefill),
});
exports.ChatPersonalizationProgressEvent = zod_1.z.object({
    platformId: zod_1.z.string(),
    scope: zod_1.z.enum([ChatPersonalizationScope.COMPANY, ChatPersonalizationScope.USER]),
    phase: zod_1.z.string(),
    message: zod_1.z.string(),
    done: zod_1.z.boolean(),
    result: exports.ChatPersonalizationView.optional(),
    prefill: exports.PersonalizationPrefill.optional(),
});
exports.chatPersonalizationUtils = {
    shouldAskOnboarding,
    hasAnsweredOnboarding,
    isPersonalDefaultPlatformName,
    companyFromPlatformName,
};
//# sourceMappingURL=chat-personalization.js.map