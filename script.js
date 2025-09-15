// Global State
let currentLanguage = localStorage.getItem("farma-language") || "en"
let currentTipIndex = 0
let isAnalyzing = false
let analysisProgress = 0

// Translation Data
const translations = {
  en: {
    // Navigation
    home: "Home",
    detect: "Detect",
    tips: "Tips",
    about: "About",
    contact: "Contact",
    dashboard: "Dashboard",

    // Hero Section
    heroTitle: "Smart Crop Care AI",
    heroDescription:
      "Upload a clear photo of your plant to receive instant AI-powered diagnosis and actionable treatment recommendations. Keep your crops healthy with FarMA.",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // Stats
    diseasesDetected: "Diseases Detected",
    accuracyRate: "Accuracy Rate",
    available: "Available",

    // Upload Section
    diseaseDetection: "Disease Detection",
    uploadDescription:
      "Drag and drop a clear photo of your plant leaf or select from your device. Supported formats: JPG, PNG, WebP.",
    dragAndDrop: "Drag and drop your plant image here",
    chooseImage: "Choose Image",
    analyzing: "Analyzing...",
    uploadDifferent: "Upload Different Image",
    tipsForBetter: "Tips for Better Results",

    // Results
    detectionResults: "Detection Results",
    confidence: "Confidence",
    description: "Description",
    treatment: "Treatment Plan",
    preventionTips: "Prevention Tips",
    detectAnother: "Detect Another Plant",

    // Tips Section
    cropHealthTips: "Crop Health Tips",
    featuredTip: "Featured Tip",

    // About Section
    aboutFarma: "About FarMA",
    aboutDescription:
      "FarMA leverages AI and modern computer vision to provide accurate plant disease detection directly from leaf photos. Our goal is to empower growers with fast, actionable insights.",
    supportedCrops: "Supported Crops & Diseases",
    technologyResearch: "Technology & Research",

    // Contact Section
    contactSupport: "Contact & Support",
    sendMessage: "Send us a Message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessageBtn: "Send Message",
    faq: "Frequently Asked Questions",

    // Dashboard
    analyticsDashboard: "Analytics Dashboard",
    totalScans: "Total Scans This Month",
    healthyPlants: "Healthy Plants",
    commonDiseases: "Most Common Diseases",
    cropHealthSummary: "Crop Health Summary",
    keyInsights: "Key Insights",

    // Footer
    getInTouch: "Get in Touch",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved",
  },

  hi: {
    // Navigation
    home: "होम",
    detect: "पहचान",
    tips: "सुझाव",
    about: "हमारे बारे में",
    contact: "संपर्क",
    dashboard: "डैशबोर्ड",

    // Hero Section
    heroTitle: "स्मार्ट फसल देखभाल AI",
    heroDescription:
      "तुरंत AI-संचालित निदान और कार्यात्मक उपचार सुझाव प्राप्त करने के लिए अपने पौधे की स्पष्ट तस्वीर अपलोड करें। FarMA के साथ अपनी फसलों को स्वस्थ रखें।",
    getStarted: "शुरू करें",
    learnMore: "और जानें",

    // Stats
    diseasesDetected: "रोग पहचाने गए",
    accuracyRate: "सटीकता दर",
    available: "उपलब्ध",

    // Upload Section
    diseaseDetection: "रोग पहचान",
    uploadDescription: "अपने पौधे की पत्ती की स्पष्ट तस्वीर खींचकर छोड़ें या अपने डिवाइस से चुनें। समर्थित प्रारूप: JPG, PNG, WebP।",
    dragAndDrop: "अपने पौधे की छवि यहाँ खींचें और छोड़ें",
    chooseImage: "छवि चुनें",
    analyzing: "विश्लेषण कर रहे हैं...",
    uploadDifferent: "अलग छवि अपलोड करें",
    tipsForBetter: "बेहतर परिणामों के लिए सुझाव",

    // Results
    detectionResults: "पहचान परिणाम",
    confidence: "विश्वास",
    description: "विवरण",
    treatment: "उपचार योजना",
    preventionTips: "रोकथाम के सुझाव",
    detectAnother: "दूसरे पौधे की पहचान करें",

    // Tips Section
    cropHealthTips: "फसल स्वास्थ्य सुझाव",
    featuredTip: "विशेष सुझाव",

    // About Section
    aboutFarma: "FarMA के बारे में",
    aboutDescription:
      "FarMA पत्ती की तस्वीरों से सीधे सटीक पौधे की बीमारी का पता लगाने के लिए AI और आधुनिक कंप्यूटर विज़न का लाभ उठाता है। हमारा लक्ष्य उत्पादकों को तेज़, कार्यात्मक अंतर्दृष्टि के साथ सशक्त बनाना है।",
    supportedCrops: "समर्थित फसलें और रोग",
    technologyResearch: "प्रौद्योगिकी और अनुसंधान",

    // Contact Section
    contactSupport: "संपर्क और सहायता",
    sendMessage: "हमें संदेश भेजें",
    name: "नाम",
    email: "ईमेल",
    subject: "विषय",
    message: "संदेश",
    sendMessageBtn: "संदेश भेजें",
    faq: "अक्सर पूछे जाने वाले प्रश्न",

    // Dashboard
    analyticsDashboard: "एनालिटिक्स डैशबोर्ड",
    totalScans: "इस महीने कुल स्कैन",
    healthyPlants: "स्वस्थ पौधे",
    commonDiseases: "सबसे आम रोग",
    cropHealthSummary: "फसल स्वास्थ्य सारांश",
    keyInsights: "मुख्य अंतर्दृष्टि",

    // Footer
    getInTouch: "संपर्क में रहें",
    quickLinks: "त्वरित लिंक",
    allRightsReserved: "सभी अधिकार सुरक्षित",
  },

  mr: {
    // Navigation
    home: "मुख्यपृष्ठ",
    detect: "ओळख",
    tips: "सल्ले",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    dashboard: "डॅशबोर्ड",

    // Hero Section
    heroTitle: "स्मार्ट पीक काळजी AI",
    heroDescription:
      "तत्काळ AI-चालित निदान आणि कार्यात्मक उपचार शिफारसी मिळविण्यासाठी आपल्या वनस्पतीचा स्पष्ट फोटो अपलोड करा. FarMA सह आपली पिके निरोगी ठेवा.",
    getStarted: "सुरुवात करा",
    learnMore: "अधिक जाणा",

    // Stats
    diseasesDetected: "रोग ओळखले",
    accuracyRate: "अचूकता दर",
    available: "उपलब्ध",

    // Upload Section
    diseaseDetection: "रोग ओळख",
    uploadDescription:
      "आपल्या वनस्पतीच्या पानाचा स्पष्ट फोटो ड्रॅग आणि ड्रॉप करा किंवा आपल्या डिव्हाइसवरून निवडा. समर्थित स्वरूप: JPG, PNG, WebP.",
    dragAndDrop: "आपली वनस्पती प्रतिमा येथे ड्रॅग आणि ड्रॉप करा",
    chooseImage: "प्रतिमा निवडा",
    analyzing: "विश्लेषण करत आहे...",
    uploadDifferent: "वेगळी प्रतिमा अपलोड करा",
    tipsForBetter: "चांगल्या परिणामांसाठी सल्ले",

    // Results
    detectionResults: "ओळख परिणाम",
    confidence: "विश्वास",
    description: "वर्णन",
    treatment: "उपचार योजना",
    preventionTips: "प्रतिबंधक सल्ले",
    detectAnother: "दुसरी वनस्पती ओळखा",

    // Tips Section
    cropHealthTips: "पीक आरोग्य सल्ले",
    featuredTip: "वैशिष्ट्यीकृत सल्ला",

    // About Section
    aboutFarma: "FarMA बद्दल",
    aboutDescription:
      "FarMA पानांच्या फोटोंवरून थेट अचूक वनस्पती रोग ओळखण्यासाठी AI आणि आधुनिक संगणक दृष्टी वापरते. आमचे ध्येय उत्पादकांना जलद, कार्यात्मक अंतर्दृष्टीसह सक्षम करणे आहे।",
    supportedCrops: "समर्थित पिके आणि रोग",
    technologyResearch: "तंत्रज्ञान आणि संशोधन",

    // Contact Section
    contactSupport: "संपर्क आणि सहाय्य",
    sendMessage: "आम्हाला संदेश पाठवा",
    name: "नाव",
    email: "ईमेल",
    subject: "विषय",
    message: "संदेश",
    sendMessageBtn: "संदेश पाठवा",
    faq: "वारंवार विचारले जाणारे प्रश्न",

    // Dashboard
    analyticsDashboard: "विश्लेषण डॅशबोर्ड",
    totalScans: "या महिन्यात एकूण स्कॅन",
    healthyPlants: "निरोगी वनस्पती",
    commonDiseases: "सर्वात सामान्य रोग",
    cropHealthSummary: "पीक आरोग्य सारांश",
    keyInsights: "मुख्य अंतर्दृष्टी",

    // Footer
    getInTouch: "संपर्कात रहा",
    quickLinks: "द्रुत दुवे",
    allRightsReserved: "सर्व हक्क राखीव",
  },
}

