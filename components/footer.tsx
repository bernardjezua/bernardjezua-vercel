"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 text-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <div className="relative h-12 w-48 md:h-24 md:w-48">
            {!mounted ? (
              <Image src="/placeholder.svg?height=40&width=160&text=LOGO" alt="Logo" fill className="object-contain" />
            ) : (
              <Image
                src={
                    resolvedTheme === "dark"
                    ? "/assets/light.png"
                    : "/assets/dark.png"
                }
                alt="Logo"
                fill
                className="object-contain"
              />
            )}

          </div>
        </div>

        {/* Tagline Section */}
        <p className="text-gray-700 dark:text-gray-300">
          Crafting stellar digital experiences.
        </p>

        {/* Footer Credit Section */}
        <p className="text-sm text-gray-500">
          © {currentYear} Bernard Jezua Tandang. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
