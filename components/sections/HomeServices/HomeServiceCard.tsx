"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ServiceIcon from "../services/ServiceIcon";
import { iconMap } from "@/lib/iconMap";

interface Props {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export default function HomeServiceCard({
  slug,
  title,
  description,
  icon,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Link href={`/services/${slug}`}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
      >
        <div className="mb-5">
          <ServiceIcon icon={Icon} />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </div>
      </motion.article>
    </Link>
  );
}