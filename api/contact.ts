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

export function validateContactPayload(body: any): {
  valid: boolean;
  error?: string;
  data?: ContactPayload;
} {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Invalid request payload.' };
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !service || !budget || !message) {
    return { valid: false, error: 'All inquiry fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return { valid: false, error: 'Please provide a valid work email address.' };
  }

  if (name.length > 120 || service.length > 120 || budget.length > 80 || message.length > 4000) {
    return { valid: false, error: 'Input exceeds maximum allowed length.' };
  }

  return {
    valid: true,
    data: { name, email, service, budget, message },
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const validation = validateContactPayload(req.body);
  if (!validation.valid || !validation.data) {
    return res.status(400).json({ message: validation.error });
  }

  const { name, email, service, budget, message } = validation.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br/>');

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'CGT Inquiries <onboarding@resend.dev>';

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: ['firozshaik6699@gmail.com'],
      replyTo: email,
      subject: `[cgtofficial.com] New Project Inquiry: ${name} — ${service}`,
      html: `
        <div style="font-family: Inter, -apple-system, sans-serif; max-width: 560px; color: #111;">
          <h2 style="margin-bottom: 16px;">New Inquiry via cgtofficial.com</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Work Email:</strong> ${safeEmail}</p>
          <p><strong>Service Category:</strong> ${safeService}</p>
          <p><strong>Estimated Budget:</strong> ${safeBudget}</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
          <p><strong>Project Brief:</strong><br/>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
