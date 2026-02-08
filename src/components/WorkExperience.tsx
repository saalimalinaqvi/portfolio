"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "SimRay Digital",
    duration: "June 2025 – Present",
    role: "Full Stack Engineer",
    location: "Lucknow, Uttar Pradesh",
    color: "bg-sky-500",
    points: [
      "Architecting and scaling modern web ecosystems using high-efficiency distributed paradigms.",
      "Implementing security-first engineering workflows and automated CI/CD pipelines.",
      "Leading technical initiatives for performance optimization and global scalability.",
    ],
  },
  {
    company: "Next Soft Media",
    duration: "April 2025 – June 2025",
    role: "Web Developer",
    location: "Lucknow, Uttar Pradesh",
    color: "bg-blue-500",
    points: [
      "Engineered high-performance, SEO-optimized web platforms with a focus on immersive UX.",
      "Collaborated with cross-functional teams to integrate complex interactive features.",
      "Spearheaded initiatives for cross-browser reliability and accessibility compliance.",
    ],
  },
  {
    company: "True Form Games",
    duration: "Aug 2024 – April 2025",
    role: "Game Developer (Trainee)",
    location: "Era Medical University, Lucknow",
    color: "bg-indigo-500",
    points: [
      "Developed enterprise-grade interactive gameplay systems within the Unity ecosystem.",
      "Optimized real-time rendering pipelines and complex physics simulations.",
      "Mastered C# design patterns for robust, reusable, and high-performance game logic.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="relative w-full bg-black py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Evolution</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Milestone Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-10 h-10 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.color} shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
                  <div className={`absolute inset-0 rounded-full ${exp.color} opacity-20 animate-ping`} />
                </div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className="p-8 md:p-10 rounded-[2rem] bg-zinc-900/60 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 group">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-white/5 ${exp.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                          <p className="text-sky-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-8 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-4 text-gray-400 leading-relaxed text-sm">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${exp.color.replace('bg-', 'text-')} opacity-60`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline centering */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
