import { createPiece, PieceAuth, Property } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';
import { createDebitOrder } from './lib/actions/create-debit-order';
import { listDebitOrders } from './lib/actions/list-debit-orders';
import { getDebitOrder } from './lib/actions/get-debit-order';

export const netcashAuth = PieceAuth.CustomAuth({
  displayName: 'Netcash API Credentials',
  description:
    'Enter your Netcash API key, service key, and account number from the ' +
    'Netcash merchant portal (Account -> API Settings).',
  required: true,
  props: {
    apiKey: Property.ShortText({
      displayName: 'API Key',
      required: true,
    }),
    serviceKey: Property.ShortText({
      displayName: 'Service Key',
      required: true,
    }),
    accountNumber: Property.ShortText({
      displayName: 'Netcash Account Number',
      required: true,
    }),
  },
});

export const netcash = createPiece({
  displayName: 'Netcash',
  description:
    'South African payment gateway. Create and manage debit orders and ' +
    'recurring payments.',
  auth: netcashAuth,
  minimumSupportedRelease: '0.0.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/netcash-placeholder.png',
  categories: [PieceCategory.PAYMENT_PROCESSING],
  authors: ['Synkra'],
  actions: [createDebitOrder, listDebitOrders, getDebitOrder],
  triggers: [],
});
