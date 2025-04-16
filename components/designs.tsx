"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Imagebox from "./ui/imagebox"

export default function Designs() {
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

  const designs = [
    {
      title: "CosMarket: Buy, Sell, and Rent Cosplays",
      image: "/assets/cosmarket.png",
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
      image: "/assets/fastsnap.png",
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
      image: "/assets/tictac.png",
      description:
        "A cosmic twist on the classic game! Play Tic Tac Toe against a friend or an AI with a stunning galaxy-themed design. Featuring our own Moon and our neighbor, Mars as the game pieces. May the best cosmic being win!",
      links: [
        {
          text: "View",
          url: "https://www.figma.com/proto/zCbU0k4iwFtB5iqcFvYr0g/Tic-Tac-Toe?page-id=0%3A1&node-id=27-2&viewport=972%2C233%2C0.38&t=RU4itHnDbUHLmwmw-1&scaling=min-zoom&content-scaling=fixed",
        },
      ],
      skills: ["Figma", "Canva"],
    }
  ]

  const displayedDesigns = showAll ? designs : designs.slice(0, 3)

  return (
    <section id="designs" className="py-16 px-4 md:px-10 lg:px-40">
      <p className="text-center font-semibold">Explore My</p>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Designs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedDesigns.map((design, index) => (
          <div
            key={index}
            className="project-card bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full"
          >
            <div
              className="relative w-full h-48 mb-4 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(design.image, design.title)}
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-transparent hover:text-white font-medium transition-colors">View Image</span>
              </div>
              <Image
                src={design.image || "/placeholder.svg"}
                alt={design.title}
                fill
                className="rounded-lg object-cover transition-transform hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{design.title}</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">{design.description}</p>

            <div className="project-links flex gap-2 mb-3">
              {design.links.map((link, linkIndex) => (
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
              {design.skills.map((skill, skillIndex) => (
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

      {designs.length > 3 && (
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
