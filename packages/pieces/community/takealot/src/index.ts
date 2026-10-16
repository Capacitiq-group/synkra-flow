import { createPiece, PieceCategory } from '@activepieces/pieces-framework';
import { takealotAuth } from './lib/auth';
import { listOrdersAction } from './lib/actions/list-orders.action';
import { getOrderAction } from './lib/actions/get-order.action';
import { updateShipmentAction } from './lib/actions/update-shipment.action';
import { getProductAction } from './lib/actions/get-product.action';
import { updateStockAction } from './lib/actions/update-stock.action';

export const takealot = createPiece({
  displayName: 'Takealot',
  description:
    'South African marketplace. Manage seller orders, shipments, listings, and stock through the Takealot Seller API.',
  minimumSupportedRelease: '0.92.0',
  logoUrl: 'https://res.cloudinary.com/dewvhnks3/image/upload/v1791963600/takealot-placeholder.png',
  categories: [PieceCategory.COMMERCE, PieceCategory.PRODUCTIVITY],
  auth: takealotAuth,
  authors: ['synkra'],
  actions: [
    listOrdersAction,
    getOrderAction,
    updateShipmentAction,
    getProductAction,
    updateStockAction,
  ],
  triggers: [],
});
