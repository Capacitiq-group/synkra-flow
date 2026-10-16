import { t } from 'i18next';
import { AlertTriangle, ArrowUpRight, CheckCircle2, Key, Plus, Sparkles, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SkeletonList } from '@/components/ui/skeleton';
import { synkraBillingHooks } from '@/features/synkra-billing';
import {
  SUPPORTED_BYOK_PROVIDERS,
  SupportedByokProvider,
  synkraAiHooks,
} from '@/features/synkra-ai';

export function AiSettingsPage() {
  const { data: sub } = synkraBillingHooks.useSubscription();
  const { data, isLoading } = synkraAiHooks.useByok();
  const del = synkraAiHooks.useDeleteByok();
  const add = synkraAiHooks.useAddByok();

  const tier = sub?.tier ?? 'free';
  const isPro = tier === 'pro';

  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState<SupportedByokProvider>('openai');
  const [displayName, setDisplayName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [modelIds, setModelIds] = useState('');
  const [baseUrl, setBaseUrl] = useState('');

  const byok = data ?? [];

  const reset = () => {
    setProvider('openai');
    setDisplayName('');
    setApiKey('');
    setModelIds('');
    setBaseUrl('');
  };

  const onAdd = () => {
    if (!displayName.trim() || !apiKey.trim()) return;
    add.mutate(
      {
        provider,
        displayName: displayName.trim(),
        apiKey: apiKey.trim(),
        modelIds: modelIds
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        baseUrl: baseUrl.trim() || undefined,
      },
      {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Synkra AI — always present */}
      <div className="rounded-lg border bg-gray-2 p-5">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 text-accent-11" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium">{t('Synkra AI')}</h3>
              <span className="rounded bg-accent-3 px-1.5 py-0.5 text-[10px] font-medium text-accent-11">
                {t('Included')}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-11">
              {t(
                'Built-in AI powered by DeepSeek. Every chat turn and AI workflow step consumes credits from your plan allowance. Buy add-on packs when your monthly allowance runs out.',
              )}
            </p>
          </div>
        </div>
      </div>

      {/* BYOK — Pro only */}
      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <Key className="mt-0.5 h-5 w-5 text-gray-11" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium">
                {t('Bring Your Own Key')}
              </h3>
              {!isPro && (
                <span className="rounded bg-amber-3 px-1.5 py-0.5 text-[10px] font-medium text-amber-11">
                  {t('Pro only')}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-11">
              {isPro
                ? t(
                    'Add your own AI provider. Requests go through your key directly — they do not consume Synkra credits.',
                  )
                : t(
                    'Use your own AI provider key. Requests go through your key directly and do not consume Synkra credits. Available on the Pro plan.',
                  )}
            </p>

            {!isPro && (
              <div className="mt-3">
                <Button size="sm" asChild>
                  <Link to="/billing/checkout">
                    {t('Upgrade to Pro')}
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            )}

            {isPro && (
              <div className="mt-3">
                <Button
                  size="sm"
                  className="gap-2"
                  onClick={() => {
                    reset();
                    setOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4" />
                  {t('Add your own key')}
                </Button>
              </div>
            )}
          </div>
        </div>

        {isPro && (
          <div className="mt-5">
            {isLoading && <SkeletonList />}

            {!isLoading && byok.length === 0 && (
              <p className="text-sm text-gray-11">
                {t('No custom providers yet.')}
              </p>
            )}

            {!isLoading && byok.length > 0 && (
              <div className="flex flex-col gap-2">
                {byok.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between rounded border p-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-11" />
                      <div>
                        <div className="text-sm font-medium">
                          {p.displayName}
                        </div>
                        <div className="font-mono text-xs text-gray-11">
                          {p.provider}
                          {p.modelIds.length > 0 &&
                            ` · ${p.modelIds.join(', ')}`}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={del.isPending}
                      onClick={() => del.mutate(p.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Credits shortcut */}
      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 text-gray-11" />
          <div className="flex-1">
            <h3 className="text-sm font-medium">{t('AI Credits')}</h3>
            <p className="mt-1 text-sm text-gray-11">
              {t(
                'Every chat turn and AI step consumes credits. 1 credit = 1,000 tokens. Buy add-on packs when you need more.',
              )}
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/billing">
              {t('Buy credits')}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Add BYOK dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t('Add AI provider')}</DialogTitle>
            <DialogDescription>
              {t(
                'Your key is encrypted at rest. It is used for your own AI requests and does not consume Synkra credits.',
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label>{t('Provider')}</Label>
              <Select
                value={provider}
                onValueChange={(v) => setProvider(v as SupportedByokProvider)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_BYOK_PROVIDERS.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>{t('Name')}</Label>
              <Input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder={t('e.g. My OpenAI key')}
              />
            </div>
            <div>
              <Label>{t('API key')}</Label>
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
              />
            </div>
            <div>
              <Label>{t('Models (optional, comma-separated)')}</Label>
              <Input
                value={modelIds}
                onChange={(e) => setModelIds(e.target.value)}
                placeholder="gpt-4o-mini, gpt-4o"
              />
            </div>
            {provider === 'custom' && (
              <div>
                <Label>{t('Base URL')}</Label>
                <Input
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                  placeholder="https://api.example.com/v1"
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t('Cancel')}
            </Button>
            <Button
              onClick={onAdd}
              disabled={
                add.isPending || !displayName.trim() || !apiKey.trim()
              }
            >
              {t('Add provider')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
