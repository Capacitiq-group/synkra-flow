"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAFE_EXTERNAL_ID_PATTERN = exports.formErrors = void 0;
exports.formErrors = {
    required: 'required',
    invalidGitRepoSlug: 'invalidGitRepoSlug',
    invalidGitRepoBranch: 'invalidGitRepoBranch',
    invalidGitRepoRemoteUrl: 'invalidGitRepoRemoteUrl',
    invalidExternalId: 'invalidExternalId',
    invalidFileName: 'invalidFileName',
    messageRequiresContentOrFiles: 'messageRequiresContentOrFiles',
    agentConfigTooLarge: 'agentConfigTooLarge',
    invalidGcpResourceId: 'invalidGcpResourceId',
    duplicateRouteName: 'duplicateRouteName',
    atLeastOne: 'atLeastOne',
    wholeNumber: 'wholeNumber',
    atMostTenThousand: 'atMostTenThousand',
    tierNameTooLong: 'tierNameTooLong',
    tierDescriptionTooLong: 'tierDescriptionTooLong',
    invalidEmoji: 'invalidEmoji',
    tierTooManyModels: 'tierTooManyModels',
    tierDuplicateModel: 'tierDuplicateModel',
    tierThinkingBudgetInvalid: 'tierThinkingBudgetInvalid',
    invalidHeaderName: 'invalidHeaderName',
    reservedHeaderName: 'reservedHeaderName',
    duplicateHeaderName: 'duplicateHeaderName',
    invalidHeaderValue: 'invalidHeaderValue',
};
exports.SAFE_EXTERNAL_ID_PATTERN = /^(?!\.{1,2}$)[A-Za-z0-9._-]{1,128}$/;
//# sourceMappingURL=form-errors.js.map