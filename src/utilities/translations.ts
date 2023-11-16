import type { Language } from "@/types/Language"

const TRANSLATIONS: Record<
  Language,
  Record<
    | "Chat"
    | "End of Messages"
    | "Get the conversation started..."
    | "Invite a friend"
    | "Let's get you started by creating your first chat!"
    | "New Chat"
    | "No messages yet"
    | "Send your first message in ANY language below to get started!"
    | "The AI will auto-detect & translate it all for you..."
    | "Welcome!",
    string
  >
> = {
  English: {
    Chat: "Chat",
    "End of Messages": "End of Messages",
    "Get the conversation started...": "Get the conversation started...",
    "Invite a friend": "Invite a friend",
    "Let's get you started by creating your first chat!":
      "Let's get you started by creating your first chat!",
    "New Chat": "New Chat",
    "No messages yet": "No messages yet",
    "Send your first message in ANY language below to get started!":
      "Send your first message in ANY language below to get started!",
    "The AI will auto-detect & translate it all for you...":
      "The AI will auto-detect & translate it all for you...",
    "Welcome!": "Welcome!",
  },
  French: {
    Chat: "Conversation",
    "End of Messages": "Fin des messages",
    "Get the conversation started...": "Lancez la conversation...",
    "Invite a friend": "Invite un ami",
    "Let's get you started by creating your first chat!":
      "Commençons par créer votre premier converser!",
    "New Chat": "Nouvelle conversation",
    "No messages yet": "Pas encore de messages",
    "Send your first message in ANY language below to get started!":
      "Envoyez votre premier message dans N'IMPORTE QUELLE langue pour commencer",
    "The AI will auto-detect & translate it all for you...":
      "L' intelligence artificielle détectera et traduira automatiquement tout cela pour vous...",
    "Welcome!": "Bienvenue!",
  },
  German: {
    Chat: "Gespräch",
    "End of Messages": "Ende der Nachrichten",
    "Get the conversation started...": "Beginnen Sie das Gespräch...",
    "Invite a friend": "Einen Freund einladen",
    "Let's get you started by creating your first chat!":
      "Beginnen wir mit der Erstellung Ihres ersten Chats!",
    "New Chat": "Neues Gespräch",
    "No messages yet": "Noch keine Nachrichten",
    "Send your first message in ANY language below to get started!":
      "Senden Sie Ihre erste Nachricht in JEDER Sprache, um loszulegen",
    "The AI will auto-detect & translate it all for you...":
      "Die künstliche Intelligenz wird alles automatisch erkennen und für Sie übersetzen...",
    "Welcome!": "Willkommen!",
  },
  Hindi: {
    Chat: "बातचीत",
    "End of Messages": "संदेशों का अंत",
    "Get the conversation started...": "बातचीत शुरू करें...",
    "Invite a friend": "किसी मित्र को आमंत्रित करें",
    "Let's get you started by creating your first chat!":
      "आइए अपनी पहली चैट बनाकर शुरुआत करें!",
    "New Chat": "नई बातचीत",
    "No messages yet": "अभी तक कोई संदेश नहीं",
    "Send your first message in ANY language below to get started!":
      "आरंभ करने के लिए अपना पहला संदेश किसी भी भाषा में भेजें",
    "The AI will auto-detect & translate it all for you...":
      "कृत्रिम बुद्धिमत्ता स्वचालित रूप से यह सब पता लगाएगी और आपके लिए इसका अनुवाद करेगी...",
    "Welcome!": "स्वागत!",
  },
  Japanese: {
    Chat: "会話",
    "End of Messages": "メッセージの終わり",
    "Get the conversation started...": "会話を始めましょう...",
    "Invite a friend": "友達を招待する",
    "Let's get you started by creating your first chat!":
      "まずは最初のチャットを作成してみましょう",
    "New Chat": "新しい会話",
    "No messages yet": "まだメッセージはありません",
    "Send your first message in ANY language below to get started!":
      "まずは任意の言語で最初のメッセージを送信してください",
    "The AI will auto-detect & translate it all for you...":
      "人工知能がすべてを自動的に検出して翻訳します...",
    "Welcome!": "いらっしゃいませ！",
  },
  Kannada: {
    Chat: "ಸಂಭಾಷಣೆ",
    "End of Messages": "ಸಂದೇಶಗಳ ಅಂತ್ಯ",
    "Get the conversation started...": "ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ...",
    "Invite a friend": "ಸ್ನೇಹಿತನನ್ನು ಆಮಂತ್ರಿಸು",
    "Let's get you started by creating your first chat!":
      "ನಿಮ್ಮ ಮೊದಲ ಚಾಟ್ ರಚಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸೋಣ!",
    "New Chat": "ಹೊಸ ಸಂಭಾಷಣೆ",
    "No messages yet": "ಇನ್ನೂ ಯಾವುದೇ ಸಂದೇಶಗಳಿಲ್ಲ",
    "Send your first message in ANY language below to get started!":
      "ಪ್ರಾರಂಭಿಸಲು ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಮೊದಲ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ",
    "The AI will auto-detect & translate it all for you...":
      "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಮಗಾಗಿ ಎಲ್ಲವನ್ನೂ ಅನುವಾದಿಸುತ್ತದೆ...",
    "Welcome!": "ಸ್ವಾಗತ!",
  },
  Malayalam: {
    Chat: "സംഭാഷണം",
    "End of Messages": "സന്ദേശങ്ങളുടെ അവസാനം",
    "Get the conversation started...": "സംഭാഷണം ആരംഭിക്കുക...",
    "Invite a friend": "ഒരു സുഹൃത്തിനെ ക്ഷണിക്കുക",
    "Let's get you started by creating your first chat!":
      "നിങ്ങളുടെ ആദ്യ ചാറ്റ് സൃഷ്ടിച്ചുകൊണ്ട് നമുക്ക് ആരംഭിക്കാം!",
    "New Chat": "പുതിയ സംഭാഷണം",
    "No messages yet": "ഇതുവരെ സന്ദേശങ്ങളൊന്നുമില്ല",
    "Send your first message in ANY language below to get started!":
      "ആരംഭിക്കുന്നതിന് ഏത് ഭാഷയിലും നിങ്ങളുടെ ആദ്യ സന്ദേശം അയയ്‌ക്കുക",
    "The AI will auto-detect & translate it all for you...":
      "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് സ്വയമേവ കണ്ടെത്തുകയും നിങ്ങൾക്കായി വിവർത്തനം ചെയ്യുകയും ചെയ്യും...",
    "Welcome!": "സ്വാഗതം!",
  },
  Spanish: {
    Chat: "Conversación",
    "End of Messages": "Fin de mensajes",
    "Get the conversation started...": "Inicie la conversación...",
    "Invite a friend": "Invitar a un amigo",
    "Let's get you started by creating your first chat!":
      "¡Comencemos creando tu primer chat!",
    "New Chat": "Nueva conversación",
    "No messages yet": "No hay mensajes todavía",
    "Send your first message in ANY language below to get started!":
      "Envía tu primer mensaje en CUALQUIER idioma para comenzar",
    "The AI will auto-detect & translate it all for you...":
      "La inteligencia artificial lo detectará y traducirá todo automáticamente...",
    "Welcome!": "¡Bienvenido!",
  },
  Tamil: {
    Chat: "அரட்டை",
    "End of Messages": "செய்திகள் முடிவுற்றன",
    "Get the conversation started...": "உரையாடலைத் தொடங்கவும்...",
    "Invite a friend": "நண்பரை அழை",
    "Let's get you started by creating your first chat!":
      "உங்கள் முதல் அரட்டையை உருவாக்குவதன் மூலம் தொடங்குவோம்!",
    "New Chat": "புது அரட்டை",
    "No messages yet": "இதுவரை எந்தச் செய்தியும் இல்லை",
    "Send your first message in ANY language below to get started!":
      "தொடங்குவதற்கு உங்கள் முதல் செய்தியை ஏதோர் மொழியிலும் அனுப்பவும்",
    "The AI will auto-detect & translate it all for you...":
      "செயற்கை நுண்ணறிவு தானாகவே உங்களுக்காக அனைத்தையும் மொழிபெயர்த்துவிடும்...",
    "Welcome!": "நல்வரவு!",
  },
  Telugu: {
    Chat: "సంభాషణ",
    "End of Messages": "సందేశాల ముగింపు",
    "Get the conversation started...": "సంభాషణను ప్రారంభించండి...",
    "Invite a friend": "స్నేహితుడిని ఆహ్వానించు",
    "Let's get you started by creating your first chat!":
      "మీ మొదటి చాట్‌ని సృష్టించడం ద్వారా ప్రారంభించండి!",
    "New Chat": "కొత్త సంభాషణ",
    "No messages yet": "ఇంకా సందేశాలు లేవు",
    "Send your first message in ANY language below to get started!":
      "ప్రారంభించడానికి మీ మొదటి సందేశాన్ని ఏదైనా భాషలో పంపండి",
    "The AI will auto-detect & translate it all for you...":
      "కృత్రిమ మేధస్సు స్వయంచాలకంగా గుర్తించి మీ కోసం అన్నింటినీ అనువదిస్తుంది...",
    "Welcome!": "స్వాగతం!",
  },
}

export function getTranslation<
  Key extends keyof (typeof TRANSLATIONS)[Language],
>(key: Key, language: Language) {
  return TRANSLATIONS[language][key]
}
