"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrigger = exports.ITrigger = exports.WebhookRenewConfiguration = exports.WebhookRenewStrategy = exports.DEDUPE_KEY_PROPERTY = exports.TriggerStrategy = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
const core_utils_1 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
Object.defineProperty(exports, "TriggerStrategy", { enumerable: true, get: function () { return core_piece_types_1.TriggerStrategy; } });
exports.DEDUPE_KEY_PROPERTY = '_dedupe_key';
var WebhookRenewStrategy;
(function (WebhookRenewStrategy) {
    WebhookRenewStrategy["CRON"] = "CRON";
    WebhookRenewStrategy["NONE"] = "NONE";
})(WebhookRenewStrategy || (exports.WebhookRenewStrategy = WebhookRenewStrategy = {}));
exports.WebhookRenewConfiguration = z.union([
    z.object({
        strategy: z.literal(WebhookRenewStrategy.CRON),
        cronExpression: z.string(),
    }),
    z.object({
        strategy: z.literal(WebhookRenewStrategy.NONE),
    }),
]);
class ITrigger {
    constructor(name, displayName, description, requireAuth, props, type, handshakeConfiguration, onHandshake, renewConfiguration, onRenew, onEnable, onDisable, onStart, run, test, sampleData, testStrategy, outputSchema, aiMetadata, classification, propertyGroups) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.requireAuth = requireAuth;
        this.props = props;
        this.type = type;
        this.handshakeConfiguration = handshakeConfiguration;
        this.onHandshake = onHandshake;
        this.renewConfiguration = renewConfiguration;
        this.onRenew = onRenew;
        this.onEnable = onEnable;
        this.onDisable = onDisable;
        this.onStart = onStart;
        this.run = run;
        this.test = test;
        this.sampleData = sampleData;
        this.testStrategy = testStrategy;
        this.outputSchema = outputSchema;
        this.aiMetadata = aiMetadata;
        this.classification = classification;
        this.propertyGroups = propertyGroups;
    }
}
exports.ITrigger = ITrigger;
// TODO refactor and extract common logic
const createTrigger = (params) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    switch (params.type) {
        case core_piece_types_1.TriggerStrategy.WEBHOOK:
            return new ITrigger(params.name, params.displayName, params.description, (_a = params.requireAuth) !== null && _a !== void 0 ? _a : true, params.props, params.type, (_b = params.handshakeConfiguration) !== null && _b !== void 0 ? _b : { strategy: core_piece_types_1.WebhookHandshakeStrategy.NONE }, (_c = params.onHandshake) !== null && _c !== void 0 ? _c : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); })), (_d = params.renewConfiguration) !== null && _d !== void 0 ? _d : { strategy: WebhookRenewStrategy.NONE }, (_e = params.onRenew) !== null && _e !== void 0 ? _e : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, (_f = params.onStart) !== null && _f !== void 0 ? _f : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.run, (_g = params.test) !== null && _g !== void 0 ? _g : (() => Promise.resolve([params.sampleData])), params.sampleData, params.test ? core_piece_types_1.TriggerTestStrategy.TEST_FUNCTION : core_piece_types_1.TriggerTestStrategy.SIMULATION, params.outputSchema, params.aiMetadata, params.classification, params.propertyGroups);
        case core_piece_types_1.TriggerStrategy.POLLING:
            return new ITrigger(params.name, params.displayName, params.description, (_h = params.requireAuth) !== null && _h !== void 0 ? _h : true, params.props, params.type, { strategy: core_piece_types_1.WebhookHandshakeStrategy.NONE }, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); }), { strategy: WebhookRenewStrategy.NONE }, (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, (_j = params.onStart) !== null && _j !== void 0 ? _j : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.run, (_k = params.test) !== null && _k !== void 0 ? _k : (() => Promise.resolve([params.sampleData])), params.sampleData, core_piece_types_1.TriggerTestStrategy.TEST_FUNCTION, params.outputSchema, params.aiMetadata, params.classification, params.propertyGroups);
        case core_piece_types_1.TriggerStrategy.MANUAL:
            return new ITrigger(params.name, params.displayName, params.description, (_l = params.requireAuth) !== null && _l !== void 0 ? _l : true, params.props, params.type, { strategy: core_piece_types_1.WebhookHandshakeStrategy.NONE }, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); }), { strategy: WebhookRenewStrategy.NONE }, (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, (_m = params.onStart) !== null && _m !== void 0 ? _m : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.run, (_o = params.test) !== null && _o !== void 0 ? _o : (() => Promise.resolve([params.sampleData])), params.sampleData, core_piece_types_1.TriggerTestStrategy.TEST_FUNCTION, params.outputSchema, params.aiMetadata, params.classification, params.propertyGroups);
        case core_piece_types_1.TriggerStrategy.APP_WEBHOOK:
            return new ITrigger(params.name, params.displayName, params.description, (_p = params.requireAuth) !== null && _p !== void 0 ? _p : true, params.props, params.type, { strategy: core_piece_types_1.WebhookHandshakeStrategy.NONE }, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); }), { strategy: WebhookRenewStrategy.NONE }, (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, (_q = params.onStart) !== null && _q !== void 0 ? _q : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.run, (_r = params.test) !== null && _r !== void 0 ? _r : (() => Promise.resolve([params.sampleData])), params.sampleData, ((0, core_utils_1.isNil)(params.sampleData) && (0, core_utils_1.isNil)(params.test)) ? core_piece_types_1.TriggerTestStrategy.SIMULATION : core_piece_types_1.TriggerTestStrategy.TEST_FUNCTION, params.outputSchema, params.aiMetadata, params.classification, params.propertyGroups);
    }
};
exports.createTrigger = createTrigger;
//# sourceMappingURL=trigger.js.map