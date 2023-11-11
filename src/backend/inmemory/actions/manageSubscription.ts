"use server"

import { getServerUser } from "@/services/auth"

export async function manageSubscription() {
  const user = await getServerUser()

  if (!user) {
    throw new Error("[manageSubscription] User not found!")
  }

  await new Promise<void>(() => {
    setTimeout(() => {
      console.info(
        new Error(
          [
            "[manageSubscription] This is a simulated manageSubscription!",
            "Reload the browser if you wish to cancel existing subscriptions.",
          ].join("\n")
        )
      )
    }, 1000)
  })
}
