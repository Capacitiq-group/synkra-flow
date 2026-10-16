import { t } from 'i18next';
import { Play, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionHeader } from './shell';

const BASE = 'https://flow.synkra.co.za/api/v1/synkra/public';

const ENDPOINTS = [
  { id: 'ping', label: 'GET /ping' },
  { id: 'me', label: 'GET /me' },
  { id: 'flows', label: 'GET /flows' },
  { id: 'runs', label: 'GET /runs' },
] as const;

type EndpointId = (typeof ENDPOINTS)[number]['id'];

export function DeveloperPlaygroundPage() {
  const [apiKey, setApiKey] = useState('');
  const [endpoint, setEndpoint] = useState<EndpointId>('ping');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const run = async () => {
    if (!apiKey.trim()) {
      toast.error('Paste an API key first');
      return;
    }
    setLoading(true);
    setResponse('');
    setStatusCode(null);
    const start = performance.now();
    try {
      const res = await fetch(`${BASE}/${endpoint}`, {
        headers: { Authorization: `Bearer ${apiKey.trim()}` },
      });
      const ms = Math.round(performance.now() - start);
      setStatusCode(res.status);
      setDuration(ms);
      const text = await res.text();
      try {
        const json = JSON.parse(text);
        setResponse(JSON.stringify(json, null, 2));
      } catch {
        setResponse(text);
      }
    } catch (e) {
      setResponse(String(e));
      toast.error('Request failed');
    } finally {
      setLoading(false);
    }
  };

  const statusColor =
    statusCode === null
      ? 'text-gray-11'
      : statusCode < 300
        ? 'text-green-11'
        : statusCode < 500
          ? 'text-yellow-11'
          : 'text-red-11';

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Playground')}
        description={t(
          'Call the API directly from your browser. Your key never leaves this page — it goes straight to the Synkra API.',
        )}
      />

      <div className="flex flex-col gap-3 rounded-lg border p-4">
        <div>
          <label className="text-xs font-medium uppercase text-gray-11">
            {t('API key')}
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded border bg-gray-1 px-3 py-2 font-mono text-sm"
            placeholder="sk_live_..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-medium uppercase text-gray-11">
            {t('Endpoint')}
          </label>
          <Select
            value={endpoint}
            onValueChange={(v) => setEndpoint(v as EndpointId)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ENDPOINTS.map((e) => (
                <SelectItem key={e.id} value={e.id}>
                  {e.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={run}
          disabled={loading}
          className="w-fit gap-2"
        >
          {loading ? (
            <Play className="h-4 w-4 animate-pulse" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {loading ? t('Sending…') : t('Send request')}
        </Button>
      </div>

      {(statusCode !== null || response) && (
        <div className="rounded-lg border">
          <div className="flex items-center justify-between border-b bg-gray-2 px-4 py-2">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-sm font-semibold ${statusColor}`}>
                {statusCode ?? '—'}
              </span>
              {duration !== null && (
                <span className="text-xs text-gray-11">{duration}ms</span>
              )}
            </div>
          </div>
          <pre className="overflow-x-auto whitespace-pre p-4 font-mono text-xs">
            {response || t('No response yet')}
          </pre>
        </div>
      )}
    </div>
  );
}
