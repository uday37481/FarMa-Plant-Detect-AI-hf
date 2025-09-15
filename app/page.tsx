"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ImageUpload from "./components/ImageUpload"
import CropHealthTips from "./components/CropHealthTips"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FadeIn from "./components/fade-in"
import type { Language } from "@/data/translations"

export default function App() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <FadeIn delay={0.05}>
          <Hero language={language} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ImageUpload language={language} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <CropHealthTips language={language} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Dashboard language={language} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <About language={language} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Contact language={language} />
        </FadeIn>
      </main>
      <Footer language={language} />
    </div>
  )
}
