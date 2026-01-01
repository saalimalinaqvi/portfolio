"use client";

import { useEffect, useState } from "react";

export default function ScrollDown() {
  const [hidden, setHidden] = useState(false);

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
    document
      .getElementById("content")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContent}
      aria-label="Scroll down"
      className={`
        fixed left-1/2 z-30 -translate-x-1/2
        transition-all duration-500
        ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}
        bottom-[calc(env(safe-area-inset-bottom)+24px)]
        md:bottom-10
      `}
    >
      {/* Animated Arrow */}
      <div className="flex flex-col items-center gap-2">
        <span className="arrow-down" />
      </div>
    </button>
  );
}
