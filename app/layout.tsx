import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bernard Jezua Tandang",
  description: "Crafting stellar user experiences through frontend development and UI/UX design.",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${inter.variable} font-sans bg-bern-dark text-white`}>
        <Suspense fallback={null}>
            {children}
            <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
