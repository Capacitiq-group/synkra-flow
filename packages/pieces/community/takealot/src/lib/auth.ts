import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your Takealot Seller Portal at https://seller.takealot.com
2. Go to **Settings → API Access**
3. Generate an API key
4. Paste the key below, and your Takealot seller ID.

The Seller API uses an HTTP Basic-style API key in the Authorization
header. Requests go to https://seller-api.takealot.com/v1.
`;

export const takealotAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    api_key: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Your Takealot seller API key.',
      required: true,
    }),
    seller_id: Property.ShortText({
      displayName: 'Seller ID',
      description: 'Your Takealot seller ID (numeric).',
      required: true,
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.api_key || !auth.seller_id) {
      return {
        valid: false,
        error: 'API Key and Seller ID are required.',
      };
    }
    return { valid: true };
  },
});
