import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { takealotAuth } from '../auth';
import { takealotRequest, TakealotAuth } from '../common/client';

export const updateShipmentAction = createAction({
  auth: takealotAuth,
  name: 'update_shipment',
  displayName: 'Update Shipment',
  description: 'Mark an order as shipped and provide the courier tracking number.',
  props: {
    order_id: Property.ShortText({
      displayName: 'Order ID',
      required: true,
    }),
    tracking_number: Property.ShortText({
      displayName: 'Tracking Number',
      required: true,
    }),
    courier: Property.ShortText({
      displayName: 'Courier',
      description: 'Courier name, e.g. The Courier Guy.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as TakealotAuth;
    return takealotRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: `/orders/${encodeURIComponent(String(propsValue.order_id))}/ship`,
      body: {
        tracking_number: propsValue.tracking_number,
        courier: propsValue.courier,
      },
    });
  },
});
