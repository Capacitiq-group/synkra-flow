import { createPiece, PieceAuth, Property } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { sendSms } from './lib/actions/send-sms';
import { checkBalance } from './lib/actions/check-balance';

export const bulksmsAuth = PieceAuth.CustomAuth({
  displayName: 'BulkSMS Credentials',
  description:
    'Enter your BulkSMS username and password from bulksms.co.za.',
  required: true,
  props: {
    username: Property.ShortText({
      displayName: 'Username',
      required: true,
    }),
    password: Property.ShortText({
      displayName: 'Password',
      required: true,
    }),
  },
});

export const bulksms = createPiece({
  displayName: 'BulkSMS',
  description:
    'Send SMS to South African and international numbers via BulkSMS.',
  auth: bulksmsAuth,
  minimumSupportedRelease: '0.0.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/bulksms-placeholder.png',
  categories: [PieceCategory.COMMUNICATION],
  authors: ['Synkra'],
  actions: [sendSms, checkBalance],
  triggers: [],
});
