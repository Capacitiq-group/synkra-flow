import { t } from 'i18next';
import { SectionHeader } from './shell';

type Entry = {
  version: string;
  date: string;
  changes: string[];
};

const ENTRIES: Entry[] = [
  {
    version: 'v1.0',
    date: 'October 2026',
    changes: [
      'Initial public API release',
      'GET /ping — health check',
      'GET /me — account info, tier, usage, limits',
      'GET /flows — list flows',
      'GET /runs — list recent runs, filter by flow',
      'GET /runs/:id — full run detail',
      'Bearer token authentication via API keys',
    ],
  },
];

export function DeveloperChangelogPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Changelog')}
        description={t('Version history for the Synkra Flow public API.')}
      />

      <div className="flex flex-col gap-6">
        {ENTRIES.map((entry) => (
          <div key={entry.version} className="rounded-lg border p-5">
            <div className="mb-3 flex items-baseline gap-3">
              <h3 className="text-base font-semibold">{entry.version}</h3>
              <span className="text-xs text-gray-11">{entry.date}</span>
            </div>
            <ul className="list-disc pl-5 text-sm">
              {entry.changes.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
