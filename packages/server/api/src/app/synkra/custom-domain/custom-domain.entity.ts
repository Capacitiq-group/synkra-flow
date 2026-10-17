import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../../database/database-common';

export const SynkraCustomDomainEntity = new EntitySchema<any>({
  name: 'synkra_custom_domain',
  columns: {
    ...BaseColumnSchemaPart,
    platformId: { ...ApIdSchema, nullable: false },
    domain: { type: String, unique: true, nullable: false },
    status: { type: String, default: 'pending' },
    verificationToken: { type: String, nullable: false },
    verifiedAt: { type: 'timestamp with time zone', nullable: true },
  },
  indices: [
    { name: 'idx_synkra_custom_domain_platform', columns: ['platformId'] },
  ],
});
