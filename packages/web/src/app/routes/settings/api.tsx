import { t } from 'i18next';
import { ArrowUpRight, BookOpen, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DOCS_URL = 'https://docs.synkra.co.za/api';

export function ApiSettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <Key className="mt-0.5 h-5 w-5 text-gray-11" />
          <div className="flex-1">
            <h3 className="text-sm font-medium">{t('API Keys')}</h3>
            <p className="mt-1 text-sm text-gray-11">
              {t(
                'Create and manage keys for programmatic access to your Synkra Flow account.',
              )}
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/platform/api-keys">
              {t('Manage keys')}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-0.5 h-5 w-5 text-gray-11" />
          <div className="flex-1">
            <h3 className="text-sm font-medium">{t('API Reference')}</h3>
            <p className="mt-1 text-sm text-gray-11">
              {t(
                'Endpoints, authentication, curl examples, and response shapes. Hosted on our documentation site.',
              )}
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Open docs')}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
