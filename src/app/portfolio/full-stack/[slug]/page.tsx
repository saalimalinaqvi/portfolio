import { notFound } from "next/navigation";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "saas-builder": {
    title: "SaaS Website Builder",
    description: "Generate and deploy SaaS websites instantly.",
    longDescription: "Templates, auth, deployment automation, SEO.",
    stack: ["Next.js", "TypeScript", "APIs", "Cloud"],
    features: ["Instant sites", "Auth", "SEO", "Auto deploy"],
    images: [
      "/portfolio/fullstack/saas/hero.png",
      "/portfolio/fullstack/saas/dashboard.png",
    ],
    liveUrl: "https://byindian.in",
  },
  "cyber-firm": {
    title: "Cybersecurity Company Website",
    description: "Secure marketing site for a cyber firm.",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "Tailwind", "SEO"],
    features: ["Fast", "Secure", "SEO"],
    images: ["/portfolio/fullstack/cyber/hero.png"],
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
