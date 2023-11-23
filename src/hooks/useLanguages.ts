import { shallow } from "zustand/shallow"
import { useStore } from "@/stores/useStore"

export function useLanguages() {
  return useStore(store => {
    switch (store.status) {
      case "error":
        return [
          undefined,
          undefined,
          undefined,
          store.status,
          store.error,
        ] as const
      case "ready": {
        const { supported, unsupported, preferred } = store.language
        return [
          preferred.name,
          supported,
          unsupported,
          "ready",
          undefined,
        ] as const
      }
      case "loading":
        return [
          undefined,
          undefined,
          undefined,
          store.status,
          undefined,
        ] as const
    }
  }, shallow)
}
