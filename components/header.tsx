"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Left-Aligned Wrapper with max width and padding */}
        <div className="flex items-center gap-4 px-4">
          {/* Mobile Menu Button first (on left) */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          {/* Logo — displayed only when side drawer is closed*/}
          {!mobileMenuOpen && (
            <Link aria-label="Logo" href="/">
              <div className="flex items-center">
                <div className="relative h-12 w-24">
                    {resolvedTheme === "dark" ? (
                        <Image src="/assets/light.png" alt="Logo" fill priority />
                    ) : (
                        <Image src="/assets/dark.png" alt="Logo" fill priority />
                    )}

                </div>
              </div>
            </Link>
          )}

          {/* Actions placed directly after links to avoid additional space */}
          <div className="flex items-center gap-2 ml-auto">
            <nav className="hidden md:flex gap-4 ml-4">
              {navItems.map((item) => (
                <Link
                    key={item.name}
                    aria-label={item.name}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                    {item.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
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
            className="absolute inset-0 bg-black/50"
          />

          {/* Side panel */}
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-sm p-4 bg-gray-50 dark:bg-gray-900 shadow-md">
            {/* We leave the X button to close at the top by reuse the Button we used to open it */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close Menu"
              onClick={handleNavClick}
              className="mb-4">
              <X size={20} />
            </Button>

            {/* Spacer before links */}
            <div className="mb-4" />

            {/* Menu List */}
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    aria-label={item.name}
                    onClick={handleNavClick}
                    href={item.href}
                    className="block px-4 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer with ThemeToggle */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

    </>
  );
}

