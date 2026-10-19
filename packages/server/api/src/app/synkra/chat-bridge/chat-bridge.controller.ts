import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { repoFactory } from '../../core/db/repo-factory';
import { PlatformEntity } from '../../platform/platform.entity';
import { ProjectEntity } from '../../project/project-entity'; // Fixed path

const platformRepo = repoFactory<any>(PlatformEntity);
const projectRepo = repoFactory<any>(ProjectEntity);

const CHAT_PLATFORM_ID = 'synkra_chat_master_platform';

export const chatBridgeController: FastifyPluginAsyncZod = async (app) => {
  // 1. Silent Provisioning endpoint
  app.post('/provision', {
    config: { security: securityAccess.public() },
    schema: {
      body: z.object({
        chatUserId: z.string(),
        email: z.string(),
        name: z.string(),
      }),
    },
  }, async (req, reply) => {
    const { chatUserId, email, name } = req.body;

    // Ensure the master Chat Platform exists
    let platform = await platformRepo().findOneBy({ id: CHAT_PLATFORM_ID });
    if (!platform) {
      platform = await platformRepo().save({
        id: CHAT_PLATFORM_ID,
        name: 'Synkra Chat',
        ownerId: 'system_chat_owner',
        primaryColor: '#5DD62C',
        logoIconUrl: '',
        fullLogoUrl: '',
        favIconUrl: '',
      });
    }

    // Check if a project already exists for this Chat User
    const projectId = `chat_usr_${chatUserId}`;
    let project = await projectRepo().findOneBy({ id: projectId });
    
    if (!project) {
      project = await projectRepo().save({
        id: projectId,
        displayName: name || `Chat User ${chatUserId}`,
        platformId: CHAT_PLATFORM_ID,
        ownerId: 'system_chat_owner',
        type: 'TEAM',
      });
      app.log.info({ chatUserId, projectId }, '[chat-bridge] Provisioned new shadow workspace');
    }

    return { success: true, projectId };
  });

  // 2. The Execute Endpoint (For Tool Calling)
  app.post('/execute', {
    config: { security: securityAccess.public() },
    schema: {
      body: z.object({
        chatUserId: z.string(),
        toolName: z.string(),
        params: z.record(z.string(), z.any()), // Fixed Zod syntax
      }),
    },
  }, async (req, reply) => {
    const { chatUserId, toolName, params } = req.body;
    const projectId = `chat_usr_${chatUserId}`;
    
    app.log.info({ projectId, toolName, params }, '[chat-bridge] Executing tool for Chat user');
    
    return { success: true, message: `Executed ${toolName} successfully` };
  });
};
