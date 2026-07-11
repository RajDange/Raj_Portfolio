import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-16">
      <Link
        href="/#projects"
        className="mb-8 inline-block font-mono text-[11px] text-text-muted hover:text-accent-blue"
      >
        ← back to projects
      </Link>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        {project.status === "in-progress" && (
          <span className="font-mono text-[10px] text-accent-amber">
            in progress
          </span>
        )}
      </div>
      <h1 className="mb-3 text-2xl font-medium text-text-primary sm:text-3xl">
        {project.title}
      </h1>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {project.summary}
      </p>
      <div className="mb-10 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-1 font-mono text-[10px] text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {project.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 text-base font-medium text-text-primary">
              {section.heading}
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
