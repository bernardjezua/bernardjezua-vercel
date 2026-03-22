"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);

      const lightSections = ["about", "certifications"];
      let isLight = false;
      for (const sectionId of lightSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            isLight = true;
            break;
          }
        }
      }
      setIsLightSection(isLight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when the side drawer is opened
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Designs", href: "#designs" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-50 transition-transform duration-500 ease-(--transition-ease) ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "py-4" : "py-6"}`}
      >
        {/* Main Flex Layout */}
        <div className="flex items-center justify-between px-6 md:px-12 w-full gap-4">
          
          {/* Left: Logo */}
          <div className="flex items-center flex-1">
            {/* Mobile Menu Button currently visible to avoid messing layout, but mostly for left padding equivalence */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`lg:hidden ${isLightSection ? "text-black" : "text-white"} mr-4 transition-colors duration-300`}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            
            {!mobileMenuOpen && (
              <Link aria-label="Logo" href="/">
                <div className="relative h-12 w-9 transition-transform duration-300 hover:scale-105">
                  <Image src="/logo.png" alt="Logo" fill priority className={`object-contain transition-all duration-500 ${isLightSection ? "invert" : ""}`} />
                </div>
              </Link>
            )}
          </div>

          {/* Center: Liquid Glass Nav Pill */}
          <div className="hidden lg:flex justify-center flex-none">
            <nav className={`header-nav ${
              scrolled 
                ? (isLightSection ? "bg-black/5 backdrop-blur-xl shadow-lg border-black/10" : "bg-white/5 backdrop-blur-xl shadow-lg border-white/10")
                : "bg-transparent border-transparent"
            }`}>
              {navItems.filter(item => item.name !== "Resume").map((item) => (
                <Link
                    key={item.name}
                    aria-label={item.name}
                    href={item.href}
                    className={`nav-link ${
                      isLightSection 
                        ? "text-black/60 hover:text-black hover:bg-black/10" 
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                >
                    {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Resume Button with Hover Popup */}
          <div className="hidden md:flex justify-end flex-1">
            <div className="relative group">
              <Link href="/resume">
                <Button className={`font-bold tracking-widest uppercase text-xs rounded-full px-6 py-5 transition-all duration-300 overflow-hidden relative ${isLightSection ? "bg-black text-white hover:bg-black/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]" : "bg-bern-blue hover:bg-bern-blue/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"}`}>
                  <span className="relative z-10">Resume</span>
                </Button>
              </Link>
              
              {/* Hover Popup */}
              <div className="absolute top-full right-0 mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[300px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 shadow-2xl translate-y-2 group-hover:translate-y-0 before:absolute before:inset-0 before:rounded-[20px] before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center -space-x-3 hover:space-x-1 transition-all duration-300">
                    {[
                      { src: "/assets/pictures/experience_00.jpg", alt: "Experience" },
                      { src: "/assets/pictures/involvement_03.jpg", alt: "Involvement" },
                      { src: "/assets/badges/badge6.png", alt: "Badge", contain: true },
                      { src: "/assets/badges/badge8.png", alt: "Badge", contain: true },
                    ].map((item, i) => (
                      <div key={i} className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#121212] bg-[#1a1a1a] hover:z-20 hover:scale-[1.2] transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]`} style={{ zIndex: 10 - i }}>
                        <Image src={item.src} alt={item.alt} fill className={item.contain ? "object-contain p-2" : "object-cover"} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-1 mb-2">
                  <p className="text-white/90 text-sm font-bold tracking-tight">My Digital Resume</p>
                  <p className="text-white/50 text-xs leading-relaxed">A timeline of my experiences, involvements, awards, and certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side drawer for mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <div
            aria-label="Close Menu"
            aria-hidden
            onClick={handleNavClick}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Side panel */}
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-sm pt-24 pb-8 bg-[#0a0a0a] border-r border-white/10 shadow-2xl overflow-y-auto">

            {/* Menu List */}
            <ul className="flex flex-col gap-6 px-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    aria-label={item.name}
                    onClick={handleNavClick}
                    href={item.href}
                    className="mobile-nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}