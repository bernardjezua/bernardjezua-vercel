"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Home, Briefcase, GraduationCap, Award, Users, Code2, Mail, Linkedin, Github, ArrowUp, Download, BadgeCheck, FolderKanban } from "lucide-react"
import Link from "next/link"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronDown, X } from "lucide-react"
import "./styles.css"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

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

export default function DigitalResumePage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Smooth springs for the comet cursor
  const springX = useSpring(0, { stiffness: 800, damping: 40 })
  const springY = useSpring(0, { stiffness: 800, damping: 40 })

  useEffect(() => {
    setIsMounted(true)
    const updateMousePosition = (ev: MouseEvent) => {
      springX.set(ev.clientX)
      springY.set(ev.clientY)

      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }

      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current)
      idleTimeoutRef.current = setTimeout(() => {
        if (cursorRef.current) cursorRef.current.style.opacity = '0'
      }, 3000)
    }
    window.addEventListener("mousemove", updateMousePosition)
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current)
    }
  }, [springX, springY])

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end 90%"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  })

  const toolboxIcons = [
    "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/nextjs.png",
    "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
    "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
    "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/python-original.svg",
    "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/php-original.svg",
    "https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg",
    "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg",
    "https://profilinator.rishav.dev/skills-assets/figma-icon.svg",
    "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg",
    "https://profilinator.rishav.dev/skills-assets/firebase.png",
    "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white overflow-hidden pb-12">
      {/* Comet Cursor Effect */}
      {isMounted && (
        <motion.div
           ref={cursorRef}
           className="pointer-events-none fixed top-0 left-0 w-[240px] h-[240px] rounded-full z-[100] transition-opacity duration-1000 ease-in-out"
           style={{
             x: springX,
             y: springY,
             translateX: "-50%",
             translateY: "-50%",
             opacity: 0,
             background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(59, 130, 246, 0.08) 20%, rgba(0, 0, 0, 0) 60%)",
           }}
        />
      )}

      {/* Dynamic Background Effect */}
      <div className="fixed top-0 left-0 w-full h-[120vh] z-0 opacity-20 pointer-events-none">
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

      {/* Home Button (Top Left) */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 z-[60] flex items-center justify-start pointer-events-none">
        <Link 
          href="/" 
          className="group pointer-events-auto flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full px-5 py-2.5 hover:bg-white/20 transition-all shadow-lg active:scale-95"
        >
          <Home size={18} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold uppercase tracking-widest hidden sm:inline">Home</span>
        </Link>
      </nav>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-24">
        {/* Redesigned Header Hero Card */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="resume-header-card"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center shrink-0 group/header scale-95 md:scale-100">
            <div className="w-32 h-44 md:w-44 md:h-60 bg-white/5 border border-white/10 rounded-[1.2rem] md:rounded-[1.6rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] flex flex-col backdrop-blur-md">
              <div className="flex-grow relative overflow-hidden">
                <img 
                  src="/assets/pictures/profilepic_00.jpg" 
                  alt="Bernard Jezua" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover/header:rotate-1 group-hover/header:scale-105"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>

              <div className="h-8 md:h-10 bg-black/60 flex flex-col items-center justify-center p-0 border-t border-white/5 relative z-10">
                <img 
                  src="/assets/spotifycode.png" 
                  alt="Spotify Code" 
                  className="w-full h-full object-cover filter brightness-125 saturate-[1.2] drop-shadow-[0_0_8px_rgba(30,215,96,0.4)] transition-all duration-500"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center text-center md:text-left md:mt-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-3 block font-medium">
              Digital Resume
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 shadow-sm text-shadow-sm pointer-events-auto">
              <InteractiveText text="Bernard Jezua Tandang" />
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl font-light text-shadow-sm">
              Aspiring UI/UX Designer & Frontend Developer with a passion of creating intuitive and user-friendly experiences. Here to lend a hand!
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="/assets/Bernard_FrontendDev_Resume.pdf" 
                download="Bernard_FrontendDev_Resume.pdf"
                className="download-btn"
              >
                <span>Download Resume</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        

        {/* Main Content (Single Column) */}
        <div className="flex flex-col space-y-12 mt-4">
          
          {/* Education Section */}
          <motion.section
            id="education"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-card scroll-mt-32"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="icon-circle border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Education</h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-white/90 font-bold mb-1 text-base md:text-lg tracking-tight">Bachelor of Science in Computer Science</h3>
              <p className="text-white/80 font-medium mb-1 text-sm md:text-base">University of the Philippines Los Baños</p>
              <p className="text-emerald-400/80 font-medium text-xs md:text-sm mb-4 tracking-wide uppercase">Aug. 2021 – July 2026</p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mt-6 ml-1.5">
              {/* Connecting line for Education */}
              <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-emerald-500/20" />
              
              <ul className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed font-light relative z-10">
                <li className="relative pl-6">
                  <span className="education-dot" />
                  <div><strong className="text-white font-medium block mb-0.5">Coursework:</strong> Human-Computer Interaction, Software Development, Databases</div>
                </li>
                <li className="relative pl-6">
                  <span className="education-dot" />
                  <div><strong className="text-white font-medium block mb-0.5">Scholarship:</strong> DOST-SEI Undergraduate Scholar</div>
                </li>
                <li className="relative pl-6">
                  <span className="education-dot" />
                  <div><strong className="text-white font-medium block mb-0.5">Organization:</strong> Alliance of Computer Science Students - UPLB</div>
                </li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Timeline Wrapper for Experience, Involvement, Awards */}
          <div className="relative max-w-5xl w-full lg:col-span-12 pt-4" ref={timelineRef}>
            
            {/* The Glowing Animated Line mapped to scroll */}
            <motion.div 
              className="absolute left-[27px] top-6 w-[2px] z-0 origin-top h-[calc(100%-80px)]"
              style={{
                scaleY: smoothProgress,
                backgroundImage: "linear-gradient(to bottom, #3b82f6 0%, #a855f7 33%, #f59e0b 66%, #14b8a6 100%)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
              }}
            />

            <div className="space-y-12 pb-2">
              
              {/* Experience */}
              <motion.section
                id="experience"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 block scroll-mt-32"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="icon-circle border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
                </motion.div>
                
                <div className="relative space-y-10 group">
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <div className="timeline-card hover:border-blue-500/30 relative">
                      <div 
                        className="story-box story-box-blue"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/experience_00.jpg", alt: "Experience" })}
                      >
                        <img src="/assets/pictures/experience_00.jpg" alt="Experience" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">Software Engineer Intern</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-blue-500/10 text-blue-400 border-blue-500/20">
                          June 2025 - Aug 2025
                        </span>
                        <span className="badge-outline">
                          UPOU ICT Development Office
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-1">•</span>
                          Developed and integrated frontend components for a record system using React, Ant Design, and Sass.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-1">•</span>
                          Collaborated with backend developers to implement secure authentication and API communication.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Involvement */}
              <motion.section
                id="involvement"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 block scroll-mt-32"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="icon-circle border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Involvement</h2>
                </motion.div>
                
                <div className="relative space-y-12">
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <div className="timeline-card hover:border-purple-500/30 relative">
                      <div 
                        className="story-box story-box-purple"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/involvement_03.jpg", alt: "Involvement" })}
                      >
                        <img src="/assets/pictures/involvement_03.jpg" alt="Involvement" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">Membership Division Head</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Sept. 2025 – Present
                        </span>
                        <span className="badge-outline">
                          Alliance of Computer Science Students - UPLB
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Spearheaded welfare checks for 100+ members to monitor organizational well-being.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Executed internal activities and team-building programs focused on strengthening member relations.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <div className="timeline-card hover:border-purple-500/30 relative">
                      <div 
                        className="story-box story-box-purple"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/involvement_02.png", alt: "Involvement" })}
                      >
                        <img src="/assets/pictures/involvement_02.png" alt="Involvement" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">Programs Committee Member</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Nov. 2023 - Feb. 2024
                        </span>
                        <span className="badge-outline">
                          UPLB February Fair 2024
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Managed backstage operations and activity logistics, collaborating closely with program proponents to ensure seamless event execution.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <div className="timeline-card hover:border-purple-500/30 relative">
                      <div 
                        className="story-box story-box-purple"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/involvement_01.jpg", alt: "Involvement" })}
                      >
                        <img 
                          src="/assets/pictures/involvement_01.jpg" 
                          alt="Involvement" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">External Affairs Committee Member</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Sept. 2023 – Apr. 2024
                        </span>
                        <span className="badge-outline">
                          UPLB CAS Student Council
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Facilitated communication for potential partnerships with university organizations and stakeholders.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Managed professional email correspondence and ensured administrative tasks aligned with council goals.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <div className="timeline-card hover:border-purple-500/30 relative">
                      <div 
                        className="story-box story-box-purple"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/involvement_00.png", alt: "Involvement" })}
                      >
                        <img 
                          src="/assets/pictures/involvement_00.png" 
                          alt="Involvement" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">CASFC Chairperson</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Aug. 2022 – Oct. 2022
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 mt-4 text-white/90 tracking-tight md:pr-24">ICS Representative</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-purple-500/10 text-purple-400 border-purple-500/20">
                          Sept. 2021 – Aug. 2022
                        </span>
                        <span className="badge-outline">
                          UPLB CAS Freshman Council
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Oversee the entire council in transitioning to the next council and from online to face-to-face activities.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">•</span>
                          Represented the ICS Batch 2021 and handled concerns related to the batch, also helped in creating camaraderie during the pandemic.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section
                id="projects"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 block scroll-mt-32"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="icon-circle border-sky-500 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h2>
                </motion.div>
                
                <div className="relative space-y-12">
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                    <div className="timeline-card hover:border-sky-500/30 relative">
                      <div 
                        className="story-box story-box-sky"
                        onClick={() => setSelectedImage({ src: "/assets/projs/pivot.png", alt: "PIVOT-PROFS" })}
                      >
                        <img 
                          src="/assets/projs/pivot.png" 
                          alt="PIVOT-PROFS" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">PIVOT-PROFS: Profile & Records Organization for Faculty Service</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-sky-500/10 text-sky-400 border-sky-500/20">
                          June 2025 - Aug. 2025
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Conducted a system requirements gathering and developed web components from Figma to React.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Developed profile management and faculty portfolio modules using Axios, Laravel, and Lumen.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                    <div className="timeline-card hover:border-sky-500/30 relative">
                      <div 
                        className="story-box story-box-sky"
                        onClick={() => setSelectedImage({ src: "/assets/designs/cosmarket.png", alt: "CosMarket" })}
                      >
                        <img 
                          src="/assets/designs/cosmarket.png" 
                          alt="CosMarket" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">CosMarket: Buy, Sell, and Rent Cosplays</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-sky-500/10 text-sky-400 border-sky-500/20">
                          Mar. 2025 - May 2025
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Defined IA, user persona, and journey map from analyzing posts in local cosplay markets.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Conducted a moderated usability study of 10 testers, where 80% agreed that the design was intuitive.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                    <div className="timeline-card hover:border-sky-500/30 relative">
                      <div 
                        className="story-box story-box-sky"
                        onClick={() => setSelectedImage({ src: "/assets/projs/astra.png", alt: "ICS-ASTRA" })}
                      >
                        <img 
                          src="/assets/projs/astra.png" 
                          alt="ICS-ASTRA" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">ICS-ASTRA: Alumni Synced Tracker for Relations and Advancement</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-sky-500/10 text-sky-400 border-sky-500/20">
                          Feb. 2025 - May 2025
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Transformed Figma prototypes into web components using Next.js and Tailwind CSS.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Developed and tested frontend modules for the profile management and registration functionalities.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                    <div className="timeline-card hover:border-sky-500/30 relative">
                      <div 
                        className="story-box story-box-sky"
                        onClick={() => setSelectedImage({ src: "https://raw.githubusercontent.com/bernardjezua/traveler/main/docs/profile.png", alt: "Traveler" })}
                      >
                        <img 
                          src="https://raw.githubusercontent.com/bernardjezua/traveler/main/docs/profile.png" 
                          alt="Traveler" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">Traveler: A Genshin-Inspired Slam Book Mobile Application</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-sky-500/10 text-sky-400 border-sky-500/20">
                          June 2024 - July 2024
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Implemented UI screens, routes, and CRUD functionalities using Dart, Flutter, and Google Firebase.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Developed a custom interface with color palettes and styling to resonate with Genshin Impact.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                    <div className="timeline-card hover:border-sky-500/30 relative">
                      <div 
                        className="story-box story-box-sky"
                        onClick={() => setSelectedImage({ src: "/assets/projs/foodup.png", alt: "FoodUP" })}
                      >
                        <img 
                          src="/assets/projs/foodup.png" 
                          alt="FoodUP" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight md:pr-24">FoodUP: Food and Restaurant Review Application</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-sky-500/10 text-sky-400 border-sky-500/20">
                          Feb. 2024 - June 2024
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Integrated Python using MariaDB via SQL queries for filtering and validating CRUD functionalities.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-sky-500 mt-1">•</span>
                          Created page designs from Figma to Tkinter and debugged data inaccuracy issues in the interface.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Awards */}
              <motion.section
                id="awards"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 block scroll-mt-32"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="icon-circle border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Awards</h2>
                </motion.div>
                
                <div className="relative space-y-10 group">
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    <div className="timeline-card group-hover:border-amber-500/30 relative">
                      <div 
                        className="story-box story-box-amber"
                        onClick={() => setSelectedImage({ src: "/assets/pictures/award_00.jpg", alt: "Award" })}
                      >
                        <img src="/assets/pictures/award_00.jpg" alt="Award" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 leading-snug tracking-tight md:pr-24">1st Runner Up, 42nd CS Week WarFrames Web Design Competition</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-amber-500/10 text-amber-400 border-amber-500/20">
                          Feb. 2026
                        </span>
                        <span className="badge-outline flex items-center gap-1.5">
                          <Award className="w-3 h-3 text-amber-500" />
                          Web Design 
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-amber-500 mt-1">•</span>
                          Led a 3-person team and developed Alerto.ai, a flood intelligence web app prototype. Features include a 3D flood visualization map, an AI-powered chatbot interface, and text notifications.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Certifications Section */}
              <motion.section
                id="certifications"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative z-10 block scroll-mt-32"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="icon-circle border-teal-500 text-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Certifications</h2>
                </motion.div>
                
                <div className="relative space-y-10 group">
                  {/* Certification 1 */}
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                    <div className="timeline-card hover:border-teal-500/30 relative">
                    <div className="relative mb-6 md:absolute md:top-4 md:right-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-20 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] border border-teal-500/30">
                        <img 
                          src="/assets/badges/badge8.png" 
                          alt="Meta Front-End Developer" 
                          className="w-full h-full object-contain" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 leading-snug tracking-tight md:pr-24">Meta Front-End Developer</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-teal-500/10 text-teal-400 border-teal-500/20">
                          Feb. 2026
                        </span>
                        <span className="badge-outline flex items-center gap-1.5">
                          <BadgeCheck className="w-3 h-3 text-teal-500" />
                          Meta
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-teal-500 mt-1">•</span>
                          Designed by Meta software engineering experts, this program covers building interactive web pages with React, HTML5, and CSS. Includes hands-on projects focusing on UI/UX principles, version control, and building a full front-end application capstone.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Certification 2 */}
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                    <div className="timeline-card hover:border-teal-500/30 relative">
                    <div className="relative mb-6 md:absolute md:top-4 md:right-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-20 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] border border-teal-500/30">
                        <img 
                          src="/assets/badges/badge7.png" 
                          alt="Microsoft UX Design" 
                          className="w-full h-full object-contain" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 leading-snug tracking-tight md:pr-24">Microsoft UX Design</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-teal-500/10 text-teal-400 border-teal-500/20">
                          Nov. 2025
                        </span>
                        <span className="badge-outline flex items-center gap-1.5">
                          <BadgeCheck className="w-3 h-3 text-teal-500" />
                          Microsoft
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-teal-500 mt-1">•</span>
                          Earned a professional certificate in UX Design, gaining proficiency in user research, wireframing, prototyping, visual design, and accessibility.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Certification 3 */}
                  <motion.div variants={itemVariants} className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="timeline-dot bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                    <div className="timeline-card hover:border-teal-500/30 relative">
                    <div className="relative mb-6 md:absolute md:top-4 md:right-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-20 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] border border-teal-500/30">
                        <img 
                          src="/assets/badges/badge6.png" 
                          alt="Google UX Design" 
                          className="w-full h-full object-contain" 
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 leading-snug tracking-tight md:pr-24">Google UX Design</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="badge bg-teal-500/10 text-teal-400 border-teal-500/20">
                          May 2025
                        </span>
                        <span className="badge-outline flex items-center gap-1.5">
                          <BadgeCheck className="w-3 h-3 text-teal-500" />
                          Google
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-teal-500 mt-1">•</span>
                          Completed a 7-course series regarding UX design program covering user research, wireframing, prototyping, and usability testing.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

            </div>
          </div>

          {/* Toolbox Section */}
          <motion.section
            id="toolbox"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="section-card scroll-mt-32"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-[0_0_15px_rgba(251,113,133,0.4)] border border-rose-400/20 shrink-0">
                <Code2 className="text-rose-400 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-center md:text-left">Tools Used</h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {toolboxIcons.map((icon, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group toolbox-icon"
                >
                  <img 
                    src={icon} 
                    alt="Tech Stack Icon" 
                    className="w-full h-full object-contain transition-transform duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mini Contact Footer */}
          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col items-center text-center max-w-5xl mx-auto w-full pb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 shadow-sm text-shadow-sm text-white/90">
              Let's create something <span className="text-white">together.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
              <a href="mailto:bernardjezuaml@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <Mail className="w-4 h-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">Email</span>
              </a>
              <a href="https://linkedin.com/in/bernardjezua" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <Linkedin className="w-4 h-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">LinkedIn</span>
              </a>
              <a href="https://behance.net/bernardjezua" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.362 3.962.337 1.745-.334 3.125-2.071 3.125h-5.228c.19 1.488 1.411 2.38 2.822 2.38 1.42 0 2.228-.67 2.654-1.872h1.66zm-5.88-3.064c-.161-1.127-1.137-1.701-2.227-1.701-1.076 0-1.921.611-2.14 1.701h4.367zm-13.342-9.936v15h4.636c3.21 0 5.488-1.528 5.488-4.321 0-1.785-1.166-2.91-2.484-3.328 1.054-.378 2.21-1.4 2.21-3.21 0-2.613-2.028-4.141-5.118-4.141h-4.734zm3.036 6.071h1.53c1.32 0 2.228.601 2.228 1.69 0 1.25-1 1.72-2.19 1.72h-1.568v-3.41zm0 5.17h1.69c1.64 0 2.508.681 2.508 1.83 0 1.28-1 1.92-2.61 1.92h-1.588v-3.75z"/></svg>
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">Behance</span>
              </a>
              <a href="https://github.com/bernardjezua" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <Github className="w-4 h-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">GitHub</span>
              </a>
            </div>
          
          </div>
        </div>
      </div>


      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-10 h-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-[60] group ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>

      {/* Image Preview Modal */}
      <Dialog 
        open={!!selectedImage} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="w-auto max-w-[95vw] h-auto max-h-[95dvh] bg-black/95 border-white/10 p-0 overflow-hidden flex flex-col items-center justify-center [&>button]:hidden z-[200] rounded-xl">
           {/* Custom Close/Back Button */}
           <div className="absolute top-4 left-4 z-50">
            <DialogClose asChild>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 hover:text-white gap-2 px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none backdrop-blur-md bg-black/20 rounded-full border border-white/10"
              >
                <X size={18} />
                <span className="text-sm font-bold uppercase tracking-widest hidden sm:inline-block">Close</span>
              </Button>
            </DialogClose>
          </div>

          <div className="relative p-2 sm:p-4 flex flex-col items-center">
            {selectedImage && (
              <div className="relative flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            )}
            
            {selectedImage && (
              <div className="mt-4 text-center px-4 pb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white/90">
                  {selectedImage.alt}
                </h3>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </main>
  )
}
