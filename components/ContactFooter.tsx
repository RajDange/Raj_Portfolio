export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border px-6 py-10 sm:px-10"
    >
      <p className="mb-5 font-mono text-[10px] tracking-wide text-text-muted">
        05 / contact
      </p>
      <p className="mb-4 max-w-md text-sm text-text-secondary">
        Open to Data Engineer and Data Architect roles and technical
        conversations. Reach out directly.
      </p>
      <div className="flex flex-wrap gap-3 text-xs">
        <a
          href="mailto:rajndange528@gmail.com"
          className="rounded-md border border-border px-4 py-2 text-text-secondary hover:border-borderStrong"
        >
          rajndange528@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/raj-dange"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-4 py-2 text-text-secondary hover:border-borderStrong"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RajDange"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-4 py-2 text-text-secondary hover:border-borderStrong"
        >
          GitHub
        </a>
      </div>
      <p className="mt-8 font-mono text-[10px] text-text-muted">
        © 2026 Raj Dange
      </p>
    </footer>
  );
}
