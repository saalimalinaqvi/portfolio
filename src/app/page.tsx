import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Scroll target */}
      <section
        id="content"
        className="min-h-screen bg-black text-white px-20 py-32"
      >
        <h2 className="text-4xl font-bold mb-6">
          About the Platform
        </h2>
        <p className="max-w-3xl text-gray-300">
          This section proves scrolling works. Replace with real content later.
        </p>
      </section>
    </>
  );
}
