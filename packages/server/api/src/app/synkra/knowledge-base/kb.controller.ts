import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { securityAccess } from '../../core/security/authorization/fastify-security';
import { PrincipalType, getPlanLimits } from '@activepieces/shared';
import { repoFactory } from '../../core/db/repo-factory';
import { SynkraKbDocumentEntity } from './kb-document.entity';
import { apId } from '@activepieces/core-utils';
import { platformService } from '../../platform/platform.service';
import { synkraSubscriptionService } from '../billing/subscription.service';

const repo = repoFactory<any>(SynkraKbDocumentEntity);

const ALLOWED_EXTENSIONS = ['.pdf', '.txt', '.md', '.docx'];
const BLOCKED_EXTENSIONS = ['.zip', '.exe', '.sh', '.js', '.bat', '.cmd', '.msi'];

// Magic bytes (top of document check)
const MAGIC_BYTES = {
  PDF: Buffer.from([0x25, 0x50, 0x44, 0x46]), // %PDF
  ZIP: Buffer.from([0x50, 0x4B, 0x03, 0x04]), // PK..
};

export const synkraKbController: FastifyPluginAsyncZod = async (app) => {
  app.post('/upload', {
    config: { security: securityAccess.unscoped([PrincipalType.USER]) },
    schema: {
      body: z.object({
        filename: z.string(),
        base64Content: z.string(),
      }),
    },
  }, async (req, reply) => {
    const platformId = (req.principal as any).platform?.id;
    const { filename, base64Content } = req.body;

    // 1. Extension check
    const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
    if (BLOCKED_EXTENSIONS.includes(ext)) {
      return reply.status(400).send({ error: `Security: ${ext} files are strictly forbidden.` });
    }
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return reply.status(400).send({ error: `Only ${ALLOWED_EXTENSIONS.join(', ')} are allowed.` });
    }

    // 2. Decode and validate Magic Bytes
    const buffer = Buffer.from(base64Content, 'base64');
    
    // DOCX is a ZIP file under the hood, so we check if it's a ZIP, but since ext is .docx, we allow it.
    // But if ext is .pdf, it MUST have PDF magic bytes.
    if (ext === '.pdf' && !buffer.subarray(0, 4).equals(MAGIC_BYTES.PDF)) {
      return reply.status(400).send({ error: 'Security: File content does not match PDF format.' });
    }
    if (ext === '.docx' && !buffer.subarray(0, 4).equals(MAGIC_BYTES.ZIP)) {
      return reply.status(400).send({ error: 'Security: File content does not match DOCX format.' });
    }

    // 3. Check Limits
    const platform = await platformService(app.log).getOne(platformId);
    if (!platform?.ownerId) return reply.status(400).send({ error: 'No platform owner' });
    
    const sub = await synkraSubscriptionService(app.log).getOrCreateForUser(platform.ownerId);
    const plan = getPlanLimits(sub.tier);
    const docsCount = await repo().countBy({ platformId });
    
    if (docsCount >= plan.kbDocsLimit) {
      return reply.status(403).send({ error: `Plan limit reached: Max ${plan.kbDocsLimit} documents. Upgrade to add more.` });
    }

    // Save (In production, pass to AI to extract text here)
    const doc = await repo().save({
      id: apId(),
      platformId,
      filename,
      mimeType: ext === '.pdf' ? 'application/pdf' : 'application/octet-stream',
      sizeBytes: buffer.length,
      status: 'ready',
      extractedText: 'Extraction pending API setup...', // Placeholder
    });

    return { success: true, document: doc };
  });

  app.get('/', { config: { security: securityAccess.unscoped([PrincipalType.USER]) } }, async (req) => {
    const platformId = (req.principal as any).platform?.id;
    const docs = await repo().findBy({ platformId });
    return { documents: docs };
  });
};
