"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign, MapPin } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "saalimalinaqvi@outlook.com",
    href: "mailto:saalimalinaqvi@outlook.com",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/saalimalinaqvi",
    href: "https://linkedin.com/in/saalimalinaqvi",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    value: "github.com/saalimalinaqvi",
    href: "https://github.com/saalimalinaqvi",
    color: "text-gray-200",
    bg: "bg-gray-200/10",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-32 pb-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6"
              >
                Let's get in touch
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Connect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Beyond Boundaries
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Whether you have a project in mind, a question, or just want to say hi, I'm always open to new connections and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`p-4 rounded-xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span>Available for Remote & Local Opportunities</span>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-zinc-900/80 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-sky-400 w-6 h-6" />
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-sky-400 transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-sky-400 transition-colors">
                        <AtSign className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative overflow-hidden rounded-xl bg-sky-500 py-4 text-black font-bold text-lg hover:bg-sky-400 transition-all active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
