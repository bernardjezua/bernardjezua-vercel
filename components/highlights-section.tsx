"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ExternalLink, Award, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function HighlightsSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const highlights = [
    {
      title: "1st Runner Up - Enterprise Track",
      subtitle: "Protothon 2026: The Online UX Hackathon",
      date: "May 2026",
      badge: "/assets/events/protothon2026.png",
      certImage: "/assets/pictures/award_01.png",
      postLink: "https://www.linkedin.com/posts/bernardjezua_protothon-dubstech-designbuddies-ugcPost-7456901479690584064-qURU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsvmXABsIbnwuyqSDf0cVtW8ZC3Am_aw4Y",
      type: "award",
      showShine: true
    },
    {
      title: "1st Runner Up",
      subtitle: "42nd Computer Science Week Warframes Web Design Competition",
      date: "February 2026",
      badge: "/assets/events/warframes.png",
      certImage: "/assets/pictures/award_00.png",
      postLink: "https://www.linkedin.com/posts/bernardjezua_im-incredibly-proud-to-share-that-my-team-share-7432247400431382529-D6xD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsvmXABsIbnwuyqSDf0cVtW8ZC3Am_aw4Y",
      type: "award",
      showShine: true
    },
    {
      title: "Meta Front-End Developer",
      subtitle: "Professional Certification",
      date: "February 2026",
      badge: "/assets/badges/badge8.png",
      certImage: "/assets/certs/12.jpg",
      postLink: "https://www.linkedin.com/posts/bernardjezua_metacertified-webdev-frontend-ugcPost-7424086362292641793-UKgD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsvmXABsIbnwuyqSDf0cVtW8ZC3Am_aw4Y",
      type: "cert"
    },
    {
      title: "Microsoft UX Design",
      subtitle: "Professional Certification",
      date: "November 2025",
      badge: "/assets/badges/badge7.png",
      certImage: "/assets/certs/13.png",
      postLink: "https://www.linkedin.com/posts/bernardjezua_im-happy-to-share-that-ive-obtained-a-new-ugcPost-7392747447883767808-XWuu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsvmXABsIbnwuyqSDf0cVtW8ZC3Am_aw4Y",
      type: "cert"
    },
    {
      title: "Google UX Design",
      subtitle: "Professional Certification",
      date: "May 2025",
      badge: "/assets/badges/badge6.png",
      certImage: "/assets/certs/14.png",
      postLink: "https://www.linkedin.com/posts/bernardjezua_uxdesign-ugcPost-7324722598628462594-wkiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsvmXABsIbnwuyqSDf0cVtW8ZC3Am_aw4Y",
      type: "cert"
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col items-start w-full"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-black/5 rounded-full border border-black/10">
            <Heart className="h-4 w-4 text-black/60" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-black/40">Highlights</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col p-5 md:p-6 bg-white/50 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 group relative overflow-hidden"
            >
              <Heart className="absolute top-5 right-5 h-3 w-3 md:h-4 md:w-4 text-black/10 group-hover:text-[#ef4444] transition-colors duration-500 z-20" fill="currentColor" />
              
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 shrink-0 overflow-hidden">
                {item.showShine && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                )}
                <img 
                  src={item.badge} 
                  alt={item.title} 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500" 
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h5 className="text-base md:text-lg font-bold text-black leading-tight mb-1">{item.title}</h5>
                <p className="text-[11px] md:text-sm text-black/70 font-semibold leading-snug mb-1">{item.subtitle}</p>
                <p className="text-[10px] md:text-xs text-black/40 font-medium uppercase tracking-wider mb-4">{item.date}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  <button 
                    onClick={() => setSelectedImage({ src: item.certImage, title: item.title })}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-bern-blue/10 hover:bg-bern-blue text-bern-blue hover:text-white rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border border-bern-blue/20"
                  >
                    <Award className="w-3 h-3" />
                    Certificate
                  </button>
                  <a 
                    href={item.postLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 hover:bg-black text-black/60 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border border-black/10"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Post
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
          <div className="sr-only">
            <DialogHeader>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
            </DialogHeader>
          </div>
          <div className="relative group">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#0a0a0a] p-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <img 
                src={selectedImage?.src} 
                alt={selectedImage?.title} 
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />
            </motion.div>
            <div className="absolute -top-12 right-0 flex items-center gap-4">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest">{selectedImage?.title}</h3>
              <DialogClose className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors">
                <X className="w-5 h-5" />
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
