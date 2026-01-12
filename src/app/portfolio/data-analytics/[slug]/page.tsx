import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

type Project = {
  title: string;
  description: string;
  tools: string[];
  images: string[];
};

const PROJECTS: Record<string, Project> = {
  "student-risk": {
    title: "Student Risk Prediction",
    description:
      "Predictive analytics system to identify at-risk students using historical data.",
    tools: ["Power BI", "PostgreSQL", "Predictive Modeling"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },

  "bi-dashboard": {
    title: "Business Intelligence Dashboard",
    description:
      "Interactive dashboard providing real-time business insights.",
    tools: ["Power BI", "SQL", "Data Visualization"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },

  "sales-performance-analytics": {
    title: "Sales Performance Analytics",
    description:
      "Analytics platform to track and visualize sales performance.",
    tools: ["Power BI", "PostgreSQL", "ETL Pipelines"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
};

export default async function DataAnalyticsProject({ params }: Props) {
  const { slug } = await params;

  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        {/* Tools */}
        <h3 className="text-xl font-semibold mb-3">
          Tools Used
        </h3>

        <ul className="flex flex-wrap gap-3 mb-10">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/20 px-4 py-1 text-sm text-gray-300"
            >
              {tool}
            </li>
          ))}
        </ul>

        {/* Images */}
        <div className="grid gap-6 sm:grid-cols-2 mt-10">
          {project.images.map((img) => (
            <Image
              key={img}
              src={img}
              alt={project.title}
              width={800}
              height={450}
              className="rounded-xl border border-white/10"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
