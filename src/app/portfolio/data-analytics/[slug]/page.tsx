import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

const PROJECTS: Record<string, any> = {
  "student-risk": {
    title: "Student Risk Prediction",
    description:
      "Predictive analytics system to identify at-risk students using historical data.",
    longDescription: "A sophisticated predictive model designed to analyze educational trajectories. Leverages historical academic performance and engagement metrics to proactively identify students requiring specialized support interventions.",
    stack: ["Power BI", "PostgreSQL", "Predictive Modeling", "Python", "Pandas"],
    features: ["Risk Scoring Algorithm", "Academic Performance Tracking", "Engagement Analytics", "Automated Alerts", "Historical Data Correlation"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },

  "bi-dashboard": {
    title: "Business Intelligence Dashboard",
    description:
      "Interactive dashboard providing real-time business insights.",
    longDescription: "A comprehensive BI solution delivering granular visibility into operational performance. Features real-time data synchronization and interactive drills-down for executive decision-making.",
    stack: ["Power BI", "SQL", "Data Visualization", "ETL", "Tableau"],
    features: ["Real-time Data Sync", "Executive Summary Views", "Departmental Drill-downs", "Trend Forecasting", "Custom Reporting Engine"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },

  "sales-performance-analytics": {
    title: "Sales Performance Analytics",
    description:
      "Analytics platform to track and visualize sales performance.",
    longDescription: "An advanced sales intelligence hub that transforms raw transaction data into strategic growth insights. Visualizes complex sales cycles and identifies high-value market opportunities.",
    stack: ["Power BI", "PostgreSQL", "ETL Pipelines", "dbt", "Excel VBA"],
    features: ["Revenue Tracking", "Sales Funnel Visualization", "Rep Performance Metrics", "Regional Market Analysis", "Predictive Sales Forecasting"],
    images: [
      "/updatesoon.jpg",
      "/updatesoon.jpg",
    ],
  },
};

export default async function DataAnalyticsProject({ params }: Props) {
  const { slug } = await params;

  const project = PROJECTS[slug];
  if (!project) notFound();

  return <ProjectDetails {...project} />;
}
