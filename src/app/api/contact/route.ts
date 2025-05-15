import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { z } from "zod";

// 1) Define schema and export TS type
export const contactSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().nonempty(),
  captchaToken: z.string().nonempty(),
  website: z.string().max(0),
});
export type ContactPayload = z.infer<typeof contactSchema>;

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// 3. POST handler
export async function POST(request: NextRequest) {
  // throws if invalid, so I will always get a strongly-typed `data: ContactPayload`
  let data: ContactPayload;
  try {
    data = contactSchema.parse(await request.json());
  } catch (err) {
    return NextResponse.json(
      { errors: (err as z.ZodError).format() },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, message, captchaToken } = data;

  // 4. reCAPTCHA verify
  const recaptcha = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    { method: "POST" }
  ).then((r) => r.json() as Promise<{ success: boolean; score?: number }>);

  if (!recaptcha.success || (recaptcha.score ?? 0) < 0.5) {
    return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
  }

  // 5. Send email
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
    console.error("SendGrid error:", e.response?.body || e);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
