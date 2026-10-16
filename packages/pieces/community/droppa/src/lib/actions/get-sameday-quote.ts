import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { droppaAuth } from '../..';
import { droppaRequest } from '../auth';

const PROVINCES = [
  'GAUTENG',
  'LIMPOPO',
  'KWA_ZULU_NATAL',
  'NORTHERN_PROVINCE',
  'NORTH_WEST',
  'FREE_STATE',
  'WESTERN_CAPE',
  'MPUMALANGA',
  'EASTERN_CAPE',
];

export const getSamedayQuote = createAction({
  name: 'get_sameday_quote',
  displayName: 'Get Same-Day Quote',
  description:
    'Fetch Droppa same-day shipping quotes (Swift, Flash Road, Flash Flight, Dash) for a pickup and drop-off.',
  auth: droppaAuth,
  props: {
    mass: Property.Number({
      displayName: 'Total Mass (kg)',
      required: true,
    }),
    pickUpProvince: Property.StaticDropdown({
      displayName: 'Pickup Province',
      required: true,
      options: { options: PROVINCES.map((p) => ({ label: p, value: p })) },
    }),
    dropOffProvince: Property.StaticDropdown({
      displayName: 'Drop-off Province',
      required: true,
      options: { options: PROVINCES.map((p) => ({ label: p, value: p })) },
    }),
    pickUpAddress: Property.LongText({
      displayName: 'Pickup Address',
      required: true,
    }),
    dropOffAddress: Property.LongText({
      displayName: 'Drop-off Address',
      required: true,
    }),
    pickUpPCode: Property.ShortText({
      displayName: 'Pickup Postal Code',
      required: true,
    }),
    dropOffPCode: Property.ShortText({
      displayName: 'Drop-off Postal Code',
      required: true,
    }),
    parcelLengthCm: Property.Number({
      displayName: 'Parcel Length (cm)',
      required: true,
    }),
    parcelBreadthCm: Property.Number({
      displayName: 'Parcel Breadth (cm)',
      required: true,
    }),
    parcelHeightCm: Property.Number({
      displayName: 'Parcel Height (cm)',
      required: true,
    }),
    parcelMass: Property.Number({
      displayName: 'Parcel Mass (kg)',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    return droppaRequest({
      apiKey: auth.props.apiKey,
      serviceId: auth.props.serviceId,
      method: HttpMethod.POST,
      path: '/sameday/quotes',
      body: {
        mass: propsValue.mass,
        pickUpProvince: propsValue.pickUpProvince,
        dropOffProvince: propsValue.dropOffProvince,
        pickUpAddress: propsValue.pickUpAddress,
        dropOffAddress: propsValue.dropOffAddress,
        pickUpPCode: propsValue.pickUpPCode,
        dropOffPCode: propsValue.dropOffPCode,
        parcelDimensions: [
          {
            parcel_length: propsValue.parcelLengthCm,
            parcel_breadth: propsValue.parcelBreadthCm,
            parcel_height: propsValue.parcelHeightCm,
            parcel_mass: propsValue.parcelMass,
          },
        ],
      },
    });
  },
});
