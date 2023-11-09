import { generateId } from "@utilities/string"
import { getServerUser } from "@services/auth"
import { CheckoutError } from "./Subscription"
import type { Subscription } from "./Subscription"
import type { SubscriptionService } from "./SubscriptionService"

const subscriptions: Map<string, Subscription> = new Map()

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

const createCheckout: SubscriptionService["createCheckout"] = (
  userId,
  _priceId,
  onSuccess,
  onFailure,
  onDetach
) => {
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
}

const syncSubscription: SubscriptionService["syncSubscription"] = (
  userId,
  onChange
) => {
  setTimeout(() => void onChange(subscriptions.get(userId) ?? null), 1000)
  return register(userId, onChange)
}

async function manageSubscription() {
  "use server"

  const user = await getServerUser()

  if (!user) {
    return console.error("User not found!")
  }

  const subscription = subscriptions.get(user.id)

  if (!subscription) {
    return console.error("User has no known subscriptions!")
  }

  await new Promise<void>(resolve => {
    setTimeout(() => {
      const response = window.confirm(
        [
          "This is a simulated manage subscription session!",
          "Click OK to simulate CANCEL SUBSCRIPTION / Click CANCEL to simulate nothing",
        ].join("\n")
      )
      if (response) {
        subscription.status = "canceled"
      }
      resolve()
    }, 1000)
  })
}

export default function createInMemorySubscriptionService(): SubscriptionService {
  return { createCheckout, manageSubscription, syncSubscription }
}
