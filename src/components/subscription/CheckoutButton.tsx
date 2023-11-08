"use client"

import { useSubscription } from "@stores/subscription"
import { useCheckoutSession, useSession } from "@hooks"
import { cn } from "@utilities"
import { Spinner } from "@ui"
import { ManageSubscriptionButton } from "./ManageSubscriptionButton"

interface CheckoutButtonProps {
  priceId: string
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const { data: session } = useSession()
  const { createCheckoutSession, processing } = useCheckoutSession({
    priceId,
    session,
  })
  const subscription = useSubscription()

  return (
    <div className="flex flex-col space-y-2">
      <div
        className={cn(
          "mt-8",
          "block",
          "px-3.5 py-2",
          "bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50",
          "text-center text-sm font-semibold leading-6 text-white disabled:text-white",
          "rounded-md",
          "shadow-sm",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          "cursor-pointer  disabled:cursor-default",
          "disabled:opacity-80"
        )}
      >
        {subscription === undefined || processing ? (
          <Spinner />
        ) : subscription?.status === "active" ? (
          <ManageSubscriptionButton />
        ) : (
          <button onClick={createCheckoutSession}>Subscribe</button>
        )}
      </div>
    </div>
  )
}
