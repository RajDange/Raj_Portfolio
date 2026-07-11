import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certs" className="border-t border-border px-6 py-10 sm:px-10">
      <p className="mb-5 font-mono text-[10px] tracking-wide text-text-muted">
        04 / certifications
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {certifications.map((cert) => {
          const CardInner = (
            <>
              <div className="relative mx-auto mb-2 h-14 w-14 overflow-hidden rounded-full border border-accent-blue">
                <Image
                  src={cert.badgeImage}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-[11px] leading-snug text-text-secondary">
                {cert.name}
              </p>
              <p className="text-center font-mono text-[9px] text-text-muted">
                {cert.issuer}
              </p>
            </>
          );

          return cert.verifyUrl ? (
            <a
              key={cert.name}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-3 transition-colors hover:border-borderStrong"
            >
              {CardInner}
            </a>
          ) : (
            <div key={cert.name} className="rounded-lg border border-border p-3">
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
