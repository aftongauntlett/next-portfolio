"use client";

import Footer from "@components/reusable/Footer";
import Section from "@components/Section";
import About from "@components/sections/About";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";
import Contact from "@components/sections/Contact";

/**
 * HomePage renders each main portfolio section in order,
 * each wrapped with a Section for scrollspy/navigation.
 */
export default function HomePage() {
  return (
    <>
      {/* About Section */}
      <Section id="about">
        <About />
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      {/* Contact Section) */}
      <Section id="contact">
        <Contact />
      </Section>

      {/* Footer Section*/}
      <Footer />
    </>
  );
}
