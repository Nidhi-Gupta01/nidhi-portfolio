import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
 
export default function Projects() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            className="scroll-mt-24 overflow-hidden bg-white px-5 py-24 sm:px-8 md:px-12 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 md:mb-16"
                >
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-amber sm:text-sm">
                        A selection of my work
                    </p>

                    <h2 className="font-display text-4xl leading-tight text-mocha sm:text-5xl md:text-6xl">
                        Featured Projects
                        <span className="text-amber">.</span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-charcoal/70 sm:text-base sm:leading-8">
                        A collection of projects showcasing my work in web
                        development, data science, and creative problem-solving.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.number}
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 30 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: 0.55,
                                delay: reduceMotion ? 0 : index * 0.1,
                            }}
                            whileHover={reduceMotion ? {} : { y: -5 }}
                            className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#e8dfcf] bg-cream shadow-sm transition-shadow duration-300 hover:shadow-xl"
                        >
                            {/* Card Header */}
                            <div className="relative flex min-h-44 flex-col items-center justify-center overflow-hidden bg-mocha px-5 py-8 text-center sm:min-h-48 sm:px-7">

                                {/* Decorative background */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,217,160,0.18),transparent_70%)]"
                                />



                                {/* Header content */}
                                <div className="relative z-10 flex w-full flex-col items-center gap-3 px-3 py-2 text-center">
                                    <p className="max-w-full text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-champagne sm:text-xs sm:tracking-[0.25em]">
                                        {project.type}
                                    </p>

                                    <h3 className="max-w-full font-display text-2xl leading-tight text-cream sm:text-3xl md:text-4xl">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">

                                <p className="px-1 text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-amber sm:text-xs sm:tracking-[0.18em]">
                                    {project.category}
                                </p>

                                <p className="mt-4 px-1 text-sm leading-7 text-charcoal/75 sm:text-base sm:leading-8">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="max-w-full wrap-break-words rounded-full border border-[#e8dfcf] bg-white px-4 py-2 text-xs leading-5 text-mocha transition-colors duration-300 hover:border-amber sm:text-sm"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="mt-5 p-5 flex flex-wrap gap-3 border-t border-[#e8dfcf] pt-6">

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full bg-mocha px-4 py-2.5 text-xs font-medium text-cream transition-colors duration-300 hover:bg-amber sm:px-5 sm:text-sm"
                                        >
                                            Live Demo ↗
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full border border-mocha/15 px-4 py-2.5 text-xs text-mocha/55 sm:px-5 sm:text-sm">
                                            Live Demo · Coming Soon
                                        </span>
                                    )}

                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-[#E8DFCF] px-5 py-3 text-sm transition hover:border-amber hover:text-amber"
                                        >
                                            Source Code ↗
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full border border-mocha/15 px-4 py-2.5 text-xs text-mocha/55 sm:px-5 sm:text-sm">
                                            Source Code · Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.p
                    initial={reduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 text-center text-xs leading-6 text-charcoal/55 sm:text-sm"
                >
                    More projects and experiments coming soon.
                </motion.p>
            </div>
        </section>
    );
}