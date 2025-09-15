"use client"

import type React from "react"
import { useState } from "react"
import { Droplets, Sun, Shield, Leaf, Thermometer, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HealthTip {
  title: string
  description: string
  icon: React.ReactNode
  category: string
  season: string
}

export default function CropHealthTips() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  const healthTips: HealthTip[] = [
    {
      title: "Optimal Watering Schedule",
      description:
        "Water plants early morning (6-8 AM) to reduce fungal growth and allow plants to absorb moisture before heat peaks.",
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      category: "Watering",
      season: "All Seasons",
    },
    {
      title: "Sunlight Management",
      description:
        "Most crops need 6-8 hours of direct sunlight daily. Provide shade cloth if leaves wilt during peak hours.",
      icon: <Sun className="h-8 w-8 text-yellow-600" />,
      category: "Light",
      season: "Summer",
    },
    {
      title: "Disease Prevention",
      description: "Inspect undersides of leaves weekly. Look for discoloration, spots, or unusual growth patterns.",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      category: "Prevention",
      season: "All Seasons",
    },
    {
      title: "Proper Plant Spacing",
      description: "Ensure adequate spacing for air circulation to reduce humidity and disease risk.",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      category: "Spacing",
      season: "Planting",
    },
    {
      title: "Temperature Control",
      description:
        "Most vegetables thrive between 65-75°F. Use mulch to regulate soil temperature and retain moisture.",
      icon: <Thermometer className="h-8 w-8 text-red-600" />,
      category: "Temperature",
      season: "All Seasons",
    },
    {
      title: "Seasonal Care Planning",
      description: "Adjust care based on seasons: growth, stress, harvest prep, and protection.",
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      category: "Planning",
      season: "All Seasons",
    },
  ]

  const nextTip = () => setCurrentTipIndex((p) => (p + 1) % healthTips.length)
  const prevTip = () => setCurrentTipIndex((p) => (p - 1 + healthTips.length) % healthTips.length)

  return (
    <section id="tips" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Crop Health Tips</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Featured tips and best practices to keep your plants healthy and disease-free.
          </p>
        </div>

        {/* Featured Tip Carousel */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-green-800">Featured Tip</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTip}
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    aria-label="Previous tip"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTip}
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    aria-label="Next tip"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-full shadow-md">{healthTips[currentTipIndex].icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-green-800">{healthTips[currentTipIndex].title}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {healthTips[currentTipIndex].category}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {healthTips[currentTipIndex].season}
                    </span>
                  </div>
                  <p className="text-green-700 leading-relaxed">{healthTips[currentTipIndex].description}</p>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2" aria-label="Tip progress" role="tablist">
                {healthTips.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTipIndex(i)}
                    role="tab"
                    aria-selected={i === currentTipIndex}
                    className={`w-3 h-3 rounded-full transition-colors ${i === currentTipIndex ? "bg-green-600" : "bg-green-200"}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
