"use client";

import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-32 pb-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Roadmap
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              An overview of my professional journey, skills, and technical expertise acquired through years of innovation.
            </p>
          </motion.div>

          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-auto group relative inline-flex items-center justify-center gap-3 bg-sky-500 px-8 py-4 rounded-full text-black font-bold text-base md:text-lg hover:bg-sky-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV (PDF)
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Quick Stats sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-sky-400 w-5 h-5" />
                Key Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Full-Stack", "Cybersecurity", "Architecture", "Python", "React & Next.js", "Docker", "Cloud", "SOAR"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-lg text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-sky-400 w-5 h-5" />
                Career Focus
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicated to developing autonomous security systems and high-scale distributed applications with a focus on human-centric design.
              </p>
            </motion.div>
          </div>

          {/* Main Content - PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative w-full h-[500px] md:h-[800px] bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-3 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                <span className="ml-4 text-[10px] text-gray-500 font-mono">resume_v2_final.pdf</span>
              </div>

              <div className="w-full h-full pt-12">
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center">
                    <FileText className="w-16 h-16 text-gray-700 mb-4" />
                    <p className="text-gray-400 mb-6">PDF preview not available on this device.</p>
                    <a
                      href="/resume.pdf"
                      className="bg-sky-500 text-black px-6 py-2 rounded-full font-bold text-sm"
                    >
                      Download Resume
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
