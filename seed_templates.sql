INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags)
VALUES (
  substr(md5(random()::text), 1, 21), NOW(), NOW(),
  'Shopify Order to Courier Guy',
  'Create a shipment and send an SMS when an order is paid.',
  'Triggered by a paid Shopify order. Creates a shipment in The Courier Guy, writes the tracking number back to Shopify, and sends an SMS.',
  'CUSTOM', 'PUBLISHED', 'Synkra',
  ARRAY['E-commerce'],
  ARRAY['@activepieces/piece-shopify', '@activepieces/piece-courier-guy', '@activepieces/piece-bulksms'],
  '[{"displayName": "Shopify Order to Courier Guy", "version": {"trigger": {"name": "trigger", "type": "PIECE_TRIGGER", "settings": {"pieceName": "@activepieces/piece-shopify", "triggerName": "new_record", "input": {}}}, "actions": []}}]'::jsonb,
  '{"icon": "https://cdn.activepieces.com/pieces/shopify.png", "slots": {"storefront": {"default": "@activepieces/piece-shopify", "options": ["@activepieces/piece-shopify", "@activepieces/piece-woocommerce"]}, "courier": {"default": "@activepieces/piece-courier-guy", "options": ["@activepieces/piece-courier-guy", "@activepieces/piece-bob-go", "@activepieces/piece-droppa"]}, "sms": {"default": "@activepieces/piece-bulksms", "options": ["@activepieces/piece-bulksms", "@activepieces/piece-twilio"]}}}'::jsonb,
  '[]'::jsonb
);

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags)
VALUES (
  substr(md5(random()::text), 1, 21), NOW(), NOW(),
  'Ozow Instant EFT Confirmation',
  'Mark order paid and send receipt on instant EFT.',
  'Triggered by Ozow. Verifies the hash, marks the order as paid, sends a receipt via email, and logs it in Airtable.',
  'CUSTOM', 'PUBLISHED', 'Synkra',
  ARRAY['Payments'],
  ARRAY['@activepieces/piece-ozow', '@activepieces/piece-woocommerce', '@activepieces/piece-postmark'],
  '[{"displayName": "Ozow Instant EFT", "version": {"trigger": {"name": "trigger", "type": "PIECE_TRIGGER", "settings": {"pieceName": "@activepieces/piece-ozow", "triggerName": "payment_received", "input": {}}}, "actions": []}}]'::jsonb,
  '{"icon": "https://cdn.activepieces.com/pieces/ozow.png", "slots": {"payment": {"default": "@activepieces/piece-ozow", "options": ["@activepieces/piece-ozow", "@activepieces/piece-payfast", "@activepieces/piece-paygate"]}, "email": {"default": "@activepieces/piece-postmark", "options": ["@activepieces/piece-postmark", "@activepieces/piece-gmail", "@activepieces/piece-smtp"]}}}'::jsonb,
  '[]'::jsonb
);

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags)
VALUES (
  substr(md5(random()::text), 1, 21), NOW(), NOW(),
  'Form Lead to HubSpot',
  'Enrich leads from Google Forms and create deals.',
  'Triggered by Google Forms. Enriches with Apollo, dedupes in HubSpot, creates a deal, and sends an acknowledgement email.',
  'CUSTOM', 'PUBLISHED', 'Synkra',
  ARRAY['Sales'],
  ARRAY['@activepieces/piece-google-forms', '@activepieces/piece-hubspot', '@activepieces/piece-sendgrid'],
  '[{"displayName": "Form Lead to HubSpot", "version": {"trigger": {"name": "trigger", "type": "PIECE_TRIGGER", "settings": {"pieceName": "@activepieces/piece-google-forms", "triggerName": "new_response", "input": {}}}, "actions": []}}]'::jsonb,
  '{"icon": "https://cdn.activepieces.com/pieces/hubspot.png", "slots": {"form": {"default": "@activepieces/piece-google-forms", "options": ["@activepieces/piece-google-forms", "@activepieces/piece-typeform"]}, "crm": {"default": "@activepieces/piece-hubspot", "options": ["@activepieces/piece-hubspot", "@activepieces/piece-pipedrive", "@activepieces/piece-zoho-crm"]}}}'::jsonb,
  '[]'::jsonb
);
