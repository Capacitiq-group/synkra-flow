"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxBarrierSignalsBounds = exports.UpdatePlatformConfigurationRequestBody = exports.PlatformConfigurationSettings = exports.PlatformConfiguration = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const form_errors_1 = require("../../form-errors");
const MIN_BARRIER_SIGNALS = 1;
const MAX_BARRIER_SIGNALS = 10000;
exports.PlatformConfiguration = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), isProductTelemetryEnabled: zod_1.z.boolean(), isInfraSetupTelemetryEnabled: zod_1.z.boolean(), maxBarrierSignals: zod_1.z
        .int({ error: (issue) => (0, core_utils_1.isNil)(issue.input) ? form_errors_1.formErrors.required : form_errors_1.formErrors.wholeNumber })
        .min(MIN_BARRIER_SIGNALS, form_errors_1.formErrors.atLeastOne)
        .max(MAX_BARRIER_SIGNALS, form_errors_1.formErrors.atMostTenThousand) }));
exports.PlatformConfigurationSettings = exports.PlatformConfiguration.pick({
    isProductTelemetryEnabled: true,
    isInfraSetupTelemetryEnabled: true,
    maxBarrierSignals: true,
});
exports.UpdatePlatformConfigurationRequestBody = exports.PlatformConfigurationSettings.partial();
exports.maxBarrierSignalsBounds = {
    min: MIN_BARRIER_SIGNALS,
    max: MAX_BARRIER_SIGNALS,
};
//# sourceMappingURL=platform-configuration.js.map