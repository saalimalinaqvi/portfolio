import Scene from "@/three/Scene";
import HeroContent from "@/components/HeroContent";
import ScrollDown from "@/components/ScrollDown";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Background (interactive) */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Hero Content (does NOT block 3D) */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-8 md:px-20 pt-28 pointer-events-none">
        <HeroContent />
      </div>

      {/* Scroll indicator (clickable) */}
      <ScrollDown />
    </main>
  );
}
