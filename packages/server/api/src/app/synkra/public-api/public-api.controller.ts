import {
  ALL_PRINCIPAL_TYPES,
  PrincipalType,
} from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { distributedStore } from '../../database/redis-connections';
import { flowRepo } from '../../flows/flow/flow.repo';
import { flowRunRepo } from '../../flows/flow-run/flow-run-service';
import { flowRunService } from '../../flows/flow-run/flow-run-service';
import { projectRepo } from '../../project/project-repo';
import { platformService } from '../../platform/platform.service';
import { appConnectionService } from '../../app-connection/app-connection-service/app-connection-service';
import { AppConnectionStatus, FlowStatus, FlowRunStatus, RunEnvironment } from '@activepieces/shared';
import { flowService } from '../../flows/flow/flow.service';
import { eventDestinationService } from '../../event-destinations/event-destinations.service';
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

const RATE_LIMIT_PER_MINUTE = 100;

/**
 * Per-API-key rate limiting using the shared Redis store.
 * Returns true if the request is allowed, false if the key is over the limit.
 * Fails open on Redis errors so a Redis outage cannot take down the API.
 */
async function checkRateLimit(
  keyId: string,
  log: { warn: (obj: Record<string, unknown>, msg: string) => void },
): Promise<boolean> {
  try {
    const minute = Math.floor(Date.now() / 60000);
    const redisKey = `synkra-public-api-rl:${keyId}:${minute}`;
    const count = (await distributedStore.get<number>(redisKey)) ?? 0;
    if (count >= RATE_LIMIT_PER_MINUTE) {
      return false;
    }
    await distributedStore.put(redisKey, count + 1, 120);
    return true;
  } catch (err) {
    log.warn({ err }, '[public-api] rate limit check failed, allowing');
    return true;
  }
}

/**
 * Resolve the platform ID and API key ID from a SERVICE principal.
 * Returns null if the principal is not a SERVICE principal or has no platform.
 */
function resolveServicePrincipal(
  principal: unknown,
): { platformId: string; keyId: string } | null {
  const p = principal as {
    type?: string;
    id?: string;
    platform?: { id?: string };
  };
  if (p.type !== 'SERVICE' || !p.platform?.id || !p.id) return null;
  return { platformId: p.platform.id, keyId: p.id };
}

