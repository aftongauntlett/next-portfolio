import type { JSX } from "react";
import Section from "@components/common/Section";

export default function About(): JSX.Element {
  return (
    <Section id="about" aria-labelledby="about-heading" className="space-y-6">
      <h2 id="about-heading" className="transition-all duration-300">
        About Me
      </h2>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maxime
        error fuga, tenetur doloremque accusantium ex id obcaecati eius, quae
        explicabo dicta. Nostrum inventore delectus minima placeat consequatur
        mollitia.
      </p>
    </Section>
  );
}
