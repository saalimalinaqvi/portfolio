import { notFound } from "next/navigation";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "simraydigi": {
    title: "Simray Digital",
    description: "Web Developer & Digital Solutions Provider",
    longDescription: "I design and build modern, responsive websites for businesses and clients. From simple landing pages to full-featured web applications, I turn ideas into fast, secure, and scalable digital experiences.",
    stack: ["Next.js", "three.js","TypeScript", "APIs & Integrations", "Cloud Deployment", "Version Control (Git)", "Authentication"],
    features: ["Custom Website Development", "Responsive Design (Mobile-first)", "SEO-friendly Structure", "Performance Optimization", "Deployment & Hosting Setup", "Website Maintenance & Updates"],
    images: [
      "/fullstack/projects/simrayimg/simrayweb1.png",
      "/fullstack/projects/simrayimg/simrayweb2.png",
      "/fullstack/projects/simrayimg/simrayweb3.png",
      "/fullstack/projects/simrayimg/simrayweb4.png",
      "/fullstack/projects/simrayimg/simrayweb5.png",
      "/fullstack/projects/simrayimg/simrayweb6.png",
      "/fullstack/projects/simrayimg/simrayweb7.png",
    ],
    liveUrl: "https://www.simraydigital.com",
  },
  "nextsoftmedia": {
    title: "Next Soft Media",
    description: "Creative Web Development & Interactive Experiences",
    longDescription: "I create modern websites using clean, custom-written code with a strong focus on performance, visuals, and interaction. Specialized in Three.js particle systems and creative front-end effects that bring websites to life.",
    stack: ["Custom Code", "Three.js – Particle systems & 3D visual effects", "Smooth Animations", "Clean UI", "Cloud Deployment", "Version Control (Git)", "APIs & Integrations"],
    features: ["Lightweight & optimized code", "Interactive particle backgrounds", "Responsive design", "Smooth performance across devices", "Modern visual aesthetics"],
    images: [
      "/fullstack/projects/nsmimg/nsmweb1.png",
      "/fullstack/projects/nsmimg/nsmweb2.png",
      "/fullstack/projects/nsmimg/nsmweb3.png",
      "/fullstack/projects/nsmimg/nsmweb4.png",
      "/fullstack/projects/nsmimg/nsmweb5.png",
      "/fullstack/projects/nsmimg/nsmweb6.png",
    ],
    liveUrl: "https://www.nextsoftmedia.com",
  },
  "themsg": {
    title: "The MSG Foundation",
    description: "Non-Profit Organization Website",
    longDescription: "A modern Next.js one-page website built for a foundation, focused on clarity, accessibility, and performance. The site presents the foundation’s mission, activities, and impact in a simple, structured, and user-friendly way.",
    stack: ["Next.js", "Tailwind", "SEO", "Github", "Cloud Deployment"],
    features: ["Single-page layout", "Fast navigation", "Mobile-friendly design", "SEO-ready structure", "Clean and minimal UI"],
    images: [
      "/fullstack/projects/msgimg/msgweb1.png",
      "/fullstack/projects/msgimg/msgweb2.png",
      "/fullstack/projects/msgimg/msgweb3.png",
      "/fullstack/projects/msgimg/msgweb4.png",
      "/fullstack/projects/msgimg/msgweb5.png",
      "/fullstack/projects/msgimg/msgweb6.png",
    ],
    liveUrl: "https://www.themsgfoundation.org",
  },
  "lushh": {
    title: "Lushh Salon & Cos",
    description: "One-Page Business Website",
    longDescription: "A modern, visually clean one-page website designed for a beauty salon. The focus was on showcasing services, creating a strong first impression, and making it easy for customers to connect.",
    stack: ["Custom Code", "Video", "Clean UI", "Cloud Deployment", "Version Control (Git)", "APIs & Integrations"],
    features: ["One-page layout", "Responsive design", "SEO", "Clean, modern UI", "Easy navigation"],
    images: [
      "/fullstack/projects/lushhimg/lushhweb1.png",
      "/fullstack/projects/lushhimg/lushhweb2.png",
      "/fullstack/projects/lushhimg/lushhweb3.png",
      "/fullstack/projects/lushhimg/lushhweb4.png",
      "/fullstack/projects/lushhimg/lushhweb5.png",
      "/fullstack/projects/lushhimg/lushhweb6.png",
      "/fullstack/projects/lushhimg/lushhweb7.png",
    ],
    liveUrl: "https://www.lushhsalon.com",
  },
  "rcreative": {
    title: "R Creative Interior",
    description: "One-Page Interior Design Website",
    longDescription: "A modern, visually focused one-page website created for an interior design business. The site highlights design style, services, and portfolio content with a clean and elegant layout.",
    stack: ["Custom Code", "Video", "Clean UI", "Cloud Deployment", "Version Control (Git)", "APIs & Integrations"],
    features: ["One-page layout and Background Video", "Responsive design", "SEO", "Fast performance", "Modern, minimal UI", "Clear navigation flow"],
    images: [
      "/fullstack/projects/rcreativeimg/rcretiveweb1.png",
      "/fullstack/projects/rcreativeimg/rcretiveweb2.png",
      "/fullstack/projects/rcreativeimg/rcretiveweb3.png",
      "/fullstack/projects/rcreativeimg/rcretiveweb4.png",
      "/fullstack/projects/rcreativeimg/rcretiveweb5.png",
    ],
    liveUrl: "https://www.rcreativeinterior.com/",
  },
  "datadigger": {
    title: "Datadigger Equipments",
    description: "Industrial Business Website",
    longDescription: "A modern Next.js website built for an equipment-based business, enhanced with Three.js visuals to create a strong technical and professional online presence. The project balances clear business information with interactive visuals for better engagement.",
    stack: ["Next.js", "three.js","TypeScript", "APIs & Integrations", "Cloud Deployment", "Version Control (Git)", "Authentication"],
    features: ["Custom Frontend Development", "Three.js Visual Enhancements", "Performance & Scalability", "Clear Business Communication", "SEO-ready structure", "Professional business layout"],
    images: [
      "/fullstack/projects/datadiggerimg/diggerweb1.png",
      "/fullstack/projects/datadiggerimg/diggerweb2.png",
      "/fullstack/projects/datadiggerimg/diggerweb3.png",
      "/fullstack/projects/datadiggerimg/diggerweb4.png",
      "/fullstack/projects/datadiggerimg/diggerweb5.png",
      "/fullstack/projects/datadiggerimg/diggerweb6.png",
    ],
    liveUrl: "https://datadigger.co.in/",
  },
  "caspianspin": {
    title: "Caspian Restuarant",
    description: "Spin To Win Promotional Web Game",
    longDescription: "A custom-built Spin To Win web game created for a restaurant to increase customer engagement and drive repeat visits. The system integrates with Google Sheets API to generate, manage, and automatically expire discount coupons.",
    stack: ["Custom JavaScript", "Google Sheets API", "Backend logic for coupon handling"],
    features: ["Interactive Spin To Win game", "Auto-generated discount coupons", "Coupon application at billing", "Automatic expiration handling", "Centralized coupon management via Google Sheets"],
    images: [
      "/fullstack/projects/caspianspinimg/spinweb1.png",
      "/fullstack/projects/caspianspinimg/spinweb2.png",
      "/fullstack/projects/caspianspinimg/spinweb3.png",
      "/fullstack/projects/caspianspinimg/spinweb4.jpeg",
    ],
    liveUrl: "https://caspian-spintowin.vercel.app/",
  },
  "fossildiamond": {
    title: "Fossil Diamond",
    description: "One-Page Diamond & Jewelry Website",
    longDescription: "A modern, elegant one-page website created for a diamond and jewelry brand. The focus was on visual presentation, brand elegance, and a smooth browsing experience.",
    stack: ["Custom Code", "Three.js", "Smooth Animations", "Clean UI", "Cloud Deployment", "Version Control (Git)"],
    features: ["Luxury-Oriented Design", "Visual Presentation", "Minimal & Clean UI", "Mobile-First Experience", "One-page layout"],
    images: [
      "/fullstack/projects/fossilimg/fossilweb1.png",
      "/fullstack/projects/fossilimg/fossilweb2.png",
      "/fullstack/projects/fossilimg/fossilweb3.png",
      "/fullstack/projects/fossilimg/fossilweb4.png",
      "/fullstack/projects/fossilimg/fossilweb5.png",
    ],
    liveUrl: "https://www.fossildiamond.in",
  },
  "zoti": {
    title: "Zoti (underdevelopment)",
    description: "Information Tech and Cybersecurity",
    longDescription: "High-performance, SEO-optimized.",
    stack: ["Next.js", "three.js", "Cloudflare", "Github", "Docker", "DDOS Protection"],
    features: ["Fast", "Secure", "SEO"],
    images: [
      "/fullstack/zotiwebdesign.png",
      "/fullstack/zotiwebdesign.png",
    ],
    liveUrl: "https://saalimalinaqvi.space",
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
