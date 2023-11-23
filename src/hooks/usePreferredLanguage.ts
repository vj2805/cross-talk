import { shallow } from "zustand/shallow"
import { useStore } from "@/stores/useStore"

export function usePreferredLanguage() {
  return useStore(store => {
    switch (store.status) {
      case "error":
        return [undefined, store.status, store.error] as const
      case "ready":
        return [store.language.preferred, store.status, undefined] as const
      case "loading":
        return [undefined, store.status, undefined] as const
    }
  }, shallow)
}
