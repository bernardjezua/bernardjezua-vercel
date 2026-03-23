"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, FolderKanban, User, Brain } from "lucide-react"

export function AboutSection() {

  return (
    <section id="about" className="py-32 px-8 md:px-20 border-t border-black/10 bg-[#f0f0f0] text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-black/50 mb-4 block font-medium">
            /01 About Me
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
            THE HUMAN <br /> BEHIND THE PIXELS.
          </h3>
          <p className="max-w-xs text-black/60 text-sm ">
            I enjoy talking to people, empathizing with them, and coming up with design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] aspect-[2/5] md:aspect-[4/5] lg:aspect-[3/4] group cursor-pointer shadow-sm"
          >
            <img 
              src="/assets/pictures/profilepic_00.jpg" 
              alt="Bernard Jezua" 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105" 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/30 transition-all duration-500 flex flex-col justify-end p-5 md:p-6 lg:p-8 items-start text-left">
              <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col">
                <div className="mb-3 md:mb-4 inline-flex p-2 md:p-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 w-max shadow-lg">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-white shadow-sm leading-tight tracking-tight">Hello, I'm Bernard!</h4>
                <p className="text-white/90 text-[11px] md:text-xs lg:text-sm font-medium leading-relaxed mb-2">
                  I like to develop intuitive digital solutions. I bring a unique perspective to every project with my design and development skills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Continuous Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] aspect-[2/5] md:aspect-[4/5] lg:aspect-[3/4] group cursor-pointer shadow-sm"
          >
            <img 
              src="/assets/pictures/profilepic_01.jpg" 
              alt="Iskolar ng Bayan" 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105" 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/30 transition-all duration-500 flex flex-col justify-end p-5 md:p-6 lg:p-8 items-start text-left">
              <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col">
                <div className="mb-3 md:mb-4 inline-flex p-2 md:p-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 w-max shadow-lg">
                  <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-white shadow-sm leading-tight tracking-tight">Iskolar ng Bayan</h4>
                <p className="text-white/90 text-xs lg:text-sm font-medium leading-relaxed">B.S. Computer Science</p>
                <p className="text-white/90 text-[10px] lg:text-xs font-bold leading-relaxed text-white bg-white/20 backdrop-blur-sm w-max px-2 py-0.5 rounded-sm mt-1 mb-1 tracking-wider border border-white/10">2021 - 2026</p>
                <p className="text-white/70 text-[10px] lg:text-xs font-medium leading-relaxed">University of the Philippines Los Baños</p>
              </div>
            </div>
          </motion.div>

          {/* Building Things Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] aspect-[2/5] md:aspect-[4/5] lg:aspect-[3/4] group cursor-pointer shadow-sm"
          >
            <img 
              src="/assets/pictures/profilepic_03.jpg" 
              alt="Building Things" 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105" 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/40 transition-all duration-500 flex flex-col justify-end p-4 md:p-6 lg:p-8">
              <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col">
                <div className="mb-3 md:mb-4 inline-flex p-2 md:p-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 w-max shadow-lg">
                  <FolderKanban className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-white shadow-sm leading-tight tracking-tight">Building Things</h4>
                <p className="text-white/90 text-[11px] md:text-xs lg:text-sm font-medium leading-relaxed">10+ web and mobile projects completed during my years in the university.</p>
              </div>
            </div>
          </motion.div>

          {/* Design & Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] aspect-[2/5] md:aspect-[4/5] lg:aspect-[3/4] group cursor-pointer shadow-sm"
          >
            <img 
              src="/assets/pictures/profilepic_02.jpg" 
              alt="Empathy in Design" 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105" 
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/30 transition-all duration-500 flex flex-col justify-end p-5 md:p-6 lg:p-8 items-start text-left">
              <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col">
                <div className="mb-3 md:mb-4 inline-flex p-2 md:p-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 w-max shadow-lg">
                  <Brain className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-white shadow-sm leading-tight tracking-tight">Empathy in Design</h4>
                <p className="text-white/90 text-[11px] md:text-xs lg:text-sm font-medium leading-relaxed">I like to think of designs that would help other people navigate easily and come up with solutions for the community.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
