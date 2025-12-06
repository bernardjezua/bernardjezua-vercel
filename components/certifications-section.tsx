"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface CertificationLink {
  text: string
  url: string
}

interface Certification {
  title: string
  image: string
  description: string
  issuer: string
  date: string
  links?: CertificationLink[]
  skills: string[]
}

// Separate constant array for badge images
const badgeImages = [
  "/assets/badges/badge1.png",
  "/assets/badges/badge2.png",
  "/assets/badges/badge3.png",
  "/assets/badges/badge4.png",
  "/assets/badges/badge5.png",
  "/assets/badges/badge6.png",
  "/assets/badges/badge7.png",
  "/assets/badges/badge8.png"
]

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null)
  const [hoveredCertification, setHoveredCertification] = useState<string | null>(null)

  const certifications: Certification[] = [
    {
      title: "Microsoft UX Design Specialization",
      image: "/assets/certs/13.png",
      description:
        "Earned a professional certificate in UX Design, gaining proficiency in user research, wireframing, prototyping, visual design, and accessibility.",
      issuer: "Microsoft",
      date: "November 2025",
      links: [{ text: "View", url: "https://www.coursera.org/account/accomplishments/specialization/1A1H6DDFITX2" }],
      skills: ["Figma", "Canva", "Adobe Photoshop", "User Experience"],
    },
    {
      title: "Google UX Design Professional Certificate",
      image: "/assets/certs/12.jpg",
      description:
        "Completed a 7-course series regarding UX design program covering user research, wireframing, prototyping, and usability testing.",
      issuer: "Google",
      date: "May 2025",
      links: [{ text: "View", url: "https://www.coursera.org/account/accomplishments/specialization/1O1N179PZ4CY" }],
      skills: ["Figma", "Adobe Photoshop", "User Experience", "User Interface", "Wireframing", "Prototyping"],
    },
    {
      title: "Python Data Associate",
      image: "/assets/certs/11.png",
      description:
        "Completed two timed exams that assessed Python data management and exploratory analysis. Completed a project that addresses a business problem.",
      issuer: "DataCamp",
      date: "April 2025 (expires April 2027)",
      links: [{ text: "View", url: "https://www.datacamp.com/certificate/PDA0013994944597" }],
      skills: ["Python"],
    },
    {
      title: "JavaScript Essentials",
      image: "/assets/certs/10.jpg",
      description:
        "Comprehensive course covering JavaScript fundamentals, including variables, functions, and control structures.",
      issuer: "Cisco Networking Academy",
      date: "April 2025",
      links: [
        { text: "View", url: "https://www.credly.com/badges/084f57c0-ff61-47ce-b611-8963aaaeb0a5/linked_in_profile" },
      ],
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
      description: "Passed the role certification test covering topics like React, CSS, and JavaScript.",
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
    {
      title: "Prompting Essentials",
      image: "/assets/certs/5.png",
      description:
        "Understanding the prompting principles of evaluation, iteration, responsible AI, and have practical experience using AI to help with personal and work tasks.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [
        { text: "View", url: "https://www.credly.com/badges/b654e28a-c85b-46f1-8d92-70c3c576df0b/linked_in_profile" },
      ],
      skills: ["AI", "Prompting"],
    },
    {
      title: "AI Essentials",
      image: "/assets/certs/4.png",
      description:
        "Completed the course which covers the foundational understanding of AI principles and gaining practical experience by applying generative AI tools to workplace tasks.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [
        { text: "View", url: "https://www.credly.com/badges/ffff066a-5946-4599-8e75-bf6bae06439c/linked_in_profile" },
      ],
      skills: ["AI", "Machine Learning", "Prompting"],
    },
    {
      title: "Agile Essentials",
      image: "/assets/certs/3.png",
      description:
        "Learned about the Agile project management approach and key elements of popular frameworks under the Agile umbrella, including Scrum.",
      issuer: "Google via Coursera",
      date: "March 2025",
      links: [
        { text: "View", url: "https://www.credly.com/badges/a95db6c8-8881-44af-989f-3e4306ade3e8/linked_in_profile" },
      ],
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
    },
  ]

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 3)
  const hasMoreToShow = certifications.length > 3

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Badges Earned Container - Just showing badge images */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="mb-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {badgeImages.map((badgeImage, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3, delay: index * 0.05}}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-md shadow-md transition-transform duration-300 p-2 bg-gray-50 dark:bg-gray-900/30"
                >
                  {/* Wrapper with a flexible width and a max-height to keep badges visible */}
                  <div className="flex items-center justify-center max-w-xs max-h-32">
                    <Image
                      src={badgeImage || "/placeholder.svg?height=96&width=96"}
                      alt={`Badge ${index + 1}`}
                      width={84}
                      height={84}
                      className="object-contain max-h-20 max-w-full items-center justify-center"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {visibleCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative group"
              onClick={() => setSelectedCertification(cert)}
              onMouseEnter={() => setHoveredCertification(cert.title)}
              onMouseLeave={() => setHoveredCertification(null)}
            >
              <Card className="w-full h-full overflow-hidden border-0 cursor-pointer shadow-md hover:shadow-md transition-all">
                <div className="relative w-full h-full">
                  <Image
                    src={cert.image || "/placeholder.svg?height=400&width=400"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      hoveredCertification === cert.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="text-white text-lg font-semibold">{cert.title}</h3>
                    <p className="text-white/80 text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-purple-500/30 text-white border-purple-400/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 4 && (
                        <Badge variant="outline" className="bg-gray-500/30 text-white border-gray-400/30">
                          +{cert.skills.length - 4}
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
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="flex items-center gap-2">
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

      <Dialog
        open={!!selectedCertification}
        onOpenChange={(open) => !open && setSelectedCertification(null)}
      >
        <DialogContent
          className="w-full max-w-xl p-6 sm:p-8 rounded-md sm:rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          {/* Title and Header */}
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">
              {selectedCertification?.title}
            </DialogTitle>
            <DialogDescription className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {selectedCertification?.issuer}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                {selectedCertification?.date}
              </span>
            </DialogDescription>
          </DialogHeader>

          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            {selectedCertification && (
              <Image
                src={selectedCertification.image || "/placeholder.svg?height=400&width=600"}
                alt={selectedCertification.title}
                fill
                className="object-contain p-4"
              />
            )}

          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              {selectedCertification?.description}
            </p>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCertification?.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Action links */}
          <div className="flex flex-wrap justify-end gap-4 mt-4">
            {selectedCertification?.links?.map((link, i) => (
              <Button
                key={i}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-gray-50 px-4 py-2 text-sm sm:text-base rounded-md shadow-md transition transform hover:translate-y-[-2px]"
                asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> {link.text}
                </a>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
