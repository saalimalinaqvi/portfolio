"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Globe, Shield, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-black pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-black shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
                <Shield size={20} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SAN <span className="text-sky-400">Portfolio</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs transition-colors hover:text-gray-300">
              Developing high-performance, security-first digital ecosystems at the intersection of engineering and intelligence.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/saalimalinaqvi/" icon={<Github size={18} />} />
              <SocialLink href="https://linkedin.com/in/saalimalinaqvi" icon={<Linkedin size={18} />} />
              <SocialLink href="mailto:saalimalinaqvi@outlook.com" icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Code size={16} className="text-sky-400" /> Navigation
            </h4>
            <ul className="space-y-4">
              <FooterItem href="/">Home</FooterItem>
              <FooterItem href="/portfolio">Portfolio</FooterItem>
              <FooterItem href="/resume">Resume</FooterItem>
              <FooterItem href="/contact">Connect</FooterItem>
              <FooterItem href="/ads">Collaborations</FooterItem>
            </ul>
          </div>

          {/* Legal / Secondary */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Globe size={16} className="text-blue-500" /> Resources
            </h4>
            <ul className="space-y-4">
              <FooterItem href="/privacy-policy">Privacy Policy</FooterItem>
              <FooterItem href="/terms-and-conditions">Terms of Service</FooterItem>
              <FooterItem href="/contact">Support</FooterItem>
              <FooterItem href="/resume">Download CV</FooterItem>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Mail size={60} />
            </div>
            <h4 className="text-white font-bold mb-4 relative z-10">Start a Project?</h4>
            <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">
              Open for strategic partnerships and high-impact engineering roles.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sky-400 font-bold text-sm hover:gap-3 transition-all"
            >
              Get in Touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs font-mono">
            &copy; {currentYear} SAALIM ALI NAQVI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for Hire
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 text-sm hover:text-sky-400 hover:translate-x-1 transition-all flex items-center gap-2 group w-fit"
      >
        <span className="w-0 h-px bg-sky-500 group-hover:w-3 transition-all" />
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all active:scale-95"
    >
      {icon}
    </a>
  );
}