// Mock Data
const mockResults = [
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

const healthTips = [
  {
    title: "Optimal Watering Schedule",
    description:
      "Water plants early morning (6-8 AM) to reduce fungal growth and allow plants to absorb moisture before heat peaks.",
    icon: "droplets",
    category: "Watering",
    season: "All Seasons",
  },
  {
    title: "Sunlight Management",
    description:
      "Most crops need 6-8 hours of direct sunlight daily. Provide shade cloth if leaves wilt during peak hours.",
    icon: "sun",
    category: "Light",
    season: "Summer",
  },
  {
    title: "Disease Prevention",
    description: "Inspect undersides of leaves weekly. Look for discoloration, spots, or unusual growth patterns.",
    icon: "shield",
    category: "Prevention",
    season: "All Seasons",
  },
  {
    title: "Proper Plant Spacing",
    description: "Ensure adequate spacing for air circulation to reduce humidity and disease risk.",
    icon: "leaf",
    category: "Spacing",
    season: "Planting",
  },
  {
    title: "Temperature Control",
    description: "Most vegetables thrive between 65-75°F. Use mulch to regulate soil temperature and retain moisture.",
    icon: "thermometer",
    category: "Temperature",
    season: "All Seasons",
  },
  {
    title: "Seasonal Care Planning",
    description: "Adjust care based on seasons: growth, stress, harvest prep, and protection.",
    icon: "calendar",
    category: "Planning",
    season: "All Seasons",
  },
]

const crops = [
  {
    name: "Tomato",
    diseases: 12,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=200&fit=crop",
  },
  {
    name: "Potato",
    diseases: 8,
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=200&h=200&fit=crop",
  },
  {
    name: "Corn",
    diseases: 6,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&h=200&fit=crop",
  },
  {
    name: "Rice",
    diseases: 10,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=200&h=200&fit=crop",
  },
  {
    name: "Wheat",
    diseases: 7,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop",
  },
  {
    name: "Apple",
    diseases: 5,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop",
  },
  {
    name: "Grape",
    diseases: 4,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&h=200&fit=crop",
  },
  {
    name: "Onion",
    diseases: 6,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=200&fit=crop",
  },
]

const diseaseData = [
  { name: "Leaf Blight", count: 45, percentage: 32 },
  { name: "Powdery Mildew", count: 28, percentage: 20 },
  { name: "Rust Disease", count: 21, percentage: 15 },
  { name: "Bacterial Spot", count: 18, percentage: 13 },
  { name: "Mosaic Virus", count: 12, percentage: 8 },
]

const cropHealthData = [
  { crop: "Tomato", health: 78, scans: 89 },
  { crop: "Potato", health: 85, scans: 67 },
  { crop: "Corn", health: 92, scans: 54 },
  { crop: "Rice", health: 81, scans: 43 },
  { crop: "Wheat", health: 88, scans: 38 },
]

// Language System
function updateLanguage() {
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[currentLanguage][key]
      } else {
        element.textContent = translations[currentLanguage][key]
      }
    }
  })

  // Update language switcher
  const languageCode = document.getElementById("languageCode")
  if (languageCode) {
    const codes = { en: "ENG", hi: "HIN", mr: "MAR" }
    languageCode.textContent = codes[currentLanguage] || "ENG"
  }

  localStorage.setItem("farma-language", currentLanguage)
}

