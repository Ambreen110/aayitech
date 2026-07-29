"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] bg-primary/15",
    x: [0, 80, -40, 0],
    y: [0, 40, -30, 0],
    duration: 22,
  },
  {
    className:
      "right-[-10rem] top-[5rem] h-[28rem] w-[28rem] bg-accent/12",
    x: [0, -70, 30, 0],
    y: [0, -50, 20, 0],
    duration: 26,
  },
  {
    className:
      "bottom-[-12rem] left-[15%] h-[32rem] w-[32rem] bg-primary/10",
    x: [0, 60, -20, 0],
    y: [0, -60, 40, 0],
    duration: 30,
  },
  {
    className:
      "bottom-[-8rem] right-[10%] h-[24rem] w-[24rem] bg-accent/8",
    x: [0, -40, 20, 0],
    y: [0, 50, -20, 0],
    duration: 24,
  },
];

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: blob.x,
            y: blob.y,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
        />
      ))}

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-transparent via-background/40 to-background" />
    </div>
  );
}