"use client";

export default function ScrollDown() {
  const scrollToContent = () => {
    document
      .getElementById("content")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition"
      aria-label="Scroll down"
    >
      <span className="text-xs tracking-widest uppercase">
        Scroll
      </span>

      <div className="h-10 w-6 rounded-full border border-white/40 flex items-start justify-center p-1">
        <span className="block h-2 w-2 rounded-full bg-white animate-scrollDot" />
      </div>
    </button>
  );
}
