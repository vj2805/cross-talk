import { generateId } from "@utilities/string"
import type { PaymentService } from "@/types/PaymentService"
import type { Checkout } from "@/types/Checkout"

const checkouts = new Map<string, Checkout[]>()

const inMemoryPaymentService: PaymentService = {
  createCheckout(userId, _priceId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = window.confirm(
          [
            "This is a simulated checkout session!",
            "Click OK to simulate SUCCESS / Click CANCEL to simulate NETWORK ERROR",
          ].join("\n")
        )
        if (response) {
          const existingCheckouts = checkouts.get(userId) ?? []
          const id = generateId()
          checkouts.set(
            userId,
            existingCheckouts.toSpliced(0, 0, {
              cancel_url: window.location.origin,
              id,
              price: _priceId,
              response: { status: "loading" },
              success_url: window.location.origin,
            })
          )
          resolve(id)
        } else {
          reject(new Error("[createCheckout] Simulated Network Error!"))
        }
      }, 1000)
    })
  },
}

export default inMemoryPaymentService
