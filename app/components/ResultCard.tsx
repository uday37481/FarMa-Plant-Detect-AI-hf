"use client"

import { AlertTriangle, CheckCircle, Info, Lightbulb, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DetectionResult } from "@/data/mock-results"

export default function ResultCard({
  result,
  onNewDetection,
}: {
  result: DetectionResult
  onNewDetection: () => void
}) {
  const isHealthy = result.disease.toLowerCase().includes("healthy")

  const colors: Record<DetectionResult["severity"], string> = {
    low: "bg-green-100 text-green-800 border-green-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    high: "bg-red-100 text-red-800 border-red-200",
  }

  const Icon = () => {
    if (result.severity === "high") return <AlertTriangle className="h-5 w-5 text-red-600" />
    if (result.severity === "medium") return <Info className="h-5 w-5 text-yellow-600" />
    return <CheckCircle className="h-5 w-5 text-green-600" />
  }

  return (
    <div className="space-y-6 mb-8">
      <Card className={`border-2 ${isHealthy ? "border-green-200 bg-green-50" : "border-orange-200 bg-orange-50"}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
              <Icon />
              <span className="ml-2">Detection Results</span>
            </CardTitle>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
              {result.confidence}% Confidence
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${isHealthy ? "text-green-700" : "text-red-600"}`}>
              {result.disease}
            </h3>
            <Badge className={`${colors[result.severity]} text-sm px-3 py-1`}>
              {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
            </Badge>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Info className="h-4 w-4 mr-2" />
              Description
            </h4>
            <p className="text-gray-700 leading-relaxed">{result.description}</p>
          </div>

          <div
            className={`p-4 rounded-lg border ${isHealthy ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
          >
            <h4 className={`font-semibold mb-2 flex items-center ${isHealthy ? "text-green-800" : "text-red-800"}`}>
              <Lightbulb className="h-4 w-4 mr-2" />
              {isHealthy ? "Care Recommendations" : "Treatment Plan"}
            </h4>
            <p className={`${isHealthy ? "text-green-700" : "text-red-700"}`}>{result.treatment}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Prevention Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {result.preventionTips.map((tip, i) => (
              <div key={i} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-blue-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button
          onClick={onNewDetection}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Detect Another Plant
        </Button>
      </div>
    </div>
  )
}
