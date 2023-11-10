import { subscribeWithSelector } from "zustand/middleware"
import { createStore } from "zustand/vanilla"
import { generateId } from "@/utilities/string"
import type { Checkout } from "@/types/Checkout"
import type { PaymentService } from "@/types/PaymentService"

const {
  getState: getCheckouts,
  setState: setCheckout,
  subscribe,
} = createStore<Record<string, Checkout[]>>()(subscribeWithSelector(() => ({})))

const inMemoryPaymentService: PaymentService = {
  createPaymentCheckout(userId, _priceId) {
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
            cancelUrl: window.location.origin,
            id,
            priceId: _priceId,
            response: { status: "pending" },
            successUrl: window.location.origin,
          }
          setCheckout({ [userId]: existingCheckouts.toSpliced(0, 0, checkout) })
          return resolve(id)
        } else {
          return reject(new Error("[createCheckout] Simulated Network Error!"))
        }
      }, 1000)
    })
  },
  subscribeToPaymentCheckout(userId, checkoutId, onChange) {
    return subscribe(
      store => store[userId]?.find(checkout => checkout.id === checkoutId),
      checkout => checkout && onChange(checkout)
    )
  },
}

export default inMemoryPaymentService
