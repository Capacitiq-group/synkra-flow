import { api } from '@/lib/api';

export type SynkraApiKey = {
  id: string;
  displayName: string;
  truncatedValue: string;
  created: string;
};

export type SynkraApiKeyCreated = SynkraApiKey & {
  value: string;
};

export const synkraApiKeysApi = {
  async list(): Promise<SynkraApiKey[]> {
    const res = await api.get<{ data: SynkraApiKey[] }>(
      '/v1/synkra/api-keys',
    );
    return res.data;
  },

  async create(displayName: string): Promise<SynkraApiKeyCreated> {
    return api.post<SynkraApiKeyCreated>('/v1/synkra/api-keys', {
      displayName,
    });
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/v1/synkra/api-keys/${id}`);
  },
};

export type SynkraWebhook = {
  id: string;
  url: string;
  events: string[];
  enabled: boolean;
  created: string;
};

export const AVAILABLE_EVENTS = [
  'flow.run.started',
  'flow.run.finished',
  'flow.run.resumed',
  'flow.run.retried',
  'user.created',
  'user.verified',
  'user.password.reset',
  'project.created',
  'project.member.added',
  'platform.connection.created',
  'platform.connection.deleted',
] as const;

export const synkraWebhooksApi = {
  async list(): Promise<SynkraWebhook[]> {
    const res = await api.get<{ webhooks: SynkraWebhook[] }>(
      '/v1/synkra/webhooks',
    );
    return res.webhooks;
  },

  async create(input: {
    url: string;
    events: string[];
  }): Promise<SynkraWebhook> {
    return api.post<SynkraWebhook>('/v1/synkra/webhooks', {
      ...input,
      enabled: true,
    });
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/v1/synkra/webhooks/${id}`);
  },
};
