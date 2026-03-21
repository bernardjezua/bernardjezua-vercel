"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowLeft, Briefcase, GraduationCap, Award, Users, Code2, Mail, Linkedin, Github, ArrowUp, Download } from "lucide-react"
import Link from "next/link"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"

export default function DigitalResumePage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [showTopBtn, setShowTopBtn] = useState(false)

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
            pixelDensity={1}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-20 z-50 flex items-center justify-between pointer-events-none">
        <Link 
          href="/" 
          className="group pointer-events-auto flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full px-5 py-2.5 hover:bg-white/20 transition-all shadow-lg"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold uppercase tracking-widest hidden sm:inline">Back</span>
        </Link>
      </nav>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-24">
        {/* Redesigned Header Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8"
        >
          {/* 1:1 Profile Picture */}
          <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 rounded-full md:rounded-[1.5rem] overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <img 
              src="/assets/profilepic.jpg" 
              alt="Bernard Jezua" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left h-full mt-2 md:mt-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-3 block font-medium">
              Digital Resume
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 shadow-sm text-shadow-sm">
              Bernard Jezua Tandang
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl font-light text-shadow-sm">
              Aspiring UI/UX Designer & Frontend Developer with a passion of creating intuitive and user-friendly experiences. Here to always lend a hand!
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="/assets/Bernard_FrontendDev_Resume.pdf" 
                download="Bernard_FrontendDev_Resume.pdf"
                className="group flex flex-wrap items-center justify-center gap-2.5 bg-white text-black hover:bg-bern-blue hover:text-white font-bold uppercase tracking-widest text-xs px-6 md:px-8 py-3.5 rounded-full shadow-xl transition-all duration-300 w-auto"
              >
                <span>Download Resume</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Content (Single Column) */}
        <div className="flex flex-col space-y-12 mt-12">
          
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md shadow-xl max-w-5xl w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-emerald-400 w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <p className="text-white/90 font-bold mb-1 text-lg">Bachelor of Science in Computer Science</p>
            <h3 className="text-lg font-semibold mb-1">University of the Philippines Los Baños</h3>
            <p className="text-emerald-400/80 font-medium text-sm mb-4 tracking-wide uppercase">Aug. 2021 – July 2026</p>
            <div className="relative mt-6 ml-1.5">
              {/* Connecting line for Education */}
              <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-emerald-500/20" />
              
              <ul className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed font-light relative z-10">
                <li className="relative pl-6">
                  <span className="absolute -left-[1px] top-1.5 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <div><strong className="text-white font-medium block mb-0.5">Coursework:</strong> Human-Computer Interaction, UI/UX Design, Web and Mobile Development, Databases</div>
                </li>
                <li className="relative pl-6">
                  <span className="absolute -left-[1px] top-1.5 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <div><strong className="text-white font-medium block mb-0.5">Scholarship:</strong> DOST-SEI Undergraduate Scholar</div>
                </li>
                <li className="relative pl-6">
                  <span className="absolute -left-[1px] top-1.5 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <div><strong className="text-white font-medium block mb-0.5">Organization:</strong> Alliance of Computer Science Students - UPLB</div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Timeline Wrapper for Experience, Involvement, Awards */}
          <div className="relative max-w-5xl w-full lg:col-span-12 pt-4" ref={timelineRef}>
            
            {/* The Glowing Animated Line mapped to scroll */}
            <motion.div 
              className="absolute left-[27px] top-6 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 z-0 origin-top h-[calc(100%-80px)]"
              style={{
                scaleY: smoothProgress,
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)"
              }}
            />

            <div className="space-y-12 pb-2">
              
              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 block"
              >
                <div className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="w-10 h-10 flex shrink-0 items-center justify-center bg-black rounded-full border border-blue-500 text-blue-400 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
                </div>
                
                <div className="relative space-y-10 group">
                  <div className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="absolute left-[22px] top-8 w-3 h-3 bg-blue-500 rounded-full border-[2px] border-black z-10 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 hover:scale-150" />
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl group-hover:border-blue-500/30">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight">Software Engineer Intern</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold tracking-widest uppercase">
                          June 2025 - Aug 2025
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-white/80 border border-white/10 rounded-full text-xs font-semibold tracking-wide">
                          UPOU ICT Development Office
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-1">◦</span>
                          Developed and integrated frontend components for a record system using React, Ant Design, and Sass.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-1">◦</span>
                          Collaborated with backend developers to implement secure authentication and API communication.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Involvement */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 block"
              >
                <div className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="w-10 h-10 flex shrink-0 items-center justify-center bg-black rounded-full border border-purple-500 text-purple-400 relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Involvement</h2>
                </div>
                
                <div className="relative space-y-12 group">
                  <div className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="absolute left-[22px] top-8 w-3 h-3 bg-purple-500 rounded-full border-[2px] border-black z-10 shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-150" />
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl group-hover:border-purple-500/30">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight">Membership Division Head</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold tracking-widest uppercase">
                          Sept. 2025 – Present
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-white/80 border border-white/10 rounded-full text-xs font-semibold tracking-wide">
                          Alliance of Computer Science Students - UPLB
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">◦</span>
                          Spearheaded welfare checks for 100+ members to monitor organizational well-being.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500 mt-1">◦</span>
                          Executed internal activities and team-building programs focused on strengthening member relations.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="absolute left-[22px] top-8 w-3 h-3 bg-purple-500/80 rounded-full border-[2px] border-black z-10 shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-150 hover:bg-purple-500" />
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl group-hover:border-purple-500/30">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 tracking-tight">External Affairs Committee Member</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold tracking-widest uppercase">
                          Sept. 2023 – Apr. 2024
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-white/80 border border-white/10 rounded-full text-xs font-semibold tracking-wide">
                          UPLB College of Arts and Sciences Student Council
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500/80 mt-1">◦</span>
                          Facilitated communication for potential partnerships with university organizations and stakeholders.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 text-purple-500/80 mt-1">◦</span>
                          Managed professional email correspondence and ensured administrative tasks aligned with council goals.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Awards */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 block"
              >
                <div className="flex items-center gap-6 mb-8 ml-[8px]">
                  <div className="w-10 h-10 flex shrink-0 items-center justify-center bg-black rounded-full border border-amber-500 text-amber-500 relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Awards</h2>
                </div>
                
                <div className="relative space-y-10 group">
                  <div className="relative pl-[56px] md:pl-[64px] py-2">
                    <div className="absolute left-[22px] top-8 w-3 h-3 bg-amber-500 rounded-full border-[2px] border-black z-10 shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300 hover:scale-150" />
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl group-hover:border-amber-500/30">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 leading-snug tracking-tight">1st Runner Up, 42nd CS Week WarFrames Web Design Competition</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold tracking-widest uppercase">
                          Feb. 2026
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-white/80 border border-white/10 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5">
                          <Award className="w-3 h-3 text-amber-500" />
                          Web Design 
                        </span>
                      </div>
                      <ul className="space-y-3 text-white/70 leading-relaxed font-light text-sm md:text-base">
                        <li className="flex items-start">
                          <span className="mr-3 text-amber-500 mt-1">◦</span>
                          Led a 3-person team and developed Alerto.ai, a flood intelligence web app prototype. Features include a 3D flood visualization map, an AI-powered chatbot interface, and text notifications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>

          {/* Toolbox Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-md shadow-xl max-w-5xl w-full"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <Code2 className="text-rose-400 w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-tight text-center md:text-left">Toolbox</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {toolboxIcons.map((icon, idx) => (
                <div 
                  key={idx} 
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center p-2.5 transition-all duration-300 hover:bg-white/20 hover:border-white/30 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <img 
                    src={icon} 
                    alt="Tech Stack Icon" 
                    className="w-full h-full object-contain transition-transform duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* Mini Contact Footer */}
          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col items-center text-center max-w-5xl mx-auto w-full pb-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 shadow-sm text-shadow-sm text-white/90">
              Let's create something <span className="text-white">together.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
              <a href="mailto:bernardjezuaml@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:border-white/20">
                <Mail className="w-4 h-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">Email</span>
              </a>
              <a href="https://linkedin.com/in/bernardjezua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:border-white/20">
                <Linkedin className="w-4 h-4 text-white/80" />
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">LinkedIn</span>
              </a>
              <a href="https://behance.net/bernardjezua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:border-white/20">
                <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.362 3.962.337 1.745-.334 3.125-2.071 3.125h-5.228c.19 1.488 1.411 2.38 2.822 2.38 1.42 0 2.228-.67 2.654-1.872h1.66zm-5.88-3.064c-.161-1.127-1.137-1.701-2.227-1.701-1.076 0-1.921.611-2.14 1.701h4.367zm-13.342-9.936v15h4.636c3.21 0 5.488-1.528 5.488-4.321 0-1.785-1.166-2.91-2.484-3.328 1.054-.378 2.21-1.4 2.21-3.21 0-2.613-2.028-4.141-5.118-4.141h-4.734zm3.036 6.071h1.53c1.32 0 2.228.601 2.228 1.69 0 1.25-1 1.72-2.19 1.72h-1.568v-3.41zm0 5.17h1.69c1.64 0 2.508.681 2.508 1.83 0 1.28-1 1.92-2.61 1.92h-1.588v-3.75z"/></svg>
                <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">Behance</span>
              </a>
              <a href="https://github.com/bernardjezua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:border-white/20">
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

    </main>
  )
}
