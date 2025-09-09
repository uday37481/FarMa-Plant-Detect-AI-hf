export type Language = "en" | "hi" | "mr"

export interface Translations {
  // Navigation
  home: string
  detect: string
  tips: string
  about: string
  contact: string
  dashboard: string

  // Hero Section
  heroTitle: string
  heroDescription: string
  getStarted: string
  learnMore: string

  // Stats
  diseasesDetected: string
  accuracyRate: string
  available: string

  // Upload Section
  diseaseDetection: string
  uploadDescription: string
  dragAndDrop: string
  chooseImage: string
  analyzing: string
  uploadDifferent: string
  tipsForBetter: string

  // Results
  detectionResults: string
  confidence: string
  description: string
  treatment: string
  preventionTips: string
  detectAnother: string

  // Tips Section
  cropHealthTips: string
  featuredTip: string

  // About Section
  aboutFarma: string
  aboutDescription: string
  supportedCrops: string
  technologyResearch: string

  // Contact Section
  contactSupport: string
  sendMessage: string
  name: string
  email: string
  subject: string
  message: string
  sendMessageBtn: string
  faq: string

  // Dashboard
  analyticsDashboard: string
  totalScans: string
  healthyPlants: string
  commonDiseases: string
  cropHealthSummary: string
  keyInsights: string

  // Footer
  getInTouch: string
  quickLinks: string
  allRightsReserved: string
}

export const translations: Record<Language, Translations> = {
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
    totalScans: "Total Scans",
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
    totalScans: "कुल स्कैन",
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
      "FarMA पानांच्या फोटोंवरून थेट अचूक वनस्पती रोग ओळखण्यासाठी AI आणि आधुनिक संगणक दृष्टी वापरते. आमचे ध्येय उत्पादकांना जलद, कार्यात्मक अंतर्दृष्टीसह सक्षम करणे आहे.",
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
    totalScans: "एकूण स्कॅन",
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
