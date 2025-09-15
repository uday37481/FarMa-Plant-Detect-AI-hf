"use client"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Language } from "@/data/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

const languages = [
  { code: "en" as Language, short: "ENG" },
  { code: "hi" as Language, short: "HIN" },
  { code: "mr" as Language, short: "MAR" },
]

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const currentIndex = languages.findIndex((lang) => lang.code === currentLanguage)
  const currentLang = languages[currentIndex] || languages[0]

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % languages.length
    onLanguageChange(languages[nextIndex].code)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className="text-green-700 hover:text-green-900 hover:bg-green-50 px-2 py-1 h-8"
      title="Switch Language"
    >
      <Globe className="h-4 w-4 mr-1" />
      <span className="text-xs font-medium">{currentLang.short}</span>
    </Button>
  )
}
