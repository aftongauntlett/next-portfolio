import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={clsx(
        "bg-body-light dark:bg-body-dark text-text-dark dark:text-text-light transition-colors duration-300 px-fluid-x py-fluid-y",
        className
      )}
    >
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
}
