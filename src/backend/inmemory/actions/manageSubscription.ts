"use server"

import { getServerUser } from "@/services/auth"
import { getSubscriptions, setSubscription } from "../services/subscription"

export async function manageSubscription() {
  const user = await getServerUser()

  if (!user) {
    throw new Error("[manageSubscription] User not found!")
  }

  const subscription = getSubscriptions()[user.id]?.find(
    subscription => subscription.status === "active"
  )

  if (!subscription) {
    return new Error("[manageSubscription] User has no active subscriptions!")
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
        setSubscription(store => ({ [user.id]: [...store[user.id]] }))
      }
      resolve()
    }, 1000)
  })
}
