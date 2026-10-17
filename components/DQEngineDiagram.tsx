import { TbUsers, TbDatabase, TbCpu, TbNotebook, TbArrowRight, TbArrowDown } from "react-icons/tb";

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center justify-center gap-1 text-accent-blue">
      <TbArrowDown size={18} className="lg:hidden" aria-hidden />
      <TbArrowRight size={18} className="hidden lg:block" aria-hidden />
      {label && (
        <span className="font-mono text-[9px] text-text-muted">{label}</span>
      )}
    </div>
  );
}

function Node({
  icon: Icon,
  title,
  lines,
  tone,
}: {
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  title: string;
  lines: string[];
  tone: "amber" | "blue" | "teal";
}) {
  const colors = {
    amber: "border-accent-amber/50 text-accent-amber",
    blue: "border-accent-blue/60 text-accent-blue",
    teal: "border-accent-teal/50 text-accent-teal",
  }[tone];
  return (
    <div className={`flex-1 rounded-card border bg-card p-3 ${colors}`}>
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

export default function DQEngineDiagram() {
  return (
    <figure className="mt-4 rounded-card border border-border bg-surface p-4">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row">
        <Node
          icon={TbUsers}
          tone="amber"
          title="Functional team"
          lines={["Define rules", "Review & approve", "Change thresholds", "No code needed"]}
        />
        <Arrow label="maintain" />
        <Node
          icon={TbDatabase}
          tone="blue"
          title="Central rule repository"
          lines={["Metadata table", "rule_name", "expression {fieldname}", "message"]}
        />
        <Arrow label="load" />
        <Node
          icon={TbCpu}
          tone="blue"
          title="DQEngine"
          lines={["Reusable PySpark class", "Resolves rules by name", "Substitutes the column", "Returns one result string"]}
        />
      </div>

      <div className="my-3 flex justify-center text-accent-blue">
        <TbArrowDown size={18} aria-hidden />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {["Notebook / pipeline A", "Notebook / pipeline B", "Notebook / pipeline C"].map((n) => (
          <Node
            key={n}
            icon={TbNotebook}
            tone="teal"
            title={n}
            lines={["check(df, field, [rules])", "→ one DQ result per field"]}
          />
        ))}
      </div>

      <figcaption className="mt-4 font-mono text-[10px] leading-relaxed text-text-muted">
        Every pipeline reads the same rules from one place. Changing a rule in the
        repository changes it everywhere it is used.
      </figcaption>
    </figure>
  );
}
