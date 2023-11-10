import { create } from "zustand"
import type { Subscription } from "@/types/Subscription"

export const useSubscriptionStore = create<Observable<Subscription>>(() => ({
  status: "loading",
}))

export function setSubscription(subscription: Nullish<Subscription>) {
  useSubscriptionStore.setState({ status: "idle", value: subscription })
}
