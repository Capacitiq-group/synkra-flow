import { t } from 'i18next';
import { ArrowUpRight, BookOpen, KeyRound, Webhook, AppWindow, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeader } from './shell';

const DOCS_URL = 'https://docs.synkra.co.za';

export function DeveloperOverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Developer')}
        description={t(
          'Build against Synkra Flow. Manage API keys, webhooks, and applications from one place.',
        )}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Card
          icon={KeyRound}
          title={t('API')}
          body={t(
            'Generate keys for programmatic access to your workspace. Read-only today; flow triggers coming soon.',
          )}
          linkTo="../api"
          linkLabel={t('Manage API keys')}
        />
        <Card
          icon={Webhook}
          title={t('Webhooks')}
          body={t(
            'Receive notifications when flows run, fail, or complete.',
          )}
          linkTo="../webhooks"
          linkLabel={t('Coming soon')}
          disabled
        />
        <Card
          icon={AppWindow}
          title={t('Applications')}
          body={t(
            'Register OAuth applications to integrate external services with Synkra.',
          )}
          linkTo="../applications"
          linkLabel={t('Coming soon')}
          disabled
        />
        <Card
          icon={Activity}
          title={t('Activity')}
          body={t(
            'API request logs, error responses, and webhook delivery history.',
          )}
          linkTo="../activity"
          linkLabel={t('Coming soon')}
          disabled
        />
      </div>

      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-0.5 h-5 w-5 text-gray-11" />
          <div className="flex-1">
            <h3 className="text-sm font-medium">{t('Documentation')}</h3>
            <p className="mt-1 text-sm text-gray-11">
              {t(
                'Full API reference, authentication guide, and code examples.',
              )}
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
              {t('Open docs')}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  body,
  linkTo,
  linkLabel,
  disabled,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  linkTo: string;
  linkLabel: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-gray-11" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-11">{body}</p>
      {disabled ? (
        <span className="text-xs text-gray-9">{linkLabel}</span>
      ) : (
        <Link
          to={linkTo}
          className="text-sm font-medium text-accent-11 hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