function switchLanguage() {
  const languages = ["en", "hi", "mr"]
  const currentIndex = languages.indexOf(currentLanguage)
  const nextIndex = (currentIndex + 1) % languages.length
  currentLanguage = languages[nextIndex]
  updateLanguage()
}

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobileMenu")
  const toggle = document.getElementById("mobileMenuToggle")
  if (mobileMenu && toggle) {
    mobileMenu.classList.remove("open")
    toggle.classList.remove("active")
  }
}

// Mobile Menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const toggle = document.getElementById("mobileMenuToggle")

  if (mobileMenu && toggle) {
    mobileMenu.classList.toggle("open")
    toggle.classList.toggle("active")
  }
}

// Header Scroll Effect
function handleScroll() {
  const header = document.getElementById("header")
  if (header) {
    if (window.scrollY > 8) {
      header.classList.add("elevated")
    } else {
      header.classList.remove("elevated")
    }
  }
}

// Image Upload Functions
function setupImageUpload() {
  const fileInput = document.getElementById("fileInput")
  const uploadZone = document.getElementById("uploadZone")

  if (fileInput) {
    fileInput.addEventListener("change", handleFileSelect)
  }

  if (uploadZone) {
    uploadZone.addEventListener("dragover", handleDragOver)
    uploadZone.addEventListener("dragenter", handleDragEnter)
    uploadZone.addEventListener("dragleave", handleDragLeave)
    uploadZone.addEventListener("drop", handleDrop)
  }
}

