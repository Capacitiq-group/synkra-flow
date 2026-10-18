const { AppDataSource } = require('./dist/src/app/database/database-connection');
const { TemplateEntity } = require('./dist/src/app/template/template.entity');
const { apId } = require('@activepieces/core-utils');

const TEMPLATES = [
  {
    name: "Shopify Order to Courier Guy",
    summary: "Create a shipment and send an SMS when an order is paid.",
    description: "Triggered by a paid Shopify order. Creates a shipment in The Courier Guy, writes the tracking number back to Shopify, and sends an SMS to the customer.",
    icon: "https://cdn.activepieces.com/pieces/shopify.png",
    category: "E-commerce",
    slots: {
      storefront: { default: "@activepieces/piece-shopify", options: ["@activepieces/piece-shopify", "@activepieces/piece-woocommerce"] },
      courier: { default: "@activepieces/piece-courier-guy", options: ["@activepieces/piece-courier-guy", "@activepieces/piece-bob-go", "@activepieces/piece-droppa"] },
      sms: { default: "@activepieces/piece-bulksms", options: ["@activepieces/piece-bulksms", "@activepieces/piece-twilio"] }
    }
  },
  {
    name: "Ozow Instant EFT Confirmation",
    summary: "Mark order paid and send receipt on instant EFT.",
    description: "Triggered by Ozow. Verifies the hash, marks the WooCommerce order as paid, sends a receipt via email, and logs it in Airtable.",
    icon: "https://cdn.activepieces.com/pieces/ozow.png",
    category: "Payments",
    slots: {
      payment: { default: "@activepieces/piece-ozow", options: ["@activepieces/piece-ozow", "@activepieces/piece-payfast", "@activepieces/piece-paygate"] },
      email: { default: "@activepieces/piece-postmark", options: ["@activepieces/piece-postmark", "@activepieces/piece-gmail", "@activepieces/piece-smtp"] }
    }
  },
  {
    name: "Form Lead to HubSpot",
    summary: "Enrich leads from Google Forms and create deals.",
    description: "Triggered by Google Forms. Enriches with Apollo, dedupes in HubSpot, creates a deal, and sends an acknowledgement email.",
    icon: "https://cdn.activepieces.com/pieces/hubspot.png",
    category: "Sales",
    slots: {
      form: { default: "@activepieces/piece-google-forms", options: ["@activepieces/piece-google-forms", "@activepieces/piece-typeform"] },
      crm: { default: "@activepieces/piece-hubspot", options: ["@activepieces/piece-hubspot", "@activepieces/piece-pipedrive", "@activepieces/piece-zoho-crm"] }
    }
  }
];

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected.");

    const repo = AppDataSource.getRepository(TemplateEntity);

    for (const t of TEMPLATES) {
      // Create a dummy AP flow payload so the template is valid
      const flowPayload = {
        displayName: t.name,
        trigger: { name: "trigger", type: "PIECE_TRIGGER", settings: { pieceName: t.slots[Object.keys(t.slots)[0]].default, triggerName: "new_record", input: {} } },
        actions: []
      };

      const template = repo.create({
        id: apId(),
        name: t.name,
        summary: t.summary,
        description: t.description,
        type: "CUSTOM", 
        status: "PUBLISHED",
        author: "Synkra",
        categories: [t.category],
        pieces: Object.values(t.slots).map((s) => s.default),
        metadata: { icon: t.icon, slots: t.slots },
        flows: [{ displayName: t.name, version: flowPayload }],
      });

      await repo.save(template);
      console.log(`✅ Seeded template: ${t.name}`);
    }

    console.log("🎉 All templates seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed to seed:", err);
    process.exit(1);
  }
}

seed();
