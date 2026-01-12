import { notFound } from "next/navigation";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "soc-dashboard": {
    title: "SOC Monitoring Dashboard",
    description: "Real-time SOC dashboard for alerts and incidents.",
    longDescription: "Centralized monitoring with alert correlation and RBAC.",
    features: ["Live log ingestion", "Severity classification", "RBAC"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
  "vapt-platform": {
    title: "Vulnerability Assessment Platform",
    description: "Automated vulnerability scanning and reporting.",
    longDescription: "Enterprise-ready scanning with risk scoring.",
    features: ["OWASP coverage", "Automated scans", "Risk reports"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
  "incident-response-system": {
    title: "Incident ResponseSystem",
    description: "Automated vulnerability scanning and reporting.",
    longDescription: "Enterprise-ready scanning with risk scoring.",
    features: ["OWASP coverage", "Automated scans", "Risk reports"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
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

        <h3 className="text-xl font-semibold mb-3">Features</h3>
        <ul className="mb-10 space-y-2 text-gray-300">
          {p.features.map((f: string) => <li key={f}>• {f}</li>)}
        </ul>

        <div className="grid sm:grid-cols-2 gap-6">
          {p.images.map((img: string) => (
            <Image key={img} src={img} alt={p.title} width={800} height={450} className="rounded-xl border border-white/10" />
          ))}
        </div>
      </div>
    </main>
  );
}
