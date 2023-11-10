import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

type SubscriptionStore = {
  subscription: Optional<Subscription>
}

export const useSubscriptionStore = create<SubscriptionStore>(() => ({
  subscription: undefined,
}))

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({ subscription })
}
