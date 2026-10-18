INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags, "platformId")
SELECT 
    substr(md5(random()::text), 1, 21), NOW(), NOW(),
    'Shopify Order to Courier Guy',
    'Create a shipment and send an SMS when an order is paid.',
    'Triggered by a paid Shopify order. Creates a shipment in The Courier Guy, writes the tracking number back to Shopify, and sends an SMS.',
    'CUSTOM', 'PUBLISHED', 'Synkra',
    ARRAY['E-commerce'],
    ARRAY['@activepieces/piece-shopify', '@activepieces/piece-courier-guy', '@activepieces/piece-bulksms'],
    jsonb_build_array(jsonb_build_object('displayName', fv."displayName", 'version', fv.trigger)),
    '{"icon": "https://cdn.activepieces.com/pieces/shopify.png", "slots": {"storefront": {"default": "@activepieces/piece-shopify", "options": ["@activepieces/piece-shopify", "@activepieces/piece-woocommerce"]}, "courier": {"default": "@activepieces/piece-courier-guy", "options": ["@activepieces/piece-courier-guy", "@activepieces/piece-bob-go", "@activepieces/piece-droppa"]}, "sms": {"default": "@activepieces/piece-bulksms", "options": ["@activepieces/piece-bulksms", "@activepieces/piece-twilio"]}}}'::jsonb,
    '[]'::jsonb, 'EwKJJqAW0qg1wN38CQ5Bq'
FROM flow_version fv WHERE fv."displayName" = 'Shopify to Courier Guy' ORDER BY fv.created DESC LIMIT 1;

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags, "platformId")
SELECT 
    substr(md5(random()::text), 1, 21), NOW(), NOW(),
    'Ozow Instant EFT Confirmation',
    'Mark order paid and send receipt on instant EFT.',
    'Triggered by Ozow. Verifies the hash, marks the order as paid, sends a receipt via email.',
    'CUSTOM', 'PUBLISHED', 'Synkra',
    ARRAY['Payments'],
    ARRAY['@activepieces/piece-ozow', '@activepieces/piece-woocommerce', '@activepieces/piece-postmark'],
    jsonb_build_array(jsonb_build_object('displayName', fv."displayName", 'version', fv.trigger)),
    '{"icon": "https://cdn.activepieces.com/pieces/ozow.png", "slots": {"payment": {"default": "@activepieces/piece-ozow", "options": ["@activepieces/piece-ozow", "@activepieces/piece-payfast", "@activepieces/piece-paygate"]}, "email": {"default": "@activepieces/piece-postmark", "options": ["@activepieces/piece-postmark", "@activepieces/piece-gmail", "@activepieces/piece-smtp"]}}}'::jsonb,
    '[]'::jsonb, 'EwKJJqAW0qg1wN38CQ5Bq'
FROM flow_version fv WHERE fv."displayName" = 'Ozow Instant EFT' ORDER BY fv.created DESC LIMIT 1;

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags, "platformId")
SELECT 
    substr(md5(random()::text), 1, 21), NOW(), NOW(),
    'Form Lead to HubSpot',
    'Enrich leads from Google Forms and create deals.',
    'Triggered by Google Forms. Enriches with Apollo, dedupes in HubSpot, creates a deal, and sends an acknowledgement email.',
    'CUSTOM', 'PUBLISHED', 'Synkra',
    ARRAY['Sales'],
    ARRAY['@activepieces/piece-google-forms', '@activepieces/piece-apollo', '@activepieces/piece-hubspot', '@activepieces/piece-sendgrid'],
    jsonb_build_array(jsonb_build_object('displayName', fv."displayName", 'version', fv.trigger)),
    '{"icon": "https://cdn.activepieces.com/pieces/hubspot.png", "slots": {"form": {"default": "@activepieces/piece-google-forms", "options": ["@activepieces/piece-google-forms", "@activepieces/piece-typeform"]}, "crm": {"default": "@activepieces/piece-hubspot", "options": ["@activepieces/piece-hubspot", "@activepieces/piece-pipedrive", "@activepieces/piece-zoho-crm"]}}}'::jsonb,
    '[]'::jsonb, 'EwKJJqAW0qg1wN38CQ5Bq'
FROM flow_version fv WHERE fv."displayName" = 'Form Lead to HubSpot' ORDER BY fv.created DESC LIMIT 1;

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags, "platformId")
SELECT 
    substr(md5(random()::text), 1, 21), NOW(), NOW(),
    'Abandoned Cart Recovery',
    'Recover lost sales with email and SMS.',
    'Triggered by an abandoned Shopify checkout. Sends an email, then an SMS, and tags the customer.',
    'CUSTOM', 'PUBLISHED', 'Synkra',
    ARRAY['Marketing'],
    ARRAY['@activepieces/piece-shopify', '@activepieces/piece-mailgun', '@activepieces/piece-bulksms', '@activepieces/piece-mailchimp'],
    jsonb_build_array(jsonb_build_object('displayName', fv."displayName", 'version', fv.trigger)),
    '{"icon": "https://cdn.activepieces.com/pieces/shopify.png", "slots": {"storefront": {"default": "@activepieces/piece-shopify", "options": ["@activepieces/piece-shopify", "@activepieces/piece-woocommerce"]}, "email": {"default": "@activepieces/piece-mailgun", "options": ["@activepieces/piece-mailgun", "@activepieces/piece-gmail", "@activepieces/piece-smtp"]}}}'::jsonb,
    '[]'::jsonb, 'EwKJJqAW0qg1wN38CQ5Bq'
FROM flow_version fv WHERE fv."displayName" = 'Abandoned Cart Recovery' ORDER BY fv.created DESC LIMIT 1;

INSERT INTO template (id, created, updated, name, summary, description, type, status, author, categories, pieces, flows, metadata, tags, "platformId")
SELECT 
    substr(md5(random()::text), 1, 21), NOW(), NOW(),
    'Support Inbox Triage',
    'AI triage for your support email inbox.',
    'Triggered by a new IMAP email. Uses Claude to classify the issue, creates a Freshdesk ticket, and replies.',
    'CUSTOM', 'PUBLISHED', 'Synkra',
    ARRAY['Support'],
    ARRAY['@activepieces/piece-imap', '@activepieces/piece-claude', '@activepieces/piece-freshdesk', '@activepieces/piece-smtp'],
    jsonb_build_array(jsonb_build_object('displayName', fv."displayName", 'version', fv.trigger)),
    '{"icon": "https://cdn.activepieces.com/pieces/imap.png", "slots": {"email": {"default": "@activepieces/piece-imap", "options": ["@activepieces/piece-imap"]}, "ai": {"default": "@activepieces/piece-claude", "options": ["@activepieces/piece-claude", "@activepieces/piece-openai", "@activepieces/piece-gemini"]}, "helpdesk": {"default": "@activepieces/piece-freshdesk", "options": ["@activepieces/piece-freshdesk", "@activepieces/piece-zendesk"]}}}'::jsonb,
    '[]'::jsonb, 'EwKJJqAW0qg1wN38CQ5Bq'
FROM flow_version fv WHERE fv."displayName" = 'Support Inbox Triage' ORDER BY fv.created DESC LIMIT 1;
