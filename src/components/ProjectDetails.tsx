"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
    ArrowLeft, ExternalLink, Shield, Code, Cpu,
    Layers, CheckCircle2, Globe, Sparkles, Activity
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import ParticleBackground from "./ParticleBackground";

interface ProjectDetailsProps {
    title: string;
    description: string;
    longDescription?: string;
    stack?: string[];
    features?: string[];
    images?: string[];
    liveUrl?: string;
}

export default function ProjectDetails({
    title,
    description,
    longDescription,
    stack,
    features,
    images,
    liveUrl,
}: ProjectDetailsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black text-white selection:bg-sky-500/30 overflow-x-hidden">

            {/* --- ELITE FIXED BACKGROUND --- */}
            <div className="fixed inset-0 z-0">
                <ParticleBackground />
                <div className="absolute top-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-sky-500/5 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-indigo-600/5 rounded-full blur-[140px]" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="relative z-10">

                {/* --- REFINED HEADER SECTION --- */}
                <motion.section
                    style={{ opacity, scale }}
                    className="relative pt-40 pb-20 px-6 md:px-20"
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Top Navigation & Quick Action */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Link
                                    href="/portfolio"
                                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all"
                                >
                                    <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-sky-500/50 transition-all">
                                        <ArrowLeft size={16} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Return</span>
                                </Link>
                            </motion.div>

                            {liveUrl && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky-500 text-black text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-sky-500/20"
                                    >
                                        View Live Project <ExternalLink size={14} />
                                    </a>
                                </motion.div>
                            )}
                        </div>

                        {/* Hero Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-sky-500/50" />
                                <span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.3em]">Case Study</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                                {title}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                                {description}
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* --- MAIN CONTENT GRID --- */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-32">
                    <div className="grid lg:grid-cols-[1.8fr,1fr] gap-16 items-start">

                        {/* LEFT: CONTENT FOCUS */}
                        <div className="space-y-24">

                            {/* Mission Statement */}
                            {longDescription && (
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-2 mb-6">
                                        <Activity size={14} className="text-sky-500" />
                                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Introduction</h2>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                                        {longDescription}
                                    </p>
                                </motion.section>
                            )}

                            {/* Grid Gallery */}
                            {images && images.length > 0 && (
                                <section className="space-y-10">
                                    <div className="flex items-center gap-2">
                                        <Layers size={14} className="text-indigo-400" />
                                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Interface Gallery</h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                                        {images.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900 shadow-xl ${i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${title} view ${i + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Features List */}
                            {features && (
                                <section className="space-y-8">
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={14} className="text-blue-400" />
                                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Key Features</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                                                <span className="text-gray-400 text-[13px] font-medium leading-snug">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* RIGHT: COMPACT SIDEBAR */}
                        <aside className="space-y-6 lg:sticky lg:top-32 pb-10">

                            {/* Tech Spec Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-sky-500 text-black">
                                        <Cpu size={18} />
                                    </div>
                                    <h3 className="font-bold text-sm tracking-tight">Tech Stack</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {stack?.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[11px] font-bold hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Secondary Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-2xl"
                            >
                                <div className="space-y-3">
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full py-4 rounded-2xl bg-white/5 border border-white/5 text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                                    >
                                        Start a Conversation
                                    </Link>
                                    <div className="flex items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest flex items-center gap-2">
                                            <Shield size={12} className="text-sky-500" /> Architecture Verified
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </aside>
                    </div>
                </div>

                {/* --- REFINED FOOTER CTA --- */}
                <section className="py-32 px-6 text-center border-t border-white/5 bg-white/[0.01]">
                    <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tight">Need similar expertise?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-sky-500/30 text-sky-400 text-xs font-black uppercase tracking-widest hover:bg-sky-500 hover:text-black transition-all"
                    >
                        Get in Touch <ArrowLeft className="rotate-[135deg] w-4 h-4" />
                    </Link>
                </section>

            </div>
        </div>
    );
}
