import Section from "@components/common/Section";

export default function About() {
  return (
    <Section id="about" className="space-y-6">
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300">
        About Me
      </h2>
      <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis maxime
        error fuga, tenetur doloremque dolorem accusantium ex id obcaecati eius,
        quae, explicabo dicta. Nostrum inventore delectus minima placeat
        consequatur mollitia.
      </p>
    </Section>
  );
}
