import { PaymentError } from "@/errors/PaymentError"
import { generateId } from "@/utilities/string"
import { get, set, subscribe } from "./store"
import type { PaymentService } from "@/types/PaymentService"

const inmemoryPaymentService: PaymentService = {
  async createPaymentCheckout({ listener, priceId, userId }) {
    if (
      get("checkouts").find(
        checkout =>
          checkout.id.includes(userId) && checkout.response.status === "pending"
      )
    ) {
      throw new PaymentError("A checkout session is already pending!")
    }

    const id = `user:${userId}:checkout:${generateId()}`

    set("checkouts", checkouts =>
      checkouts.toSpliced(-1, 0, {
        cancelUrl: window.location.origin,
        id,
        priceId,
        response: { status: "pending" },
        successUrl: window.location.origin,
      })
    )

    setTimeout(() => {
      set("checkouts", checkouts =>
        checkouts.map(checkout =>
          checkout.id !== id
            ? checkout
            : {
                ...checkout,
                response: {
                  status: "success" as const,
                  url: null,
                },
              }
        )
      )
    }, 2500)

    return subscribe("checkouts", checkouts => {
      const checkout = checkouts.find(checkout => checkout.id === id)
      if (!checkout) {
        return
      }
      listener(checkout)
    })
  },
}

export default inmemoryPaymentService
