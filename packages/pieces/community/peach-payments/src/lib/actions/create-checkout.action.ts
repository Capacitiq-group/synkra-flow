import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { peachAuth } from '../auth';
import { peachRequest, PeachAuth } from '../common/client';

export const createCheckoutAction = createAction({
  auth: peachAuth,
  name: 'create_checkout',
  displayName: 'Create Checkout',
  description:
    'Create a Peach Payments checkout session and receive a payment URL for the customer.',
  props: {
    amount_zar: Property.Number({
      displayName: 'Amount (ZAR)',
      description: 'Amount in rands, e.g. 250.00. Converted to cents.',
      required: true,
    }),
    merchant_transaction_id: Property.ShortText({
      displayName: 'Merchant Transaction ID',
      description: 'Your unique order or invoice reference.',
      required: true,
    }),
    customer_email: Property.ShortText({
      displayName: 'Customer Email',
      required: false,
    }),
    success_url: Property.ShortText({
      displayName: 'Success URL',
      required: true,
    }),
    cancel_url: Property.ShortText({
      displayName: 'Cancel URL',
      required: true,
    }),
    notification_url: Property.ShortText({
      displayName: 'Webhook URL',
      description: 'Peach POSTs the payment result to this URL.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as PeachAuth;
    const amountCents = Math.round(Number(propsValue.amount_zar) * 100);

    return peachRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/checkout',
      body: {
        entityId: a.entity_id,
        amount: amountCents,
        currency: 'ZAR',
        merchantTransactionId: propsValue.merchant_transaction_id,
        customer: {
          email: propsValue.customer_email,
        },
        shopperResultUrl: propsValue.success_url,
        cancelUrl: propsValue.cancel_url,
        notificationUrl: propsValue.notification_url,
      },
    });
  },
});
