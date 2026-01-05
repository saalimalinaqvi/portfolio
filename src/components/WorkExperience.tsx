"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "SimRay Digital",
    duration: "June 2025 – Present",
    role: "Full Stack Engineer",
    location: "Lucknow, Uttar Pradesh",
    points: [
      "Building and managing modern web applications using scalable, efficient architectures.",
      "Ensuring high-quality code, security best practices, and seamless deployment processes.",
    ],
  },
  {
    company: "Next Soft Media",
    duration: "April 2025 – June 2025",
    role: "Web Developer",
    location: "Lucknow, Uttar Pradesh",
    points: [
      "Developed and maintained responsive, user-friendly websites.",
      "Collaborated with teams to implement interactive features and improve user experience.",
      "Optimized applications for performance, SEO, and cross-browser compatibility.",
    ],
  },
  {
    company: "True Form Games",
    duration: "Aug 2024 – April 2025",
    role: "Game Developer (Trainee)",
    location: "Era Medical University, Lucknow, Uttar Pradesh",
    points: [
      "Built interactive and engaging gameplay experiences from the ground up.",
      "Worked on gameplay programming and performance optimization.",
      "Proficient in Unity and C#, focusing on robust and high-performance game features.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="relative w-full bg-black py-32 px-6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Professional experience across engineering, web development, and
            interactive systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-md
                transition-all
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
              "
            >
              {/* Header */}
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>

              <div className="mb-3 text-gray-300">
                <span className="font-medium text-white">{exp.role}</span>
                <span className="mx-2 text-gray-500">•</span>
                <span>{exp.location}</span>
              </div>

              <ul className="mt-4 space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
