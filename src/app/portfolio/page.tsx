import PortfolioSection from "@/components/PortfolioSection";

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white">
      <PortfolioSection
        title="Cybersecurity"
        description="Security platforms, audits, and defensive systems."
        basePath="/portfolio/cybersecurity"
        items={[
          { title: "SOC Monitoring Dashboard", slug: "soc-dashboard", image: "/cybersec/cyberimg1.webp" },
          { title: "Vulnerability Assessment Platform", slug: "vapt-platform", image: "/cybersec/cyberimg2.jpg" },
          { title: "Incident Response System", slug: "incident-response-system", image: "/cybersec/cyberimg3.png" },
        ]}
      />

      <PortfolioSection
        title="Data Analytics"
        description="Dashboards, analytics pipelines, and predictive systems."
        basePath="/portfolio/data-analytics"
        items={[
          { title: "Student Risk Prediction", slug: "student-risk", image: "/data-analytics/dataanaly1.png" },
          { title: "Business Intelligence Dashboard", slug: "bi-dashboard", image: "/data-analytics/dataanaly2.png" },
          { title: "Sales Performance Analytics", slug: "sales-performance-analytics", image: "/data-analytics/dataanaly3.png" },
        ]}
      />

      <PortfolioSection
        title="Full Stack Website Development"
        description="Production-grade web platforms with live deployments."
        basePath="/portfolio/full-stack"
        items={[
          { title: "Simray Digital 3D", slug: "simraydigi", image: "/fullstack/simray.png" },
          { title: "Next Soft Media", slug: "nextsoftmedia", image: "/fullstack/nsmwebdesign.png" },
          { title: "The MSG Foundation", slug: "themsg", image: "/fullstack/msgwebdesign.png" },

          { title: "Lushh Salon", slug: "lushh", image: "/fullstack/lushhwebdesign.png" },
          { title: "R Creative Interior", slug: "rcreative", image: "/fullstack/rcreativewebdesign.png" },
          { title: "Data Digger", slug: "datadigger", image: "/fullstack/datadiggerwebdesign.png" },

          { title: "Caspian Restaurant Spin Wheel", slug: "caspianspin", image: "/fullstack/caspianspinwin.png" },
          { title: "Fossil Diamond", slug: "fossildiamond", image: "/fullstack/fossilwebdesign.png" },
          { title: "Zoti Comapany", slug: "zoti", image: "/fullstack/zotiwebdesign.png" },
        ]}
      />
    </main>
  );
}
