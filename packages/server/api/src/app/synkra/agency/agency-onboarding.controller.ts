import { ALL_PRINCIPAL_TYPES, PrincipalType } from '@activepieces/shared';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { synkraAgencyService } from './agency.service';
import {
  synkraAgencyOnboardingService,
  type AgencyOnboardingStageKey,
} from './agency-onboarding.service';

const stageKeySchema = z.enum([
  'identity',
  'branding',
  'tier',
  'first_client',
  'support',
  'activate',
  'go_live',
]);

const stageSchema = z.object({
  key: z.string(),
  status: z.string(),
  required: z.boolean(),
  data: z.record(z.string(), z.unknown()),
  completedAt: z.string().nullable(),
});

const stateSchema = z.object({
  currentStage: z.string(),
  stages: z.array(stageSchema),
  completedAt: z.string().nullable(),
});

async function resolveAgencyId(request: { principal: unknown }): Promise<string> {
  const principal = request.principal as {
    type: string;
    id: string;
    platform: { id: string };
  };
  if (principal.type !== PrincipalType.USER) throw new Error('Must be signed in.');
  const svc = synkraAgencyService(
    (request as unknown as { log: import('fastify').FastifyBaseLogger }).log,
  );
  const agency = await svc.getOrCreateDraftForUser(principal.id, principal.platform.id);
  return agency.id;
}

export const synkraAgencyOnboardingController: FastifyPluginAsyncZod = async (
  app,
) => {
  app.get(
    '/onboarding',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: { response: { 200: stateSchema } },
    },
    async (request) => {
      const agencyId = await resolveAgencyId(request);
      return synkraAgencyOnboardingService(request.log).getState(agencyId);
    },
  );

  app.post(
    '/onboarding/stage/:key',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ key: stageKeySchema }),
        body: z.object({
          data: z.record(z.string(), z.unknown()).default({}),
        }),
        response: { 200: stateSchema },
      },
    },
    async (request) => {
      const agencyId = await resolveAgencyId(request);
      const key = request.params.key as AgencyOnboardingStageKey;
      return synkraAgencyOnboardingService(request.log).advanceStage(
        agencyId,
        key,
        request.body.data,
      );
    },
  );

  app.post(
    '/onboarding/stage/:key/skip',
    {
      config: { security: securityAccess.unscoped(ALL_PRINCIPAL_TYPES) },
      schema: {
        params: z.object({ key: stageKeySchema }),
        response: { 200: stateSchema },
      },
    },
    async (request) => {
      const agencyId = await resolveAgencyId(request);
      const key = request.params.key as AgencyOnboardingStageKey;
      return synkraAgencyOnboardingService(request.log).skipStage(agencyId, key);
    },
  );
};
