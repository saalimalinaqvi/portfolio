import ParticleBackground from "@/components/ParticleBackground";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Particle Background (interactive) */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-12 py-20 pointer-events-none">
        <HeroContent />
      </div>
    </main>
  );
}
