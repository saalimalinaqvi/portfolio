"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FileText, Mail, Megaphone, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { name: "Portfolio", href: "/portfolio", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Resume", href: "/resume", icon: <FileText className="w-4 h-4" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  { name: "Ads", href: "/ads", icon: <Megaphone className="w-4 h-4" /> },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">

        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <Link href="/" className="flex items-center gap-3 bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full hover:border-sky-500/50 transition-all">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-sky-400/30">
              <img src="/avatar.png" alt="SAN" className="w-full h-full object-cover scale-110" />
            </div>
            <span className="text-white font-bold tracking-tight group-hover:text-sky-400 transition-colors">
              <span className="hidden sm:inline text-sm">Saalim Ali Naqvi</span>
              <span className="sm:hidden text-xs">SAN</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 group"
              >
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-sky-500/10 border border-sky-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${active ? "text-sky-400" : "text-gray-400 group-hover:text-white"}`}>
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            );
          })}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 p-4 rounded-3xl bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-3xl flex flex-col gap-2 md:hidden pointer-events-auto"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? "bg-sky-500 text-black font-bold" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
