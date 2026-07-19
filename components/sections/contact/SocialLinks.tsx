"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socialLinks } from "./contact.data";

export default function SocialLinks() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">
        Connect With Me
      </h3>

      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                aria-label={social.name}
                className="
                  group
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:text-cyan-400
                "
              >
                <Icon
                  size={22}
                  className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}