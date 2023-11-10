import { generateId } from "@/utilities/string"
import { CheckoutError } from "@/errors/CheckoutError"
import type { Subscription } from "@/types/Subscription"
import type { SubscriptionService } from "@/types/SubscriptionService"

export const subscriptions: Map<string, Subscription> = new Map()

const listenersMap: Map<
  string,
  Set<(subscription: Nullish<Subscription>) => void>
> = new Map()

function register(
  userId: string,
  onChange: (subscription: Nullish<Subscription>) => void
) {
  const existingListeners = listenersMap.get(userId) ?? new Set()
  existingListeners.add(onChange)
  listenersMap.set(userId, existingListeners)
  return () => existingListeners.delete(onChange)
}

function notify(userId: string) {
  const subscription = subscriptions.get(userId) ?? null
  listenersMap.get(userId)?.forEach(listener => listener(subscription))
}

function saveSubscription(userId: string, subscription: Nullish<Subscription>) {
  if (subscription) {
    subscriptions.set(userId, subscription)
  } else {
    subscriptions.delete(userId)
  }
  notify(userId)
}

const inMemorySubscriptionService: SubscriptionService = {
  createCheckout(userId, _priceId, onSuccess, onFailure, onDetach) {
    return new Promise(resolve => {
      setTimeout(() => {
        const response = window.confirm(
          [
            "This is a simulated checkout session!",
            "Click OK to simulate SUCCESS / Click CANCEL to simulate FAILURE",
          ].join("\n")
        )
        if (response) {
          onSuccess(window.location.origin)
          saveSubscription(userId, {
            id: generateId(),
            role: null,
            status: "active",
          })
        } else {
          onFailure(new CheckoutError("Simulation Failure"))
        }
        onDetach()
      }, 1000)
      resolve()
    })
  },
  syncSubscription(userId, onChange) {
    setTimeout(() => void onChange(subscriptions.get(userId) ?? null), 1000)
    return register(userId, onChange)
  },
}

export default inMemorySubscriptionService
