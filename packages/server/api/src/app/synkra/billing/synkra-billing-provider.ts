import { FlowRunStatus, RunEnvironment } from '@activepieces/shared'
import { FastifyBaseLogger } from 'fastify'
import { flowRunRepo } from '../../flows/flow-run/flow-run-service'
import { platformService } from '../../platform/platform.service'
import { BillingProvider, emptyBillingOverview } from '../../platform/billing-provider'
import { getPlanLimits } from '@activepieces/shared'
import { synkraSubscriptionService } from './subscription.service'

/**
 * Synkra billing provider.
 *
 * Replaces the Autumn (or default no-op) provider. We sell Synkra
 * subscriptions via Paystack, not AP credits. This provider gates
 * production runs on the tier's monthly execution cap.
 *
 * Wiring:
 *   AP fires shouldBlockOnCredits before every production run
 *   (webhook.service.ts and flow-run-service.ts). If we return true,
 *   AP creates a QUOTA_EXCEEDED flow run and returns 402 to the caller.
 *   The user sees the standard "quota exceeded" UI.
 */
export const synkraBillingProvider = (log: FastifyBaseLogger): BillingProvider => ({
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

  async shouldBlockOnCredits(platformId: string): Promise<boolean> {
    const ownerUserId = await getPlatformOwnerUserId(platformId, log)
    if (!ownerUserId) {
      // Bootstrap phase — no owner resolved yet. Do not block.
      return false
    }
    const sub = await synkraSubscriptionService(log).getOrCreateForUser(ownerUserId)
    const plan = getPlanLimits(sub.tier)

    if (plan.executions <= 0) {
      // Tiers with no execution allowance are always blocked on production.
      // (Free has 500, so this is only for future custom cases.)
      log.warn(
        { platformId, tier: sub.tier },
        'synkra: tier has zero execution allowance — blocking run',
      )
      return true
    }

    const used = await countRunsThisMonth(platformId, log)
    if (used >= plan.executions) {
      log.warn(
        { platformId, tier: sub.tier, used, limit: plan.executions },
        'synkra: monthly execution cap reached',
      )
      return true
    }
    return false
  },

  getCreditsAndAppSumoState: async () => ({
    credits: { blocked: false, metered: false, usage: 0, limit: 0, remaining: 0, unlimited: true },
    appSumo: { blocked: false, metered: false, usage: 0, limit: 0, remaining: 0, unlimited: true },
  }),
  getConsumablesUsage: async () => ({ credits: null, appSumo: null }),
  getCreditUsage: async () => ({ total: 0, byProject: [] }),
})

/**
 * Returns the userId of the platform's owner (the account we bill against).
 */
async function getPlatformOwnerUserId(
  platformId: string,
  log: FastifyBaseLogger,
): Promise<string | null> {
  try {
    const platform = await platformService(log).getOne(platformId)
    return platform?.ownerId ?? null
  } catch (err) {
    log.warn({ platformId, err }, 'synkra: could not resolve platform owner')
    return null
  }
}

/**
 * Counts production flow runs (all statuses except QUOTA_EXCEEDED) for the
 * current calendar month, scoped to the platform via projects.
 */
async function countRunsThisMonth(
  platformId: string,
  log: FastifyBaseLogger,
): Promise<number> {
  const now = new Date()
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString()

  try {
    const count = await flowRunRepo()
      .createQueryBuilder('fr')
      .innerJoin('project', 'p', 'p.id = fr."projectId"')
      .where('p."platformId" = :platformId', { platformId })
      .andWhere('fr.environment = :env', { env: RunEnvironment.PRODUCTION })
      .andWhere('fr.status != :quota', { quota: FlowRunStatus.QUOTA_EXCEEDED })
      .andWhere('fr.created >= :start', { start: monthStart })
      .getCount()
    return count
  } catch (err) {
    log.warn({ platformId, err }, 'synkra: countRunsThisMonth failed — allowing run')
    return 0
  }
}
