"use client";

import {
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type ComponentType,
  JSX,
} from "react";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

interface AnimatedListProps {
  /** Motion children (e.g., <motion.li>) to animate. */
  children: ReactNode;
  as?: "ul" | "ol" | "div";
  className?: string;
  containerVariants?: Variants;
  itemVariants?: Variants;
  initial?: HTMLMotionProps<"div">["initial"];
  animate?: HTMLMotionProps<"div">["whileInView"];
  viewport?: HTMLMotionProps<"div">["viewport"];
  role?: HTMLMotionProps<"div">["role"];
}

/**
 * AnimatedList wraps a Framer Motion container and
 * injects staggered child animations via variants.
 */
export default function AnimatedList({
  children,
  as = "div",
  className,
  containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  },
  itemVariants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } },
  initial = "hidden",
  animate = "show",
  viewport = { once: true, amount: 0.2 },
  role,
}: AnimatedListProps): JSX.Element {
  // Coerce the motion tag to a component type matching HTMLMotionProps for a div
  const Container = motion[as] as ComponentType<
    HTMLMotionProps<"div"> & { className?: string; role?: string }
  >;

  const items = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<{ variants?: Variants }>, {
          variants: itemVariants,
        })
      : child
  );

  return (
    <Container
      className={className}
      variants={containerVariants}
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      role={role}
    >
      {items}
    </Container>
  );
}
