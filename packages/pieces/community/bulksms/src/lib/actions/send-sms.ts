import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { bulksmsAuth } from '../..';
import { bulksmsRequest } from '../auth';

export const sendSms = createAction({
  name: 'send_sms',
  displayName: 'Send SMS',
  description: 'Send a single SMS to one recipient.',
  auth: bulksmsAuth,
  props: {
    to: Property.ShortText({
      displayName: 'Recipient Number',
      description: 'E.164 format, e.g. +27821234567',
      required: true,
    }),
    message: Property.LongText({
      displayName: 'Message',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    return bulksmsRequest({
      username: auth.props.username,
      password: auth.props.password,
      method: HttpMethod.POST,
      path: '/send',
      body: {
        to: [propsValue.to],
        body: propsValue.message,
      },
    });
  },
});
