import { apId } from '@activepieces/core-utils';
import { AIProviderName } from '@activepieces/shared';
import { FastifyBaseLogger } from 'fastify';
import { repoFactory } from '../../core/db/repo-factory';
import { encryptUtils } from '../../helper/encryption';
import { system } from '../../helper/system/system';
import { AppSystemProp } from '../../helper/system/system-props';
import { AIProviderEntity, AIProviderSchema } from '../../ai/ai-provider-entity';

const repo = repoFactory<AIProviderSchema>(AIProviderEntity);

/**
 * Synkra-wide AI provider seed.
 *
 * On boot, if the Synkra DeepSeek key is set in env AND no provider row
 * exists with enabledForChat=true for a platform, we create one.
 *
 * This is what makes Chat work for every paid tier out of the box.
 *
 * Idempotent: running twice does nothing.
 *
 * BYOK (Pro) users add their own provider on top — this seed does not
 * block them. Guard logic in synkra-byok-guard.ts and the AI execution
 * guard handle that.
 */
export const synkraAiSeed = (log: FastifyBaseLogger) => ({
  async ensureForPlatform(platformId: string): Promise<void> {
    const apiKey = system.get(AppSystemProp.SYNKRA_AI_API_KEY);
    const baseUrl = system.get(AppSystemProp.SYNKRA_AI_BASE_URL);
    const model = system.get(AppSystemProp.SYNKRA_AI_MODEL) ?? 'deepseek-chat';

    if (!apiKey) {
      log.debug(
        { platformId },
        '[synkra-ai-seed] no SYNKRA_AI_API_KEY set — skipping',
      );
      return;
    }

    // Existing chat-enabled row? Nothing to do.
    const chatEnabled = await repo().findOneBy({
      platformId,
      enabledForChat: true,
    });
    if (chatEnabled) {
      log.debug(
        { platformId, providerId: chatEnabled.id },
        '[synkra-ai-seed] chat provider already present',
      );
      return;
    }

    // Existing Synkra-managed row (any state)? Flip it to chat-enabled
    // instead of creating a duplicate.
    const existing = await repo().findOneBy({
      platformId,
      provider: AIProviderName.DEEPSEEK,
    });
    if (existing) {
      await repo().update(
        { id: existing.id },
        { enabledForChat: true } as never,
      );
      log.info(
        { platformId, providerId: existing.id },
        '[synkra-ai-seed] enabled chat on existing provider',
      );
      return;
    }

    // Fresh seed — create the row.
    const auth = { apiKey };
    const config = baseUrl ? { baseUrl } : {};
    const encryptedAuth = await encryptUtils.encryptObject(auth as never);

    await repo().save({
      id: apId(),
      platformId,
      provider: AIProviderName.DEEPSEEK,
      displayName: 'Synkra AI',
      auth: encryptedAuth as never,
      config: config as never,
      enabledForChat: true,
      modelScope: 'all',
      // [SYNKRA] Seed every DeepSeek model so chat-tier resolution
      // (deepseek-flash / deepseek-chat / deepseek-reasoner) always
      // has a match. AP's built-in registry doesn't ship DeepSeek, so
      // pickAllowedModel relies on this list as the fallback.
      modelIds: Array.from(new Set([
        model,
        'deepseek-chat',
        'deepseek-flash',
        'deepseek-reasoner',
        'deepseek-v4-pro',
      ])),
      projectScope: 'all',
      projectIds: [],
      status: 'active',
      statusVersion: 0,
    } as never);

    log.info(
      { platformId, model },
      '[synkra-ai-seed] seeded Synkra AI provider',
    );
  },

  /**
   * Boot-time sweep: seed for every platform that exists. Safe to run
   * on every container start.
   */
  async ensureAll(): Promise<void> {
    try {
      const platforms = await repo().query(
        `SELECT id FROM platform`,
      ) as Array<{ id: string }>;
      for (const { id } of platforms) {
        await this.ensureForPlatform(id);
      }
    } catch (err) {
      log.error({ err }, '[synkra-ai-seed] boot sweep failed');
    }
  },
});
