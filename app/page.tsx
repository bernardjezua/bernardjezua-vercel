import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/hero-section";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/about-section").then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/components/skills-section").then((mod) => mod.SkillsSection));
const CertificationsSection = dynamic(() => import("@/components/certifications-section").then((mod) => mod.CertificationsSection));
const ProjectsSection = dynamic(() => import("@/components/projects-section").then((mod) => mod.ProjectsSection));
const DesignsSection = dynamic(() => import("@/components/designs-section").then((mod) => mod.DesignsSection));
const ContactSection = dynamic(() => import("@/components/contact-section").then((mod) => mod.ContactSection));
const FloatingActionButton = dynamic(() => import("@/components/floating-action-btn").then((mod) => mod.FloatingActionButton));

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
