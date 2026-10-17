import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { PrincipalType } from '@activepieces/shared';
import { repoFactory } from '../../core/db/repo-factory';
import { SynkraCustomDomainEntity } from './custom-domain.entity';
import { apId } from '@activepieces/core-utils';
import { platformService } from '../../platform/platform.service';
import { synkraSubscriptionService } from '../billing/subscription.service';

const repo = repoFactory<any>(SynkraCustomDomainEntity);

const DOMAIN_LIMITS: Record<string, number> = {
  AGENCY_20: 1,
  AGENCY_100: 3,
  AGENCY_500: 10,
  AGENCY_500_PLUS: 9999,
};

export const synkraCustomDomainController: FastifyPluginAsyncZod = async (app) => {
  app.get('/', { config: { security: securityAccess.unscoped([PrincipalType.USER]) } }, async (req) => {
    const platformId = (req.principal as any).platform?.id;
    const domains = await repo().findBy({ platformId });
    return { domains };
  });

  app.post('/', {
    config: { security: securityAccess.unscoped([PrincipalType.USER]) },
    schema: { body: z.object({ domain: z.string() }) },
  }, async (req, reply) => {
    const platformId = (req.principal as any).platform?.id;
    const { domain } = req.body;

    const platform = await platformService(app.log).getOne(platformId);
    if (!platform?.ownerId) {
      return reply.status(400).send({ error: 'Platform owner not resolved' });
    }
    const sub = await synkraSubscriptionService(app.log).getOrCreateForUser(platform.ownerId);
    const agencyTier = (sub.metadata as any)?.agencyTier || 'AGENCY_20';
    const limit = DOMAIN_LIMITS[agencyTier] || 1;

    const existingCount = await repo().countBy({ platformId });
    if (existingCount >= limit) {
      return reply.status(403).send({ error: `Your tier allows ${limit} domains. Upgrade to add more.` });
    }

    const token = apId();
    const newDomain = await repo().save({
      id: apId(),
      platformId,
      domain,
      verificationToken: token,
      status: 'pending',
    });

    return { domain: newDomain, dnsRecord: { type: 'CNAME', name: domain, value: `${token}.flow.synkra.co.za` } };
  });

  app.post('/:id/verify', { config: { security: securityAccess.unscoped([PrincipalType.USER]) } }, async (req, reply) => {
    const platformId = (req.principal as any).platform?.id;
    const { id } = req.params as any;
    const record = await repo().findOneBy({ id, platformId });
    if (!record) return reply.status(404).send({ error: 'Domain not found' });

    await repo().update({ id }, { status: 'verified', verifiedAt: new Date() });
    return { success: true, domain: { ...record, status: 'verified' } };
  });

  app.delete('/:id', { config: { security: securityAccess.unscoped([PrincipalType.USER]) } }, async (req) => {
    const platformId = (req.principal as any).platform?.id;
    const { id } = req.params as any;
    await repo().delete({ id, platformId });
    return { success: true };
  });
};
