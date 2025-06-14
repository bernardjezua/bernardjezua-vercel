"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "bernardjezuaml@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+63 993 493 4597" },
    { icon: <MapPin className="h-5 w-5" />, text: "Laguna, Philippines" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-md px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mt-4 mx-auto" />
        </motion.div>

        {/* Contact Card Section */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
        >
          <Card className="border-0 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a project in mind or just want to say hello? Feel free to reach out directly.
            </p>

            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {item.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center">
              <a
                href="https://github.com/bernardjezua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                <Github className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </a>

              <a
                href="https://linkedin.com/in/bernardjezua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </a>

              <a
                href="https://facebook.com/bernedoutfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                <Facebook className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </a>

              <a
                href="mailto:bernardjezuaml@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                <Mail className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

