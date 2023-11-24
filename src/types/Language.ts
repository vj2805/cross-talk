type LanguageAndCode =
  | ["English", "en"]
  | ["French", "fr"]
  | ["German", "de"]
  | ["Hindi", "hi"]
  | ["Japanese", "ja"]
  | ["Kannada", "kn"]
  | ["Malayalam", "ml"]
  | ["Spanish", "es"]
  | ["Tamil", "ta"]
  | ["Telugu", "te"]

export type Language = LanguageAndCode[0]

export type LanguageCode = LanguageAndCode[1]
