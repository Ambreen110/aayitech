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
        className="group h-full rounded-2xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
      >
        <div className="mb-5">
          <ServiceIcon icon={Icon} />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 font-medium text-accent transition-all duration-300 group-hover:gap-3 group-hover:text-primary">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </motion.article>
    </Link>
  );
}