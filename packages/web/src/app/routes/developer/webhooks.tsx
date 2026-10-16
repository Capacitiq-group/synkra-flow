import { t } from 'i18next';
import { Plus, Trash2, Webhook } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SkeletonList } from '@/components/ui/skeleton';
import {
  AVAILABLE_EVENTS,
  synkraWebhooksHooks,
} from '@/features/synkra-developer';
import { cn } from '@/lib/utils';
import { SectionHeader } from './shell';

function extractApiError(err: unknown): string {
  const e = err as {
    response?: {
      status?: number;
      data?: { error?: string; message?: string; code?: string };
    };
    message?: string;
  };
  const status = e.response?.status;
  const serverMsg =
    e.response?.data?.error ?? e.response?.data?.message ?? e.message;
  if (status === 402) {
    return (
      serverMsg ??
      'Webhooks require a paid plan. Upgrade to enable event subscriptions.'
    );
  }
  if (status === 403) {
    return (
      serverMsg ?? 'You do not have permission to manage webhooks.'
    );
  }
  if (status === 400) {
    return serverMsg ?? 'Invalid request. Check the URL and try again.';
  }
  return serverMsg ?? 'Something went wrong. Please try again.';
}

export function DeveloperWebhooksPage() {
  const { data, isLoading, refetch } = synkraWebhooksHooks.useList();
  const del = synkraWebhooksHooks.useDelete();
  const create = synkraWebhooksHooks.useCreate();
  const webhooks = data ?? [];

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [events, setEvents] = useState<string[]>(['flow.run.finished']);

  const toggleEvent = (ev: string) => {
    setEvents((prev) =>
      prev.includes(ev) ? prev.filter((e) => e !== ev) : [...prev, ev],
    );
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onCreate = () => {
    if (!url.trim() || events.length === 0) return;
    setErrorMessage(null);
    create.mutate(
      { url: url.trim(), events },
      {
        onSuccess: () => {
          setOpen(false);
          setUrl('');
          setEvents(['flow.run.finished']);
          setErrorMessage(null);
          refetch();
        },
        onError: (err) => {
          setErrorMessage(extractApiError(err));
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('Webhooks')}
        description={t(
          'Receive HTTP POSTs when events occur in your workspace. We sign each request so you can verify it came from Synkra.',
        )}
      />

      <div className="flex justify-end">
        <Button onClick={() => { setOpen(true); setErrorMessage(null); }} className="gap-2">
          <Plus className="h-4 w-4" />
          {t('New Webhook')}
        </Button>
      </div>

      {isLoading && <SkeletonList />}

      {!isLoading && webhooks.length === 0 && (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-10 text-gray-11">
          <Webhook className="h-8 w-8" />
          <p className="text-sm">{t('No webhooks yet.')}</p>
        </div>
      )}

      {!isLoading && webhooks.length > 0 && (
        <div className="flex flex-col gap-3">
          {webhooks.map((w) => (
            <div
              key={w.id}
              className="flex items-start justify-between rounded-lg border p-4"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Webhook className="h-4 w-4 text-gray-11" />
                  <code className="truncate font-mono text-sm">{w.url}</code>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {w.events.map((ev) => (
                    <span
                      key={ev}
                      className="rounded bg-gray-3 px-2 py-0.5 font-mono text-[10px] text-gray-11"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                disabled={del.isPending}
                onClick={() => del.mutate(w.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t('New Webhook')}</DialogTitle>
            <DialogDescription>
              {t(
                'Choose an HTTPS endpoint and the events you want to receive.',
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>{t('Endpoint URL')}</Label>
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://your-app.com/webhooks/synkra"
                autoFocus
              />
            </div>
            <div>
              <Label>{t('Events')}</Label>
              <div className="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto rounded border p-3">
                {AVAILABLE_EVENTS.map((ev) => {
                  const checked = events.includes(ev);
                  return (
                    <button
                      key={ev}
                      type="button"
                      onClick={() => toggleEvent(ev)}
                      className={cn(
                        'flex items-center justify-between rounded px-2 py-1.5 text-left font-mono text-xs transition-colors',
                        checked
                          ? 'bg-accent-3 text-accent-11'
                          : 'text-gray-11 hover:bg-gray-3',
                      )}
                    >
                      <span>{ev}</span>
                      {checked && <span>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {errorMessage && (
            <div className="rounded-md border border-red-6 bg-red-2 p-3 text-sm text-red-11">
              {errorMessage}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t('Cancel')}
            </Button>
            <Button
              onClick={onCreate}
              disabled={create.isPending || !url.trim() || events.length === 0}
            >
              {t('Create')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
