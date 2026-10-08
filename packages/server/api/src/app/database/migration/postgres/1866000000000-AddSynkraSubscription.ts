import { QueryRunner } from 'typeorm';
import { Migration } from '../../migration';

export class AddSynkraSubscription1866000000000 implements Migration {
  name = 'AddSynkraSubscription1866000000000';
  breaking = false;
  release = '0.93.0';
  timestamp = 1866000000000;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "synkra_subscription" (
        "id" character varying NOT NULL,
        "created" timestamp with time zone NOT NULL DEFAULT now(),
        "updated" timestamp with time zone NOT NULL DEFAULT now(),
        "userId" character varying NOT NULL,
        "tier" character varying NOT NULL DEFAULT 'free',
        "status" character varying NOT NULL DEFAULT 'active',
        "paystackCustomerCode" character varying,
        "paystackSubscriptionCode" character varying,
        "paystackPlanCode" character varying,
        "currentPeriodStart" timestamp with time zone,
        "currentPeriodEnd" timestamp with time zone,
        "cancelAtPeriodEnd" boolean NOT NULL DEFAULT false,
        "studentVerified" boolean NOT NULL DEFAULT false,
        "communityVerified" boolean NOT NULL DEFAULT false,
        "metadata" jsonb NOT NULL DEFAULT '{}'::jsonb,
        CONSTRAINT "PK_synkra_subscription" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(
      `CREATE UNIQUE INDEX IF NOT EXISTS "idx_synkra_sub_user" ON "synkra_subscription" ("userId")`,
    );
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS "idx_synkra_sub_tier" ON "synkra_subscription" ("tier")`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "synkra_subscription"`);
  }
}
