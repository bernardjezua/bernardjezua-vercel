"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"

export function ContactSection() {
  return (
    <section id="contact" className="relative flex flex-col justify-center px-8 md:px-20 min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 mix-blend-screen" style={{ pointerEvents: 'none' }}>
        <ShaderGradientCanvas style={{ pointerEvents: 'none' }} pointerEvents="none" lazyLoad={false}>
          <ShaderGradient
            animate="on"
            enableTransition={false}
            brightness={1.2}
            color1="#84CC16" // Lime-500
            color2="#A3E635" // Lime-400
            color3="#3F6212" // Deep lime/green background
            cAzimuthAngle={180}
            cDistance={3.9}
            cPolarAngle={115}
            cameraZoom={1}
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            rotationZ={45}
            shader="defaults"
            type="waterPlane"
            uDensity={1.5}
            uFrequency={5.5}
            uSpeed={0.2}
            uStrength={2.4}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center w-full max-w-7xl mx-auto mt-20 md:mt-0">
        {/* Left Column - Title */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="w-full text-center lg:text-left"
        >
          <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-lime-400 mb-6 block font-medium">
            Want to connect?
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[6vw] font-bold leading-[0.85] tracking-tighter text-white">
            LET'S <br className="hidden lg:block" />
            <span className="text-white/40">WORK</span> <br className="hidden lg:block" />
            TOGETHER.
          </h2>
        </motion.div>

        {/* Right Column - Links */}
        <motion.div
           className="flex flex-col gap-3 md:gap-4"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
        >
          <a href="https://linkedin.com/in/bernardjezua" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 hover:bg-lime-500/20 border border-white/10 hover:border-lime-500/50 transition-all duration-300 backdrop-blur-md">
            <div>
              <p className="text-[10px] md:text-xs text-lime-400 font-semibold mb-0.5 md:mb-1 uppercase tracking-widest">LinkedIn</p>
              <p className="text-sm sm:text-base md:text-xl text-white font-medium group-hover:text-lime-300 transition-colors">linkedin.com/in/bernardjezua</p>
            </div>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
          
          <a href="https://behance.net/bernardjezua" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 hover:bg-lime-500/20 border border-white/10 hover:border-lime-500/50 transition-all duration-300 backdrop-blur-md">
            <div>
              <p className="text-[10px] md:text-xs text-lime-400 font-semibold mb-0.5 md:mb-1 uppercase tracking-widest">Behance</p>
              <p className="text-sm sm:text-base md:text-xl text-white font-medium group-hover:text-lime-300 transition-colors">behance.net/bernardjezua</p>
            </div>
             <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a href="https://github.com/bernardjezua" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 hover:bg-lime-500/20 border border-white/10 hover:border-lime-500/50 transition-all duration-300 backdrop-blur-md">
            <div>
              <p className="text-[10px] md:text-xs text-lime-400 font-semibold mb-0.5 md:mb-1 uppercase tracking-widest">GitHub</p>
              <p className="text-sm sm:text-base md:text-xl text-white font-medium group-hover:text-lime-300 transition-colors">github.com/bernardjezua</p>
            </div>
             <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a href="mailto:bernardjezuaml@gmail.com" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 hover:bg-lime-500/20 border border-white/10 hover:border-lime-500/50 transition-all duration-300 backdrop-blur-md">
            <div>
              <p className="text-[10px] md:text-xs text-lime-400 font-semibold mb-0.5 md:mb-1 uppercase tracking-widest">Email</p>
              <p className="text-sm sm:text-base md:text-xl text-white font-medium group-hover:text-lime-300 transition-colors">bernardjezuaml@gmail.com</p>
            </div>
             <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
