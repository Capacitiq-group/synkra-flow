import { FastifyBaseLogger } from 'fastify';
import nodemailer, { Transporter } from 'nodemailer';
import { system } from '../../helper/system/system';
import { AppSystemProp } from '../../helper/system/system-props';

const BRAND = '#5DD62C';
let cached: Transporter | null = null;

function getTransport(log: FastifyBaseLogger): Transporter | null {
  if (cached) return cached;
  const host = system.get(AppSystemProp.SMTP_HOST);
  const port = system.get(AppSystemProp.SMTP_PORT);
  const user = system.get(AppSystemProp.SMTP_USERNAME);
  const pass = system.get(AppSystemProp.SMTP_PASSWORD);
  if (!host || !port || !user || !pass) return null;
  cached = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
  return cached;
}

function shell(title: string, body: string, cta?: { label: string; url: string }): string {
  const ctaHtml = cta
    ? `<p style="margin:28px 0"><a href="${cta.url}" style="display:inline-block;padding:12px 24px;background:${BRAND};color:#000;text-decoration:none;border-radius:6px;font-weight:600">${cta.label}</a></p>`
    : '';
  return `<!doctype html><html><body style="margin:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px"><tr><td align="center">
<table width="100%" style="max-width:560px;background:#fff;border-radius:12px;padding:32px"><tr><td>
<h1 style="margin:0 0 16px;font-size:22px;color:#0a0a0a;line-height:1.3">${title}</h1>
${body}
${ctaHtml}
<hr style="border:none;border-top:1px solid #eee;margin:32px 0 16px"/>
<p style="margin:0;font-size:12px;color:#888;line-height:1.6">Synkra Flow · <a href="https://synkra.co.za" style="color:#888">synkra.co.za</a> · hello@synkra.co.za</p>
</td></tr></table>
</td></tr></table>
</body></html>`;
}

async function send(params: {
  to: string;
  subject: string;
  html: string;
  log: FastifyBaseLogger;
}): Promise<void> {
  // Shadow-user guard (from Chat integration spec)
  if (params.to.endsWith('@shadow.synkra.internal')) {
    params.log.debug({ to: params.to }, 'beta email skipped (shadow user)');
    return;
  }

  // Try Resend HTTP API first
  const resendKey = system.get(AppSystemProp.RESEND_API_KEY);
  if (resendKey) {
    try {
      const from = system.get(AppSystemProp.RESEND_FROM_EMAIL) ?? 'noreply@synkra.co.za';
      const fromName = system.get(AppSystemProp.RESEND_FROM_NAME) ?? 'Synkra Flow';
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `${fromName} <${from}>`,
          to: [params.to],
          subject: params.subject,
          html: params.html,
        }),
      });
      if (res.ok) {
        params.log.info({ to: params.to, subject: params.subject }, 'beta email sent via resend');
        return;
      }
      params.log.warn({ status: res.status }, 'resend failed, trying SMTP');
    } catch (err) {
      params.log.warn({ err }, 'resend threw, trying SMTP');
    }
  }

  // Fallback to SMTP
  const transport = getTransport(params.log);
  if (!transport) {
    params.log.info({ to: params.to, subject: params.subject }, 'beta email logged (no SMTP or Resend)');
    return;
  }
  try {
    await transport.sendMail({
      from: { name: 'Synkra Flow', address: 'noreply@synkra.co.za' },
      to: params.to,
      subject: params.subject,
      html: params.html,
    });
    params.log.info({ to: params.to, subject: params.subject }, 'beta email sent via SMTP');
  } catch (err) {
    params.log.error({ err, to: params.to }, 'beta email failed');
  }
}

export const betaEmailsService = (log: FastifyBaseLogger) => ({
  sendApplicationReceived(to: string, fullName: string, businessName: string) {
    void send({
      to,
      log,
      subject: 'We have received your Synkra Flow beta application',
      html: shell(
        'Application received',
        `
<p style="color:#333;line-height:1.7;margin:0 0 16px">Hello ${fullName},</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Thank you for applying to the Synkra Flow beta. Your application for <strong>${businessName}</strong> has been received.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Because we are only accepting twenty businesses in this first round, we review every application individually. This means it may take up to five business days before you hear back from us.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">We will contact you at this email address with our decision. If you would like to add anything to your application, reply to this email and your message will go directly to the review team.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Thank you for your interest in Synkra Flow.</p>
<p style="color:#333;line-height:1.7;margin:0">The Synkra team</p>
        `,
      ),
    });
  },

  sendApplicationAccepted(to: string, fullName: string, businessName: string) {
    void send({
      to,
      log,
      subject: 'Welcome to the Synkra Flow beta',
      html: shell(
        'Your application has been accepted',
        `
<p style="color:#333;line-height:1.7;margin:0 0 16px">Hello ${fullName},</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Your application for <strong>${businessName}</strong> has been accepted. Welcome to the Synkra Flow beta.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">You can sign in at any time to begin. Your workspace will be ready the moment you log in.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">If you have questions along the way, reply to this email and your message will come straight to our team. We are here through the entire beta period.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Thank you for joining the first round.</p>
<p style="color:#333;line-height:1.7;margin:0">The Synkra team</p>
        `,
        { label: 'Sign in to Synkra Flow', url: 'https://flow.synkra.co.za/sign-in' },
      ),
    });
  },

  sendApplicationRejected(to: string, fullName: string, businessName: string) {
    void send({
      to,
      log,
      subject: 'Update on your Synkra Flow beta application',
      html: shell(
        'Update on your application',
        `
<p style="color:#333;line-height:1.7;margin:0 0 16px">Hello ${fullName},</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Thank you for your interest in the Synkra Flow beta. We appreciate the time you took to apply.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">After reviewing your application for <strong>${businessName}</strong>, we have decided not to include you in this first round of beta. This is not a reflection of the quality of your business. We had more qualified applications than available places, and we had to make difficult choices to keep the group small enough for us to support properly.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">We will run additional beta rounds in the coming months. If you would like to be notified when the next round opens, reply to this email and let us know. We will add you to the notification list.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Thank you again for your interest.</p>
<p style="color:#333;line-height:1.7;margin:0">The Synkra team</p>
        `,
      ),
    });
  },

  sendAccessGranted(to: string, fullName: string) {
    void send({
      to,
      log,
      subject: 'Your Synkra Flow beta account is ready',
      html: shell(
        'Your beta account is ready',
        `
<p style="color:#333;line-height:1.7;margin:0 0 16px">Hello ${fullName},</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Your Synkra Flow beta account is ready. Sign in to set up your workspace and start building your first workflow.</p>
<p style="color:#333;line-height:1.7;margin:0 0 16px">Everything is self service, so you can move at your own pace. If you need help, reply to this email and your message will come straight to our team.</p>
<p style="color:#333;line-height:1.7;margin:0">The Synkra team</p>
        `,
        { label: 'Open Synkra Flow', url: 'https://flow.synkra.co.za/sign-up' },
      ),
    });
  },
});
