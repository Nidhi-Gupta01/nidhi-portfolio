import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact-cta"
      className="scroll-mt-24 bg-mocha px-6 py-24 text-center text-cream md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-champagne">
          Have a project in mind?
        </p>

        <h2 className="font-display text-4xl md:text-6xl">
          Let's Connect.
        </h2>

        <p className="mt-5 text-cream/75">
          Let's create something meaningful together.
        </p>

        <a
          href="mailto:nidhiguptajsr047@gmail.com"
          className="mt-8 inline-block rounded-full bg-champagne px-7 py-4 font-semibold text-charcoal! transition hover:bg-white"
        >
          Email Me ↗
        </a>
      </motion.div>
    </section>
  );
}