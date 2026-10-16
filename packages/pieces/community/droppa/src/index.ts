import {
  createPiece,
  PieceAuth,
  Property,
} from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { getSamedayQuote } from './lib/actions/get-sameday-quote';
import { createBooking } from './lib/actions/create-booking';
import { getBooking } from './lib/actions/get-booking';
import { cancelBooking } from './lib/actions/cancel-booking';

export const droppaAuth = PieceAuth.CustomAuth({
  displayName: 'Droppa API Credentials',
  description:
    'Enter the API Key and Service ID provided by Droppa after your business account has been activated. ' +
    'Contact Droppa for developer access: https://www.droppa.co.za',
  required: true,
  props: {
    apiKey: Property.ShortText({
      displayName: 'API Key',
      description: 'The API key issued to your Droppa business account.',
      required: true,
    }),
    serviceId: Property.ShortText({
      displayName: 'Service ID',
      description: 'Your Droppa serviceId, sent with every request.',
      required: true,
    }),
  },
});

export const droppa = createPiece({
  displayName: 'Droppa',
  description:
    'On-demand delivery across South Africa. Get same-day quotes, create bookings, ' +
    'track deliveries, and cancel bookings via the Droppa business API.',
  auth: droppaAuth,
  minimumSupportedRelease: '0.0.0',
  logoUrl:
    'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/droppa-placeholder.png',
  categories: [PieceCategory.COMMERCE],
  authors: ['Synkra'],
  actions: [getSamedayQuote, createBooking, getBooking, cancelBooking],
  triggers: [],
});
