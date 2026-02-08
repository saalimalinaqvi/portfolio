import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

type Props = { params: Promise<{ slug: string }> };

const CASES = {
  "threat-model": {
    title: "Threat Modeling",
    description: "Structured threat modeling approach for modern ecosystems.",
    longDescription: "A comprehensive framework for evaluating and mitigating potential security risks in complex architectural designs. Utilizes STRIDE and DREAD methodologies to identify vulnerabilities before deployment.",
    stack: ["ThreatDragon", "Python", "Security Auditing", "Infrastructure as Code"],
    features: ["Risk Vector Analysis", "Mitigation Strategy Planning", "Attack Surface Mapping", "Compliance Checking", "Security Architecture Design"],
    images: ["/updatesoon.jpg", "/updatesoon.jpg"]
  },
  "public-review": {
    title: "Public Security Review",
    description: "High-level security review for public infrastructures.",
    longDescription: "A deep-dive analysis into the security posture of publicly exposed digital assets. Focuses on network hardening, data exposure prevention, and robust authentication mechanisms.",
    stack: ["Nmap", "Nessus", "Burp Suite", "Shodan", "Cloud Security"],
    features: ["Network Penetration Testing", "External Asset Discovery", "Information Leakage Analysis", "API Security Review", "Public Posture Hardening"],
    images: ["/updatesoon.jpg", "/updatesoon.jpg"]
  },
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = (CASES as any)[slug];
  if (!c) notFound();

  return <ProjectDetails {...c} />;
}
