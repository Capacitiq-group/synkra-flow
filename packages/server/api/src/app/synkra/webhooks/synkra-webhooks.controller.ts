import { PrincipalType } from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { eventDestinationService } from '../../event-destinations/event-destinations.service';

/**
 * USER-authenticated webhook management.
 *
 * The frontend (browser session) manages webhook subscriptions for the
 * current platform without needing an API key. Public API endpoints exist
 * at /v1/synkra/public/webhooks for SERVICE (API key) clients.
 */
export const synkraWebhooksController: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        response: {
          200: z.object({
            webhooks: z.array(
              z.object({
                id: z.string(),
                url: z.string(),
                events: z.array(z.string()),
                enabled: z.boolean(),
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
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      const page = await eventDestinationService(request.log).list({
        platformId,
        cursorRequest: null,
        limit: 200,
      });
      return {
        webhooks: page.data.map((d) => ({
          id: d.id,
          url: d.url,
          events: d.events as string[],
          enabled: d.enabled,
          created: new Date(d.created).toISOString(),
        })),
      };
    },
  );

  app.post(
    '/',
    {
      config: { security: securityAccess.unscoped([PrincipalType.USER]) },
      schema: {
        body: z.object({
          url: z.string().url(),
          events: z.array(z.string()).min(1),
          enabled: z.boolean().optional(),
        }),
        response: {
          200: z.object({
            id: z.string(),
            url: z.string(),
            events: z.array(z.string()),
            enabled: z.boolean(),
            created: z.string(),
          }),
          400: z.object({ error: z.string() }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal as {
        type: string;
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      try {
        const created = await eventDestinationService(request.log).create({
          platformId,
          request: {
            url: request.body.url,
            events: request.body.events as never,
            enabled: request.body.enabled,
          } as never,
        });
        return {
          id: created.id,
          url: created.url,
          events: created.events as string[],
          enabled: created.enabled,
          created: new Date(created.created).toISOString(),
        };
      } catch (err) {
        request.log.warn({ err }, '[synkra-webhooks] create failed');
        return reply.status(400).send({
          error:
            (err as Error).message ?? 'Could not create webhook subscription.',
        });
      }
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
        platform?: { id: string };
      };
      const platformId = principal.platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'No platform.' });
      }
      try {
        await eventDestinationService(request.log).delete({
          id: request.params.id,
          platformId,
        });
        return { ok: true };
      } catch {
        return reply.status(404).send({ error: 'Webhook not found.' });
      }
    },
  );
};
