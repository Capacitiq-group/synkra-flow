"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserInvitationsRequest = exports.AcceptUserInvitationRequest = exports.SendUserInvitationRequest = exports.UserInvitationWithLink = exports.UserInvitation = exports.InvitationStatus = exports.InvitationType = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const index_1 = require("../../core/user/index");
var InvitationType;
(function (InvitationType) {
    InvitationType["PLATFORM"] = "PLATFORM";
    InvitationType["PROJECT"] = "PROJECT";
})(InvitationType || (exports.InvitationType = InvitationType = {}));
var InvitationStatus;
(function (InvitationStatus) {
    InvitationStatus["PENDING"] = "PENDING";
    InvitationStatus["ACCEPTED"] = "ACCEPTED";
})(InvitationStatus || (exports.InvitationStatus = InvitationStatus = {}));
exports.UserInvitation = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { email: zod_1.z.string(), status: zod_1.z.nativeEnum(InvitationStatus), type: zod_1.z.nativeEnum(InvitationType), platformId: zod_1.z.string(), platformRole: (0, core_utils_1.NullableEnum)(index_1.PlatformRole), projectId: (0, core_utils_1.Nullable)(zod_1.z.string()), projectRoleId: (0, core_utils_1.Nullable)(zod_1.z.string()), projectRole: (0, core_utils_1.Nullable)(core_utils_1.ProjectRole) }));
exports.UserInvitationWithLink = exports.UserInvitation.extend({
    link: zod_1.z.string().optional(),
});
exports.SendUserInvitationRequest = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(InvitationType.PROJECT),
        email: zod_1.z.string(),
        projectId: zod_1.z.string(),
        projectRole: zod_1.z.string(),
    }),
    zod_1.z.object({
        type: zod_1.z.literal(InvitationType.PLATFORM),
        email: zod_1.z.string(),
        platformRole: zod_1.z.nativeEnum(index_1.PlatformRole),
    }),
]);
exports.AcceptUserInvitationRequest = zod_1.z.object({
    invitationToken: zod_1.z.string(),
});
exports.ListUserInvitationsRequest = zod_1.z.object({
    limit: zod_1.z.coerce.number().optional(),
    cursor: zod_1.z.string().optional(),
    type: zod_1.z.nativeEnum(InvitationType),
    projectId: (0, core_utils_1.Nullable)(zod_1.z.string()),
    status: zod_1.z.nativeEnum(InvitationStatus).optional(),
});
//# sourceMappingURL=index.js.map