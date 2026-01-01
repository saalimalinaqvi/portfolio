export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-black px-8 md:px-20 pt-32 pb-20 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Connect
      </h1>

      <p className="text-gray-300 max-w-2xl mb-10">
        Interested in collaboration, consulting, or opportunities?
        Let’s talk.
      </p>

      <div className="space-y-4 text-gray-300">
        <p>Email: <span className="text-white">contact@example.com</span></p>
        <p>LinkedIn: <span className="text-white">linkedin.com/in/yourname</span></p>
        <p>GitHub: <span className="text-white">github.com/yourname</span></p>
      </div>
    </main>
  );
}
