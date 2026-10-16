import { t } from 'i18next';
import { ArrowRight, Check, Rocket } from 'lucide-react';
import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AgencyTier,
  ClientTier,
  synkraAgencyHooks,
} from '@/features/synkra-agency';
import {
  synkraAgencyOnboardingHooks,
  type AgencyOnboardingStageKey,
} from '@/features/synkra-agency/hooks-onboarding';

const STAGE_LABEL: Record<AgencyOnboardingStageKey, string> = {
  identity: 'Name your agency',
  branding: 'Set your brand',
  tier: 'Confirm your tier',
  first_client: 'Add your first client',
  support: 'Support contact',
  activate: 'Activate the agency',
  go_live: 'Go live',
};

export function AgencyOnboardingCard() {
  const { data: state, isLoading } = synkraAgencyOnboardingHooks.useOnboarding();
  const [open, setOpen] = useState(false);

  if (isLoading || !state) return null;
  if (state.completedAt) return null;

  const done = state.stages.filter(
    (s) => s.status === 'complete' || s.status === 'skipped',
  ).length;
  const total = state.stages.length;
  const current = state.currentStage;

  return (
    <>
      <div className="rounded-lg border bg-gradient-to-r from-gray-1 to-white p-5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-gray-11" />
              <div className="font-medium">{t('Finish setting up your agency')}</div>
            </div>
            <div className="text-sm text-gray-11 mt-1">
              {done} {t('of')} {total} {t('steps done — next:')} {STAGE_LABEL[current]}
            </div>
            <div className="mt-3 h-1.5 w-64 rounded-full bg-gray-3 overflow-hidden">
              <div
                className="h-1.5 rounded-full bg-primary transition-all"
                style={{ width: `${(done / total) * 100}%` }}
              />
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>
            {t('Continue')}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      <WizardDialog open={open} onClose={() => setOpen(false)} state={state} />
    </>
  );
}

