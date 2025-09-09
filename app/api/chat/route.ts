import { OpenAI } from "openai"
import { type NextRequest, NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are FarMA AI Assistant, an expert agricultural advisor specializing in plant disease detection and crop health management. You help farmers and gardeners with:

1. Plant disease identification and treatment
2. Crop health recommendations
3. Agricultural best practices
4. Pest management strategies
5. Seasonal farming advice
6. Soil and nutrition guidance

Keep responses helpful, practical, and farmer-friendly. Use simple language and provide actionable advice. If asked about topics outside agriculture, politely redirect to farming-related topics.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const reply =
      completion.choices[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("OpenAI API error:", error)
    return NextResponse.json({ error: "Failed to get response from AI assistant" }, { status: 500 })
  }
}