function handleFileSelect(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith("image/")) {
    processImageFile(file)
  }
}

function handleDragOver(event) {
  event.preventDefault()
  event.stopPropagation()
}

function handleDragEnter(event) {
  event.preventDefault()
  event.stopPropagation()
  document.getElementById("uploadZone").classList.add("dragover")
}

function handleDragLeave(event) {
  event.preventDefault()
  event.stopPropagation()
  document.getElementById("uploadZone").classList.remove("dragover")
}

function handleDrop(event) {
  event.preventDefault()
  event.stopPropagation()
  document.getElementById("uploadZone").classList.remove("dragover")

  const files = event.dataTransfer.files
  if (files.length > 0 && files[0].type.startsWith("image/")) {
    processImageFile(files[0])
  }
}

function processImageFile(file) {
  const reader = new FileReader()
  reader.onload = (e) => {
    showImagePreview(e.target.result)
    simulateAnalysis()
  }
  reader.readAsDataURL(file)
}

function showImagePreview(imageSrc) {
  const uploadContent = document.getElementById("uploadContent")
  const imagePreview = document.getElementById("imagePreview")
  const uploadedImage = document.getElementById("uploadedImage")

  if (uploadContent && imagePreview && uploadedImage) {
    uploadedImage.src = imageSrc
    uploadContent.hidden = true
    imagePreview.hidden = false
  }
}

function simulateAnalysis() {
  if (isAnalyzing) return

  isAnalyzing = true
  analysisProgress = 0

  const overlay = document.getElementById("analysisOverlay")
  const progressContainer = document.getElementById("progressContainer")
  const progressFill = document.getElementById("progressFill")
  const progressText = document.getElementById("progressText")
  const resetBtn = document.getElementById("resetBtn")

  if (overlay) overlay.hidden = false
  if (progressContainer) progressContainer.hidden = false
  if (resetBtn) resetBtn.disabled = true

  // Simulate progress
  const progressInterval = setInterval(() => {
    analysisProgress += 8

    if (progressFill) {
      progressFill.style.width = analysisProgress + "%"
    }

    if (progressText) {
      progressText.textContent = `Processing image... ${analysisProgress}%`
    }

    if (analysisProgress >= 100) {
      clearInterval(progressInterval)
      completeAnalysis()
    }
  }, 160)
}

function completeAnalysis() {
  setTimeout(() => {
    const overlay = document.getElementById("analysisOverlay")
    const progressContainer = document.getElementById("progressContainer")
    const resetBtn = document.getElementById("resetBtn")

    if (overlay) overlay.hidden = true
    if (progressContainer) progressContainer.hidden = true
    if (resetBtn) resetBtn.disabled = false

    // Show random result
    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)]
    showResult(randomResult)

    isAnalyzing = false
  }, 1000)
}

