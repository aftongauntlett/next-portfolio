import type { ReactNode, HTMLAttributes, JSX } from "react";
import clsx from "clsx";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  "aria-label"?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps): JSX.Element {
  return (
    <section
      {...props}
      className={clsx("transition-colors duration-300", className)}
    >
      <div className="">{children}</div>
    </section>
  );
}
