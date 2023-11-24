import type { Language } from "@/types/Language"
import type { Phrase } from "@/types/Phrase"

type TranslatingLanguage = Exclude<Language, "English">

const TRANSLATIONS: Record<TranslatingLanguage, Record<Phrase, string>> = {
  French: {
    Add: "Ajouter",
    "Add User To Chat": "Ajouter un utilisateur à la conversation",
    Admin: "Administrateur",
    "Are you sure?": "Es-tu sûr?",
    Cancel: "Annuler",
    Chat: "Conversation",
    "Create a New Chat": "Créer une nouvelle conversation",
    Delete: "Supprimer",
    "Delete Chat": "Supprimer la conversation",
    "Deleted Chat with id": "Conversation supprimée avec identifiant",
    "Deleting chat": "Supprimer une conversation",
    Email: "E-mail",
    "End of Messages": "Fin des messages",
    "Enter message in ANY language...":
      "Entrez le message dans N'IMPORTE QUELLE langue...",
    "Get the conversation started...": "Lancez la conversation...",
    "Invite a friend": "Invite un ami",
    "Let's get you started by creating your first chat!":
      "Commençons par créer votre premier converser!",
    "New Chat": "Nouvelle conversation",
    "No messages yet": "Pas encore de messages",
    "Note: They must be registered": "Attention: ils doivent être enregistrés",
    "Please wait while we delete the chat...":
      "Veuillez patienter pendant que nous supprimons la conversation...",
    Send: "Envoyer",
    "Send your first message in ANY language below to get started!":
      "Envoyez votre premier message dans N'IMPORTE QUELLE langue pour commencer",
    "Simply enter another users email address to invite them to this chat!":
      "Entrez simplement l'adresse e-mail d'un autre utilisateur pour l'inviter à cette conversation !",
    "The AI will auto-detect & translate it all for you...":
      "L' intelligence artificielle détectera et traduira automatiquement tout cela pour vous...",
    "This will delete the chat for all users.":
      "Cela supprimera la conversation pour tous les utilisateurs.",
    "Welcome!": "Bienvenue!",
  },
  German: {
    Add: "Hinzufügen",
    "Add User To Chat": "Benutzer zur Konversation hinzufügen",
    Admin: "Administrator",
    "Are you sure?": "Bist du sicher?",
    Cancel: "Stornieren",
    Chat: "Gespräch",
    "Create a New Chat": "Erstellen Sie eine neue Konversation",
    Delete: "Löschen",
    "Delete Chat": "Konversation löschen",
    "Deleted Chat with id": "Konversation mit ID gelöscht",
    "Deleting chat": "Konversation wird gelöscht",
    Email: "Email",
    "End of Messages": "Ende der Nachrichten",
    "Enter message in ANY language...":
      "Geben Sie eine Nachricht in JEDER Sprache ein...",
    "Get the conversation started...": "Beginnen Sie das Gespräch...",
    "Invite a friend": "Einen Freund einladen",
    "Let's get you started by creating your first chat!":
      "Beginnen wir mit der Erstellung Ihres ersten Chats!",
    "New Chat": "Neues Gespräch",
    "No messages yet": "Noch keine Nachrichten",
    "Note: They must be registered": "Hinweis: Sie müssen registriert sein",
    "Please wait while we delete the chat...":
      "Bitte warten Sie, während wir die Konversation löschen...",
    Send: "Schicken",
    "Send your first message in ANY language below to get started!":
      "Senden Sie Ihre erste Nachricht in JEDER Sprache, um loszulegen",
    "Simply enter another users email address to invite them to this chat!":
      "Geben Sie einfach die E-Mail-Adresse eines anderen Benutzers ein, um ihn zu dieser Unterhaltung einzuladen!",
    "The AI will auto-detect & translate it all for you...":
      "Die künstliche Intelligenz wird alles automatisch erkennen und für Sie übersetzen...",
    "This will delete the chat for all users.":
      "Dadurch wird die Konversation für alle Benutzer gelöscht.",
    "Welcome!": "Willkommen!",
  },
  Hindi: {
    Add: "जोड़ना",
    "Add User To Chat": "उपयोगकर्ता को वार्तालाप में जोड़ें",
    Admin: "व्यवस्थापक",
    "Are you sure?": "क्या आपको यकीन है?",
    Cancel: "रद्द करना",
    Chat: "बातचीत",
    "Create a New Chat": "एक नई बातचीत बनाएं",
    Delete: "मिटाना",
    "Delete Chat": "बातचीत मिटाएं",
    "Deleted Chat with id": "आईडी से चैट हटा दी गई",
    "Deleting chat": "वार्तालाप हटाया जा रहा है",
    Email: "ईमेल",
    "End of Messages": "संदेशों का अंत",
    "Enter message in ANY language...": "किसी भी भाषा में संदेश दर्ज करें...",
    "Get the conversation started...": "बातचीत शुरू करें...",
    "Invite a friend": "किसी मित्र को आमंत्रित करें",
    "Let's get you started by creating your first chat!":
      "आइए अपनी पहली चैट बनाकर शुरुआत करें!",
    "New Chat": "नई बातचीत",
    "No messages yet": "अभी तक कोई संदेश नहीं",
    "Note: They must be registered": "ध्यान दें: उन्हें पंजीकृत होना चाहिए",
    "Please wait while we delete the chat...":
      "कृपया तब तक प्रतीक्षा करें जब तक हम वार्तालाप हटा नहीं देते...",
    Send: "भेजना",
    "Send your first message in ANY language below to get started!":
      "आरंभ करने के लिए अपना पहला संदेश किसी भी भाषा में भेजें",
    "Simply enter another users email address to invite them to this chat!":
      "बस अन्य उपयोगकर्ताओं को इस वार्तालाप में आमंत्रित करने के लिए उनका ईमेल पता दर्ज करें!",
    "The AI will auto-detect & translate it all for you...":
      "कृत्रिम बुद्धिमत्ता स्वचालित रूप से यह सब पता लगाएगी और आपके लिए इसका अनुवाद करेगी...",
    "This will delete the chat for all users.":
      "इससे सभी उपयोगकर्ताओं के लिए वार्तालाप हटा दिया जाएगा.",
    "Welcome!": "स्वागत!",
  },
  Japanese: {
    Add: "追加",
    "Add User To Chat": "ユーザーを会話に追加",
    Admin: "管理者",
    "Are you sure?": "本気ですか？",
    Cancel: "キャンセル",
    Chat: "会話",
    "Create a New Chat": "新しい会話を作成する",
    Delete: "消去",
    "Delete Chat": "会話を削除する",
    "Deleted Chat with id": "ID との会話を削除しました",
    "Deleting chat": "会話を削除する",
    Email: "Eメール",
    "End of Messages": "メッセージの終わり",
    "Enter message in ANY language...":
      "任意の言語でメッセージを入力してください...",
    "Get the conversation started...": "会話を始めましょう...",
    "Invite a friend": "友達を招待する",
    "Let's get you started by creating your first chat!":
      "まずは最初のチャットを作成してみましょう",
    "New Chat": "新しい会話",
    "No messages yet": "まだメッセージはありません",
    "Note: They must be registered": "注: 登録する必要があります",
    "Please wait while we delete the chat...":
      "会話を削除するまでお待ちください...",
    Send: "送信",
    "Send your first message in ANY language below to get started!":
      "まずは任意の言語で最初のメッセージを送信してください",
    "Simply enter another users email address to invite them to this chat!":
      "別のユーザーのメール アドレスを入力するだけで、この会話に招待できます。",
    "The AI will auto-detect & translate it all for you...":
      "人工知能がすべてを自動的に検出して翻訳します...",
    "This will delete the chat for all users.":
      "これにより、すべてのユーザーの会話が削除されます。",
    "Welcome!": "いらっしゃいませ！",
  },
  Kannada: {
    Add: "ಸೇರಿಸಿ",
    "Add User To Chat": "ಸಂಭಾಷಣೆಗೆ ಬಳಕೆದಾರರನ್ನು ಸೇರಿಸಿ",
    Admin: "ನಿರ್ವಾಹಕ",
    "Are you sure?": "ನೀವು ಖಚಿತವಾಗಿರುವಿರಾ?",
    Cancel: "ರದ್ದುಮಾಡಿ",
    Chat: "ಸಂಭಾಷಣೆ",
    "Create a New Chat": "ಹೊಸ ಸಂವಾದವನ್ನು ರಚಿಸಿ",
    Delete: "ಅಳಿಸಿ",
    "Delete Chat": "ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸು",
    "Deleted Chat with id": "ಐಡಿಯೊಂದಿಗೆ ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸಲಾಗಿದೆ",
    "Deleting chat": "ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸಲಾಗುತ್ತಿದೆ",
    Email: "ಇಮೇಲ್",
    "End of Messages": "ಸಂದೇಶಗಳ ಅಂತ್ಯ",
    "Enter message in ANY language...":
      "ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ ಸಂದೇಶವನ್ನು ನಮೂದಿಸಿ...",
    "Get the conversation started...": "ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ...",
    "Invite a friend": "ಸ್ನೇಹಿತನನ್ನು ಆಮಂತ್ರಿಸು",
    "Let's get you started by creating your first chat!":
      "ನಿಮ್ಮ ಮೊದಲ ಚಾಟ್ ರಚಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸೋಣ!",
    "New Chat": "ಹೊಸ ಸಂಭಾಷಣೆ",
    "No messages yet": "ಇನ್ನೂ ಯಾವುದೇ ಸಂದೇಶಗಳಿಲ್ಲ",
    "Note: They must be registered": "ಗಮನಿಸಿ: ಅವರು ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬೇಕು",
    "Please wait while we delete the chat...":
      "ನಾವು ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸುವವರೆಗೆ ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ...",
    Send: "ಕಳುಹಿಸು",
    "Send your first message in ANY language below to get started!":
      "ಪ್ರಾರಂಭಿಸಲು ಯಾವುದೇ ಭಾಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಮೊದಲ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ",
    "Simply enter another users email address to invite them to this chat!":
      "ಈ ಸಂಭಾಷಣೆಗೆ ಅವರನ್ನು ಆಹ್ವಾನಿಸಲು ಇನ್ನೊಬ್ಬ ಬಳಕೆದಾರರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ!",
    "The AI will auto-detect & translate it all for you...":
      "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಮಗಾಗಿ ಎಲ್ಲವನ್ನೂ ಅನುವಾದಿಸುತ್ತದೆ...",
    "This will delete the chat for all users.":
      "ಇದು ಎಲ್ಲಾ ಬಳಕೆದಾರರಿಗಾಗಿ ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸುತ್ತದೆ.",
    "Welcome!": "ಸ್ವಾಗತ!",
  },
  Malayalam: {
    Add: "ചേർക്കുക",
    "Add User To Chat": "സംഭാഷണത്തിലേക്ക് ഉപയോക്താവിനെ ചേർക്കുക",
    Admin: "അഡ്മിൻ",
    "Are you sure?": "നിങ്ങൾക്ക് ഉറപ്പാണോ?",
    Cancel: "റദ്ദാക്കുക",
    Chat: "സംഭാഷണം",
    "Create a New Chat": "ഒരു പുതിയ സംഭാഷണം സൃഷ്ടിക്കുക",
    Delete: "ഇല്ലാതാക്കുക",
    "Delete Chat": "സംഭാഷണം നീക്കം ചെയ്യുക",
    "Deleted Chat with id": "ഐഡിയുള്ള സംഭാഷണം ഇല്ലാതാക്കി",
    "Deleting chat": "സംഭാഷണം ഇല്ലാതാക്കുന്നു",
    Email: "ഇമെയിൽ",
    "End of Messages": "സന്ദേശങ്ങളുടെ അവസാനം",
    "Enter message in ANY language...": "ഏത് ഭാഷയിലും സന്ദേശം നൽകുക...",
    "Get the conversation started...": "സംഭാഷണം ആരംഭിക്കുക...",
    "Invite a friend": "ഒരു സുഹൃത്തിനെ ക്ഷണിക്കുക",
    "Let's get you started by creating your first chat!":
      "നിങ്ങളുടെ ആദ്യ ചാറ്റ് സൃഷ്ടിച്ചുകൊണ്ട് നമുക്ക് ആരംഭിക്കാം!",
    "New Chat": "പുതിയ സംഭാഷണം",
    "No messages yet": "ഇതുവരെ സന്ദേശങ്ങളൊന്നുമില്ല",
    "Note: They must be registered": "ശ്രദ്ധിക്കുക: അവ രജിസ്റ്റർ ചെയ്തിരിക്കണം",
    "Please wait while we delete the chat...":
      "ഞങ്ങൾ സംഭാഷണം ഇല്ലാതാക്കുന്നത് വരെ കാത്തിരിക്കൂ...",
    Send: "അയക്കുക",
    "Send your first message in ANY language below to get started!":
      "ആരംഭിക്കുന്നതിന് ഏത് ഭാഷയിലും നിങ്ങളുടെ ആദ്യ സന്ദേശം അയയ്‌ക്കുക",
    "Simply enter another users email address to invite them to this chat!":
      "ഈ സംഭാഷണത്തിലേക്ക് ക്ഷണിക്കുന്നതിന് മറ്റൊരു ഉപയോക്താക്കളുടെ ഇമെയിൽ വിലാസം നൽകുക!",
    "The AI will auto-detect & translate it all for you...":
      "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് സ്വയമേവ കണ്ടെത്തുകയും നിങ്ങൾക്കായി വിവർത്തനം ചെയ്യുകയും ചെയ്യും...",
    "This will delete the chat for all users.":
      "ഇത് എല്ലാ ഉപയോക്താക്കൾക്കുമുള്ള സംഭാഷണം ഇല്ലാതാക്കും.",
    "Welcome!": "സ്വാഗതം!",
  },
  Spanish: {
    Add: "Agregar",
    "Add User To Chat": "Agregar usuario a la conversación",
    Admin: "Administrador",
    "Are you sure?": "¿Estas seguro?",
    Cancel: "Cancelar",
    Chat: "Conversación",
    "Create a New Chat": "Crear una nueva conversación",
    Delete: "Borrar",
    "Delete Chat": "Eliminar la conversación",
    "Deleted Chat with id": "Conversación eliminada con id.",
    "Deleting chat": "Eliminar conversación",
    Email: "Correo electrónico",
    "End of Messages": "Fin de mensajes",
    "Enter message in ANY language...":
      "Ingrese el mensaje en CUALQUIER idioma...",
    "Get the conversation started...": "Inicie la conversación...",
    "Invite a friend": "Invitar a un amigo",
    "Let's get you started by creating your first chat!":
      "¡Comencemos creando tu primer chat!",
    "New Chat": "Nueva conversación",
    "No messages yet": "No hay mensajes todavía",
    "Note: They must be registered": "Nota: Deben estar registrados",
    "Please wait while we delete the chat...":
      "Espere mientras eliminamos la conversación...",
    Send: "Enviar",
    "Send your first message in ANY language below to get started!":
      "Envía tu primer mensaje en CUALQUIER idioma para comenzar",
    "Simply enter another users email address to invite them to this chat!":
      "¡Simplemente ingrese la dirección de correo electrónico de otro usuario para invitarlo a esta conversación!",
    "The AI will auto-detect & translate it all for you...":
      "La inteligencia artificial lo detectará y traducirá todo automáticamente...",
    "This will delete the chat for all users.":
      "Esto eliminará la conversación para todos los usuarios.",
    "Welcome!": "¡Bienvenido!",
  },
  Tamil: {
    Add: "சேர்",
    "Add User To Chat": "அரட்டையுள் உறுப்பினரைச் சேர்",
    Admin: "நிர்வாகி",
    "Are you sure?": "உறுதியாகவா?",
    Cancel: "ரத்து செய்",
    Chat: "அரட்டை",
    "Create a New Chat": "புது அரட்டையை உருவாக்கு",
    Delete: "அழி",
    "Delete Chat": "அரட்டை அழி",
    "Deleted Chat with id": "அரட்டை அழிக்கப்பட்டது",
    "Deleting chat": "அரட்டையை அழிக்கிறது",
    Email: "மின்னஞ்சல்",
    "End of Messages": "தகவல்கள் முடிவுற்றன",
    "Enter message in ANY language...": "எந்த மொழியிலும் தகவலை உள்ளிடவும்...",
    "Get the conversation started...": "உரையாடலைத் தொடங்கவும்...",
    "Invite a friend": "நண்பரை அழை",
    "Let's get you started by creating your first chat!":
      "உங்கள் முதல் அரட்டையை உருவாக்குவதன் மூலம் தொடங்குவோம்!",
    "New Chat": "புது அரட்டை",
    "No messages yet": "இதுவரை எந்தத் தகவல்களும் இல்லை",
    "Note: They must be registered":
      "குறிப்பு: அவர் பதிவு செய்யப்பட்டவராக இருக்க வேண்டும்",
    "Please wait while we delete the chat...":
      "அரட்டையை அழிக்கும் வரை காத்திருக்கவும்...",
    Send: "அனுப்பு",
    "Send your first message in ANY language below to get started!":
      "தொடங்குவதற்கு உங்கள் முதல் தகவலை ஏதோர் மொழியிலும் அனுப்பவும்",
    "Simply enter another users email address to invite them to this chat!":
      "இந்த அரட்டைக்கு அழைக்க மற்றொரு பயனர் மின்னஞ்சல் முகவரியை உள்ளிடவும்!",
    "The AI will auto-detect & translate it all for you...":
      "செயற்கை நுண்ணறிவு தானாகவே உங்களுக்காக அனைத்தையும் மொழிபெயர்த்துவிடும்...",
    "This will delete the chat for all users.":
      "இது அனைத்து உறுப்பினர்களுக்கும் அரட்டையை அழிக்கும்.",
    "Welcome!": "நல்வரவு!",
  },
  Telugu: {
    Add: "జోడించు",
    "Add User To Chat": "సంభాషణకు వినియోగదారుని జోడించండి",
    Admin: "అడ్మిన్",
    "Are you sure?": "మీరు చెప్పేది నిజమా?",
    Cancel: "రద్దు చేయండి",
    Chat: "సంభాషణ",
    "Create a New Chat": "కొత్త సంభాషణను సృష్టించండి",
    Delete: "తొలగించు",
    "Delete Chat": "సంభాషణను తొలగించండి",
    "Deleted Chat with id": "idతో సంభాషణ తొలగించబడింది",
    "Deleting chat": "సంభాషణను తొలగిస్తోంది",
    Email: "ఇమెయిల్",
    "End of Messages": "సందేశాల ముగింపు",
    "Enter message in ANY language...":
      "ఏదైనా భాషలో సందేశాన్ని నమోదు చేయండి...",
    "Get the conversation started...": "సంభాషణను ప్రారంభించండి...",
    "Invite a friend": "స్నేహితుడిని ఆహ్వానించు",
    "Let's get you started by creating your first chat!":
      "మీ మొదటి చాట్‌ని సృష్టించడం ద్వారా ప్రారంభించండి!",
    "New Chat": "కొత్త సంభాషణ",
    "No messages yet": "ఇంకా సందేశాలు లేవు",
    "Note: They must be registered": "గమనిక: వారు తప్పనిసరిగా నమోదు చేయబడాలి",
    "Please wait while we delete the chat...":
      "మేము సంభాషణను తొలగించే వరకు దయచేసి వేచి ఉండండి...",
    Send: "పంపండి",
    "Send your first message in ANY language below to get started!":
      "ప్రారంభించడానికి మీ మొదటి సందేశాన్ని ఏదైనా భాషలో పంపండి",
    "Simply enter another users email address to invite them to this chat!":
      "ఈ సంభాషణకు వారిని ఆహ్వానించడానికి మరొక వినియోగదారుల ఇమెయిల్ చిరునామాను నమోదు చేయండి!",
    "The AI will auto-detect & translate it all for you...":
      "కృత్రిమ మేధస్సు స్వయంచాలకంగా గుర్తించి మీ కోసం అన్నింటినీ అనువదిస్తుంది...",
    "This will delete the chat for all users.":
      "ఇది సభ్యులందరికీ సంభాషణను తొలగిస్తుంది.",
    "Welcome!": "స్వాగతం!",
  },
}

export function getTranslation(phrase: Phrase, language: Language) {
  if (language === "English") {
    return phrase
  }
  return TRANSLATIONS[language][phrase] || phrase
}
