import { motion } from "framer-motion";
import RobotMascot from "./RobotMascot";

function Gear({ className, reverse = false }) {
  return (
    <svg
      className={`gear ${reverse ? "animate-gear-slow-reverse" : "animate-gear-slow"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-grid pt-24 pb-16">
      {/* Decorative gears */}
      <Gear className="absolute top-20 left-10 w-16 h-16 opacity-40" />
      <Gear className="absolute top-32 right-16 w-12 h-12 opacity-30" reverse />
      <Gear className="absolute bottom-24 left-1/4 w-10 h-10 opacity-25" />
      <Gear className="absolute bottom-40 right-1/4 w-14 h-14 opacity-35" reverse />

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto px-6 w-full mb-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
          <a href="mailto:rbogulla@ufl.edu" className="hover:text-[var(--accent)] transition">rbogulla@ufl.edu</a>
          <span className="text-[var(--border)]">|</span>
          <a href="tel:+13522839121" className="hover:text-[var(--accent)] transition">+1 (352) 283-9121</a>
          <span className="text-[var(--border)]">|</span>
          <a href="https://www.linkedin.com/in/rohit-bogulla/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition">LinkedIn</a>
          <span className="text-[var(--border)]">|</span>
          <a href="https://github.com/Kamehamehaaaaa" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition">GitHub</a>
          <span className="text-[var(--border)]">|</span>
          <span>Gainesville, Florida 32608</span>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Rohit U Bogulla
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-mono text-sm text-[var(--accent)] mt-2 mb-4"
          >
            &gt; Software Developer and AI/ML Platform Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[var(--text-muted)] text-lg max-w-2xl leading-relaxed"
          >
            MS in Computer Science (4.0 GPA) at University of Florida. 4+ years building production ML systems and large-scale distributed infrastructure - 150M+ records at sub-200ms latency, 10M+ events/day with 99.9% uptime. Python, C++, Go, Java · PyTorch, TensorFlow, LangChain · Kubernetes, Kafka, Spark.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--bg-deep)] rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              Experience
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <RobotMascot size="lg" animate={true} />
        </motion.div>
      </div>
    </section>
  );
}
