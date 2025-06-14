"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

interface TrailPoint {
  x: number
  y: number
  timestamp: number
}

export function StarCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const { resolvedTheme } = useTheme()
  const animationFrameRef = useRef<number>()
  const inactiveTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      setIsVisible(true)

      // Reset inactive timeout
      if (inactiveTimeout.current) {
        clearTimeout(inactiveTimeout.current)
      }
      inactiveTimeout.current = setTimeout(() => {
        setIsVisible(false)
      }, 3000)

      // Add to trail more frequently for smoother trail
      const now = Date.now()
      setTrail((prev) => {
        const newTrail = [...prev, { x: newPosition.x, y: newPosition.y, timestamp: now }]
        return newTrail.filter((point) => now - point.timestamp < 600)
      })

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]')
      setIsHovering(!!isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
      setTrail([])
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Animate trail cleanup
    const animateTrail = () => {
      const now = Date.now()
      setTrail((prev) => prev.filter((point) => now - point.timestamp < 600))
      animationFrameRef.current = requestAnimationFrame(animateTrail)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    animationFrameRef.current = requestAnimationFrame(animateTrail)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (inactiveTimeout.current) {
        clearTimeout(inactiveTimeout.current)
      }
    }
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <>
      {/* Comet Trail - More Visible */}
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp
        const opacity = Math.max(0, 1 - age / 600) // Fade out over 600ms (longer)
        const scale = 0.6 + opacity * 0.4 // Scale from 0.6 to 1 (larger minimum)
        const blur = (1 - opacity) * 2 // Less blur for more visibility

        return (
          <div
            key={`${point.timestamp}-${index}`}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: point.x - 6,
              top: point.y - 6,
              opacity:opacity * 0.9,
              transform: `scale(${scale})`,
              filter: `blur(${blur}px)`,
              transition: "opacity 0.5s ease-out",
            }}>
            {/* Larger trail stars with glow */}
            <div className="relative w-3 h-3">
              {/* Glow effect for trail stars */}
              <div
                className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-700"}`}
                style={{
                    clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    filter: isDark ? `blur(2px) opacity(${opacity * 0.5})` : `blur(2px) opacity(${opacity * 0.4})`,
                    transform: "scale(1.5)", 
                }}
              />
              {/* Main trail star */}
              <div
                className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-700"}`}
                style={{ 
                    clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    filter: isDark
                    ? `drop-shadow(0 0 4px rgba(255, 255, 255, ${opacity * 0.8}))`
                    : `drop-shadow(0 0 4px rgba(0, 0, 0, ${opacity * 0.6}))`,
                }}
              />
            </div>
          </div>
        )
      })}

      {/* Main Star Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-opacity duration-500 ease-out"
        style={{ 
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: isHovering ? "scale(1.3)" : "scale(1)", 
         opacity: isVisible ? 1 : 0 
        }}>
        <div className="relative w-5 h-5">
          {/* Outer glow when hovering */}
          {isHovering && (
            <div
              className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-800"}`}
              style={{ 
                clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                filter: isDark ? "blur(4px) opacity(0.4)" : "blur(4px) opacity(0.3)", 
                transform: "scale(1.3)", 
                animation: "pulse-glow 2s ease-in-out infinite",
              }} 
            />
          )}

          {/* Medium glow when hovering */}
          {isHovering && (
            <div
              className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-700"}`}
              style={{ 
                clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                filter: isDark ? "blur(2px) opacity(0.3)" : "blur(2px) opacity(0.2)", 
                transform: "scale(1.2)", 
              }} 
            />
          )}

          {/* Main star shape */}
          <div
            className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-800"}`}
            style={{ 
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              filter: isHovering
                ? isDark
                    ? "drop-shadow(0 0 12px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 24px rgba(255, 255, 255, 0.6))"
                    : "drop-shadow(0 0 12px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 24px rgba(0, 0, 0, 0.4))"
                : isDark
                    ? "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))"
                    : "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))",
            }} 
          />

          {/* Star twinkle effect when hovering */}
          {isHovering && (
            <div
              className={`absolute inset-0 ${isDark ? "bg-white" : "bg-gray-700"}`}
              style={{ 
                clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                filter: isDark ? "blur(1px)" : "blur(1px)", 
                animation: "star-twinkle 1s ease-in-out infinite", 
                transform: "scale(1.1)", 
              }} 
            />
          )}

        </div>

        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1.2);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.4);
            }
          }

          @keyframes star-twinkle {
            0%, 100% {
              opacity: 0;
              transform: scale(1.1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    </>
  )
}
