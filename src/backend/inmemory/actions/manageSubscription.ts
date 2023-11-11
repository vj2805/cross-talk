"use server"

import { getServerUser } from "@/services/auth"

export async function manageSubscription() {
  const user = await getServerUser()

  if (!user) {
    throw new Error("[manageSubscription] User not found!")
  }

  const frozen = Date.now()
  while (Date.now() - frozen < 2000) {}

  console.error(
    [
      "[manageSubscription] This is a simulated manageSubscription!",
      "Reload the browser if you wish to cancel existing subscriptions.",
    ].join("\n")
  )
}
