import { DeveloperActivityPage } from './activity';
import { DeveloperApiPage } from './api';
import { DeveloperApplicationsPage } from './applications';
import { DeveloperChangelogPage } from './changelog';
import { DeveloperOverviewPage } from './overview';
import { DeveloperPlaygroundPage } from './playground';
import { DeveloperQuickstartPage } from './quickstart';
import { DeveloperShell } from './shell';
import { DeveloperStatusPage } from './status';
import { DeveloperSubmissionPage } from './submission';
import { DeveloperWebhooksPage } from './webhooks';

export function DeveloperPage() {
  return (
    <DeveloperShell>
      {(section) => {
        switch (section) {
          case 'overview':
            return <DeveloperOverviewPage />;
          case 'quickstart':
            return <DeveloperQuickstartPage />;
          case 'api':
            return <DeveloperApiPage />;
          case 'playground':
            return <DeveloperPlaygroundPage />;
          case 'webhooks':
            return <DeveloperWebhooksPage />;
          case 'applications':
            return <DeveloperApplicationsPage />;
          case 'activity':
            return <DeveloperActivityPage />;
          case 'submission':
            return <DeveloperSubmissionPage />;
          case 'changelog':
            return <DeveloperChangelogPage />;
          case 'status':
            return <DeveloperStatusPage />;
          default:
            return <DeveloperOverviewPage />;
        }
      }}
    </DeveloperShell>
  );
}
