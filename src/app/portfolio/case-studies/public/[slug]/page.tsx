import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const CASES = {
  "threat-model": { title: "Threat Modeling", summary: "Structured threat modeling approach." },
  "public-review": { title: "Public Security Review", summary: "High-level security review." },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = (CASES as any)[slug];
  if (!c) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{c.title}</h1>
        <p className="text-gray-400">{c.summary}</p>
      </div>
    </main>
  );
}
