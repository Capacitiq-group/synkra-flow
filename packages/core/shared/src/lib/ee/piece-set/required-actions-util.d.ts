import { FlowVersion } from '@activepieces/core-execution';
import { PieceSetConfig, RequiredActions, RequiredActionsMode } from './index';
declare function removeExcludedRequiredActions({ config, requiredActions }: {
    config: PieceSetConfig;
    requiredActions: ActionsGroupedByPiece;
}): ActionsGroupedByPiece;
declare function findExcludedRequiredActions({ config, requiredActions }: {
    config: PieceSetConfig;
    requiredActions: ActionsGroupedByPiece;
}): ActionsGroupedByPiece;
declare function checkRequiredActionsExistInFlowVersion({ requiredActions, flowVersion, actionExists }: CheckRequiredActionsExistInFlowVersionParams): RequiredActionsCheckResult;
declare function buildRequiredActionsMissingErrorMessage(result: RequiredActionsCheckResult): string;
declare function buildExcludedRequiredActionsErrorMessage(excludedRequiredActions: ActionsGroupedByPiece): string;
export declare const requiredActionsUtil: {
    checkRequiredActionsExistInFlowVersion: typeof checkRequiredActionsExistInFlowVersion;
    buildRequiredActionsMissingErrorMessage: typeof buildRequiredActionsMissingErrorMessage;
    buildExcludedRequiredActionsErrorMessage: typeof buildExcludedRequiredActionsErrorMessage;
    removeExcludedRequiredActions: typeof removeExcludedRequiredActions;
    findExcludedRequiredActions: typeof findExcludedRequiredActions;
};
type ActionsGroupedByPiece = Record<string, string[]>;
type CheckRequiredActionsExistInFlowVersionParams = {
    requiredActions: RequiredActions;
    flowVersion: FlowVersion;
    actionExists: ActionExistence;
};
export type ActionExistence = Record<string, Record<string, boolean>>;
export type RequiredActionsCheckResult = {
    passed: boolean;
    mode: RequiredActionsMode;
    requiredActions: ActionsGroupedByPiece;
    missingActions: ActionsGroupedByPiece;
    skippedActions: ActionsGroupedByPiece;
};
export {};
