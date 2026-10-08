import { apId, isNil } from '@activepieces/core-utils';
import { FastifyBaseLogger } from 'fastify';
import { repoFactory } from '../../core/db/repo-factory';
import { SynkraSubscription, SynkraSubscriptionEntity } from './subscription.entity';

const repo = repoFactory<SynkraSubscription>(SynkraSubscriptionEntity);

export const synkraSubscriptionService = (_log: FastifyBaseLogger) => ({
  async getForUser(userId: string): Promise<SynkraSubscription | null> {
    return repo().findOneBy({ userId });
  },

  async getOrCreateForUser(userId: string): Promise<SynkraSubscription> {
    const existing = await repo().findOneBy({ userId });
    if (!isNil(existing)) return existing;
    return repo().save({
      id: apId(),
      userId,
      tier: 'free',
      status: 'active',
      cancelAtPeriodEnd: false,
      studentVerified: false,
      communityVerified: false,
      metadata: {},
    });
  },

  async updateTier(userId: string, params: {
    tier: string;
    status?: string;
    paystackCustomerCode?: string | null;
    paystackSubscriptionCode?: string | null;
    paystackPlanCode?: string | null;
    currentPeriodStart?: Date | null;
    currentPeriodEnd?: Date | null;
    cancelAtPeriodEnd?: boolean;
  }): Promise<SynkraSubscription> {
    await this.getOrCreateForUser(userId);
    await repo().update({ userId }, params);
    return repo().findOneByOrFail({ userId });
  },

  async setVerification(userId: string, params: {
    studentVerified?: boolean;
    communityVerified?: boolean;
  }): Promise<SynkraSubscription> {
    await this.getOrCreateForUser(userId);
    await repo().update({ userId }, params);
    return repo().findOneByOrFail({ userId });
  },

  async findByPaystackSubscriptionCode(code: string): Promise<SynkraSubscription | null> {
    return repo().findOneBy({ paystackSubscriptionCode: code });
  },

  async cancelByPaystackCode(code: string): Promise<void> {
    await repo().update(
      { paystackSubscriptionCode: code },
      { status: 'cancelled', cancelAtPeriodEnd: true },
    );
  },

  async getTierForUser(userId: string): Promise<string> {
    const sub = await repo().findOneBy({ userId });
    return sub?.tier ?? 'free';
  },
});
