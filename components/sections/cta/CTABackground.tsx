"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, left: "8%", top: "18%", size: 5, duration: 6, delay: 0 },
  { id: 2, left: "18%", top: "72%", size: 7, duration: 8, delay: 1 },
  { id: 3, left: "28%", top: "42%", size: 4, duration: 7, delay: 0.5 },
  { id: 4, left: "38%", top: "14%", size: 6, duration: 9, delay: 2 },
  { id: 5, left: "48%", top: "62%", size: 5, duration: 8, delay: 0.8 },
  { id: 6, left: "58%", top: "28%", size: 7, duration: 7, delay: 1.5 },
  { id: 7, left: "68%", top: "78%", size: 4, duration: 6, delay: 0.2 },
  { id: 8, left: "78%", top: "18%", size: 6, duration: 8, delay: 1.8 },
  { id: 9, left: "88%", top: "58%", size: 5, duration: 7, delay: 0.6 },
  { id: 10, left: "94%", top: "30%", size: 4, duration: 9, delay: 1.2 },
  { id: 11, left: "12%", top: "90%", size: 6, duration: 8, delay: 2.4 },
  { id: 12, left: "24%", top: "8%", size: 5, duration: 7, delay: 0.9 },
  { id: 13, left: "36%", top: "86%", size: 4, duration: 6, delay: 1.7 },
  { id: 14, left: "52%", top: "48%", size: 7, duration: 9, delay: 0.3 },
  { id: 15, left: "64%", top: "10%", size: 5, duration: 8, delay: 2 },
  { id: 16, left: "74%", top: "52%", size: 6, duration: 7, delay: 1.3 },
  { id: 17, left: "84%", top: "84%", size: 4, duration: 6, delay: 0.7 },
  { id: 18, left: "92%", top: "70%", size: 5, duration: 8, delay: 2.2 },
];

export default function CTABackground() {
  return (
    <>
      {/* Primary Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/12 blur-[140px]" />

      {/* Accent Glow */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,rgba(23,53,46,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,53,46,0.12)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-accent/50"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}