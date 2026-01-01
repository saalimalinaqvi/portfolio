import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 👇 THIS IS REQUIRED */}
      <section
        id="content"
        className="min-h-screen w-full bg-black px-8 md:px-20 py-32 text-white"
      >
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="max-w-3xl text-gray-300">
          This section confirms that scrolling works.
          Replace this with real content later.
        </p>
      </section>
    </>
  );
}
