"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface DesignLink {
  text: string
  url: string
}

interface Design {
  title: string
  image: string
  description: string
  links?: DesignLink[]
  skills: string[]
}

export function DesignsSection() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)
  const [hoveredDesign, setHoveredDesign] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false) 

  const designs: Design[] = [
    {
      title: "ElbiMart: Quick Grocery List & Cart",
      image: "/assets/designs/elbimart.png",
      description:
        "ElbiMart is a high-fidelity prototype of a user-friendly grocery shopping application. ElbiMart aims to make grocery stores near you to be quick, simple, and clutter-free by providing a minimalistic application that guides you through your shopping list.",
      links: [
        {
          text: "View",
          url: "https://www.figma.com/proto/a1nuvuvaCC6gtiQP3G36wf/ElbiMart?node-id=0-1&t=tcAJ1ua2ihy5x38K-1",
        },
      ],
      skills: ["Figma", "Adobe Photoshop", "Adobe Stock"],
    },
    {
      title: "Payonnect: Smart Umbrella Sharing System",
      image: "/assets/designs/payonnect.png",
      description:
        "Payonnect is a convenient and eco-friendly solution that allows commuters to borrow and return umbrellas through automated kiosks using QR codes or RFID cards. The system tracks transactions, manages inventory and applies fair penalties for damaged or unreturned umbrellas.",
      links: [
        {
          text: "View",
          url: "https://www.figma.com/proto/RlG6aQ2d63tmPoXhW4illq/Payonnect-UI?node-id=0-1&t=J6pZEMdVyumrEHaA-1",
        },
      ],
      skills: ["Figma", "Canva", "Adobe Photoshop"],
    },
    {
      title: "CosMarket: Buy, Sell, and Rent Cosplays",
      image: "/assets/designs/cosmarket.png",
      description:
        "CosMarket is a buy and sell market application prototype designed to revolutionize the cosplay community by offering a seamless platform for looking at cosplay costumes and accessories.",
      links: [
        {
          text: "View",
          url: "https://www.figma.com/proto/SSEdzQioOieUqdKdcsgdTi/CosMarket?node-id=0-1&t=yofgEwZVk05q8LH7-1",
        },
      ],
      skills: ["Figma"],
    },
    {
      title: "FastSnap: Quick Mobile Video Editor",
      image: "/assets/designs/fastsnap.png",
      description:
        "FastSnap is a mobile video editor prototype made using Figma. It is designed to offer an intuitive user experience for users who edit videos on the go.",
      links: [
        {
          text: "Layouts",
          url: "https://www.figma.com/design/G8YLkwGD8wgNtwrnYaceT4/FastSnap?node-id=20-2&t=VCLJEgt4FHC3olAj-1",
        },
        {
          text: "View",
          url: "https://www.figma.com/proto/G8YLkwGD8wgNtwrnYaceT4/FastSnap?node-id=20-2&t=JVajyBlgcZPb3tl2-1",
        },
      ],
      skills: ["Figma", "Adobe Photoshop"],
    },
    {
      title: "Tic Tac Toe: Galaxy Edition",
      image: "/assets/designs/tictac.png",
      description:
        "A cosmic twist on the classic game! Play Tic Tac Toe against a friend or an AI with a stunning galaxy-themed design. Featuring our own Moon and our neighbor, Mars as the game pieces. May the best cosmic being win!",
      links: [
        {
          text: "View",
          url: "https://www.figma.com/proto/zCbU0k4iwFtB5iqcFvYr0g/Tic-Tac-Toe?page-id=0%3A1&node-id=27-2&viewport=972%2C233%2C0.38&t=RU4itHnDbUHLmwmw-1&scaling=min-zoom&content-scaling=fixed",
        },
      ],
      skills: ["Figma", "Canva"],
    },
  ]

  const visibleDesigns = showAll ? designs : designs.slice(0, 3)
  const hasMoreToShow = designs.length > 3

  return (
    <section id="designs" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
            Designs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Changed 'designs' to 'visibleDesigns' */}
          {visibleDesigns.map((design, index) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative group"
              onClick={() => setSelectedDesign(design)}
              onMouseEnter={() => setHoveredDesign(design.title)}
              onMouseLeave={() => setHoveredDesign(null)}
            >
              <Card className="w-full h-full overflow-hidden border-0 cursor-pointer shadow-md hover:shadow-md transition-all">
                <div className="relative w-full h-full">
                  <Image
                    src={design.image || "/placeholder.svg?height=400&width=400"}
                    alt={design.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      hoveredDesign === design.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="text-white text-lg font-semibold">{design.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {design.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-purple-500/30 text-white border-purple-400/30"
                        >
                          {skill}
                        </Badge>
                      ))}
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

      <Dialog open={!!selectedDesign} onOpenChange={(open) => !open && setSelectedDesign(null)}>
        <DialogContent className="sm:max-w-xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
              {selectedDesign?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            {selectedDesign && (
              <Image
                src={selectedDesign.image || "/placeholder.svg?height=400&width=600"}
                alt={selectedDesign.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{selectedDesign?.description}</p>
          </div>
          <DialogDescription className="flex flex-wrap gap-2 mt-2">
            {selectedDesign?.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
              >
                {skill}
              </Badge>
            ))}
          </DialogDescription>
          <div className="flex flex-wrap justify-end gap-4 mt-4">
            {selectedDesign?.links?.map((link, i) => (
              <Button
                key={i}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> {link.text}
                </a>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}