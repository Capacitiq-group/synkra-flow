import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { snapscanAuth } from '../auth';
import { snapscanRequest, SnapScanAuth } from '../common/client';

export const getPaymentAction = createAction({
  auth: snapscanAuth,
  name: 'get_payment',
  displayName: 'Get Payment',
  description: 'Fetch a SnapScan payment by its ID.',
  props: {
    payment_id: Property.ShortText({
      displayName: 'Payment ID',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as SnapScanAuth;
    return snapscanRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/payments/${encodeURIComponent(String(propsValue.payment_id))}`,
    });
  },
});
