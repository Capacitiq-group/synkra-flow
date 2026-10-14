import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { peachAuth } from '../auth';
import { peachRequest, PeachAuth } from '../common/client';

export const getPaymentAction = createAction({
  auth: peachAuth,
  name: 'get_payment',
  displayName: 'Get Payment',
  description: 'Fetch a payment by its merchant transaction ID.',
  props: {
    merchant_transaction_id: Property.ShortText({
      displayName: 'Merchant Transaction ID',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as PeachAuth;
    return peachRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/payments/${encodeURIComponent(String(propsValue.merchant_transaction_id))}`,
      query: { entityId: a.entity_id },
    });
  },
});
