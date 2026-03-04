"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

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
  date?: string
  award?: string
}

export function DesignsSection() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)

  const designs: Design[] = [
    {
      title: "Alerto.ai: A Nationwide Flood Intelligence Powered by Project NOAH",
      image: "/assets/designs/alerto.png",
      description: "Alerto is a centralized, AI-driven intelligence web app prototype for Filipinos to visualize real-time flood risks, understand contributing factors, and prepare for potential disaster. It's main features consist of three, a nationwide 3D map, an AI assisted chat bot, and text alerts. Alerto placed 1st Runner-Up at the 42nd CS Week WarFrames Web Design Competition.",
      links: [],
      skills: ["Figma"],
      date: "February 2026",
      award: "1st Runner-Up"
    },
    {
      title: "ElbiMart: Quick Grocery List",
      image: "/assets/designs/elbimart.png",
      description: "ElbiMart is a high-fidelity prototype of a user-friendly grocery shopping application. ElbiMart aims to make grocery stores near you to be quick, simple, and clutter-free by providing a minimalistic application that guides you through your shopping list.",
      links: [
        { text: "View Prototype", url: "https://www.figma.com/proto/a1nuvuvaCC6gtiQP3G36wf/ElbiMart?node-id=0-1&t=tcAJ1ua2ihy5x38K-1" },
        { text: "Case Study", url: "https://www.behance.net/gallery/240397559/ElbiMart-Quick-Grocery-List-and-Cart" }
      ],
      skills: ["Figma", "Adobe Lightroom", "Photoshop", "Adobe Stock"],
      date: "Oct - Nov 2025",
    },
    {
      title: "Payonnect: Smart Umbrella Sharing",
      image: "/assets/designs/payonnect.png",
      description: "Payonnect is an eco-friendly solution that allows commuters to borrow and return umbrellas through automated kiosks using QR codes. The system tracks transactions, manages inventory, and applies fair penalties for damaged or unreturned umbrellas.",
      links: [
        { text: "View Prototype", url: "https://www.figma.com/proto/RlG6aQ2d63tmPoXhW4illq/Payonnect?node-id=17-1016&t=KB1KZxBf45Ny16SZ-1" },
        { text: "Case Study", url: "https://www.behance.net/gallery/240213963/Payonnect-Smart-Umbrella-Sharing-System" }
      ],
      skills: ["Figma", "Photoshop", "Adobe Stock", "Canva"],
      date: "Oct 2025",
    },
    {
      title: "CosMarket: Buy, Sell, and Rent",
      image: "/assets/designs/cosmarket.png",
      description: "CosMarket is a buy and sell market application prototype designed to revolutionize the cosplay community by offering a seamless platform for looking at cosplay costumes and accessories.",
      links: [
        { text: "View Prototype", url: "https://www.figma.com/proto/SSEdzQioOieUqdKdcsgdTi/CosMarket?node-id=0-1&t=yofgEwZVk05q8LH7-1" },
        { text: "Case Study", url: "https://www.behance.net/gallery/240193177/CosMarket-Buy-Sell-and-Rent-Cosplays" }
      ],
      skills: ["Figma", "Photoshop", "Canva"],
      date: "Mar - May 2025",
    },
    {
      title: "FastSnap: Quick Mobile Video Editor",
      image: "/assets/designs/fastsnap.png",
      description: "FastSnap is a mobile video editor prototype made using Figma. It is designed to offer an intuitive user experience for users who edit videos on the go.",
      links: [
        { text: "View Prototype", url: "https://www.figma.com/proto/G8YLkwGD8wgNtwrnYaceT4/FastSnap?node-id=20-2&t=JVajyBlgcZPb3tl2-1" },
        { text: "Case Study", url: "https://www.behance.net/gallery/240175301/FastSnap-Quick-Mobile-Video-Editor" }
      ],
      skills: ["Figma", "Photoshop", "Canva"],
      date: "Mar - May 2024",
    },
    {
      title: "Tic Tac Toe: Galaxy Edition",
      image: "/assets/designs/tictac.png",
      description: "A cosmic twist on the classic game! Play Tic Tac Toe against a friend or an AI with a stunning galaxy-themed design. Featuring our own Moon and our neighbor, Mars as the game pieces. May the best cosmic being win!",
      links: [
        { text: "View", url: "https://www.figma.com/proto/zCbU0k4iwFtB5iqcFvYr0g/Tic-Tac-Toe?page-id=0%3A1&node-id=27-2&viewport=972%2C233%2C0.38&t=RU4itHnDbUHLmwmw-1&scaling=min-zoom&content-scaling=fixed" },
      ],
      skills: ["Figma", "Canva"],
      date: "Jan 2024",
    },
  ]

  return (
    <section id="designs" className="py-32 px-8 md:px-20 border-t border-white/10 bg-[#121212] text-white">
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
              /05 UI/UX Design
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
              VISUAL <br className="hidden md:block" /> EXPERIMENTS.
            </h3>
          </div>
          <p className="max-w-xs text-white/50 text-sm ">
            Showcasing high-fidelity prototypes and user-centric design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {designs.map((design, index) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer mx-auto w-full max-w-[22rem] sm:max-w-none"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative aspect-[4/3] bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden mb-6 p-4 sm:p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-2xl">
                  <Image
                    src={design.image || "/placeholder.svg?height=600&width=800"}
                    alt={design.title}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-bern-blue transition-colors duration-300 truncate whitespace-normal">
                    {design.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {design.award && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-500 text-[10px] uppercase font-bold tracking-widest rounded-sm border border-yellow-500/30">
                        🏆 {design.award}
                      </span>
                    )}
                    {design.skills.slice(0, 3).map((skill) => (
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
      </div>

      <Dialog
        open={!!selectedDesign}
        onOpenChange={(open) => !open && setSelectedDesign(null)}
      >
        <DialogContent className="w-[95vw] max-w-[1400px] bg-[#0f0f0f] border border-white/10 rounded-xl sm:rounded-2xl h-[95dvh] sm:h-[90vh] overflow-hidden p-0 [&>button]:hidden">
          {/* Custom Back Button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
            <DialogClose asChild>
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white gap-2 px-3">
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span className="text-sm font-bold uppercase tracking-widest">Back</span>
              </Button>
            </DialogClose>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 h-full w-full overflow-y-auto sm:overflow-hidden">
            {/* Top / Left Column - Image */}
            <div className="relative w-full h-[40vh] sm:h-full bg-black/50 border-b border-white/5 sm:border-r flex flex-col justify-center p-4 sm:p-12 mt-16 sm:mt-0 pt-0">
              <div className="relative w-full aspect-video sm:h-[70vh]">
                {selectedDesign && (
                  <Image
                    src={selectedDesign.image || "/placeholder.svg?height=600&width=800"}
                    alt={selectedDesign.title}
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
                  {selectedDesign?.title}
                </DialogTitle>
                {selectedDesign?.date && (
                   <div className="flex flex-col gap-3">
                    <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">
                      {selectedDesign.date}
                    </p>
                  </div>
                )}
              </DialogHeader>

              <div className="mb-12 flex-grow">
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {selectedDesign?.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-8 border-t border-white/10 pt-8 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {selectedDesign?.award && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-500 text-xs sm:text-sm uppercase font-bold tracking-widest rounded-sm border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                      🏆 {selectedDesign.award}
                    </span>
                  )}
                  {selectedDesign?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm uppercase tracking-wider rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 w-full">
                  {selectedDesign?.links?.map((link, i) => (
                    <Button key={i} asChild variant={i === 0 ? "default" : "outline"} className={`rounded-none uppercase tracking-widest text-xs sm:text-sm font-bold gap-2 py-6 px-8 ${i === 0 ? "bg-bern-blue hover:bg-bern-blue/90 text-white hover:text-white" : "border-white/10 text-black hover:bg-white/5 hover:text-white"}`}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group w-full justify-center"
                      >
                        {link.text}
                        {i === 0 && <ExternalLink className="w-5 h-5 ml-2" />}
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