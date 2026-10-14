import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { BetaApplicationStatus, synkraBetaApi } from './api';

const KEYS = {
  all: ['synkra-beta'] as const,
  list: (status?: BetaApplicationStatus) =>
    [...KEYS.all, 'list', status ?? 'all'] as const,
  stats: () => [...KEYS.all, 'stats'] as const,
};

export const synkraBetaHooks = {
  useList(status?: BetaApplicationStatus) {
    return useQuery({
      queryKey: KEYS.list(status),
      queryFn: () => synkraBetaApi.list({ status, limit: 200 }),
    });
  },

  useStats() {
    return useQuery({
      queryKey: KEYS.stats(),
      queryFn: () => synkraBetaApi.stats(),
    });
  },

  useAccept() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => synkraBetaApi.accept(id),
      onSuccess: (app) => {
        toast.success(`Accepted ${app.email}`);
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) => toast.error(e.message || 'Could not accept'),
    });
  },

  useReject() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: ({ id, notes }: { id: string; notes?: string }) =>
        synkraBetaApi.reject(id, notes),
      onSuccess: (app) => {
        toast.success(`Rejected ${app.email}`);
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) => toast.error(e.message || 'Could not reject'),
    });
  },

  useWaitlist() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: ({ id, notes }: { id: string; notes?: string }) =>
        synkraBetaApi.waitlist(id, notes),
      onSuccess: (app) => {
        toast.success(`Waitlisted ${app.email}`);
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) => toast.error(e.message || 'Could not waitlist'),
    });
  },
};
