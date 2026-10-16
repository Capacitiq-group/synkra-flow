import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SupportedByokProvider, synkraAiApi } from './api';

const KEYS = {
  all: ['synkra-ai'] as const,
  byok: () => [...KEYS.all, 'byok'] as const,
};

export const synkraAiHooks = {
  useByok() {
    return useQuery({
      queryKey: KEYS.byok(),
      queryFn: () => synkraAiApi.listByok(),
    });
  },

  useAddByok() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (input: {
        provider: SupportedByokProvider;
        displayName: string;
        apiKey: string;
        modelIds?: string[];
        baseUrl?: string;
      }) => synkraAiApi.addByok(input),
      onSuccess: () => {
        toast.success('AI provider added');
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not add AI provider'),
    });
  },

  useDeleteByok() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => synkraAiApi.deleteByok(id),
      onSuccess: () => {
        toast.success('AI provider removed');
        qc.invalidateQueries({ queryKey: KEYS.all });
      },
      onError: (e: Error) =>
        toast.error(e.message || 'Could not remove AI provider'),
    });
  },
};
