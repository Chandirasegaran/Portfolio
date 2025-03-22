"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", ...props }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const savedTheme = localStorage.getItem(storageKey)

    if (savedTheme) {
      setTheme(savedTheme)

      if (savedTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else if (defaultTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

      setTheme(systemTheme)

      if (systemTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }, [defaultTheme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme) => {
      const root = window.document.documentElement

      localStorage.setItem(storageKey, newTheme)

      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

        if (systemTheme === "dark") {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }

        setTheme(systemTheme)
      } else {
        if (newTheme === "dark") {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }

        setTheme(newTheme)
      }
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

