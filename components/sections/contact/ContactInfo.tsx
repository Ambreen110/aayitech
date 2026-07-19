"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import {
  contactInfo,
  contactStats,
} from "./contact.data";

import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Heading */}
      <div>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          <CheckCircle2 className="h-4 w-4" />
          Available for New Projects
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Let's Build Something Amazing Together
        </h2>

        <p className="mt-5 max-w-lg leading-8 text-zinc-400">
          Whether you need CRM implementation, AI automation,
          API integrations, or a modern web application,
          I'd love to hear about your project and discuss
          how we can create the right solution.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              {item.href === "#" ? (
                <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      {item.title}
                    </p>

                    <h3 className="mt-1 font-semibold text-white">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  target="_blank"
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      {item.title}
                    </p>

                    <h3 className="mt-1 font-semibold text-white">
                      {item.value}
                    </h3>
                  </div>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {contactStats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
}