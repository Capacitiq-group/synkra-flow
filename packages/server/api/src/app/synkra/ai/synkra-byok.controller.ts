import { apId } from '@activepieces/core-utils';
import { AIProviderName, PrincipalType } from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { repoFactory } from '../../core/db/repo-factory';
import { encryptUtils } from '../../helper/encryption';
import { platformService } from '../../platform/platform.service';
import { synkraSubscriptionService } from '../billing/subscription.service';
import {
  AIProviderEntity,
  AIProviderSchema,
} from '../../ai/ai-provider-entity';

const repo = repoFactory<AIProviderSchema>(AIProviderEntity);

const SUPPORTED_PROVIDERS = [
  'openai',
  'anthropic',
  'google',
  'deepseek',
  'mistral',
  'xai',
  'openrouter',
  'custom',
] as const;

type SupportedProvider = (typeof SUPPORTED_PROVIDERS)[number];

function toEnum(p: SupportedProvider): AIProviderName {
  return p as unknown as AIProviderName;
}

/**
 * Synkra BYOK — Bring Your Own Key.
 *
 * Pro tier only. Lets the user save their own AI provider credentials
 * alongside the Synkra-wide key. Their key is used for their own AI
 * calls and does not consume Synkra credits.
 *
 * Free/Starter/Business users cannot save a BYOK key — enforced here
 * AND in synkra-byok-guard.ts (defence in depth).
 */
export const synkraByokController: FastifyPluginAsyncZod = async (app) => {
  // Helper — asserts the caller is Pro
  async function assertPro(platformId: string): Promise<void> {
    const platform = await platformService(app.log).getOne(platformId as never);
    if (!platform?.ownerId) {
      throw new Error('No platform owner resolved');
    }
    const sub = await synkraSubscriptionService(app.log).getOrCreateForUser(
      platform.ownerId,
    );
    if (sub.tier !== 'pro') {
      const err = new Error(
        'Bring your own AI key is a Pro feature. Upgrade to Pro to add your own provider.',
      );
      (err as { statusCode?: number }).statusCode = 403;
      throw err;
    }
  }

  // GET — list current BYOK keys for this platform
  app.get(
    '/byok',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        response: {
          200: z.object({
            providers: z.array(
              z.object({
                id: z.string(),
                provider: z.string(),
                displayName: z.string(),
                modelIds: z.array(z.string()),
                enabledForChat: z.boolean(),
                created: z.string(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const p = request.principal as {
        type: string;
        platform?: { id: string };
      };
      const platformId = p.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      const rows = await repo().findBy({ platformId });
      // Exclude the Synkra-managed ACTIVEPIECES row and any non-BYOK rows
      const byok = rows.filter(
        (r) =>
          r.provider !== AIProviderName.ACTIVEPIECES &&
          r.provider !== AIProviderName.OPENAI, // We use OPENAI for Synkra DeepSeek seed
      );
      return {
        providers: byok.map((r) => ({
          id: r.id,
          provider: r.provider,
          displayName: r.displayName,
          modelIds: r.modelIds ?? [],
          enabledForChat: r.enabledForChat,
          created: new Date(r.created).toISOString(),
        })),
      };
    },
  );

  // POST — create a BYOK key
  app.post(
    '/byok',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        body: z.object({
          provider: z.enum(SUPPORTED_PROVIDERS),
          displayName: z.string().min(1).max(80),
          apiKey: z.string().min(8),
          modelIds: z.array(z.string()).default([]),
          baseUrl: z.string().url().optional(),
        }),
        response: {
          200: z.object({ id: z.string(), provider: z.string() }),
          400: z.object({ error: z.string() }),
          403: z.object({ error: z.string() }),
          500: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const p = request.principal as {
        type: string;
        platform?: { id: string };
      };
      const platformId = p.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }

      try {
        await assertPro(platformId);
      } catch (err) {
        const e = err as { statusCode?: number; message?: string };
        return reply
          .status(e.statusCode === 403 ? 403 : 500)
          .send({ error: e.message ?? 'BYOK not allowed' });
      }

      const { provider, displayName, apiKey, modelIds, baseUrl } =
        request.body;

      // Encrypt credentials before storage
      const encryptedAuth = await encryptUtils.encryptObject({
        apiKey,
      } as never);

      const config = baseUrl ? { baseUrl } : {};

      const savedRows = await repo().save({
        id: apId(),
        platformId,
        provider: toEnum(provider),
        displayName,
        auth: encryptedAuth as never,
        config: config as never,
        enabledForChat: false, // BYOK is per-user-choice, not auto-chat
        modelScope: 'all',
        modelIds,
        projectScope: 'all',
        projectIds: [],
        status: 'active',
        statusVersion: 0,
      } as never);
      const saved = Array.isArray(savedRows) ? savedRows[0] : savedRows;

      return {
        id: saved.id,
        provider: String(saved.provider),
      };
    },
  );

  // DELETE — remove a BYOK key
  app.delete(
    '/byok/:id',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          500: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const p = request.principal as {
        type: string;
        platform?: { id: string };
      };
      const platformId = p.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }

      try {
        await assertPro(platformId);
      } catch (err) {
        const e = err as { statusCode?: number; message?: string };
        return reply
          .status(e.statusCode === 403 ? 403 : 500)
          .send({ error: e.message ?? 'BYOK not allowed' });
      }

      const row = await repo().findOneBy({
        id: request.params.id,
        platformId,
      });
      if (!row) {
        return reply.status(404).send({ error: 'Provider not found.' });
      }
      if (row.provider === AIProviderName.ACTIVEPIECES) {
        return reply
          .status(403)
          .send({ error: 'Cannot delete the platform AI provider.' });
      }
      await repo().delete({ id: row.id });
      return { ok: true };
    },
  );
};
