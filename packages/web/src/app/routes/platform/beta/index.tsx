import { t } from 'i18next';
import {
  CheckCircle2,
  Clock,
  Mail,
  XCircle,
  Hourglass,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { DashboardPageHeader } from '@/app/components/dashboard-page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import {
  BetaApplication,
  BetaApplicationStatus,
  synkraBetaHooks,
} from '@/features/synkra-beta';
import { cn } from '@/lib/utils';

const STATUS_STYLES: Record<BetaApplicationStatus, string> = {
  pending: 'bg-yellow-2 text-yellow-11 border-yellow-6',
  accepted: 'bg-green-2 text-green-11 border-green-6',
  rejected: 'bg-red-2 text-red-11 border-red-6',
  waitlisted: 'bg-blue-2 text-blue-11 border-blue-6',
  withdrawn: 'bg-gray-3 text-gray-11 border-gray-6',
};

const FILTERS: { id: BetaApplicationStatus | 'all'; label: string }[] = [
  { id: 'pending', label: 'Pending' },
  { id: 'accepted', label: 'Accepted' },
  { id: 'waitlisted', label: 'Waitlisted' },
  { id: 'rejected', label: 'Rejected' },
  { id: 'all', label: 'All' },
];

export default function BetaAdminPage() {
  const [filter, setFilter] = useState<BetaApplicationStatus | 'all'>('pending');
  const [rejectDialog, setRejectDialog] = useState<BetaApplication | null>(null);
  const [rejectNotes, setRejectNotes] = useState('');
  const [detailDialog, setDetailDialog] = useState<BetaApplication | null>(null);

  const status = filter === 'all' ? undefined : filter;
  const { data, isLoading, isError, refetch } = synkraBetaHooks.useList(status);
  const { data: stats } = synkraBetaHooks.useStats();
  const accept = synkraBetaHooks.useAccept();
  const reject = synkraBetaHooks.useReject();
  const waitlist = synkraBetaHooks.useWaitlist();

  const applications = data ?? [];

  return (
    <div className="flex flex-col gap-6 p-6">
      <DashboardPageHeader
        title={t('Beta Applications')}
        description={t('Review and approve access to Synkra Flow beta.')}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard label="Pending" value={stats?.pending ?? 0} tone="yellow" />
        <StatCard label="Accepted" value={stats?.accepted ?? 0} tone="green" />
        <StatCard label="Waitlisted" value={stats?.waitlisted ?? 0} tone="blue" />
        <StatCard label="Rejected" value={stats?.rejected ?? 0} tone="red" />
      </div>

      <div className="flex gap-1 border-b">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              'border-b-2 -mb-px px-3 py-2 text-sm transition-colors',
              filter === f.id
                ? 'border-primary font-medium text-gray-12'
                : 'border-transparent text-gray-11 hover:text-gray-12',
            )}
          >
            {t(f.label)}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      )}

      {isError && (
        <div className="flex flex-col items-center gap-3 py-12">
          <p className="text-sm text-gray-11">
            {t('Could not load applications.')}
          </p>
          <Button variant="outline" onClick={() => refetch()}>
            {t('Try again')}
          </Button>
        </div>
      )}

      {!isLoading && !isError && applications.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-12 text-gray-11">
          <Users className="h-8 w-8" />
          <p className="text-sm">
            {t('No {{status}} applications.', { status: filter })}
          </p>
        </div>
      )}

      {!isLoading && applications.length > 0 && (
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full">
            <thead className="bg-gray-2 text-xs uppercase text-gray-11">
              <tr>
                <th className="px-4 py-2 text-left">{t('Applicant')}</th>
                <th className="px-4 py-2 text-left">{t('Business')}</th>
                <th className="px-4 py-2 text-left">{t('Applied')}</th>
                <th className="px-4 py-2 text-left">{t('Status')}</th>
                <th className="px-4 py-2 text-right">{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="cursor-pointer border-t hover:bg-gray-2"
                  onClick={() => setDetailDialog(app)}
                >
                  <td className="px-4 py-3">
                    <div className="font-medium">{app.fullName}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-11">
                      <Mail className="h-3 w-3" />
                      {app.email}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div>{app.businessName}</div>
                    <div className="text-xs text-gray-11">
                      {app.businessSize} {app.isAgency && '· Agency'}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-11">
                    {new Date(app.created).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="outline"
                      className={cn('capitalize', STATUS_STYLES[app.status])}
                    >
                      {app.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                    {app.status === 'pending' && (
                      <div className="flex justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={accept.isPending}
                          onClick={() => accept.mutate(app.id)}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={waitlist.isPending}
                          onClick={() => waitlist.mutate({ id: app.id })}
                        >
                          <Hourglass className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setRejectDialog(app);
                            setRejectNotes('');
                          }}
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail dialog */}
      <Dialog
        open={!!detailDialog}
        onOpenChange={() => setDetailDialog(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{detailDialog?.fullName}</DialogTitle>
            <DialogDescription>{detailDialog?.email}</DialogDescription>
          </DialogHeader>
          {detailDialog && (
            <div className="space-y-3 text-sm">
              <Field label="Business" value={detailDialog.businessName} />
              {detailDialog.businessWebsite && (
                <Field
                  label="Website"
                  value={detailDialog.businessWebsite}
                />
              )}
              <Field label="Size" value={detailDialog.businessSize} />
              <Field
                label="Is agency"
                value={detailDialog.isAgency ? 'Yes' : 'No'}
              />
              <Field
                label="Referral"
                value={detailDialog.referralSource ?? '—'}
              />
              <Field
                label="Tools"
                value={detailDialog.dailyTools.join(', ') || '—'}
              />
              <div>
                <div className="text-xs text-gray-11">{t('Intent')}</div>
                <p className="mt-1 whitespace-pre-wrap">
                  {detailDialog.automationIntent}
                </p>
              </div>
              {detailDialog.decisionNotes && (
                <Field
                  label="Decision notes"
                  value={detailDialog.decisionNotes}
                />
              )}
            </div>
          )}
          <DialogFooter />
        </DialogContent>
      </Dialog>

      {/* Reject dialog */}
      <Dialog
        open={!!rejectDialog}
        onOpenChange={() => setRejectDialog(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('Reject application?')}</DialogTitle>
            <DialogDescription>
              {rejectDialog?.email} {t('will not get beta access.')}
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder={t('Optional notes (internal)')}
            value={rejectNotes}
            onChange={(e) => setRejectNotes(e.target.value)}
            rows={3}
          />
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRejectDialog(null)}
            >
              {t('Cancel')}
            </Button>
            <Button
              disabled={reject.isPending}
              onClick={() => {
                if (!rejectDialog) return;
                reject.mutate(
                  { id: rejectDialog.id, notes: rejectNotes || undefined },
                  { onSuccess: () => setRejectDialog(null) },
                );
              }}
            >
              {t('Reject')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-11">{label}</div>
      <div>{value}</div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: 'yellow' | 'green' | 'blue' | 'red';
}) {
  const toneClass = {
    yellow: 'bg-yellow-2 text-yellow-11',
    green: 'bg-green-2 text-green-11',
    blue: 'bg-blue-2 text-blue-11',
    red: 'bg-red-2 text-red-11',
  }[tone];
  const icon = {
    yellow: Clock,
    green: CheckCircle2,
    blue: Hourglass,
    red: XCircle,
  }[tone];
  const Icon = icon;
  return (
    <div className={cn('rounded-lg border p-4', toneClass)}>
      <div className="flex items-center gap-2 text-xs uppercase">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
