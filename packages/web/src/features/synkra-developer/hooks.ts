import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { synkraApiKeysApi } from './api';

const KEYS = {
  all: ['synkra-api-keys'] as const,
  list: () => [...KEYS.all, 'list'] as const,
};

export const synkraApiKeysHooks = {
  useList() {
    return useQuery({
      queryKey: KEYS.list(),
      queryFn: () => synkraApiKeysApi.list(),
    });
  },

  useCreate() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (displayName: string) =>
        synkraApiKeysApi.create(displayName),
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not create API key'),
    });
  },

  useDelete() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => synkraApiKeysApi.delete(id),
      onSuccess: () => {
        toast.success('API key deleted');
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not delete API key'),
    });
  },
};
import { synkraWebhooksApi } from './api';

const WEBHOOK_KEYS = {
  all: ['synkra-webhooks'] as const,
  list: () => [...WEBHOOK_KEYS.all, 'list'] as const,
};

export const synkraWebhooksHooks = {
  useList() {
    return useQuery({
      queryKey: WEBHOOK_KEYS.list(),
      queryFn: () => synkraWebhooksApi.list(),
    });
  },

  useCreate() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (input: { url: string; events: string[] }) =>
        synkraWebhooksApi.create(input),
      onSuccess: () => {
        toast.success('Webhook created');
        qc.invalidateQueries({ queryKey: WEBHOOK_KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not create webhook'),
    });
  },

  useDelete() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => synkraWebhooksApi.delete(id),
      onSuccess: () => {
        toast.success('Webhook deleted');
        qc.invalidateQueries({ queryKey: WEBHOOK_KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not delete webhook'),
    });
  },
};
