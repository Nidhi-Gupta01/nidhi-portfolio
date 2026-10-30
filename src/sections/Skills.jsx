import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills";

 

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="scroll-mt-24 overflow-hidden bg-cream px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber">
            My technical toolkit
          </p>

          <h2 className="font-display text-4xl text-mocha md:text-6xl">
            Skills & Technologies
            <span className="text-amber">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-charcoal/70">
            Technologies and tools I have learned and used across web
            development, data analytics, and machine learning projects.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              className="group rounded-3xl border border-[#e8dfcf] bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-9"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-amber">
                    AREA {group.number}
                  </p>

                  <h3 className="font-display text-2xl text-mocha md:text-3xl">
                    {group.title}
                  </h3>
                </div>

                <span className="text-3xl text-champagne transition-transform duration-300 group-hover:rotate-12">
                  ✳
                </span>
              </div>

              <p className="mb-6 leading-7 text-charcoal/65">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#e8dfcf] bg-cream px-3.5 py-2 text-sm text-mocha transition-all duration-300 hover:border-amber hover:bg-champagne/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-sm leading-7 text-charcoal/55"
        >
          Always learning, always building, and always exploring better ways
          to solve problems through technology.
        </motion.p>
      </div>
    </section>
  );
}
