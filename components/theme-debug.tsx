"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md z-50 text-xs">
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div className="flex gap-2 mt-1">
        <button onClick={() => setTheme("light")} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
          Light
        </button>
        <button onClick={() => setTheme("dark")} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
          Dark
        </button>
      </div>
    </div>
  )
}
