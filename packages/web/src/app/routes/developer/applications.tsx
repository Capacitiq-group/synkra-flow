import { t } from 'i18next';
import { ComingSoon, SectionHeader } from './shell';

export function DeveloperApplicationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Applications')}
        description={t(
          'Register OAuth applications that integrate external services with Synkra Flow.',
        )}
      />
      <ComingSoon label={t('Applications')} />
    </div>
  );
}
