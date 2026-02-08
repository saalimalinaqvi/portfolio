"use client";

import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import AboutIntro from "@/components/AboutIntro";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutIntro />
      <WorkExperience />
    </>
  );
}
