"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Kali Linux", src: "/tech/kali.svg" },
  { name: "Windows", src: "/tech/windows.svg" },
  { name: "Linux", src: "/tech/linux.svg" },
  { name: "Cloudflare", src: "/tech/cloudflare.svg" },
  { name: "Power BI", src: "/tech/powerbi.svg" },
  { name: "Google Analytics", src: "/tech/google-analytics.svg" },
  { name: "Servers", src: "/tech/server.svg" },
  { name: "Cybersecurity", src: "/tech/security.svg" },
  { name: "DDOS Protection", src: "/tech/ddos.svg" },
  { name: "Excel", src: "/tech/excel.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
  { name: "Splunk", src: "/tech/splunk.svg" },
  { name: "Tableau", src: "/tech/tableau.svg" },
  { name: "Wire Shark", src: "/tech/wireshark.svg" },
  { name: "The Hive", src: "/tech/thehive.svg" },
];

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    let lastTime = performance.now();
    const speed = 0.08; // Slower for premium feel

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!paused) {
        track.scrollLeft += delta * speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  return (
    <section className="relative w-full bg-black pt-20 pb-10 overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-2"
        >
          Technology Stack
        </motion.p>
        <h3 className="text-xl md:text-2xl font-bold text-white/50">Powers my creative output</h3>
      </div>

      <div className="relative group">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-12 overflow-x-hidden select-none py-4"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 shrink-0 px-8 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/30 hover:bg-white/10 transition-all duration-300 group/chip cursor-default"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-8 w-auto grayscale group-hover/chip:grayscale-0 transition-all duration-500"
              />
              <span className="text-sm font-semibold text-gray-400 group-hover/chip:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
