import { api } from '@/lib/api';

export type BetaApplicationStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'waitlisted'
  | 'withdrawn';

export type BetaBusinessSize = '1-5' | '6-20' | '21-50' | '51-200' | '200+';

export type BetaApplication = {
  id: string;
  created: string;
  updated: string;
  fullName: string;
  email: string;
  businessName: string;
  businessWebsite: string | null;
  businessSize: BetaBusinessSize;
  automationIntent: string;
  dailyTools: string[];
  isAgency: boolean;
  referralSource: string | null;
  status: BetaApplicationStatus;
  reviewedAt: string | null;
  reviewedBy: string | null;
  decisionNotes: string | null;
  accessGrantedAt: string | null;
  userId: string | null;
  metadata: Record<string, unknown>;
};

export type BetaStats = {
  pending: number;
  accepted: number;
  rejected: number;
  waitlisted: number;
  total: number;
};

export const synkraBetaApi = {
  async list(params: {
    status?: BetaApplicationStatus;
    limit?: number;
  }): Promise<BetaApplication[]> {
    const qs = new URLSearchParams();
    if (params.status) qs.set('status', params.status);
    if (params.limit) qs.set('limit', String(params.limit));
    const q = qs.toString();
    const res = await api.get<{ applications: BetaApplication[] }>(
      `/v1/synkra/beta/applications${q ? `?${q}` : ''}`,
    );
    return res.applications;
  },

  async accept(id: string): Promise<BetaApplication> {
    const res = await api.post<{ ok: boolean; application: BetaApplication }>(
      `/v1/synkra/beta/applications/${id}/accept`,
      {},
    );
    return res.application;
  },

  async reject(id: string, notes?: string): Promise<BetaApplication> {
    const res = await api.post<{ ok: boolean; application: BetaApplication }>(
      `/v1/synkra/beta/applications/${id}/reject`,
      { notes: notes ?? undefined },
    );
    return res.application;
  },

  async waitlist(id: string, notes?: string): Promise<BetaApplication> {
    const res = await api.post<{ ok: boolean; application: BetaApplication }>(
      `/v1/synkra/beta/applications/${id}/waitlist`,
      { notes: notes ?? undefined },
    );
    return res.application;
  },

  async stats(): Promise<BetaStats> {
    return api.get<BetaStats>('/v1/synkra/beta/stats');
  },
};
