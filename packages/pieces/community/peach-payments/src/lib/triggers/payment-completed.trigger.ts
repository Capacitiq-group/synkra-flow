import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { peachAuth } from '../auth';

const TRIGGER_KEY = 'peach-payment-completed';

export const paymentCompletedTrigger = createTrigger({
  auth: peachAuth,
  name: 'payment_completed',
  displayName: 'Payment Completed',
  description: 'Triggers when Peach Payments sends a webhook confirming a completed payment.',
  type: TriggerStrategy.WEBHOOK,
  props: {},
  sampleData: {
    id: 'peach_payment_abc123',
    paymentType: 'DB',
    paymentBrand: 'VISA',
    amount: '250.00',
    currency: 'ZAR',
    merchantTransactionId: 'INV-1042',
    result: { code: '000.000.000', description: 'Transaction succeeded' },
  },
  async onEnable(context) {
    await context.store.put(TRIGGER_KEY, {
      url: context.webhookUrl,
      enabledAt: new Date().toISOString(),
    });
  },
  async onDisable(context) {
    await context.store.delete(TRIGGER_KEY);
  },
  async run(context) {
    const body = context.payload.body as
      | { result?: { code?: string } }
      | undefined;
    if (!body) return [];
    const code = body.result?.code ?? '';
    if (!code.startsWith('000')) return [];
    return [body];
  },
  async test() {
    return [
      {
        id: 'peach_test_123',
        amount: '100.00',
        currency: 'ZAR',
        merchantTransactionId: 'TEST-001',
        result: { code: '000.000.000', description: 'Transaction succeeded' },
      },
    ];
  },
});
