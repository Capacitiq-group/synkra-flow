import { ActivepiecesError, ErrorCode, PlatformUsageMetric } from '@activepieces/core-utils';
import { FlowRunStatus, PlatformPlanWithOnlyLimits, ProjectType, RunEnvironment } from '@activepieces/shared';
import { FastifyBaseLogger } from 'fastify';
import { repoFactory } from '../../core/db/repo-factory';
import { flowRunRepo } from '../../flows/flow-run/flow-run-service';
import { projectService } from '../../project/project-service';
import { BillingProvider, emptyBillingOverview } from '../../platform/billing-provider';
import { system } from '../../helper/system/system';
import { AppSystemProp } from '../../helper/system/system-props';
import { getPlanLimits } from '@activepieces/shared';
import { synkraSubscriptionService } from './subscription.service';
import { Project } from '@activepieces/shared';

/**
 * Synkra billing provider — replaces the Autumn (or no-op) provider.
 *
 * Enforcement:
 *   - Monthly execution cap (per user, reset by created month)
 *   - Active workflows cap (checked at flow-publish time elsewhere)
 *   - Seats, projects, storage — enforced separately in respective services
 *
 * We do NOT sell via Autumn. Paystack drives subscription state; this
 * provider just reads it and blocks over-limit runs.
 */
export const synkraBillingProvider = (log: FastifyBaseLogger): BillingProvider => ({
  ...noopBillingProvider(log),

  async shouldBlockOnCredits(platformId: string): Promise<boolean> {
    // Called before every production run. We check the plan owner's tier.
    // The platform has one owner in our model — the platform's userId.
    const ownerUserId = await getPlatformOwnerUserId(platformId);
    if (!ownerUserId) {
      // Not yet resolved — do not block. (Bootstrapping.)
      return false;
    }
    const sub = await synkraSubscriptionService(log).getOrCreateForUser(ownerUserId);
    const plan = getPlanLimits(sub.tier);

    const used = await countRunsThisMonth(platformId);
    if (used >= plan.executions) {
      log.warn(
        { platformId, tier: sub.tier, used, limit: plan.executions },
        'synkra: monthly execution cap reached',
      );
      return true;
    }
    return false;
  },
});

/**
 * Returns the userId of the platform's owner. In our model, the platform
 * row has an ownerId — that's the account we bill against.
 */
async function getPlatformOwnerUserId(platformId: string): Promise<string | null> {
  try {
    const { platformService } = await import('../../platform/platform.service');
    const platform = await platformService(
      // no logger available here; the service accepts undefined internally
      undefined as unknown as FastifyBaseLogger,
    ).getOne(platformId);
    return platform?.ownerId ?? null;
  } catch {
    return null;
  }
}

/**
 * Counts production flow runs (all non-test, all statuses except QUOTA_EXCEEDED)
 * for the current calendar month for a given platform.
 */
async function countRunsThisMonth(platformId: string): Promise<number> {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  try {
    const count = await flowRunRepo()
      .createQueryBuilder('fr')
      .innerJoin('project', 'p', 'p.id = fr."projectId"')
      .where('p."platformId" = :platformId', { platformId })
      .andWhere('fr.environment = :env', { env: RunEnvironment.PRODUCTION })
      .andWhere('fr.status != :quota', { quota: FlowRunStatus.QUOTA_EXCEEDED })
      .andWhere('fr.created >= :start', { start: monthStart })
      .getCount();
    return count;
  } catch (err) {
    log_warn(err);
    return 0;
  }
}

function log_warn(err: unknown): void {
  // best-effort, keeps the check non-fatal on DB hiccups
  // eslint-disable-next-line no-console
  console.warn('[synkra billing] countRunsThisMonth failed:', err);
}

/**
 * The default no-op implementation. Most billing hooks we simply don't use —
 * we're not selling AP credits, we're selling Synkra subscriptions via Paystack.
 */
function noopBillingProvider(_log: FastifyBaseLogger): BillingProvider {
  return {
    listPlans: async () => [],
    getBillingOverview: async () => emptyBillingOverview({}),
    createCheckoutSession: async () => ({ checkoutUrl: null }),
    getBillingPortalUrl: async () => ({ url: '' }),
    adjustUnconsumableFeatureQuantity: async () => ({ checkoutUrl: null }),
    configureAutoTopUp: async () => {},
    setupPayment: async () => ({ url: null }),
    cancelSubscription: async () => {},
    reactivateSubscription: async () => {},
    trackFeature: async () => {},
    ensureEnrolled: async () => {},
    compFreeLegacy: async () => {},
    refreshEntitlements: async () => {},
    applyAppSumoPlan: async () => {},
    activateLicense: async () => {},
    isBillingEnforced: async () => true,
    shouldBlockOnCredits: async () => false,
    getCreditsAndAppSumoState: async () => ({
      credits: { blocked: false, metered: false, usage: 0, limit: 0, remaining: 0, unlimited: true },
      appSumo: { blocked: false, metered: false, usage: 0, limit: 0, remaining: 0, unlimited: true },
    }),
    getConsumablesUsage: async () => ({ credits: null, appSumo: null }),
    getCreditUsage: async () => ({ total: 0, byProject: [] }),
  };
}
