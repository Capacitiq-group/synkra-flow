import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { ozowAuth } from '../auth';
import { ozowRequest, OzowAuth } from '../common/client';

export const getTransactionAction = createAction({
  auth: ozowAuth,
  name: 'get_transaction',
  displayName: 'Get Transaction',
  description: 'Fetch a transaction by your reference or by Ozow transaction ID.',
  props: {
    search_by: Property.StaticDropdown({
      displayName: 'Search By',
      required: true,
      defaultValue: 'TransactionReference',
      options: {
        options: [
          { label: 'Your Reference', value: 'TransactionReference' },
          { label: 'Ozow Transaction ID', value: 'TransactionId' },
        ],
      },
    }),
    value: Property.ShortText({
      displayName: 'Value',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as OzowAuth;
    return ozowRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.GET,
      path: `/GetTransaction`,
      query: {
        SiteCode: a.site_code,
        [String(propsValue.search_by)]: String(propsValue.value),
      },
    });
  },
});
