import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "ambreen@aayitech.com",
    href: "mailto:ambreen@aayitech.com",
    icon: Mail,
  },
  {
    id: 2,
    title: "Phone",
    value: "+92 318 5799151",
    href: "https://wa.me/923185799151",
    icon: Phone,
  },
  {
    id: 3,
    title: "Location",
    value: "Pakistan",
    href: "#",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Availability",
    value: "Open for Freelance & Remote Projects",
    href: "#",
    icon: Clock,
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/ambreen-f-50070a62",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/Ambreen110",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/ambreenfatiima/",
    icon: FaInstagram,
  },
  {
    id: 4,
    name: "WhatsApp",
    href: "https://wa.me/923185799151",
    icon: Phone,
  },
];

export const contactStats = [
  {
    id: 1,
    value: "24h",
    label: "Average Response",
  },
  {
    id: 2,
    value: "Remote",
    label: "Worldwide Collaboration",
  },
  {
    id: 3,
    value: "100%",
    label: "Project Commitment",
  },
];

export const contactTopics = [
  "CRM Implementation",
  "AI Automation",
  "Web Development",
  "API Integrations",
  "Technical Consulting",
  "Workflow Automation",
];