"use client"

import { motion } from "framer-motion"
import { Download, GraduationCap, Briefcase, FolderKanban, User } from "lucide-react"

export function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/assets/Bernard_UXDesigner_Resume.pdf"
    link.download = "Bernard_UXDesigner_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            THE HUMAN <br /> BEHIND THE PIXELS.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-sm border border-black/5 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 inline-flex p-3 bg-black/5 rounded-full">
                <User className="h-6 w-6 text-bern-blue" />
              </div>
              <h4 className="text-2xl font-bold mb-6">Hello, I'm Bernard!</h4>
              <p className="text-black/70 leading-relaxed max-w-md mb-6 ">
                I'm a passionate UI/UX Designer and Frontend Developer that likes to develop intuitive and user-friendly mobile and web applications. With a background in both design and development, I bring a unique perspective to every project.
              </p>
              <p className="text-black/70 leading-relaxed max-w-md  mb-12">
                When I'm not coding, you can find me exploring new technologies, participating in online courses, or stargazing - which inspired the cosmic theme of this portfolio!
              </p>
            </div>
            
            <button
              onClick={handleDownloadResume}
              className="group flex w-max items-center bg-black text-white rounded-full px-6 py-3 hover:bg-blue-600 transition-colors"
            >
              <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" /> 
              <span className="text-sm font-semibold uppercase tracking-widest">Download Resume</span>
            </button>
          </motion.div>

          {/* Stats / Details Cards */}
          <div className="flex flex-col gap-4">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-8 rounded-sm border border-black/5 flex items-start gap-6 group hover:bg-black/5 transition-colors"
            >
              <div className="inline-flex p-3 bg-black/5 rounded-full">
                <GraduationCap className="h-6 w-6 text-bern-blue group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Education</h4>
                <p className="text-black/80 font-medium mb-1">University of the Philippines Los Baños</p>
                <p className="text-black/60 text-sm">B.S. Computer Science • 2021 - 2026</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-8 rounded-sm border border-black/5 flex items-start gap-6 group hover:bg-black/5 transition-colors"
            >
              <div className="inline-flex p-3 bg-black/5 rounded-full">
                <Briefcase className="h-6 w-6 text-bern-blue group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Experience</h4>
                <p className="text-black/80 font-medium mb-1">0.3 years in Software Dev</p>
                <p className="text-black/60 text-sm">Actively looking for UX Design Roles</p>
              </div>
            </motion.div>

            {/* Projects Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-8 rounded-sm border border-black/5 flex items-start gap-6 group hover:bg-black/5 transition-colors"
            >
              <div className="inline-flex p-3 bg-black/5 rounded-full">
                <FolderKanban className="h-6 w-6 text-bern-blue group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Track Record</h4>
                <p className="text-black/80 font-medium mb-1">10+ Completed Projects</p>
                <p className="text-black/60 text-sm">Web apps, mobile apps, and design systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
