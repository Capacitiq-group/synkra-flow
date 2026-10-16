import { createAction } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { bulksmsAuth } from '../..';
import { bulksmsRequest } from '../auth';

export const checkBalance = createAction({
  name: 'check_balance',
  displayName: 'Check Account',
  description:
    'Get your BulkSMS credit balance, remaining quota, and account details.',
  auth: bulksmsAuth,
  props: {},
  async run({ auth }) {
    return bulksmsRequest({
      tokenId: auth.props.tokenId,
      tokenSecret: auth.props.tokenSecret,
      method: HttpMethod.GET,
      path: '/profile',
    });
  },
});
