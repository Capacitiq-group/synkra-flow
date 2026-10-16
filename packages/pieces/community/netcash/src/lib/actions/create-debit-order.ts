import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { netcashAuth } from '../..';
import { netcashRequest } from '../auth';

export const createDebitOrder = createAction({
  name: 'create_debit_order',
  displayName: 'Create Debit Order',
  description: 'Create a new debit order against a Netcash account.',
  auth: netcashAuth,
  props: {
    accountReference: Property.ShortText({
      displayName: 'Customer Reference',
      required: true,
    }),
    amount: Property.Number({
      displayName: 'Amount (ZAR)',
      required: true,
    }),
    debitDate: Property.DateTime({
      displayName: 'Debit Date',
      required: true,
    }),
    frequency: Property.StaticDropdown({
      displayName: 'Frequency',
      required: true,
      options: {
        options: [
          { label: 'Once-off', value: 'O' },
          { label: 'Monthly', value: 'M' },
          { label: 'Weekly', value: 'W' },
        ],
      },
    }),
    bankAccountNumber: Property.ShortText({
      displayName: 'Bank Account Number',
      required: true,
    }),
    branchCode: Property.ShortText({
      displayName: 'Branch Code',
      required: true,
    }),
    accountHolder: Property.ShortText({
      displayName: 'Account Holder Name',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    return netcashRequest({
      apiKey: auth.props.apiKey,
      serviceKey: auth.props.serviceKey,
      accountNumber: auth.props.accountNumber,
      method: HttpMethod.POST,
      path: '/debitorders/create',
      body: {
        AccountNumber: auth.props.accountNumber,
        AccountReference: propsValue.accountReference,
        Amount: propsValue.amount,
        DebitDate: propsValue.debitDate,
        Frequency: propsValue.frequency,
        BankAccountNumber: propsValue.bankAccountNumber,
        BranchCode: propsValue.branchCode,
        AccountHolder: propsValue.accountHolder,
      },
    });
  },
});
