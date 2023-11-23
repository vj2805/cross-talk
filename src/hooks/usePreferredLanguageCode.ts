import { shallow } from "zustand/shallow"
import { useStore } from "@/stores/store"

export function usePreferredLanguageCode() {
  return useStore(store => {
    switch (store.status) {
      case "error":
        return [undefined, store.status, store.error] as const
      case "ready":
        return [store.language.preferred.code, store.status, undefined] as const
      case "loading":
        return [undefined, store.status, undefined] as const
    }
  }, shallow)
}
