"use client";

import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@components/reusable/Button";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { TextField } from "@components/reusable/TextField";
import { TextAreaField } from "@components/reusable/TextArea";

const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;

/**
 * Zod schema for validating contact form fields.
 * Includes:
 * - firstName, lastName: required strings
 * - email: must be a valid email
 * - phone: optional, but if provided must match (123)-456-7890
 * - message: required string
 * - website: honeypot field, must be empty when submitted
 */
const contactSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((val) => val === "" || phoneRegex.test(val), {
      message: "Use format (123)-456-7890",
    }),
    message: z.string().nonempty("Message is required"),
    website: z.string().max(0), // honeypot
  })
  .strict();

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * ContactForm component
 *
 * Renders a contact form with:
 * - Honeypot anti-bot field
 * - React Hook Form + Zod validation
 * - PatternFormat phone input
 * - Reusable TextField and TextAreaField subcomponents
 * - Button with loading/sent/error states
 */
export default function ContactForm() {
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

  /**
   * onSubmit handler
   * - Skips actual submission if honeypot is filled
   * - Sends form data to /api/contact via POST
   * - Updates local status state to drive UI feedback
   */
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Honeypot check: spam bots will fill this invisible field
    if (data.website) {
      setStatus("sent");
      reset();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28">
      <form noValidate className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field */}
        <input
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <TextField
            id="firstName"
            label="First Name"
            register={register}
            error={errors.firstName}
          />
          <TextField
            id="lastName"
            label="Last Name"
            register={register}
            error={errors.lastName}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email}
          />

          {/* Phone field uses Controller + PatternFormat */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-200"
            >
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

        {/* Message textarea */}
        <TextAreaField
          id="message"
          label="Message"
          register={register}
          error={errors.message}
        />

        {/* Submit button and feedback */}
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
