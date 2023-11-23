import { createWithEqualityFn } from "zustand/traditional"
import {
  getLanguageCode,
  getSupportedLanguages,
  getUnsupportedLanguages,
} from "@/services/language"
import type { Language, LanguageCode } from "@/types/Language"

type Store =
  | {
      status: "error"
      error: Error
    }
  | {
      status: "idle"
      language: {
        preferred: {
          code: LanguageCode
          name: Language
        }
        supported: Language[]
        unsupported: Language[]
      }
      subscription: {
        isPro: boolean
      }
    }
  | {
      status: "loading"
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
      },
      supported,
      unsupported,
    },
    status: "idle",
    subscription: {
      isPro,
    },
  })
}
