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
    slug: "fabric-erp-modernization",
    title: "Fabric-based ERP modernization",
    summary:
      "In-progress: enterprise data migration and archival framework as part of a large-scale ERP modernization program.",
    status: "in-progress",
    thumbnail: "/images/projects/fabric-modernization-thumb.png", // TODO: replace with real screenshot
    stack: ["Microsoft Fabric", "On-Premises Data Gateway", "PySpark", "SQL Server", "JIVS"],
    sections: [
      {
        heading: "Business problem",
        body: "The organization is modernizing its ERP system and needs to migrate and archive historical data from multiple on-premises systems into a new cloud-based platform, ensuring data integrity, compliance, and minimal disruption to ongoing operations.",
      },
      {
        heading: "Architecture overview",
        body: "The architecture involves using Microsoft Fabric for data orchestration and analytics, an On-Premises Data Gateway for secure data transfer, PySpark for data transformation, SQL Server for staging and validation, and the JIVS Archiving Platform for long-term data storage.",
      },
      {
        heading: "Technology stack",
        body: "Microsoft Fabric, On-Premises Data Gateway, PySpark, SQL Server, JIVS Archiving Platform.",
      },
      {
        heading: "Design decisions",
        body: "The decision to use Microsoft Fabric was based on its capabilities for handling complex data workflows and its integration with other Microsoft services. The On-Premises Data Gateway was chosen to securely connect on-premises data sources to the cloud. PySpark was selected for its performance in processing large datasets, while SQL Server provided a reliable staging environment. The JIVS Archiving Platform was chosen for its compliance with data retention policies and long-term storage capabilities.",
      },
      {
        heading: "Status note",
        body: "This project is in active development. Outcomes and metrics will be added as the work progresses — this page intentionally does not claim results that don't exist yet.",
      },
    ],
  },
];
