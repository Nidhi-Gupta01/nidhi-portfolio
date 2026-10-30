import { useRef, useState } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";

export default function Hero() {
    const sectionRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const [isHovering, setIsHovering] = useState(false);

    // 3D profile interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = {
        stiffness: 150,
        damping: 18,
        mass: 0.6,
    };

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
        springConfig
    );

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [12, -12]),
        springConfig
    );

    const handleProfileMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleProfileMouseLeave = () => {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    // Scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [0, 0] : [0, 180]
    );

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        reduceMotion ? [1, 1, 1] : [1, 1.08, 0.9]
    );

    const imageRotate = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [0, 0] : [0, -4]
    );

    const imageOpacity = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [1, 0.8, 0]
    );

    const textY = useTransform(
        scrollYProgress,
        [0, 1],
        reduceMotion ? [0, 0] : [0, -70]
    );

    // Text reveal animation
    const reveal = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 30,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: reduceMotion ? 0 : 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    // Background particle positions
    const particles = Array.from({ length: 18 }, (_, i) => ({
        left: `${5 + ((i * 19) % 90)}%`,
        top: `${8 + ((i * 29) % 84)}%`,
        size: i % 5 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
        duration: 4 + (i % 5),
        delay: i * 0.18,
    }));

    return (
        <section
            ref={sectionRef}
            id="home"
            className="cinematic-bg relative isolate min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-20"
        >
            {/* Smooth curved parallelogram clipping shape */}
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0"
                focusable="false"
            >
                <defs>
                    <clipPath
                        id="nidhiProfileClip"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="M 0.18 0 H 0.96 Q 1 0 1 0.04 V 0.82 Q 1 0.86 0.97 0.89 L 0.89 0.97 Q 0.86 1 0.82 1 H 0.04 Q 0 1 0 0.96 V 0.18 Q 0 0.14 0.03 0.11 L 0.11 0.03 Q 0.14 0 0.18 0 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* ========================================
                FLOATING BACKGROUND DECORATIONS
            ======================================== */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                {/* Top-left orbit circle */}
                <motion.div
                    className="absolute -left-16 top-[12%] h-48 w-48 rounded-full border border-champagne/20 sm:h-64 sm:w-64"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                y: [0, -18, 0],
                                rotate: [0, 12, 0],
                            }
                    }
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Inner circle */}
                <motion.div
                    className="absolute left-[12%] top-[24%] h-14 w-14 rounded-full border border-amber/40 sm:h-20 sm:w-20"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                x: [0, 18, 0],
                                y: [0, -22, 0],
                            }
                    }
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Right-side circle */}
                <motion.div
                    className="absolute right-[5%] top-[22%] h-20 w-20 rounded-full border border-champagne/30 sm:h-28 sm:w-28"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                y: [0, 24, 0],
                                scale: [1, 1.08, 1],
                            }
                    }
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Bottom orbit */}
                <motion.div
                    className="absolute -bottom-28 left-[22%] h-56 w-56 rounded-full border border-amber/20 sm:h-80 sm:w-80"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                x: [0, 24, 0],
                                rotate: [0, -15, 0],
                            }
                    }
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Faint decorative orbit lines */}
                <div className="absolute left-[35%] top-[15%] h-64 w-64 rounded-full border border-champagne/10 sm:h-96 sm:w-96" />

                <div className="absolute right-[-12%] top-[45%] h-72 w-72 rounded-full border border-amber/15 sm:h-120 sm:w-120" />

                {/* Floating golden stars */}
                <motion.span
                    className="absolute left-[7%] top-[34%] text-3xl text-champagne/80"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                y: [0, -16, 0],
                                rotate: [0, 45, 0],
                                opacity: [0.45, 1, 0.45],
                            }
                    }
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ✦
                </motion.span>

                <motion.span
                    className="absolute left-[43%] top-[17%] text-2xl text-amber"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                y: [0, -12, 0],
                                rotate: [0, -35, 0],
                                opacity: [0.3, 1, 0.3],
                            }
                    }
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ✧
                </motion.span>

                <motion.span
                    className="absolute right-[9%] top-[53%] text-4xl text-champagne"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                rotate: [0, 90, 180],
                                scale: [0.85, 1.15, 0.85],
                                opacity: [0.4, 1, 0.4],
                            }
                    }
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ✦
                </motion.span>

                <motion.span
                    className="absolute bottom-[14%] left-[48%] text-xl text-amber/80"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                y: [0, -15, 0],
                                opacity: [0.25, 1, 0.25],
                            }
                    }
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ✧
                </motion.span>

                {/* Floating golden particles */}
                {particles.map((particle, index) => (
                    <motion.span
                        key={index}
                        className={`absolute ${particle.size} rounded-full bg-champagne`}
                        style={{
                            left: particle.left,
                            top: particle.top,
                            boxShadow:
                                "0 0 12px rgba(244,217,160,0.75)",
                        }}
                        animate={
                            reduceMotion
                                ? {}
                                : {
                                    y: [
                                        0,
                                        -18 - (index % 3) * 7,
                                        0,
                                    ],
                                    x: [
                                        0,
                                        index % 2 === 0 ? 7 : -7,
                                        0,
                                    ],
                                    opacity: [0.15, 0.85, 0.15],
                                }
                        }
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* ========================================
                ANIMATED GOLDEN LIGHTS
            ======================================== */}

            <motion.div
                aria-hidden="true"
                className="gold-light pointer-events-none absolute right-[-10%] top-[5%] z-0 h-96 w-96"
                style={{
                    background:
                        "radial-gradient(circle, rgba(244,217,160,0.5) 0%, rgba(200,121,44,0.22) 35%, transparent 72%)",
                    filter: "blur(30px)",
                }}
                animate={
                    reduceMotion
                        ? {}
                        : {
                            x: [0, -35, 0],
                            y: [0, 25, 0],
                            scale: [1, 1.18, 1],
                            opacity: [0.6, 1, 0.6],
                        }
                }
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                aria-hidden="true"
                className="gold-light pointer-events-none absolute bottom-[-10%] left-[-10%] z-0 h-96 w-96"
                style={{
                    background:
                        "radial-gradient(circle, rgba(200,121,44,0.24) 0%, rgba(91,70,50,0.15) 40%, transparent 72%)",
                    filter: "blur(35px)",
                }}
                animate={
                    reduceMotion
                        ? {}
                        : {
                            x: [0, 45, -10, 0],
                            y: [0, -30, 15, 0],
                            scale: [1, 1.2, 0.9, 1],
                        }
                }
                transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Decorative initials */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/4 z-0 select-none font-display text-[14rem] italic leading-none text-mocha/4 md:text-[20rem]"
                animate={reduceMotion ? {} : { y: [0, -20, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                NG
            </motion.div>

            {/* ========================================
                HERO CONTENT
            ======================================== */}

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 lg:gap-24">
                {/* LEFT: INTRODUCTION */}

                <motion.div
                    style={{ y: textY }}
                    className="order-2 md:order-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: reduceMotion ? 0 : 0.14,
                                delayChildren: 0.15,
                            },
                        },
                    }}
                >
                    {/* Availability badge */}
                    <motion.div
                        variants={reveal}
                        className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber/30 bg-white/60 px-4 py-2 shadow-[0_0_25px_rgba(200,121,44,0.08)] backdrop-blur-md"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            {!reduceMotion && (
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-50" />
                            )}

                            <span className="relative h-2.5 w-2.5 rounded-full bg-amber" />
                        </span>

                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                            Open to Opportunities
                        </span>
                    </motion.div>

                    {/* Intro label */}
                    <motion.p
                        variants={reveal}
                        className="mb-4 text-sm uppercase tracking-[0.4em] text-amber"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={reveal}
                        className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-charcoal sm:text-7xl lg:text-8xl"
                    >
                        Nidhi
                        <br />

                        <motion.span
                            className="gold-text inline-block italic"
                            whileHover={reduceMotion ? {} : { x: 10 }}
                            transition={{ duration: 0.4 }}
                        >
                            Gupta.
                        </motion.span>
                    </motion.h1>

                    {/* Decorative line */}
                    <motion.div
                        variants={reveal}
                        className="my-8 h-px w-28 origin-left bg-linear-to-r from-amber via-champagne to-transparent"
                    />

                    {/* Designation */}
                    <motion.h2
                        variants={reveal}
                        className="mb-5 text-xl leading-relaxed text-mocha sm:text-2xl"
                    >
                        Full Stack Developer

                        <span className="mt-2 block text-base font-normal text-charcoal/70 sm:text-lg">
                            Creating digital experiences with purpose.
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={reveal}
                        className="mb-9 max-w-lg text-base leading-8 text-charcoal/70"
                    >
                        I'm a BCA graduate passionate about web development,
                        thoughtful design, and building practical digital products
                        that solve real problems.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={reveal}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={
                                reduceMotion ? {} : { y: -5, scale: 1.03 }
                            }
                            whileTap={
                                reduceMotion ? {} : { scale: 0.97 }
                            }
                            className="rounded-full bg-linear-to-r from-mocha to-[#765338] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(91,70,50,0.20)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(200,121,44,0.30)]"
                        >
                            Explore My Work ↗
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={
                                reduceMotion
                                    ? {}
                                    : {
                                        y: -5,
                                        backgroundColor: "#F4D9A0",
                                    }
                            }
                            whileTap={
                                reduceMotion ? {} : { scale: 0.97 }
                            }
                            className="rounded-full border border-mocha/30 bg-white/30 px-7 py-4 text-sm font-semibold text-mocha backdrop-blur-sm transition-colors duration-300"
                        >
                            Let's Connect
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download="Nidhi_Gupta_Resume.pdf"
                            whileHover={reduceMotion ? {} : { y: -5, scale: 1.03 }}
                            whileTap={reduceMotion ? {} : { scale: 0.97 }}
                            className="rounded-full border border-amber/40 bg-white/40 px-7 py-4 text-sm font-semibold text-mocha backdrop-blur-sm transition-colors duration-300 hover:bg-champagne"
                        >
                            Download Resume ↓
                        </motion.a>
                    </motion.div>

                    {/* Education and focus */}
                    <motion.div
                        variants={reveal}
                        className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-mocha/15 pt-6"
                    >
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                                Education
                            </p>

                            <p className="mt-2 font-semibold text-mocha">
                                BCA Graduate
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                                Specialization
                            </p>

                            <p className="mt-2 font-semibold text-mocha">
                                Web Development
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT: PROFILE IMAGE */}

                <motion.div
                    style={{
                        y: imageY,
                        scale: imageScale,
                        rotate: imageRotate,
                        opacity: imageOpacity,
                    }}
                    className="order-1 flex justify-center md:order-2 md:justify-end"
                >
                    <motion.div
                        className="relative w-full max-w-lg"
                        animate={reduceMotion ? {} : { y: [0, -12, 0] }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={reduceMotion ? {} : { scale: 1.025 }}
                    >
                        {/* Golden frame */}
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-4xl border border-amber/70 sm:-right-5 sm:-top-5"
                            style={{
                                clipPath: "url(#nidhiProfileClip)",
                            }}
                            animate={
                                reduceMotion
                                    ? {}
                                    : { rotate: [0, 1.5, 0, -1, 0] }
                            }
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Image container */}
                        <div
                            className="cinematic-image gold-shadow relative aspect-4/5 w-full overflow-hidden rounded-4xl bg-champagne"
                            style={{
                                perspective: "1000px",
                                transformStyle: "preserve-3d",
                                clipPath: "url(#nidhiProfileClip)",
                            }}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseMove={handleProfileMouseMove}
                            onMouseLeave={handleProfileMouseLeave}
                            onFocus={() => setIsHovering(true)}
                            onBlur={handleProfileMouseLeave}
                        >
                            {/* Profile image */}
                            <motion.img
                                src="/images/nidhi-profile.png"
                                alt="Portrait of Nidhi Gupta"
                                className="absolute inset-0 h-full w-full object-cover object-center"
                                style={{
                                    rotateX: reduceMotion ? 0 : rotateX,
                                    rotateY: reduceMotion ? 0 : rotateY,
                                    transformPerspective: 1000,
                                }}
                                animate={{
                                    scale: isHovering && !reduceMotion ? 1.07 : 1,
                                }}
                                transition={{
                                    scale: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                    },
                                }}
                                onError={(event) => {
                                    event.currentTarget.style.opacity = "0";
                                }}
                            />

                            {/* Warm golden overlay */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-linear-to-tr from-mocha/30 via-transparent to-champagne/20"
                            />

                            {/* Moving light sweep */}
                            {!reduceMotion && (
                                <motion.div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/35 to-transparent"
                                    animate={{ x: ["0%", "450%"] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: "easeInOut",
                                    }}
                                />
                            )}
                        </div>

                        {/* Floating information card */}
                        <motion.div
                            className="absolute -bottom-5 -left-3 rounded-2xl border border-amber/20 bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(91,70,50,0.16)] backdrop-blur-xl sm:-left-8"
                            animate={
                                reduceMotion
                                    ? {}
                                    : {
                                        y: [0, -12, 0],
                                        rotate: [0, -2, 0],
                                    }
                            }
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <p className="text-xs uppercase tracking-widest text-charcoal/50">
                                Turning ideas into
                            </p>

                            <p className="gold-text mt-1 font-display text-lg italic">
                                Digital Reality ✦
                            </p>
                        </motion.div>

                        {/* Rotating star */}
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-6 top-16 text-4xl text-amber drop-shadow-[0_0_12px_rgba(200,121,44,0.45)]"
                            animate={
                                reduceMotion
                                    ? {}
                                    : {
                                        rotate: 360,
                                        scale: [1, 1.2, 1],
                                    }
                            }
                            transition={{
                                rotate: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                                scale: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            ✳
                        </motion.div>

                        {/* Floating golden orb */}
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-6 top-1/3 h-4 w-4 rounded-full bg-linear-to-br from-champagne to-amber shadow-[0_0_25px_rgba(200,121,44,0.65)]"
                            animate={
                                reduceMotion
                                    ? {}
                                    : {
                                        y: [0, -22, 0],
                                        x: [0, 10, 0],
                                    }
                            }
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* ========================================
                SCROLL INDICATOR
            ======================================== */}

            <motion.div
                className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <span className="text-[10px] uppercase tracking-[0.35em] text-mocha/60">
                    Scroll to explore
                </span>

                <motion.div
                    className="h-9 w-px origin-top bg-linear-to-b from-amber to-transparent"
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                scaleY: [1, 0.35, 1],
                                opacity: [1, 0.4, 1],
                            }
                    }
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </section>
    );
}