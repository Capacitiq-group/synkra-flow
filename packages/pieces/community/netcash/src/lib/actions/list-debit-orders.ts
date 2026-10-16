import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { netcashAuth } from '../..';
import { netcashRequest } from '../auth';

export const listDebitOrders = createAction({
  name: 'list_debit_orders',
  displayName: 'List Debit Orders',
  description: 'List debit orders, optionally filtered by customer reference.',
  auth: netcashAuth,
  props: {
    accountReference: Property.ShortText({
      displayName: 'Customer Reference (optional)',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const query = propsValue.accountReference
      ? `?AccountReference=${encodeURIComponent(propsValue.accountReference)}`
      : '';
    return netcashRequest({
      apiKey: auth.props.apiKey,
      serviceKey: auth.props.serviceKey,
      accountNumber: auth.props.accountNumber,
      method: HttpMethod.GET,
      path: `/debitorders/list${query}`,
    });
  },
});
