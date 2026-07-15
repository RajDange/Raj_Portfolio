export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "shipped" | "in-progress";
  thumbnail: string; // path in /public/images — replace with your real screenshot
  stack: string[];
  metric?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "erp-data-migration",
    title: "Multi-country ERP data migration",
    summary:
      "Led ERP data migration across Austria, Switzerland, the Netherlands, and North America into Oracle Fusion.",
    status: "shipped",
    thumbnail: "/images/projects/Multi-country ERP data migration.png", // TODO: replace with real screenshot
    stack: ["Azure Data Factory", "Informatica IDMC", "PySpark", "SQL", "Power BI"],
    metric: "40% improvement in processing efficiency",
    sections: [
      {
        heading: "Business problem",
        body: "Business was modernizing its ERP system and needed to migrate historical data from multiple legacy systems into Oracle Fusion, while ensuring data quality, compliance, and minimal downtime.",
      },
      {
        heading: "Functional requirements",
        body: "Legacy ERP systems are not suitable for modern growth and analytics. The migration needed to ensure data integrity, support multiple countries' data, and provide a framework for future migrations.",
      },
      {
        heading: "Non-functional requirements",
        body: "TODO — throughput, SLA windows, data quality thresholds, uptime expectations.",
      },
      {
        heading: "Assumptions",
        body: "TODO — anything you assumed true about source data, environments, or team ownership that turned out to matter.",
      },
      {
        heading: "Architecture overview",
        body: "TODO — describe the ADF + Informatica IDMC (CAI/CDI/CDQ) pipeline flow. This is a strong section to pair with a Mermaid diagram once you confirm the actual flow.",
      },
      {
        heading: "Technology stack",
        body: "Azure Data Factory, Informatica IDMC (CAI, CDI, CDQ), PySpark, SQL, SSMS, Power BI.",
      },
      {
        heading: "Data flow",
        body: "TODO — source systems to Oracle Fusion, including staging layers.",
      },
      {
        heading: "Design decisions",
        body: "TODO — why ADF + Informatica together rather than either alone. Was this inherited or your call?",
      },
      {
        heading: "Alternative approaches",
        body: "TODO — what else was considered (e.g. pure ADF, pure Informatica, custom Python) and why it was rejected.",
      },
      {
        heading: "Trade-offs",
        body: "TODO — what you gave up for what you gained (e.g. flexibility vs. speed of delivery).",
      },
      {
        heading: "Security considerations",
        body: "TODO — credential handling, PII in migrated data, access controls across four countries' data.",
      },
      {
        heading: "Performance optimization",
        body: "TODO — the specific change(s) behind the 40% efficiency gain.",
      },
      {
        heading: "Scalability considerations",
        body: "TODO — how the pipeline handled multiple countries' volumes without redesign.",
      },
      {
        heading: "Cost optimization",
        body: "TODO — any cost-aware decisions (e.g. pipeline scheduling, compute sizing).",
      },
      {
        heading: "Monitoring & logging",
        body: "TODO — how failures/reconciliation issues were surfaced.",
      },
      {
        heading: "Error handling",
        body: "TODO — retry logic, dead-letter handling, manual intervention points.",
      },
      {
        heading: "Testing strategy",
        body: "TODO — how data quality and transformation correctness were validated pre-cutover.",
      },
      {
        heading: "CI/CD strategy",
        body: "TODO — if applicable for this project specifically.",
      },
      {
        heading: "Deployment process",
        body: "TODO — cutover approach across the four countries (big bang vs. phased).",
      },
      {
        heading: "Future enhancements",
        body: "TODO — what you'd change if you rebuilt this today.",
      },
      {
        heading: "Lessons learned",
        body: "TODO — what actually broke or needed rework mid-project.",
      },
    ],
  },
  {
    slug: "lakehouse-azure-fabric",
    title: "Next-gen lakehouse on Azure & Fabric",
    summary:
      "End-to-end modern data platform for scalable ingestion, transformation, and analytics using ADF, Databricks, and Microsoft Fabric.",
    status: "shipped",
    thumbnail: "/images/projects/lakehouse-thumb.png", // TODO: replace with real screenshot
    stack: ["Azure Databricks", "Microsoft Fabric", "Azure Data Factory", "Azure DevOps", "Power BI"],
    sections: [
      { heading: "Business problem", body: "TODO" },
      { heading: "Functional requirements", body: "TODO" },
      { heading: "Non-functional requirements", body: "TODO" },
      { heading: "Assumptions", body: "TODO" },
      {
        heading: "Architecture overview",
        body: "TODO — medallion architecture (bronze/silver/gold)? What were the actual transformation rules per layer?",
      },
      { heading: "Technology stack", body: "Azure Databricks, Microsoft Fabric, Azure Data Factory, Azure DevOps, Power BI." },
      { heading: "Data flow", body: "TODO — source data type (batch/CDC/streaming) and approximate volume." },
      {
        heading: "Design decisions",
        body: "TODO — why Fabric alongside Databricks/ADF instead of Databricks alone (cost, licensing, org mandate?).",
      },
      { heading: "Alternative approaches", body: "TODO" },
      { heading: "Trade-offs", body: "TODO" },
      { heading: "Security considerations", body: "TODO" },
      { heading: "Performance optimization", body: "TODO — any specific job that got faster, with before/after numbers." },
      { heading: "Scalability considerations", body: "TODO" },
      { heading: "Cost optimization", body: "TODO" },
      { heading: "Monitoring & logging", body: "TODO — validation frameworks and logging mechanisms mentioned on your resume — what did these actually check?" },
      { heading: "Error handling", body: "TODO" },
      { heading: "Testing strategy", body: "TODO" },
      { heading: "CI/CD strategy", body: "TODO — Azure DevOps pipeline specifics." },
      { heading: "Deployment process", body: "TODO" },
      { heading: "Future enhancements", body: "TODO" },
      { heading: "Lessons learned", body: "TODO" },
    ],
  },
  {
    slug: "fabric-erp-modernization",
    title: "Fabric-based ERP modernization",
    summary:
      "In-progress: enterprise data migration and archival framework as part of a large-scale ERP modernization program.",
    status: "in-progress",
    thumbnail: "/images/projects/fabric-modernization-thumb.jpg", // TODO: replace with real screenshot
    stack: ["Microsoft Fabric", "On-Premises Data Gateway", "PySpark", "SQL Server", "JIVS"],
    sections: [
      {
        heading: "Business problem",
        body: "TODO — what's driving the ERP modernization, and what does the current legacy-system landscape look like.",
      },
      {
        heading: "Architecture overview",
        body: "TODO — current state: how many on-prem systems, what the Fabric ingestion framework looks like today (even if partially built).",
      },
      {
        heading: "Technology stack",
        body: "Microsoft Fabric, On-Premises Data Gateway, PySpark, SQL Server, JIVS Archiving Platform.",
      },
      {
        heading: "Design decisions",
        body: "TODO — why JIVS for archival specifically, and what legacy systems it's decommissioning.",
      },
      {
        heading: "Status note",
        body: "This project is in active development. Outcomes and metrics will be added as the work progresses — this page intentionally does not claim results that don't exist yet.",
      },
    ],
  },
];
