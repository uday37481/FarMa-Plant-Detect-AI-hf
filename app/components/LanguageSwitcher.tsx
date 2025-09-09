"use client"

import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Language } from "@/data/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

const languages = [
  { code: "en" as Language, name: "English", short: "ENG", flag: "🇺🇸" },
  { code: "hi" as Language, name: "हिंदी", short: "HIN", flag: "🇮🇳" },
  { code: "mr" as Language, name: "मराठी", short: "MAR", flag: "🇮🇳" },
]

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-green-700 hover:text-green-900 hover:bg-green-50 px-3 py-2 h-9"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{currentLang.short}</span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onLanguageChange(language.code)}
            className={`flex items-center space-x-3 cursor-pointer ${
              currentLanguage === language.code ? "bg-green-50 text-green-900" : ""
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <div className="flex-1">
              <div className="font-medium">{language.name}</div>
              <div className="text-xs text-gray-500">{language.short}</div>
            </div>
            {currentLanguage === language.code && <div className="w-2 h-2 bg-green-600 rounded-full" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
