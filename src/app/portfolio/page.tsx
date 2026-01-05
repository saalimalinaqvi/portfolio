import PortfolioSection from "@/components/PortfolioSection";

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white">
      <PortfolioSection
        title="Cybersecurity"
        description="Security platforms, audits, and defensive systems."
        basePath="/portfolio/cybersecurity"
        items={[
          { title: "SOC Monitoring Dashboard", slug: "soc-dashboard", image: "/portfolio/cyber/soc.jpg" },
          { title: "Vulnerability Assessment Platform", slug: "vapt-platform", image: "/portfolio/cyber/vapt.jpg" },
          { title: "Incident Response System", slug: "incident-response-system", image: "/portfolio/cyber/vapt.jpg" },
        ]}
      />

      <PortfolioSection
        title="Data Analytics"
        description="Dashboards, analytics pipelines, and predictive systems."
        basePath="/portfolio/data-analytics"
        items={[
          { title: "Student Risk Prediction", slug: "student-risk", image: "/portfolio/data/student.jpg" },
          { title: "Business Intelligence Dashboard", slug: "bi-dashboard", image: "/portfolio/data/bi.jpg" },
          { title: "Sales Performance Analytics", slug: "sales-performance-analytics", image: "/portfolio/fullstack/cyber/hero.png" },
        ]}
      />

      <PortfolioSection
        title="Full Stack Website Development"
        description="Production-grade web platforms with live deployments."
        basePath="/portfolio/full-stack"
        items={[
          { title: "SaaS Website Builder", slug: "saas-builder", image: "/portfolio/fullstack/saas/hero.png" },
          { title: "Cybersecurity Company Website", slug: "cyber-firm", image: "/portfolio/fullstack/cyber/hero.png" },
        ]}
      />
    </main>
  );
}
