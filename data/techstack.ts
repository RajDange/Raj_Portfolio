import {
  SiApacheairflow,
  SiApachespark,
  SiDbt,
  SiGit,
  SiKubernetes,
  SiDocker,
  SiPython,
  SiSnowflake,
  SiPowerbi,
  SiMicrosoftazure,
} from "react-icons/si";
import { TbDatabase, TbBrandAzure, TbStack2, TbCloudDataConnection } from "react-icons/tb";
import type { IconType } from "react-icons";

export type TechCategory = {
  label: string;
  items: { name: string; icon: IconType }[];
};

export const techStack: TechCategory[] = [
  {
    label: "Cloud & data platform",
    items: [
      { name: "MS Fabric", icon: TbDatabase },
      { name: "Azure Databricks", icon: TbStack2 },
      { name: "Azure Data Factory", icon: TbBrandAzure },
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Azure Data Lake", icon: SiMicrosoftazure },
    ],
  },
  {
    label: "Data integration & ETL",
    items: [
      { name: "DBT", icon: SiDbt },
      { name: "Synapse Analytics", icon: TbCloudDataConnection },
      { name: "Informatica IICS", icon: TbDatabase },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "PySpark", icon: SiApachespark },
    ],
  },
  {
    label: "Analytics & BI",
    items: [{ name: "Power BI", icon: SiPowerbi }],
  },
  {
    label: "DevOps",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Airflow", icon: SiApacheairflow },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
];
