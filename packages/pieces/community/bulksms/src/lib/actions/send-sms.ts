import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { bulksmsAuth } from '../..';
import { bulksmsRequest } from '../auth';

export const sendSms = createAction({
  name: 'send_sms',
  displayName: 'Send SMS',
  description: 'Send an SMS to one or more recipients via BulkSMS.',
  auth: bulksmsAuth,
  props: {
    to: Property.ShortText({
      displayName: 'Recipients',
      description:
        'Comma-separated phone numbers in E.164 format, e.g. +27821234567,+27831234567',
      required: true,
    }),
    message: Property.LongText({
      displayName: 'Message',
      required: true,
    }),
    from: Property.ShortText({
      displayName: 'From (optional)',
      description:
        'Sender ID. Leave blank to use the account default. Alphanumeric up to 11 chars or international number.',
      required: false,
    }),
    autoUnicode: Property.Checkbox({
      displayName: 'Auto Unicode',
      description:
        'Automatically convert messages with non-GSM characters to Unicode SMS.',
      required: false,
      defaultValue: true,
    }),
    scheduleDate: Property.DateTime({
      displayName: 'Schedule Date (optional)',
      description: 'Send in the future. Leave blank to send immediately.',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const recipients = propsValue.to
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (recipients.length === 0) {
      throw new Error('At least one recipient is required.');
    }

    const body: Record<string, unknown> = {
      to: recipients.length === 1 ? recipients[0] : recipients,
      body: propsValue.message,
    };
    if (propsValue.from) body['from'] = propsValue.from;

    const query: Record<string, string> = {};
    if (propsValue.autoUnicode) query['auto-unicode'] = 'true';
    if (propsValue.scheduleDate) {
      query['schedule-date'] = propsValue.scheduleDate;
    }

    return bulksmsRequest({
      tokenId: auth.props.tokenId,
      tokenSecret: auth.props.tokenSecret,
      method: HttpMethod.POST,
      path: '/messages',
      query,
      body,
    });
  },
});
