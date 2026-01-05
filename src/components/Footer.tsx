"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
    el.style.setProperty("--o", "1");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--o", "0");
  };

  return (
    <footer className="relative z-20 w-full">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        className="
          relative w-full
          overflow-hidden
          bg-black/80
          backdrop-blur-2xl
          border-t border-white/10
        "
      >
        {/* Cursor glow */}
        <span
          className="
            pointer-events-none
            absolute inset-0
            opacity-[var(--o)]
            transition-opacity duration-300
          "
          style={{
            background:
              "radial-gradient(260px at var(--x) var(--y), rgba(34,211,238,0.22), transparent 65%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 text-gray-300">
          {/* Left */}
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Saalim Ali Naqvi
          </span>

          {/* Center links */}
          <div className="flex gap-6 text-sm">
            <FooterLink href="/privacy-policy">
              Privacy Policy
            </FooterLink>
            <FooterLink href="/terms-and-conditions">
              Terms & Conditions
            </FooterLink>
          </div>

          {/* Right socials */}
          <div className="flex gap-4">
            <Social href="https://github.com/" icon={Github} />
            <Social href="https://linkedin.com/" icon={Linkedin} />
            <Social href="mailto:contact@example.com" icon={Mail} />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        relative text-gray-400
        transition-colors duration-300
        hover:text-white
        after:absolute after:left-0 after:-bottom-1
        after:h-px after:w-0 after:bg-blue-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}

function Social({
  href,
  icon: Icon,
}: {
  href: string;
  icon: any;
}) {
  return (
    <Link
      href={href}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        bg-white/5
        border border-white/10
        text-white/70
        transition-all duration-300
        hover:text-white
        hover:bg-white/10
        hover:shadow-[0_0_18px_rgba(34,211,238,0.55)]
      "
    >
      <Icon size={18} />
    </Link>
  );
}
