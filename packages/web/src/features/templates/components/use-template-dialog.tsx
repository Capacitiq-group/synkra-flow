import { isNil } from '@activepieces/core-utils';
import {
  PopulatedFlow,
  Template,
  TemplateTelemetryEventType,
  TemplateType,
  UncategorizedFolderId,
} from '@activepieces/shared';
import { useMutation } from '@tanstack/react-query';
import { t } from 'i18next';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { flowHooks } from '@/features/flows';
import { foldersApi, foldersHooks } from '@/features/folders';
import { getProjectName, projectCollectionUtils } from '@/features/projects';
import { ApProjectDisplay } from '@/features/projects/components/ap-project-display';
import { templatesTelemetryApi } from '@/features/templates';
import { authenticationSession } from '@/lib/authentication-session';

type UseTemplateDialogProps = {
  template: Template;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const UseTemplateDialog = ({
  template,
  open,
  onOpenChange,
}: UseTemplateDialogProps) => {
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [selectedFolderId, setSelectedFolderId] = useState<string>('');
  // [SYNKRA] State for swappable platform slots
  const [selectedSlots, setSelectedSlots] = useState<Record<string, string>>({});

  useEffect(() => {
    const slots = (template.metadata as any)?.slots || {};
    const initialSelections: Record<string, string> = {};
    Object.keys(slots).forEach(key => {
      initialSelections[key] = slots[key].default;
    });
    setSelectedSlots(initialSelections);
  }, [template]);

  const { data: projects } = projectCollectionUtils.useAll();
  const { folders } = foldersHooks.useFolders();

  useEffect(() => {
    if (open) {
      const currentProjectId = authenticationSession.getProjectId();
      if (currentProjectId) {
        setSelectedProjectId(currentProjectId);
      } else if (projects && projects.length > 0) {
        setSelectedProjectId(projects[0].id);
      }
      setSelectedFolderId(UncategorizedFolderId);
    }
  }, [open, projects]);

  const { mutate: createFlow, isPending } = useMutation<
    PopulatedFlow[],
    Error,
    { projectId: string; folderId: string }
  >({
    mutationFn: async ({ projectId, folderId }) => {
      const flows = template.flows || [];
      const hasMultipleFlows = flows.length > 1;

      let folderName: string | undefined;

      if (hasMultipleFlows) {
        const newFolder = await foldersApi.create({
          displayName: template.name,
          projectId: projectId,
        });
        folderName = newFolder.displayName;
      } else if (!isNil(folderId) && folderId !== UncategorizedFolderId) {
        const folder = await foldersApi.get(folderId);
        folderName = folder.displayName;
      }

      // [SYNKRA] Deep clone template to rewrite pieces based on selected slots
      const modifiedTemplate = JSON.parse(JSON.stringify(template));
      const slots = (modifiedTemplate.metadata as any)?.slots || {};
      
      if (Object.keys(slots).length > 0 && modifiedTemplate.flows) {
        modifiedTemplate.flows.forEach((flow: any) => {
          const version = flow.version;
          if (!version) return;
          
          // Helper to swap piece names
          const swapPiece = (step: any) => {
            if (!step || !step.settings) return;
            Object.keys(slots).forEach(slotKey => {
              const slotConfig = slots[slotKey];
              const selectedPiece = selectedSlots[slotKey];
              // If the current piece is the default one, swap it with the user's choice
              if (step.settings.pieceName === slotConfig.default && selectedPiece) {
                step.settings.pieceName = selectedPiece;
                step.displayName = step.displayName.replace('Gmail', selectedPiece.split('/').pop()); // Optional: clean up display name
              }
            });
          };

          swapPiece(version.trigger);
          version.actions?.forEach(swapPiece);
        });
      }

      return await flowHooks.importFlowsFromTemplates({
        templates: [modifiedTemplate],
        projectId,
        folderName,
      });
    },
    onSuccess: (flows) => {
      onOpenChange(false);
      if (flows.length === 1) {
        toast.success(t('Flow created successfully'));
        navigate(`/flows/${flows[0].id}`);
      } else {
        toast.success(
          t('{count} flows created successfully in a new folder', {
            count: flows.length,
          }),
        );
        navigate(`/flows`);
      }
    },
    onError: (error) => {
      toast.error(t('Failed to create flow from template'));
      console.error('Error creating flow:', error);
    },
  });

  const handleConfirmUseTemplate = () => {
    if (!selectedProjectId) {
      toast.error(t('Please select a project'));
      return;
    }
    createFlow({ projectId: selectedProjectId, folderId: selectedFolderId });

    const userId = authenticationSession.getCurrentUserId();

    if (template.type === TemplateType.OFFICIAL && userId) {
      templatesTelemetryApi.sendEvent({
        eventType: TemplateTelemetryEventType.INSTALL,
        templateId: template.id,
        userId,
      });
    }
  };

  const flowCount = template.flows?.length || 0;
  const hasMultipleFlows = flowCount > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('Use Template')}</DialogTitle>
          <DialogDescription>
            {hasMultipleFlows
              ? t(
                  'This template includes {count} flows with all dependencies. A new folder will be created to organize them.',
                  { count: flowCount },
                )
              : t(
                  'Select the project and folder where you want to use this template.',
                )}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="project">{t('Project')}</Label>
            <Select
              value={selectedProjectId}
              onValueChange={setSelectedProjectId}
            >
              <SelectTrigger id="project">
                <SelectValue placeholder={t('Select a project')} />
              </SelectTrigger>
              <SelectContent>
                {projects?.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    <ApProjectDisplay
                      title={getProjectName(project)}
                      icon={project.icon}
                      projectType={project.type}
                    />
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {!hasMultipleFlows && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="folder">{t('Folder')}</Label>
              <Select
                value={selectedFolderId}
                onValueChange={setSelectedFolderId}
              >
                <SelectTrigger id="folder">
                  <SelectValue placeholder={t('Select a folder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={UncategorizedFolderId}>
                    {t('Uncategorized')}
                  </SelectItem>
                  {folders?.map((folder) => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        {/* [SYNKRA] Render Slot Swapper UI */}
        {Object.keys((template.metadata as any)?.slots || {}).map((slotKey) => {
          const slotConfig = (template.metadata as any).slots[slotKey];
          return (
            <div className="flex flex-col gap-2" key={slotKey}>
              <Label htmlFor={slotKey} className="capitalize">{t('Select ' + slotKey.replace('_', ' '))}</Label>
              <Select
                value={selectedSlots[slotKey]}
                onValueChange={(val) => setSelectedSlots(prev => ({ ...prev, [slotKey]: val }))}
              >
                <SelectTrigger id={slotKey}>
                  <SelectValue placeholder={t('Select a platform')} />
                </SelectTrigger>
                <SelectContent>
                  {slotConfig.options.map((piece: string) => {
                    const pieceName = piece.split('/').pop()?.replace('piece-', '');
                    return (
                      <SelectItem key={piece} value={piece}>
                        <div className="flex items-center gap-2">
                          <img 
                            src={`https://cdn.activepieces.com/pieces/${pieceName}.png`} 
                            alt={pieceName} 
                            className="w-5 h-5 object-contain"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                          <span className="capitalize">{pieceName?.replace(/-/g, ' ')}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          );
        })}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            {t('Cancel')}
          </Button>
          <Button
            onClick={handleConfirmUseTemplate}
            loading={isPending}
            disabled={!selectedProjectId}
          >
            {t('Confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
