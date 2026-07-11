import { techStack } from "@/data/techstack";

export default function TechStackSection() {
  return (
    <section id="stack" className="border-t border-border px-6 py-10 sm:px-10">
      <p className="mb-5 font-mono text-[10px] tracking-wide text-text-muted">
        02 / tech stack
      </p>
      <div className="flex flex-col gap-6">
        {techStack.map((category) => (
          <div key={category.label}>
            <p className="mb-2 text-xs text-text-secondary">{category.label}</p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-[11px] text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_16px_rgba(95,180,240,0.35)]"
                >
                <item.icon size={14} aria-hidden />
                 {item.name}
               </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
