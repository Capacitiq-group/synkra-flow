import { z } from 'zod';
export declare function toProviderOutcomeSignal(error: unknown): ProviderOutcomeSignal;
export declare function observedProviderFetch(onOutcome: ProviderOutcomeReporter | undefined): typeof globalThis.fetch | undefined;
export declare function isProviderCreditError(text: string): boolean;
export declare function isTransientProviderError(text: string): boolean;
export declare function isProviderBillingError(text: string): boolean;
export declare function isProviderRateLimitError(text: string): boolean;
export declare function classifyProviderOutcome({ statusCode, body, message }: ProviderOutcomeSignal): AiProviderKeyStatus | NoStatusChange;
export declare function isFallbackWorthy({ statusCode, body, message, retryable }: ProviderOutcomeSignal): boolean;
export declare const AiProviderKeyStatus: z.ZodEnum<{
    active: "active";
    out_of_credits: "out_of_credits";
    rejected: "rejected";
    unreachable: "unreachable";
}>;
export type AiProviderKeyStatus = z.infer<typeof AiProviderKeyStatus>;
export type NoStatusChange = 'no_change';
export type ProviderOutcomeSignal = {
    statusCode?: number;
    body?: string;
    message?: string;
    retryable?: boolean;
    fromProvider?: boolean;
};
export type ProviderOutcomeReporter = (signal: ProviderOutcomeSignal) => void | Promise<void>;
