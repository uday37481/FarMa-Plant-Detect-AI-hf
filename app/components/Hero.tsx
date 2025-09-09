"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

interface HeroProps {
  language: Language
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]
  const start = () => document.getElementById("upload")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Leaf className="h-16 w-16 text-green-600" aria-hidden="true" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">{t.heroTitle}</h1>

          <p className="text-xl text-green-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={start}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.getStarted}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              {t.learnMore}
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Stat label={t.diseasesDetected} value="50+" />
            <Stat label={t.accuracyRate} value="85%" />
            <Stat label={t.available} value="24/7" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-green-800">{value}</div>
      <div className="text-green-600">{label}</div>
    </div>
  )
}
