import Link from "next/link";
import Image from "next/image";
import { TbBolt } from "react-icons/tb";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border px-6 py-10 sm:px-10">
      <p className="mb-5 font-mono text-[10px] tracking-wide text-text-muted">
        01 / projects
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((project) => !project.hidden)
          .map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-borderStrong"
            >
              <div className="relative h-32 overflow-hidden border-b border-border bg-card">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-text-primary">
                    {/* stretched link makes the whole card clickable */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </Link>
                  </p>
                  {project.status === "in-progress" && (
                    <span className="whitespace-nowrap font-mono text-[9px] text-accent-amber">
                      in progress
                    </span>
                  )}
                </div>
                <p className="mb-3 font-mono text-[10px] text-text-muted">
                  {project.stack.slice(0, 3).join(" · ")}
                </p>
                {project.metric && (
                  <span className="font-mono text-[10px] text-accent-teal">
                    {project.metric}
                  </span>
                )}
                {project.initiative && (
                  <Link
                    href={`/projects/${project.initiative.slug}`}
                    className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent-amber/50 bg-accent-amber/10 px-3 py-1.5 font-mono text-[10px] text-accent-amber transition-colors hover:bg-accent-amber/20"
                  >
                    <TbBolt size={13} aria-hidden />
                    My initiative: {project.initiative.label} →
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
