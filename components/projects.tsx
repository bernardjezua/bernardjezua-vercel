"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Imagebox from "./ui/imagebox"

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
  })

  const [showAll, setShowAll] = useState(false)

  const openLightbox = (src: string, alt: string) => {
    setLightbox({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt,
    })
  }

  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false,
    })
  }
  
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const projects = [
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

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-16 px-4 md:px-10 lg:px-40">
      <p className="text-center font-semibold">Explore My</p>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full"
          >
            <div
              className="relative w-full h-48 mb-4 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(project.image, project.title)}
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-transparent hover:text-white font-medium transition-colors">View Image</span>
              </div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="rounded-lg object-cover transition-transform hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>

            <div className="project-links flex gap-2 mb-3">
              {project.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  className="px-3 py-2 bg-[#0E6CF3] text-white rounded-md text-sm transition-colors hover:bg-[#05439e] no-underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            <div className="skill_list flex flex-wrap gap-1.5 mt-auto">
              {project.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill_item bg-gray-50 px-2 py-1 rounded-full text-xs text-gray-700 border border-gray-100"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-300 font-medium"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Image Lightbox */}
      <Imagebox
        src={lightbox.imageSrc || "/placeholder.svg"}
        alt={lightbox.imageAlt}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
      />
    </section>
  )
}
