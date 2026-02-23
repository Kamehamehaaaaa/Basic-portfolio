import { motion } from "framer-motion";

/**
 * AI Robot mascot - used in Hero and to "present" projects/experience.
 * size: "lg" (hero), "md" (section), "sm" (cards)
 */
export default function RobotMascot({ size = "md", animate = true, className = "" }) {
  const sizes = {
    sm: { w: 80, h: 100 },
    md: { w: 140, h: 180 },
    lg: { w: 200, h: 260 },
  };
  const { w, h } = sizes[size];
  const scale = w / 200;

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={animate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ width: w, height: h }}
    >
      <svg
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Antenna */}
        <motion.line
          x1="100"
          y1="20"
          x2="100"
          y2="0"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={animate ? { opacity: [1, 0.5, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="100" cy="0" r="6" fill="var(--accent)" />

        {/* Head */}
        <rect
          x="40"
          y="25"
          width="120"
          height="70"
          rx="12"
          fill="var(--bg-elevated)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        {/* Screen / face */}
        <rect
          x="55"
          y="40"
          width="90"
          height="40"
          rx="6"
          fill="var(--bg-deep)"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.9"
        />
        {/* Eyes */}
        <motion.ellipse
          cx="80"
          cy="58"
          rx="8"
          ry="10"
          fill="var(--accent)"
          animate={animate ? { ry: [10, 6, 10] } : {}}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.ellipse
          cx="120"
          cy="58"
          rx="8"
          ry="10"
          fill="var(--accent)"
          animate={animate ? { ry: [10, 6, 10] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
        />
        {/* Mouth / status line */}
        <rect x="75" y="72" width="50" height="4" rx="2" fill="var(--text-muted)" />

        {/* Neck */}
        <rect x="85" y="92" width="30" height="18" fill="var(--gear)" stroke="var(--border)" strokeWidth="1" />

        {/* Body */}
        <rect
          x="30"
          y="108"
          width="140"
          height="100"
          rx="12"
          fill="var(--bg-elevated)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        {/* Chest panel */}
        <rect
          x="50"
          y="125"
          width="100"
          height="65"
          rx="6"
          fill="var(--bg-deep)"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.8"
        />
        {/* Panel lines (code-like) */}
        <line x1="60" y1="138" x2="140" y2="138" stroke="var(--text-muted)" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="150" x2="100" y2="150" stroke="var(--text-muted)" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="162" x2="130" y2="162" stroke="var(--text-muted)" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="174" x2="80" y2="174" stroke="var(--accent)" strokeWidth="1" opacity="0.8" />

        {/* Shoulder gears */}
        <circle cx="30" cy="118" r="14" fill="var(--gear)" stroke="var(--border)" strokeWidth="1" />
        <circle cx="170" cy="118" r="14" fill="var(--gear)" stroke="var(--border)" strokeWidth="1" />
        {/* Gear teeth */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i * 60 * Math.PI) / 180;
          const r = 14;
          const x1 = 30 + r * Math.cos(a);
          const y1 = 118 + r * Math.sin(a);
          const x2 = 30 + (r + 4) * Math.cos(a);
          const y2 = 118 + (r + 4) * Math.sin(a);
          return (
            <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gear-highlight)" strokeWidth="2" strokeLinecap="round" />
          );
        })}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i * 60 * Math.PI) / 180;
          const r = 14;
          const x1 = 170 + r * Math.cos(a);
          const y1 = 118 + r * Math.sin(a);
          const x2 = 170 + (r + 4) * Math.cos(a);
          const y2 = 118 + (r + 4) * Math.sin(a);
          return (
            <line key={`r-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gear-highlight)" strokeWidth="2" strokeLinecap="round" />
          );
        })}

        {/* Base / legs */}
        <rect x="50" y="205" width="35" height="45" rx="6" fill="var(--bg-elevated)" stroke="var(--border)" strokeWidth="1" />
        <rect x="115" y="205" width="35" height="45" rx="6" fill="var(--bg-elevated)" stroke="var(--border)" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
