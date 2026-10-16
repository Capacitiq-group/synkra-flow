import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { takealotAuth } from '../auth';
import { takealotRequest, TakealotAuth } from '../common/client';

export const getProductAction = createAction({
  auth: takealotAuth,
  name: 'get_product',
  displayName: 'Get Product',
  description: 'Fetch a listed product by its Takealot SKU.',
  props: {
    sku: Property.ShortText({
      displayName: 'SKU',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as TakealotAuth;
    return takealotRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/products/${encodeURIComponent(String(propsValue.sku))}`,
    });
  },
});
