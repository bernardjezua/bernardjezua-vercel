"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none">
        <ShaderGradientCanvas style={{ pointerEvents: 'none' }} pointerEvents="none" lazyLoad={false}>
          <ShaderGradient
            animate="on"
            enableTransition={false}
            brightness={1.1}
            color1="#3B82F6"
            color2="#8B5CF6"
            color3="#000000"
            cAzimuthAngle={180}
            cDistance={3.9}
            cPolarAngle={115}
            cameraZoom={1}
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            rotationZ={235}
            shader="defaults"
            type="waterPlane"
            uDensity={1.1}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={2.4}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-20 mt-20 md:mt-0">
        <motion.div
          className="pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6 block font-medium">
            UI/UX Designer & Frontend Developer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[7vw] font-bold leading-[0.85] tracking-tighter text-white">
            CRAFTING <br />
            <span className="text-white/40">STELLAR EXPERIENCES.</span>
          </h1>

          <motion.div
            className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Link href="#projects" className="group flex items-center bg-black text-white rounded-full pl-5 pr-1 py-1 hover:bg-neutral-900 transition-colors border border-white/10 shadow-lg">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest mr-3 md:mr-4">View Projects</span>
              <div className="bg-bern-blue p-2 md:p-2 rounded-full text-white group-hover:scale-110 transition-transform relative overflow-hidden flex items-center justify-center">
                <ArrowRight size={14} className="md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-[150%]" strokeWidth={3} />
                <ArrowRight size={14} className="md:w-4 md:h-4 absolute -translate-x-[150%] transition-transform duration-300 group-hover:translate-x-0" strokeWidth={3} />
              </div>
            </Link>
            <Link href="#contact" className="group flex items-center bg-white text-black rounded-full px-5 py-2.5 md:px-6 md:py-3.5 hover:bg-neutral-200 transition-colors shadow-lg">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 right-0 w-full max-w-[90rem] mx-auto px-6 md:px-20 z-10 hidden md:block" // Wrapper keeps it in grid
      >
        <div className="flex justify-end">
          <p className="text-lg text-white/60 leading-relaxed italic max-w-sm text-right">
            "I enjoy talking to people, empathizing with them, and coming up with design solutions."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
