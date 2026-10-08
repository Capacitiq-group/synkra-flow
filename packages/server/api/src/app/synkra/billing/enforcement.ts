import { ActivepiecesError, ErrorCode, PlatformUsageMetric } from '@activepieces/core-utils'
import { FlowStatus, PlatformId, ProjectType, RunEnvironment } from '@activepieces/shared'
import { FastifyBaseLogger } from 'fastify'
import { flowRepo } from '../../flows/flow/flow.repo'
import { projectRepo } from '../../project/project.repo'
import { userRepo } from '../../user/user-service'
import { getPlanLimits } from '@activepieces/shared'
import { synkraSubscriptionService } from './subscription.service'
import { platformService } from '../../platform/platform.service'

/**
 * Synkra tier enforcement.
 *
 * Reads the platform owner's subscription and throws QUOTA_EXCEEDED
 * whenever a paid action would exceed their tier.
 *
 * Called from:
 *   - flow.service.ts  (publish → checkActiveWorkflowLimit)
 *   - platform-project-service.ts  (create → checkProjectLimit)
 *   - user-invitation.service.ts  (invite → checkSeatLimit)
 */
export const synkraEnforcement = (log: FastifyBaseLogger) => ({
  async checkActiveWorkflowLimit(projectId: string): Promise<void> {
    const ownerUserId = await resolvePlatformOwnerFromProject(projectId, log)
    if (!ownerUserId) return

    const sub = await synkraSubscriptionService(log).getOrCreateForUser(ownerUserId)
    const plan = getPlanLimits(sub.tier)

    const activeCount = await flowRepo().count({
      where: { projectId, status: FlowStatus.ENABLED },
    })

    if (activeCount >= plan.activeWorkflows) {
      throw new ActivepiecesError({
        code: ErrorCode.QUOTA_EXCEEDED,
        params: {
          metric: PlatformUsageMetric.ACTIVE_FLOWS,
          message: `Your ${plan.name} plan allows ${plan.activeWorkflows} active workflows. You currently have ${activeCount}.`,
          usage: activeCount,
          limit: plan.activeWorkflows,
        },
      })
    }
  },

  async checkProjectLimit(platformId: string): Promise<void> {
    const ownerUserId = await resolvePlatformOwner(platformId, log)
    if (!ownerUserId) return

    const sub = await synkraSubscriptionService(log).getOrCreateForUser(ownerUserId)
    const plan = getPlanLimits(sub.tier)

    const projectCount = await projectRepo().count({
      where: { platformId, type: ProjectType.TEAM },
    })

    if (projectCount >= plan.workspaces) {
      throw new ActivepiecesError({
        code: ErrorCode.QUOTA_EXCEEDED,
        params: {
          metric: PlatformUsageMetric.PROJECTS,
          message: `Your ${plan.name} plan allows ${plan.workspaces} workspace${plan.workspaces === 1 ? '' : 's'}. You currently have ${projectCount}.`,
          usage: projectCount,
          limit: plan.workspaces,
        },
      })
    }
  },

  async checkSeatLimit(platformId: string): Promise<void> {
    const ownerUserId = await resolvePlatformOwner(platformId, log)
    if (!ownerUserId) return

    const sub = await synkraSubscriptionService(log).getOrCreateForUser(ownerUserId)
    const plan = getPlanLimits(sub.tier)

    const userCount = await userRepo().count({
      where: { platformId },
    })

    if (userCount >= plan.seats) {
      throw new ActivepiecesError({
        code: ErrorCode.QUOTA_EXCEEDED,
        params: {
          metric: PlatformUsageMetric.USERS,
          message: `Your ${plan.name} plan allows ${plan.seats} seat${plan.seats === 1 ? '' : 's'}. You currently have ${userCount}.`,
          usage: userCount,
          limit: plan.seats,
        },
      })
    }
  },
})

async function resolvePlatformOwner(platformId: PlatformId, log: FastifyBaseLogger): Promise<string | null> {
  try {
    const platform = await platformService(log).getOne(platformId)
    return platform?.ownerId ?? null
  } catch {
    log.warn({ platformId }, 'synkra: could not resolve platform owner for enforcement')
    return null
  }
}

async function resolvePlatformOwnerFromProject(projectId: string, log: FastifyBaseLogger): Promise<string | null> {
  try {
    const project = await projectRepo().findOneBy({ id: projectId })
    if (!project) return null
    return await resolvePlatformOwner(project.platformId as PlatformId, log)
  } catch {
    return null
  }
}
