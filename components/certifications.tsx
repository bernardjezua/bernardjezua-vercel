"use client"

import { useState } from "react"
import Image from "next/image"
import Imagebox from "./ui/imagebox"

export default function Certifications() {
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

  const certifications = [
    {
      title: "JavaScript Essentials",
      image: "/assets/certs/10.jpg",
      description:
        "Comprehensive course covering JavaScript fundamentals, including variables, functions, and control structures.",
      issuer: "Cisco Networking Academy",
      date: "April 2025",
      links: [{ text: "View", url: "https://www.credly.com/badges/084f57c0-ff61-47ce-b611-8963aaaeb0a5/linked_in_profile" }],
      skills: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Software Engineer Certification",
      image: "/assets/certs/9.jpg",
      description:
        "Passed the role certification test covering topics like Problem Solving, SQL, and REST API concepts.",
      issuer: "HackerRank",
      date: "April 2025",
      links: [{ text: "View", url: "https://www.hackerrank.com/certificates/e4254f7f1c0f" }],
      skills: ["SQL", "Python", "Problem Solving"],
    },
    {
      title: "React Frontend Developer",
      image: "/assets/certs/8.png",
      description:
        "Passed the role certification test covering topics like React, CSS, and JavaScript.",
      issuer: "HackerRank",
      date: "April 2025",
      links: [{ text: "View", url: "https://www.hackerrank.com/certificates/97f820be3191" }],
      skills: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Intermediate JavaScript",
      image: "/assets/certs/7.png",
      description:
        "Intermediate course covering topics like design patterns, memory management, concurrency model, and event loops.",
      issuer: "HackerRank",
      date: "April 2025",
      links: [{ text: "View", url: "https://www.hackerrank.com/certificates/49866151bd04" }],
      skills: ["JavaScript", "CSS", "HTML"],
    },
    // {
    //   title: "Python Basics",
    //   image: "/assets/certs/6.png",
    //   description:
    //     "Basic course covering Python fundamentals, including data types, control structures, and functions.",
    //   issuer: "HackerRank",
    //   date: "April 2025",
    //   skills: ["Python"],
    // },
    {
      title: "Prompting Essentials",
      image: "/assets/certs/5.png",
      description:
        "Understanding the prompting principles of evaluation, iteration, responsible AI, and have practical experience using AI to help with personal and work tasks.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [{ text: "View", url: "https://www.credly.com/badges/b654e28a-c85b-46f1-8d92-70c3c576df0b/linked_in_profile" }],
      skills: ["AI", "Prompting"],
    },
    {
      title: "AI Essentials",
      image: "/assets/certs/4.png",
      description:
        "Completed the course which covers the foundational understanding of AI principles and gaining practical experience by applying generative AI tools to workplace tasks.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [{ text: "View", url: "https://www.credly.com/badges/ffff066a-5946-4599-8e75-bf6bae06439c/linked_in_profile" }],
      skills: ["AI", "Machine Learning", "Prompting"],
    },
    {
      title: "Agile Essentials",
      image: "/assets/certs/3.png",
      description:
        "Learned about the Agile project management approach and key elements of popular frameworks under the Agile umbrella, including Scrum.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [{ text: "View", url: "https://www.credly.com/badges/a95db6c8-8881-44af-989f-3e4306ade3e8/linked_in_profile" }],
      skills: ["Agile", "Scrum"],
    },
    {
      title: "Mobile Development",
      image: "/assets/certs/2.png",
      description:
        "An introduction to mobile design concepts and development approaches, and outlined the seven principles underpinning the design of an effective mobile application.",
      issuer: "Accenture via FutureLearn",
      date: "December 2024",
      links: [{ text: "View", url: "https://www.futurelearn.com/certificates/t8q5i9p" }],
      skills: ["Mobile Development", "Agile", "Scrum"],
    },
    {
      title: "User Experience",
      image: "/assets/certs/1.png",
      description:
        "Explored the foundations of UX design, wireframing, prototyping, and the three-step design process: design, develop and release.",
      issuer: "Accenture via FutureLearn",
      date: "December 2024",
      links: [{ text: "View", url: "https://www.futurelearn.com/certificates/9knrq38" }],
      skills: ["User Experience", "User Interface", "Wireframing", "Prototyping"],
    }
  ]

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 3)

  return (
    <section id="certifications" className="py-16 px-4 md:px-10 lg:px-40">
      <p className="text-center font-semibold">Explore My</p>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedCertifications.map((cert, index) => (
          <div
            key={index}
            className="project-card bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full"
          >
            <div
              className="relative w-full h-48 mb-4 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(cert.image, cert.title)}
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-transparent hover:text-white font-medium transition-colors">View Image</span>
              </div>
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="rounded-lg object-cover transition-transform hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{cert.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{cert.description}</p>
            <p className="text-sm font-medium text-gray-700 mb-1">Issuer: {cert.issuer}</p>
            <p className="text-sm text-gray-500 mb-4">Date: {cert.date}</p>

            <div className="project-links flex gap-2 mb-3">
              {cert.links?.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#0E6CF3] text-white rounded-md text-sm transition-colors hover:bg-[#05439e] no-underline"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="skill_list flex flex-wrap gap-1.5 mt-auto">
              {cert.skills.map((skill, skillIndex) => (
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

      {/* Show More/Less button */}
      {certifications.length > 3 && (
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
