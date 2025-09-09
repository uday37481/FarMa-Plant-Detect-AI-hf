"use client"

import { Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { crops } from "@/data/crops"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

interface AboutProps {
  language: Language
}

export default function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.aboutFarma}</h2>
          <p className="text-lg text-green-600 max-w-3xl mx-auto leading-relaxed">{t.aboutDescription}</p>
        </div>

        {/* Supported Crops with Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">{t.supportedCrops}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {crops.map((crop) => (
              <Card key={crop.name} className="group hover:shadow-md transition-all border-green-100 overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={crop.image || "/placeholder.svg"}
                    alt={`${crop.name} crop`}
                    className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-green-800 mb-1">{crop.name}</h4>
                    <p className="text-green-600 text-sm">{crop.diseases} diseases</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology & Research */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800 text-center flex items-center justify-center">
              <Award className="h-6 w-6 mr-2" />
              {t.technologyResearch}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Convolutional Neural Networks (CNN)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Transfer Learning with ResNet
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Data augmentation for robustness
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Continuous model updates
                </li>
              </ul>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Field-tested with real conditions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Collaboration with agri researchers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Regular validation and QA
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Open-source contributions
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
