import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "fps-game": {
    title: "Unity FPS Prototype",
    description: "Gameplay mechanics and optimization.",
    longDescription: "A high-octane First Person Shooter prototype developed in Unity. Focused on precise hit detection, advanced character controller physics, and real-time performance optimization for large-scale environments.",
    stack: ["Unity", "C#", "Shader Graph", "Universal Render Pipeline", "Blender"],
    features: ["Custom Character Controller", "Procedural Recoil System", "Automated Pathfinding", "Dynamic Lighting", "Optimized Physics Engine"],
    images: ["/updatesoon.jpg", "/updatesoon.jpg"]
  },
  "simulation-app": {
    title: "Simulation App",
    description: "Interactive simulation for learning.",
    longDescription: "An immersive educational simulation tool designed to visualize complex physical phenomena. Highly interactive with real-time parameter tweaking and physics-accurate renderings.",
    stack: ["Unity", "C#", "DOTS", "Addressables", "Compute Shaders"],
    features: ["Real-time Data Visualization", "Complex Physics Simulations", "Cross-Platform Support", "Interactive UI Systems", "High-Resolution Rendering"],
    images: ["/updatesoon.jpg", "/updatesoon.jpg"]
  },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = (PROJECTS as any)[slug];
  if (!p) notFound();

  return <ProjectDetails {...p} />;
}
