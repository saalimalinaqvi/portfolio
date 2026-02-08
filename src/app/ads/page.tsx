"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Zap, Target, BarChart3, Globe, Megaphone, Share2, Layout, Briefcase } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ADS = [
  {
    title: "Google AdSense",
    description: "Contextual display ads served by Google based on content and audience.",
    cta: "Learn More",
    link: "https://www.google.com/adsense",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-400",
  },
  {
    title: "Amazon Affiliate",
    description: "Product-based affiliate promotions with commission on purchases.",
    cta: "View Program",
    link: "https://affiliate-program.amazon.com",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    title: "SaaS Sponsorship",
    description: "Dedicated promotion slots for SaaS products in cybersecurity and tech.",
    cta: "Request Slot",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <Target className="w-6 h-6" />,
    color: "text-green-400",
  },
  {
    title: "Dev Tools Promo",
    description: "Promotion of developer or security tools used across the site.",
    cta: "Collaborate",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <Layout className="w-6 h-6" />,
    color: "text-purple-400",
  },
  {
    title: "Newsletter Placement",
    description: "Sponsored placements in newsletters or announcement sections.",
    cta: "Advertise",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <Megaphone className="w-6 h-6" />,
    color: "text-sky-400",
  },
  {
    title: "Social Promotion",
    description: "Cross-promotion on social or video platforms with case integrations.",
    cta: "Partner",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <Share2 className="w-6 h-6" />,
    color: "text-pink-400",
  },
  {
    title: "Banner Placement",
    description: "Top or section-level banner placements with brand visibility.",
    cta: "Book Now",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-emerald-400",
  },
  {
    title: "Custom Integration",
    description: "Tailored brand mentions, landing pages, or case integrations.",
    cta: "Contact Us",
    link: "mailto:saalimalinaqvi@outlook.com",
    icon: <Briefcase className="w-6 h-6" />,
    color: "text-yellow-400",
  },
];

export default function AdsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-32 pb-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6"
          >
            Growth & Partnerships
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Collaborative <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Expansion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore diverse advertising, sponsorship, and collaboration opportunities across my engineering and security platforms.
          </motion.p>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADS.map((ad, index) => (
            <motion.div
              key={ad.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit ${ad.color} group-hover:scale-110 transition-transform duration-300`}>
                  {ad.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {ad.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {ad.description}
                </p>

                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 font-bold text-sm group-hover:gap-3 transition-all"
                >
                  {ad.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 relative group overflow-hidden rounded-[3rem] p-12 md:p-16 text-center border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          {/* Animated Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-[3rem] blur-2xl opacity-50"></div>

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Establish a Strategic Partnership
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Seeking customized placements, long-term brand integrations, or localized media strategies? Let's discuss a tailored plan that fits your vision.
            </p>

            <a
              href="mailto:saalimalinaqvi@outlook.com"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-400 hover:text-black transition-all active:scale-95 shadow-xl"
            >
              <Mail className="w-5 h-5 font-bold" />
              Contact for Inquiries
            </a>

            <p className="mt-8 text-sm font-mono text-gray-500">
              Response time approx. 24-48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
