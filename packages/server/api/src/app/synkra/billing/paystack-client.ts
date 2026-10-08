import { system } from '../../helper/system/system';
import { AppSystemProp } from '../../helper/system/system-props';

const BASE = 'https://api.paystack.co';

function secret(): string {
  const s = system.get(AppSystemProp.SYNKRA_PAYSTACK_SECRET_KEY);
  if (!s) throw new Error('SYNKRA_PAYSTACK_SECRET_KEY is not set');
  return s;
}

async function request(path: string, init: RequestInit = {}): Promise<unknown> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${secret()}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  });
  const body = (await res.json().catch(() => ({}))) as { status?: boolean; message?: string; data?: unknown };
  if (!res.ok || body.status === false) {
    throw new Error(body.message ?? `Paystack request failed (${res.status})`);
  }
  return body.data;
}

export const paystackClient = {
  async initializeTransaction(params: {
    email: string;
    amountKobo: number;
    plan?: string;
    callbackUrl?: string;
    metadata?: Record<string, unknown>;
  }): Promise<{ authorization_url: string; access_code: string; reference: string }> {
    const data = await request('/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({
        email: params.email,
        amount: params.amountKobo,
        plan: params.plan,
        callback_url: params.callbackUrl,
        metadata: params.metadata ?? {},
      }),
    });
    return data as { authorization_url: string; access_code: string; reference: string };
  },

  async verifyTransaction(reference: string): Promise<Record<string, unknown>> {
    const data = await request(`/transaction/verify/${encodeURIComponent(reference)}`);
    return data as Record<string, unknown>;
  },

  async disableSubscription(params: { code: string; token: string }): Promise<void> {
    await request('/subscription/disable', {
      method: 'POST',
      body: JSON.stringify({ code: params.code, token: params.token }),
    });
  },
};
