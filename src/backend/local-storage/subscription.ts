import { getFromStorage, setToStorage } from "@/utilities/storage"
import { generateId } from "@/utilities/string"
import { CheckoutError } from "@/errors/CheckoutError"
import type { SubscriptionService } from "@/types/SubscriptionService"

const SUBSCRIPTION_KEY = "subscription"

const localStorageSubscriptionService: SubscriptionService = {
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
          setToStorage(`${userId}/${SUBSCRIPTION_KEY}`, {
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
    setTimeout(() => {
      onChange(getFromStorage(`${userId}/${SUBSCRIPTION_KEY}`) ?? null)
    }, 1000)
    return () => {}
  },
}

export default localStorageSubscriptionService
