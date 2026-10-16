import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { dropAuth } from '../auth';

const TRIGGER_KEY = 'drop-delivery-status-changed';

export const deliveryStatusChangedTrigger = createTrigger({
  auth: dropAuth,
  name: 'delivery_status_changed',
  displayName: 'Delivery Status Changed',
  description: 'Triggers when a Drop delivery status changes.',
  type: TriggerStrategy.WEBHOOK,
  props: {},
  sampleData: {
    deliveryId: 'drop_abc123',
    reference: 'INV-1042',
    status: 'delivered',
    courierName: 'Sipho M',
    updatedAt: '2026-10-14T15:00:00.000Z',
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
    return [context.payload.body];
  },
  async test() {
    return [
      {
        deliveryId: 'drop_test_123',
        reference: 'TEST-001',
        status: 'delivered',
      },
    ];
  },
});
