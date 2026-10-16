import { PrincipalType } from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { apiKeyService } from '../../ee/api-keys/api-key-service';

/**
 * Synkra-owned API key endpoints.
 *
 * AP's stock /v1/api-keys endpoint requires the caller to be the platform
 * OWNER. That's too strict for Synkra, where any workspace user should be
 * able to mint a key for their own workspace.
 *
 * These endpoints just verify the user has a platform and scope the key to it.
 */
export const synkraApiKeysController: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        response: {
          200: z.object({
            data: z.array(
              z.object({
                id: z.string(),
                displayName: z.string(),
                truncatedValue: z.string(),
                created: z.string(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal as {
        type: string;
        id: string;
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      const page = await apiKeyService.list({ platformId });
      return {
        data: page.data.map((k) => ({
          id: k.id,
          displayName: k.displayName,
          truncatedValue: k.truncatedValue,
          created: new Date(k.created).toISOString(),
        })),
      };
    },
  );

  app.post(
    '/',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        body: z.object({ displayName: z.string().min(1).max(120) }),
        response: {
          200: z.object({
            id: z.string(),
            displayName: z.string(),
            value: z.string(),
            truncatedValue: z.string(),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal as {
        type: string;
        id: string;
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      const created = await apiKeyService.add({
        platformId,
        displayName: request.body.displayName,
        log: request.log,
      });
      return {
        id: created.id,
        displayName: created.displayName,
        value: created.value,
        truncatedValue: created.truncatedValue,
      };
    },
  );

  app.delete(
    '/:id',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal as {
        type: string;
        id: string;
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      try {
        await apiKeyService.delete({
          platformId,
          id: request.params.id,
        });
        return { ok: true };
      } catch {
        return reply.status(404).send({ error: 'API key not found.' });
      }
    },
  );
};
