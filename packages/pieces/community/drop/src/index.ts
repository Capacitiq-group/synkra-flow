import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { dropAuth } from './lib/auth';
import { createDeliveryAction } from './lib/actions/create-delivery.action';
import { getDeliveryAction } from './lib/actions/get-delivery.action';
import { cancelDeliveryAction } from './lib/actions/cancel-delivery.action';
import { getQuoteAction } from './lib/actions/get-quote.action';
import { deliveryStatusChangedTrigger } from './lib/triggers/delivery-status-changed.trigger';

export const drop = createPiece({
  displayName: 'Drop',
  description:
    'South African same-day courier. Create deliveries, get quotes, track status, and react to delivery updates.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/drop-placeholder.png',
  categories: [PieceCategory.COMMERCE, PieceCategory.PRODUCTIVITY],
  auth: dropAuth,
  authors: ['synkra'],
  actions: [
    createDeliveryAction,
    getDeliveryAction,
    cancelDeliveryAction,
    getQuoteAction,
  ],
  triggers: [deliveryStatusChangedTrigger],
});
