import type { Subscription } from "./Subscription"
import type { SubscriptionService } from "./SubscriptionService"

const subscriptions: Map<string, Subscription> = new Map()

const listenersMap: Map<
  string,
  Set<(subscription: Nullish<Subscription>) => void>
> = new Map()

function notify(userId: string) {
  const subscription = subscriptions.get(userId) ?? null
  listenersMap.get(userId)?.forEach(listener => listener(subscription))
}

export function saveSubscription(
  userId: string,
  subscription: Nullish<Subscription>
) {
  if (subscription) {
    subscriptions.set(userId, subscription)
  } else {
    subscriptions.delete(userId)
  }
  notify(userId)
}

const syncSubscription: SubscriptionService["syncSubscription"] = (
  userId,
  onChange
) => {
  setTimeout(() => void onChange(subscriptions.get(userId) ?? null), 1000)
  const existingListeners = listenersMap.get(userId) ?? new Set()
  existingListeners.add(onChange)
  listenersMap.set(userId, existingListeners)
  return () => existingListeners.delete(onChange)
}

export default function createInMemorySubscriptionService(): SubscriptionService {
  return { syncSubscription }
}
