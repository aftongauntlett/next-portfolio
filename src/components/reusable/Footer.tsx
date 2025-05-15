"use client";

import { motion } from "framer-motion";
import ScrollToTopCat from "./ScrollToTopCat";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-10 flex items-center justify-between text-sm border-t border-gray-800/50 w-full"
    >
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-200/50">
          &copy; {new Date().getFullYear()} - Afton Gauntlett
        </span>
      </div>
      <ScrollToTopCat />
    </motion.footer>
  );
}
