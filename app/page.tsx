import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { DesignsSection } from "@/components/designs-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { StarBackground } from "@/components/star-background"
import { StarCursor } from "@/components/star-cursor"

export default function Home() {
  return (
    <div>
      <StarBackground />
      <StarCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <DesignsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
