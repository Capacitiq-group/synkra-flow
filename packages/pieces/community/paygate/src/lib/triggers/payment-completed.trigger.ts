import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { paygateAuth } from '../auth';

const TRIGGER_KEY = 'paygate-payment-completed';

export const paymentCompletedTrigger = createTrigger({
  auth: paygateAuth,
  name: 'payment_completed',
  displayName: 'Payment Completed',
  description: 'Triggers when PayGate POSTs a payment notification indicating success.',
  type: TriggerStrategy.WEBHOOK,
  props: {},
  sampleData: {
    PAYGATE_ID: '10011072130',
    REFERENCE: 'INV-1042',
    TRANSACTION_STATUS: '1',
    RESULT_CODE: '990017',
    AUTH_CODE: '123456',
    AMOUNT: '25000',
    CURRENCY: 'ZAR',
    EMAIL: 'jane@example.com',
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
      | { TRANSACTION_STATUS?: string }
      | undefined;
    if (!body) return [];
    // TRANSACTION_STATUS = 1 means completed successfully
    if (String(body.TRANSACTION_STATUS) !== '1') return [];
    return [body];
  },
  async test() {
    return [
      {
        PAYGATE_ID: '10011072130',
        REFERENCE: 'TEST-001',
        TRANSACTION_STATUS: '1',
        AMOUNT: '10000',
        CURRENCY: 'ZAR',
      },
    ];
  },
});
