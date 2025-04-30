"use client";

import Button from "@components/Button";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 sm:px-10 lg:px-20 pb-24 pt-12 max-w-screen-md mx-auto text-blue-100"
    >
      <motion.h2
        className="text-3xl font-bold text-blue-200 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let’s make something weirdly beautiful.
      </motion.h2>

      <motion.p
        className="text-center text-sm mb-12 text-blue-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Whether it's code, coffee, or a cosmic UI idea - feel free to reach out.
      </motion.p>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form doesn’t actually send yet!");
        }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-transparent border border-blue-300 rounded-md text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-transparent border border-blue-300 rounded-md text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <textarea
          placeholder="What's up?"
          rows={4}
          className="w-full px-4 py-2 bg-transparent border border-blue-300 rounded-md text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <Button
          type="submit"
          text="Send message"
          icon={<HiOutlineArrowRight className="w-4 h-4" />}
        />
      </form>
    </section>
  );
}
