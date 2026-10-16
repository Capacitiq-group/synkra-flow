import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your Peach Payments dashboard at https://dashboard.peachpayments.com
2. Go to **Account → API Credentials**
3. Copy your **Entity ID** and **Access Token**
4. Paste both below.

Peach Payments uses an OAuth-style bearer token. Live requests go to
https://api.peachpayments.com/v2. Test mode uses
https://testapi.peachpayments.com/v2.
`;

export const peachAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    entity_id: Property.ShortText({
      displayName: 'Entity ID',
      description: 'Your Peach Payments entity ID.',
      required: true,
    }),
    access_token: PieceAuth.SecretText({
      displayName: 'Access Token',
      description: 'Your Peach Payments bearer token.',
      required: true,
    }),
    sandbox: Property.Checkbox({
      displayName: 'Test Mode',
      description: 'Use the Peach test environment.',
      required: false,
      defaultValue: false,
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.entity_id || !auth.access_token) {
      return {
        valid: false,
        error: 'Entity ID and Access Token are required.',
      };
    }
    return { valid: true };
  },
});
