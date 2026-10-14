import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dropAuth } from '../auth';
import { dropRequest, DropAuth } from '../common/client';

export const getQuoteAction = createAction({
  auth: dropAuth,
  name: 'get_quote',
  displayName: 'Get Quote',
  description: 'Get a delivery price quote before booking.',
  props: {
    pickup_address: Property.LongText({
      displayName: 'Pickup Address',
      required: true,
    }),
    dropoff_address: Property.LongText({
      displayName: 'Drop-off Address',
      required: true,
    }),
    parcel_weight_kg: Property.Number({
      displayName: 'Parcel Weight (kg)',
      required: false,
      defaultValue: 1,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as DropAuth;
    return dropRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/quotes',
      body: {
        pickupAddress: propsValue.pickup_address,
        dropoffAddress: propsValue.dropoff_address,
        parcelWeightKg: propsValue.parcel_weight_kg ?? 1,
      },
    });
  },
});
