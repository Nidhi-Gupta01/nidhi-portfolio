
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nidhi-Gupta01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.13 3.35 1.5.1-.72.39-1.22.7-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04c.4-.7 1.38-1.44 2.84-1.44 3.04 0 3.6 2 3.6 4.6V18Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:nidhiguptajsr047@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-champagne/15 bg-charcoal px-6 py-12 text-cream">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {/* Brand and Introduction */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block font-display text-3xl font-semibold tracking-wide text-champagne"
            >
              Nidhi Gupta<span className="text-amber">.</span>
            </a>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/45">
              Developer Portfolio
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-cream/60">
              Building meaningful digital experiences through creative design,
              thoughtful development, and a passion for technology.
            </p>

            <h3 className="mt-7 text-sm font-semibold tracking-wide text-champagne">
              Connect With Me
            </h3>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  title={name}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/20 bg-white/5 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:bg-champagne hover:text-charcoal"
                >
                  <span className="h-5 w-5">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-champagne">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-champagne"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold text-champagne">
              Get In Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-cream/60">
              Have a project or collaboration in mind? Let's connect and create
              something meaningful.
            </p>

            <a
              href="mailto:nidhiguptajsr047@gmail.com"
              className="mt-4 inline-block break-all text-sm text-cream/75 transition-colors hover:text-champagne"
            >
              nidhiguptajsr047@gmail.com
            </a>

            <div >
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-amber"
            >
              Let's Talk <span aria-hidden="true">↗</span>
            </a>
            </div>
          </div>
        </motion.div>

                  <div className="mt-3 flex justify-center">
            <a
              href="#home"
              className="text-xs text-cream/60 transition-colors mt-5 hover:text-champagne"
            >
              Back to Top ↑
            </a>
          </div>


        {/* Bottom Bar */}
        <div className="mt-12 border-t border-champagne/15 pt-6">
          <p className="text-center text-xs leading-6 text-cream/50">
            © {new Date().getFullYear()} Nidhi Gupta. All rights reserved.
          </p>


          <p className="mt-3 text-center text-xs text-cream/40">
            Crafted with care <span className="text-amber">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
