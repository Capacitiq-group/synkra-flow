import { t } from 'i18next';
import { ComingSoon, SectionHeader } from './shell';

export function DeveloperWebhooksPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Webhooks')}
        description={t(
          'Subscribe to notifications when flows run, fail, or complete.',
        )}
      />
      <ComingSoon label={t('Webhooks')} />
    </div>
  );
}
