import AnimatedList from "@components/AnimatedList";
import { motion } from "framer-motion";

/**
 * Project item shape for portfolio/work listing
 */
type Project = {
  title: string;
  tech: string;
  url: string;
  imgSrc: string;
  description: string;
};

/**
 * Example projects for display
 */
const projects: Project[] = [
  {
    title: "JC Auto Body",
    tech: "React, Tailwind, Next.js",
    url: "https://jcautobodyva.com/",
    imgSrc: "/screenshots/jc.png",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia, quis vel unde? Sequi sed omnis, ipsam commodi adipisci voluptatem inventore eveniet autem recusandae corporis!",
  },
  {
    title: "Astrid Beauty Salon",
    tech: "React, Tailwind, Next.js",
    url: "https://byastridbeautysalon.com/",
    imgSrc: "/screenshots/astrid.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia, quis vel unde? Sequi sed omnis, ipsam commodi adipisci voluptatem inventore eveniet autem recusandae corporis!",
  },
];

/**
 * ProjectList section displays work/projects in an animated, alternating list.
 * Uses AnimatedList and framer-motion for staggered motion reveal.
 * Alternates left/right layout for each project.
 */
export default function ProjectList() {
  return (
    <section aria-labelledby="projects-list">
      {/* Vertical list with left border; AnimatedList adds staggered motion */}
      <div className="border-l-2 border-teal-300 relative block text-lg font-medium transition-colors ms-2">
        <AnimatedList as="div">
          {projects.map((project, i) => (
            // Animate each project in with fade/slide; alternate layout left/right
            <motion.div
              key={project.url + "-project"}
              className={`mb-12 ml-8 flex items-center gap-8 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 60,
              }}
            >
              {/* Project thumbnail */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
              {/* Project details; alternate text alignment */}
              <div className={`${i % 2 ? "text-right" : ""}`}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </a>
                <div className="text-xs text-gray-400 mb-2">{project.tech}</div>
                <div className="text-sm">{project.description}</div>
              </div>
            </motion.div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
