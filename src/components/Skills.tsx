"use client";

import { motion } from "framer-motion";
import {
  Shield, Code2, Database, Cloud, Lock, Server, BarChart3, Globe,
  Cpu, Terminal, Zap, Layers
} from "lucide-react";

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    color: "from-blue-600 to-sky-500",
    skills: [
      { name: "AppSec & Pentesting", level: 90 },
      { name: "Network Infrastructure", level: 85 },
      { name: "Threat Intelligence", level: 80 },
      { name: "SOAR Automation", level: 95 },
    ],
  },
  {
    title: "Web Engineering",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-sky-500 to-blue-400",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript / Node.js", level: 92 },
      { name: "Distributed Systems", level: 88 },
      { name: "Performance Tuning", level: 90 },
    ],
  },
  {
    title: "Data Intelligence",
    icon: <Database className="w-6 h-6" />,
    color: "from-indigo-600 to-blue-500",
    skills: [
      { name: "Power BI & Tableau", level: 94 },
      { name: "PostgreSQL & NoSQL", level: 89 },
      { name: "Predictive Analytics", level: 82 },
      { name: "Data Architecture", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-700 to-indigo-600",
    skills: [
      { name: "Docker & K8s", level: 85 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Cloudflare Stack", level: 95 },
      { name: "Linux Administration", level: 92 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative w-full bg-black py-32 px-6">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3.5 h-3.5" /> Technical Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Capabilities <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Unleashed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A deep-dive into the specialized technologies I leverage to solve complex digital challenges.
          </motion.p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/10 backdrop-blur-xl hover:border-sky-500/30 transition-all duration-500"
            >
              {/* Group Header */}
              <div className="flex items-center gap-5 mb-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${group.color} text-black shadow-lg shadow-sky-500/10`}>
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <div className="h-1 w-12 bg-sky-500 mt-1 rounded-full opacity-50 group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-8">
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                      <span className="text-sky-400 font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + si * 0.1, ease: "circOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Background Element */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Layers className="w-32 h-32" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500 text-sm italic"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-400" /> Constant Innovation
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-sky-400" /> Scalable Architectures
          </div>
        </motion.div>
      </div>
    </section>
  );
}
