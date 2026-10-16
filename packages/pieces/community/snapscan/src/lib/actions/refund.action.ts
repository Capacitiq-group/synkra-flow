import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { snapscanAuth } from '../auth';
import { snapscanRequest, SnapScanAuth } from '../common/client';

export const refundAction = createAction({
  auth: snapscanAuth,
  name: 'refund_payment',
  displayName: 'Refund Payment',
  description: 'Refund a completed SnapScan payment, in full or in part.',
  props: {
    payment_id: Property.ShortText({
      displayName: 'Payment ID',
      required: true,
    }),
    amount_zar: Property.Number({
      displayName: 'Refund Amount (ZAR)',
      description: 'Leave blank for full refund.',
      required: false,
    }),
    reason: Property.LongText({
      displayName: 'Reason',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as SnapScanAuth;
    const body: Record<string, unknown> = {
      reason: propsValue.reason ?? 'Refunded from Synkra Flow',
    };
    if (propsValue.amount_zar) {
      body['amount'] = Math.round(Number(propsValue.amount_zar) * 100);
    }
    return snapscanRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: `/payments/${encodeURIComponent(String(propsValue.payment_id))}/refund`,
      body,
    });
  },
});
