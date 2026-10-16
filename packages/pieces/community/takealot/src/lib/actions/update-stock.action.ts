import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { takealotAuth } from '../auth';
import { takealotRequest, TakealotAuth } from '../common/client';

export const updateStockAction = createAction({
  auth: takealotAuth,
  name: 'update_stock',
  displayName: 'Update Stock',
  description: 'Update the available quantity for a product SKU.',
  props: {
    sku: Property.ShortText({
      displayName: 'SKU',
      required: true,
    }),
    quantity: Property.Number({
      displayName: 'Quantity',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as TakealotAuth;
    return takealotRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.PUT,
      path: `/products/${encodeURIComponent(String(propsValue.sku))}/stock`,
      body: { quantity: propsValue.quantity },
    });
  },
});
