"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Briefcase, FolderKanban, User } from "lucide-react"

export function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/assets/Tandang_CV.pdf"
    link.download = "Tandang_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md h-full">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                      <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">Hello, I'm Bernard!</h3>
                    <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 mb-4">
                      I'm a passionate UI/UX Developer that develops intuitive and user-friendly mobile and web applications. With a background in both design and
                      development, I bring a unique perspective to every project.
                    </p>
                    <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 mb-6">
                      I created this student portfolio to document my projects throughout my stay in the university. It's been quite a rollercoaster and I'm hoping to graduate by July 2026. I'm also into learning new things so feel free to connect with me if you share the same interests!
                    </p>
                    <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 mb-6">
                      When I'm not coding, you can find me exploring new technologies, scrolling through social media, or stargazing - which inspired the cosmic theme of this portfolio!
                    </p>
                    <Button
                      onClick={handleDownloadCV}
                      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">Education</h3>
                      <h4 className="text-base font-medium text-gray-800 dark:text-white">
                        University of the Philippines Los Baños
                      </h4>
                      <p className="text-sm md:text-md text-gray-700 dark:text-gray-300">B.S. Computer Science</p>
                      <p className="text-sm md:text-md text-gray-600 dark:text-gray-400">2021 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                        <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">Experience</h3>
                      <p className="text-sm md:text-md text-gray-700 dark:text-gray-300">2 years in UX Design and 0.3 years in Software Development.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                        <FolderKanban className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">Projects</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">7+ completed projects</p>
                      <p className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                        Mobile apps, web applications, and design prototypes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
