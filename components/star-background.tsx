"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function StarBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  // Store data in refs
  const animationRef = useRef(null);
  const lastScroll = useRef(0);
  const scrollSpeed = useRef(0);
  const lastShootingStarTime = useRef(0);
  const stars = useRef([]);
  const constellations = useRef([]);
  const shootingStars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Handle scroll event for parallax
    const handleScroll = () => {
      scrollSpeed.current = window.scrollY - lastScroll.current;
      lastScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // Initialize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      initStars();
      initConstellations();
    };
    window.addEventListener("resize", resizeCanvas);

    // Initialize
    resizeCanvas();

    function initStars() {
      const isDark = resolvedTheme === "dark";

      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      stars.current = [];

      for (let i = 0; i < starCount; i++) {
        stars.current.push({ 
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isDark ? 2 : 2.2) + (isDark ? 0.5 : 0.7),
          opacity: Math.random() * (isDark ? 0.8 : 0.6) + (isDark ? 0.2 : 0.3),
          speed: Math.random() * 0.05 + 0.01,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function initConstellations() {
      if (!canvas) return;

      // Keep this static — small number and tighter formations
      const isDark = resolvedTheme === "dark";

      const count = Math.max(5, Math.floor((canvas.width * canvas.height) / 500000));

      constellations.current = [];

      for (let i = 0; i < count; i++) {
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;

        const starCount = Math.floor(Math.random() * 3) + 2;
        const constellationStars = [];

        for (let j = 0; j < starCount; j++) {
          // tighter formation
          const angle = (j / starCount) * Math.PI * 2;
          const distance = Math.random() * 50 + 20;

          constellationStars.push({ 
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
          });
        }

        constellations.current.push({ stars: constellationStars });
      }
    }

    function createShootingStar(now) {
      if (!canvas) return;

      const isDark = resolvedTheme === "dark";

      // Random starting position (usually from top or side)
      const side = Math.random();
      let startX, startY, angle;

      if (side < 0.5) {
        // From top
        startX = Math.random() * canvas.width;
        startY = -50;
        angle = Math.PI / 4 + (Math.random() * Math.PI) / 2;
      } else {
        // From side
        startX = Math.random() < 0.5 ? -50 : canvas.width + 50;
        startY = Math.random() * canvas.height * 0.3;
        angle = startX < 0 ? Math.PI / 6 : (5 * Math.PI) / 6;
      }

      const colors = isDark
        ? ["rgba(255, 255, 255, 1)", "rgba(200, 200, 255, 1)", "rgba(255, 200, 200, 1)"]
        : ["rgba(100, 100, 200, 1)", "rgba(150, 100, 200, 1)", "rgba(200, 100, 150, 1)"];

      shootingStars.current.push({ 
        x: startX,
        y: startY,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        angle,
       opacity: 1,
        life: 0,
        maxLife: Math.random() * 120 + 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function updateShootingStars(now) {
      shootingStars.current = shootingStars.current.filter((star) => {
        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Update life
        star.life++;

        // Fade after 70% of its maxLife
        if (star.life > star.maxLife * 0.7) {
          const fadeProgress = (star.life - star.maxLife * 0.7) / (star.maxLife * 0.3);
          star.opacity = Math.max(0, 1 - fadeProgress);
        }

        return (
          star.x < canvas.width + 100 &&
          star.x > -100 &&
          star.y < canvas.height + 100 &&
          star.opacity > 0
        );
      });
    }

    function draw(now) {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = resolvedTheme === "dark";

      // Create shooting star
      if (now - lastShootingStarTime.current > 10000) { // 10-second interval
        createShootingStar(now);
        lastShootingStarTime.current = now;
      }

      // Update
      updateShootingStars(now);

      // Drawing
      // Shooting Stars first
      shootingStars.current.forEach((star) => {
        if (!ctx) return;

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        // Create gradient for the trail
        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, star.color.replace(/1\)$/, `${star.opacity * 0.5})`)); // Fade toward trail
        gradient.addColorStop(0.8, star.color.replace(/1\)$/, `${star.opacity})`)); // Main color
        gradient.addColorStop(1, star.color.replace(/1\)$/, `${star.opacity})`));

        // Draw trail
        ctx.save();
        ctx.globalCompositeOperation = "screen";

        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.globalAlpha = star.opacity;

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.stroke();

        // Head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(/1\)$/, `${star.opacity})`) ;
        ctx.fill();

        // Glow
        const glowGradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          8
        );
        glowGradient.addColorStop(0, star.color.replace(/1\)$/, `${star.opacity})`));
        glowGradient.addColorStop(0.5, star.color.replace(/1\)$/, `${star.opacity * 0.3})`));
        glowGradient.addColorStop(1, "transparent");

        ctx.fillStyle = glowGradient;
        ctx.fill();

        ctx.restore();
      });

      // Twinkle and move
      stars.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;

        const twinkleOpacity = star.opacity * (0.3 + 0.7 * (Math.sin(star.twinklePhase) * 0.5 + 0.5));

        ctx.beginPath();
        ctx.arc(
          star.x,
          (star.y + lastScroll.current * 0.1) % canvas.height,
          star.size,
          0,
          Math.PI * 2
        );

        if (isDark) {
          const gradient = ctx.createRadialGradient(
            star.x,
            (star.y + lastScroll.current * 0.1) % canvas.height,
            0,
            star.x,
            (star.y + lastScroll.current * 0.1) % canvas.height,
            star.size * 3
          );
          gradient.addColorStop(0, "rgba(255, 255, 255," + twinkleOpacity + ")");
          gradient.addColorStop(0.5, "rgba(255, 255, 255," + (twinkleOpacity * 0.3) + ")");
          gradient.addColorStop(1, "transparent");

          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(20, 20, 100, ${twinkleOpacity})`;
        }

        ctx.fill();

        // Move down
        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Constellations (with tighter formations)
      constellations.current.forEach((constellation) => {
        ctx.beginPath();

        ctx.moveTo(
          constellation.stars[0].x,
          (constellation.stars[0].y + lastScroll.current * 0.1) % canvas.height
        );

        for (let i = 1; i < constellation.stars.length; i++) {
          ctx.lineTo(
            constellation.stars[i].x,
            (constellation.stars[i].y + lastScroll.current * 0.1) % canvas.height
          );
        }

        ctx.closePath();

        if (isDark) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        } else {
          ctx.strokeStyle = "rgba(20, 20, 100, 0.08)";
        }

        ctx.lineWidth = isDark ? 0.5 : 0.7;
        ctx.stroke();

        // Stars within constellations
        constellation.stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(
            star.x,
            (star.y + lastScroll.current * 0.1) % canvas.height,
            isDark ? 1.5 : 2,
            0,
            Math.PI * 2
          );

          if (isDark) {
            const gradient = ctx.createRadialGradient(
              star.x,
              (star.y + lastScroll.current * 0.1) % canvas.height,
              0,
              star.x,
              (star.y + lastScroll.current * 0.1) % canvas.height,
              4
            );
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
            gradient.addColorStop(1, "transparent");

            ctx.fillStyle = gradient;
          } else {
            ctx.fillStyle = "rgba(20, 20, 100, 0.7)";
          }

          ctx.fill();
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}

