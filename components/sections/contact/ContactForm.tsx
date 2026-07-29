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

const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  service: "CRM Implementation",
  message: "",
});
function handleChange(
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
}
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    setSuccess("Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "CRM Implementation",
      message: "",
    });

  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 backdrop-blur-xl"
>
  <h3 className="mb-2 text-3xl font-bold text-foreground">
    Start Your Project
  </h3>

  <p className="mb-8 text-muted-foreground">
    Tell me about your project. I'll get back to you within 24 hours.
  </p>

  <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  placeholder="John Doe"
className="
w-full
rounded-xl
border
border-border
bg-background
py-3
pl-12
pr-4
text-foreground
placeholder:text-muted-foreground
outline-none
transition-all
duration-300
focus:border-accent
focus:ring-2
focus:ring-accent/20
"            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>

          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

           <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Your Company"
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Service Needed
          </label>

          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="
w-full
appearance-none
rounded-xl
border
border-border
bg-background
py-3
pl-12
pr-4
text-foreground
outline-none
transition-all
duration-300
focus:border-accent
focus:ring-2
focus:ring-accent/20
"
>              <option>CRM Implementation</option>
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
          <label className="mb-2 block text-sm font-medium text-foreground">
            Project Details
          </label>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-muted-foreground" />

           <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  placeholder="Tell me about your project..."
              className="
w-full
resize-none
rounded-xl
border
border-border
bg-background
py-3
pl-12
pr-4
text-foreground
placeholder:text-muted-foreground
outline-none
transition-all
duration-300
focus:border-accent
focus:ring-2
focus:ring-accent/20
"
            />
          </div>
        </div>
{success && (
  <div className="rounded-xl border border-green-600/30
bg-green-600/10
text-green-700 px-4 py-3 text-sm font-medium">
    {success}
  </div>
)}

{error && (
  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
    {error}
  </div>
)}
        {/* Button */}
        <Button
  type="submit"
  disabled={loading}
  className="
    group
    w-full
    bg-primary
    py-6
    text-lg
    font-semibold
    text-primary-foreground
    transition-all
    duration-300
    hover:bg-accent
    hover:text-background
    disabled:opacity-60
  "
>
          <>
  {loading ? "Sending..." : "Send Message"}
  <Send
  className={`transition-transform duration-300 ${
    loading
      ? "animate-pulse"
      : "group-hover:translate-x-1"
  }`}
/>
</>
        </Button>
      </form>
    </motion.div>
  );
}