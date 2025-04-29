import Section from "@components/Section";
import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Section id="intro" title="Intro">
        <About />
      </Section>

      <Section id="about" title="Experience">
        <Experience />
      </Section>

      <Section id="experience" title="Projects">
        <Projects />
      </Section>

      <Section id="projects" title="Skills">
        <Skills />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </>
  );
}
