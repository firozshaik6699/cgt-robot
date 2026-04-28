export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, service, budget, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Uses the Vercel environment variable, falls back to hardcoded key for local dev
        "Authorization": `Bearer ${process.env.RESEND_API_KEY || 're_BhuX14YF_6posHwgTQ42Mq7XPopxcB2QJ'}`
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "continentalgrandtechnologies@gmail.com",
        subject: `New Lead: ${name} - ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        `
      })
    });

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      return res.status(response.status).json(errorData);
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
