import { ApEdition } from '../../core/flag/flag';
declare function resolveChatEnabled({ edition, isEmbedded, planChatEnabled }: ResolveChatEnabledParams): boolean;
export declare const chatVisibility: {
    resolveChatEnabled: typeof resolveChatEnabled;
};
export type ResolveChatEnabledParams = {
    edition: ApEdition;
    isEmbedded: boolean;
    planChatEnabled: boolean;
};
export {};
