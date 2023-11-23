import { shallow } from "zustand/shallow"
import { useLanguageStore } from "@/stores/language"
import { useIsPro } from "./useIsPro"

export function useAvailableLanguages() {
  const [isPro, subscriptionStatus, subscriptionError] = useIsPro()
  return useLanguageStore(store => {
    if (subscriptionStatus === "loading") {
      return [undefined, undefined, "loading", undefined] as const
    }
    if (subscriptionStatus === "error") {
      return [undefined, undefined, "error", subscriptionError] as const
    }

    const [
      availableLanguages,
      availableLanguagesStatus,
      availableLanguagesError,
    ] = store.availableLanguages

    if (availableLanguagesStatus === "loading") {
      return [undefined, undefined, "loading", undefined] as const
    }
    if (availableLanguagesStatus === "error") {
      return [undefined, undefined, "error", availableLanguagesError] as const
    }

    return [
      availableLanguages.free.concat(isPro ? availableLanguages.pro : []),
      isPro ? [] : availableLanguages.pro,
      "idle",
      undefined,
    ] as const
  }, shallow)
}