function showResult(result) {
  const resultCard = document.getElementById("resultCard")
  if (!resultCard) return

  const isHealthy = result.disease.toLowerCase().includes("healthy")
  const severityClass = `severity-${result.severity}`
  const cardClass = isHealthy ? "healthy-result" : "disease-result"

  resultCard.innerHTML = `
        <div class="card ${cardClass}">
            <div class="card-content">
                <div class="result-header">
                    <div class="result-title">
                        ${getSeverityIcon(result.severity)}
                        <span>Detection Results</span>
                    </div>
                    <div class="confidence-badge">${result.confidence}% Confidence</div>
                </div>
                
                <div class="disease-info">
                    <h3 style="color: ${isHealthy ? "#15803d" : "#dc2626"}">${result.disease}</h3>
                    <span class="severity-badge ${severityClass}">${result.severity} Severity</span>
                </div>
                
                <div class="result-section">
                    <h4>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 8v4"/>
                            <path d="m12 16 .01 0"/>
                        </svg>
                        Description
                    </h4>
                    <p>${result.description}</p>
                </div>
                
                <div class="result-section ${cardClass}">
                    <h4>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6"/>
                        </svg>
                        ${isHealthy ? "Care Recommendations" : "Treatment Plan"}
                    </h4>
                    <p>${result.treatment}</p>
                </div>
                
                <div class="result-section prevention-section">
                    <h4>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <path d="m9 11 3 3L22 4"/>
                        </svg>
                        Prevention Tips
                    </h4>
                    <div class="prevention-list">
                        ${result.preventionTips
                          .map(
                            (tip) => `
                            <div class="prevention-item">
                                <span>${tip}</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="resetUpload()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                            <path d="M21 3v5h-5"/>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                            <path d="M3 21v-5h5"/>
                        </svg>
                        Detect Another Plant
                    </button>
                </div>
            </div>
        </div>
    `

  resultCard.hidden = false
  resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" })
}

function getSeverityIcon(severity) {
  switch (severity) {
    case "high":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #dc2626;">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/>
                        <path d="m12 17 .01 0"/>
                    </svg>`
    case "medium":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #eab308;">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v4"/>
                        <path d="m12 16 .01 0"/>
                    </svg>`
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #22c55e;">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="m9 11 3 3L22 4"/>
                    </svg>`
  }
}

function resetUpload() {
  const uploadContent = document.getElementById("uploadContent")
  const imagePreview = document.getElementById("imagePreview")
  const resultCard = document.getElementById("resultCard")
  const fileInput = document.getElementById("fileInput")

  if (uploadContent) uploadContent.hidden = false
  if (imagePreview) imagePreview.hidden = true
  if (resultCard) resultCard.hidden = true
  if (fileInput) fileInput.value = ""

  analysisProgress = 0
  isAnalyzing = false
}

// Tips Carousel
function setupTipsCarousel() {
  updateTipDisplay()

  const prevBtn = document.getElementById("prevTip")
  const nextBtn = document.getElementById("nextTip")

  if (prevBtn)
    prevBtn.addEventListener("click", () => {
      currentTipIndex = (currentTipIndex - 1 + healthTips.length) % healthTips.length
      updateTipDisplay()
    })

  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      currentTipIndex = (currentTipIndex + 1) % healthTips.length
      updateTipDisplay()
    })
}

function updateTipDisplay() {
  const tipContent = document.getElementById("tipContent")
  const tipIndicators = document.getElementById("tipIndicators")

  if (!tipContent || !healthTips[currentTipIndex]) return

  const tip = healthTips[currentTipIndex]

  tipContent.innerHTML = `
        <div class="tip-icon-container">
            ${getTipIcon(tip.icon)}
        </div>
        <div class="tip-text">
            <div class="tip-title">
                <h4>${tip.title}</h4>
                <span class="tip-category">${tip.category}</span>
                <span class="tip-season">${tip.season}</span>
            </div>
            <p class="tip-description">${tip.description}</p>
        </div>
    `

  // Update indicators
  if (tipIndicators) {
    tipIndicators.innerHTML = healthTips
      .map(
        (_, index) => `
            <button class="tip-indicator ${index === currentTipIndex ? "active" : ""}" 
                    onclick="setTipIndex(${index})"></button>
        `,
      )
      .join("")
  }
}

