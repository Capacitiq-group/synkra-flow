import { t } from 'i18next';
import {
  Activity,
  AppWindow,
  BookOpen,
  Code2,
  FlaskConical,
  GitBranch,
  HeartPulse,
  KeyRound,
  Rocket,
  ScrollText,
  UploadCloud,
  Webhook,
} from 'lucide-react';
void GitBranch;
import { Link, useLocation, useParams } from 'react-router-dom';
import { PageTitle } from '@/app/components/page-title';
import { authenticationSession } from '@/lib/authentication-session';
import { cn } from '@/lib/utils';

export type DeveloperSectionId =
  | 'overview'
  | 'quickstart'
  | 'api'
  | 'playground'
  | 'webhooks'
  | 'applications'
  | 'activity'
  | 'submission'
  | 'changelog'
  | 'status';

const SECTIONS: {
  id: DeveloperSectionId;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
}[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: Code2,
    description: 'Developer resources and quick links.',
  },
  {
    id: 'quickstart',
    label: 'Quickstart',
    icon: Rocket,
    description: 'Get up and running with the API in 5 minutes.',
  },
  {
    id: 'api',
    label: 'API Keys',
    icon: KeyRound,
    description: 'Manage keys for programmatic access to Synkra Flow.',
  },
  {
    id: 'playground',
    label: 'Playground',
    icon: FlaskConical,
    description: 'Call the API from your browser.',
  },
  {
    id: 'webhooks',
    label: 'Webhooks',
    icon: Webhook,
    description: 'Subscribe to events from your workspace.',
  },
  {
    id: 'applications',
    label: 'Applications',
    icon: AppWindow,
    description: 'Register applications and OAuth clients.',
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: Activity,
    description: 'API requests, errors, and webhook delivery history.',
  },
  {
    id: 'submission',
    label: 'Submit Integration',
    icon: UploadCloud,
    description: 'Publish an integration to the Synkra marketplace.',
  },
  {
    id: 'changelog',
    label: 'Changelog',
    icon: ScrollText,
    description: 'API version history.',
  },
  {
    id: 'status',
    label: 'Status',
    icon: HeartPulse,
    description: 'Live reachability of Synkra services.',
  },
];

const DOCS_LINK = {
  label: 'Documentation',
  icon: BookOpen,
  href: 'https://docs.synkra.co.za',
};

export function DeveloperShell({
  children,
}: {
  children: (section: DeveloperSectionId) => React.ReactNode;
}) {
  const location = useLocation();
  const params = useParams<{ projectId?: string }>();
  const projectId = params.projectId ?? authenticationSession.getProjectId();

  const active = ((): DeveloperSectionId => {
    const m = location.pathname.match(/\/developer\/([^/?#]+)/);
    const id = (m?.[1] ?? 'overview') as DeveloperSectionId;
    return SECTIONS.some((s) => s.id === id) ? id : 'overview';
  })();

  const base = projectId ? `/projects/${projectId}/developer` : '/developer';

  return (
    <PageTitle title={t('Developer')}>
      <div className="mx-auto flex w-full max-w-6xl gap-8 p-6">
        <aside className="w-56 shrink-0">
          <div className="mb-4 px-3 text-sm font-medium text-gray-11">
            {t('Developer')}
          </div>
          <nav className="flex flex-col gap-0.5">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === active;
              return (
                <Link
                  key={s.id}
                  to={s.id === 'overview' ? base : `${base}/${s.id}`}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-gray-4 font-medium text-gray-12'
                      : 'text-gray-11 hover:bg-gray-3 hover:text-gray-12',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </Link>
              );
            })}
            <a
              href={DOCS_LINK.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                'text-gray-11 hover:bg-gray-3 hover:text-gray-12',
              )}
            >
              <DOCS_LINK.icon className="h-4 w-4" />
              {DOCS_LINK.label}
            </a>
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children(active)}</div>
      </div>
    </PageTitle>
  );
}

export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-11">{description}</p>
    </div>
  );
}

export function ComingSoon({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-gray-6 bg-gray-2 p-8 text-center text-sm text-gray-11">
      {`${label} is coming soon.`}
    </div>
  );
}
