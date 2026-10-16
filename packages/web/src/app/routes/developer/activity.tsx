import { t } from 'i18next';
import { ComingSoon, SectionHeader } from './shell';

export function DeveloperActivityPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Activity')}
        description={t(
          'API request logs, error responses, and webhook delivery history.',
        )}
      />
      <ComingSoon label={t('Activity')} />
    </div>
  );
}
