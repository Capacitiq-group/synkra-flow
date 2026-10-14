import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { takealotAuth } from '../auth';
import { takealotRequest, TakealotAuth } from '../common/client';

export const getOrderAction = createAction({
  auth: takealotAuth,
  name: 'get_order',
  displayName: 'Get Order',
  description: 'Fetch a single Takealot order by order ID.',
  props: {
    order_id: Property.ShortText({
      displayName: 'Order ID',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as TakealotAuth;
    return takealotRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/orders/${encodeURIComponent(String(propsValue.order_id))}`,
    });
  },
});
