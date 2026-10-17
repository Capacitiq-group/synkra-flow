import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../../database/database-common';

export const SynkraKbDocumentEntity = new EntitySchema<any>({
  name: 'synkra_kb_document',
  columns: {
    ...BaseColumnSchemaPart,
    platformId: { ...ApIdSchema, nullable: false },
    filename: { type: String, nullable: false },
    mimeType: { type: String, nullable: false },
    sizeBytes: { type: 'integer', nullable: false },
    status: { type: String, default: 'processing' }, // processing, ready, failed
    extractedText: { type: 'text', nullable: true },
  },
  indices: [
    { name: 'idx_synkra_kb_platform', columns: ['platformId'] },
  ],
});
