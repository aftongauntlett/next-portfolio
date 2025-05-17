// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { z } from "zod";

const contactSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string().nonempty(),
    website: z.string().max(0),
  })
  .strict();

for (const key of [
  "SENDGRID_API_KEY",
  "SENDGRID_FROM_EMAIL",
  "CONTACT_EMAIL",
] as const) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

function buildEmail(data: z.infer<typeof contactSchema>) {
  const { firstName, lastName, email, phone, message } = data;
  return {
    to: process.env.CONTACT_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `New message from ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "—"}

Message:
${message}
    `.trim(),
  };
}

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  const raw = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", details: parsed.error.format() },
      { status: 400 }
    );
  }

  try {
    await sendgrid.send(buildEmail(parsed.data));
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error(
      "SendGrid error:",
      process.env.NODE_ENV === "development" ? e : e.message
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
