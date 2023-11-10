import { createStore } from "zustand/vanilla"
import { subscribeWithSelector } from "zustand/middleware"
import { generateId } from "@utilities/string"
import type { PaymentService } from "@/types/PaymentService"
import type { Checkout } from "@/types/Checkout"

const {
  getState: getCheckouts,
  setState: setCheckout,
  subscribe,
} = createStore<Record<string, Checkout[]>>()(subscribeWithSelector(() => ({})))

const inMemoryPaymentService: PaymentService = {
  createCheckout(userId, _priceId) {
    return new Promise((resolve, reject) => {
      const existingCheckouts = getCheckouts()[userId] ?? []
      if (
        existingCheckouts.some(
          checkout => checkout.response.status === "pending"
        )
      ) {
        return reject(new Error("[createCheckout] A pending checkout exists!"))
      }
      setTimeout(() => {
        const response = window.confirm(
          [
            "This is a simulated checkout session!",
            "Click OK to simulate SUCCESS / Click CANCEL to simulate NETWORK ERROR",
          ].join("\n")
        )
        if (response) {
          const id = generateId()
          const checkout: Checkout = {
            cancel_url: window.location.origin,
            id,
            price: _priceId,
            response: { status: "pending" },
            success_url: window.location.origin,
          }
          setCheckout({ [userId]: existingCheckouts.toSpliced(0, 0, checkout) })
          return resolve(id)
        } else {
          return reject(new Error("[createCheckout] Simulated Network Error!"))
        }
      }, 1000)
    })
  },
  subscribeToCheckout(checkoutId, listener) {
    return subscribe(
      store => store[checkoutId]?.find(checkout => checkout.id === checkoutId),
      checkout => checkout && listener(checkout)
    )
  },
}

export default inMemoryPaymentService
