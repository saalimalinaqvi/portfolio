import { ExternalLink, Mail } from "lucide-react";

const ADS = [
  {
    title: "Google AdSense",
    description:
      "Contextual display ads served by Google based on content and audience.",
    cta: "Learn More",
    link: "https://www.google.com/adsense",
  },
  {
    title: "Amazon Affiliate",
    description:
      "Product-based affiliate promotions with commission on purchases.",
    cta: "View Program",
    link: "https://affiliate-program.amazon.com",
  },
  {
    title: "SaaS Sponsorship",
    description:
      "Dedicated promotion slots for SaaS products in cybersecurity and tech.",
    cta: "Request Slot",
    link: "mailto:ads@example.com",
  },
  {
    title: "Developer Tools Promotion",
    description:
      "Promotion of developer or security tools used across the site.",
    cta: "Collaborate",
    link: "mailto:ads@example.com",
  },
  {
    title: "Newsletter Placement",
    description:
      "Sponsored placements in newsletters or announcement sections.",
    cta: "Advertise",
    link: "mailto:ads@example.com",
  },
  {
    title: "YouTube / Social Promo",
    description:
      "Cross-promotion on social or video platforms.",
    cta: "Partner",
    link: "mailto:ads@example.com",
  },
  {
    title: "Banner Placement",
    description:
      "Top or section-level banner placements with brand visibility.",
    cta: "Book Now",
    link: "mailto:ads@example.com",
  },
  {
    title: "Custom Brand Integration",
    description:
      "Tailored brand mentions, landing pages, or case integrations.",
    cta: "Contact Us",
    link: "mailto:ads@example.com",
  },
];

export default function AdsPage() {
  return (
    <main className="min-h-screen w-full bg-black px-6 md:px-20 pt-32 pb-20 text-white">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6">
        Ads & Collaborations
      </h1>

      <p className="text-gray-300 max-w-3xl mb-14">
        Advertising, sponsorship, and collaboration opportunities across
        cybersecurity, engineering, and analytics platforms.
      </p>

      {/* ✅ Grid: 1 / 2 / 4 columns */}
      <div className="
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      ">
        {ADS.map((ad) => (
          <div
            key={ad.title}
            className="
              group rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 transition
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >
            <h3 className="text-xl font-semibold mb-3">
              {ad.title}
            </h3>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {ad.description}
            </p>

            <a
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-cyan-400 text-sm font-medium
                hover:text-cyan-300 transition
              "
            >
              {ad.cta}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Contact Footer */}
      <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-3">
          Advertising Inquiries
        </h2>

        <p className="text-gray-300 mb-4">
          For custom placements, long-term partnerships, or media kits,
          please get in touch.
        </p>

        <a
          href="mailto:ads@example.com"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <Mail className="h-4 w-4" />
          saalimalinaqvi@outlook.com
        </a>
      </div>
    </main>
  );
}
