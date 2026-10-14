import { ApiKeyResponseWithoutValue } from '@activepieces/shared';
import { t } from 'i18next';
import { Key, MoreHorizontal, Trash } from 'lucide-react';
import { NewApiKeyDialog } from '@/app/routes/platform/security/api-keys/new-api-key-dialog';
import { AnimatedIconButton } from '@/components/custom/animated-icon-button';
import { ConfirmationDeleteDialog } from '@/components/custom/delete-dialog';
import { PlusIcon } from '@/components/icons/plus';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { SkeletonList } from '@/components/ui/skeleton';
import { internalErrorToast } from '@/components/ui/sonner';
import { apiKeyApi, apiKeyQueries } from '@/features/platform-admin';
import { formatUtils } from '@/lib/format-utils';
import { SectionHeader } from './shell';

export function DeveloperApiPage() {
  const { data, isLoading, refetch } = apiKeyQueries.useApiKeys();
  const keys: ApiKeyResponseWithoutValue[] = data?.data ?? [];

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title={t('API Keys')}
        description={t(
          'Keys for programmatic access to your Synkra Flow workspace. Full key is shown once at creation — store it securely.',
        )}
      />

      <div className="flex justify-end">
        <NewApiKeyDialog onCreate={() => refetch()}>
          <AnimatedIconButton icon={PlusIcon} iconSize={16} size="sm">
            {t('New API Key')}
          </AnimatedIconButton>
        </NewApiKeyDialog>
      </div>

      {isLoading && <SkeletonList />}

      {!isLoading && keys.length === 0 && (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-10 text-gray-11">
          <Key className="h-8 w-8" />
          <p className="text-sm">{t('No API keys yet.')}</p>
        </div>
      )}

      {!isLoading && keys.length > 0 && (
        <div className="flex flex-col gap-2">
          {keys.map((key) => (
            <Item key={key.id} variant="outline">
              <ItemMedia variant="icon">
                <Key className="h-4 w-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{key.displayName}</ItemTitle>
                <ItemDescription>
                  {key.truncatedValue} ·{' '}
                  {key.lastUsedAt
                    ? `${t('Last used')}: ${formatUtils.formatDate(
                        new Date(key.lastUsedAt),
                      )}`
                    : t('Never used')}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ConfirmationDeleteDialog
                      title={t('Delete API key')}
                      message={t(
                        'Any applications using this key will lose access immediately.',
                      )}
                      entityName={key.displayName}
                      mutationFn={async () => {
                        try {
                          await apiKeyApi.delete(key.id);
                          await refetch();
                        } catch (e) {
                          internalErrorToast();
                          throw e;
                        }
                      }}
                    >
                      <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        className="text-destructive"
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        {t('Delete')}
                      </DropdownMenuItem>
                    </ConfirmationDeleteDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ItemActions>
            </Item>
          ))}
        </div>
      )}
    </div>
  );
}
