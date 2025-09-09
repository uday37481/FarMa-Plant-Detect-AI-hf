"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Language } from "@/data/translations"
import { translations } from "@/data/translations"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactProps {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const isValid = useMemo(
    () => form.name.trim().length > 1 && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 5,
    [form],
  )

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
    setSubmitting(false)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", email: "", subject: "", message: "" })
    }, 2500)
  }

  const faqs = [
    {
      q: "How accurate is the disease detection?",
      a: "Our AI model achieves 85%+ accuracy for common plant diseases, depending on image quality and disease type.",
    },
    {
      q: "What image formats are supported?",
      a: "JPG, PNG, and WebP. Use clear, well-lit images for the best results.",
    },
    {
      q: "Is FarMA free to use?",
      a: "Yes, FarMA is free for farmers and gardeners worldwide.",
    },
    {
      q: "How can I improve detection accuracy?",
      a: "Capture close, sharp photos in good light and include multiple leaves when possible.",
    },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.contactSupport}</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help you make the most of FarMA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  {t.sendMessage}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8" role="status" aria-live="polite">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-600">Thanks for reaching out — we'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-green-800 font-medium">
                          {t.name} *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={onChange("name")}
                          className="mt-1 border-green-200 focus:border-green-500"
                          placeholder="Your full name"
                          required
                          aria-invalid={form.name.trim().length <= 1}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-green-800 font-medium">
                          {t.email} *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={onChange("email")}
                          className="mt-1 border-green-200 focus:border-green-500"
                          placeholder="your.email@example.com"
                          required
                          aria-invalid={!/\S+@\S+\.\S+/.test(form.email)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-green-800 font-medium">
                        {t.subject}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={onChange("subject")}
                        className="mt-1 border-green-200 focus:border-green-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-green-800 font-medium">
                        {t.message} *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={onChange("message")}
                        className="mt-1 border-green-200 focus:border-green-500"
                        placeholder="Tell us how we can help..."
                        required
                        aria-invalid={form.message.trim().length <= 5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isValid || submitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      {submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t.sendMessageBtn}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="mt-8 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">{t.getInTouch}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem icon={<Mail className="h-5 w-5 text-green-600" />} label="Email" value="support@farma.com" />
                <InfoItem icon={<Phone className="h-5 w-5 text-green-600" />} label="Phone" value="+1 (555) 123-4567" />
                <InfoItem
                  icon={<MapPin className="h-5 w-5 text-green-600" />}
                  label="Address"
                  value={"123 Agriculture Tech Blvd\nFarm City, FC 12345"}
                />
              </CardContent>
            </Card>
          </div>

          {/* FAQ + Feedback */}
          <div>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-800 flex items-center">
                  <HelpCircle className="h-6 w-6 mr-2" />
                  {t.faq}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left text-green-800">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-green-700">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Feedback */}
            <Card className="mt-8 bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Help Us Improve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 mb-4">
                  Your feedback helps us make FarMA better. Rate our detection accuracy or share suggestions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                  >
                    👍 Helpful
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                  >
                    👎 Needs Work
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                  >
                    💡 Suggestion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="font-medium text-green-800">{label}</p>
        <p className="text-green-600 whitespace-pre-line">{value}</p>
      </div>
    </div>
  )
}
