"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.08]"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
    {/* Icon */}
<div className="relative z-10 mb-6">
  <ServiceIcon icon={Icon} />
</div>

      {/* Title */}
      <h3 className="relative z-10 mb-3 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 leading-7 text-gray-400">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="relative z-10 mt-8 flex items-center text-cyan-400">
        <span className="text-sm font-medium">
          Learn More
        </span>

        <ArrowUpRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/20" />
    </motion.div>
  );
}