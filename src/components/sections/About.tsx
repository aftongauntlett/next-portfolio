import Button from "@components/Button";
import type { JSX } from "react";
import { HiOutlineArrowDown } from "react-icons/hi2";

export default function About(): JSX.Element {
  return (
    <div className="space-y-6">
      <p>
        I'm a developer who thinks like a designer and leads like a teammate. My
        path to tech started in the creative world, where I learned how to
        translate abstract ideas into experiences people love to use. Today, I
        specialize in building intuitive, accessible UIs — and supporting the
        teams behind them.
      </p>
      <p>
        I've contributed to everything from small business websites to complex
        internal tools at the enterprise level, and I'm happiest where
        thoughtful code meets human-centered design. I care deeply about
        creating inclusive experiences, fostering team trust, and building
        systems that make everyone's job easier.
      </p>
      <p>
        Outside of work, you'll usually find me sketching ideas, cooking
        something from scratch, wandering a farmers market, or chasing a cat off
        my keyboard — because creativity doesn’t stop at the screen.
      </p>
      <Button
        href="#contact"
        text="Contact me"
        icon={<HiOutlineArrowDown className="w-4 h-4" />}
      />
    </div>
  );
}
