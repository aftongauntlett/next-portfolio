"use client";

import { FC } from "react";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import ContactForm from "@components/Contact/ContactForm";

interface DotProps {
  /** animation delay in ms */
  delay?: number;
}

const DotBounce: FC<DotProps> = ({ delay = 0 }) => (
  <span className={`dot-bounce${delay ? ` animation-delay-${delay}` : ""}`} />
);

const ContactPage: FC = () => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className="py-12 mx-auto max-w-3xl px-4"
  >
    <TextHoverDrip>
      <h2 id="contact-title" className="text-4xl mb-8 cursor-pointer">
        Let's make something beautiful
        <span className="inline-flex items-baseline ml-2">
          {[0, 200, 400].map((delay) => (
            <DotBounce key={delay} delay={delay} />
          ))}
        </span>
      </h2>
    </TextHoverDrip>

    <ContactForm />
  </section>
);

export default ContactPage;
