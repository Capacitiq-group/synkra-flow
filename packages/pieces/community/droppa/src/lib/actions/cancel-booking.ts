import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { droppaAuth } from '../..';
import { droppaRequest } from '../auth';

export const cancelBooking = createAction({
  name: 'cancel_booking',
  displayName: 'Cancel Booking',
  description: 'Cancel a Droppa booking by its tracking number.',
  auth: droppaAuth,
  props: {
    trackNo: Property.ShortText({
      displayName: 'Tracking Number',
      description: 'The Droppa booking tracking number to cancel.',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    return droppaRequest({
      apiKey: auth.props.apiKey,
      serviceId: auth.props.serviceId,
      method: HttpMethod.PUT,
      path: `/booking/cancel/${encodeURIComponent(propsValue.trackNo)}`,
    });
  },
});
