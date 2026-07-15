export type Certification = {
  name: string;
  issuer: string;
  badgeImage: string; // TODO: replace with real badge image path once provided
  verifyUrl: string; // TODO: paste real Credly / Microsoft Learn / Databricks verification link
};

export const certifications: Certification[] = [
  {
    name: "Databricks Engineer Associate",
    issuer: "Databricks",
    badgeImage: "/images/certs/Databricks Engineer Associate.png",
    verifyUrl: "",
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer",
    issuer: "Fabric",
    badgeImage: "/images/certs/DP700.png",
    verifyUrl: "",
  },
  {
    name: "Databricks Machine Learning Professional",
    issuer: "Databricks",
    badgeImage: "/images/certs/Professional-badge-ML.png",
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
    name: "Snowflake SnowPro Core Certification",
    issuer: "Snowflake",
    badgeImage: "/images/certs/GDS Snowpro_associate.png",
    verifyUrl: "",
  },
];
