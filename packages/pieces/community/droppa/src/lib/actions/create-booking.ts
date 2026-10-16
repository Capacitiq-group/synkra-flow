import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { droppaAuth } from '../..';
import { droppaRequest } from '../auth';

const VEHICLE_TYPES = ['MOTO_BIKE', 'MINI_VAN', 'DROPPA_EXPRESS'];
const TRANSPORT_MODES = ['ROAD', 'AIR'];
const BOOKING_TYPES = ['DASH', 'FLASH', 'EXPRESS_COURIER', 'BUDGET_COURIER'];

export const createBooking = createAction({
  name: 'create_booking',
  displayName: 'Create Booking',
  description:
    'Create a Droppa delivery booking (Swift, Dash, Flash Road, Flash Flight, Express, or Budget Courier).',
  auth: droppaAuth,
  props: {
    vehicleType: Property.StaticDropdown({
      displayName: 'Vehicle Type',
      required: true,
      options: {
        options: VEHICLE_TYPES.map((v) => ({ label: v, value: v })),
      },
    }),
    transportMode: Property.StaticDropdown({
      displayName: 'Transport Mode',
      required: true,
      options: {
        options: TRANSPORT_MODES.map((v) => ({ label: v, value: v })),
      },
    }),
    bookingType: Property.StaticDropdown({
      displayName: 'Booking Type',
      required: true,
      options: {
        options: BOOKING_TYPES.map((v) => ({ label: v, value: v })),
      },
    }),
    pickUpAddress: Property.LongText({
      displayName: 'Pickup Address',
      required: true,
    }),
    pickUpFirstName: Property.ShortText({
      displayName: 'Pickup Contact First Name',
      required: true,
    }),
    pickUpLastName: Property.ShortText({
      displayName: 'Pickup Contact Last Name',
      required: true,
    }),
    pickUpPhone: Property.ShortText({
      displayName: 'Pickup Contact Phone',
      required: true,
    }),
    pickUpEmail: Property.ShortText({
      displayName: 'Pickup Contact Email',
      required: true,
    }),
    dropOffAddress: Property.LongText({
      displayName: 'Drop-off Address',
      required: true,
    }),
    dropOffFirstName: Property.ShortText({
      displayName: 'Drop-off Contact First Name',
      required: true,
    }),
    dropOffLastName: Property.ShortText({
      displayName: 'Drop-off Contact Last Name',
      required: true,
    }),
    dropOffPhone: Property.ShortText({
      displayName: 'Drop-off Contact Phone',
      required: true,
    }),
    dropOffEmail: Property.ShortText({
      displayName: 'Drop-off Contact Email',
      required: true,
    }),
    date: Property.DateTime({
      displayName: 'Pickup Date & Time',
      required: true,
    }),
    province: Property.ShortText({
      displayName: 'Pickup Province',
      required: true,
    }),
    destinationProvince: Property.ShortText({
      displayName: 'Drop-off Province',
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
    comment: Property.LongText({
      displayName: 'Comments',
      required: false,
    }),
    isExpress: Property.Checkbox({
      displayName: 'Express',
      required: false,
      defaultValue: false,
    }),
  },
  async run({ auth, propsValue }) {
    return droppaRequest({
      apiKey: auth.props.apiKey,
      serviceId: auth.props.serviceId,
      method: HttpMethod.POST,
      path: '/book',
      body: {
        serviceId: auth.props.serviceId,
        type: propsValue.bookingType,
        transportMode: propsValue.transportMode,
        vehicleType: propsValue.vehicleType,
        pickUpAddress: propsValue.pickUpAddress,
        dropOffAddress: propsValue.dropOffAddress,
        date: propsValue.date,
        province: propsValue.province,
        destinationProvince: propsValue.destinationProvince,
        pickUpPCode: propsValue.pickUpPCode,
        dropOffPCode: propsValue.dropOffPCode,
        comment: propsValue.comment,
        isExpress: propsValue.isExpress ?? false,
        pickUp: {
          firstName: propsValue.pickUpFirstName,
          lastName: propsValue.pickUpLastName,
          phone: propsValue.pickUpPhone,
          email: propsValue.pickUpEmail,
        },
        dropOff: {
          firstName: propsValue.dropOffFirstName,
          lastName: propsValue.dropOffLastName,
          phone: propsValue.dropOffPhone,
          email: propsValue.dropOffEmail,
        },
      },
    });
  },
});
