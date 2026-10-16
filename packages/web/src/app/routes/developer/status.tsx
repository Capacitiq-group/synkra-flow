import { t } from 'i18next';
import { AlertCircle, CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SectionHeader } from './shell';

const ENDPOINTS = [
  { name: 'API — /ping', url: 'https://flow.synkra.co.za/api/v1/synkra/public/ping' },
  { name: 'API — /me', url: 'https://flow.synkra.co.za/api/v1/synkra/public/me' },
  { name: 'Docs — docs.synkra.co.za', url: 'https://docs.synkra.co.za' },
  { name: 'Chat widget — chat.synkra.co.za', url: 'https://chat.synkra.co.za' },
  { name: 'Main app — flow.synkra.co.za', url: 'https://flow.synkra.co.za' },
];

type Result = {
  name: string;
  status: 'checking' | 'up' | 'down' | 'unauth';
  code?: number;
};

export function DeveloperStatusPage() {
  const [results, setResults] = useState<Result[]>(
    ENDPOINTS.map((e) => ({ name: e.name, status: 'checking' })),
  );

  useEffect(() => {
    let cancelled = false;
    ENDPOINTS.forEach(async (e, i) => {
      const start = performance.now();
      try {
        const res = await fetch(e.url, {
          method: 'HEAD',
          mode: 'no-cors',
        });
        void start;
        if (!cancelled) {
          setResults((prev) => {
            const next = [...prev];
            next[i] = {
              name: e.name,
              status: res.type === 'opaque' ? 'up' : res.ok ? 'up' : 'down',
              code: res.status,
            };
            return next;
          });
        }
      } catch {
        if (!cancelled) {
          setResults((prev) => {
            const next = [...prev];
            next[i] = { name: e.name, status: 'down' };
            return next;
          });
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Status')}
        description={t(
          'Live reachability check for Synkra services. Runs from your browser on load.',
        )}
      />

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-2 text-xs uppercase text-gray-11">
            <tr>
              <th className="px-4 py-2 text-left">{t('Service')}</th>
              <th className="px-4 py-2 text-right">{t('Status')}</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.name} className="border-t">
                <td className="px-4 py-3 text-sm">{r.name}</td>
                <td className="px-4 py-3 text-right">
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-11">
        {t(
          'Note: browser cross-origin restrictions can cause false negatives. Use this as an indicator, not a definitive uptime check.',
        )}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: Result['status'] }) {
  if (status === 'checking') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-gray-11">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        {t('Checking…')}
      </span>
    );
  }
  if (status === 'up') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-11">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {t('Up')}
      </span>
    );
  }
  if (status === 'unauth') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-yellow-11">
        <AlertCircle className="h-3.5 w-3.5" />
        {t('Reachable')}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-11">
      <XCircle className="h-3.5 w-3.5" />
      {t('Down')}
    </span>
  );
}
