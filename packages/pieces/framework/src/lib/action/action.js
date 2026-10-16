"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = exports.IAction = exports.ErrorHandlingOptionsParam = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
exports.ErrorHandlingOptionsParam = z.object({
    retryOnFailure: z.object({
        defaultValue: z.optional(z.boolean()),
        hide: z.optional(z.boolean()),
    }),
    continueOnFailure: z.object({
        defaultValue: z.optional(z.boolean()),
        hide: z.optional(z.boolean()),
    }),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class IAction {
    constructor(name, displayName, description, props, propertyGroups, run, test, requireAuth, errorHandlingOptions, outputSchema, audience, aiMetadata, classification) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.props = props;
        this.propertyGroups = propertyGroups;
        this.run = run;
        this.test = test;
        this.requireAuth = requireAuth;
        this.errorHandlingOptions = errorHandlingOptions;
        this.outputSchema = outputSchema;
        this.audience = audience;
        this.aiMetadata = aiMetadata;
        this.classification = classification;
    }
}
exports.IAction = IAction;
const createAction = (params) => {
    var _a, _b, _c;
    return new IAction(params.name, params.displayName, params.description, params.props, params.propertyGroups, params.run, (_a = params.test) !== null && _a !== void 0 ? _a : params.run, (_b = params.requireAuth) !== null && _b !== void 0 ? _b : true, (_c = params.errorHandlingOptions) !== null && _c !== void 0 ? _c : {
        continueOnFailure: {
            defaultValue: false,
        },
        retryOnFailure: {
            defaultValue: false,
        }
    }, params.outputSchema, params.audience, params.aiMetadata, params.classification);
};
exports.createAction = createAction;
//# sourceMappingURL=action.js.map