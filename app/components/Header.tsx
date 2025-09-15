"use client"

import { useEffect, useState } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./LanguageSwitcher"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

const nav = [
  { id: "hero", label: "home" },
  { id: "upload", label: "detect" },
  { id: "tips", label: "tips" },
  { id: "dashboard", label: "dashboard" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
]

interface HeaderProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [elev, setElev] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-green-100 transition-shadow ${elev ? "shadow-sm" : ""}`}
      role="banner"
      aria-label="Site Header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="flex items-center space-x-2"
          aria-label="FarMA Home"
          title="FarMA Home"
        >
          <Leaf className="h-8 w-8 text-green-600" aria-hidden="true" />
          <span className="text-2xl font-bold text-green-800">FarMA</span>
        </button>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex gap-8" aria-label="Primary">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-green-700 hover:text-green-900 font-medium transition-colors"
              >
                {t[n.label as keyof typeof t]}
              </button>
            ))}
          </nav>

          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
              className="text-green-700"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 space-y-2" aria-label="Mobile Primary">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="w-full text-left px-3 py-2 rounded-md font-medium text-green-700 hover:bg-green-50"
            >
              {t[n.label as keyof typeof t]}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
