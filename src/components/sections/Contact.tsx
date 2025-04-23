import Section from "@components/common/Section";

export default function Contact() {
  return (
    <Section>
      <div className="space-y-10 max-w-xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300">
          Contact Me
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-dark dark:text-text-light"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-text-dark dark:text-text-light px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-dark dark:text-text-light"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-text-dark dark:text-text-light px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-dark dark:text-text-light"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-text-dark dark:text-text-light px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-primary text-white px-4 py-2 font-medium hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
