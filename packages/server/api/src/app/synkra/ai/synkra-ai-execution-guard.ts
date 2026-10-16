import { ActivepiecesError, ErrorCode } from '@activepieces/core-utils';
import { AIProviderName, PlatformUsageMetric } from '@activepieces/shared';
import { FastifyBaseLogger } from 'fastify';
import { platformService } from '../../platform/platform.service';
import { synkraSubscriptionService } from '../billing/subscription.service';
import { synkraUsageService } from '../billing/usage.service';

/**
 * Synkra AI execution guard.
 *
 * Runs immediately before a credit-consuming AI operation. Blocks the
 * operation at the execution layer, so no UI bypass or API trick can
 * get around it.
 *
 * Rules (per the pricing/product spec):
 *
 *   - Free tier:   no AI execution at all (no credits ever)
 *   - Starter:     allowed while included credits remain
 *   - Business:    allowed while included credits remain
 *   - Pro:         allowed while included credits remain; PLUS may
 *                  bring their own key which bypasses credits entirely
 *
 * IMPORTANT: this guard must only run when the *resolved* provider is
 * the Synkra-managed key (AIProviderName.ACTIVEPIECES). BYOK providers
 * have their own credentials and consume no Flow credits — they should
 * not be gated by this class. Call sites are responsible for checking
 * the provider name first.
 *
 * Non-credit operations (connect an AI integration, configure an AI
 * step in the builder, test credentials) are NOT gated here.
 */
export const synkraAiExecutionGuard = (log: FastifyBaseLogger) => ({
  /**
   * Throws if the platform cannot execute a credit-consuming AI op.
   * Returns silently if allowed.
   */
  async assertAllowed(params: {
    platformId: string;
    source: 'chat' | 'workflow' | 'personalization' | 'tool-search' | 'knowledge-base';
  }): Promise<void> {
    try {
      const platform = await platformService(log).getOne(params.platformId as never);
      if (!platform?.ownerId) {
        log.warn(
          { platformId: params.platformId, source: params.source },
          '[synkra-ai-execution-guard] no platform owner — allowing (fail open)',
        );
        return;
      }
      const sub = await synkraSubscriptionService(log).getOrCreateForUser(platform.ownerId);
      const tier = sub.tier;

      // Total allowance = included plan credits + any purchased add-on credits.
      // Free tiers have 0 included but CAN buy AI credits add-ons, so we
      // must sum both before deciding whether the operation is allowed.
      const { getPlanLimits } = await import('@activepieces/shared');
      const plan = getPlanLimits(tier);
      const included = plan.aiOps ?? 0;

      const usage = await synkraUsageService(log).getUsage(platform.ownerId);
      const used = usage.aiOpsUsed ?? 0;

      let purchasedRemaining = 0;
      try {
        const { synkraCreditLotService } = await import('../credits/credit-lot.service');
        const lots = await synkraCreditLotService(log).getAvailable(
          platform.ownerId,
          'ai',
        );
        purchasedRemaining = lots;
      } catch (err) {
        log.warn(
          { err, platformId: params.platformId },
          '[synkra-ai-execution-guard] credit lot lookup failed — assuming zero purchased credits',
        );
      }

      const totalAvailable = included + purchasedRemaining;
      if (used >= totalAvailable) {
        const message =
          tier === 'free'
            ? 'AI operations require AI credits. Buy an AI credits add-on to use AI in your workflows.'
            : 'AI credits exhausted. Your included allowance resets next billing cycle, or you can buy an AI credits add-on now.';
        throw new ActivepiecesError({
          code: ErrorCode.QUOTA_EXCEEDED,
          params: {
            message,
            metric: PlatformUsageMetric.ACTIVE_FLOWS,
            usage: used,
            limit: totalAvailable,
          },
        });
      }
    } catch (err) {
      // Re-throw our own quota errors.
      if (err instanceof ActivepiecesError && err.error.code === ErrorCode.QUOTA_EXCEEDED) {
        throw err;
      }
      // Everything else fails open — a guard glitch must not break a
      // paying customer's workflow.
      log.warn(
        { err, platformId: params.platformId, source: params.source },
        '[synkra-ai-execution-guard] check failed — allowing (fail open)',
      );
    }
  },

  /**
   * Convenience helper for call sites: runs the guard only when the
   * resolved provider is the Synkra-managed key. BYOK providers skip
   * this guard entirely because they do not consume Flow credits.
   */
  async assertAllowedIfManaged(params: {
    platformId: string;
    source: 'chat' | 'workflow' | 'personalization' | 'tool-search' | 'knowledge-base';
    provider: AIProviderName | string;
  }): Promise<void> {
    if (params.provider === AIProviderName.ACTIVEPIECES) {
      await this.assertAllowed({
        platformId: params.platformId,
        source: params.source,
      });
    }
  },
});
