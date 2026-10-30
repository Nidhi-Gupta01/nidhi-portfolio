import { motion } from "framer-motion";

const EMAIL = "nidhiguptajsr047@gmail.com";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal px-6 py-24 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber">
            Get In Touch
          </p>

          <h2 className="text-4xl leading-tight md:text-6xl">
            Let's Create
            <br />
            <span className="font-serif italic text-champagne">
              Something Amazing.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-cream/70">
            Have an idea, a project, or an opportunity? I would love to hear
            from you. Let's connect and create something meaningful together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Email */}
            <div className="rounded-2xl border border-champagne/15 bg-white/5 p-6">
              <p className="mb-2 text-sm text-amber">Email</p>

              <a
                href={`mailto:${EMAIL}`}
                className="wrap-break-words transition-colors hover:text-champagne"
              >
                {EMAIL}
              </a>

              
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-champagne/15 bg-white/5 p-6">
              <p className="mb-4 text-sm text-amber">Social Profiles</p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/Nidhi-Gupta01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-champagne"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-champagne"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-champagne/15 bg-white/5 p-6">
              <p className="mb-2 text-sm text-amber">Location</p>
              <p>Jamshedpur, Jharkhand, India</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 rounded-2xl border border-champagne/15 bg-white/5 p-6 md:p-8"
          >
            <h3 className="mb-6 font-serif text-2xl text-champagne">
              Send Me a Message
            </h3>

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm"
              >
                Your Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-champagne/15 bg-charcoal px-4 py-3 text-cream outline-none transition focus:border-amber"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm"
              >
                Your Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-champagne/15 bg-charcoal px-4 py-3 text-cream outline-none transition focus:border-amber"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full resize-y rounded-xl border border-champagne/15 bg-charcoal px-4 py-3 text-cream outline-none transition focus:border-amber"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-amber px-6 py-3 font-medium text-charcoal transition-colors duration-300 hover:bg-champagne"
            >
              Send Message ↗
            </button>

            <p className="text-xs leading-5 text-cream/50">
              Sending this form opens your default email application with the
              message details filled in. You can review and send the email
              from there.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}