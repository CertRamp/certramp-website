/**
 * Certification providers, keyed by the "Provider" column in data/udemy-courses.csv.
 *
 * `trademarkNotice` is optional. Without it, the disclaimer uses a neutral line
 * ("… are trademarks of their respective owners"). Add a vendor-specific notice
 * once you have checked the vendor's trademark guidelines — e.g. which marks
 * carry ® and the exact owner name.
 *
 * Providers used in the CSV but missing here still work (display name = CSV value).
 */
export interface Vendor {
  /** Name shown on the website. */
  name: string;
  trademarkNotice?: string;
}

export const vendors: Record<string, Vendor> = {
  ACFE: { name: "ACFE" },
  Anthropic: { name: "Anthropic" },
  AWS: { name: "AWS" },
  Cisco: { name: "Cisco" },
  CompTIA: { name: "CompTIA" },
  "Canadian Engineering Regulators": { name: "Canadian engineering regulators" },
  "Criteria Corp": { name: "Criteria Corp" },
  Databricks: { name: "Databricks" },
  GIAC: { name: "GIAC" },
  GitHub: { name: "GitHub" },
  "Google Cloud": { name: "Google Cloud" },
  HashiCorp: { name: "HashiCorp" },
  IAPP: { name: "IAPP" },
  IIA: { name: "The IIA" },
  "IPMA / GPM": { name: "IPMA / GPM" },
  IREB: { name: "IREB" },
  ISACA: { name: "ISACA" },
  ISC2: { name: "ISC2" },
  "ISO/IEC": { name: "ISO/IEC" },
  ISTQB: { name: "ISTQB" },
  Microsoft: { name: "Microsoft" },
  MongoDB: { name: "MongoDB" },
  NVIDIA: { name: "NVIDIA" },
  "Palo Alto Networks": { name: "Palo Alto Networks" },
  PECB: { name: "PECB" },
  PMI: { name: "PMI" },
  Salesforce: { name: "Salesforce" },
  "PeopleCert (AXELOS)": { name: "PeopleCert" },
  ServiceNow: { name: "ServiceNow" },
  TRECCERT: { name: "TRECCERT" },
  "The Linux Foundation": { name: "The Linux Foundation" },
  "The Open Group": { name: "The Open Group" },
};

export function getVendor(provider: string): Vendor {
  return vendors[provider] ?? { name: provider };
}
