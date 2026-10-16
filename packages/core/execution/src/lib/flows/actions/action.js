"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyCondition = exports.SingleActionSchema = exports.AiRouterActionSchema = exports.RouterActionSchema = exports.ContinueOnFailureBranches = exports.FlowAction = exports.AiRouterActionSettingsWithValidation = exports.AiRouterActionSettings = exports.AiRouterBranchesSchema = exports.AiRouterMatchMode = exports.RouterActionSettingsWithValidation = exports.RouterActionSettings = exports.RouterBranchesSchema = exports.BranchSingleValueCondition = exports.BranchDateCondition = exports.BranchNumberCondition = exports.BranchTextCondition = exports.BranchCondition = exports.ValidBranchCondition = exports.textConditions = exports.singleValueConditions = exports.BranchOperator = exports.LoopOnItemsActionSchema = exports.LoopOnItemsActionSettings = exports.PieceActionSchema = exports.PieceActionSettings = exports.CodeActionSchema = exports.CodeActionSettings = exports.SourceCode = exports.ActionErrorHandlingOptions = exports.BranchExecutionType = exports.RouterExecutionType = exports.FlowActionType = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const core_piece_types_1 = require("@activepieces/core-piece-types");
const properties_1 = require("../properties");
const sample_data_1 = require("../sample-data");
var FlowActionType;
(function (FlowActionType) {
    FlowActionType["CODE"] = "CODE";
    FlowActionType["PIECE"] = "PIECE";
    FlowActionType["LOOP_ON_ITEMS"] = "LOOP_ON_ITEMS";
    FlowActionType["ROUTER"] = "ROUTER";
    FlowActionType["AI_ROUTER"] = "AI_ROUTER";
})(FlowActionType || (exports.FlowActionType = FlowActionType = {}));
var RouterExecutionType;
(function (RouterExecutionType) {
    RouterExecutionType["EXECUTE_ALL_MATCH"] = "EXECUTE_ALL_MATCH";
    RouterExecutionType["EXECUTE_FIRST_MATCH"] = "EXECUTE_FIRST_MATCH";
})(RouterExecutionType || (exports.RouterExecutionType = RouterExecutionType = {}));
var BranchExecutionType;
(function (BranchExecutionType) {
    BranchExecutionType["FALLBACK"] = "FALLBACK";
    BranchExecutionType["CONDITION"] = "CONDITION";
})(BranchExecutionType || (exports.BranchExecutionType = BranchExecutionType = {}));
const commonActionProps = {
    name: zod_1.z.string().regex(core_utils_1.STEP_NAME_REGEX),
    valid: zod_1.z.boolean(),
    displayName: zod_1.z.string(),
    skip: zod_1.z.boolean().optional(),
    lastUpdatedDate: zod_1.z.string(),
};
const commonActionSettings = {
    sampleData: sample_data_1.SampleDataSetting.optional(),
    customLogoUrl: zod_1.z.string().optional(),
};
exports.ActionErrorHandlingOptions = zod_1.z.object({
    continueOnFailure: zod_1.z.object({
        value: zod_1.z.boolean().optional(),
    }).optional(),
    retryOnFailure: zod_1.z.object({
        value: zod_1.z.boolean().optional(),
    }).optional(),
}).optional();
exports.SourceCode = zod_1.z.object({
    packageJson: zod_1.z.string(),
    code: zod_1.z.string(),
});
exports.CodeActionSettings = zod_1.z.object(Object.assign(Object.assign({}, commonActionSettings), { sourceCode: exports.SourceCode, input: zod_1.z.record(zod_1.z.string(), zod_1.z.any()), errorHandlingOptions: exports.ActionErrorHandlingOptions, useDeno: zod_1.z.boolean().optional() }));
exports.CodeActionSchema = zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.CODE), settings: exports.CodeActionSettings }));
const pieceActionSettingsFields = Object.assign(Object.assign({}, commonActionSettings), { propertySettings: zod_1.z.record(zod_1.z.string(), properties_1.PropertySettings), pieceName: zod_1.z.string(), pieceVersion: core_piece_types_1.VersionType, actionName: zod_1.z.string().optional(), input: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()), errorHandlingOptions: exports.ActionErrorHandlingOptions });
exports.PieceActionSettings = zod_1.z.object(Object.assign({}, pieceActionSettingsFields));
exports.PieceActionSchema = zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.PIECE), settings: exports.PieceActionSettings }));
// Loop Items
exports.LoopOnItemsActionSettings = zod_1.z.object(Object.assign(Object.assign({}, commonActionSettings), { items: zod_1.z.string() }));
exports.LoopOnItemsActionSchema = zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.LOOP_ON_ITEMS), settings: exports.LoopOnItemsActionSettings }));
var BranchOperator;
(function (BranchOperator) {
    BranchOperator["TEXT_CONTAINS"] = "TEXT_CONTAINS";
    BranchOperator["TEXT_DOES_NOT_CONTAIN"] = "TEXT_DOES_NOT_CONTAIN";
    BranchOperator["TEXT_EXACTLY_MATCHES"] = "TEXT_EXACTLY_MATCHES";
    BranchOperator["TEXT_DOES_NOT_EXACTLY_MATCH"] = "TEXT_DOES_NOT_EXACTLY_MATCH";
    BranchOperator["TEXT_STARTS_WITH"] = "TEXT_START_WITH";
    BranchOperator["TEXT_DOES_NOT_START_WITH"] = "TEXT_DOES_NOT_START_WITH";
    BranchOperator["TEXT_ENDS_WITH"] = "TEXT_ENDS_WITH";
    BranchOperator["TEXT_DOES_NOT_END_WITH"] = "TEXT_DOES_NOT_END_WITH";
    BranchOperator["NUMBER_IS_GREATER_THAN"] = "NUMBER_IS_GREATER_THAN";
    BranchOperator["NUMBER_IS_LESS_THAN"] = "NUMBER_IS_LESS_THAN";
    BranchOperator["NUMBER_IS_EQUAL_TO"] = "NUMBER_IS_EQUAL_TO";
    BranchOperator["BOOLEAN_IS_TRUE"] = "BOOLEAN_IS_TRUE";
    BranchOperator["BOOLEAN_IS_FALSE"] = "BOOLEAN_IS_FALSE";
    BranchOperator["DATE_IS_BEFORE"] = "DATE_IS_BEFORE";
    BranchOperator["DATE_IS_EQUAL"] = "DATE_IS_EQUAL";
    BranchOperator["DATE_IS_AFTER"] = "DATE_IS_AFTER";
    BranchOperator["LIST_CONTAINS"] = "LIST_CONTAINS";
    BranchOperator["LIST_DOES_NOT_CONTAIN"] = "LIST_DOES_NOT_CONTAIN";
    BranchOperator["LIST_IS_EMPTY"] = "LIST_IS_EMPTY";
    BranchOperator["LIST_IS_NOT_EMPTY"] = "LIST_IS_NOT_EMPTY";
    BranchOperator["EXISTS"] = "EXISTS";
    BranchOperator["DOES_NOT_EXIST"] = "DOES_NOT_EXIST";
})(BranchOperator || (exports.BranchOperator = BranchOperator = {}));
exports.singleValueConditions = [
    BranchOperator.EXISTS,
    BranchOperator.DOES_NOT_EXIST,
    BranchOperator.BOOLEAN_IS_TRUE,
    BranchOperator.BOOLEAN_IS_FALSE,
    BranchOperator.LIST_IS_EMPTY,
    BranchOperator.LIST_IS_NOT_EMPTY,
];
exports.textConditions = [
    BranchOperator.TEXT_CONTAINS,
    BranchOperator.TEXT_DOES_NOT_CONTAIN,
    BranchOperator.TEXT_EXACTLY_MATCHES,
    BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH,
    BranchOperator.TEXT_STARTS_WITH,
    BranchOperator.TEXT_DOES_NOT_START_WITH,
    BranchOperator.TEXT_ENDS_WITH,
    BranchOperator.TEXT_DOES_NOT_END_WITH,
    BranchOperator.LIST_CONTAINS,
    BranchOperator.LIST_DOES_NOT_CONTAIN,
];
const BranchOperatorTextLiterals = [
    zod_1.z.literal(BranchOperator.TEXT_CONTAINS),
    zod_1.z.literal(BranchOperator.TEXT_DOES_NOT_CONTAIN),
    zod_1.z.literal(BranchOperator.TEXT_EXACTLY_MATCHES),
    zod_1.z.literal(BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH),
    zod_1.z.literal(BranchOperator.TEXT_STARTS_WITH),
    zod_1.z.literal(BranchOperator.TEXT_DOES_NOT_START_WITH),
    zod_1.z.literal(BranchOperator.TEXT_ENDS_WITH),
    zod_1.z.literal(BranchOperator.TEXT_DOES_NOT_END_WITH),
    zod_1.z.literal(BranchOperator.LIST_CONTAINS),
    zod_1.z.literal(BranchOperator.LIST_DOES_NOT_CONTAIN),
];
const BranchOperatorNumberLiterals = [
    zod_1.z.literal(BranchOperator.NUMBER_IS_GREATER_THAN),
    zod_1.z.literal(BranchOperator.NUMBER_IS_LESS_THAN),
    zod_1.z.literal(BranchOperator.NUMBER_IS_EQUAL_TO),
];
const BranchOperatorDateLiterals = [
    zod_1.z.literal(BranchOperator.DATE_IS_BEFORE),
    zod_1.z.literal(BranchOperator.DATE_IS_EQUAL),
    zod_1.z.literal(BranchOperator.DATE_IS_AFTER),
];
const BranchOperatorSingleValueLiterals = [
    zod_1.z.literal(BranchOperator.EXISTS),
    zod_1.z.literal(BranchOperator.DOES_NOT_EXIST),
    zod_1.z.literal(BranchOperator.BOOLEAN_IS_TRUE),
    zod_1.z.literal(BranchOperator.BOOLEAN_IS_FALSE),
    zod_1.z.literal(BranchOperator.LIST_IS_EMPTY),
    zod_1.z.literal(BranchOperator.LIST_IS_NOT_EMPTY),
];
function buildBranchTextConditionValid(addMinLength) {
    return zod_1.z.object({
        firstValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        secondValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        caseSensitive: zod_1.z.boolean().optional(),
        operator: zod_1.z.union(BranchOperatorTextLiterals).optional(),
    });
}
function buildBranchNumberConditionValid(addMinLength) {
    return zod_1.z.object({
        firstValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        secondValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        operator: zod_1.z.union(BranchOperatorNumberLiterals).optional(),
    });
}
function buildBranchDateConditionValid(addMinLength) {
    return zod_1.z.object({
        firstValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        secondValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        operator: zod_1.z.union(BranchOperatorDateLiterals).optional(),
    });
}
function buildBranchSingleValueConditionValid(addMinLength) {
    return zod_1.z.object({
        firstValue: addMinLength ? zod_1.z.string().min(1) : zod_1.z.string(),
        operator: zod_1.z.union(BranchOperatorSingleValueLiterals).optional(),
    });
}
function buildBranchConditionValid(addMinLength) {
    return zod_1.z.union([
        buildBranchTextConditionValid(addMinLength),
        buildBranchNumberConditionValid(addMinLength),
        buildBranchDateConditionValid(addMinLength),
        buildBranchSingleValueConditionValid(addMinLength),
    ]);
}
exports.ValidBranchCondition = buildBranchConditionValid(true);
// TODO remove this and use ValidBranchCondition everywhere
exports.BranchCondition = buildBranchConditionValid(false);
exports.BranchTextCondition = buildBranchTextConditionValid(false);
exports.BranchNumberCondition = buildBranchNumberConditionValid(false);
exports.BranchDateCondition = buildBranchDateConditionValid(false);
exports.BranchSingleValueCondition = buildBranchSingleValueConditionValid(false);
const RouterBranchesSchema = (addMinLength) => zod_1.z.array(zod_1.z.union([
    zod_1.z.object({
        conditions: zod_1.z.array(zod_1.z.array(buildBranchConditionValid(addMinLength))),
        branchType: zod_1.z.literal(BranchExecutionType.CONDITION),
        branchName: zod_1.z.string(),
    }),
    zod_1.z.object({
        branchType: zod_1.z.literal(BranchExecutionType.FALLBACK),
        branchName: zod_1.z.string(),
    }),
]));
exports.RouterBranchesSchema = RouterBranchesSchema;
exports.RouterActionSettings = zod_1.z.object(Object.assign(Object.assign({}, commonActionSettings), { branches: (0, exports.RouterBranchesSchema)(false), executionType: zod_1.z.nativeEnum(RouterExecutionType) }));
exports.RouterActionSettingsWithValidation = zod_1.z.object({
    branches: (0, exports.RouterBranchesSchema)(true),
    executionType: zod_1.z.nativeEnum(RouterExecutionType),
});
var AiRouterMatchMode;
(function (AiRouterMatchMode) {
    AiRouterMatchMode["BEST_MATCH"] = "BEST_MATCH";
    AiRouterMatchMode["ALL_MATCHES"] = "ALL_MATCHES";
})(AiRouterMatchMode || (exports.AiRouterMatchMode = AiRouterMatchMode = {}));
const AiRouterBranchesSchema = (addMinLength) => zod_1.z.array(zod_1.z.union([
    zod_1.z.object({
        branchType: zod_1.z.literal(BranchExecutionType.CONDITION),
        branchName: zod_1.z.string(),
        description: addMinLength ? zod_1.z.string().min(1, core_utils_1.formErrors.required) : zod_1.z.string().optional(),
    }),
    zod_1.z.object({
        branchType: zod_1.z.literal(BranchExecutionType.FALLBACK),
        branchName: zod_1.z.string(),
        description: zod_1.z.string().optional(),
    }),
]));
exports.AiRouterBranchesSchema = AiRouterBranchesSchema;
exports.AiRouterActionSettings = zod_1.z.object(Object.assign(Object.assign({}, commonActionSettings), { text: zod_1.z.string(), question: zod_1.z.string(), branches: (0, exports.AiRouterBranchesSchema)(false), matchMode: zod_1.z.enum(AiRouterMatchMode).optional(), minConfidence: zod_1.z.number().min(0).max(1).optional() }));
exports.AiRouterActionSettingsWithValidation = zod_1.z.object({
    text: zod_1.z.string().min(1, core_utils_1.formErrors.required),
    question: zod_1.z.string().min(1, core_utils_1.formErrors.required),
    branches: (0, exports.AiRouterBranchesSchema)(true),
    matchMode: zod_1.z.enum(AiRouterMatchMode).optional(),
    minConfidence: zod_1.z.number().min(0).max(1).optional(),
}).superRefine((settings, ctx) => {
    const seen = new Set();
    settings.branches.forEach((branch, index) => {
        const name = branch.branchName.trim().toLowerCase();
        if (seen.has(name)) {
            ctx.addIssue({
                code: 'custom',
                message: core_utils_1.formErrors.duplicateRouteName,
                path: ['branches', index, 'branchName'],
            });
        }
        seen.add(name);
    });
});
// Union of all actions
exports.FlowAction = zod_1.z.lazy(() => zod_1.z.discriminatedUnion('type', [
    exports.CodeActionSchema.extend({
        nextAction: exports.FlowAction.optional(),
        continueOnFailureBranches: exports.ContinueOnFailureBranches.optional(),
    }),
    exports.PieceActionSchema.extend({
        nextAction: exports.FlowAction.optional(),
        continueOnFailureBranches: exports.ContinueOnFailureBranches.optional(),
    }),
    exports.LoopOnItemsActionSchema.extend({
        nextAction: exports.FlowAction.optional(),
        firstLoopAction: exports.FlowAction.optional(),
    }),
    zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.ROUTER), settings: exports.RouterActionSettings, nextAction: exports.FlowAction.optional(), children: zod_1.z.array(zod_1.z.union([exports.FlowAction, zod_1.z.null()])) })),
    zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.AI_ROUTER), settings: exports.AiRouterActionSettings, nextAction: exports.FlowAction.optional(), children: zod_1.z.array(zod_1.z.union([exports.FlowAction, zod_1.z.null()])) })),
]));
exports.ContinueOnFailureBranches = zod_1.z.object({
    onSuccess: exports.FlowAction.optional(),
    onFailure: exports.FlowAction.optional(),
});
exports.RouterActionSchema = zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.ROUTER), settings: exports.RouterActionSettings }));
exports.AiRouterActionSchema = zod_1.z.object(Object.assign(Object.assign({}, commonActionProps), { type: zod_1.z.literal(FlowActionType.AI_ROUTER), settings: exports.AiRouterActionSettings }));
exports.SingleActionSchema = zod_1.z.discriminatedUnion('type', [
    exports.CodeActionSchema,
    exports.PieceActionSchema,
    exports.LoopOnItemsActionSchema,
    exports.RouterActionSchema,
    exports.AiRouterActionSchema,
]);
exports.emptyCondition = {
    firstValue: '',
    secondValue: '',
    operator: BranchOperator.TEXT_CONTAINS,
    caseSensitive: false,
};
//# sourceMappingURL=action.js.map