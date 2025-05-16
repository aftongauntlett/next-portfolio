"use client";

import { motion } from "framer-motion";
import ScrollToTopCat from "./ScrollToTopCat";

/**
 * Site footer with copyright and scroll-to-top.
 * Animated on view, accessible, and styled via global classes.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="footer"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="footer-content">
        <span className="footer-copy">&copy; {year} - Afton Gauntlett</span>
      </div>
      {/* Scroll-to-top button/cat */}
      <ScrollToTopCat />
    </motion.footer>
  );
}