function WizardDialog({
  open,
  onClose,
  state,
}: {
  open: boolean;
  onClose: () => void;
  state: import('@/features/synkra-agency/hooks-onboarding').AgencyOnboardingState;
}) {
  const stage = state.stages.find((s) => s.key === state.currentStage);
  const advance = synkraAgencyOnboardingHooks.useAdvanceStage();
  const skip = synkraAgencyOnboardingHooks.useSkipStage();
  const updateProfile = synkraAgencyHooks.useUpdateProfile();
  const updateBranding = synkraAgencyHooks.useUpdateBranding();
  const updateTier = synkraAgencyHooks.useUpdateTier();
  const createClient = synkraAgencyHooks.useCreateClient();
  const activate = synkraAgencyHooks.useActivate();

  const [agencyName, setAgencyName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#5DD62C');
  const [tier, setTier] = useState<AgencyTier>('agency_20');
  const [clientName, setClientName] = useState('');
  const [clientTier, setClientTier] = useState<ClientTier>('starter');
  const [supportEmail, setSupportEmail] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  if (!stage) return null;

  const finish = (data: Record<string, unknown> = {}) => {
    advance.mutate(
      { key: stage.key, data },
      {
        onSuccess: () => {
          toast.success(t('Saved'));
          if (stage.key === 'go_live') onClose();
        },
        onError: () => toast.error(t('Could not save')),
      },
    );
  };

  const step = async () => {
    switch (stage.key) {
      case 'identity': {
        if (!agencyName.trim()) return;
        updateProfile.mutate(
          { name: agencyName.trim() },
          {
            onSuccess: () => finish({ agencyName: agencyName.trim() }),
            onError: () => toast.error(t('Could not save name')),
          },
        );
        return;
      }
      case 'branding': {
        const payload: Record<string, unknown> = {};
        if (logoUrl.trim()) payload.logoUrl = logoUrl.trim();
        if (primaryColor.trim()) payload.primaryColor = primaryColor.trim();
        updateBranding.mutate(payload, {
          onSuccess: () => finish(payload),
          onError: () => toast.error(t('Could not save branding')),
        });
        return;
      }
      case 'tier': {
        updateTier.mutate(tier, {
          onSuccess: () => finish({ tier }),
          onError: () => toast.error(t('Could not set tier')),
        });
        return;
      }
      case 'first_client': {
        if (!clientName.trim()) return;
        createClient.mutate(
          { name: clientName.trim(), clientTier },
          {
            onSuccess: () =>
              finish({ clientName: clientName.trim(), clientTier }),
            onError: () => toast.error(t('Could not create client')),
          },
        );
        return;
      }
      case 'support': {
        const payload: Record<string, unknown> = {};
        if (supportEmail.trim()) payload.supportEmail = supportEmail.trim();
        if (welcomeMessage.trim()) payload.welcomeMessage = welcomeMessage.trim();
        updateBranding.mutate(payload, {
          onSuccess: () => finish(payload),
          onError: () => toast.error(t('Could not save')),
        });
        return;
      }
      case 'activate': {
        activate.mutate(undefined, {
          onSuccess: () => finish({}),
          onError: () => toast.error(t('Could not activate')),
        });
        return;
      }
      case 'go_live':
        finish({});
        return;
    }
  };

  const canSkip = stage.required === false;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{STAGE_LABEL[stage.key]}</DialogTitle>
          <DialogDescription>
            {t('Step')}{' '}
            {state.stages.findIndex((s) => s.key === stage.key) + 1} / {state.stages.length}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2">
          {stage.key === 'identity' && (
            <>
              <Label htmlFor="onb-agency">{t('Agency name')}</Label>
              <Input
                id="onb-agency"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                placeholder={t('e.g. Acme Automations')}
              />
            </>
          )}

          {stage.key === 'branding' && (
            <>
              <div>
                <Label htmlFor="onb-logo">{t('Logo URL')}</Label>
                <Input
                  id="onb-logo"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label htmlFor="onb-color">{t('Primary colour')}</Label>
                <input
                  id="onb-color"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="h-10 w-20 rounded border cursor-pointer"
                />
              </div>
            </>
          )}

          {stage.key === 'tier' && (
            <>
              <Label>{t('Your agency tier')}</Label>
              <Select value={tier} onValueChange={(v) => setTier(v as AgencyTier)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agency_20">Agency 20</SelectItem>
                  <SelectItem value="agency_100">Agency 100</SelectItem>
                  <SelectItem value="agency_500">Agency 500</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}

          {stage.key === 'first_client' && (
            <>
              <div>
                <Label htmlFor="onb-client">{t('Client name')}</Label>
                <Input
                  id="onb-client"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder={t('e.g. Riverside Dental')}
                />
              </div>
              <div>
                <Label>{t('Client tier')}</Label>
                <Select
                  value={clientTier}
                  onValueChange={(v) => setClientTier(v as ClientTier)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {stage.key === 'support' && (
            <>
              <div>
                <Label htmlFor="onb-email">{t('Support email')}</Label>
                <Input
                  id="onb-email"
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  placeholder="support@youragency.co.za"
                />
              </div>
              <div>
                <Label htmlFor="onb-welcome">{t('Portal welcome message')}</Label>
                <Input
                  id="onb-welcome"
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  placeholder={t('Welcome to your automation portal')}
                />
              </div>
            </>
          )}

          {stage.key === 'activate' && (
            <p className="text-sm text-gray-11">
              {t(
                'This flips your agency from draft to active. You can suspend at any time.',
              )}
            </p>
          )}

          {stage.key === 'go_live' && (
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-11" />
              {t('All steps complete. Your agency is live.')}
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between">
          <div>
            {canSkip && (
              <Button
                variant="ghost"
                onClick={() =>
                  skip.mutate(stage.key, {
                    onSuccess: () => toast.success(t('Skipped')),
                  })
                }
                disabled={skip.isPending}
              >
                {t('Skip')}
              </Button>
            )}
          </div>
          <Button
            onClick={step}
            disabled={
              advance.isPending ||
              updateProfile.isPending ||
              updateBranding.isPending ||
              updateTier.isPending ||
              createClient.isPending ||
              activate.isPending
            }
          >
            {stage.key === 'go_live' ? t('Finish') : t('Save & continue')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
