import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { snapscanAuth } from './lib/auth';
import { createPaymentAction } from './lib/actions/create-payment.action';
import { getPaymentAction } from './lib/actions/get-payment.action';
import { refundAction } from './lib/actions/refund.action';
import { paymentCompletedTrigger } from './lib/triggers/payment-completed.trigger';

export const snapscan = createPiece({
  displayName: 'SnapScan',
  description:
    'South African QR payments. Create payment requests, look up payments, issue refunds, and react to completed payments.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963639/images_8_xxbee9.png',
  categories: [PieceCategory.PAYMENT_PROCESSING, PieceCategory.COMMERCE],
  auth: snapscanAuth,
  authors: ['synkra'],
  actions: [createPaymentAction, getPaymentAction, refundAction],
  triggers: [paymentCompletedTrigger],
});
