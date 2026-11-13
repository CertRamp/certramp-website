import type { CertPath, PathItem } from "./types";

/**
 * AWS certification paths, written 13 Nov 2026 from the official AWS
 * certification pages (names as AWS writes them). AWS sets no prerequisites for
 * any exam; the levels are Foundational, Associate, Professional and Specialty.
 */
const checked = "2026-11-13";
const L = (en: string, de: string) => ({ en, de });

const item = (slug: string, name: string, code: string, relation: { en: string; de: string }): PathItem => ({ name, code, slug, relation });

const clf = item("aws-clf-c02", "AWS Certified Cloud Practitioner", "CLF-C02", L("Foundational exam on AWS cloud concepts, services, security and billing. Optional starting point.", "Foundational-Prüfung zu AWS-Cloud-Konzepten, Diensten, Sicherheit und Abrechnung. Optionaler Einstieg."));
const aif = item("aws-aif-c01", "AWS Certified AI Practitioner", "AIF-C01", L("Foundational exam on AI, machine learning and generative AI concepts on AWS.", "Foundational-Prüfung zu KI, Machine Learning und generativer KI auf AWS."));
const aib = item("aws-aib-c01", "AWS Certified AI Business Strategist", "AIB-C01", L("Business-focused AI exam: strategy, value, governance and adoption of AI on AWS.", "Geschäftlich ausgerichtete KI-Prüfung: Strategie, Nutzen, Governance und Einführung von KI auf AWS."));
const saa = item("aws-saa-c03", "AWS Certified Solutions Architect - Associate", "SAA-C03", L("Associate exam on designing secure, resilient, high-performing and cost-optimised architectures.", "Associate-Prüfung zum Entwurf sicherer, ausfallsicherer, leistungsfähiger und kostenoptimierter Architekturen."));
const dva = item("aws-dva-c03", "AWS Certified Developer - Associate", "DVA-C03", L("Associate exam on developing, deploying and debugging applications on AWS.", "Associate-Prüfung zum Entwickeln, Bereitstellen und Debuggen von Anwendungen auf AWS."));
const soa = item("aws-soa-c03", "AWS Certified CloudOps Engineer - Associate", "SOA-C03", L("Associate exam on operating workloads: monitoring, reliability, deployment, security and networking.", "Associate-Prüfung zum Betrieb von Workloads: Überwachung, Zuverlässigkeit, Bereitstellung, Sicherheit und Netzwerk."));
const dea = item("aws-dea-c01", "AWS Certified Data Engineer - Associate", "DEA-C01", L("Associate exam on data ingestion, transformation, storage and governance.", "Associate-Prüfung zu Datenaufnahme, Transformation, Speicherung und Governance."));
const mla = item("aws-mla-c02", "AWS Certified Machine Learning Engineer: Associate", "MLA-C02", L("Associate exam on preparing data, building, deploying and operating ML and AI solutions.", "Associate-Prüfung zu Datenvorbereitung sowie Entwicklung, Bereitstellung und Betrieb von ML- und KI-Lösungen."));
const sap = item("aws-sap-c03", "AWS Certified Solutions Architect - Professional", "SAP-C03", L("Professional exam on complex, multi-account architectures, migration and cost optimisation.", "Professional-Prüfung zu komplexen Multi-Account-Architekturen, Migration und Kostenoptimierung."));
const dop = item("aws-dop-c02", "AWS Certified DevOps Engineer - Professional", "DOP-C02", L("Professional exam on CI/CD automation, infrastructure as code, monitoring and incident response.", "Professional-Prüfung zu CI/CD-Automatisierung, Infrastructure as Code, Überwachung und Incident Response."));
const aip = item("aws-aip-c01", "AWS Certified Generative AI Developer - Professional", "AIP-C01", L("Professional exam on building generative AI applications with foundation models on AWS.", "Professional-Prüfung zum Entwickeln generativer KI-Anwendungen mit Foundation Models auf AWS."));
const scs = item("aws-scs-c03", "AWS Certified Security - Specialty", "SCS-C03", L("Specialty exam on detection, incident response, IAM, data protection and security governance.", "Specialty-Prüfung zu Erkennung, Incident Response, IAM, Datenschutz und Security Governance."));
const ans = item("aws-ans-c01", "AWS Certified Advanced Networking - Specialty", "ANS-C01", L("Specialty exam on designing, implementing and securing hybrid and AWS networks.", "Specialty-Prüfung zu Entwurf, Umsetzung und Absicherung hybrider und AWS-Netzwerke."));

const note = L(
  "AWS sets no prerequisites for any exam; the order below follows the AWS levels Foundational, Associate, Professional and Specialty.",
  "AWS setzt für keine Prüfung Voraussetzungen; die Reihenfolge folgt den AWS-Stufen Foundational, Associate, Professional und Specialty.",
);
const src = (label: string, url: string) => ({ label: `AWS: ${label}`, url });
const path = (before: PathItem[], after: PathItem[], similar: PathItem[], source: { label: string; url: string }): CertPath => ({ before, after, similar, note, source, checked });

export const awsPaths: Record<string, CertPath> = {
  "aws-clf-c02": path([], [saa, dva, soa], [aif], src("Cloud Practitioner", "https://aws.amazon.com/certification/certified-cloud-practitioner/")),
  "aws-aif-c01": path([], [mla, aip], [clf, aib], src("AI Practitioner", "https://aws.amazon.com/certification/certified-ai-practitioner/")),
  "aws-aib-c01": path([aif], [], [clf], src("AI Business Strategist", "https://aws.amazon.com/certification/certified-ai-business-strategist/")),
  "aws-saa-c03": path([clf], [sap, scs, ans], [dva, soa], src("Solutions Architect - Associate", "https://aws.amazon.com/certification/certified-solutions-architect-associate/")),
  "aws-dva-c03": path([clf], [dop, aip], [saa, soa], src("Developer - Associate", "https://aws.amazon.com/certification/certified-developer-associate/")),
  "aws-soa-c03": path([clf], [dop, scs], [saa, dva], src("CloudOps Engineer - Associate", "https://aws.amazon.com/certification/certified-cloudops-engineer-associate/")),
  "aws-dea-c01": path([clf], [], [mla, saa], src("Data Engineer - Associate", "https://aws.amazon.com/certification/certified-data-engineer-associate/")),
  "aws-mla-c02": path([aif], [aip], [dea], src("Machine Learning Engineer - Associate", "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/")),
  "aws-sap-c03": path([saa], [], [dop], src("Solutions Architect - Professional", "https://aws.amazon.com/certification/certified-solutions-architect-professional/")),
  "aws-dop-c02": path([dva, soa], [], [sap], src("DevOps Engineer - Professional", "https://aws.amazon.com/certification/certified-devops-engineer-professional/")),
  "aws-aip-c01": path([aif, mla], [], [dva], src("Generative AI Developer - Professional", "https://aws.amazon.com/certification/certified-generative-ai-developer-professional/")),
  "aws-scs-c03": path([saa, soa], [], [ans], src("Security - Specialty", "https://aws.amazon.com/certification/certified-security-specialty/")),
  "aws-ans-c01": path([saa], [], [scs], src("Advanced Networking - Specialty", "https://aws.amazon.com/certification/certified-advanced-networking-specialty/")),
};
