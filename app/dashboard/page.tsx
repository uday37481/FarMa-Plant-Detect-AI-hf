"use client"

import type React from "react"

import { useState } from "react"
import { BarChart3, Activity, Eye, TrendingUp, Users, Calendar, Leaf, Bell, Settings, LogOut } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AIAssistant from "../components/AIAssistant"
import LanguageSwitcher from "../components/LanguageSwitcher"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"
import Link from "next/link"

export default function DashboardPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const commonDiseases = [
    { name: "Leaf Blight", count: 45, percentage: 32, trend: "+12%" },
    { name: "Powdery Mildew", count: 28, percentage: 20, trend: "-5%" },
    { name: "Rust Disease", count: 21, percentage: 15, trend: "+8%" },
    { name: "Bacterial Spot", count: 18, percentage: 13, trend: "-2%" },
    { name: "Mosaic Virus", count: 12, percentage: 8, trend: "+15%" },
  ]

  const cropHealth = [
    { crop: "Tomato", health: 78, scans: 89, trend: "+5%" },
    { crop: "Potato", health: 85, scans: 67, trend: "+12%" },
    { crop: "Corn", health: 92, scans: 54, trend: "-3%" },
    { crop: "Rice", health: 81, scans: 43, trend: "+7%" },
    { crop: "Wheat", health: 88, scans: 38, trend: "+9%" },
  ]

  const totalScans = commonDiseases.reduce((sum, disease) => sum + disease.count, 0)
  const healthyPlants = Math.round(totalScans * 0.73)
  const activeUsers = 1247

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-800">FarMA</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-green-600 font-medium">
                  Home
                </Link>
                <Link href="/dashboard" className="text-green-600 font-semibold border-b-2 border-green-600 pb-4">
                  Dashboard
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right side - Language, Notifications, Profile */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                      <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.analyticsDashboard}</h1>
          <p className="text-gray-600 mt-2">Monitor your crop health and disease detection insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title={t.totalScans}
            value={totalScans.toString()}
            trend="+23%"
            icon={<Eye className="h-6 w-6 text-blue-600" />}
            color="blue"
          />
          <MetricCard
            title={t.healthyPlants}
            value={healthyPlants.toString()}
            trend="+18%"
            icon={<Activity className="h-6 w-6 text-green-600" />}
            color="green"
          />
          <MetricCard
            title="Active Users"
            value={activeUsers.toString()}
            trend="+31%"
            icon={<Users className="h-6 w-6 text-purple-600" />}
            color="purple"
          />
          <MetricCard
            title="This Month"
            value="Dec 2024"
            trend="Current"
            icon={<Calendar className="h-6 w-6 text-orange-600" />}
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Most Common Diseases */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                {t.commonDiseases}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commonDiseases.map((disease, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">{disease.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{disease.count} cases</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            disease.trend.startsWith("+") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                          }`}
                        >
                          {disease.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${disease.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crop Health Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-600" />
                {t.cropHealthSummary}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cropHealth.map((crop, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">{crop.crop}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{crop.health}% healthy</span>
                        <span className="text-xs text-gray-500">({crop.scans})</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            crop.trend.startsWith("+") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {crop.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
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

        {/* Key Insights */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              {t.keyInsights}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightCard
                title="Disease Detection Accuracy"
                value="87.3%"
                description="Average accuracy across all crop types this month"
                trend="up"
              />
              <InsightCard
                title="Early Detection Rate"
                value="94.1%"
                description="Diseases caught in early stages"
                trend="up"
              />
              <InsightCard
                title="Treatment Success"
                value="78.5%"
                description="Successful treatment outcomes reported"
                trend="up"
              />
            </div>
          </CardContent>
        </Card>
      </main>

      <AIAssistant language={language} />
    </div>
  )
}

function MetricCard({
  title,
  value,
  trend,
  icon,
  color,
}: {
  title: string
  value: string
  trend: string
  icon: React.ReactNode
  color: string
}) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
  }

  return (
    <Card className={`${colorClasses[color as keyof typeof colorClasses]} hover:shadow-md transition-shadow`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-green-600 font-medium">{trend} from last month</p>
          </div>
          <div className="bg-white p-3 rounded-full shadow-sm">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function InsightCard({
  title,
  value,
  description,
  trend,
}: {
  title: string
  value: string
  description: string
  trend: "up" | "down"
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <TrendingUp className={`h-4 w-4 ${trend === "up" ? "text-green-600" : "text-red-600"}`} />
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
