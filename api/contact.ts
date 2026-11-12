import { Resend } from 'resend';

export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface ContactPayload {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export function validateContactPayload(rawBody: unknown): {
  valid: boolean;
  error?: string;
  data?: ContactPayload;
} {
  let body: Record<string, unknown> | null = null;

  if (typeof rawBody === 'string') {
    try {
      const parsed = JSON.parse(rawBody);
      if (parsed && typeof parsed === 'object') {
        body = parsed as Record<string, unknown>;
      }
    } catch {
      return { valid: false, error: 'Invalid JSON request payload.' };
    }
  } else if (rawBody && typeof rawBody === 'object') {
    body = rawBody as Record<string, unknown>;
  }

  if (!body) {
    return { valid: false, error: 'Invalid request payload.' };
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !service || !budget || !message) {
    return { valid: false, error: 'All inquiry fields (including budget with currency) are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return { valid: false, error: 'Please provide a valid work email address.' };
  }

  if (name.length > 120 || service.length > 120 || budget.length > 120 || message.length > 4000) {
    return { valid: false, error: 'Input exceeds maximum allowed length.' };
  }

  return {
    valid: true,
    data: { name, email, service, budget, message },
  };
}

export default async function handler(req: any, res: any) {
  res.setHeader?.('Cache-Control', 'no-store, max-age=0');

  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed',
      message: 'Method not allowed. Use POST.',
    });
  }

  const validation = validateContactPayload(req.body);
  if (!validation.valid || !validation.data) {
    return res.status(400).json({
      ok: false,
      code: 'VALIDATION_ERROR',
      message: validation.error || 'Invalid inquiry submission.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn('[api/contact] RESEND_API_KEY is missing from environment variables.');
    return res.status(503).json({
      ok: false,
      code: 'MAILER_UNCONFIGURED',
      message:
        'Automated email relay is initializing. Please dispatch your pre-filled brief directly via WhatsApp or Email below.',
    });
  }

  const { name, email, service, budget, message } = validation.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br/>');

  const fromAddress =
    process.env.RESEND_FROM_EMAIL?.trim() || 'CGT Inquiries <onboarding@resend.dev>';
  const primaryRecipient =
    process.env.RESEND_TO_EMAIL?.trim() || 'firozshaik6699@gmail.com';
  const fallbackRecipient = 'continentalgrandtechnologies@gmail.com';

  const buildPayload = (recipient: string) => ({
    from: fromAddress,
    to: [recipient],
    replyTo: email,
    subject: `[cgtofficial.com] New Project Inquiry: ${name} — ${service}`,
    html: `
      <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 580px; color: #111; line-height: 1.6;">
        <h2 style="margin-bottom: 16px; color: #0a0a0a;">New Engineering Inquiry via cgtofficial.com</h2>
        <p style="margin: 6px 0;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin: 6px 0;"><strong>Work Email:</strong> ${safeEmail}</p>
        <p style="margin: 6px 0;"><strong>Capability Required:</strong> ${safeService}</p>
        <p style="margin: 6px 0;"><strong>Estimated Budget:</strong> ${safeBudget}</p>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
        <p style="margin: 6px 0;"><strong>Project Scope &amp; Timeline:</strong><br/>${safeMessage}</p>
      </div>
    `,
  });

  try {
    const resend = new Resend(apiKey);
    let result = await resend.emails.send(buildPayload(primaryRecipient));

    if (
      result.error &&
      primaryRecipient !== fallbackRecipient &&
      String(result.error.message || '').toLowerCase().includes('only send testing emails')
    ) {
      result = await resend.emails.send(buildPayload(fallbackRecipient));
    }

    if (result.error) {
      console.error('[api/contact] Resend API error:', result.error);
      return res.status(502).json({
        ok: false,
        code: 'MAILER_ERROR',
        message: 'Email relay rejected the request. Please use Instant Direct Dispatch below.',
      });
    }

    return res.status(200).json({ ok: true, id: result.data?.id });
  } catch (error) {
    console.error('[api/contact] Unexpected exception:', error);
    return res.status(500).json({
      ok: false,
      code: 'INTERNAL_ERROR',
      error: 'Failed to send email',
      message: 'Temporary server issue while transmitting your brief. Please use Instant Direct Dispatch below.',
    });
  }
}
