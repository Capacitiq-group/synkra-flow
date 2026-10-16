import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { paygateAuth } from '../auth';
import { paygateRequest, PaygateAuth } from '../common/client';

export const queryTransactionAction = createAction({
  auth: paygateAuth,
  name: 'query_transaction',
  displayName: 'Query Transaction',
  description: 'Fetch the current state of a PayGate transaction by its reference.',
  props: {
    reference: Property.ShortText({
      displayName: 'Reference',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as PaygateAuth;
    return paygateRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/payweb3/query.trans',
      body: {
        PAYGATE_ID: a.payweb_id,
        REFERENCE: propsValue.reference,
      },
    });
  },
});
