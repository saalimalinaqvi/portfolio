"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Globe, Shield, Code, Database } from "lucide-react";

const stats = [
  { label: "Engineering", icon: <Code className="w-5 h-5" />, color: "text-sky-400" },
  { label: "Security", icon: <Shield className="w-5 h-5" />, color: "text-blue-500" },
  { label: "Analytics", icon: <Database className="w-5 h-5" />, color: "text-indigo-400" },
];

export default function AboutIntro() {
  return (
    <section className="relative w-full bg-black py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: Bio & Description */}
          <motion.div
            className="lg:col-span-3 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6">
              Who am I?
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Secure</span> & <br />
              Digital Experiences
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I am a multidisciplinary engineer operating at the apex of <span className="text-white font-medium">Cybersecurity</span>, <span className="text-white font-medium">Full-Stack Development</span>, and <span className="text-white font-medium">Data Intelligence</span>.
              </p>
              <p>
                My philosophy centers on building digital fortresses that are not just <span className="text-sky-400">technically superior</span>, but intuitively designed for human interaction. I transform abstract complexity into robust, high-performance systems.
              </p>
            </div>

            {/* Quick Skill Tags */}
            <div className="flex flex-wrap gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-colors"
                >
                  <span className={stat.color}>{stat.icon}</span>
                  <span className="text-white font-medium text-sm tracking-wide">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Connect Card */}
          <motion.div
            className="lg:col-span-2 w-full lg:sticky lg:top-32"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 rounded-[2.5rem] bg-zinc-900 border border-white/10 overflow-hidden group">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-sky-500/40 transition-colors duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Available for freelance projects, technical consulting, and strategic collaborations.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://github.com/saalimalinaqvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-white">
                        <Github className="w-5 h-5" />
                      </div>
                      <span className="text-white font-semibold">GitHub</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/saalimalinaqvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-600/20 text-blue-500">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span className="text-white font-semibold">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </a>

                  <div className="pt-4 flex items-center justify-between text-xs text-gray-500 font-mono italic">
                    <span className="flex items-center gap-2">
                      <Globe className="w-3 h-3 text-sky-400" /> Remote Ready
                    </span>
                    <span>Lucknow, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
