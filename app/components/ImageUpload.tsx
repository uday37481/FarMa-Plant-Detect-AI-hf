"use client"

import type React from "react"
import { useCallback, useState } from "react"
import { Upload, Camera, AlertCircle, CheckCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ResultCard from "./ResultCard"
import { type DetectionResult, MOCK_RESULTS } from "@/data/mock-results"

export default function ImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const simulateAnalysis = useCallback(() => {
    setIsAnalyzing(true)
    setResult(null)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 8
      })
    }, 160)

    // Simulate AI analysis
    setTimeout(() => {
      const random = MOCK_RESULTS[Math.floor(Math.random() * MOCK_RESULTS.length)]
      setResult(random)
      setIsAnalyzing(false)
      clearInterval(interval)
      setUploadProgress(100)
    }, 3000)
  }, [])

  const handleImageUpload = useCallback(
    (file: File) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string)
          simulateAnalysis()
        }
        reader.readAsDataURL(file)
      }
    },
    [simulateAnalysis],
  )

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    if (e.type === "dragleave") setDragActive(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      const file = e.dataTransfer.files?.[0]
      if (file) handleImageUpload(file)
    },
    [handleImageUpload],
  )

  const reset = () => {
    setUploadedImage(null)
    setResult(null)
    setUploadProgress(0)
    setIsAnalyzing(false)
  }

  return (
    <section id="upload" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Disease Detection</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Drag and drop a clear photo of your plant leaf or select from your device. Supported formats: JPG, PNG,
            WebP.
          </p>
        </div>

        <Card className="mb-8 border-2 border-dashed border-green-200 hover:border-green-300 transition-colors">
          <CardContent className="p-8">
            <div
              role="button"
              tabIndex={0}
              aria-label="Image upload dropzone"
              className={`rounded-lg p-8 text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                dragActive
                  ? "border-2 border-green-500 bg-green-50 scale-[1.01]"
                  : "border-2 border-transparent hover:bg-green-50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onKeyDown={(e) => {
                if (e.key === "Enter") document.getElementById("file-upload")?.click()
              }}
            >
              {uploadedImage ? (
                <div className="space-y-6">
                  <div className="relative inline-block">
                    <img
                      src={
                        uploadedImage || "/placeholder.svg?height=256&width=256&query=uploaded%20leaf%20photo%20preview"
                      }
                      alt="Uploaded plant"
                      className="max-w-sm max-h-64 mx-auto rounded-lg shadow-lg border-2 border-green-200"
                    />
                    {isAnalyzing && (
                      <div
                        className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"
                        aria-live="polite"
                      >
                        <div className="text-white text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                          <p className="text-sm">Analyzing...</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {isAnalyzing && (
                    <div className="space-y-2">
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-green-700 text-sm" aria-live="polite">
                        Processing image... {uploadProgress}%
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={reset}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    disabled={isAnalyzing}
                    aria-disabled={isAnalyzing}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Upload Different Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                    <Upload className="h-12 w-12 text-green-600" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Drag and drop your plant image here</h3>
                    <p className="text-green-600 mb-4">or click the button below to browse files</p>
                    <p className="text-sm text-green-500">Max size: 10MB</p>
                  </div>

                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="file-upload"
                      aria-label="Choose file"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file)
                      }}
                    />
                    <Button
                      onClick={() => document.getElementById("file-upload")?.click()}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      Choose Image
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {result && <ResultCard result={result} onNewDetection={reset} />}

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Tips for Better Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
              <Tip text="Use clear, well-lit images" />
              <Tip text="Focus on affected leaf areas" />
              <Tip text="Avoid blur and heavy shadows" />
              <Tip text="Include multiple leaves if possible" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Tip({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-2">
      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </div>
  )
}
