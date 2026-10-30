import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "#home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 150) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: reduceMotion ? 0 : -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: "easeOut",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "border-b border-mocha/10 bg-cream/90 py-3 shadow-lg shadow-mocha/5 backdrop-blur-xl"
        : "bg-cream/70 py-5 backdrop-blur-sm"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber/60 font-display text-lg font-semibold text-mocha transition-all duration-300 group-hover:rotate-6 group-hover:bg-champagne">
            NG
          </span>

          <span className="hidden sm:block">
            <span className="block font-display text-lg font-semibold text-charcoal">
              Nidhi Gupta
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-mocha/70">
              Developer Portfolio
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-sm transition-colors duration-300 ${active === link.href
                ? "font-semibold text-amber"
                : "text-mocha hover:text-amber"
                }`}
            >
              {link.name}

              {active === link.href && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber"
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                  }}
                />
              )}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-mocha px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber"
          >
            Let's Talk ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-mocha/20 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-mocha transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-mocha transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-mocha transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.3,
        }}
        className="overflow-hidden lg:hidden"
      >
        <div className="flex flex-col gap-1 px-6 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                const target = document.getElementById(link.href.substring(1));

                setMenuOpen(false);

                if (target) {
                  setActive(link.href);

                  setTimeout(() => {
                    target.scrollIntoView({
                      behavior: reduceMotion ? "auto" : "smooth",
                      block: "start",
                    });

                    window.history.replaceState(null, "", link.href);
                  }, 100);
                } else {
                  console.error(`Section not found: ${link.href}`);
                }
              }}
              className={`rounded-xl px-4 py-3 text-sm transition-colors ${active === link.href
                ? "bg-champagne/50 font-semibold text-mocha"
                : "text-charcoal hover:bg-white/70"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-mocha px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Let's Talk ↗
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}