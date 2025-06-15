"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState } from "react"

export function HeroSection() {
  // Store mouse position for 3D rotation
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme()

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    // Calculate rotation based on mouse pos within the box
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({ x: y * 10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <motion.div
        className="text-center z-10 px-4"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}

      >
        {/* 3D Image with hover effects and glow */}
        <motion.div
          className="inline-block mb-4 perspective-1000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          
          {/* 3D frame with shadow and glow (dark only) */}
          <div
            className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${
              resolvedTheme === "dark"
                ? "border-purple-400 shadow-[0_20px_50px_rgb(128,0,128,0.7)]"
                : "border-purple-400 shadow-none"
            } transform-style-preserve-3d`}
          >
            {/* Image */}
            <Image src="/assets/Profile.png" alt="Profile Picture" fill className="object-cover z-10" />

            {/* Astronaut-like effects (dark only) */}
            {resolvedTheme === "dark" && (
              <>
                <div className="absolute inset-0 rounded-full bg-purple-500/20 filter blur-md transform translate-z-[-20px]" />

                {/* Optional: small spark-like elements */}
                <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-blue-500 transform translate-z-[-10px] animate-pulse" />
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-purple-500 transform translate-z-[-10px] animate-pulse delay-500" />
              </>
            )}

          </div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.4}}

        >
          Bernard Jezua Tandang
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.6}}

        >
          Frontend Developer & UI/UX Designer
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.8}}

        >
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-sm md:text-md">
            <a href="#projects">View Projects</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-950 text-sm md:text-md">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex items-center justify-center"
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse"}}
      >
        <Link href="#about">
          <ArrowDown className="text-gray-500 dark:text-gray-400" size={24} />
        </Link>
      </motion.div>
    </section>
  )
}

