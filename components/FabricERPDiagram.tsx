import { TbServer2, TbPlugConnected, TbBrandAzure, TbChartBar, TbCloud, TbArchive, TbArrowRight, TbArrowDown } from "react-icons/tb";

type IconType = React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
type Tone = "amber" | "blue" | "teal";

const toneClass: Record<Tone, string> = {
  amber: "border-accent-amber/50 text-accent-amber",
  blue: "border-accent-blue/60 text-accent-blue",
  teal: "border-accent-teal/50 text-accent-teal",
};

function Node({ icon: Icon, title, lines, tone }: { icon: IconType; title: string; lines: string[]; tone: Tone }) {
  return (
    <div className={`flex-1 rounded-card border bg-card p-3 ${toneClass[tone]}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon size={16} aria-hidden />
        <p className="text-xs font-medium">{title}</p>
      </div>
      <ul className="flex flex-col gap-1">
        {lines.map((l) => (
          <li key={l} className="font-mono text-[10px] leading-snug text-text-secondary">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center justify-center gap-1 text-accent-blue">
      <TbArrowDown size={18} className="lg:hidden" aria-hidden />
      <TbArrowRight size={18} className="hidden lg:block" aria-hidden />
      {label && <span className="font-mono text-[9px] text-text-muted">{label}</span>}
    </div>
  );
}

export default function FabricERPDiagram() {
  return (
    <figure className="mt-4 rounded-card border border-border bg-surface p-4">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        <Node icon={TbServer2} tone="amber" title="5 source systems" lines={["On-prem Linux apps", "SQL Server", "~4–5 TB each"]} />
        <Arrow label="gateway" />
        <Node icon={TbPlugConnected} tone="blue" title="Connectivity layer" lines={["On-Premises Data Gateway", "VMs + staging DBs", "Network / infra setup"]} />
        <Arrow label="ingest" />
        <Node icon={TbBrandAzure} tone="blue" title="Microsoft Fabric" lines={["Notebooks: Python, PySpark, SQL", "Map · cleanse · validate", "MDM models · data modelling"]} />
      </div>

      <div className="my-3 flex justify-center text-accent-blue">
        <TbArrowDown size={18} aria-hidden />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Node icon={TbChartBar} tone="teal" title="Reconciliation" lines={["Power BI dashboards", "Source vs target"]} />
        <Node icon={TbCloud} tone="teal" title="Load to EBS" lines={["Target rules enforced", "Connected via OCI network"]} />
        <Node icon={TbArchive} tone="teal" title="Archival" lines={["JIVS Archiving Platform", "Legacy decommissioning"]} />
      </div>

      <figcaption className="mt-4 font-mono text-[10px] leading-relaxed text-text-muted">
        Monitoring across the pipelines is done with Fabric Eventhouse and Fabric Metrics.
      </figcaption>
    </figure>
  );
}
