import { createWithEqualityFn } from "zustand/traditional"
import { getAvailableLanguages } from "@/services/language"
import type { Language, LanguageCode } from "@/types/Language"
import type { Phrase } from "@/types/Phrase"
import { createPreferredLanguage } from "@/utilities/language"

type Store =
  | {
      status: "error"
      error: Error
    }
  | {
      status: "loading"
    }
  | {
      status: "ready"
      language: {
        preferred: {
          code: LanguageCode
          name: Language
          translate: (phrase: Phrase) => string
        }
        supported: Language[]
        unsupported: Language[]
      }
      subscription: {
        isPro: boolean
      }
    }

export const useStore = createWithEqualityFn<Store>()(() => ({
  status: "loading",
}))

const getStore = useStore.getState
const setStore = useStore.setState

export function setIsPro(isPro: boolean) {
  const [supported, unsupported] = getAvailableLanguages(isPro)
  setStore(
    {
      language: {
        preferred: createPreferredLanguage(supported[0]),
        supported,
        unsupported,
      },
      status: "ready",
      subscription: {
        isPro,
      },
    },
    true
  )
}

export function setPreferredLanguage(language: Language) {
  const store = getStore()
  if (store.status !== "ready") {
    return
  }
  if (!store.language.supported.includes(language)) {
    return
  }
  setStore({
    language: {
      preferred: createPreferredLanguage(language),
      supported: store.language.supported,
      unsupported: store.language.unsupported,
    },
  })
}
