"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AIAssistant from "../components/AIAssistant"
import Contact from "../components/Contact"
import type { Language } from "@/data/translations"

export default function ContactPage() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="py-8">
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <AIAssistant language={language} />
    </div>
  )
}
