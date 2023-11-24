import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"
import { getAvailableLanguages } from "@/services/language"
import type { Language, LanguageCode } from "@/types/Language"
import type { Observable } from "@/types/Observable"
import type { Phrase } from "@/types/Phrase"
import { createPreferredLanguage } from "@/utilities/language"

type State = {
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

type Store = Observable<State>

const useInternalStore = createWithEqualityFn<Store>()(() => {
  return [undefined, true, undefined]
})

const getStore = useInternalStore.getState
const setStore = useInternalStore.setState

export function useStore<U>(selector: (state: State) => U) {
  return useInternalStore(store => {
    const [state, loading, error] = store
    if (loading) {
      return store
    }
    if (error) {
      return store
    }
    return [selector(state), loading, error] as const
  }, shallow)
}

export function setLoading() {
  setStore([undefined, true, undefined], true)
}

export function setError(error: Error) {
  setStore([undefined, false, error], true)
}

export function setIsPro(isPro: boolean) {
  const [supported, unsupported] = getAvailableLanguages(isPro)
  setStore(
    [
      {
        language: {
          preferred: createPreferredLanguage(supported[0]),
          supported,
          unsupported,
        },
        subscription: {
          isPro,
        },
      },
      false,
      undefined,
    ],
    true
  )
}

export function setPreferredLanguage(language: Language) {
  const [state, loading, error] = getStore()
  if (loading) {
    return
  }
  if (error) {
    return
  }
  if (!state.language.supported.includes(language)) {
    return
  }
  setStore(
    [
      {
        language: {
          preferred: createPreferredLanguage(language),
          supported: state.language.supported,
          unsupported: state.language.unsupported,
        },
        subscription: state.subscription,
      },
      false,
      undefined,
    ],
    true
  )
}
