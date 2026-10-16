import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { ozowAuth } from '../auth';
import { ozowRequest, OzowAuth } from '../common/client';

export const refundAction = createAction({
  auth: ozowAuth,
  name: 'refund_payment',
  displayName: 'Refund Payment',
  description:
    'Request a refund for a completed Ozow transaction. Refunds are processed within 24 hours.',
  props: {
    transaction_id: Property.ShortText({
      displayName: 'Ozow Transaction ID',
      description: 'The transaction ID returned by Ozow after the original payment.',
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
    const a = auth.props as OzowAuth;
    const body: Record<string, unknown> = {
      SiteCode: a.site_code,
      TransactionId: propsValue.transaction_id,
      RefundReason: propsValue.reason ?? 'Refunded from Synkra Flow',
    };
    if (propsValue.amount_zar) {
      body['RefundAmount'] = Math.round(Number(propsValue.amount_zar) * 100);
    }
    return ozowRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/RefundTransaction',
      body,
    });
  },
});
