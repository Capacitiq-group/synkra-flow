import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export type AgencyOnboardingStageKey =
  | 'identity'
  | 'branding'
  | 'tier'
  | 'first_client'
  | 'support'
  | 'activate'
  | 'go_live';

export type AgencyOnboardingStage = {
  key: AgencyOnboardingStageKey;
  status: 'pending' | 'in_progress' | 'complete' | 'skipped';
  required: boolean;
  data: Record<string, unknown>;
  completedAt: string | null;
};

export type AgencyOnboardingState = {
  currentStage: AgencyOnboardingStageKey;
  stages: AgencyOnboardingStage[];
  completedAt: string | null;
};

const onboardingKey = ['synkra-agency-onboarding'];

export const synkraAgencyOnboardingHooks = {
  useOnboarding: () =>
    useQuery<AgencyOnboardingState>({
      queryKey: onboardingKey,
      queryFn: () =>
        api.get<AgencyOnboardingState>('/v1/synkra/agency/onboarding'),
      staleTime: 5_000,
    }),

  useAdvanceStage: () => {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (params: {
        key: AgencyOnboardingStageKey;
        data?: Record<string, unknown>;
      }) =>
        api.post<AgencyOnboardingState>(
          `/v1/synkra/agency/onboarding/stage/${params.key}`,
          { data: params.data ?? {} },
        ),
      onSuccess: (next) => {
        qc.setQueryData(onboardingKey, next);
        qc.invalidateQueries({ queryKey: ['synkra-agency'] });
      },
    });
  },

  useSkipStage: () => {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (key: AgencyOnboardingStageKey) =>
        api.post<AgencyOnboardingState>(
          `/v1/synkra/agency/onboarding/stage/${key}/skip`,
          {},
        ),
      onSuccess: (next) => {
        qc.setQueryData(onboardingKey, next);
      },
    });
  },
};
