"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Code2,
  Database,
  Cloud,
  Lock,
  Server,
  BarChart3,
  Globe,
} from "lucide-react";

const skills = [
  {
    title: "Cybersecurity",
    icon: Shield,
    items: [
      { label: "Application Security", icon: Lock },
      { label: "Network Security", icon: Globe },
      { label: "Threat Analysis", icon: Shield },
      { label: "Security Architecture", icon: Server },
      { label: "Linux & Kali", icon: Code2 },
    ],
  },
  {
    title: "Engineering",
    icon: Code2,
    items: [
      { label: "Next.js / React", icon: Code2 },
      { label: "TypeScript", icon: Code2 },
      { label: "API Design", icon: Globe },
      { label: "Backend Systems", icon: Server },
      { label: "Performance Optimization", icon: BarChart3 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    items: [
      { label: "Power BI", icon: BarChart3 },
      { label: "PostgreSQL", icon: Database },
      { label: "Data Modeling", icon: Database },
      { label: "Dashboards", icon: BarChart3 },
      { label: "Google Analytics", icon: Globe },
    ],
  },
  {
    title: "Infrastructure & Cloud",
    icon: Cloud,
    items: [
      { label: "Servers & Hosting", icon: Server },
      { label: "Cloudflare", icon: Cloud },
      { label: "Linux Servers", icon: Server },
      { label: "System Hardening", icon: Lock },
      { label: "Monitoring", icon: BarChart3 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative w-full bg-black py-12 px-6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Core domains and technologies I work with across security,
            engineering, analytics, and infrastructure.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.03,
                }}
                className="
                  relative
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-md
                  transition-shadow
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                  will-change-transform
                "
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <GroupIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {group.items.map(({ label, icon: ItemIcon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <ItemIcon className="h-4 w-4 text-cyan-400" />
                      {label}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
