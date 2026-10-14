import { t } from 'i18next';
import { ArrowUpRight, CheckCircle2, Clock, FileCheck } from 'lucide-react';
import { SectionHeader } from './shell';

export function DeveloperSubmissionPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Submit an Integration')}
        description={t(
          'Build and publish integrations for the Synkra marketplace. Free to build, free to list, free to publish.',
        )}
      />

      <div className="rounded-lg border bg-gray-2 p-5">
        <h3 className="text-sm font-medium">{t('How it works')}</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          <li>{t('Build your integration against the Synkra framework')}</li>
          <li>{t('Test it in the sandbox with your own account')}</li>
          <li>{t('Submit for review through this page')}</li>
          <li>{t('We review technical validity, scopes, and security')}</li>
          <li>{t('Once approved, it goes live in the marketplace')}</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Stat
          icon={CheckCircle2}
          title={t('Free to build')}
          body={t('No platform fees for developers creating integrations.')}
        />
        <Stat
          icon={FileCheck}
          title={t('Security first')}
          body={t(
            'You never see customer credentials. Synkra manages auth on your behalf.',
          )}
        />
        <Stat
          icon={Clock}
          title={t('Coming soon')}
          body={t(
            'The submission portal opens when the marketplace launches.',
          )}
        />
      </div>

      <div className="rounded-lg border p-5">
        <h3 className="text-sm font-medium">{t('Requirements')}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-11">
          <li>{t('TypeScript, Node.js 20+')}</li>
          <li>{t('Follows Synkra piece structure')}</li>
          <li>{t('Uses declared scopes only')}</li>
          <li>{t('Handles errors gracefully')}</li>
          <li>{t('Documents every action and trigger')}</li>
        </ul>
      </div>

      <div className="rounded-lg border p-5">
        <h3 className="text-sm font-medium">{t('Developers)')}</h3>
        <p className="mt-2 text-sm text-gray-11">
          {t('SDK and CLI will be available at the marketplace launch.')}
        </p>
        <a
          href="https://docs.synkra.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-11 hover:underline"
        >
          {t('Read the developer docs')}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border p-4">
      <Icon className="h-5 w-5 text-gray-11" />
      <div className="mt-2 text-sm font-medium">{title}</div>
      <p className="mt-1 text-xs text-gray-11">{body}</p>
    </div>
  );
}
