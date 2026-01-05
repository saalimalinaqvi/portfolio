"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClassifiedCaseStudyPage() {
  const router = useRouter();

  useEffect(() => {
    const access = sessionStorage.getItem("case_access");
    if (access !== "granted") {
      router.replace("/portfolio/case-studies/classified/access");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">
          Classified Case Study
        </h1>

        <p className="text-red-400 mb-6">
          Confidential — Do not distribute.
        </p>

        <p className="text-gray-300">
          This document contains sensitive penetration testing results,
          architecture analysis, and mitigation strategies.
        </p>
      </div>
    </main>
  );
}
