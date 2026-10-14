import { createAction, Property } from '@activepieces/pieces-framework';
import { ozowAuth } from '../auth';
import { ozowHash, OzowAuth } from '../common/client';

export const createPaymentAction = createAction({
  auth: ozowAuth,
  name: 'create_payment',
  displayName: 'Create Payment Request',
  description:
    'Build a signed Ozow payment URL. Redirect the customer to it to complete an instant EFT payment.',
  props: {
    amount_zar: Property.Number({
      displayName: 'Amount (ZAR)',
      description: 'Amount in rands, e.g. 250.00. Will be converted to cents.',
      required: true,
    }),
    transaction_reference: Property.ShortText({
      displayName: 'Transaction Reference',
      description: 'Your unique order or invoice reference.',
      required: true,
    }),
    bank_reference: Property.ShortText({
      displayName: 'Bank Reference',
      description: 'Appears on the customer bank statement. Max 20 chars.',
      required: true,
    }),
    customer_email: Property.ShortText({
      displayName: 'Customer Email',
      required: false,
    }),
    success_url: Property.ShortText({
      displayName: 'Success URL',
      description: 'Where to send the customer after successful payment.',
      required: true,
    }),
    error_url: Property.ShortText({
      displayName: 'Error URL',
      required: true,
    }),
    cancel_url: Property.ShortText({
      displayName: 'Cancel URL',
      required: true,
    }),
    notify_url: Property.ShortText({
      displayName: 'Notify URL (Webhook)',
      description: 'Ozow POSTs the payment result to this URL.',
      required: false,
    }),
    optional_1: Property.ShortText({ displayName: 'Optional 1', required: false }),
    optional_2: Property.ShortText({ displayName: 'Optional 2', required: false }),
    optional_3: Property.ShortText({ displayName: 'Optional 3', required: false }),
    optional_4: Property.ShortText({ displayName: 'Optional 4', required: false }),
    optional_5: Property.ShortText({ displayName: 'Optional 5', required: false }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as OzowAuth;
    const amountCents = Math.round(Number(propsValue.amount_zar) * 100);
    const isTest = !!a.sandbox;

    const fields: Record<string, string | number | boolean> = {
      SiteCode: a.site_code,
      CountryCode: 'ZA',
      CurrencyCode: 'ZAR',
      Amount: amountCents,
      TransactionReference: propsValue.transaction_reference,
      BankReference: propsValue.bank_reference,
      Optional1: propsValue.optional_1 ?? '',
      Optional2: propsValue.optional_2 ?? '',
      Optional3: propsValue.optional_3 ?? '',
      Optional4: propsValue.optional_4 ?? '',
      Optional5: propsValue.optional_5 ?? '',
      Customer: propsValue.customer_email ?? '',
      CancelUrl: propsValue.cancel_url,
      ErrorUrl: propsValue.error_url,
      SuccessUrl: propsValue.success_url,
      NotifyUrl: propsValue.notify_url ?? '',
      IsTest: isTest,
    };

    const hash = ozowHash(fields, a.private_key);
    const host = isTest
      ? 'https://staging.ozow.com'
      : 'https://pay.ozow.com';

    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(fields)) {
      params.append(k, String(v));
    }
    params.append('Hash', hash);

    return {
      payment_url: `${host}/?${params.toString()}`,
      transaction_reference: propsValue.transaction_reference,
      amount_cents: amountCents,
      hash,
    };
  },
});
