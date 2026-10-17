import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-8 px-6 py-10 sm:px-10 sm:py-16 md:flex-row md:items-center md:justify-between md:gap-16">
      <div className="max-w-md">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded border border-[#1D4E78] px-2 py-1 font-mono text-[10px] text-accent-blue">
            Data Engineer
          </span>
          <span className="rounded border border-[#1F5C43] px-2 py-1 font-mono text-[10px] text-accent-teal">
            Data Architect
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-medium leading-tight text-text-primary sm:text-5xl">
          Raj <span className="text-accent-blue">Dange</span>
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-text-secondary sm:text-base">
          Data Engineer building governed, scalable data platforms across
          Azure, Microsoft Fabric, and Databricks — from ERP migrations to
          modern lakehouse architectures.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/RAJ_NETAJI_DANGE_Resume.pdf"
            target="_blank"
            className="btn-glass rounded-md border border-accent-blue bg-accent-blue/90 px-4 py-2 text-xs font-medium text-bg"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="btn-glass rounded-md border border-border bg-white/[0.03] px-4 py-2 text-xs text-text-secondary hover:text-text-primary"
            
          >
            View projects
          </a>
          
          <a
            href="https://github.com/RajDange"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass rounded-md border border-border bg-white/[0.03] px-4 py-2 text-xs text-text-secondary hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/raj-dange"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass rounded-md border border-border bg-white/[0.03] px-4 py-2 text-xs text-text-secondary hover:text-text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative h-40 w-40 flex-shrink-0 sm:h-48 sm:w-48">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card">
          <Image src="/images/Raj_Profile picture.jpg" alt="Raj Dange" fill className="object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span className="font-mono text-[10px] text-text-secondary">
            Bangalore, India
          </span>
        </div>
      </div>
    </section>
  );
}
