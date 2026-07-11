export type Certification = {
  name: string;
  issuer: string;
  badgeImage: string; // TODO: replace with real badge image path once provided
  verifyUrl: string; // TODO: paste real Credly / Microsoft Learn / Databricks verification link
};

export const certifications: Certification[] = [
  {
    name: "Databricks Fundamentals Accreditation",
    issuer: "Databricks",
    badgeImage: "/images/certs/databricks-fundamentals.png",
    verifyUrl: "",
  },
  {
    name: "Cloud Data Integration for Developers R42",
    issuer: "Informatica",
    badgeImage: "/images/certs/informatica-cdi.png",
    verifyUrl: "",
  },
  {
    name: "Cloud Application Integration Services for Developers R41",
    issuer: "Informatica",
    badgeImage: "/images/certs/informatica-cai.png",
    verifyUrl: "",
  },
  {
    name: "Cloud Data Quality R41",
    issuer: "Informatica",
    badgeImage: "/images/certs/informatica-cdq.png",
    verifyUrl: "",
  },
  {
    name: "Cloud Data Governance and Catalog Curation and Discovery",
    issuer: "Informatica",
    badgeImage: "/images/certs/informatica-governance.jpg",
    verifyUrl: "",
  },
  {
    name: "Azure Fundamentals of Machine Learning",
    issuer: "Microsoft",
    badgeImage: "/images/certs/azure-ml-fundamentals.png",
    verifyUrl: "",
  },
];
