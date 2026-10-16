import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { snapscanAuth } from '../auth';

const TRIGGER_KEY = 'snapscan-payment-completed';

export const paymentCompletedTrigger = createTrigger({
  auth: snapscanAuth,
  name: 'payment_completed',
  displayName: 'Payment Completed',
  description: 'Triggers when SnapScan sends a callback confirming a completed payment.',
  type: TriggerStrategy.WEBHOOK,
  props: {},
  sampleData: {
    paymentId: 'snap_abc123',
    status: 'completed',
    amount: 25000,
    reference: 'INV-1042',
    completedAt: '2026-10-14T09:00:00.000Z',
    customerEmail: 'jane@example.com',
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
      | { status?: string }
      | undefined;
    if (!body || body.status !== 'completed') return [];
    return [body];
  },
  async test() {
    return [
      {
        paymentId: 'snap_test_123',
        status: 'completed',
        amount: 10000,
        reference: 'TEST-001',
      },
    ];
  },
});
