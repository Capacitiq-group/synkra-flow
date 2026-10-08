import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { paystackWebhookController } from './paystack-webhook.controller';
import { synkraSubscriptionController } from './subscription.controller';

export const synkraBillingModule: FastifyPluginAsyncZod = async (app) => {
  await app.register(synkraSubscriptionController, { prefix: '/v1/synkra/subscription' });
  await app.register(paystackWebhookController, { prefix: '/v1/synkra/paystack' });
};
