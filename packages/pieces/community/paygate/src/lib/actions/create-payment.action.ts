import { createAction, Property } from '@activepieces/pieces-framework';
import { paygateAuth } from '../auth';
import { paygateHash, PaygateAuth } from '../common/client';

export const createPaymentAction = createAction({
  auth: paygateAuth,
  name: 'create_payment',
  displayName: 'Create Payment',
  description:
    'Build a signed PayGate payment request. Redirect the customer to the URL to complete payment.',
  props: {
    amount_zar: Property.Number({
      displayName: 'Amount (ZAR)',
      description: 'Amount in rands, e.g. 250.00. Converted to cents.',
      required: true,
    }),
    reference: Property.ShortText({
      displayName: 'Reference',
      description: 'Your unique order or invoice reference.',
      required: true,
    }),
    customer_email: Property.ShortText({
      displayName: 'Customer Email',
      required: false,
    }),
    return_url: Property.ShortText({
      displayName: 'Return URL',
      description: 'Where PayGate redirects the customer after the payment attempt.',
      required: true,
    }),
    notify_url: Property.ShortText({
      displayName: 'Notify URL (Webhook)',
      description: 'PayGate POSTs the payment result to this URL.',
      required: false,
    }),
    locale: Property.StaticDropdown({
      displayName: 'Locale',
      required: false,
      defaultValue: 'en',
      options: {
        options: [
          { label: 'English', value: 'en' },
          { label: 'Afrikaans', value: 'af' },
        ],
      },
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as PaygateAuth;
    const amountCents = Math.round(Number(propsValue.amount_zar) * 100);
    const transDate = new Date()
      .toISOString()
      .replace(/[-:T]/g, '')
      .slice(0, 14);

    const fields: Record<string, string | number> = {
      PAYGATE_ID: a.payweb_id,
      REFERENCE: propsValue.reference,
      AMOUNT: amountCents,
      CURRENCY: 'ZAR',
      RETURN_URL: propsValue.return_url,
      TRANSACTION_DATE: transDate,
      LOCALE: propsValue.locale ?? 'en',
      COUNTRY: 'ZA',
      EMAIL: propsValue.customer_email ?? '',
    };

    const hash = paygateHash(fields, a.encryption_key);
    const host = a.sandbox
      ? 'https://staging.paygate.co.za/payweb3/process.trans'
      : 'https://secure.paygate.co.za/payweb3/process.trans';

    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(fields)) {
      params.append(k, String(v));
    }
    params.append('CHECKSUM', hash);
    if (propsValue.notify_url) {
      params.append('NOTIFY_URL', propsValue.notify_url);
    }

    return {
      payment_url: `${host}?${params.toString()}`,
      reference: propsValue.reference,
      amount_cents: amountCents,
      checksum: hash,
    };
  },
});
