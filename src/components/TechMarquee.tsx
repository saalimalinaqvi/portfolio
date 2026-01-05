"use client";

import { useEffect, useRef, useState } from "react";

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
  { name: "Cybersecurity Tools", src: "/tech/security.svg" },
  { name: "DDOS", src: "/tech/ddos.svg" },
  { name: "Spreadsheet", src: "/tech/excel.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
  { name: "Security", src: "/tech/security.svg" },
  { name: "Server", src: "/tech/server.svg" },
  { name: "Splunk", src: "/tech/splunk.svg" },
  { name: "Tableau", src: "/tech/tableau.svg" },
  { name: "Wire Shark", src: "/tech/wireshark.svg" },
];

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    let lastTime = performance.now();
    const speed = 0.18;

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
    <section className="relative w-full bg-black overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onWheel={() => setPaused(true)}
        className="flex gap-6 overflow-x-hidden select-none"
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="tech-chip shrink-0">
            <img src={tech.src} alt={tech.name} className="h-10 w-auto" />
            <span className="mt-2 text-xs text-gray-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
