"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";

interface ProjectLink {
  text: string;
  url: string;
}

interface Project {
  title: string;
  image: string;
  description: string;
  links?: ProjectLink[];
  skills: string[];
  date?: string;
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "UPLB TRAIL: Terminal for Resource Access and Information Links",
      image: "/assets/projs/trail.png",
      description: "UPLB TRAIL is a web application that serves as a central directory of website and page links of the University of the Philippines Los Baños (UPLB). Students, faculty, and staff can easily find and access the resources they need. It uses Fuse.js for the backend with a modified scoring algorithm to provide a better search experience.",
      links: [{ text: "View", url: "https://uplb-trail.vercel.app" }],
      skills: ["Next.js", "Fuse.js", "Tailwind CSS", "Vercel"],
      date: "February - March 2026",
    },
    {
      title: "PIVOT-PROFS: Profile & Records Organization for Faculty Service",
      image: "/assets/projs/pivot.png", // Assuming this will be the path, update if different
      description: "A set of enhancements to the PIVOT website, designed specifically for faculty members of the University of the Philippines Open University (UPOU). It introduces three key features: Profile Management, Faculty Portfolio, and a Digitalized Faculty Service Record (FSR) form. These tools aim to streamline academic and professional record-keeping while improving the organization and accessibility of faculty data.",
      skills: ["React", "PHP", "Laravel", "Lumen"],
      date: "June - August 2025",
    },
    {
      title: "UP GWA Calculator",
      image: "/assets/projs/upgwacalc.png",
      description:
        "UP GWA Calculator is a web application that allows students to calculate their General Weighted Average (GWA) based on their grades and units. It provides a user-friendly interface for inputting grades and units, and calculates the GWA in real-time.",
      links: [{ text: "View", url: "https://up-gwa.vercel.app" }],
      skills: ["Next.js", "Tailwind CSS", "Vercel"],
      date: "June 2025",
    },
    {
      title: "ICS-ASTRA: Alumni Synced Tracking for Relations and Advancement",
      image: "/assets/projs/astra.png",
      description:
        "ICS-ASTRA is a progressive web application that is designed to bridge the gap between the institute and its alumni by providing a platform for streamlined communication and tracking.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript"],
      date: "February - May 2025",
    },
    {
      title: "Traveler: A Genshin-Inspired Mobile Slam Book Application",
      image: "https://raw.githubusercontent.com/bernardjezua/traveler/main/docs/profile.png",
      description:
        "Traveler is a mobile slambook application inspired by Genshin Impact that allows users to add, update, and delete their friends through a slambook form or a QR code.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/traveler" }],
      skills: ["Flutter", "Dart", "Google Firebase"],
      date: "June - July 2024",
    },
    {
      title: "FoodUP: Food and Restaurant Review Application",
      image: "/assets/projs/foodup.png",
      description:
        "FoodUP is an information system that records food reviews and items from establishments. Transformed several pages from Figma to Tkinter and debugged frontend data inaccuracy issues.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/FoodUP" }],
      skills: ["Python", "Tkinter", "SQL", "MariaDB", "Figma"],
      date: "February - June 2024",
    },
    {
      title: "HATID: An E-Commerce Application",
      image: "/assets/projs/hatid.png",
      description:
        "HATID is an e-commerce platform design idea for the Department of Agriculture (DA) to efficiently manage the distribution of agricultural products to the public market.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/hatid" }],
      skills: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
      date: "November 2023 - January 2024",
    },
    {
      title: "LOLCODE Interpreter",
      image: "/assets/projs/lolcode.png",
      description:
        "This project implements a LOLCODE interpreter in Python and it executes programs that are written in the LOLCODE language. Implemented algorithms in interpreting operations and statements that capture the delimiters and execute their functionalities.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/LOLCODE-Interpreter" }],
      skills: ["Python", "Tkinter"],
      date: "November 2023 - January 2024",
    },
    {
      title: "QSPS: Quadratic Spline and Polynomial Solver",
      image: "/assets/projs/qsps.png",
      description:
        "QSPS is an R Shiny application that allows users to perform quadratic spline interpolation and polynomial regression analysis. The user interface was designed with custom CSS for aesthetic appeal.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/QSPS" }],
      skills: ["R", "R Shiny", "CSS"],
      date: "November - December 2023",
    },
    {
      title: "Viper's Shootout: Mini Shooting Game",
      image: "/assets/projs/viper.png",
      description:
        "Viper's Shootout is a mini-shooting game written in Java and implemented using JavaFX and Eclipse IDE. The game is inspired by VALORANT and its character, Viper.",
      links: [
        { text: "GitHub", url: "https://github.com/bernardjezua/viper" },
      ],
      skills: ["Java", "JavaFX", "Adobe Photoshop", "Canva"],
      date: "July - August 2023",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const hasMoreToShow = projects.length > 6;

  return (
    <section id="projects" className="py-32 px-8 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 block font-medium">
              /02 Projects
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
              FEATURED <br className="hidden md:block" /> WORKS.
            </h3>
          </div>
          <p className="max-w-xs text-white/50 text-sm ">
            A collection of software development projects designed to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index < 6 ? index * 0.1 : (index - 6) * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer mx-auto w-full max-w-[22rem] sm:max-w-none"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] bg-bern-card border border-white/5 rounded-sm overflow-hidden mb-6 p-4 sm:p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-2xl">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-bern-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white/5 text-white/70 text-[10px] uppercase font-medium tracking-wider rounded-full border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="absolute w-5 h-5 transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowUpRight className="absolute w-5 h-5 -translate-x-[150%] translate-y-[150%] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreToShow && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex w-max items-center bg-transparent border border-white/20 text-white rounded-full px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] mr-3">
                {showAll ? "Show Less" : "View All Projects"}
              </span>
              <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                {showAll ? (
                  <>
                    <ChevronUp className="absolute w-4 h-4 transition-transform duration-300 group-hover:-translate-y-[150%]" />
                    <ChevronUp className="absolute w-4 h-4 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0" />
                  </>
                ) : (
                  <>
                    <ChevronDown className="absolute w-4 h-4 transition-transform duration-300 group-hover:translate-y-[150%]" />
                    <ChevronDown className="absolute w-4 h-4 -translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0" />
                  </>
                )}
              </div>
            </button>
          </div>
        )}
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="w-[95vw] max-w-[1400px] bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl h-[95dvh] sm:h-[90vh] overflow-hidden p-0 [&>button]:hidden">
          {/* Custom Back Button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
            <DialogClose asChild>
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white gap-2 px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span className="text-sm font-bold uppercase tracking-widest">Back</span>
              </Button>
            </DialogClose>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 h-full w-full overflow-y-auto sm:overflow-hidden">
            {/* Top / Left Column - Image */}
            <div className="relative w-full h-[40vh] sm:h-full bg-black/50 border-b border-white/5 sm:border-r flex flex-col justify-center p-4 sm:p-12 mt-16 sm:mt-0 pt-0">
              <div className="relative w-full aspect-video sm:h-[70vh]">
                {selectedProject && (
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=600&width=800"}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>

            {/* Bottom / Right Column - Content */}
            <div className="p-6 sm:p-12 md:p-20 flex flex-col sm:overflow-y-auto h-auto sm:h-full">
              <DialogHeader className="text-left relative mb-8">
                <DialogTitle className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {selectedProject?.title}
                </DialogTitle>
                {selectedProject?.date && (
                   <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest mt-1">
                      {selectedProject.date}
                   </p>
                )}
              </DialogHeader>

              <div className="mb-12 flex-grow">
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {selectedProject?.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-8 border-t border-white/10 pt-8 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm uppercase tracking-wider rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 w-full">
                  {selectedProject?.links?.map((link, i) => (
                    <Button key={i} asChild variant={i === 0 ? "default" : "outline"} className={`rounded-none uppercase tracking-widest text-xs sm:text-sm font-bold gap-2 py-6 px-8 ${i === 0 ? "bg-bern-blue hover:bg-bern-blue/90 text-white hover:text-white" : "border-white/10 text-white hover:bg-white/5 hover:text-white"}`}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group w-full justify-center"
                      >
                        {link.text}
                        {i === 0 ? <ExternalLink className="w-5 h-5 ml-2" /> : <Github className="w-5 h-5 ml-2" />}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
