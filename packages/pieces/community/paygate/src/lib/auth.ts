import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your PayGate PayWeb merchant portal.
2. Generate a **PayWeb ID** and **encryption key** under
   **Setup → PayWeb**.
3. Copy both values and paste them below.

PayGate uses a PayWeb ID combined with an MD5 encryption key to sign
payment requests. Requests are sent to https://secure.paygate.co.za.
`;

export const paygateAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    payweb_id: Property.ShortText({
      displayName: 'PayWeb ID',
      description: 'Your PayGate PayWeb ID (numeric).',
      required: true,
    }),
    encryption_key: PieceAuth.SecretText({
      displayName: 'Encryption Key',
      description: 'Your PayGate encryption key used to sign requests.',
      required: true,
    }),
    sandbox: Property.Checkbox({
      displayName: 'Sandbox',
      description: 'Use the PayGate test environment.',
      required: false,
      defaultValue: false,
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.payweb_id || !auth.encryption_key) {
      return {
        valid: false,
        error: 'PayWeb ID and Encryption Key are required.',
      };
    }
    return { valid: true };
  },
});
