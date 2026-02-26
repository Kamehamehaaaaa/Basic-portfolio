import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-deep)] bg-grid">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s, i) => {
            const chips = s.items
              .split(",")
              .map((x) => x.trim())
              .filter(Boolean);

            return (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group skill-card relative text-left p-5 cursor-default"
              >
                <div className="skill-card__header">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                  <span className="ml-2 font-mono text-[0.7rem] text-[var(--text-muted)]">
                    skill_agent.load
                  </span>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-[var(--accent)] text-sm mb-3">{s.category}</h3>

                  <div className="flex flex-wrap gap-2">
                    {chips.slice(0, 10).map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 rounded text-[0.65rem] font-mono bg-[var(--bg-deep)] text-[var(--text)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition"
                      >
                        {c}
                      </span>
                    ))}
                    {chips.length > 10 && (
                      <span className="px-2 py-0.5 rounded text-[0.65rem] font-mono bg-[var(--bg-deep)] text-[var(--text-muted)] border border-[var(--border)]">
                        +{chips.length - 10} more
                      </span>
                    )}
                  </div>

                  {/* Hover details (static CSS reveal, no motion state needed) */}
                  <div className="skill-card__details mt-4 pt-4 border-t border-[var(--border)]">
                    {/* <p className="font-mono text-[0.7rem] text-[var(--accent)] mb-2">
                      agent.note(&quot;{s.category}&quot;)
                    </p> */}
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {/* Placeholder: add a short story about how you use <span className="text-[var(--text)]">{s.category}</span>{" "}
                      in real production systems, research, or projects. */}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
