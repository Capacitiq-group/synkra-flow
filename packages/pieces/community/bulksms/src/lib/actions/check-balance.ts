import { createAction } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { bulksmsAuth } from '../..';
import { bulksmsRequest } from '../auth';

export const checkBalance = createAction({
  name: 'check_balance',
  displayName: 'Check Balance',
  description: 'Get your remaining BulkSMS credit balance.',
  auth: bulksmsAuth,
  props: {},
  async run({ auth }) {
    return bulksmsRequest({
      username: auth.props.username,
      password: auth.props.password,
      method: HttpMethod.GET,
      path: '/balance',
    });
  },
});
