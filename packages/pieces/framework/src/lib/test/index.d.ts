import { ResumePayload, TriggerStrategy } from '@activepieces/core-piece-types';
import { ActionContext, CreateWaitpointParams, SetScheduleRequest, TriggerHookContext } from '../context';
import { InputPropertyMap, StaticPropsValue } from '../property';
export declare function createMockActionContext<Props extends InputPropertyMap>(params: {
    propsValue: StaticPropsValue<Props>;
    resumePayload?: ResumePayload;
    canPause?: boolean;
    onCreateWaitpoint?: (waitpoint: CreateWaitpointParams) => void;
    onWaitForWaitpoint?: (waitpointId: string) => void;
}): ActionContext<undefined, Props>;
export declare function createMockPollingTriggerContext<Props extends InputPropertyMap>(params: {
    propsValue: StaticPropsValue<Props>;
    onSetSchedule?: (schedule: SetScheduleRequest) => void;
}): TriggerHookContext<undefined, Props, TriggerStrategy.POLLING>;
