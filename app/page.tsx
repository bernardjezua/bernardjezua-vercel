import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { DesignsSection } from "@/components/designs-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { FloatingActionButton } from "@/components/floating-action-btn";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <LoadingScreen>
      <div className="bg-[#0a0a0a] min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <DesignsSection />
        <FloatingActionButton />
        <ContactSection />
        <Footer />
      </div>
    </LoadingScreen>
  );
}
