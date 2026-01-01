export default function PortfolioPage() {
  return (
    <main className="min-h-screen w-full bg-black px-8 md:px-20 pt-32 pb-20 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Portfolio
      </h1>

      <p className="text-gray-300 max-w-2xl mb-12">
        Selected projects across cybersecurity, full-stack engineering,
        and data analytics.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          Project Card (Coming Soon)
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          Project Card (Coming Soon)
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          Project Card (Coming Soon)
        </div>
      </div>
    </main>
  );
}
