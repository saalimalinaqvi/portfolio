"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
import { Download, Briefcase } from "lucide-react";

export default function HeroContent() {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Engineer",
      "Cybersecurity SOAR",
      "Data Analytics Expert",
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4">
      {/* Greeting with fade-in animation */}
      <div className="mb-4 animate-fadeIn">
        <p className="text-sm md:text-base text-gray-400 mb-1 tracking-wide uppercase font-medium">
          Welcome! I am
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Saalim Ali Naqvi
        </h2>
      </div>

      {/* Main heading with typewriter */}
      <div className="mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
          <span className="text-white">I am a </span>
          <br className="sm:hidden" />
          <span className="relative inline-block">
            <span className="text-sky-400">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </span>
        </h1>
      </div>

      {/* Subtitle with classic tech accents */}
      <div className="mb-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
          Passionate about building <span className="text-white font-semibold">secure</span>,{" "}
          <span className="text-white font-semibold">scalable</span>, and{" "}
          <span className="text-white font-semibold">innovative</span> solutions in the digital space.
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Let's create something <span className="text-sky-400 font-medium border-b border-sky-400/30">extraordinary</span> together.
        </p>
      </div>

      {/* Classic Compact Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-3 justify-center items-center pointer-events-auto animate-fadeIn"
        style={{ animationDelay: "0.6s" }}
      >
        <Link
          href="/portfolio"
          className="
            group relative
            w-full sm:w-auto
            rounded-full px-6 py-2
            bg-sky-500 text-black font-semibold text-sm
            transition-all duration-300
            hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]
            active:scale-95
            overflow-hidden
          "
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4" />
            View Portfolio
          </span>
        </Link>

        <Link
          href="/resume"
          className="
            group relative
            w-full sm:w-auto
            rounded-full px-6 py-2
            border border-gray-600
            text-gray-300 font-semibold text-sm
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white/5
            hover:border-gray-400
            hover:text-white
            active:scale-95
          "
        >
          <span className="flex items-center justify-center gap-2">
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download Resume
          </span>
        </Link>
      </div>

      {/* Minimal scroll hint */}
      <div
        className="mt-8 animate-fadeIn hidden md:block"
        style={{ animationDelay: "0.8s" }}
      >
        <p className="text-xs text-gray-600 animate-pulse tracking-widest uppercase">
          Scroll Down
        </p>
      </div>
    </div>
  );
}
