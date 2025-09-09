"use client"

import { BarChart3, Activity, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

interface DashboardProps {
  language: Language
}

export default function Dashboard({ language }: DashboardProps) {
  const t = translations[language]

  const commonDiseases = [
    { name: "Leaf Blight", count: 45, percentage: 32 },
    { name: "Powdery Mildew", count: 28, percentage: 20 },
    { name: "Rust Disease", count: 21, percentage: 15 },
    { name: "Bacterial Spot", count: 18, percentage: 13 },
    { name: "Mosaic Virus", count: 12, percentage: 8 },
  ]

  const cropHealth = [
    { crop: "Tomato", health: 78, scans: 89 },
    { crop: "Potato", health: 85, scans: 67 },
    { crop: "Corn", health: 92, scans: 54 },
    { crop: "Rice", health: 81, scans: 43 },
    { crop: "Wheat", health: 88, scans: 38 },
  ]

  const totalScans = commonDiseases.reduce((sum, disease) => sum + disease.count, 0)

  return (
    <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.analyticsDashboard}</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Key insights from our plant disease detection system.
          </p>
        </div>

        {/* Total Scans Summary */}
        <div className="mb-8">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Eye className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-green-800">{totalScans}</span>
              </div>
              <p className="text-green-600 font-medium">{t.totalScans} This Month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Most Common Diseases */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                {t.commonDiseases}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commonDiseases.map((disease, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-800">{disease.name}</span>
                      <span className="text-sm text-green-600">{disease.count} cases</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${disease.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crop Health Summary */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                {t.cropHealthSummary}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cropHealth.map((crop, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-800">{crop.crop}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-green-600">{crop.health}% healthy</span>
                        <span className="text-xs text-gray-500">({crop.scans})</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          crop.health >= 85 ? "bg-green-500" : crop.health >= 70 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${crop.health}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
