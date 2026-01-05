"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { ShieldCheck, Lock } from "lucide-react";

export default function ClassifiedAccessPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");              // ✅ clear previous error
    setLoading(true);

    const hash = process.env.NEXT_PUBLIC_CASE_STUDY_HASH;

    if (!hash) {
      setError("Security configuration missing.");
      setLoading(false);
      return;
    }

    // ✅ IMPORTANT: await bcrypt.compare
    const isValid = await bcrypt.compare(password, hash);

    if (!isValid) {
      setError("Invalid password. Please try again.");
      setLoading(false);
      return;
    }

    // ✅ only runs if password is correct
    sessionStorage.setItem("case_access", "granted");
    router.push("/portfolio/case-studies/classified/enterprise-pentest");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <ShieldCheck className="h-8 w-8 text-cyan-400" />
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold mb-2">
          Restricted Access
        </h1>

        <p className="text-center text-gray-400 mb-6 text-sm">
          Authorized personnel only
        </p>

        {/* Password input */}
        <div className="relative mb-3">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access password"
            className="
              w-full rounded-lg bg-black/40
              pl-10 pr-4 py-3
              border border-white/20
              focus:border-cyan-400
              outline-none
            "
          />
        </div>

        {/* ❌ ERROR MESSAGE (THIS MUST EXIST) */}
        {error && (
          <p className="mb-3 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        <input
  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
/>


        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-full rounded-lg bg-cyan-500 py-3
            font-semibold text-black
            hover:bg-cyan-400 transition
            disabled:opacity-60
          "
        >
          {loading ? "Verifying…" : "Request Access"}
        </button>

      </div>
    </main>
  );
}
