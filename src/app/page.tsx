"use client";

import Footer from "@components/reusable/Footer";
import Section from "@components/Section";
import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Section id="about">
        <About />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
