import {
  ALL_PRINCIPAL_TYPES,
  PrincipalType,
  SeekPage,
} from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { flowRepo } from '../../flows/flow/flow.repo';
import { flowRunRepo } from '../../flows/flow-run/flow-run-service';
import { projectRepo } from '../../project/project-repo';
import { platformService } from '../../platform/platform.service';
import { synkraSubscriptionService } from '../billing/subscription.service';
import { synkraUsageService } from '../billing/usage.service';

const runStatus = z.enum([
  'RUNNING',
  'SUCCEEDED',
  'FAILED',
  'TIMEOUT',
  'INTERNAL_ERROR',
  'QUOTA_EXCEEDED',
]);

export const synkraPublicApiController: FastifyPluginAsyncZod = async (app) => {
  // ────────────────────────────────────────────────────────────
  // Who am I — returns the platform associated with the API key
  // ────────────────────────────────────────────────────────────
  app.get(
    '/me',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        response: {
          200: z.object({
            platformId: z.string(),
            platformName: z.string().nullable(),
            principalType: z.string(),
            tier: z.string(),
            usage: z.object({
              executionsThisMonth: z.number(),
              aiOpsUsed: z.number(),
              emailsUsed: z.number(),
            }),
            limits: z.object({
              executions: z.number(),
              aiOps: z.number(),
              emails: z.number(),
            }),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.SERVICE) {
        return reply.status(403).send({
          error: 'This endpoint requires an API key.',
        });
      }
      const platformId = (principal as unknown as { platform?: { id: string } }).platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'API key has no platform.' });
      }
      const platform = await platformService(request.log).getOne(platformId as never);
      const ownerId = platform?.ownerId ?? principal.id;
      const sub = await synkraSubscriptionService(request.log).getOrCreateForUser(ownerId);
      const usage = await synkraUsageService(request.log).getUsage(ownerId);
      const { getPlanLimits } = await import('@activepieces/shared');
      const plan = getPlanLimits(sub.tier);

      return {
        platformId,
        platformName: platform?.name ?? null,
        principalType: principal.type,
        tier: sub.tier,
        usage: {
          executionsThisMonth: usage.aiOpsUsed === undefined ? 0 : 0,
          aiOpsUsed: usage.aiOpsUsed,
          emailsUsed: usage.emailsUsed,
        },
        limits: {
          executions: plan.executions,
          aiOps: plan.aiOps,
          emails: plan.emails,
        },
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Flows — list every flow in the platform
  // ────────────────────────────────────────────────────────────
  app.get(
    '/flows',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        response: {
          200: z.object({
            flows: z.array(
              z.object({
                id: z.string(),
                displayName: z.string(),
                status: z.string(),
                projectId: z.string(),
                created: z.string(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.SERVICE) {
        return reply.status(403).send({ error: 'API key required.' });
      }
      const platformId = (principal as unknown as { platform?: { id: string } }).platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'API key has no platform.' });
      }
      const projects = await projectRepo().find({ where: { platformId } as never });
      const projectIds = projects.map((p) => p.id);
      if (projectIds.length === 0) return { flows: [] };
      const flows = await flowRepo()
        .createQueryBuilder('f')
        .where('f."projectId" IN (:...projectIds)', { projectIds })
        .orderBy('f.created', 'DESC')
        .limit(200)
        .getMany();
      return {
        flows: flows.map((f) => ({
          id: f.id,
          displayName: (f as { displayName?: string }).displayName ?? 'Untitled',
          status: f.status,
          projectId: f.projectId,
          created: new Date(f.created).toISOString(),
        })),
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Runs — list recent runs, optionally filter by flow
  // ────────────────────────────────────────────────────────────
  app.get(
    '/runs',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        querystring: z.object({
          flowId: z.string().optional(),
          limit: z.coerce.number().min(1).max(100).default(50),
        }),
        response: {
          200: z.object({
            runs: z.array(
              z.object({
                id: z.string(),
                flowId: z.string(),
                status: z.string(),
                created: z.string(),
                finished: z.string().nullable(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.SERVICE) {
        return reply.status(403).send({ error: 'API key required.' });
      }
      const platformId = (principal as unknown as { platform?: { id: string } }).platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'API key has no platform.' });
      }
      const projects = await projectRepo().find({ where: { platformId } as never });
      const projectIds = projects.map((p) => p.id);
      if (projectIds.length === 0) return { runs: [] };

      const qb = flowRunRepo()
        .createQueryBuilder('r')
        .where('r."projectId" IN (:...projectIds)', { projectIds })
        .orderBy('r.created', 'DESC')
        .limit(request.query.limit);
      if (request.query.flowId) {
        qb.andWhere('r."flowId" = :flowId', { flowId: request.query.flowId });
      }
      const runs = await qb.getMany();
      return {
        runs: runs.map((r) => ({
          id: r.id,
          flowId: r.flowId,
          status: r.status,
          created: new Date(r.created).toISOString(),
          finished: (r as unknown as { finishTime?: string }).finishTime
            ? new Date((r as unknown as { finishTime: string }).finishTime).toISOString()
            : null,
        })),
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Single run — full detail
  // ────────────────────────────────────────────────────────────
  app.get(
    '/runs/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
      },
    },
    async (request, reply) => {
      const principal = request.principal;
      if (principal.type !== PrincipalType.SERVICE) {
        return reply.status(403).send({ error: 'API key required.' });
      }
      const platformId = (principal as unknown as { platform?: { id: string } }).platform?.id;
      if (!platformId) {
        return reply.status(403).send({ error: 'API key has no platform.' });
      }
      const run = await flowRunRepo().findOneBy({ id: request.params.id });
      if (!run) {
        return reply.status(404).send({ error: 'Run not found.' } as never);
      }
      const project = await projectRepo().findOneBy({ id: run.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' });
      }
      return run;
    },
  );

  // ────────────────────────────────────────────────────────────
  // Health — smoke test for API key auth
  // ────────────────────────────────────────────────────────────
  app.get(
    '/ping',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        response: {
          200: z.object({
            ok: z.boolean(),
            principalType: z.string(),
            platformId: z.string().nullable(),
          }),
        },
      },
    },
    async (request) => {
      const principal = request.principal;
      const pid = (principal as unknown as { platform?: { id: string } }).platform?.id ?? null;
      return {
        ok: true,
        principalType: principal.type,
        platformId: pid,
      };
    },
  );
};
