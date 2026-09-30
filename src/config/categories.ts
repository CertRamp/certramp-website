import type { IconName } from "@/components/ui/Icon";

/**
 * Catalogue categories. The `csvName` must match the "Category" column in
 * data/udemy-courses.csv exactly. Order here = order on the website.
 * The build fails if the CSV uses a category that is not listed here.
 */
export interface Category {
  id: string;
  csvName: string;
  name: string;
  description: string;
  icon: IconName;
}

export const categoryList: Category[] = [
  {
    id: "ai-machine-learning",
    csvName: "AI & Machine Learning",
    name: "AI & Machine Learning",
    description: "AI governance, AI security, cloud AI engineering and generative AI.",
    icon: "bolt",
  },
  {
    id: "security-privacy",
    csvName: "Security & Privacy",
    name: "Security & Privacy",
    description: "Cybersecurity, information security management and data privacy.",
    icon: "lock",
  },
  {
    id: "audit-risk-governance",
    csvName: "Audit, Risk & Governance",
    name: "Audit, Risk & Governance",
    description: "IT audit, internal audit, risk, fraud and governance frameworks.",
    icon: "shield",
  },
  {
    id: "project-management",
    csvName: "Project Management",
    name: "Project Management",
    description: "Project management methods, PMI and IPMA certifications.",
    icon: "compass",
  },
  {
    id: "it-service-management",
    csvName: "IT Service Management",
    name: "IT Service Management",
    description: "IT service management frameworks and ServiceNow administration.",
    icon: "layers",
  },
  {
    id: "cloud",
    csvName: "Cloud",
    name: "Cloud",
    description: "AWS, Microsoft Azure and vendor-neutral cloud certifications.",
    icon: "server",
  },
  {
    id: "software-testing-requirements",
    csvName: "Software Testing & Requirements",
    name: "Software Testing & Requirements",
    description: "ISTQB software testing and IREB requirements engineering.",
    icon: "search",
  },
  {
    id: "microsoft-365-office",
    csvName: "Microsoft 365 & Office",
    name: "Microsoft 365 & Office",
    description: "Microsoft 365, Copilot, endpoint administration and Office apps.",
    icon: "device",
  },
  {
    id: "networking-it-fundamentals",
    csvName: "Networking & IT Fundamentals",
    name: "Networking & IT Fundamentals",
    description: "Networking and core IT support certifications.",
    icon: "chart",
  },
  {
    id: "architecture-aptitude",
    csvName: "Other",
    name: "Architecture & Aptitude",
    description: "Enterprise architecture and pre-employment aptitude tests.",
    icon: "target",
  },
];

export function getCategoryByCsvName(csvName: string): Category {
  const c = categoryList.find((x) => x.csvName === csvName);
  if (!c) throw new Error(`Unknown category "${csvName}" in data/udemy-courses.csv — add it to src/config/categories.ts`);
  return c;
}

export function getCategory(id: string): Category | undefined {
  return categoryList.find((x) => x.id === id);
}
