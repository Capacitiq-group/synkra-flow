import { PieceAuth, Property } from '@activepieces/pieces-framework';

const description = `
**Authentication:**

1. Log in to your Ozow merchant dashboard at https://merchant.ozow.com
2. Go to **Settings → API Credentials**
3. Copy your **Site Code** and **Private Key**
4. Paste both below.

Ozow's API uses a SHA512 hash of the payment fields plus your private key.
Both are required. If you are testing, tick Sandbox.
`;

export const ozowAuth = PieceAuth.CustomAuth({
  description,
  required: true,
  props: {
    site_code: Property.ShortText({
      displayName: 'Site Code',
      description: 'Your Ozow site code (alphanumeric).',
      required: true,
    }),
    private_key: PieceAuth.SecretText({
      displayName: 'Private Key',
      description: 'Your Ozow private key. Used to sign every request.',
      required: true,
    }),
    sandbox: Property.Checkbox({
      displayName: 'Sandbox',
      description: 'Use https://stagingapi.ozow.com for testing.',
      required: false,
      defaultValue: false,
    }),
  },
  validate: async ({ auth }) => {
    if (!auth.site_code || !auth.private_key) {
      return {
        valid: false,
        error: 'Site Code and Private Key are required.',
      };
    }
    return { valid: true };
  },
});
