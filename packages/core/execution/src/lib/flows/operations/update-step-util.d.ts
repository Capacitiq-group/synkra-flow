import { FlowAction } from '../actions/action';
import { FlowTrigger } from '../triggers/trigger';
declare function preserveLastUpdatedDate<T extends FlowAction | FlowTrigger>({ existingStep, updatedStep }: PreserveLastUpdatedDateParams<T>): T;
export declare const updateStepUtil: {
    preserveLastUpdatedDate: typeof preserveLastUpdatedDate;
};
type PreserveLastUpdatedDateParams<T extends FlowAction | FlowTrigger> = {
    existingStep: FlowAction | FlowTrigger;
    updatedStep: T;
};
export {};
