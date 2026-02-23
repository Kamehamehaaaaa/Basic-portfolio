import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--border)] bg-[var(--bg-deep)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <p className="text-[var(--text-muted)]">
          Interested in ML systems, research, or collaboration?
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
          <a href="mailto:rbogulla@ufl.edu" className="text-[var(--accent)] hover:underline font-mono">
            rbogulla@ufl.edu
          </a>
          <a href="tel:+13522839121" className="text-[var(--accent)] hover:underline font-mono">
            +1 (352) 283-9121
          </a>
          <a
            href="https://linkedin.com/in/rbogulla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rbogulla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline font-mono"
          >
            GitHub
          </a>
        </div>
        <p className="text-[var(--text-muted)] text-sm mt-6">Gainesville, Florida 32608</p>
        <p className="text-[var(--text-muted)] text-xs mt-6 font-mono">
          Built with React · Vite · Tailwind
        </p>
      </motion.div>
    </footer>
  );
}
