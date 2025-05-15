"use client";

import React, { useState } from "react";
import Script from "next/script";
import { useForm, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@components/reusable/Button";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import { HiOutlineArrowRight } from "react-icons/hi2";

const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;

const contactSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine((val) => val === "" || phoneRegex.test(val), {
    message: "Use format (123)-456-7890",
  }),
  message: z.string().nonempty("Message is required"),
  website: z.string().max(0), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;
type Payload = ContactFormData & { captchaToken: string };

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) {
      setStatus("sent");
      reset();
      return;
    }

    setStatus("sending");

    let token: string;
    try {
      await new Promise<void>((res) => window.grecaptcha.ready(res));
      token = await window.grecaptcha.execute(siteKey, {
        action: "contact",
      });
    } catch {
      setStatus("error");
      return;
    }

    const payload: Payload = { ...data, captchaToken: token };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 text-start">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />

      <TextHoverDrip>
        <h2 className="text-4xl mb-8">
          Let’s make something beautiful
          <span className="inline-block text-teal-300">.</span>
        </h2>
      </TextHoverDrip>

      <form noValidate className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot */}
        <input
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Phone
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  {...field}
                  format="(###)-###-####"
                  allowEmptyFormatting
                  mask="_"
                  inputMode="tel"
                  placeholder="(123)-456-7890"
                  className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none"
                />
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="What’s on your mind?"
            className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button
            type="submit"
            text={
              status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Sent!"
                : "Send message"
            }
            icon={<HiOutlineArrowRight />}
            disabled={!isValid || isSubmitting}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {status === "error" && (
          <p className="text-red-400">Oops—something went wrong.</p>
        )}
      </form>
    </section>
  );
}
