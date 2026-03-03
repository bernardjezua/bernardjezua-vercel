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

      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setIsLightSection(true);
        } else {
          setIsLightSection(false);
        }
      }
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
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Designs", href: "#designs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-50 transition-transform duration-500 ease-(--transition-ease) ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "py-4" : "py-6"}`}
      >
        {/* Main Grid Layout */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center px-6 md:px-12 w-full gap-4">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            {/* Mobile Menu Button currently visible to avoid messing layout, but mostly for left padding equivalence */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`md:hidden ${isLightSection ? "text-black" : "text-white"} mr-4 transition-colors duration-300`}>
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
          <div className="hidden md:flex justify-center w-full">
            <nav className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-500 ${
              scrolled 
                ? (isLightSection ? "bg-black/5 backdrop-blur-xl shadow-lg border-black/10" : "bg-white/5 backdrop-blur-xl shadow-lg border-white/10")
                : "bg-transparent border-transparent"
            }`}>
              {navItems.map((item) => (
                <Link
                    key={item.name}
                    aria-label={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 ${
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

          {/* Right: Empty div for grid balance */}
          <div className="hidden md:block w-[52px]" />
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
                    className="block text-2xl font-bold tracking-tighter text-white/70 hover:text-bern-blue transition-colors">
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