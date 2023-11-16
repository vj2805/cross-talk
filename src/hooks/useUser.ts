import { useUserStore } from "@/stores/user"

export function useUser() {
  return useUserStore(store => store.user)
}
