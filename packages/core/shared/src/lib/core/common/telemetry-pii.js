"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickTelemetryPii = void 0;
const flag_1 = require("../flag/flag");
const pickTelemetryPii = ({ edition, email, firstName, lastName, }) => {
    if (edition !== flag_1.ApEdition.CLOUD) {
        return {};
    }
    return { email, firstName, lastName };
};
exports.pickTelemetryPii = pickTelemetryPii;
//# sourceMappingURL=telemetry-pii.js.map