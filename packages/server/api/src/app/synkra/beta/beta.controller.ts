import { ALL_PRINCIPAL_TYPES, PrincipalType } from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { platformService } from '../../platform/platform.service';
import { synkraBetaService } from './beta.service';

const businessSizeSchema = z.enum(['1-5', '6-20', '21-50', '51-200', '200+']);
const statusSchema = z.enum([
  'pending',
  'accepted',
  'rejected',
  'waitlisted',
  'withdrawn',
]);

async function isOwner(
  principal: { id: string; platform?: { id: string } } | { type: string },
  log: never,
): Promise<boolean> {
  void log;
  if (!('platform' in principal) || !principal.platform) return false;
  try {
    const platform = await platformService(log).getOne(principal.platform.id as never);
    return platform?.ownerId === principal.id;
  } catch {
    return false;
  }
}

export const synkraBetaController: FastifyPluginAsyncZod = async (app) => {
  // ────────────────────────────────────────────────────────────
  // Public endpoints
  // ────────────────────────────────────────────────────────────

  app.post(
    '/apply',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        body: z.object({
          fullName: z.string().min(2).max(120),
          email: z.string().email(),
          businessName: z.string().min(1).max(160),
          businessWebsite: z.string().url().optional(),
          businessSize: businessSizeSchema,
          automationIntent: z.string().min(100).max(2000),
          dailyTools: z.array(z.string()).max(50).default([]),
          isAgency: z.boolean(),
          referralSource: z.string().max(120).optional(),
          agreeToTerms: z.literal(true),
        }),
        response: {
          200: z.object({
            ok: z.boolean(),
            applicationId: z.string(),
            alreadyExists: z.boolean(),
          }),
        },
      },
    },
    async (request) => {
      const result = await synkraBetaService(request.log).apply({
        fullName: request.body.fullName,
        email: request.body.email,
        businessName: request.body.businessName,
        businessWebsite: request.body.businessWebsite,
        businessSize: request.body.businessSize,
        automationIntent: request.body.automationIntent,
        dailyTools: request.body.dailyTools,
        isAgency: request.body.isAgency,
        referralSource: request.body.referralSource,
      });
      return {
        ok: true,
        applicationId: result.id,
        alreadyExists: result.alreadyExists,
      };
    },
  );

  app.get(
    '/status',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        querystring: z.object({ email: z.string().email() }),
        response: {
          200: z.object({
            found: z.boolean(),
            status: z.string().nullable(),
            submittedAt: z.string().nullable(),
            reviewedAt: z.string().nullable(),
            position: z.number().nullable(),
          }),
        },
      },
    },
    async (request) => {
      const s = await synkraBetaService(request.log).getStatus(
        request.query.email,
      );
      if (!s) {
        return {
          found: false,
          status: null,
          submittedAt: null,
          reviewedAt: null,
          position: null,
        };
      }
      return {
        found: true,
        status: s.status,
        submittedAt: s.submittedAt,
        reviewedAt: s.reviewedAt,
        position: s.position,
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Owner-only endpoints
  // ────────────────────────────────────────────────────────────

  app.get(
    '/applications',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        querystring: z.object({
          status: statusSchema.optional(),
          limit: z.coerce.number().min(1).max(500).default(200),
        }),
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.USER) {
        return reply.status(401).send({ error: 'Must be signed in.' } as never);
      }
      const platformId = (principal as { platform: { id: string } }).platform.id;
      const platform = await platformService(request.log).getOne(platformId as never);
      if (!platform || platform.ownerId !== principal.id) {
        return reply.status(403).send({ error: 'Owner only.' } as never);
      }

      const apps = await synkraBetaService(request.log).list({
        status: request.query.status,
        limit: request.query.limit,
      });
      return { applications: apps };
    },
  );

  app.get(
    '/stats',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.USER) {
        return reply.status(401).send({ error: 'Must be signed in.' } as never);
      }
      const platformId = (principal as { platform: { id: string } }).platform.id;
      const platform = await platformService(request.log).getOne(platformId as never);
      if (!platform || platform.ownerId !== principal.id) {
        return reply.status(403).send({ error: 'Owner only.' } as never);
      }
      return synkraBetaService(request.log).stats();
    },
  );

  app.post(
    '/applications/:id/accept',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: { params: z.object({ id: z.string() }) },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.USER) {
        return reply.status(401).send({ error: 'Must be signed in.' } as never);
      }
      const platformId = (principal as { platform: { id: string } }).platform.id;
      const platform = await platformService(request.log).getOne(platformId as never);
      if (!platform || platform.ownerId !== principal.id) {
        return reply.status(403).send({ error: 'Owner only.' } as never);
      }
      const updated = await synkraBetaService(request.log).accept(
        request.params.id,
        principal.id,
      );
      return { ok: true, application: updated };
    },
  );

  app.post(
    '/applications/:id/reject',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        body: z.object({ notes: z.string().max(2000).optional() }),
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.USER) {
        return reply.status(401).send({ error: 'Must be signed in.' } as never);
      }
      const platformId = (principal as { platform: { id: string } }).platform.id;
      const platform = await platformService(request.log).getOne(platformId as never);
      if (!platform || platform.ownerId !== principal.id) {
        return reply.status(403).send({ error: 'Owner only.' } as never);
      }
      const updated = await synkraBetaService(request.log).reject(
        request.params.id,
        principal.id,
        request.body.notes,
      );
      return { ok: true, application: updated };
    },
  );

  app.post(
    '/applications/:id/waitlist',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        body: z.object({ notes: z.string().max(2000).optional() }),
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.USER) {
        return reply.status(401).send({ error: 'Must be signed in.' } as never);
      }
      const platformId = (principal as { platform: { id: string } }).platform.id;
      const platform = await platformService(request.log).getOne(platformId as never);
      if (!platform || platform.ownerId !== principal.id) {
        return reply.status(403).send({ error: 'Owner only.' } as never);
      }
      const updated = await synkraBetaService(request.log).waitlist(
        request.params.id,
        principal.id,
        request.body.notes,
      );
      return { ok: true, application: updated };
    },
  );
};
