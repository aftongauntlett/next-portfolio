"use client";

import Button from "@components/reusable/Button";
import TextHoverDrip from "@components/TextHoverDrip";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Contact() {
  // TODO: Send Email Logic

  return (
    <section id="contact" className="scroll-mt-28 text-gray-100">
      <TextHoverDrip />
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form doesn't actually send yet!");
        }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none "
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none "
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none "
            required
          />
          <input
            type="phone"
            placeholder="Phone"
            className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none "
          />
        </div>
        <textarea
          placeholder="What's on your mind?"
          rows={4}
          className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none "
          required
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            text="Send message"
            icon={<HiOutlineArrowRight />}
          />
        </div>
      </form>
    </section>
  );
}
