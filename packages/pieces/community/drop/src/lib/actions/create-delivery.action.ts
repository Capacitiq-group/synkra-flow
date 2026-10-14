import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dropAuth } from '../auth';
import { dropRequest, DropAuth } from '../common/client';

export const createDeliveryAction = createAction({
  auth: dropAuth,
  name: 'create_delivery',
  displayName: 'Create Delivery',
  description: 'Book a same-day delivery with Drop.',
  props: {
    reference: Property.ShortText({
      displayName: 'Reference',
      description: 'Your order or invoice reference.',
      required: true,
    }),
    pickup_address: Property.LongText({
      displayName: 'Pickup Address',
      required: true,
    }),
    pickup_contact_name: Property.ShortText({
      displayName: 'Pickup Contact Name',
      required: false,
    }),
    pickup_contact_phone: Property.ShortText({
      displayName: 'Pickup Contact Phone',
      required: false,
    }),
    dropoff_address: Property.LongText({
      displayName: 'Drop-off Address',
      required: true,
    }),
    dropoff_contact_name: Property.ShortText({
      displayName: 'Drop-off Contact Name',
      required: false,
    }),
    dropoff_contact_phone: Property.ShortText({
      displayName: 'Drop-off Contact Phone',
      required: false,
    }),
    parcel_description: Property.ShortText({
      displayName: 'Parcel Description',
      required: true,
    }),
    parcel_weight_kg: Property.Number({
      displayName: 'Parcel Weight (kg)',
      required: false,
      defaultValue: 1,
    }),
    notes: Property.LongText({
      displayName: 'Notes',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const a = auth.props as DropAuth;
    return dropRequest<Record<string, unknown>>({
      auth: a,
      method: HttpMethod.POST,
      path: '/deliveries',
      body: {
        reference: propsValue.reference,
        pickup: {
          address: propsValue.pickup_address,
          contactName: propsValue.pickup_contact_name,
          contactPhone: propsValue.pickup_contact_phone,
        },
        dropoff: {
          address: propsValue.dropoff_address,
          contactName: propsValue.dropoff_contact_name,
          contactPhone: propsValue.dropoff_contact_phone,
        },
        parcel: {
          description: propsValue.parcel_description,
          weightKg: propsValue.parcel_weight_kg ?? 1,
        },
        notes: propsValue.notes,
      },
    });
  },
});
