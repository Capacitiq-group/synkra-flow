import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { droppaAuth } from '../..';
import { droppaRequest } from '../auth';

export const getBooking = createAction({
  name: 'get_booking',
  displayName: 'Get Booking',
  description: 'Fetch a Droppa booking by its service ID.',
  auth: droppaAuth,
  props: {
    serviceIdLookup: Property.ShortText({
      displayName: 'Booking Service ID',
      description:
        'The serviceId returned by Create Booking. Leave blank to use the piece-level Service ID.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const id = propsValue.serviceIdLookup || auth.props.serviceId;
    return droppaRequest({
      apiKey: auth.props.apiKey,
      serviceId: auth.props.serviceId,
      method: HttpMethod.GET,
      path: `/sameday/booking/${encodeURIComponent(id)}`,
    });
  },
});
