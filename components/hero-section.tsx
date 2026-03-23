"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Link from "next/link";
import Image from "next/image";

const InteractiveText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={`inline-flex flex-wrap justify-center md:justify-start ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="transition-all duration-300 hover:text-bern-blue hover:-translate-y-1 hover:scale-105 cursor-default inline-block"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Smooth springs for the comet cursor
  const springX = useSpring(0, { stiffness: 800, damping: 40 });
  const springY = useSpring(0, { stiffness: 800, damping: 40 });

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (ev: MouseEvent) => {
      // Optimized: updating framer-motion values directly without React state re-renders
      springX.set(ev.clientX);
      springY.set(ev.clientY);

      const target = ev.target as Element;
      const isOverInteractiveSection = target.closest("#home") || target.closest("#contact") || target.closest(".contact-btn");

      // Raw DOM mutation for opacity to completely avoid React state lifecycle lag
      if (cursorRef.current) {
        cursorRef.current.style.opacity = isOverInteractiveSection ? '1' : '0';
      }

      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (isOverInteractiveSection) {
        idleTimeoutRef.current = setTimeout(() => {
          if (cursorRef.current) cursorRef.current.style.opacity = '0';
        }, 3000);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, [springX, springY]);

  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen w-full overflow-hidden bg-black">
      
      {/* Comet Cursor Effect */}
      {isMounted && (
        <motion.div
           ref={cursorRef}
           className="pointer-events-none fixed top-0 left-0 w-[240px] h-[240px] rounded-full z-20 transition-opacity duration-1000 ease-in-out"
           style={{
             x: springX,
             y: springY,
             translateX: "-50%",
             translateY: "-50%",
             opacity: 0,
             background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(59, 130, 246, 0.1) 20%, rgba(0, 0, 0, 0) 60%)",
           }}
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none">
        <ShaderGradientCanvas style={{ pointerEvents: 'none' }} pointerEvents="none" lazyLoad={false} pixelDensity={0.5}>
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
            // @ts-ignore
            pixelDensity={1}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-20 mt-32 md:mt-0 flex flex-col items-center text-center">
        <motion.div
          className="pointer-events-none flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6 block font-medium pointer-events-auto">
            UI/UX Designer & Frontend Developer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[7vw] font-bold leading-[0.8] text-white z-30 relative pointer-events-auto select-none">
            <InteractiveText text="CRAFTING" /> <br />
            <InteractiveText text="STELLAR" className="text-white/40" />{" "}
            <InteractiveText text="EXPERIENCES." className="text-white/40" />
          </h1>

          <motion.div
            className="mt-8 md:mt-14 flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Link href="/resume" className="group hero-btn-primary">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest mr-3 md:mr-4">Digital Resume</span>
              <div className="bg-bern-blue p-2 md:p-2 rounded-full text-white group-hover:scale-110 transition-transform relative overflow-hidden flex items-center justify-center">
                <ArrowRight size={14} className="md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-[150%]" strokeWidth={3} />
                <ArrowRight size={14} className="md:w-4 md:h-4 absolute -translate-x-[150%] transition-transform duration-300 group-hover:translate-x-0" strokeWidth={3} />
              </div>
            </Link>
            <Link href="#contact" className="group hero-btn-secondary">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
