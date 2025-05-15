import Button from "@components/reusable/Button";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import { type JSX } from "react";
import { HiOutlineMail } from "react-icons/hi";

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
          I'm a front-end developer with a strong focus on building creative,
          scalable, and user-centered web applications. With over five years of
          experience, I've contributed to large-scale redesigns, led the
          adoption of modern frameworks like React and Vue, and championed
          clean, maintainable code through component architecture, design
          systems, and cross-functional collaboration.
        </p>
        <p>
          My background in both development and design allows me to bridge the
          gap between usability and implementation. I'm driven by thoughtful
          problem-solving, mentorship (valuable in both directions, no matter
          how senior you are!), and a deep respect for clean UI and inclusive
          experiences. I thrive in team environments where curiosity, empathy,
          and technical excellence are equally valued.
        </p>
        <p>
          I didn't take a conventional path into tech - I left high school early
          and carved out a life through adaptability, persistence, and a refusal
          to let circumstances define my potential. Every twist in my journey
          shaped the developer I am today: someone who leads with empathy,
          speaks up when it counts, and stays grounded in purpose and principle.
          Whether I'm advocating for my team, untangling legacy code, or helping
          a city fix a flawed parking policy (true story), I bring the same
          mindset: listen carefully, act with intention, and don't settle for
          “good enough.”
        </p>
        <p>
          Outside of work, I find energy in the quiet things - winter mornings,
          rainy days, a good book, or a cozy fire. But when it comes to my team,
          I show up loudly. I care deeply about morale, psychological safety,
          and making space for others to thrive. People know they can count on
          me to get things done - with clarity, creativity, and follow-through.
          Whether I'm debugging merge conflicts or exploring the ethical edges
          of AI, I'm always asking: how can we do this better - and who are we
          doing it for?
        </p>
      </div>
      <div className="justify-start max-sm:justify-end mt-8">
        <Button href="#contact" text="Let's Chat!" icon={<HiOutlineMail />} />
      </div>
    </div>
  );
}
