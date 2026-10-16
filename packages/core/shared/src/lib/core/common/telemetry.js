"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentKind = exports.isCloudOnlyTelemetryEvent = exports.CLOUD_ONLY_TELEMETRY_EVENTS = exports.PlatformAdminLimit = exports.PlatformAdminSurface = exports.TelemetryEventName = void 0;
var TelemetryEventName;
(function (TelemetryEventName) {
    TelemetryEventName["SIGNED_UP"] = "signed.up";
    TelemetryEventName["SIGNED_IN"] = "signed.in";
    TelemetryEventName["SIGN_UP_SUBMITTED"] = "signup.submitted";
    TelemetryEventName["SIGN_UP_FAILED"] = "signup.failed";
    TelemetryEventName["SIGN_IN_SUBMITTED"] = "signin.submitted";
    TelemetryEventName["SIGN_IN_FAILED"] = "signin.failed";
    TelemetryEventName["FEDERATED_LOGIN_STARTED"] = "federated.login.started";
    TelemetryEventName["EMAIL_VERIFICATION_COMPLETED"] = "email.verification.completed";
    TelemetryEventName["CAPTCHA_UNAVAILABLE"] = "captcha.unavailable";
    TelemetryEventName["EMAIL_CODE_REQUESTED"] = "email.code.requested";
    TelemetryEventName["EMAIL_CODE_VERIFIED"] = "email.code.verified";
    TelemetryEventName["EMAIL_CODE_REJECTED"] = "email.code.rejected";
    TelemetryEventName["EMAIL_CODE_RESEND_REQUESTED"] = "email.code.resend.requested";
    TelemetryEventName["CREATED_FLOW"] = "flow.created";
    TelemetryEventName["FLOW_RUN_CREATED"] = "run.created";
    TelemetryEventName["FLOW_PUBLISHED"] = "flow.published";
    TelemetryEventName["FLOW_IMPORTED_USING_FILE"] = "flow.imported.using.file";
    TelemetryEventName["PIECE_SELECTOR_SEARCH"] = "piece.selector.search";
    TelemetryEventName["MCP_TOOL_CALLED"] = "mcp.tool.called";
    TelemetryEventName["MCP_SERVER_CONNECTED"] = "mcp.server.connected";
    TelemetryEventName["ONBOARDING_COMPLETED"] = "onboarding.completed";
    TelemetryEventName["CHECKOUT_STARTED"] = "checkout.started";
    TelemetryEventName["PLAN_CHANGED"] = "plan.changed";
    TelemetryEventName["PLAN_CANCELLED"] = "plan.cancelled";
    TelemetryEventName["PLAN_REACTIVATED"] = "plan.reactivated";
    TelemetryEventName["TRIAL_STARTED"] = "trial.started";
    TelemetryEventName["INVITE_SENT"] = "invite.sent";
    TelemetryEventName["INVITE_ACCEPTED"] = "invite.accepted";
    TelemetryEventName["SALES_HANDOFF_CLICKED"] = "sales.handoff.clicked";
    TelemetryEventName["ADMIN_NAV_LOCKED_CLICKED"] = "admin.nav.locked.clicked";
    TelemetryEventName["PLATFORM_ADMIN_PAGE_VIEWED"] = "platform.admin.page.viewed";
    TelemetryEventName["PLATFORM_ADMIN_GATE_BLOCKED"] = "platform.admin.gate.blocked";
    TelemetryEventName["PLATFORM_ADMIN_UPGRADE_CLICKED"] = "platform.admin.upgrade.clicked";
    TelemetryEventName["PLATFORM_ADMIN_SALES_CONTACTED"] = "platform.admin.sales.contacted";
    TelemetryEventName["PLATFORM_ADMIN_LIMIT_REACHED"] = "platform.admin.limit.reached";
    TelemetryEventName["PLATFORM_ADMIN_CONTROL_CLICKED"] = "platform.admin.control.clicked";
})(TelemetryEventName || (exports.TelemetryEventName = TelemetryEventName = {}));
var PlatformAdminSurface;
(function (PlatformAdminSurface) {
    PlatformAdminSurface["SAMPLE"] = "sample";
    PlatformAdminSurface["TEASER"] = "teaser";
    PlatformAdminSurface["DIALOG"] = "dialog";
    PlatformAdminSurface["LIMIT"] = "limit";
})(PlatformAdminSurface || (exports.PlatformAdminSurface = PlatformAdminSurface = {}));
var PlatformAdminLimit;
(function (PlatformAdminLimit) {
    PlatformAdminLimit["TEAM_PROJECTS"] = "teamProjects";
})(PlatformAdminLimit || (exports.PlatformAdminLimit = PlatformAdminLimit = {}));
exports.CLOUD_ONLY_TELEMETRY_EVENTS = new Set([
    TelemetryEventName.ONBOARDING_COMPLETED,
    TelemetryEventName.CHECKOUT_STARTED,
    TelemetryEventName.PLAN_CHANGED,
    TelemetryEventName.PLAN_CANCELLED,
    TelemetryEventName.PLAN_REACTIVATED,
    TelemetryEventName.TRIAL_STARTED,
    TelemetryEventName.SALES_HANDOFF_CLICKED,
    TelemetryEventName.ADMIN_NAV_LOCKED_CLICKED,
    TelemetryEventName.SIGNED_UP,
    TelemetryEventName.SIGNED_IN,
    TelemetryEventName.SIGN_UP_SUBMITTED,
    TelemetryEventName.SIGN_UP_FAILED,
    TelemetryEventName.SIGN_IN_SUBMITTED,
    TelemetryEventName.SIGN_IN_FAILED,
    TelemetryEventName.FEDERATED_LOGIN_STARTED,
    TelemetryEventName.EMAIL_VERIFICATION_COMPLETED,
    TelemetryEventName.CAPTCHA_UNAVAILABLE,
    TelemetryEventName.EMAIL_CODE_REQUESTED,
    TelemetryEventName.EMAIL_CODE_VERIFIED,
    TelemetryEventName.EMAIL_CODE_REJECTED,
    TelemetryEventName.EMAIL_CODE_RESEND_REQUESTED,
]);
const isCloudOnlyTelemetryEvent = (name) => exports.CLOUD_ONLY_TELEMETRY_EVENTS.has(name);
exports.isCloudOnlyTelemetryEvent = isCloudOnlyTelemetryEvent;
var DeploymentKind;
(function (DeploymentKind) {
    DeploymentKind["CLOUD"] = "cloud";
    DeploymentKind["SELF_HOSTED"] = "self_hosted";
    DeploymentKind["DEV"] = "dev";
})(DeploymentKind || (exports.DeploymentKind = DeploymentKind = {}));
//# sourceMappingURL=telemetry.js.map