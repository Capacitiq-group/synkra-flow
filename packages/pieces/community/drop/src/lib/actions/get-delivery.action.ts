import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dropAuth } from '../auth';
import { dropRequest, DropAuth } from '../common/client';

export const getDeliveryAction = createAction({
  auth: dropAuth,
  name: 'get_delivery',
  displayName: 'Get Delivery',
  description: 'Fetch a Drop delivery by its ID or reference.',
  props: {
    search_by: Property.StaticDropdown({
      displayName: 'Search By',
      required: true,
      defaultValue: 'reference',
      options: {
        options: [
          { label: 'Your Reference', value: 'reference' },
          { label: 'Drop Delivery ID', value: 'id' },
        ],
      },
    }),
    value: Property.ShortText({
      displayName: 'Value',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as DropAuth;
    return dropRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/deliveries/${encodeURIComponent(String(propsValue.value))}`,
      query: { searchBy: String(propsValue.search_by) },
    });
  },
});
