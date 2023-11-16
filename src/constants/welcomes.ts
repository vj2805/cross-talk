import type { Language } from "@/types/Language"

const WELCOMES: Record<
  Language,
  {
    greeting: string
    message: string
  }
> = {
  English: {
    greeting: "Welcome!",
    message: "Let's get you started by creating your first chat!",
  },
  French: {
    greeting: "Bienvenue!",
    message: "Commençons par créer votre premier converser!",
  },
  German: {
    greeting: "Willkommen!",
    message: "Beginnen wir mit der Erstellung Ihres ersten Chats!",
  },
  Hindi: {
    greeting: "स्वागत!",
    message: "आइए अपनी पहली चैट बनाकर शुरुआत करें!",
  },
  Japanese: {
    greeting: "いらっしゃいませ！",
    message: "まずは最初のチャットを作成してみましょう。",
  },
  Kannada: {
    greeting: "ಸ್ವಾಗತ!",
    message: "ನಿಮ್ಮ ಮೊದಲ ಚಾಟ್ ರಚಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸೋಣ!",
  },
  Malayalam: {
    greeting: "സ്വാഗതം!",
    message: "നിങ്ങളുടെ ആദ്യ ചാറ്റ് സൃഷ്ടിച്ചുകൊണ്ട് നമുക്ക് ആരംഭിക്കാം!",
  },
  Spanish: {
    greeting: "¡Bienvenido!",
    message: "¡Comencemos creando tu primer chat!",
  },
  Tamil: {
    greeting: "நல்வரவு!",
    message: "உங்கள் முதல் அரட்டையை உருவாக்குவதன் மூலம் தொடங்குவோம்!",
  },
  Telugu: {
    greeting: "స్వాగతం!",
    message: "మీ మొదటి చాట్‌ని సృష్టించడం ద్వారా ప్రారంభించండి!",
  },
}

export function getWelcome(language: Language) {
  return WELCOMES[language]
}
