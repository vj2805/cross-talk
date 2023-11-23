import { createWithEqualityFn } from "zustand/traditional"
import {
  getSupportedLanguages,
  getUnsupportedLanguages,
} from "@/services/language"
import type { Language } from "@/types/Language"

type Store =
  | {
      status: "error"
      error: Error
    }
  | {
      status: "idle"
      language: {
        preferred: Language
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
  const preferred = supported[0]
  useStore.setState({
    language: { preferred, supported, unsupported },
    status: "idle",
    subscription: { isPro },
  })
}
