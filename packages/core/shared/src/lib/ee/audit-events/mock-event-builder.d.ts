import { PlatformId, ProjectId } from '@activepieces/core-utils';
import { ApplicationEvent, ApplicationEventName } from './index';
export declare const buildMockEvent: ({ event, platformId, projectId }: BuildMockEventParams) => ApplicationEvent;
export type BuildMockEventParams = {
    event: ApplicationEventName;
    platformId: PlatformId;
    projectId?: ProjectId;
};
