import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactFooter />
    </>
  );
}
