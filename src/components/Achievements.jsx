import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-[var(--bg-card)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Achievements
        </motion.h2>
        <ul className="space-y-3">
          {achievements.map((a, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-3 text-[var(--text)]"
            >
              <span className="text-[var(--accent)] shrink-0">★</span>
              <span>{a}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
