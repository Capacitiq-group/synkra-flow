import {
  createPiece,
  PieceAuth,
  Property,
} from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { sendSms } from './lib/actions/send-sms';
import { checkBalance } from './lib/actions/check-balance';

export const bulksmsAuth = PieceAuth.CustomAuth({
  displayName: 'BulkSMS API Token',
  description:
    'Create an API token in your BulkSMS account at Settings > Developers > API Tokens. ' +
    'Use the token ID as the username and the token secret as the password. ' +
    'Docs: https://www.bulksms.com/developer/json/v1/',
  required: true,
  props: {
    tokenId: Property.ShortText({
      displayName: 'Token ID',
      description: 'The token ID from your BulkSMS API Tokens page.',
      required: true,
    }),
    tokenSecret: Property.ShortText({
      displayName: 'Token Secret',
      description: 'The token secret paired with the token ID.',
      required: true,
    }),
  },
});

export const bulksms = createPiece({
  displayName: 'BulkSMS',
  description:
    'Send SMS to South African and international numbers via BulkSMS. ' +
    'Supports batch sending, scheduled delivery, unicode, and delivery reports.',
  auth: bulksmsAuth,
  minimumSupportedRelease: '0.0.0',
  logoUrl:
    'https://res.cloudinary.com/dewvhnks3/image/upload/v1792144857/images_11_vsveve.png',
  categories: [PieceCategory.COMMUNICATION],
  authors: ['Synkra'],
  actions: [sendSms, checkBalance],
  triggers: [],
});
