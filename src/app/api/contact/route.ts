import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { z } from "zod";

// 1) Define schema and export TS type
// The `website` field is a honeypot; real users leave it blank, bots often fill it in
export const contactSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().nonempty(),
  captchaToken: z.string().nonempty(),
  website: z.string().max(0), // Honeypot anti-bot field; must be empty if human
});
export type ContactPayload = z.infer<typeof contactSchema>;

// 2) Explicitly check that all required environment variables are present
const requiredEnvVars = [
  "SENDGRID_API_KEY",
  "SENDGRID_FROM_EMAIL",
  "CONTACT_EMAIL",
  "RECAPTCHA_SECRET_KEY",
] as const;

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(
      `Missing required environment variable: ${key}. Please check your deployment configuration.`
    );
  }
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// 3) POST handler
export async function POST(request: NextRequest) {
  let data: ContactPayload;
  try {
    // Validate and parse request body; throws if invalid
    data = contactSchema.parse(await request.json());
  } catch (err) {
    return NextResponse.json(
      { errors: (err as z.ZodError).format() },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, message, captchaToken } = data;

  // 4) reCAPTCHA verify (prevents bot submissions)
  const recaptcha = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    { method: "POST" }
  ).then((r) => r.json() as Promise<{ success: boolean; score?: number }>);

  if (!recaptcha.success || (recaptcha.score ?? 0) < 0.5) {
    return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
  }

  // 5) Send email via SendGrid
  try {
    await sendgrid.send({
      to: process.env.CONTACT_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New message from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "—"}

Message:
${message}
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    // Only log detailed errors in development, not in production
    if (process.env.NODE_ENV === "development") {
      console.error("SendGrid error:", e.response?.body || e);
    } else {
      console.error("SendGrid error occurred.");
    }
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
