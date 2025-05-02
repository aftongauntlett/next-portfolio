import Button from "@components/reusable/Button";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import { type JSX } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function About(): JSX.Element {
  return (
    <div>
      <TextHoverDrip>
        <h1 className="title">
          Hello
          <span className="inline-block text-teal-300">.</span>
        </h1>
      </TextHoverDrip>

      <div className="space-y-4">
        <p>
          I'm a front-end engineer with a strong focus on building accessible,
          scalable, and user-centered web applications. With over five years of
          experience, I’ve contributed to large-scale redesigns, led the
          adoption of modern frameworks like React and Vue, and championed
          clean, maintainable code through component architecture, design
          systems, and collaboration across disciplines.
        </p>
        <p>
          My background in both development and design allows me to bridge the
          gap between usability and implementation. I’m driven by thoughtful
          problem-solving, mentorship, and a deep respect for clean UI and
          inclusive experiences. I thrive in team environments where curiosity,
          empathy, and technical excellence are equally valued.
        </p>
        <p>
          My path into tech wasn't traditional, but it taught me how to lead
          with empathy, stay adaptable, and always focus on impact. I care about
          people as much as pixels - and I bring that energy into every project.
          Outside of work, you'll find me gaming, cooking, or chasing down good
          coffee at the farmers market with a cat in tow (figuratively, for
          now).
        </p>
      </div>
      <div className="justify-start max-sm:justify-end">
        <Button
          href="#projects"
          text="See My Work"
          icon={<HiOutlineArrowRight />}
        />
      </div>
    </div>
  );
}
