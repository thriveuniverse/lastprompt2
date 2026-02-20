export async function sendNotificationEmail({
  recipientEmail,
  subject,
  body,
  fromEmail,
  senderName,
}: {
  recipientEmail: string;
  subject: string;
  body: string;
  fromEmail?: string;
  senderName?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = fromEmail || "Last Prompt <onboarding@resend.dev>";

  console.log(`[Email] Attempting to send to ${recipientEmail}`);
  console.log(`[Email] Using API Key: ${apiKey ? "Present (Starts with " + apiKey.substring(0, 5) + "...)" : "MISSING"}`);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from,
        to: recipientEmail,
        subject: subject,
        html: body,
      }),
    });

    const result = await response.json();
    console.log(`[Email] Resend Response Status: ${response.status}`);
    console.log(`[Email] Resend Response Body:`, JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error(`[Email] Failed to send. Status: ${response.status}, Error:`, result);
    }

    return { success: !!result.id, id: result.id };
  } catch (error) {
    console.error("[Email] Exception during fetch:", error);
    return { success: false, error };
  }
}

export function getVerificationEmailHtml(name: string, verifyUrl: string) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 40px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #22d3ee; margin: 0; font-size: 28px;">LAST PROMPT</h1>
        <p style="color: #6b7280; margin: 5px 0 0;">Verify Your Email</p>
      </div>
      <div style="background: #111827; padding: 30px; border-radius: 8px; border-left: 4px solid #22d3ee;">
        <p style="margin: 0 0 20px;">Hi ${name},</p>
        <p style="margin: 0 0 20px;">Thank you for joining Last Prompt! Please verify your email address to complete your registration and start receiving updates.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyUrl}" style="background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%); color: #000; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">Verify Email Address</a>
        </div>
        <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 0;">This link expires in 24 hours. If you didn't sign up, you can safely ignore this email.</p>
      </div>
      <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">&copy; 2024 Last Prompt. All rights reserved.</p>
    </div>
  `;
}

export function getWelcomeEmailHtml(name: string, segment: string) {
  const isB2B = segment === "b2b";
  const content = isB2B
    ? {
      headline: "Transform Leadership Training",
      intro: "You're now part of an exclusive group of forward-thinking organizations exploring immersive simulation-based training.",
      bullets: [
        "Case studies from successful implementations",
        "Insights on measuring training ROI",
        "Early access to corporate workshop materials",
        "Direct line to schedule a personalized demo",
      ],
      cta: "Schedule Your Demo",
      ctaUrl: "#calendar-placeholder",
    }
    : {
      headline: "Welcome to the Last Prompt Community",
      intro: "You're now part of our growing community of strategy enthusiasts ready to face the ultimate challenges.",
      bullets: [
        "Exclusive playtest opportunities",
        "Behind-the-scenes development updates",
        "Community events and discussions",
        "Early access to new features",
      ],
      cta: "Join Our Discord",
      ctaUrl: "#discord-placeholder",
    };

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 40px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #22d3ee; margin: 0; font-size: 28px;">LAST PROMPT</h1>
        <p style="color: ${isB2B ? "#f97316" : "#22c55e"}; margin: 5px 0 0;">${content.headline}</p>
      </div>
      <div style="background: #111827; padding: 30px; border-radius: 8px; border-left: 4px solid ${isB2B ? "#f97316" : "#22c55e"};">
        <p style="margin: 0 0 20px;">Hi ${name},</p>
        <p style="margin: 0 0 20px;">${content.intro}</p>
        <p style="margin: 20px 0 10px; font-weight: 600;">What to expect:</p>
        <ul style="margin: 0 0 20px; padding-left: 20px;">
          ${content.bullets.map((b) => `<li style="margin: 8px 0;">${b}</li>`).join("")}
        </ul>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${content.ctaUrl}" style="background: linear-gradient(135deg, ${isB2B ? "#f97316 0%, #dc2626" : "#22c55e 0%, #16a34a"} 100%); color: #fff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">${content.cta}</a>
        </div>
      </div>
      <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">
        <a href="#unsubscribe" style="color: #6b7280;">Unsubscribe</a> | &copy; 2024 Last Prompt
      </p>
    </div>
  `;
}

export function getDemoConfirmEmailHtml(name: string, companyName: string) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 40px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #f97316; margin: 0; font-size: 28px;">Demo Request Received</h1>
      </div>
      <div style="background: #111827; padding: 30px; border-radius: 8px; border-left: 4px solid #f97316;">
        <p style="margin: 0 0 20px;">Hi ${name},</p>
        <p style="margin: 0 0 20px;">Thank you for your interest in Last Prompt for ${companyName}! We've received your demo request and our team will be in touch within 24-48 hours.</p>
        <p style="margin: 20px 0 10px; font-weight: 600;">What happens next:</p>
        <ol style="margin: 0 0 20px; padding-left: 20px;">
          <li style="margin: 8px 0;">Our team reviews your request</li>
          <li style="margin: 8px 0;">We'll reach out to schedule a call</li>
          <li style="margin: 8px 0;">Personalized demo tailored to your needs</li>
        </ol>
        <div style="text-align: center; margin: 30px 0;">
          <a href="#calendar-placeholder" style="background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); color: #fff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">Book a Time Directly</a>
        </div>
      </div>
      <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">&copy; 2024 Last Prompt. All rights reserved.</p>
    </div>
  `;
}