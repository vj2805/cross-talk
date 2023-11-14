import { generateId } from "@/utilities/string"
import {
  getInMemoryState,
  setInMemoryState,
  subscribeToInMemoryStore,
} from "./store"
import type { PaymentService } from "@/types/PaymentService"

const inMemoryPaymentService: PaymentService = {
  createPaymentCheckout(userId, _priceId) {
    return new Promise((resolve, reject) => {
      const existingCheckouts = getInMemoryState("checkouts")[userId] ?? []
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
          setInMemoryState("checkouts", checkouts => ({
            ...checkouts,
            [userId]: existingCheckouts.toSpliced(0, 0, {
              cancelUrl: window.location.origin,
              id,
              priceId: _priceId,
              response: { status: "pending" },
              successUrl: window.location.origin,
            }),
          }))
          setTimeout(() => {
            const response = window.confirm(
              [
                "This is a simulated payment session!",
                "Click OK to simulate SUCCESS / Click CANCEL to simulate CANCEL",
              ].join("\n")
            )
            const index = existingCheckouts?.findIndex(
              checkout => checkout.id === id
            )
            if (response) {
              setInMemoryState("checkouts", checkouts => ({
                ...checkouts,
                [userId]: existingCheckouts.with(index, {
                  ...existingCheckouts[index],
                  response: {
                    status: "success",
                    url: null,
                  },
                }),
              }))
              setInMemoryState("subscriptions", subscriptions => ({
                ...subscriptions,
                [userId]: (subscriptions[userId] ?? []).toSpliced(0, 0, {
                  id: generateId(),
                  role: null,
                  status: "active",
                }),
              }))
            } else {
              setInMemoryState("checkouts", checkouts => ({
                ...checkouts,
                [userId]: existingCheckouts.with(index, {
                  ...existingCheckouts[index],
                  response: {
                    error: new Error(
                      "[createCheckout] Simulated Payment Failure!"
                    ),
                    status: "failure",
                  },
                }),
              }))
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
    return subscribeToInMemoryStore(
      "checkouts",
      checkouts =>
        checkouts[userId]?.find(checkout => checkout.id === checkoutId),
      checkout => checkout && onChange(checkout),
      {
        fireImmediately: true,
      }
    )
  },
}

export default inMemoryPaymentService
