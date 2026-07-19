"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Building2,
  Briefcase,
  MessageSquare,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // TODO:
    // EmailJS
    // Resend API
    // Formspree
    // Server Action
    // API Route

    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
    >
      <h3 className="mb-2 text-3xl font-bold text-white">
        Start Your Project
      </h3>

      <p className="mb-8 text-zinc-400">
        Tell me about your project. I'll get back to you within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Company
          </label>

          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <input
              type="text"
              placeholder="Your Company"
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Service Needed
          </label>

          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <select className="w-full appearance-none rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400">
              <option>CRM Implementation</option>
              <option>AI Automation</option>
              <option>Web Development</option>
              <option>API Integration</option>
              <option>Technical Consulting</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Project Details
          </label>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-zinc-500" />

            <textarea
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 py-6 text-lg font-semibold text-black hover:bg-cyan-400"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}