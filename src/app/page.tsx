"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import AboutIntro from "@/components/AboutIntro";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

import HomeLoader from "@/components/HomeLoader";
import HomeAudio from "@/components/HomeAudio";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* 🔹 Loading screen (5s, only on refresh / first load) */}
      <HomeLoader onFinish={() => setLoaded(true)} />

      {/* 🔊 Audio plays ONCE after loader */}
      {loaded && <HomeAudio />}

      {/* 🔹 Main content (3D loads behind loader) */}
      <Hero />
      <TechMarquee />
      <AboutIntro />
      <Skills />
      <WorkExperience />
    </>
  );
}
