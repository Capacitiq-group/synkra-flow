import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dropAuth } from '../auth';
import { dropRequest, DropAuth } from '../common/client';

export const cancelDeliveryAction = createAction({
  auth: dropAuth,
  name: 'cancel_delivery',
  displayName: 'Cancel Delivery',
  description: 'Cancel a Drop delivery that has not yet been collected.',
  props: {
    delivery_id: Property.ShortText({
      displayName: 'Delivery ID',
      required: true,
    }),
    reason: Property.LongText({
      displayName: 'Reason',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as DropAuth;
    return dropRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: `/deliveries/${encodeURIComponent(String(propsValue.delivery_id))}/cancel`,
      body: { reason: propsValue.reason },
    });
  },
});
