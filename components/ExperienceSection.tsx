import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border px-6 py-10 sm:px-10">
      <p className="mb-5 font-mono text-[10px] tracking-wide text-text-muted">
        03 / experience
      </p>
      <div className="flex flex-col gap-8">
        {experience.map((role) => (
          <div key={role.company} className="flex gap-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border font-mono text-[11px] text-text-secondary">
              {role.monogram}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <p className="text-sm text-text-primary">
                  {role.title} · {role.company}
                </p>
                <p className="font-mono text-[10px] text-text-muted">
                  {role.duration}
                </p>
              </div>
              <p className="mb-3 font-mono text-[10px] text-text-muted">
                {role.location}
              </p>
              <ul className="flex flex-col gap-1.5">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-xs leading-relaxed text-text-secondary before:mr-2 before:text-accent-blue before:content-['▹']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
