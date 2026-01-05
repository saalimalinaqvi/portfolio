import { notFound } from "next/navigation";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "simraydigi": {
    title: "Simray Digital Company",
    description: "Generate and deploy SaaS websites instantly.",
    longDescription: "Templates, auth, deployment automation, SEO.",
    stack: ["Next.js", "TypeScript", "APIs", "Cloud"],
    features: ["Instant sites", "Auth", "SEO", "Auto deploy"],
    images: [
      "/portfolio/fullstack/saas/hero.png",
      "/portfolio/fullstack/saas/dashboard.png",
    ],
    liveUrl: "https://www.simraydigital.com",
  },
  "nextsoftmedia": {
    title: "Next Soft Media Company",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "themsg": {
    title: "The MSG Foundation (NGO)",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "lushh": {
    title: "Lushh Salon",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "rcreative": {
    title: "R Creative Interior",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "datadigger": {
    title: "R Creative Interior",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "caspianspin": {
    title: "R Creative Interior",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "fossildiamond": {
    title: "R Creative Interior",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
  "zoti": {
    title: "R Creative Interior",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/portfolio/fullstack/cyber/hero.png",
      "/portfolio/fullstack/cyber/hero.png",
    ],
    liveUrl: "https://darkguard.example.com",
  },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = (PROJECTS as any)[slug];
  if (!p) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">{p.title}</h1>
        <p className="text-gray-400 mb-6">{p.description}</p>
        <p className="text-gray-300 mb-10">{p.longDescription}</p>

        <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
        <ul className="flex flex-wrap gap-3 mb-8">
          {p.stack.map((s: string) => <li key={s} className="rounded-full border px-4 py-1 text-sm">{s}</li>)}
        </ul>

        <h3 className="text-xl font-semibold mb-3">Features</h3>
        <ul className="mb-10 space-y-2 text-gray-300">
          {p.features.map((f: string) => <li key={f}>• {f}</li>)}
        </ul>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {p.images.map((img: string) => (
            <Image key={img} src={img} alt={p.title} width={800} height={450} className="rounded-xl border border-white/10" />
          ))}
        </div>

        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 text-black font-semibold">
            🌐 View Live Website
          </a>
        )}
      </div>
    </main>
  );
}