function setTipIndex(index) {
  currentTipIndex = index
  updateTipDisplay()
}

function getTipIcon(iconType) {
  const icons = {
    droplets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #2563eb;">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #eab308;">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #22c55e;">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #059669;">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>`,
    thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #dc2626;">
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
                    </svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color: #7c3aed;">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>`,
  }

  return icons[iconType] || icons.leaf
}

// Dashboard Charts
function setupDashboard() {
  setupDiseaseChart()
  setupCropHealthChart()
}

function setupDiseaseChart() {
  const container = document.getElementById("diseaseChart")
  if (!container) return

  container.innerHTML = diseaseData
    .map(
      (disease) => `
        <div class="chart-item">
            <div class="chart-label">
                <span class="chart-name">${disease.name}</span>
                <span class="chart-value">${disease.count} cases</span>
            </div>
            <div class="chart-bar">
                <div class="chart-fill green" style="width: ${disease.percentage}%"></div>
            </div>
        </div>
    `,
    )
    .join("")
}

function setupCropHealthChart() {
  const container = document.getElementById("cropHealthChart")
  if (!container) return

  container.innerHTML = cropHealthData
    .map(
      (crop) => `
        <div class="chart-item">
            <div class="chart-label">
                <span class="chart-name">${crop.crop}</span>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="chart-value">${crop.health}% healthy</span>
                    <span style="font-size: 0.75rem; color: #6b7280;">(${crop.scans})</span>
                </div>
            </div>
            <div class="chart-bar">
                <div class="chart-fill ${getHealthClass(crop.health)}" style="width: ${crop.health}%"></div>
            </div>
        </div>
    `,
    )
    .join("")
}

function getHealthClass(health) {
  if (health >= 85) return "health-good"
  if (health >= 70) return "health-fair"
  return "health-poor"
}

// About Section - Crops Grid
function setupCropsGrid() {
  const container = document.getElementById("cropsGrid")
  if (!container) return

  container.innerHTML = crops
    .map(
      (crop) => `
        <div class="crop-card">
            <img src="${crop.image}" alt="${crop.name} crop" class="crop-image" />
            <div class="crop-info">
                <div class="crop-name">${crop.name}</div>
                <div class="crop-diseases">${crop.diseases} diseases</div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Contact Form
function setupContactForm() {
  const form = document.getElementById("contactForm")
  if (!form) return

  form.addEventListener("submit", handleContactSubmit)
}

function handleContactSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Basic validation
  if (!name || name.trim().length < 2) {
    alert("Please enter a valid name")
    return
  }

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email")
    return
  }

  if (!message || message.trim().length < 5) {
    alert("Please enter a message")
    return
  }

  // Simulate form submission
  const form = document.getElementById("contactForm")
  const successDiv = document.getElementById("formSuccess")

  if (form && successDiv) {
    form.hidden = true
    successDiv.hidden = false

    // Reset after 3 seconds
    setTimeout(() => {
      form.hidden = false
      successDiv.hidden = true
      form.reset()
    }, 3000)
  }
}

// FAQ Accordion
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open")

        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("open")
          }
        })

        // Toggle current item
        item.classList.toggle("open", !isOpen)
      })
    }
  })
}

// Fade-in Animation
function setupFadeInAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Add fade-in class to sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    section.classList.add("fade-in")
    section.style.transitionDelay = `${index * 0.1}s`
    observer.observe(section)
  })
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElement = document.getElementById("currentYear")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Setup all functionality
  updateLanguage()
  setupImageUpload()
  setupTipsCarousel()
  setupDashboard()
  setupCropsGrid()
  setupContactForm()
  setupFAQ()
  setupFadeInAnimation()

  // Event listeners
  window.addEventListener("scroll", handleScroll)

  const languageSwitcher = document.getElementById("languageSwitcher")
  if (languageSwitcher) {
    languageSwitcher.addEventListener("click", switchLanguage)
  }

  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu)
  }
})
