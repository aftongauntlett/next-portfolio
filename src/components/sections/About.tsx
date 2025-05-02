import Button from "@components/reusable/Button";
import { type JSX } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function About(): JSX.Element {
  return (
    <div>
      <h1 className="title text-white">
        Hello
        <span className="inline-block text-teal-300 animate-[once-bounce_2s_ease-out_1]">
          .
        </span>
      </h1>

      <div className="space-y-4">
        <p>
          I'm a front-end developer with 5+ years of experience building
          thoughtful, accessible, and performant web applications. I specialize
          in React, TypeScript, and UI architecture, with a strong focus on
          clean design systems, smooth user experiences, and scalable component
          patterns. I've led frontend redesigns, debugged gnarly bugs, and
          helped teams adopt tools like TanStack Query and Storybook to improve
          workflows.
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
