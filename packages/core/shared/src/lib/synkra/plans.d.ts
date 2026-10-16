/**
 * Synkra Flow tier definitions — single source of truth.
 * Read-only, code-defined. Never editable from any UI.
 */
export type SynkraTier = 'free' | 'starter' | 'business' | 'pro';
export interface SynkraPlanLimits {
    tier: SynkraTier;
    name: string;
    priceZar: number;
    seats: number;
    workspaces: number;
    executions: number;
    activeWorkflows: number;
    draftWorkflows: number;
    maxWorkflowSteps: number;
    storageGb: number;
    emails: number;
    aiOps: number;
    sms: number;
    whatsapp: number;
    voiceMinutes: number;
    integrations: boolean;
    sso: boolean;
    apiKeys: boolean;
    customDomain: boolean;
    auditLogs: boolean;
    auditRetentionDays: number;
    whiteLabel: boolean;
    apiKeysLimit: number;
    customRolesLimit: number;
    ssoDomainLimit: number;
    studentDiscountZar: number;
    communityDiscountZar: number;
}
export declare const SYNKRA_PLANS: Record<SynkraTier, SynkraPlanLimits>;
export declare const SYNKRA_TIER_ORDER: SynkraTier[];
export declare function normalizeTier(tier: unknown): SynkraTier;
export declare function getPlanLimits(tier: unknown): SynkraPlanLimits;
export declare function getEffectivePriceZar(tier: unknown, eligibility: {
    studentVerified?: boolean;
    communityVerified?: boolean;
}): number;
