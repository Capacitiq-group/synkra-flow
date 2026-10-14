import { ActivepiecesError, apId, ErrorCode, isNil } from '@activepieces/core-utils';
import { FastifyBaseLogger } from 'fastify';
import { repoFactory } from '../../core/db/repo-factory';
import {
  BetaApplicationStatus,
  BetaBusinessSize,
  SynkraBetaApplication,
  SynkraBetaApplicationEntity,
} from './beta.entity';
import { betaEmailsService } from './beta-emails.service';

const repo = repoFactory<SynkraBetaApplication>(SynkraBetaApplicationEntity);

export const BETA_CAP = 20;

export type ApplyInput = {
  fullName: string;
  email: string;
  businessName: string;
  businessWebsite?: string;
  businessSize: BetaBusinessSize;
  automationIntent: string;
  dailyTools: string[];
  isAgency: boolean;
  referralSource?: string;
};

export type PublicStatus = {
  email: string;
  status: BetaApplicationStatus;
  submittedAt: string;
  reviewedAt: string | null;
  position: number | null; // pending queue position
};

export const synkraBetaService = (log: FastifyBaseLogger) => {
  const emails = betaEmailsService(log);

  return {
    /**
     * Public: submit a beta application.
     * If the email already exists, return the existing application (idempotent).
     */
    async apply(input: ApplyInput): Promise<{
      id: string;
      alreadyExists: boolean;
    }> {
      const email = input.email.toLowerCase().trim();

      const existing = await repo().findOneBy({ email });
      if (!isNil(existing)) {
        log.info({ email, id: existing.id }, 'beta: duplicate application');
        return { id: existing.id, alreadyExists: true };
      }

      // Cap check: reject new applications once accepted count hits BETA_CAP.
      const acceptedCount = await repo().count({ where: { status: 'accepted' } });
      if (acceptedCount >= BETA_CAP) {
        throw new ActivepiecesError({
          code: ErrorCode.VALIDATION,
          params: {
            message:
              'Beta is full. We have already accepted the maximum number of businesses for this round. Email hello@synkra.co.za to be added to the next round.',
          },
        });
      }

      const saved = await repo().save({
        id: apId(),
        fullName: input.fullName.trim(),
        email,
        businessName: input.businessName.trim(),
        businessWebsite: input.businessWebsite?.trim() ?? null,
        businessSize: input.businessSize,
        automationIntent: input.automationIntent.trim(),
        dailyTools: input.dailyTools ?? [],
        isAgency: input.isAgency,
        referralSource: input.referralSource?.trim() ?? null,
        status: 'pending',
        reviewedAt: null,
        reviewedBy: null,
        decisionNotes: null,
        accessGrantedAt: null,
        userId: null,
        metadata: {},
      });

      log.info(
        { id: saved.id, email: saved.email, business: saved.businessName },
        'beta: application received',
      );

      emails.sendApplicationReceived(saved.email, saved.fullName, saved.businessName);
      return { id: saved.id, alreadyExists: false };
    },

    /**
     * Public: check status by email.
     * Only returns safe fields — nothing about other applicants.
     */
    async getStatus(emailInput: string): Promise<PublicStatus | null> {
      const email = emailInput.toLowerCase().trim();
      const app = await repo().findOneBy({ email });
      if (isNil(app)) return null;

      let position: number | null = null;
      if (app.status === 'pending') {
        const ahead = await repo()
          .createQueryBuilder('b')
          .where('b.status = :s', { s: 'pending' })
          .andWhere('b.created < :c', { c: app.created })
          .getCount();
        position = ahead + 1;
      }

      return {
        email: app.email,
        status: app.status,
        submittedAt: new Date(app.created).toISOString(),
        reviewedAt: app.reviewedAt ? new Date(app.reviewedAt).toISOString() : null,
        position,
      };
    },

    /**
     * Owner: list all applications with optional status filter.
     */
    async list(params: {
      status?: BetaApplicationStatus;
      limit?: number;
    }): Promise<SynkraBetaApplication[]> {
      const qb = repo()
        .createQueryBuilder('b')
        .orderBy('b.created', 'DESC')
        .limit(params.limit ?? 200);
      if (params.status) {
        qb.andWhere('b.status = :status', { status: params.status });
      }
      return qb.getMany();
    },

    async getById(id: string): Promise<SynkraBetaApplication | null> {
      return repo().findOneBy({ id });
    },

    /**
     * Owner: accept an application.
     * Sends accepted email. Does not create the user — the applicant signs up
     * themselves with the same email and we gate the signup against this table.
     */
    async accept(id: string, reviewedBy: string): Promise<SynkraBetaApplication> {
      const app = await repo().findOneBy({ id });
      if (isNil(app)) {
        throw new ActivepiecesError({
          code: ErrorCode.ENTITY_NOT_FOUND,
          params: { message: 'Application not found' },
        });
      }

      const acceptedCount = await repo().count({ where: { status: 'accepted' } });
      if (acceptedCount >= BETA_CAP && app.status !== 'accepted') {
        throw new ActivepiecesError({
          code: ErrorCode.VALIDATION,
          params: {
            message: `Beta is full (${BETA_CAP} accepted). Reject or waitlist this application.`,
          },
        });
      }

      await repo().update(
        { id },
        {
          status: 'accepted',
          reviewedAt: new Date(),
          reviewedBy,
        },
      );
      const updated = await repo().findOneByOrFail({ id });

      log.info({ id, email: updated.email }, 'beta: application accepted');
      emails.sendApplicationAccepted(
        updated.email,
        updated.fullName,
        updated.businessName,
      );
      return updated;
    },

    /**
     * Owner: reject an application.
     */
    async reject(
      id: string,
      reviewedBy: string,
      notes?: string,
    ): Promise<SynkraBetaApplication> {
      const app = await repo().findOneBy({ id });
      if (isNil(app)) {
        throw new ActivepiecesError({
          code: ErrorCode.ENTITY_NOT_FOUND,
          params: { message: 'Application not found' },
        });
      }

      await repo().update(
        { id },
        {
          status: 'rejected',
          reviewedAt: new Date(),
          reviewedBy,
          decisionNotes: notes ?? null,
        },
      );
      const updated = await repo().findOneByOrFail({ id });

      log.info({ id, email: updated.email }, 'beta: application rejected');
      emails.sendApplicationRejected(
        updated.email,
        updated.fullName,
        updated.businessName,
      );
      return updated;
    },

    /**
     * Owner: move to waitlist.
     */
    async waitlist(
      id: string,
      reviewedBy: string,
      notes?: string,
    ): Promise<SynkraBetaApplication> {
      const app = await repo().findOneBy({ id });
      if (isNil(app)) {
        throw new ActivepiecesError({
          code: ErrorCode.ENTITY_NOT_FOUND,
          params: { message: 'Application not found' },
        });
      }
      await repo().update(
        { id },
        {
          status: 'waitlisted',
          reviewedAt: new Date(),
          reviewedBy,
          decisionNotes: notes ?? null,
        },
      );
      log.info({ id, email: app.email }, 'beta: application waitlisted');
      return repo().findOneByOrFail({ id });
    },

    /**
     * Called after an accepted applicant signs up.
     * Links the Flow user ID to the beta application.
     */
    async linkAcceptedUser(emailInput: string, userId: string): Promise<void> {
      const email = emailInput.toLowerCase().trim();
      const app = await repo().findOneBy({ email });
      if (isNil(app)) return;
      await repo().update(
        { id: app.id },
        { userId, accessGrantedAt: new Date() },
      );
      log.info({ email, userId }, 'beta: user linked to accepted application');
    },

    /**
     * Public helper used by signup flow.
     * Returns true if this email is accepted and allowed to sign up.
     */
    async isEmailApproved(emailInput: string): Promise<boolean> {
      const email = emailInput.toLowerCase().trim();
      const app = await repo().findOneBy({ email });
      return !isNil(app) && app.status === 'accepted';
    },

    /**
     * Owner: aggregate stats for the review dashboard.
     */
    async stats(): Promise<{
      total: number;
      pending: number;
      accepted: number;
      rejected: number;
      waitlisted: number;
      cap: number;
      spotsRemaining: number;
    }> {
      const [pending, accepted, rejected, waitlisted] = await Promise.all([
        repo().count({ where: { status: 'pending' } }),
        repo().count({ where: { status: 'accepted' } }),
        repo().count({ where: { status: 'rejected' } }),
        repo().count({ where: { status: 'waitlisted' } }),
      ]);
      return {
        total: pending + accepted + rejected + waitlisted,
        pending,
        accepted,
        rejected,
        waitlisted,
        cap: BETA_CAP,
        spotsRemaining: Math.max(0, BETA_CAP - accepted),
      };
    },
  };
};
