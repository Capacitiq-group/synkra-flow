import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { peachAuth } from '../auth';
import { peachRequest, PeachAuth } from '../common/client';

export const refundAction = createAction({
  auth: peachAuth,
  name: 'refund_payment',
  displayName: 'Refund Payment',
  description: 'Refund a completed Peach Payments transaction in full or in part.',
  props: {
    merchant_transaction_id: Property.ShortText({
      displayName: 'Merchant Transaction ID',
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
    const a = auth.props as PeachAuth;
    const body: Record<string, unknown> = {
      entityId: a.entity_id,
      paymentId: propsValue.merchant_transaction_id,
      reason: propsValue.reason ?? 'Refunded from Synkra Flow',
    };
    if (propsValue.amount_zar) {
      body['amount'] = Math.round(Number(propsValue.amount_zar) * 100);
    }
    return peachRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/refunds',
      body,
    });
  },
});
