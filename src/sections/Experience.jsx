import { motion, useReducedMotion } from "framer-motion";
import { education, internships } from "../data/experience";


 

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="scroll-mt-24 overflow-hidden bg-cream px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber sm:text-sm">
            My journey so far
          </p>

          <h2 className="font-display text-4xl leading-tight text-mocha sm:text-5xl md:text-6xl">
            Education & Experience
            <span className="text-amber">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-charcoal/70 sm:text-base sm:leading-8">
            My academic background and internship experiences have helped
            me explore software development, data science, and emerging
            technologies.
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="mb-6 font-display text-2xl text-mocha sm:text-3xl">
            Education
          </h3>

          <div className="grid gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-[#e8dfcf] bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber">
                  {item.status}
                </p>

                <h4 className="font-display text-2xl leading-snug text-mocha sm:text-3xl">
                  {item.degree}
                </h4>

                <p className="mt-3 font-medium text-charcoal/80">
                  {item.institution}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/65 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Internship Experience */}
        <div>
          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber">
              Professional learning
            </p>

            <h3 className="font-display text-2xl text-mocha sm:text-3xl">
              Internship Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {internships.map((internship, index) => (
              <motion.article
                key={internship.number}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="group flex min-w-0 flex-col rounded-3xl border border-[#e8dfcf] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-amber">
                    INTERNSHIP {internship.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-2xl text-champagne transition-transform duration-300 group-hover:rotate-12"
                  >
                    ✳
                  </span>
                </div>

                <h4 className="font-display text-2xl leading-tight text-mocha sm:text-3xl">
                  {internship.company}
                </h4>

                <p className="mt-3 text-sm font-semibold leading-6 text-amber sm:text-base">
                  {internship.role}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/70 sm:text-base sm:leading-8">
                  {internship.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#e8dfcf] bg-cream px-3 py-2 text-xs leading-5 text-mocha sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#e8dfcf] pt-5">
                  <span className="inline-flex rounded-full border border-mocha/15 px-4 py-2.5 text-xs text-mocha/55 sm:text-sm">
                    Certificate · Coming Soon
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
