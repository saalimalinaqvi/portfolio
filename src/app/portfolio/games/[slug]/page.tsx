import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "fps-game": { title: "Unity FPS Prototype", description: "Gameplay mechanics and optimization." },
  "simulation-app": { title: "Simulation App", description: "Interactive simulation for learning." },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = (PROJECTS as any)[slug];
  if (!p) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{p.title}</h1>
        <p className="text-gray-400">{p.description}</p>
      </div>
    </main>
  );
}
