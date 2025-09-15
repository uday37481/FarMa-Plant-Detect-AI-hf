"use client"

import type React from "react"

import { Leaf, Mail, Phone, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Detect", href: "#upload" },
    { name: "Tips", href: "#tips" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
            <div className="flex gap-2">
              <IconBtn label="Facebook">
                <Facebook className="h-4 w-4" />
              </IconBtn>
              <IconBtn label="Twitter/X">
                <Twitter className="h-4 w-4" />
              </IconBtn>
              <IconBtn label="Instagram">
                <Instagram className="h-4 w-4" />
              </IconBtn>
              <IconBtn label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </IconBtn>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-3 text-green-300">Get in Touch</h3>
            <div className="space-y-3 text-sm">
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
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <a href="https://wa.me/15551234567" className="text-green-200 hover:text-white">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-6 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-green-200 text-sm">&copy; {currentYear} FarMA. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-green-200 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function IconBtn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Button
      size="sm"
      variant="outline"
      aria-label={label}
      className="border-green-600 text-green-200 hover:bg-green-700 bg-transparent p-2"
    >
      {children}
    </Button>
  )
}
