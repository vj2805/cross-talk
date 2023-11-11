import { subscribeWithSelector } from "zustand/middleware"
import { createStore } from "zustand/vanilla"
import { generateId } from "@/utilities/string"
import { setSubscription } from "./subscription"
import type { Checkout } from "@/types/Checkout"
import type { PaymentService } from "@/types/PaymentService"
import type { User } from "@/types/User"

const {
  getState: getCheckouts,
  setState: setCheckout,
  subscribe,
} = createStore<Record<User["id"], Checkout[]>>()(
  subscribeWithSelector(() => ({}))
)

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
          setCheckout({
            [userId]: existingCheckouts.toSpliced(0, 0, {
              cancelUrl: window.location.origin,
              id,
              priceId: _priceId,
              response: { status: "pending" },
              successUrl: window.location.origin,
            }),
          })
          setTimeout(() => {
            const response = window.confirm(
              [
                "This is a simulated payment session!",
                "Click OK to simulate SUCCESS / Click CANCEL to simulate CANCEL",
              ].join("\n")
            )
            const existingCheckouts = getCheckouts()[userId]
            const index = existingCheckouts?.findIndex(
              checkout => checkout.id === id
            )
            if (response) {
              setCheckout({
                [userId]: existingCheckouts.with(index, {
                  ...existingCheckouts[index],
                  response: {
                    status: "success",
                    url: null,
                  },
                }),
              })
              setSubscription(store => ({
                [userId]: (store[userId] ?? []).toSpliced(0, 0, {
                  id: generateId(),
                  role: null,
                  status: "active",
                }),
              }))
            } else {
              setCheckout({
                [userId]: existingCheckouts.with(index, {
                  ...existingCheckouts[index],
                  response: {
                    error: new Error(
                      "[createCheckout] Simulated Payment Failure!"
                    ),
                    status: "failure",
                  },
                }),
              })
            }
          }, 3000)
          return resolve(id)
        } else {
          return reject(new Error("[createCheckout] Simulated Network Error!"))
        }
      }, 1000)
    })
  },
  subscribeToPaymentCheckout(userId, checkoutId, onChange) {
    const checkout = getCheckouts()[userId]?.find(
      checkout => checkout.id === checkoutId
    )
    checkout && onChange(checkout)
    return subscribe(
      store => store[userId]?.find(checkout => checkout.id === checkoutId),
      checkout => checkout && onChange(checkout)
    )
  },
}

export default inMemoryPaymentService