export const synkraPublicApiController: FastifyPluginAsyncZod = async (app) => {
  // ────────────────────────────────────────────────────────────
  // Auth + rate limit + audit preamble shared by all endpoints
  // ────────────────────────────────────────────────────────────
  async function gate(
    request: { principal: unknown; log: { info: (o: Record<string, unknown>, m: string) => void; warn: (o: Record<string, unknown>, m: string) => void } },
    reply: { status: (code: number) => { send: (body: unknown) => unknown } },
    endpoint: string,
  ): Promise<{ platformId: string; keyId: string } | null> {
    const ctx = resolveServicePrincipal(request.principal);
    if (!ctx) {
      reply.status(403).send({ error: 'This endpoint requires an API key.' });
      return null;
    }
    const allowed = await checkRateLimit(ctx.keyId, request.log);
    if (!allowed) {
      request.log.warn(
        { keyId: ctx.keyId, endpoint },
        '[public-api] rate limit exceeded',
      );
      reply
        .status(429)
        .send({ error: 'Rate limit exceeded. Max 100 requests per minute.' });
      return null;
    }
    // Audit log — best effort, does not block
    request.log.info(
      {
        synkraApiCall: true,
        endpoint,
        platformId: ctx.platformId,
        keyId: ctx.keyId,
      },
      '[public-api] call',
    );
    return ctx;
  }

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
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /me');
      if (!ctx) return;
      const { platformId } = ctx;
      const platform = await platformService(request.log).getOne(platformId as never);
      const ownerId = platform?.ownerId ?? (request.principal as { id: string }).id;
      const sub = await synkraSubscriptionService(request.log).getOrCreateForUser(ownerId);
      const usage = await synkraUsageService(request.log).getUsage(ownerId);
      const { getPlanLimits } = await import('@activepieces/shared');
      const plan = getPlanLimits(sub.tier);

      // Real count of runs this month across the platform
      let executionsThisMonth = 0;
      try {
        const now = new Date();
        const monthStart = new Date(
          Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1),
        );
        executionsThisMonth = await flowRunRepo()
          .createQueryBuilder('fr')
          .innerJoin('project', 'p', 'p.id = fr."projectId"')
          .where('p."platformId" = :platformId', { platformId })
          .andWhere('fr.created >= :start', { start: monthStart.toISOString() })
          .getCount();
      } catch (err) {
        request.log.warn({ err }, '[public-api] executions count failed');
      }

      return {
        platformId,
        platformName: platform?.name ?? null,
        principalType: 'SERVICE',
        tier: sub.tier,
        usage: {
          executionsThisMonth,
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
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /flows');
      if (!ctx) return;
      const { platformId } = ctx;
      const projects = await projectRepo().find({
        where: { platformId } as never,
      });
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
  // Trigger a flow — POST /flows/:id/run
  // ────────────────────────────────────────────────────────────
  app.post(
    '/flows/:id/run',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        body: z
          .object({
            input: z.record(z.string(), z.unknown()).optional(),
          })
          .optional(),
        response: {
          200: z.object({
            runId: z.string(),
            status: z.string(),
          }),
          400: z.object({ error: z.string() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
          500: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(
        request as never,
        reply as never,
        'POST /flows/:id/run',
      );
      if (!ctx) return;
      const { platformId, keyId } = ctx;

      const flow = await flowRepo().findOneBy({ id: request.params.id });
      if (!flow) {
        return reply.status(404).send({ error: 'Flow not found.' });
      }
      const project = await projectRepo().findOneBy({ id: flow.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Flow is not on this platform.' });
      }
      if (!flow.publishedVersionId) {
        return reply
          .status(400)
          .send({ error: 'Flow has no published version.' } as never);
      }

      try {
        const run = await flowRunService(request.log).startManualTrigger({
          projectId: flow.projectId,
          flowVersionId: flow.publishedVersionId,
          triggeredBy: `api-key:${keyId}`,
        });
        return {
          runId: run.id,
          status: run.status,
        };
      } catch (err) {
        request.log.error({ err }, '[public-api] failed to start flow');
        return reply
          .status(500)
          .send({ error: 'Failed to start flow.' } as never);
      }
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
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /runs');
      if (!ctx) return;
      const { platformId } = ctx;
      const projects = await projectRepo().find({
        where: { platformId } as never,
      });
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
            ? new Date(
                (r as unknown as { finishTime: string }).finishTime,
              ).toISOString()
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
      const ctx = await gate(
        request as never,
        reply as never,
        'GET /runs/:id',
      );
      if (!ctx) return;
      const { platformId } = ctx;
      const run = await flowRunRepo().findOneBy({ id: request.params.id });
      if (!run) {
        return reply.status(404).send({ error: 'Run not found.' } as never);
      }
      const project = await projectRepo().findOneBy({ id: run.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' } as never);
      }
      return run;
    },
  );

  // ────────────────────────────────────────────────────────────
  // Connections — list active app connections on the platform
  // ────────────────────────────────────────────────────────────
  app.get(
    '/connections',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        response: {
          200: z.object({
            connections: z.array(
              z.object({
                id: z.string(),
                displayName: z.string(),
                pieceName: z.string(),
                projectId: z.string().nullable(),
                status: z.string(),
                created: z.string(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(
        request as never,
        reply as never,
        'GET /connections',
      );
      if (!ctx) return;
      const { platformId } = ctx;
      const page = await appConnectionService(request.log).list({
        projectId: null,
        projectIds: undefined,
        ownerIds: undefined,
        pieceName: undefined,
        cursorRequest: null,
        displayName: undefined,
        status: [AppConnectionStatus.ACTIVE],
        limit: 200,
        scope: undefined,
        platformId,
        externalIds: undefined,
      });
      // Filter out internal Synkra pieces (chat widget etc.) from user-facing list
      const userConnections = page.data.filter(
        (c) => !c.pieceName.startsWith('@synkra/'),
      );
      return {
        connections: userConnections.map((c) => ({
          id: c.id,
          displayName: c.displayName,
          pieceName: c.pieceName,
          projectId: (c.projectIds ?? [])[0] ?? null,
          status: c.status,
          created: new Date(c.created).toISOString(),
        })),
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Delete a connection — DELETE /connections/:id
  // ────────────────────────────────────────────────────────────
  app.delete(
    '/connections/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(
        request as never,
        reply as never,
        'DELETE /connections/:id',
      );
      if (!ctx) return;
      const { platformId } = ctx;
      const page = await appConnectionService(request.log).list({
        projectId: null,
        projectIds: undefined,
        ownerIds: undefined,
        pieceName: undefined,
        cursorRequest: null,
        displayName: undefined,
        status: undefined,
        limit: 200,
        scope: undefined,
        platformId,
        externalIds: undefined,
      });
      const match = page.data.find((c) => c.id === request.params.id);
      if (!match) {
        return reply.status(404).send({ error: 'Connection not found.' });
      }
      await appConnectionService(request.log).delete({
        id: request.params.id,
        platformId,
        ownerId: null,
        projectId: null,
      } as never);
      return { ok: true };
    },
  );

  // ────────────────────────────────────────────────────────────
  // GET /flows/:id — single flow detail
  // ────────────────────────────────────────────────────────────
  app.get(
    '/flows/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({
            id: z.string(),
            displayName: z.string(),
            status: z.string(),
            projectId: z.string(),
            publishedVersionId: z.string().nullable(),
            created: z.string(),
            updated: z.string(),
          }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /flows/:id');
      if (!ctx) return;
      const { platformId } = ctx;
      const flow = await flowRepo().findOneBy({ id: request.params.id });
      if (!flow) {
        return reply.status(404).send({ error: 'Flow not found.' });
      }
      const project = await projectRepo().findOneBy({ id: flow.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' });
      }
      return {
        id: flow.id,
        displayName: (flow as { displayName?: string }).displayName ?? 'Untitled',
        status: flow.status,
        projectId: flow.projectId,
        publishedVersionId: flow.publishedVersionId ?? null,
        created: new Date(flow.created).toISOString(),
        updated: new Date(flow.updated).toISOString(),
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // PATCH /flows/:id — rename a flow
  // ────────────────────────────────────────────────────────────
  app.patch(
    '/flows/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        body: z.object({
          displayName: z.string().min(1).max(200).optional(),
        }),
        response: {
          200: z.object({
            id: z.string(),
            displayName: z.string(),
          }),
          400: z.object({ error: z.string() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'PATCH /flows/:id');
      if (!ctx) return;
      const { platformId } = ctx;
      const flow = await flowRepo().findOneBy({ id: request.params.id });
      if (!flow) {
        return reply.status(404).send({ error: 'Flow not found.' });
      }
      const project = await projectRepo().findOneBy({ id: flow.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' });
      }
      if (!request.body.displayName) {
        return reply.status(400).send({ error: 'Nothing to update.' });
      }
      await flowRepo().update(
        { id: flow.id },
        { displayName: request.body.displayName } as never,
      );
      return {
        id: flow.id,
        displayName: request.body.displayName,
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // POST /flows/:id/enable
  // ────────────────────────────────────────────────────────────
  app.post(
    '/flows/:id/enable',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean(), status: z.string() }),
          400: z.object({ error: z.string() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
          500: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'POST /flows/:id/enable');
      if (!ctx) return;
      const { platformId } = ctx;
      const flow = await flowRepo().findOneBy({ id: request.params.id });
      if (!flow) {
        return reply.status(404).send({ error: 'Flow not found.' });
      }
      const project = await projectRepo().findOneBy({ id: flow.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' });
      }
      if (!flow.publishedVersionId) {
        return reply
          .status(400)
          .send({ error: 'Flow has no published version.' });
      }
      try {
        await flowService(request.log).applyStatusChangeForPublishedFlow({
          id: flow.id,
          projectId: flow.projectId,
          newStatus: FlowStatus.ENABLED,
        });
        return { ok: true, status: FlowStatus.ENABLED };
      } catch (err) {
        request.log.error({ err }, '[public-api] enable flow failed');
        return reply
          .status(500)
          .send({ error: 'Failed to enable flow.' } as never);
      }
    },
  );

  // ────────────────────────────────────────────────────────────
  // POST /flows/:id/disable
  // ────────────────────────────────────────────────────────────
  app.post(
    '/flows/:id/disable',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean(), status: z.string() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
          500: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'POST /flows/:id/disable');
      if (!ctx) return;
      const { platformId } = ctx;
      const flow = await flowRepo().findOneBy({ id: request.params.id });
      if (!flow) {
        return reply.status(404).send({ error: 'Flow not found.' });
      }
      const project = await projectRepo().findOneBy({ id: flow.projectId });
      if (!project || project.platformId !== platformId) {
        return reply.status(403).send({ error: 'Forbidden.' });
      }
      try {
        await flowService(request.log).applyStatusChangeForPublishedFlow({
          id: flow.id,
          projectId: flow.projectId,
          newStatus: FlowStatus.DISABLED,
        });
        return { ok: true, status: FlowStatus.DISABLED };
      } catch (err) {
        request.log.error({ err }, '[public-api] disable flow failed');
        return reply
          .status(500)
          .send({ error: 'Failed to disable flow.' } as never);
      }
    },
  );

  // ────────────────────────────────────────────────────────────
  // GET /connections/:id — single connection
  // ────────────────────────────────────────────────────────────
  app.get(
    '/connections/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({
            id: z.string(),
            displayName: z.string(),
            pieceName: z.string(),
            projectId: z.string().nullable(),
            status: z.string(),
            created: z.string(),
          }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /connections/:id');
      if (!ctx) return;
      const { platformId } = ctx;
      const page = await appConnectionService(request.log).list({
        projectId: null,
        projectIds: undefined,
        ownerIds: undefined,
        pieceName: undefined,
        cursorRequest: null,
        displayName: undefined,
        status: undefined,
        limit: 200,
        scope: undefined,
        platformId,
        externalIds: undefined,
      });
      const match = page.data.find((c) => c.id === request.params.id);
      if (!match) {
        return reply.status(404).send({ error: 'Connection not found.' });
      }
      return {
        id: match.id,
        displayName: match.displayName,
        pieceName: match.pieceName,
        projectId: (match.projectIds ?? [])[0] ?? null,
        status: match.status,
        created: new Date(match.created).toISOString(),
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // GET /usage/breakdown — daily run counts for last N days
  // ────────────────────────────────────────────────────────────
  app.get(
    '/usage/breakdown',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        querystring: z.object({
          days: z.coerce.number().min(1).max(90).default(30),
        }),
        response: {
          200: z.object({
            periodStart: z.string(),
            periodEnd: z.string(),
            totalRuns: z.number(),
            byStatus: z.record(z.string(), z.number()),
            byDay: z.array(
              z.object({
                date: z.string(),
                count: z.number(),
              }),
            ),
          }),
          403: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /usage/breakdown');
      if (!ctx) return;
      const { platformId } = ctx;
      const days = request.query.days;
      const end = new Date();
      const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);

      const projects = await projectRepo().find({
        where: { platformId } as never,
      });
      const projectIds = projects.map((p) => p.id);
      if (projectIds.length === 0) {
        return {
          periodStart: start.toISOString(),
          periodEnd: end.toISOString(),
          totalRuns: 0,
          byStatus: {},
          byDay: [],
        };
      }

      // Total + by-status
      const rawByStatus = await flowRunRepo()
        .createQueryBuilder('r')
        .select('r.status', 'status')
        .addSelect('COUNT(*)', 'count')
        .where('r."projectId" IN (:...projectIds)', { projectIds })
        .andWhere('r.created >= :start', { start: start.toISOString() })
        .andWhere('r.created <= :end', { end: end.toISOString() })
        .groupBy('r.status')
        .getRawMany<{ status: string; count: string }>();

      const byStatus: Record<string, number> = {};
      let totalRuns = 0;
      for (const row of rawByStatus) {
        const n = parseInt(row.count, 10);
        byStatus[row.status] = n;
        totalRuns += n;
      }

      // By-day
      const rawByDay = await flowRunRepo()
        .createQueryBuilder('r')
        .select("DATE_TRUNC('day', r.created)", 'day')
        .addSelect('COUNT(*)', 'count')
        .where('r."projectId" IN (:...projectIds)', { projectIds })
        .andWhere('r.created >= :start', { start: start.toISOString() })
        .andWhere('r.created <= :end', { end: end.toISOString() })
        .groupBy("DATE_TRUNC('day', r.created)")
        .orderBy("DATE_TRUNC('day', r.created)", 'ASC')
        .getRawMany<{ day: Date; count: string }>();

      const byDay = rawByDay.map((row) => ({
        date: new Date(row.day).toISOString().slice(0, 10),
        count: parseInt(row.count, 10),
      }));

      return {
        periodStart: start.toISOString(),
        periodEnd: end.toISOString(),
        totalRuns,
        byStatus,
        byDay,
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Webhooks — subscribe to flow events
  // ────────────────────────────────────────────────────────────

  app.get(
    '/webhooks',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
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
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /webhooks');
      if (!ctx) return;
      const { platformId } = ctx;
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
    '/webhooks',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
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
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'POST /webhooks');
      if (!ctx) return;
      const { platformId } = ctx;
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
        request.log.warn({ err }, '[public-api] webhook create failed');
        return reply.status(400).send({
          error:
            (err as Error).message ?? 'Could not create webhook subscription.',
        });
      }
    },
  );

  app.delete(
    '/webhooks/:id',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ id: z.string() }),
        response: {
          200: z.object({ ok: z.boolean() }),
          403: z.object({ error: z.string() }),
          404: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(
        request as never,
        reply as never,
        'DELETE /webhooks/:id',
      );
      if (!ctx) return;
      const { platformId } = ctx;
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
          403: z.object({ error: z.string() }),
          429: z.object({ error: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const ctx = await gate(request as never, reply as never, 'GET /ping');
      if (!ctx) return;
      return {
        ok: true,
        principalType: 'SERVICE',
        platformId: ctx.platformId,
      };
    },
  );

  // ────────────────────────────────────────────────────────────
  // Unused import guard — keep declared even if not all used yet
  // ────────────────────────────────────────────────────────────
  void runStatus;
  void FlowRunStatus;
  void RunEnvironment;
};
