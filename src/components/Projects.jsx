import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import RobotMascot from "./RobotMascot";

function FetchDots() {
  return (
    <motion.span className="inline-flex items-center gap-1" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-1 h-1 rounded-full bg-[var(--accent)]"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.span>
  );
}

export default function Projects() {
  // Two projects per \"page\" for scroll; each tile expands on hover
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < projects.length; i += 2) out.push(projects.slice(i, i + 2));
    return out;
  }, []);

  const [activeId, setActiveId] = useState(projects[0]?.title ?? null);

  return (
    <section id="projects" className="py-24 relative bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold">Project Agents</h2>
          <p className="text-[var(--text-muted)] mt-2 max-w-xl">
            Scroll to browse. Hover a project tile to have that agent enlarge and reveal the full brief while its
            partner shifts aside.
          </p>
        </motion.div>

        {/* Horizontal scroll: each snap page contains 2 expanding tiles */}
        <div className="scroll-row flex gap-6 overflow-x-auto snap-x snap-mandatory">
          {pages.map((pair, pageIdx) => (
            <div
              key={pageIdx}
              className="snap-start shrink-0 w-full flex gap-4"
            >
              {pair.map((p, i) => {
                const id = p.title;
                const isActive = activeId === id;
                return (
                  <div
                    key={id}
                    className="relative flex-1 min-w-[280px]"
                    onMouseEnter={() => setActiveId(id)}
                  >
                    <motion.article
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        layout: { duration: 0.25, type: "spring", bounce: 0.15 },
                        opacity: { duration: 0.25, delay: (pageIdx * 2 + i) * 0.05 },
                      }}
                      className={`group flex gap-4 items-stretch rounded-lg border cursor-pointer p-4 ${
                        isActive
                          ? "border-[var(--accent)] bg-[var(--bg-elevated)] shadow-xl flex-[1.25]"
                          : "border-[var(--border)] bg-[var(--bg-card)] opacity-80 hover:opacity-100 flex-[0.9]"
                      }`}
                    >
                      <motion.div
                        className="pt-1 shrink-0"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: (pageIdx * 2 + i) * 0.12,
                        }}
                      >
                        <RobotMascot size="sm" animate={false} />
                        <p className="mt-1 text-[0.6rem] text-center font-mono text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                          fetching <FetchDots />
                        </p>
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-sm md:text-base">{p.title}</h3>
                          <span className="font-mono text-[0.65rem] text-[var(--accent)]">{p.period}</span>
                        </div>
                        <p className="text-[var(--text-muted)] text-xs md:text-sm">{p.org}</p>
                        <p className="text-[var(--text)] text-xs md:text-sm mt-3">
                          {p.description}
                        </p>

                        {/* Full details when active */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key="details"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 border-t border-[var(--border)] pt-3 space-y-2"
                            >
                              <ul className="space-y-1.5 text-xs md:text-sm text-[var(--text)]">
                                {p.highlights.map((h, j) => (
                                  <li key={j} className="flex gap-2">
                                    <span className="text-[var(--accent)] shrink-0">▹</span>
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {p.stack.map((s, j) => (
                                  <span
                                    key={j}
                                    className="px-2 py-0.5 rounded text-[0.65rem] font-mono bg-[var(--bg-deep)] text-[var(--accent)] border border-[var(--border)]"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                              {p.github && (
                                <a
                                  href={p.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block font-mono text-[0.7rem] text-[var(--accent)] hover:underline"
                                >
                                  GitHub →
                                </a>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
