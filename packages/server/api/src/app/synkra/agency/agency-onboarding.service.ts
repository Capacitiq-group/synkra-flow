import { FastifyBaseLogger } from 'fastify';
import { isNil } from '@activepieces/core-utils';
import { repoFactory } from '../../core/db/repo-factory';
import { SynkraAgency, SynkraAgencyEntity } from './agency.entity';

const agencyRepo = repoFactory<SynkraAgency>(SynkraAgencyEntity);

export type AgencyOnboardingStageKey =
  | 'identity'
  | 'branding'
  | 'tier'
  | 'first_client'
  | 'support'
  | 'activate'
  | 'go_live';

export type AgencyOnboardingStatus =
  | 'pending'
  | 'in_progress'
  | 'complete'
  | 'skipped';

export interface AgencyOnboardingStage {
  key: AgencyOnboardingStageKey;
  status: AgencyOnboardingStatus;
  required: boolean;
  data: Record<string, unknown>;
  completedAt: string | null;
}

export interface AgencyOnboardingState {
  currentStage: AgencyOnboardingStageKey;
  stages: AgencyOnboardingStage[];
  completedAt: string | null;
}

/**
 * Stage order. `support` is the only skippable stage; everything else
 * is required to reach go_live.
 */
export const AGENCY_ONBOARDING_ORDER: ReadonlyArray<{
  key: AgencyOnboardingStageKey;
  required: boolean;
}> = [
  { key: 'identity', required: true },
  { key: 'branding', required: true },
  { key: 'tier', required: true },
  { key: 'first_client', required: true },
  { key: 'support', required: false },
  { key: 'activate', required: true },
  { key: 'go_live', required: true },
];

function fresh(): AgencyOnboardingState {
  const stages: AgencyOnboardingStage[] = AGENCY_ONBOARDING_ORDER.map(
    (o, i) => ({
      key: o.key,
      status: i === 0 ? 'in_progress' : 'pending',
      required: o.required,
      data: {},
      completedAt: null,
    }),
  );
  return { currentStage: 'identity', stages, completedAt: null };
}

function advance(
  state: AgencyOnboardingState,
  key: AgencyOnboardingStageKey,
  data: Record<string, unknown>,
): AgencyOnboardingState {
  const idx = state.stages.findIndex((s) => s.key === key);
  if (idx === -1) throw new Error(`unknown onboarding stage: ${key}`);
  const stage = state.stages[idx];
  if (stage.status !== 'in_progress' && stage.status !== 'complete') {
    throw new Error(`stage ${key} is ${stage.status}, cannot advance`);
  }
  const now = new Date().toISOString();
  const stages = state.stages.map((s, i) =>
    i === idx
      ? { ...s, status: 'complete' as const, data, completedAt: now }
      : s,
  );
  const nextIdx = stages.findIndex(
    (s) => s.status === 'pending' || s.status === 'in_progress',
  );
  if (nextIdx !== -1) stages[nextIdx] = { ...stages[nextIdx], status: 'in_progress' };
  const allDone = stages.every(
    (s) => s.status === 'complete' || s.status === 'skipped',
  );
  return {
    currentStage:
      nextIdx === -1 ? 'go_live' : (stages[nextIdx].key as AgencyOnboardingStageKey),
    stages,
    completedAt: allDone ? now : null,
  };
}

function skip(
  state: AgencyOnboardingState,
  key: AgencyOnboardingStageKey,
): AgencyOnboardingState {
  const idx = state.stages.findIndex((s) => s.key === key);
  if (idx === -1) throw new Error(`unknown onboarding stage: ${key}`);
  if (state.stages[idx].required) {
    throw new Error(`stage ${key} is required and cannot be skipped`);
  }
  const stages = state.stages.map((s, i) =>
    i === idx ? { ...s, status: 'skipped' as const } : s,
  );
  const nextIdx = stages.findIndex(
    (s) => s.status === 'pending' || s.status === 'in_progress',
  );
  if (nextIdx !== -1) stages[nextIdx] = { ...stages[nextIdx], status: 'in_progress' };
  const allDone = stages.every(
    (s) => s.status === 'complete' || s.status === 'skipped',
  );
  return {
    currentStage:
      nextIdx === -1 ? 'go_live' : (stages[nextIdx].key as AgencyOnboardingStageKey),
    stages,
    completedAt: allDone ? new Date().toISOString() : null,
  };
}

export const synkraAgencyOnboardingService = (log: FastifyBaseLogger) => ({
  async getState(agencyId: string): Promise<AgencyOnboardingState> {
    const agency = await agencyRepo().findOneBy({ id: agencyId });
    if (isNil(agency)) throw new Error(`agency not found: ${agencyId}`);
    const stored = (agency.metadata?.agencyOnboarding ?? null) as
      | AgencyOnboardingState
      | null;
    return stored ?? fresh();
  },

  async advanceStage(
    agencyId: string,
    key: AgencyOnboardingStageKey,
    data: Record<string, unknown>,
  ): Promise<AgencyOnboardingState> {
    const agency = await agencyRepo().findOneBy({ id: agencyId });
    if (isNil(agency)) throw new Error(`agency not found: ${agencyId}`);
    const stored = (agency.metadata?.agencyOnboarding ?? null) as
      | AgencyOnboardingState
      | null;
    const state = stored ?? fresh();
    const next = advance(state, key, data);
    const metadata = {
      ...(agency.metadata ?? {}),
      agencyOnboarding: next,
    };
    await agencyRepo().update({ id: agencyId }, { metadata });
    log.info({ agencyId, stage: key }, 'agency-onboarding: advanced');
    return next;
  },

  async skipStage(
    agencyId: string,
    key: AgencyOnboardingStageKey,
  ): Promise<AgencyOnboardingState> {
    const agency = await agencyRepo().findOneBy({ id: agencyId });
    if (isNil(agency)) throw new Error(`agency not found: ${agencyId}`);
    const stored = (agency.metadata?.agencyOnboarding ?? null) as
      | AgencyOnboardingState
      | null;
    const state = stored ?? fresh();
    const next = skip(state, key);
    const metadata = {
      ...(agency.metadata ?? {}),
      agencyOnboarding: next,
    };
    await agencyRepo().update({ id: agencyId }, { metadata });
    log.info({ agencyId, stage: key }, 'agency-onboarding: skipped');
    return next;
  },
});
