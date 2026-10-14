import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { peachAuth } from './lib/auth';
import { createCheckoutAction } from './lib/actions/create-checkout.action';
import { getPaymentAction } from './lib/actions/get-payment.action';
import { refundAction } from './lib/actions/refund.action';
import { paymentCompletedTrigger } from './lib/triggers/payment-completed.trigger';

export const peachPayments = createPiece({
  displayName: 'Peach Payments',
  description:
    'South African card and alternative payment gateway. Create checkout sessions, look up payments, issue refunds, and react to completed payments.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/peach-payments-placeholder.png',
  categories: [PieceCategory.PAYMENT_PROCESSING, PieceCategory.COMMERCE],
  auth: peachAuth,
  authors: ['synkra'],
  actions: [createCheckoutAction, getPaymentAction, refundAction],
  triggers: [paymentCompletedTrigger],
});
