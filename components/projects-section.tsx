"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ProjectLink {
  text: string
  url: string
}

interface Project {
  title: string
  image: string
  description: string
  links?: ProjectLink[]
  skills: string[]
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      title: "UP GWA Calculator",
      image: "/assets/upgwacalc.png",
      description:
        "UP GWA Calculator is a web application that allows students to calculate their General Weighted Average (GWA) based on their grades and units. It provides a user-friendly interface for inputting grades and units, and calculates the GWA in real-time.",
      links: [{ text: "View", url: "https://up-gwa.vercel.app" }],
      skills: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "ICS-ASTRA: Alumni Tracking System",
      image: "/assets/astra.png",
      description:
        "The ICS Alumni Synced Tracking for Relations and Advancement (ICS-ASTRA) is a progressive web application that is designed to bridge the gap between the institute and its alumni by providing a platform for streamlined communication and tracking.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Traveler: A Genshin-Inspired Mobile Slam Book Application",
      image: "https://raw.githubusercontent.com/bernardjezua/traveler/main/docs/profile.png",
      description:
        "Traveler is a mobile slambook application inspired by Genshin Impact that allows users to add, update, and delete their friends through a slambook form or a QR code.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/traveler" }],
      skills: ["Flutter", "Dart", "Google Firebase"],
    },
    {
      title: "FoodUP: Food and Restaurant Review Application",
      image: "/assets/foodup.png",
      description:
        "FoodUP is an information system that records food reviews and items from establishments. Transformed several pages from Figma to Tkinter and debugged frontend data inaccuracy issues.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/FoodUP" }],
      skills: ["Python", "Tkinter", "SQL", "MariaDB", "Figma"],
    },
    {
      title: "HATID: An E-Commerce Application",
      image: "/assets/hatid.png",
      description:
        "HATID is an e-commerce platform design idea for the Department of Agriculture (DA) to efficiently manage the distribution of agricultural products to the public market.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/hatid" }],
      skills: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "LOLCODE Interpreter",
      image: "/assets/lolcode.png",
      description:
        "This project implements a LOLCODE interpreter in Python and it executes programs that are written in the LOLCODE language. Implemented algorithms in interpreting operations and statements that capture the delimiters and execute their functionalities.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/LOLCODE-Interpreter" }],
      skills: ["Python", "Tkinter"],
    },
    {
      title: "QSPS: Quadratic Spline and Polynomial Solver",
      image: "/assets/qsps.png",
      description:
        "QSPS is an R Shiny application that allows users to perform quadratic spline interpolation and polynomial regression analysis. The user interface was designed with custom CSS for aesthetic appeal.",
      links: [{ text: "GitHub", url: "https://github.com/bernardjezua/QSPS" }],
      skills: ["R", "R Shiny", "CSS"],
    },
    {
      title: "Viper's Shootout: Mini Shooting Game",
      image: "/assets/viper.png",
      description:
        "Viper's Shootout is a mini-shooting game written in Java and implemented using JavaFX and Eclipse IDE. The game is inspired by VALORANT and its character, Viper.",
      links: [
        { text: "GitHub", url: "https://github.com/bernardjezua/viper" },
        { text: "Preview", url: "https://drive.google.com/file/d/1sZJoVnwqbOKodjO6NM9zShKxo8Jjxcw3/view?usp=sharing" },
      ],
      skills: ["Java", "JavaFX", "Adobe Photoshop", "Canva"],
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  const hasMoreToShow = projects.length > 3

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative group"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="w-full h-full overflow-hidden border-0 cursor-pointer shadow-md hover:shadow-md transition-all">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      hoveredProject === project.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="text-white text-lg font-semibold line-clamp-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-purple-500/30 text-white border-purple-400/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge variant="outline" className="bg-gray-500/30 text-white border-gray-400/30">
                          +{project.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {hasMoreToShow && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 px-6">
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            {selectedProject && (
              <Image
                src={selectedProject.image || "/placeholder.svg?height=400&width=600"}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{selectedProject?.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject?.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap justify-end gap-4 mt-4">
            {selectedProject?.links?.map((link, i) => {
              if (link.text.toLowerCase() === "github") {
                return (
                  <Button key={i} variant="outline" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                )
              } else {
                return (
                  <Button
                    key={i}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> {link.text}
                    </a>
                  </Button>
                )
              }
            })}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
