"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

export default function HeroContent() {
  const [text] = useTypewriter({
    words: [
      "Cybersecurity Engineer",
      "Full-Stack Engineer",
      "Data Analytics Specialist",
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <div className="max-w-3xl text-white">
      {/* Who am I */}
      <p className="text-lg text-gray-400 mb-2">
        Who am I?
      </p>

      {/* I am a */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        I am a{" "}
        <span className="text-cyan-400">
          {text}
          <Cursor cursorStyle="|" />
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-gray-300">
        Let’s find out who I really am.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap pointer-events-auto">
        <Link
          href="/portfolio"
          className="
            rounded-full px-6 py-3
            bg-cyan-500 text-black font-semibold
            transition-all duration-300
            hover:bg-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]
          "
        >
          View Portfolio
        </Link>

        <Link
          href="/ads"
          className="
            rounded-full px-6 py-3
            border border-white/20
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white/10
            hover:border-white/40
          "
        >
          Ads
        </Link>
      </div>
    </div>
  );
}
