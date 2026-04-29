import { Resend } from 'resend';

// Initialize the Resend client using the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, budget, message } = req.body;

  try {
    // Note: 'onboarding@resend.dev' is for testing only. 
    // For production, you must use a verified domain (e.g., 'onboarding@yourdomain.com')
    // Ensure you verify your domain at https://resend.com/domains
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['firozshaik6699@gmail.com'],
      replyTo: email,
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (error) {
    // Network-level failure or unexpected error
    console.error("Internal Server Error:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
