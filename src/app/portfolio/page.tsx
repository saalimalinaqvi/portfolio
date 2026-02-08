"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Filter, ExternalLink, Shield, BarChart, Code, Play } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const categories = [
  { id: "all", label: "All Projects", icon: <Filter className="w-4 h-4" /> },
  { id: "cybersecurity", label: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
  { id: "data-analytics", label: "Data Analytics", icon: <BarChart className="w-4 h-4" /> },
  { id: "full-stack", label: "Web Development", icon: <Code className="w-4 h-4" /> },
];

const projects = [
  // Cybersecurity
  { title: "SOC Monitoring Dashboard", category: "cybersecurity", slug: "soc-dashboard", image: "/cybersec/cyberimg1.webp", desc: "Real-time security operations center visibility." },
  { title: "Vulnerability Platform", category: "cybersecurity", slug: "vapt-platform", image: "/cybersec/cyberimg2.jpg", desc: "Automated security assessment system." },
  { title: "Incident Response", category: "cybersecurity", slug: "incident-response-system", image: "/cybersec/cyberimg3.png", desc: "Crisis management and audit tracking." },

  // Data Analytics
  { title: "Student Risk Prediction", category: "data-analytics", slug: "student-risk", image: "/data-analytics/dataanaly1.png", desc: "Machine learning based academic success tracking." },
  { title: "Business Intelligence", category: "data-analytics", slug: "bi-dashboard", image: "/data-analytics/dataanaly2.png", desc: "Strategic data visualization for corporate growth." },
  { title: "Sales Performance", category: "data-analytics", slug: "sales-performance-analytics", image: "/data-analytics/dataanaly3.png", desc: "Predictive sales modeling and analytics." },

  // Full Stack
  { title: "Simray Digital 3D", category: "full-stack", slug: "simraydigi", image: "/fullstack/simray.png", desc: "Immersive 3D agency experience." },
  { title: "Next Soft Media", category: "full-stack", slug: "nextsoftmedia", image: "/fullstack/nsmwebdesign.png", desc: "Modern digital marketing platform." },
  { title: "The MSG Foundation", category: "full-stack", slug: "themsg", image: "/fullstack/msgwebdesign.png", desc: "Non-profit organizational web portal." },
  { title: "Lushh Salon", category: "full-stack", slug: "lushh", image: "/fullstack/lushhwebdesign.png", desc: "Luxury service booking platform." },
  { title: "R Creative Interior", category: "full-stack", slug: "rcreative", image: "/fullstack/rcreativewebdesign.png", desc: "Architectural portfolio and CRM." },
  { title: "Data Digger", category: "full-stack", slug: "datadigger", image: "/fullstack/datadiggerwebdesign.png", desc: "Specialized search and aggregation tool." },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(p =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-32 pb-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Creations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A curated collection of impactful solutions across cybersecurity, analytical engineering, and full-stack development.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300
                ${activeFilter === cat.id
                  ? "bg-sky-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"}
              `}
            >
              {cat.icon}
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <Link href={`/portfolio/${project.category}/${project.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-2">
                        <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-[10px] uppercase font-bold tracking-widest rounded-md border border-sky-500/20">
                          {project.category.replace("-", " ")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.desc}
                      </p>

                      <div className="mt-6 flex items-center text-sky-400 font-bold text-sm">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Corner Button */}
                    <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
