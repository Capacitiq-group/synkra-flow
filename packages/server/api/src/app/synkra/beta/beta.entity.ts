import { EntitySchema } from 'typeorm';
import { ApIdSchema, BaseColumnSchemaPart } from '../../database/database-common';

export type BetaApplicationStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'waitlisted'
  | 'withdrawn';

export type BetaBusinessSize =
  | '1-5'
  | '6-20'
  | '21-50'
  | '51-200'
  | '200+';

export interface SynkraBetaApplication {
  id: string;
  created: string;
  updated: string;
  fullName: string;
  email: string;
  businessName: string;
  businessWebsite: string | null;
  businessSize: BetaBusinessSize;
  automationIntent: string;
  dailyTools: string[];
  isAgency: boolean;
  referralSource: string | null;
  status: BetaApplicationStatus;
  reviewedAt: Date | null;
  reviewedBy: string | null;
  decisionNotes: string | null;
  accessGrantedAt: Date | null;
  userId: string | null;
  metadata: Record<string, unknown>;
}

export const SynkraBetaApplicationEntity = new EntitySchema<SynkraBetaApplication>({
  name: 'synkra_beta_application',
  columns: {
    ...BaseColumnSchemaPart,
    fullName: { type: String },
    email: { type: String, unique: true },
    businessName: { type: String },
    businessWebsite: { type: String, nullable: true },
    businessSize: { type: String, default: '1-5' },
    automationIntent: { type: 'text' },
    dailyTools: { type: 'jsonb', default: [] },
    isAgency: { type: Boolean, default: false },
    referralSource: { type: String, nullable: true },
    status: { type: String, default: 'pending' },
    reviewedAt: { type: 'timestamptz', nullable: true },
    reviewedBy: { type: String, nullable: true },
    decisionNotes: { type: 'text', nullable: true },
    accessGrantedAt: { type: 'timestamptz', nullable: true },
    userId: { type: String, nullable: true },
    metadata: { type: 'jsonb', default: {} },
  },
  indices: [
    { name: 'idx_beta_status', columns: ['status'] },
    { name: 'idx_beta_email', columns: ['email'], unique: true },
    { name: 'idx_beta_created', columns: ['created'] },
  ],
});
