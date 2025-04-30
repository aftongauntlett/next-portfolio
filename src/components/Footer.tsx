"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-6 sm:px-10 lg:px-20 py-8 text-sm text-blue-200/60 border-t border-blue-800/50 w-full"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-center sm:text-left">
          &copy; {year} Afton Gauntlett. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
