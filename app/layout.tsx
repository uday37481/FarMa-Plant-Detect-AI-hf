import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./components/LanguageProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FarMA - AI-Powered Plant Disease Detection",
  description: "Smart crop care with AI-powered plant disease detection and treatment recommendations",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
