import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { paygateAuth } from './lib/auth';
import { createPaymentAction } from './lib/actions/create-payment.action';
import { queryTransactionAction } from './lib/actions/query-transaction.action';
import { paymentCompletedTrigger } from './lib/triggers/payment-completed.trigger';

export const paygate = createPiece({
  displayName: 'PayGate',
  description:
    'South African payment gateway. Build signed payment requests, query transaction state, and react to completed payments.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791967829/images_9_ayey2t.png',
  categories: [PieceCategory.PAYMENT_PROCESSING, PieceCategory.COMMERCE],
  auth: paygateAuth,
  authors: ['synkra'],
  actions: [createPaymentAction, queryTransactionAction],
  triggers: [paymentCompletedTrigger],
});
