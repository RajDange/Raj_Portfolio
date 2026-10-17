export type ProjectSection = {
  heading: string;
  body: string;
  code?: string; // optional illustrative code block
  visual?: "dq-architecture" | "fabric-architecture"; // optional built-in diagram rendered under the body
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "shipped" | "in-progress";
  thumbnail: string; // path in /public/images — replace with your real screenshot
  stack: string[];
  metric?: string;
  hidden?: boolean; // not shown in the projects grid; page stays reachable
  initiative?: { label: string; slug: string }; // highlighted add-on linking to another project page
  partOf?: { title: string; slug: string }; // shown on the page as a back-link to the parent project
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "fabric-erp-modernization",
    title: "Fabric-based ERP modernization",
    summary:
      "In-progress: migrating five on-premises source systems (about 4–5 TB each) to Oracle EBS through Microsoft Fabric, with MDM, data modelling and Power BI reconciliation.",
    status: "in-progress",
    thumbnail: "/images/projects/fabric-modernization-thumb.png",
    stack: ["Microsoft Fabric", "On-Premises Data Gateway", "PySpark", "SQL Server", "Power BI", "Oracle EBS", "JIVS"],
    metric: "5 sources · 4–5 TB each",
    initiative: { label: "DQEngine", slug: "dqengine-pyspark" },
    sections: [
      {
        heading: "Business problem",
        body: "The organization is modernizing its ERP landscape. Data from five on-premises source systems, each holding roughly 4–5 TB, has to be migrated into Oracle EBS, and the legacy systems retired with their history archived for compliance, without disrupting ongoing operations.",
      },
      {
        heading: "Architecture overview",
        body: "Source systems are reached through On-Premises Data Gateways and staging databases, and data is processed in Microsoft Fabric using notebooks. Cleansed and validated data is loaded into Oracle EBS, while Power BI reconciliation dashboards compare source and target. Historical data is archived with the JIVS Archiving Platform.",
        visual: "fabric-architecture",
      },
      {
        heading: "Connectivity, network and infrastructure",
        body: "A large part of the work is connecting the sources to Fabric. The sources include on-premises Linux-based applications and SQL Server, which are integrated through VMs, staging databases and On-Premises Data Gateways. This involves network and infrastructure setup on the source side, and OCI networking for the connection to the EBS target.",
      },
      {
        heading: "Processing in Fabric",
        body: "Fabric Notebooks in Python, PySpark and SQL handle data mapping, cleansing, validation, reconciliation and business-rule implementation, across the volume of five multi-terabyte sources.",
      },
      {
        heading: "MDM and data modelling",
        body: "Models are being built for master data management, alongside data modelling for the migrated data, so that master records are consistent across the five sources before they reach the target.",
      },
      {
        heading: "Reconciliation",
        body: "Power BI reconciliation dashboards give the business a view of source versus target, so migration completeness and correctness can be checked and signed off by the people who own the data.",
      },
      {
        heading: "Loading into EBS",
        body: "Data is loaded into Oracle EBS, where it has to satisfy the target's validation rules. Connectivity to EBS runs through OCI networking.",
      },
      {
        heading: "Monitoring",
        body: "Pipeline execution and platform health are tracked with Fabric Eventhouse and Fabric Metrics.",
      },
      {
        heading: "Archival and decommissioning",
        body: "The JIVS Archiving Platform keeps legacy data available for regulatory compliance and supports decommissioning the old systems.",
      },
      {
        heading: "Status note",
        body: "This project is in active development. Outcomes and metrics will be added as the work progresses — this page intentionally does not claim results that don't exist yet.",
      },
    ],
  },
  {
    slug: "erp-data-migration",
    title: "Multi-country ERP data migration",
    summary:
      "Led ERP data migration across Austria, Switzerland, the Netherlands, and North America into Oracle Fusion.",
    status: "shipped",
    thumbnail: "/images/projects/Multi-country ERP data migration.png", // TODO: replace with real screenshot
    stack: ["Azure Data Factory", "Synapse Analytics", "Informatica IDMC", "PySpark", "SQL", "Power BI"],
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
        heading: "Architecture overview",
        body: "The architecture involved using Azure Data Factory for orchestration, Informatica IDMC for data integration and quality, PySpark for transformations, and SQL Server for staging and validation. Power BI was used for reporting and monitoring.",
      },
      {
        heading: "Technology stack",
        body: "Azure Data Factory, Synapse Analytics, Informatica IDMC (CAI, CDI, CDQ), PySpark, SQL, SSMS, Power BI.",
      },
      {
        heading: "Data flow",
        body: "Data was extracted from multiple legacy ERP systems, transformed using PySpark and Informatica, and loaded into Oracle Fusion. The process included data validation, cleansing, and enrichment to ensure high-quality migration.",
      },
      {
        heading: "Design decisions",
        body: "The decision to use Azure Data Factory and Informatica IDMC was based on their capabilities for handling complex data integration scenarios, support for multiple data sources, and robust data quality features. PySpark was chosen for its scalability and performance in processing large datasets.",
      },
      {
        heading: "Security considerations",
        body: "Data security was a top priority, with encryption in transit and at rest, role-based access controls, and compliance with data protection regulations across all countries involved in the migration.",
      },
      {
        heading: "Performance optimization",
        body: "The pipeline was optimized by parallelizing data extraction and transformation processes, tuning PySpark jobs for better performance, and implementing incremental data loads to reduce processing time. Performance metrics were monitored to ensure efficiency.",
      },
      {
        heading: "Scalability considerations",
        body: "The architecture was designed to handle increasing data volumes and additional countries in the future. The use of cloud-based services like Azure Data Factory and Synapse Analytics allows for easy scaling of resources based on demand.",
      },
      {
        heading: "Cost optimization",
        body: "Cost optimization strategies included leveraging Azure's pay-as-you-go model, optimizing data storage and processing costs, and using reserved instances for predictable workloads. Regular cost reviews were conducted to identify areas for further savings.",
      },
      {
        heading: "Monitoring & logging",
        body: "Monitoring and logging were implemented using Azure Monitor and Power BI dashboards to track pipeline performance, data quality metrics, and error rates. Alerts were set up for critical failures to ensure timely intervention.",
      },
      {
        heading: "Error handling",
        body: "Error handling mechanisms included retry policies for transient failures, detailed logging of errors for troubleshooting, and automated notifications to the development team for immediate action. Data validation checks were also in place to catch inconsistencies early in the process.",
      },
      {
        heading: "Testing strategy",
        body: "The testing strategy involved unit testing of individual components, integration testing of the entire pipeline, and user acceptance testing with stakeholders. Test cases were designed to cover various scenarios, including edge cases and failure conditions.",
      },
      {
        heading: "Deployment process",
        body: "The deployment process followed a CI/CD approach using Azure DevOps pipelines. Changes were version-controlled, and automated builds and deployments were triggered upon code commits. Staging environments were used for testing before production deployment, ensuring a smooth transition with minimal downtime.",
      },
      {
        heading: "Future enhancements",
        body: "Future enhancements include implementing machine learning models for predictive data quality checks, expanding the migration framework to support additional legacy systems, and integrating more advanced analytics capabilities into the reporting dashboards.",
      },
      {
        heading: "Lessons learned",
        body: "Key lessons learned include the importance of thorough data profiling before migration, the need for clear communication and collaboration among cross-functional teams, and the value of continuous monitoring and optimization to maintain high performance and data quality throughout the migration process.",
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
      { heading: "Business problem", 
        body: "Gathering and analyzing data from multiple sources was slow and error-prone, limiting the organization's ability to make timely, data-driven decisions." 
      },
      {
        heading: "Architecture overview",
        body: "high-level architecture diagram and description of how ADF, Databricks, and Fabric work together to ingest, transform, and analyze data.",
      },
      { heading: "Technology stack", body: "Azure Databricks, Microsoft Fabric, Azure Data Factory, Azure DevOps, Power BI." },
      { heading: "Data flow", body: "Source data is ingested via Azure Data Factory, processed using Databricks, and analyzed through Microsoft Fabric." },
      {
        heading: "Design decisions",
        body: "The choice of Azure Databricks for processing was driven by its scalability and support for big data workloads. Microsoft Fabric was selected for its seamless integration with other Microsoft services and its capabilities for real-time analytics. Azure Data Factory was used for orchestrating data pipelines, ensuring efficient data movement and transformation.",
      },
      { heading: "Security considerations", body: "Financial data security and compliance were paramount, leading to the implementation of robust access controls and encryption mechanisms." },
      { heading: "Performance optimization", body: "Performance was optimized by implementing efficient data processing techniques and leveraging the scalability of Azure Databricks." },
      { heading: "Scalability considerations", body: "The architecture was designed to scale horizontally, ensuring that the system can handle increasing data volumes and user loads without compromising performance." },
      { heading: "Cost optimization", body: "Cost optimization was achieved through efficient resource utilization and the implementation of a pay-as-you-use model." },
      { heading: "Monitoring & logging", body: "Monitoring and logging were implemented to track system performance, data quality, and security events." },
      { heading: "Error handling", body: "Error handling was implemented to ensure data integrity and system reliability." },
      { heading: "Testing strategy", body: "A comprehensive testing strategy was developed to validate data accuracy and system performance." },
      { heading: "CI/CD strategy", body: "Continuous integration and deployment strategies were implemented using Azure DevOps to ensure smooth and efficient software releases." },
      { heading: "Deployment process", body: "The deployment process involved automated pipelines to ensure consistent and reliable releases across different environments." },
    ],
  },
  {
    slug: "dqengine-pyspark",
    title: "DQEngine: metadata-driven data quality",
    summary:
      "In-progress: a reusable PySpark class that applies data quality rules by name, with rule definitions loaded from a metadata table.",
    status: "in-progress",
    hidden: true,
    partOf: { title: "Fabric-based ERP modernization", slug: "fabric-erp-modernization" },
    thumbnail: "/images/projects/dqengine-thumb.png",
    stack: ["PySpark", "Python", "Metadata tables"],
    sections: [
      {
        heading: "Overview",
        body: "DQEngine applies data quality rules to fields by rule name. The rules themselves live in a metadata table rather than in notebook code, so they can be reviewed and changed without editing pipelines.",
      },
      {
        heading: "Centralized rule repository",
        body: "Data quality rules are kept in one central repository (a metadata table) instead of being copied into each notebook. The functional team can review, correct and adjust rules in that one place, without needing to read or edit pipeline code. Every pipeline that calls DQEngine reads the same definitions, so a rule is defined once, behaves the same everywhere, and has a single place to audit.",
        visual: "dq-architecture",
      },
      {
        heading: "How it works",
        body: "A notebook passes a field and the names of the rules to apply. The engine loads each rule's expression from the metadata table, evaluates it against the field, and returns the result as a single output string.",
      },
      {
        heading: "Rule definition format",
        body: "Expressions in the metadata table use a {fieldname} placeholder that is substituted with the target column at run time. Length rules are all treated as a maximum length (<=), including the case where either of two lengths is allowed.",
        code: `(length(col("{fieldname}")) <= N)`,
      },
      {
        heading: "Design decision: multiple rules per field",
        body: "The engine originally ran one rule per call. The chosen approach is to pass the notebook's rule names as an array, evaluate each rule's expression in a loop, and return one output string with all failure messages concatenated. This keeps the notebook call to one line per field and gives a single readable result per field.",
      },
      {
        heading: "Illustrative sketch",
        body: "Simplified to show the pattern. This is not the production code.",
        code: `class DQEngine:
    def __init__(self, rules_df):
        # rules_df: metadata table (rule_name, expression, message)
        self.rules = {r.rule_name: r for r in rules_df.collect()}

    def check(self, df, field, rule_names):
        failures = []
        for name in rule_names:
            rule = self.rules[name]
            expr = eval(rule.expression.replace("{fieldname}", field))
            failures.append(
                F.when(~expr, F.lit(rule.message)).otherwise(F.lit(""))
            )
        return df.withColumn(f"{field}_dq", F.concat_ws("; ", *failures))`,
      },
      {
        heading: "Considerations",
        body: "Because stored expressions are evaluated at run time, write access to the metadata table needs to be controlled.",
      },
      {
        heading: "Status note",
        body: "This project is in active development. Outcomes and metrics will be added once there is real data; this page intentionally does not claim results that don't exist yet.",
      },
    ],
  },
];
