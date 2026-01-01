"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollDown() {
  const [hidden, setHidden] = useState(false);
  const clickedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContent = () => {
    if (clickedRef.current) return;
    clickedRef.current = true;

    const target = document.getElementById("content");

    // 🔧 FIX 1: Wait for layout / canvas to settle
    requestAnimationFrame(() => {
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // 🔧 FIX 2: Fallback scroll (always works)
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    });

    // 🔧 FIX 3: Reset click lock safely
    setTimeout(() => {
      clickedRef.current = false;
    }, 700);

    // Hide after scroll begins
    setTimeout(() => {
      setHidden(true);
    }, 150);
  };

  return (
    <button
      onClick={scrollToContent}
      aria-label="Scroll down"
      className={`
        fixed left-1/2 z-30 -translate-x-1/2
        transition-all duration-500
        ${hidden ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}
        bottom-[calc(env(safe-area-inset-bottom)+28px)]
        md:bottom-12
        group
      `}
    >
      {/* Scroll Pill */}
      <div
        className="
          relative flex items-center justify-center
          h-14 w-9
          rounded-full
          bg-white/5
          backdrop-blur-xl
          border border-white/15
          transition-all duration-300
          group-hover:scale-105
          active:scale-95
          group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
      >
        {/* Glow ring */}
        <span
          className="
            pointer-events-none
            absolute inset-0
            rounded-full
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            animate-glowPulse
          "
        />

        {/* Inner animated dot */}
        <span className="scroll-dot relative z-10" />
      </div>
    </button>
  );
}
