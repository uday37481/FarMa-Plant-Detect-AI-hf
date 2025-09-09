export type Severity = "low" | "medium" | "high"

export interface DetectionResult {
  disease: string
  confidence: number
  description: string
  treatment: string
  severity: Severity
  preventionTips: string[]
}

export const MOCK_RESULTS: DetectionResult[] = [
  {
    disease: "Leaf Blight",
    confidence: 87,
    description:
      "A common fungal disease affecting leaves with brown lesions and yellowing. Thrives in humid conditions and spreads quickly without intervention.",
    treatment:
      "Remove infected leaves, improve air circulation, and apply a copper-based fungicide every 7-10 days during humid periods.",
    severity: "medium",
    preventionTips: [
      "Water at soil level; avoid wetting leaves",
      "Space plants for airflow",
      "Sanitize tools between uses",
      "Use preventive fungicide before rainy spells",
    ],
  },
  {
    disease: "Powdery Mildew",
    confidence: 79,
    description:
      "White powdery patches on leaves and stems that reduce photosynthesis and vigor. Often appears in warm, dry conditions with high humidity at night.",
    treatment:
      "Apply sulfur or potassium bicarbonate sprays. Prune crowded areas and increase sunlight exposure where possible.",
    severity: "medium",
    preventionTips: [
      "Choose resistant varieties",
      "Avoid overhead watering late in the day",
      "Remove heavily infected tissue promptly",
      "Rotate crops yearly",
    ],
  },
  {
    disease: "Healthy Plant",
    confidence: 92,
    description: "No notable disease symptoms detected. Leaf color, structure, and texture appear normal.",
    treatment: "Maintain consistent watering, balanced fertilization, and regular monitoring.",
    severity: "low",
    preventionTips: [
      "Keep a weekly inspection routine",
      "Mulch to stabilize moisture and temperature",
      "Fertilize monthly with a balanced NPK",
      "Keep records of care and conditions",
    ],
  },
]
