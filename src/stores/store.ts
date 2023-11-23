import { createWithEqualityFn } from "zustand/traditional"
import {
  getLanguageCode,
  getSupportedLanguages,
  getUnsupportedLanguages,
} from "@/services/language"
import type { Language, LanguageCode } from "@/types/Language"
import { getTranslation } from "@/utilities/translations"
import type { Phrase } from "@/utilities/translations"

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

export function setIsPro(isPro: boolean) {
  const supported = getSupportedLanguages(isPro)
  const unsupported = getUnsupportedLanguages(isPro)
  useStore.setState({
    language: {
      preferred: {
        code: getLanguageCode(supported[0]),
        name: supported[0],
        translate(phrase) {
          return getTranslation(phrase, this.name)
        },
      },
      supported,
      unsupported,
    },
    status: "ready",
    subscription: {
      isPro,
    },
  })
}
