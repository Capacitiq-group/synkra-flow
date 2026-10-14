import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your SnapScan merchant dashboard at https://merchant.snapscan.co.za
2. Go to **Profile → API keys**
3. Copy your **Merchant ID** and generate an **API Key**
4. Paste both below.

SnapScan uses HTTP Basic auth with the merchant ID as username and the API key
as password. Every request is sent to pos.snapscan.io.
`;

export const snapscanAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    merchant_id: Property.ShortText({
      displayName: 'Merchant ID',
      description: 'Your SnapScan merchant ID.',
      required: true,
    }),
    api_key: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Your SnapScan API key.',
      required: true,
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.merchant_id || !auth.api_key) {
      return {
        valid: false,
        error: 'Merchant ID and API Key are required.',
      };
    }
    return { valid: true };
  },
});
