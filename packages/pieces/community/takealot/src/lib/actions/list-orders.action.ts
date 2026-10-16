import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { takealotAuth } from '../auth';
import { takealotRequest, TakealotAuth } from '../common/client';

export const listOrdersAction = createAction({
  auth: takealotAuth,
  name: 'list_orders',
  displayName: 'List Orders',
  description: 'List your Takealot seller orders, optionally filtered by status.',
  props: {
    status: Property.StaticDropdown({
      displayName: 'Status',
      required: false,
      options: {
        options: [
          { label: 'Any', value: '' },
          { label: 'New', value: 'new' },
          { label: 'Shipped', value: 'shipped' },
          { label: 'Cancelled', value: 'cancelled' },
          { label: 'Delivered', value: 'delivered' },
        ],
      },
    }),
    limit: Property.Number({
      displayName: 'Limit',
      required: false,
      defaultValue: 50,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as TakealotAuth;
    const query: Record<string, string | number> = {
      limit: propsValue.limit ?? 50,
    };
    if (propsValue.status) {
      query['status'] = String(propsValue.status);
    }
    return takealotRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: '/orders',
      query,
    });
  },
});
