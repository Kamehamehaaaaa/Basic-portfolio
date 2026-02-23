import { motion } from "framer-motion";
import { experience } from "../data/experience";

function GearIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a2 2 0 0 1 2 2c0 .6-.3 1.2-.8 1.5L13 8l1 .2a2 2 0 0 1 1.5 1.5l.2 1 1.5.2c.3.5.9.8 1.5.8a2 2 0 0 1 2 2c0 .6-.3 1.2-.8 1.5L20 15l-.2 1a2 2 0 0 1-1.5 1.5L17 18l-.2 1.5c-.3.5-.9.8-1.5.8a2 2 0 0 1-2 2c-.6 0-1.2-.3-1.5-.8L11 20l-1 .2a2 2 0 0 1-1.5-1.5L8.5 18l-1.5-.2c-.5-.3-.8-.9-.8-1.5a2 2 0 0 1 2-2c.6 0 1.2.3 1.5.8l1.5.2.2-1a2 2 0 0 1 1.5-1.5L13 8l.2-1.5c.3-.5.9-.8 1.5-.8z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[var(--bg-deep)] bg-grid">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <GearIcon className="w-8 h-8 text-[var(--accent)]" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="border-l-2 border-[var(--border)] pl-8 space-y-14 relative">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div
                className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-deep)]"
                aria-hidden
              />
              <span className="font-mono text-sm text-[var(--accent)]">{item.year}</span>
              <h3 className="font-semibold text-xl mt-1">{item.role}</h3>
              <p className="text-[var(--text-muted)]">
                {item.org}
                {item.location && ` · ${item.location}`}
              </p>
              <ul className="mt-3 space-y-2 text-[var(--text)]">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-[var(--accent)] mt-1.5 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-[var(--text-muted)]">
                Tech: {item.stack}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
