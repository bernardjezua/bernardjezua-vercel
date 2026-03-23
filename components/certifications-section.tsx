"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

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

  const certifications: Certification[] = [
    {
      title: "Meta Front-End Developer",
      image: "/assets/certs/14.png",
      description: "Designed by Meta software engineering experts, this program covers building interactive web pages with React, HTML5, and CSS. Includes hands-on projects focusing on UI/UX principles, version control, and building a full front-end application capstone.",
      issuer: "Meta",
      date: "Feb 2026",
      links: [{ text: "View Credentials", url: "https://www.coursera.org/account/accomplishments/specialization/5BQXZYQ77BY4" }],
      skills: ["React", "HTML5", "CSS", "UI/UX", "Version Control"],
    },
    {
      title: "Microsoft UX Design",
      image: "/assets/certs/13.png",
      description: "Earned a professional certificate in UX Design, gaining proficiency in user research, wireframing, prototyping, visual design, and accessibility.",
      issuer: "Microsoft",
      date: "Nov 2025",
      links: [{ text: "View Credentials", url: "https://www.coursera.org/account/accomplishments/specialization/1A1H6DDFITX2" }],
      skills: ["Figma", "Canva", "Adobe Photoshop", "User Experience"],
    },
    {
      title: "Google UX Design",
      image: "/assets/certs/12.jpg",
      description: "Completed a 7-course series regarding UX design program covering user research, wireframing, prototyping, and usability testing.",
      issuer: "Google",
      date: "May 2025",
      links: [{ text: "View Credentials", url: "https://www.coursera.org/account/accomplishments/specialization/1O1N179PZ4CY" }],
      skills: ["Figma", "Adobe Photoshop", "UX", "UI", "Wireframing", "Prototyping"],
    },
    {
      title: "Web Development Fundamentals",
      image: "/assets/certs/15.png",
      description: "Demonstrated knowledge of web development concepts, processes to develop, deploy, and test websites, and the tools and programming languages that web developers use.",
      issuer: "IBM",
      date: "May 2025",
      links: [{ text: "View Credentials", url: "https://www.credly.com/badges/cb963c4f-8dcf-4063-bb1a-04be27a67d25/" }],
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Python Data Associate",
      image: "/assets/certs/11.png",
      description: "Completed two timed exams that assessed Python data management and exploratory analysis. Completed a project that addresses a business problem.",
      issuer: "DataCamp",
      date: "Apr 2025",
      links: [{ text: "View Credentials", url: "https://www.datacamp.com/certificate/PDA0013994944597" }],
      skills: ["Python"],
    },
    {
      title: "JavaScript Essentials",
      image: "/assets/certs/10.jpg",
      description: "Comprehensive course covering JavaScript fundamentals, including variables, functions, and control structures.",
      issuer: "Cisco Networking Academy",
      date: "Apr 2025",
      links: [{ text: "View Credentials", url: "https://www.credly.com/badges/084f57c0-ff61-47ce-b611-8963aaaeb0a5/linked_in_profile" }],
      skills: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Software Engineer Intern",
      image: "/assets/certs/9.png",
      description: "Passed the role certification test covering topics like Problem Solving, SQL, and REST API concepts.",
      issuer: "HackerRank",
      date: "Apr 2025",
      links: [{ text: "View Credentials", url: "https://www.hackerrank.com/certificates/e4254f7f1c0f" }],
      skills: ["SQL", "Python", "Problem Solving"],
    },
    {
      title: "React Frontend Developer",
      image: "/assets/certs/8.png",
      description: "Passed the role certification test covering topics like React, CSS, and JavaScript.",
      issuer: "HackerRank",
      date: "Apr 2025",
      links: [{ text: "View Credentials", url: "https://www.hackerrank.com/certificates/97f820be3191" }],
      skills: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Intermediate JavaScript",
      image: "/assets/certs/7.png",
      description: "Intermediate course covering topics like design patterns, memory management, concurrency model, and event loops.",
      issuer: "HackerRank",
      date: "Apr 2025",
      links: [{ text: "View Credentials", url: "https://www.hackerrank.com/certificates/49866151bd04" }],
      skills: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Prompting Essentials",
      image: "/assets/certs/5.png",
      description: "Understanding the prompting principles of evaluation, iteration, responsible AI, and have practical experience using AI to help with personal and work tasks.",
      issuer: "Google via Coursera",
      date: "Mar 2025",
      links: [{ text: "View Credentials", url: "https://www.credly.com/badges/b654e28a-c85b-46f1-8d92-70c3c576df0b/linked_in_profile" }],
      skills: ["AI", "Prompting"],
    },
    {
      title: "AI Essentials",
      image: "/assets/certs/4.png",
      description: "Completed the course which covers the foundational understanding of AI principles and gaining practical experience by applying generative AI tools to workplace tasks.",
      issuer: "Google via Coursera",
      date: "Mar 2025",
      links: [{ text: "View Credentials", url: "https://www.credly.com/badges/ffff066a-5946-4599-8e75-bf6bae06439c/linked_in_profile" }],
      skills: ["AI", "Machine Learning", "Prompting"],
    },
    {
      title: "Agile Essentials",
      image: "/assets/certs/3.png",
      description: "Learned about the Agile project management approach and key elements of popular frameworks under the Agile umbrella, including Scrum.",
      issuer: "Google via Coursera",
      date: "Mar 2025",
      links: [{ text: "View Credentials", url: "https://www.credly.com/badges/a95db6c8-8881-44af-989f-3e4306ade3e8/linked_in_profile" }],
      skills: ["Agile", "Scrum"],
    },
    {
      title: "Mobile Development",
      image: "/assets/certs/2.png",
      description: "An introduction to mobile design concepts and development approaches, and outlined the seven principles underpinning the design of an effective mobile application.",
      issuer: "Accenture via FutureLearn",
      date: "Dec 2024",
      links: [{ text: "View Credentials", url: "https://www.futurelearn.com/certificates/t8q5i9p" }],
      skills: ["Mobile Development", "Agile", "Scrum"],
    },
    {
      title: "User Experience",
      image: "/assets/certs/1.png",
      description: "Explored the foundations of UX design, wireframing, prototyping, and the three-step design process: design, develop and release.",
      issuer: "Accenture via FutureLearn",
      date: "Dec 2024",
      links: [{ text: "View Credentials", url: "https://www.futurelearn.com/certificates/9knrq38" }],
      skills: ["UX", "UI", "Wireframing", "Prototyping"],
    },
  ]

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 6)
  const hasMoreToShow = certifications.length > 6

  return (
    <section id="certifications" className="py-32 px-8 md:px-20 border-t border-black/10 bg-[#f0f0f0] text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-black/50 mb-4 block font-medium">
            /05 Certifications
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            PROVING EXCELLENCE.
          </h3>
        </motion.div>

        {/* Badges Earned Container */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="mb-16"
        >
          <div className="bg-white border border-black/5 rounded-sm p-6 sm:p-8 md:p-12">
            <h4 className="text-sm uppercase tracking-widest text-black/50 mb-6 md:mb-8 font-semibold text-center md:text-left">Featured Badges</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-8">
              {badgeImages.map((badgeImage, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, scale: 0.9}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3, delay: index * 0.05}}
                  viewport={{ once: true }}
                  className="cert-badge-wrapper"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    <Image
                      src={badgeImage || "/placeholder.svg?height=96&width=96"}
                      alt={`Badge ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col border-t border-black/10 mt-12">
          {visibleCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index < 6 ? index * 0.1 : (index - 6) * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCertification(cert)}
              className="group cert-row"
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-bern-blue transition-colors duration-300">{cert.title}</h3>
                <p className="text-black/50 font-medium tracking-wide uppercase text-xs">{cert.issuer}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-black/50 font-mono text-sm tracking-widest">{cert.date}</div>
              </div>
              <div className="cert-arrow-btn">
                <ArrowUpRight className="absolute w-5 h-5 transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                <ArrowUpRight className="absolute w-5 h-5 -translate-x-[150%] translate-y-[150%] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreToShow && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group cert-view-all-btn"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] mr-3">
                {showAll ? "Show Less" : "View All Certifications"}
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
          </motion.div>
        )}
      </div>

      <Dialog
        open={!!selectedCertification}
        onOpenChange={(open) => !open && setSelectedCertification(null)}
      >
        <DialogContent
          className="w-[95vw] max-w-[1400px] bg-[#f5f5f5] border border-black/10 rounded-xl sm:rounded-2xl h-[95dvh] sm:h-[90vh] overflow-hidden p-0 [&>button]:hidden"
        >
          {/* Custom Back Button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
            <DialogClose asChild>
              <Button variant="ghost" className="text-black hover:bg-black/5 hover:text-black gap-2 px-3">
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span className="text-sm font-bold uppercase tracking-widest">Back</span>
              </Button>
            </DialogClose>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 h-full w-full overflow-y-auto sm:overflow-hidden">
            {/* Top / Left Column - Image */}
            <div className="relative w-full h-[40vh] sm:h-full bg-black/5 border-b border-black/10 sm:border-r flex flex-col justify-center p-4 sm:p-12 mt-16 sm:mt-0 pt-0">
              <div className="relative w-full aspect-video sm:h-[70vh]">
                {selectedCertification && (
                  <Image
                    src={selectedCertification.image || "/placeholder.svg?height=400&width=600"}
                    alt={selectedCertification.title}
                    fill
                    className="object-contain"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                )}
              </div>
            </div>

            {/* Bottom / Right Column - Content */}
            <div className="p-6 sm:p-12 md:p-20 flex flex-col sm:overflow-y-auto h-auto sm:h-full">
              <DialogHeader className="text-left relative mb-8">
                <DialogTitle className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                  {selectedCertification?.title}
                </DialogTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs md:text-sm text-black/60 uppercase tracking-widest mt-1">
                  <span>{selectedCertification?.issuer}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{selectedCertification?.date}</span>
                </div>
              </DialogHeader>

              <div className="mb-12 flex-grow">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">
                  {selectedCertification?.description}
                </p>
              </div>

              <div className="flex flex-col gap-8 border-t border-black/10 pt-8 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {selectedCertification?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/5 border border-black/10 text-black/80 text-xs sm:text-sm uppercase tracking-wider rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                  {selectedCertification?.links?.map((link, i) => (
                    <Button key={i} asChild variant="default" className="rounded-none uppercase tracking-widest text-xs sm:text-sm font-bold gap-2 py-6 px-8 bg-bern-blue hover:bg-bern-blue/90 text-white hover:text-white">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group w-full justify-center"
                      >
                        {link.text}
                        <ExternalLink className="w-5 h-5 ml-2" />
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
  )
}
