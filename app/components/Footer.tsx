"use client"

import { Leaf, Mail, Phone } from "lucide-react"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()
  const links = [
    { name: t.home, href: "#hero" },
    { name: t.detect, href: "#upload" },
    { name: t.tips, href: "#tips" },
    { name: t.about, href: "#about" },
  ]
  const go = (href: string) => document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Leaf className="h-6 w-6 text-green-300" />
              <span className="text-xl font-bold">FarMA</span>
            </div>
            <p className="text-green-200 text-sm mb-4">AI-powered plant disease detection for healthier crops.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-green-200 hover:text-white transition-colors text-sm"
                  >
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a href="mailto:support@farma.com" className="text-green-200 hover:text-white">
                  support@farma.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <a href="tel:+15551234567" className="text-green-200 hover:text-white">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-6 pt-6 text-center">
          <p className="text-green-200 text-sm">
            &copy; {currentYear} FarMA. {t.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  )
}
