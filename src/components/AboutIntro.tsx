"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function AboutIntro() {
  return (
    <motion.section
      className="relative w-full bg-black py-32 px-6 text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Subtle glow backdrop */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About Me
        </h2>

        {/* Main text */}
        <p className="mb-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
          I work at the intersection of{" "}
          <span className="text-blue-400">cybersecurity</span>,{" "}
          <span className="text-blue-400">full-stack engineering</span>, and{" "}
          <span className="text-blue-400">data analytics</span>, focusing on
          building secure, scalable, and reliable digital systems.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-gray-400">
          My work involves designing security-first architectures, developing
          modern web platforms, and transforming complex data into meaningful,
          actionable insights. I care deeply about performance, resilience, and
          long-term maintainability.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/saalimalinaqvi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              backdrop-blur-md
              transition-all duration-300
              hover:border-blue-400/40
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              hover:scale-110
            "
          >
            <Github className="h-5 w-5 text-gray-300 hover:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/saalimalinaqvi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
              backdrop-blur-md
              transition-all duration-300
              hover:border-blue-400/40
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              hover:scale-110
            "
          >
            <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
