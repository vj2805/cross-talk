import type { Language } from "@/types/Language"

const START_CONVERSATION_DETAILS: Record<
  Language,
  {
    "Invite a friend": string
    "Send your first message in ANY language below to get started!": string
    "The AI will auto-dect & translate it all for you...": string
  }
> = {
  English: {
    "Invite a friend": "Invite a friend",
    "Send your first message in ANY language below to get started!":
      "Send your first message in ANY language below to get started!",
    "The AI will auto-dect & translate it all for you...":
      "The AI will auto-dect & translate it all for you...",
  },
  French: {
    "Invite a friend": "Invite un ami",
    "Send your first message in ANY language below to get started!":
      "Envoyez votre premier message dans N'IMPORTE QUELLE langue pour commencer",
    "The AI will auto-dect & translate it all for you...":
      "l’intelligence artificielle détectera et traduira automatiquement tout cela pour vous...",
  },
  German: {
    "Invite a friend": "Einen Freund einladen",
    "Send your first message in ANY language below to get started!":
      "Senden Sie Ihre erste Nachricht in JEDER Sprache, um loszulegen",
    "The AI will auto-dect & translate it all for you...":
      "Die künstliche Intelligenz wird alles automatisch erkennen und für Sie übersetzen...",
  },
  Hindi: {
    "Invite a friend": "किसी मित्र को आमंत्रित करें",
    "Send your first message in ANY language below to get started!":
      "आरंभ करने के लिए अपना पहला संदेश किसी भी भाषा में भेजें",
    "The AI will auto-dect & translate it all for you...":
      "कृत्रिम बुद्धिमत्ता स्वचालित रूप से यह सब पता लगाएगी और आपके लिए इसका अनुवाद करेगी...",
  },
  Japanese: {
    "Invite a friend": "友達を招待する",
    "Send your first message in ANY language below to get started!":
      "まずは任意の言語で最初のメッセージを送信してください",
    "The AI will auto-dect & translate it all for you...":
      "人工知能がすべてを自動的に検出して翻訳します。",
  },
  Kannada: {
    "Invite a friend": "ಸ್ನೇಹಿತನನ್ನು ಆಮಂತ್ರಿಸು",
    "Send your first message in ANY language below to get started!":
      "ಪ್ರಾರಂಭಿಸಲು ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಮೊದಲ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ",
    "The AI will auto-dect & translate it all for you...":
      "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಮಗಾಗಿ ಎಲ್ಲವನ್ನೂ ಅನುವಾದಿಸುತ್ತದೆ...",
  },
  Malayalam: {
    "Invite a friend": "ഒരു സുഹൃത്തിനെ ക്ഷണിക്കുക",
    "Send your first message in ANY language below to get started!":
      "ആരംഭിക്കുന്നതിന് ഏത് ഭാഷയിലും നിങ്ങളുടെ ആദ്യ സന്ദേശം അയയ്‌ക്കുക",
    "The AI will auto-dect & translate it all for you...":
      "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് സ്വയമേവ കണ്ടെത്തുകയും നിങ്ങൾക്കായി വിവർത്തനം ചെയ്യുകയും ചെയ്യും...",
  },
  Spanish: {
    "Invite a friend": "Invitar a un amigo",
    "Send your first message in ANY language below to get started!":
      "Envía tu primer mensaje en CUALQUIER idioma para comenzar",
    "The AI will auto-dect & translate it all for you...":
      "la inteligencia artificial lo detectará y traducirá todo automáticamente...",
  },
  Tamil: {
    "Invite a friend": "நண்பரை அழை",
    "Send your first message in ANY language below to get started!":
      "தொடங்குவதற்கு உங்கள் முதல் செய்தியை எந்த மொழியிலும் அனுப்பவும்",
    "The AI will auto-dect & translate it all for you...":
      "செயற்கை நுண்ணறிவு தானாகவே உங்களுக்காக அனைத்தையும் மொழிபெயர்த்துவிடும்...",
  },
  Telugu: {
    "Invite a friend": "స్నేహితుడిని ఆహ్వానించు",
    "Send your first message in ANY language below to get started!":
      "ప్రారంభించడానికి మీ మొదటి సందేశాన్ని ఏదైనా భాషలో పంపండి",
    "The AI will auto-dect & translate it all for you...":
      "కృత్రిమ మేధస్సు స్వయంచాలకంగా గుర్తించి మీ కోసం అన్నింటినీ అనువదిస్తుంది...",
  },
}

export function getStartConversationDetails(language: Language) {
  return START_CONVERSATION_DETAILS[language]
}
