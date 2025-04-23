import type { JSX } from "react";
import Section from "@components/common/Section";

export default function About(): JSX.Element {
  return (
    <Section id="about" aria-labelledby="about-heading" className="space-y-6">
      <h2
        id="about-heading"
        className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300"
      >
        About Me
      </h2>
      <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-text-dark dark:text-text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maxime
        error fuga, tenetur doloremque accusantium ex id obcaecati eius, quae
        explicabo dicta. Nostrum inventore delectus minima placeat consequatur
        mollitia.
      </p>
    </Section>
  );
}
