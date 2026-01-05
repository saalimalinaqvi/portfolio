export default function ResumePage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 md:px-20 pt-32 pb-20 text-white">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6">
        Resume
      </h1>

      <p className="text-gray-300 max-w-2xl mb-10">
        My professional experience, skills, and certifications.
      </p>

      {/* PDF Viewer */}
      <div className="w-full max-w-5xl mx-auto mb-10">
        <div className="relative w-full h-[75vh] rounded-xl overflow-hidden border border-white/10 bg-black">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>

        {/* Mobile fallback note */}
        <p className="mt-4 text-center text-sm text-gray-400 md:hidden">
          If the resume does not display correctly on your device,
          please use the download button below.
        </p>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="
            inline-flex items-center gap-2
            rounded-full px-8 py-4
            bg-cyan-500 text-black font-semibold
            hover:bg-cyan-400 transition
          "
        >
          Download Resume (PDF)
        </a>
      </div>
    </main>
  );
}
