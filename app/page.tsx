"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ProjectsSection } from "@/components/projects-section";
import { DesignsSection } from "@/components/designs-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingActionButton } from "@/components/floating-action-btn";

export default function Home() {
  useEffect(() => {
    // Standard effect for initialization if needed
  }, [])

  return (
    <LoadingScreen>
      <div className="bg-[#0a0a0a] min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <DesignsSection />
        <SkillsSection />
        <CertificationsSection />
        <FloatingActionButton />
        <ContactSection />
        <Footer />
      </div>
    </LoadingScreen>
  );
}
