import { api } from '@/lib/api';

export type ByokProvider = {
  id: string;
  provider: string;
  displayName: string;
  modelIds: string[];
  enabledForChat: boolean;
  created: string;
};

export const SUPPORTED_BYOK_PROVIDERS = [
  { id: 'openai', label: 'OpenAI' },
  { id: 'anthropic', label: 'Anthropic' },
  { id: 'google', label: 'Google (Gemini)' },
  { id: 'deepseek', label: 'DeepSeek' },
  { id: 'mistral', label: 'Mistral' },
  { id: 'xai', label: 'xAI (Grok)' },
  { id: 'openrouter', label: 'OpenRouter' },
  { id: 'custom', label: 'Custom (OpenAI-compatible)' },
] as const;

export type SupportedByokProvider = (typeof SUPPORTED_BYOK_PROVIDERS)[number]['id'];

export const synkraAiApi = {
  async listByok(): Promise<ByokProvider[]> {
    const res = await api.get<{ providers: ByokProvider[] }>(
      '/v1/synkra/ai/byok',
    );
    return res.providers;
  },

  async addByok(input: {
    provider: SupportedByokProvider;
    displayName: string;
    apiKey: string;
    modelIds?: string[];
    baseUrl?: string;
  }): Promise<{ id: string; provider: string }> {
    return api.post<{ id: string; provider: string }>(
      '/v1/synkra/ai/byok',
      {
        provider: input.provider,
        displayName: input.displayName,
        apiKey: input.apiKey,
        modelIds: input.modelIds ?? [],
        ...(input.baseUrl ? { baseUrl: input.baseUrl } : {}),
      },
    );
  },

  async deleteByok(id: string): Promise<void> {
    await api.delete(`/v1/synkra/ai/byok/${id}`);
  },
};
