import { t } from 'i18next';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { SectionHeader } from './shell';

const BASE = 'https://flow.synkra.co.za/api/v1/synkra/public';

type Endpoint = {
  method: string;
  path: string;
  title: string;
  description: string;
  curl: string;
  response: string;
};

const ENDPOINTS: Endpoint[] = [
  {
    method: 'GET',
    path: '/ping',
    title: 'Health check',
    description: 'Verify that your API key works.',
    curl: `curl -sS -H "Authorization: Bearer $API_KEY" \\
  ${BASE}/ping`,
    response: `{ "ok": true, "principalType": "SERVICE", "platformId": "..." }`,
  },
  {
    method: 'GET',
    path: '/me',
    title: 'Account info',
    description: 'Platform details, tier, usage, and limits.',
    curl: `curl -sS -H "Authorization: Bearer $API_KEY" \\
  ${BASE}/me`,
    response: `{ "platformId": "...", "tier": "starter", "usage": {...}, "limits": {...} }`,
  },
  {
    method: 'GET',
    path: '/flows',
    title: 'List flows',
    description: 'Every flow in your platform (capped at 200).',
    curl: `curl -sS -H "Authorization: Bearer $API_KEY" \\
  ${BASE}/flows`,
    response: `{ "flows": [{ "id": "...", "displayName": "...", "status": "ENABLED" }] }`,
  },
  {
    method: 'GET',
    path: '/runs',
    title: 'List runs',
    description: 'Recent runs. Filter by flowId. limit defaults to 50, max 100.',
    curl: `curl -sS -H "Authorization: Bearer $API_KEY" \\
  "${BASE}/runs?limit=5"`,
    response: `{ "runs": [{ "id": "...", "status": "SUCCEEDED", "finished": "..." }] }`,
  },
  {
    method: 'GET',
    path: '/runs/:id',
    title: 'Run detail',
    description: 'Full run record including step outputs.',
    curl: `curl -sS -H "Authorization: Bearer $API_KEY" \\
  ${BASE}/runs/RUN_ID`,
    response: `{ "id": "...", "steps": {...} }`,
  },
];

export function DeveloperApiReferencePage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('API Reference')}
        description={t(
          'Endpoints for programmatic access. Full documentation at docs.synkra.co.za/api.',
        )}
      />

      <div className="rounded-lg border bg-gray-2 p-4">
        <div className="text-xs font-medium uppercase text-gray-11">
          {t('Base URL')}
        </div>
        <code className="font-mono text-sm">{BASE}</code>
      </div>

      <div className="rounded-lg border bg-gray-2 p-4">
        <div className="text-xs font-medium uppercase text-gray-11">
          {t('Authentication')}
        </div>
        <code className="font-mono text-sm">
          Authorization: Bearer sk_live_...
        </code>
      </div>

      {ENDPOINTS.map((e) => (
        <EndpointBlock key={e.path} endpoint={e} />
      ))}
    </div>
  );
}

function EndpointBlock({ endpoint }: { endpoint: Endpoint }) {
  return (
    <div className="rounded-lg border">
      <div className="flex items-center gap-3 border-b bg-gray-2 px-4 py-2">
        <span className="rounded bg-green-3 px-2 py-0.5 font-mono text-xs font-semibold text-green-11">
          {endpoint.method}
        </span>
        <code className="font-mono text-sm">{endpoint.path}</code>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div>
          <div className="font-medium">{endpoint.title}</div>
          <p className="mt-1 text-sm text-gray-11">{endpoint.description}</p>
        </div>
        <Code label={t('Example')} code={endpoint.curl} />
        <Code label={t('Response')} code={endpoint.response} />
      </div>
    </div>
  );
}

function Code({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Copied');
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div>
      <div className="mb-1 text-xs font-medium uppercase text-gray-11">
        {label}
      </div>
      <div className="group relative">
        <pre className="overflow-x-auto whitespace-pre rounded bg-gray-2 px-3 py-2 font-mono text-xs">
          {code}
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 h-7 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={onCopy}
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? t('Copied') : ''}
        </Button>
      </div>
    </div>
  );
}
