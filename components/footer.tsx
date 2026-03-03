"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowUpRight, Github, Linkedin, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <footer id="contact" className="pt-24 pb-8 border-t border-white/10 px-8 md:px-20 bg-bern-dark flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Links and Logo Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 border-t border-white/10 pt-12">
          
          <div className="flex-1 flex justify-start order-2 md:order-1">
            <div className="relative h-8 w-24">
              {mounted && (
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>

          <div className="flex flex-1 justify-center align-center gap-6 order-1 md:order-2">
            <a
              href="https://github.com/bernardjezua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/50 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/bernardjezua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/50 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/bernedoutfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="mailto:bernardjezuaml@gmail.com"
              aria-label="Email"
              className="text-white/50 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex-1 flex justify-end text-right order-3">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em]">
              © {currentYear} BERNARD JEZUA.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
