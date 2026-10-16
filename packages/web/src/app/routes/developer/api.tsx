import { isNil } from '@activepieces/core-utils';
import { t } from 'i18next';
import {
  AlertTriangle,
  ArrowUpRight,
  Copy,
  Key,
  Plus,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
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
import { synkraBillingHooks } from '@/features/synkra-billing';
import {
  SynkraApiKeyCreated,
  synkraApiKeysHooks,
} from '@/features/synkra-developer';
import { SectionHeader } from './shell';

type QuotaError = {
  code?: string;
  params?: { message?: string; usage?: number; limit?: number };
  status?: number;
};

function extractQuotaError(err: unknown): QuotaError | null {
  const e = err as { response?: { status?: number; data?: QuotaError } };
  if (e?.response?.status === 402) {
    return e.response.data ?? { status: 402 };
  }
  return null;
}

export function DeveloperApiPage() {
  const { data, isLoading, refetch } = synkraApiKeysHooks.useList();
  const del = synkraApiKeysHooks.useDelete();
  const { data: sub } = synkraBillingHooks.useSubscription();
  const keys = data ?? [];

  const limits = (sub?.limits ?? {}) as Record<string, number>;
  const apiKeysLimit = limits.apiKeysLimit ?? 0;
  const atLimit = apiKeysLimit > 0 && keys.length >= apiKeysLimit;
  const noAccess = apiKeysLimit <= 0;

  const [createOpen, setCreateOpen] = useState(false);
  const [name, setName] = useState('');
  const [created, setCreated] = useState<SynkraApiKeyCreated | null>(null);
  const [quotaError, setQuotaError] = useState<QuotaError | null>(null);
  const create = synkraApiKeysHooks.useCreate();

  const onCreate = async () => {
    if (!name.trim()) return;
    create.mutate(name.trim(), {
      onSuccess: (key) => {
        setCreated(key);
        setName('');
        refetch();
      },
      onError: (err) => {
        const q = extractQuotaError(err);
        if (!isNil(q)) {
          setQuotaError(q);
        } else {
          toast.error((err as Error).message || 'Could not create API key');
        }
      },
    });
  };

  const openCreateDialog = () => {
    setQuotaError(null);
    setCreated(null);
    setName('');
    setCreateOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('API Keys')}
        description={t(
          'Keys for programmatic access to your Synkra Flow workspace. The full key is shown once at creation.',
        )}
      />

      {noAccess && (
        <div className="flex items-center justify-between gap-4 rounded-lg border border-amber-6 bg-amber-2 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 text-amber-11" />
            <div>
              <div className="text-sm font-medium text-amber-11">
                {t('API keys are available on Starter and higher')}
              </div>
              <p className="mt-1 text-sm text-amber-11/80">
                {t(
                  'Upgrade your plan to generate keys for programmatic access.',
                )}
              </p>
            </div>
          </div>
          <Button asChild className="gap-2">
            <Link to="/billing/checkout">
              {t('See plans')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}

      {!noAccess && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-11">
            {keys.length} / {apiKeysLimit} {t('keys used')}
          </p>
          {atLimit ? (
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setQuotaError({
                status: 402,
                params: {
                  message: t(
                    'You\'ve reached your plan\'s API key limit. Upgrade to create more.',
                  ),
                },
              })}
            >
              <Sparkles className="h-4 w-4" />
              {t('Limit reached — Upgrade')}
            </Button>
          ) : (
            <Button onClick={openCreateDialog} className="gap-2">
              <Plus className="h-4 w-4" />
              {t('New API Key')}
            </Button>
          )}
        </div>
      )}

      {isLoading && <SkeletonList />}

      {!isLoading && keys.length === 0 && (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-10 text-gray-11">
          <Key className="h-8 w-8" />
          <p className="text-sm">{t('No API keys yet.')}</p>
        </div>
      )}

      {!isLoading && keys.length > 0 && (
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full">
            <thead className="bg-gray-2 text-xs uppercase text-gray-11">
              <tr>
                <th className="px-4 py-2 text-left">{t('Name')}</th>
                <th className="px-4 py-2 text-left">{t('Key')}</th>
                <th className="px-4 py-2 text-left">{t('Created')}</th>
                <th className="px-4 py-2 text-right">{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((k) => (
                <tr key={k.id} className="border-t">
                  <td className="px-4 py-3 text-sm font-medium">
                    {k.displayName}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-11">
                    {k.truncatedValue}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-11">
                    {new Date(k.created).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={del.isPending}
                      onClick={() => del.mutate(k.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create dialog — three states: form, quota error, success */}
      <Dialog
        open={createOpen}
        onOpenChange={(o) => {
          setCreateOpen(o);
          if (!o) {
            setCreated(null);
            setQuotaError(null);
            setName('');
          }
        }}
      >
        <DialogContent>
          {/* State A: success — show the key once */}
          {created && (
            <>
              <DialogHeader>
                <DialogTitle>{t('API Key Created')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-amber-6 bg-amber-2 p-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-11" />
                  <div className="space-y-1 text-sm text-amber-11">
                    <div className="font-medium">
                      {t('Copy this key now — it will not be shown again')}
                    </div>
                    <p className="text-amber-11/80">
                      {t(
                        'Store it somewhere safe. Never commit it to git or paste it into chat. Anyone with this key can access your workspace.',
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value={created.value}
                    className="font-mono text-xs"
                  />
                  <Button
                    variant="outline"
                    onClick={async () => {
                      await navigator.clipboard.writeText(created.value);
                      toast.success('Copied to clipboard');
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <DialogFooter>
                  <Button onClick={() => setCreateOpen(false)}>
                    {t('Done')}
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}

          {/* State B: quota hit — friendly upgrade prompt, no red error */}
          {!created && quotaError && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent-11" />
                  {t('Upgrade to unlock API keys')}
                </DialogTitle>
                <DialogDescription>
                  {quotaError.params?.message ||
                    t(
                      'API keys are available on Starter and higher. Upgrade your plan to create keys.',
                    )}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setCreateOpen(false)}
                >
                  {t('Not now')}
                </Button>
                <Button asChild className="gap-2">
                  <Link to="/billing/checkout">
                    {t('See plans')}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </DialogFooter>
            </>
          )}

          {/* State C: form */}
          {!created && !quotaError && (
            <>
              <DialogHeader>
                <DialogTitle>{t('Create API Key')}</DialogTitle>
                <DialogDescription>
                  {t(
                    'Give the key a name so you can identify it later.',
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div>
                  <Label>{t('Name')}</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('e.g. My production app')}
                    autoFocus
                  />
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setCreateOpen(false)}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    onClick={onCreate}
                    disabled={create.isPending || !name.trim()}
                  >
                    {t('Create')}
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
