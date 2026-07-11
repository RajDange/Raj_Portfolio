export type Role = {
  company: string;
  monogram: string;
  title: string;
  duration: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "LKQ GCC",
    monogram: "LK",
    title: "Senior Data Engineer",
    duration: "06/2026 – Present",
    location: "Bangalore, India",
    bullets: [
      "Designing and implementing end-to-end data migration and archival solutions as part of a large-scale ERP modernization program.",
      "Architecting Microsoft Fabric-based data integration frameworks to ingest, transform, validate, and load enterprise data from multiple source systems.",
      "Integrating on-premises Linux-based applications and SQL Server environments with Microsoft Fabric using VMs, staging databases, and an On-Premises Data Gateway.",
      "Building Fabric Notebooks in Python, PySpark, and SQL for data mapping, cleansing, validation, reconciliation, and business rule implementation.",
      "Implementing monitoring via Fabric Eventhouse and Fabric Metrics to track pipeline execution and platform health.",
      "Supporting enterprise data archival using the JIVS Archiving Platform for regulatory compliance and legacy system decommissioning.",
    ],
  },
  {
    company: "Johnson Controls",
    monogram: "JC",
    title: "Data Engineer",
    duration: "01/2023 – 06/2026",
    location: "Pune, India",
    bullets: [
      "Designed data integration frameworks for ERP migrations across multiple regions using Azure Databricks, ADF, Informatica IICS, SSMS, and Snowflake.",
      "Used Snowflake as the raw layer and warehouse solution for large-scale enterprise data management.",
      "Automated data profiling and validation, cutting manual effort by 60% and improving data quality to up to 87%.",
      "Established CI/CD practices for data pipeline deployments across development and production environments.",
      "Engineered API orchestration flows using CAI for migrating a legacy CPQ system to its new version.",
      "Led master data management initiatives and maintained star schema designs for transactional data modeling and reporting.",
    ],
  },
];
