import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { snapscanAuth } from '../auth';
import { snapscanRequest, SnapScanAuth } from '../common/client';

export const createPaymentAction = createAction({
  auth: snapscanAuth,
  name: 'create_payment',
  displayName: 'Create Payment',
  description:
    'Create a SnapScan payment request. Returns a URL and QR code the customer can scan.',
  props: {
    amount_zar: Property.Number({
      displayName: 'Amount (ZAR)',
      description: 'Amount in rands, e.g. 250.00. Will be converted to cents.',
      required: true,
    }),
    reference: Property.ShortText({
      displayName: 'Reference',
      description: 'Your unique order or invoice reference.',
      required: true,
    }),
    description: Property.ShortText({
      displayName: 'Description',
      required: false,
    }),
    customer_email: Property.ShortText({
      displayName: 'Customer Email',
      required: false,
    }),
    callback_url: Property.ShortText({
      displayName: 'Callback URL',
      description: 'SnapScan will send the payment result to this URL.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as SnapScanAuth;
    const amountCents = Math.round(Number(propsValue.amount_zar) * 100);

    const result = await snapscanRequest<{
      id: string;
      status: string;
      qrCodeUrl?: string;
      url?: string;
      amount: number;
      reference: string;
    }>({
      auth: a,
      method: HttpMethod.POST,
      path: '/payments',
      body: {
        amount: amountCents,
        reference: propsValue.reference,
        description: propsValue.description ?? '',
        customerEmail: propsValue.customer_email,
        callbackUrl: propsValue.callback_url,
      },
    });

    return {
      payment_id: result.id,
      status: result.status,
      qr_code_url: result.qrCodeUrl,
      payment_url: result.url,
      amount_cents: result.amount,
      reference: result.reference,
    };
  },
});
