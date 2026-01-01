export default function ResumePage() {
  return (
    <main className="min-h-screen w-full bg-black px-8 md:px-20 pt-32 pb-20 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Resume
      </h1>

      <p className="text-gray-300 max-w-2xl mb-10">
        My professional experience, skills, and certifications.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        className="
          inline-block rounded-full px-6 py-3
          bg-cyan-500 text-black font-semibold
          hover:bg-cyan-400 transition
        "
      >
        Download Resume (PDF)
      </a>
    </main>
  );
}
