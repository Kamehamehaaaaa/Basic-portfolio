import { motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[var(--bg-elevated)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="terminal-panel p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-semibold text-xl">{education.degree}</h3>
            <span className="font-mono text-sm text-[var(--accent)]">{education.period}</span>
          </div>
          <p className="text-[var(--text-muted)]">{education.org} · {education.location}</p>
          <p className="font-mono text-sm text-[var(--text-muted)] mt-1">GPA: {education.gpa}</p>
          <p className="text-sm text-[var(--text-muted)] mt-4 mb-1">Coursework</p>
          <p className="text-[var(--text)] text-sm">{education.coursework.join(" · ")}</p>
        </motion.div>
      </div>
    </section>
  );
}
