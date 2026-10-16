import { t } from 'i18next';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeader } from './shell';

const BASE = 'https://flow.synkra.co.za/api/v1/synkra/public';

export function DeveloperQuickstartPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Quickstart')}
        description={t('Make your first API call in under 5 minutes.')}
      />

      <Step n={1} title={t('Create an API key')}>
        <p className="text-sm text-gray-11">
          {t('Go to the API tab and click "New API Key".')}
        </p>
        <Button variant="outline" size="sm" asChild className="mt-2 w-fit">
          <Link to="../api">
            {t('Go to API keys')}
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </Step>

      <Step n={2} title={t('Store the key securely')}>
        <p className="text-sm text-gray-11">
          {t(
            'The full key is shown once at creation. Store it in an environment variable, never in code.',
          )}
        </p>
        <pre className="mt-2 overflow-x-auto rounded bg-gray-2 p-3 font-mono text-xs">
{`export API_KEY="sk_live_..."`}
        </pre>
      </Step>

      <Step n={3} title={t('Call the API')}>
        <pre className="mt-2 overflow-x-auto rounded bg-gray-2 p-3 font-mono text-xs">
{`curl -sS -H "Authorization: Bearer $API_KEY" \\
  ${BASE}/ping`}
        </pre>
        <p className="mt-2 text-sm text-gray-11">
          {t('Expected:')}{' '}
          <code className="font-mono text-xs">
            {`{ "ok": true, "principalType": "SERVICE", ... }`}
          </code>
        </p>
      </Step>

      <Step n={4} title={t('Next steps')}>
        <ul className="list-disc pl-5 text-sm text-gray-11">
          <li>{t('Explore the API Reference tab')}</li>
          <li>{t('Read the full documentation at docs.synkra.co.za')}</li>
        </ul>
      </Step>
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border p-5">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-3 text-xs font-semibold text-accent-11">
          {n}
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <div className="pl-9">{children}</div>
    </div>
  );
}
