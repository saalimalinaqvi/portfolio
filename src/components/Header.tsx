"use client";

import {
  Home,
  Briefcase,
  FileText,
  Mail,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Connect", href: "/contact", icon: Mail },
  { name: "Ads", href: "/ads", icon: Megaphone },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse-follow glow
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = headerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    const el = headerRef.current;
    if (!el) return;
    el.style.setProperty("--opacity", "0");
  };

  return (
    <header
      className={`
        fixed top-6 left-1/2 z-50 -translate-x-1/2
        transition-all duration-300
        ${scrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"}
      `}
    >
      <div
        ref={headerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative overflow-hidden
          flex items-center gap-5
          rounded-full
          bg-black/60
          backdrop-blur-2xl
          border border-white/10
          px-5 py-3
          shadow-xl shadow-black/60
        "
      >
        {/* Hover Glow Layer */}
        <span
          className="
            pointer-events-none
            absolute inset-0
            opacity-[var(--opacity)]
            transition-opacity duration-300
          "
          style={{
            background:
              "radial-gradient(120px at var(--x) var(--y), rgba(34,211,238,0.35), transparent 60%)",
          }}
        />

        {/* Avatar */}
        <div className="relative z-10 h-8 w-8 rounded-full overflow-hidden border border-white/20">
          <img
            src="/avatar.png"
            alt="Saalim Ali Naqvi"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <span className="relative z-10 text-white font-semibold tracking-wide">
          <span className="hidden md:inline">Saalim Ali Naqvi</span>
          <span className="inline md:hidden">SAN</span>
        </span>

        {/* Divider */}
        <span className="relative z-10 h-5 w-px bg-white/20 hidden sm:block" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative group
                  flex items-center gap-2
                  rounded-full px-3 py-2
                  text-sm transition-all duration-300
                  ${
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                <Icon size={16} />

                <span className="hidden md:inline">
                  {item.name}
                </span>

                {/* Active glow underline */}
                {active && (
                  <span
                    className="
                      absolute -bottom-1 left-1/2
                      h-0.5 w-6
                      -translate-x-1/2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_12px_rgba(34,211,238,0.9)]
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
