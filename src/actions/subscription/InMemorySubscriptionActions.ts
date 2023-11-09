"use server"

import { getServerUser } from "@services/auth"
import { subscriptions } from "@services/subscription/InMemorySubscriptionService"
import type { SubscriptionActions } from "./SubscriptionActions"

async function manageSubscription() {
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

export default function createInMemorySubscriptionActions(): SubscriptionActions {
  return { manageSubscription }
}
