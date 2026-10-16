import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { netcashAuth } from '../..';
import { netcashRequest } from '../auth';

export const getDebitOrder = createAction({
  name: 'get_debit_order',
  displayName: 'Get Debit Order',
  description: 'Fetch a single debit order by its Netcash ID.',
  auth: netcashAuth,
  props: {
    debitOrderId: Property.ShortText({
      displayName: 'Debit Order ID',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    return netcashRequest({
      apiKey: auth.props.apiKey,
      serviceKey: auth.props.serviceKey,
      accountNumber: auth.props.accountNumber,
      method: HttpMethod.GET,
      path: `/debitorders/${propsValue.debitOrderId}`,
    });
  },
});
