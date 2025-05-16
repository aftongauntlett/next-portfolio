"use client";

import { motion, type Variants } from "framer-motion";
import { Children, isValidElement, cloneElement, type ReactNode } from "react";

interface AnimatedListProps {
  children: ReactNode;
  as?: "ul" | "ol" | "div";
  className?: string;
  containerVariants?: Variants;
  itemVariants?: Variants;
  initial?: string;
  animate?: string;
  viewport?: any;
  role?: string;
}

/**
 * AnimatedList clones each child and injects Framer Motion `variants`.
 * Only use `motion.*` elements as direct children, or TypeScript will warn.
 */
export default function AnimatedList({
  children,
  as = "div",
  className,
  containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  },
  itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
  initial = "hidden",
  animate = "show",
  viewport = { once: true, amount: 0.2 },
  role,
}: AnimatedListProps) {
  const Comp = motion[as];

  // TypeScript: We assert that the child is a Framer Motion component so we can inject the `variants` prop safely.
  // This is safe because AnimatedList is only meant to be used with <motion.*> children.
  // Do not use with plain HTML elements as children.
  const items = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<{ variants?: Variants }>, {
          variants: itemVariants,
        })
      : child
  );

  return (
    <Comp
      className={className}
      variants={containerVariants}
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      role={role}
    >
      {items}
    </Comp>
  );
}
