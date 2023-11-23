import { shallow } from "zustand/shallow"
import { useStore } from "@/stores/store"

export function useAvailableLanguages() {
  return useStore(store => {
    switch (store.status) {
      case "error":
        return [undefined, undefined, store.status, store.error] as const
      case "ready": {
        const { supported, unsupported } = store.language
        return [supported, unsupported, "ready", undefined] as const
      }
      case "loading":
        return [undefined, undefined, store.status, undefined] as const
    }
  }, shallow)
}
