import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your Drop merchant dashboard at https://app.drop.co.za
2. Go to **Account → API Access**
3. Copy your **API Key**
4. Paste it below.

Drop is a same-day courier service operating in Johannesburg, Cape Town,
and Durban. The API handles bookings, tracking, and proof of delivery.
`;

export const dropAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    api_key: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Your Drop API key.',
      required: true,
    }),
    environment: Property.StaticDropdown({
      displayName: 'Environment',
      required: false,
      defaultValue: 'live',
      options: {
        options: [
          { label: 'Live', value: 'live' },
          { label: 'Sandbox', value: 'sandbox' },
        ],
      },
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.api_key) {
      return { valid: false, error: 'API Key is required.' };
    }
    return { valid: true };
  },
});
