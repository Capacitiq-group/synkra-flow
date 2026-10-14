import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { ozowAuth } from './lib/auth';
import { createPaymentAction } from './lib/actions/create-payment.action';
import { getTransactionAction } from './lib/actions/get-transaction.action';
import { refundAction } from './lib/actions/refund.action';

export const ozow = createPiece({
  displayName: 'Ozow',
  description:
    'South African instant EFT payments. Create signed payment URLs, look up transactions, and issue refunds.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963639/images_2_ler8ov.jpg',
  categories: [PieceCategory.PAYMENT_PROCESSING, PieceCategory.COMMERCE],
  auth: ozowAuth,
  authors: ['synkra'],
  actions: [createPaymentAction, getTransactionAction, refundAction],
  triggers: [],
});
