import { motion, useReducedMotion } from "framer-motion";
import { aboutDetails } from "../data/about";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber">
            Get to know me
          </p>

          <h2 className="font-display text-4xl text-mocha md:text-6xl">
            A Little About Me<span className="text-amber">.</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-9 text-charcoal/80">
              Hi, I'm <span className="font-semibold text-mocha">Nidhi Gupta</span>,
              a BCA graduate passionate about web development and creating
              meaningful digital experiences.
            </p>

            <p className="mt-5 leading-8 text-charcoal/70">
              I enjoy turning ideas into websites that look beautiful, work
              smoothly, and feel easy to use. I'm continuously improving my
              development skills by learning new technologies and building
              practical projects.
            </p>

            <p className="mt-5 leading-8 text-charcoal/70">
              My goal is to grow as a developer, solve real-world problems,
              and create digital products that make a difference.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mocha px-7 py-4 font-medium text-cream transition duration-300 hover:bg-amber"
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <div className="grid gap-4">
            {aboutDetails.map((item, index) => (
              <motion.div
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={reduceMotion ? {} : { y: -5, scale: 1.01 }}
                className="group rounded-2xl border border-[#e8dfcf] bg-cream p-6 transition-colors duration-300 hover:border-amber/60"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl text-amber/80">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-mocha">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-charcoal/70">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}