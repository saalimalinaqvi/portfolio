import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

type Props = { params: Promise<{ slug: string }> };

const PROJECTS = {
  "soc-dashboard": {
    title: "SOC Monitoring Dashboard",
    description: "Real-time SOC dashboard for alerts and incidents.",
    longDescription: "A high-performance centralized monitoring platform with advanced alert correlation and granular RBAC. Designed for rapid incident detection and streamlined digital forensics workflows.",
    stack: ["Splunk", "The Hive", "Elasticsearch", "Python", "SOAR"],
    features: ["Live log ingestion", "Severity classification", "RBAC", "Automated Playbooks", "Trend Analysis"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
  "vapt-platform": {
    title: "Vulnerability Assessment Platform",
    description: "Automated vulnerability scanning and reporting.",
    longDescription: "Enterprise-grade scanning engine with integrated risk scoring and OWASP compliance auditing. Provides actionable insights for system hardening and defensive prioritization.",
    stack: ["Kali Linux", "Metasploit", "Nessus", "OWASP ZAP", "Bash"],
    features: ["OWASP coverage", "Automated scans", "Risk reports", "Remediation Guidance", "Scan Scheduling"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
  "incident-response-system": {
    title: "Incident Response System",
    description: "Automated vulnerability scanning and reporting.",
    longDescription: "A specialized framework for coordinating security response efforts. Integrates real-time communication channels with automated evidence collection and legal preservation protocols.",
    stack: ["Wireshark", "SANS Tools", "EnCase", "Docker", "Go"],
    features: ["OWASP coverage", "Automated scans", "Risk reports", "Timeline Recovery", "Evidence Hashing"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = (PROJECTS as any)[slug];
  if (!p) notFound();

  return <ProjectDetails {...p} />;
}
