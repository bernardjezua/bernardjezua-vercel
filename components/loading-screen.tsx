"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Force scroll to top while loading
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  useEffect(() => {
    // The total animation duration is roughly 2s + delays
    // We'll set the "loading state" to false after the exit animations finish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Wait long enough for the entrance + pause + exit animations

    return () => clearTimeout(timer);
  }, []);

  // Create a grid of blocks for the pixelated transition
  const gridX = 20;
  const gridY = 10;
  const totalBlocks = gridX * gridY;
  
  // Pre-calculate randomized delays for the pixel dissolve
  const [shuffledDelays, setShuffledDelays] = useState<number[]>([]);
  useEffect(() => {
    const delays = Array.from({ length: totalBlocks }).map(() => 1.8 + Math.random() * 0.6);
    setShuffledDelays(delays);
  }, [totalBlocks]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          // @ts-ignore
          <motion.div
            key="loading-container"
            className="fixed inset-0 z-[9999] flex w-full h-screen pointer-events-none overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.8 }} // Minimal container fade after blocks dissolve
          >
            {/* Grid wrapper */}
            <div 
              className="absolute inset-0 grid w-full h-full"
              style={{ 
                gridTemplateColumns: `repeat(${gridX}, 1fr)`,
                gridTemplateRows: `repeat(${gridY}, 1fr)`
              }}
            >
              {shuffledDelays.length > 0 && Array.from({ length: totalBlocks }).map((_, i) => (
                // @ts-ignore
                <motion.div
                  key={`block-${i}`}
                  className="w-full h-full bg-black origin-center"
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.3, 
                    ease: "easeOut",
                    delay: shuffledDelays[i] - 1.8, // Starts exiting immediately based on staggered delay
                  }}
                />
              ))}
            </div>

            {/* Logo and Name Centered Display */}
            {/* @ts-ignore */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="relative h-20 w-14 md:h-28 md:w-20">
                <Image src="/logo.png" alt="Logo" fill priority className="object-contain" />
              </div>
              <p className="text-white/80 tracking-[0.4em] text-sm md:text-lg uppercase font-medium">
                Bernard Jezua
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Page Content */}
      <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
